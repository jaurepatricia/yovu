/**
 * TEMPORARY REVIEW TOOL — shared sticky notes for internal website review.
 *
 * ⚠️ REMOVE BEFORE GOING LIVE. Teardown is fully contained:
 *   1. Delete this file (src/components/yovu/StickyNotes.tsx).
 *   2. Remove <StickyNoteTrigger /> from src/components/yovu/Nav.tsx (+ import).
 *   3. Remove <StickyNoteLayer /> from src/routes/__root.tsx (+ import).
 *   4. In Supabase: `drop table public.review_notes;`
 *   5. (optional) `npm remove @supabase/supabase-js`.
 *
 * Notes are stored in Supabase and synced live across everyone's browser via
 * Realtime. The publishable key below is client-safe; data is protected by the
 * row-level-security policy on the review_notes table. Access to the tool is
 * gated by a shared team passphrase (client-side — see REVIEW_PASSPHRASE).
 *
 * ANCHORING (v2): Notes are pinned to the nearest identifiable ancestor
 * ("anchor") and stored as a fractional offset (rel_x, rel_y) inside that
 * anchor, so notes track layout changes. Legacy absolute x/y are kept as a
 * fallback for older rows and for when an anchor no longer exists on the page.
 *
 * Required DB columns (nullable, additive):
 *   alter table public.review_notes
 *     add column if not exists anchor_id text,
 *     add column if not exists rel_x real,
 *     add column if not exists rel_y real;
 */
import { useSyncExternalStore, useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { createClient } from "@supabase/supabase-js";
import { StickyNote, Check, GripVertical, Lock, AlertTriangle } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

// --- Supabase (publishable/anon key is safe to ship to the browser) ---------
const SUPABASE_URL = "https://futjcrecojdzklzqjkjd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_X1PvRAo7v3_61YrUzntQQw_0a0mcbs4";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Reviewers answer this once to unlock the tool (case-insensitive).
const REVIEW_QUESTION = "Who is Mariano's alter ego?";
const REVIEW_ANSWER = "fairiano";
const UNLOCK_KEY = "yovu_review_unlocked";
const AUTHOR_KEY = "yovu_sticky_author";

type Note = {
  id: string;
  author: string;
  text: string;
  pathname: string;
  x: number; // legacy absolute page coords (fallback)
  y: number;
  anchor_id: string | null;
  rel_x: number | null; // 0..1 within anchor
  rel_y: number | null;
};

type Snapshot = {
  notes: Note[];
  draft: { author: string; text: string } | null;
  unlocked: boolean;
};

// ---------------------------------------------------------------------------
// Shared store (nav trigger + overlay layer both read this)
// ---------------------------------------------------------------------------
let notes: Note[] = [];
let draft: Snapshot["draft"] = null;
let unlocked = typeof window !== "undefined" && window.localStorage.getItem(UNLOCK_KEY) === "1";
let snapshot: Snapshot = { notes, draft, unlocked };
const listeners = new Set<() => void>();
const SERVER_SNAPSHOT: Snapshot = { notes: [], draft: null, unlocked: false };

function commit() {
  snapshot = { notes, draft, unlocked };
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

function useStore(): Snapshot {
  return useSyncExternalStore(
    subscribe,
    () => snapshot,
    () => SERVER_SNAPSHOT,
  );
}

function rowToNote(r: Record<string, unknown>): Note {
  return {
    id: String(r.id),
    author: String(r.author ?? ""),
    text: String(r.text ?? ""),
    pathname: String(r.pathname ?? ""),
    x: Number(r.x ?? 0),
    y: Number(r.y ?? 0),
    anchor_id: r.anchor_id == null ? null : String(r.anchor_id),
    rel_x: r.rel_x == null ? null : Number(r.rel_x),
    rel_y: r.rel_y == null ? null : Number(r.rel_y),
  };
}

// Load once (browser only) and keep in sync via Realtime.
let initialized = false;
function initBackend() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  supabase
    .from("review_notes")
    .select("*")
    .then(({ data }) => {
      if (data) {
        notes = data.map(rowToNote);
        commit();
      }
    });

  supabase
    .channel("review_notes_changes")
    .on("postgres_changes", { event: "*", schema: "public", table: "review_notes" }, (payload) => {
      if (payload.eventType === "INSERT") {
        const n = rowToNote(payload.new);
        if (!notes.some((x) => x.id === n.id)) notes = [...notes, n];
      } else if (payload.eventType === "UPDATE") {
        const n = rowToNote(payload.new);
        notes = notes.map((x) => (x.id === n.id ? n : x));
      } else if (payload.eventType === "DELETE") {
        const id = String((payload.old as Record<string, unknown>).id);
        notes = notes.filter((x) => x.id !== id);
      }
      commit();
    })
    .subscribe();
}

function unlock(answer: string): boolean {
  if (answer.trim().toLowerCase() !== REVIEW_ANSWER) return false;
  unlocked = true;
  window.localStorage.setItem(UNLOCK_KEY, "1");
  commit();
  return true;
}

function beginPlacement(d: { author: string; text: string }) {
  draft = d;
  commit();
}
function cancelPlacement() {
  draft = null;
  commit();
}

// ---------------------------------------------------------------------------
// Anchor resolution
// ---------------------------------------------------------------------------
// Anchor key formats (all stable-ish across content edits):
//   "a:<name>"    — element with data-note-anchor="<name>"    (most stable)
//   "id:<name>"   — element with id="<name>"                   (very stable)
//   "tag:<tag>:<i>" — nth ancestor of tag (section/footer/header/main/article)
//                     among all same-tag elements in the document (best-effort)
const ANCHORABLE_TAGS = new Set(["SECTION", "FOOTER", "HEADER", "MAIN", "ARTICLE"]);

function elementAnchorKey(el: Element): string | null {
  const data = (el as HTMLElement).dataset?.noteAnchor;
  if (data) return `a:${data}`;
  if (el.id) return `id:${el.id}`;
  if (ANCHORABLE_TAGS.has(el.tagName)) {
    const tag = el.tagName.toLowerCase();
    const all = Array.from(document.getElementsByTagName(tag));
    const idx = all.indexOf(el as HTMLElement);
    if (idx >= 0) return `tag:${tag}:${idx}`;
  }
  return null;
}

// Walk up from `start` to the nearest ancestor we can key. Prefer
// data-note-anchor / id (declared intent) over tag-index fallback.
function findAnchor(start: Element | null): { el: HTMLElement; key: string } | null {
  let bestFallback: { el: HTMLElement; key: string } | null = null;
  let el: Element | null = start;
  while (el && el !== document.body) {
    const html = el as HTMLElement;
    const data = html.dataset?.noteAnchor;
    if (data) return { el: html, key: `a:${data}` };
    if (html.id) return { el: html, key: `id:${html.id}` };
    if (!bestFallback && ANCHORABLE_TAGS.has(html.tagName)) {
      const key = elementAnchorKey(html);
      if (key) bestFallback = { el: html, key };
    }
    el = el.parentElement;
  }
  return bestFallback;
}

function resolveAnchor(key: string | null): HTMLElement | null {
  if (!key || typeof document === "undefined") return null;
  if (key.startsWith("a:")) {
    return document.querySelector<HTMLElement>(`[data-note-anchor="${CSS.escape(key.slice(2))}"]`);
  }
  if (key.startsWith("id:")) {
    return document.getElementById(key.slice(3));
  }
  if (key.startsWith("tag:")) {
    const rest = key.slice(4);
    const sep = rest.lastIndexOf(":");
    if (sep < 0) return null;
    const tag = rest.slice(0, sep);
    const idx = Number(rest.slice(sep + 1));
    const all = document.getElementsByTagName(tag);
    return (all[idx] as HTMLElement | undefined) ?? null;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Placement + drag persistence
// ---------------------------------------------------------------------------
async function placeAt(clientX: number, clientY: number, overlay: HTMLElement, pathname: string) {
  if (!draft) return;

  // Look through the overlay to find the real element the reviewer clicked on.
  const prevPointer = overlay.style.pointerEvents;
  overlay.style.pointerEvents = "none";
  const target = document.elementFromPoint(clientX, clientY);
  overlay.style.pointerEvents = prevPointer;

  const anchor = findAnchor(target);
  const pageX = clientX + window.scrollX;
  const pageY = clientY + window.scrollY;

  let anchor_id: string | null = null;
  let rel_x: number | null = null;
  let rel_y: number | null = null;
  if (anchor) {
    const rect = anchor.el.getBoundingClientRect();
    anchor_id = anchor.key;
    rel_x = rect.width > 0 ? (clientX - rect.left) / rect.width : 0.5;
    rel_y = rect.height > 0 ? (clientY - rect.top) / rect.height : 0.5;
  }

  const payload = {
    author: draft.author,
    text: draft.text,
    pathname,
    x: pageX,
    y: pageY,
    anchor_id,
    rel_x,
    rel_y,
  };
  draft = null;
  commit();
  await supabase.from("review_notes").insert(payload); // Realtime echoes it back
}

// Live drag updates local state only; persisted once on drop.
function setLocalPosition(id: string, patch: Partial<Note>) {
  notes = notes.map((n) => (n.id === id ? { ...n, ...patch } : n));
  commit();
}
async function commitPosition(id: string, patch: Partial<Note>) {
  const update: Record<string, unknown> = {};
  if ("x" in patch) update.x = patch.x;
  if ("y" in patch) update.y = patch.y;
  if ("anchor_id" in patch) update.anchor_id = patch.anchor_id;
  if ("rel_x" in patch) update.rel_x = patch.rel_x;
  if ("rel_y" in patch) update.rel_y = patch.rel_y;
  await supabase.from("review_notes").update(update).eq("id", id);
}
async function resolveNote(id: string) {
  notes = notes.filter((n) => n.id !== id);
  commit();
  await supabase.from("review_notes").delete().eq("id", id);
}

// ---------------------------------------------------------------------------
// Nav trigger — unlock, compose a note, then enter "placement" mode
// ---------------------------------------------------------------------------
export function StickyNoteTrigger() {
  const { notes: all, unlocked: isUnlocked } = useStore();
  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(false);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAuthor(window.localStorage.getItem(AUTHOR_KEY) ?? "");
    }
  }, []);

  const tryUnlock = () => {
    if (unlock(pass)) {
      setPass("");
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  const startPlacing = () => {
    if (!author.trim() || !text.trim()) return;
    window.localStorage.setItem(AUTHOR_KEY, author.trim());
    beginPlacement({ author: author.trim(), text: text.trim() });
    setText("");
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          aria-label="Review sticky notes"
          className="relative flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1.5 text-ink transition-colors hover:bg-accent"
        >
          <StickyNote className="size-5 fill-[#fcd34d] text-[#a16207]" />
          {isUnlocked && all.length > 0 && (
            <span className="flex size-5 items-center justify-center rounded-full bg-signal text-xs font-semibold text-white">
              {all.length}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-4">
        {!isUnlocked ? (
          <>
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <Lock className="size-4" /> Review notes
            </div>
            <p className="mt-1 text-xs text-ink/60">Answer this to unlock shared review notes.</p>
            <label className="mt-3 block text-sm font-medium text-ink">{REVIEW_QUESTION}</label>
            <input
              type="text"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && tryUnlock()}
              placeholder="Your answer"
              className="mt-2 w-full rounded-md border border-border bg-canvas px-3 py-2 text-sm text-ink outline-none focus:ring-2 focus:ring-signal/40"
            />
            {passError && <p className="mt-1 text-xs text-red-500">Not quite — try again.</p>}
            <button
              type="button"
              onClick={tryUnlock}
              className="mt-3 w-full rounded-full bg-signal px-4 py-2 text-sm font-semibold text-white"
            >
              Unlock
            </button>
          </>
        ) : (
          <>
            <div className="text-sm font-semibold text-ink">Add a review note</div>
            <p className="mt-1 text-xs text-ink/60">
              Notes are shared live with everyone reviewing the site.
            </p>

            <label className="mt-3 block text-xs font-medium text-ink/70">
              Your name or initials
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Patricia J."
              className="mt-1 w-full rounded-md border border-border bg-canvas px-3 py-2 text-sm text-ink outline-none focus:ring-2 focus:ring-signal/40"
            />

            <label className="mt-3 block text-xs font-medium text-ink/70">Note</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              placeholder="What would you change here?"
              className="mt-1 w-full resize-none rounded-md border border-border bg-canvas px-3 py-2 text-sm text-ink outline-none focus:ring-2 focus:ring-signal/40"
            />

            <button
              type="button"
              onClick={startPlacing}
              disabled={!author.trim() || !text.trim()}
              className="mt-3 w-full rounded-full bg-signal px-4 py-2 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
            >
              Place note on page
            </button>

            <p className="mt-3 border-t border-border pt-3 text-xs text-ink/60">
              {all.length} note(s) live across the site.
            </p>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}

// ---------------------------------------------------------------------------
// Overlay layer — placement mode + all pinned notes (rendered once, in root)
// ---------------------------------------------------------------------------
export function StickyNoteLayer() {
  const { notes: all, draft, unlocked: isUnlocked } = useStore();
  const location = useLocation();
  const pathname = location.pathname;
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    initBackend();
  }, []);

  useEffect(() => {
    if (!draft) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && cancelPlacement();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [draft]);

  if (!mounted || typeof document === "undefined" || !isUnlocked) return null;

  const pageNotes = all.filter((n) => n.pathname === pathname);

  return createPortal(
    <>
      {draft && (
        <div
          ref={overlayRef}
          onClick={(e) => {
            if (overlayRef.current) placeAt(e.clientX, e.clientY, overlayRef.current, pathname);
          }}
          className="fixed inset-0 z-[120] cursor-crosshair bg-signal/5"
        >
          <div className="pointer-events-none fixed left-1/2 top-6 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas shadow-lg">
            Click anywhere to pin your note · Esc to cancel
          </div>
        </div>
      )}

      {pageNotes.map((note) => (
        <PinnedNote key={note.id} note={note} />
      ))}
    </>,
    document.body,
  );
}

// ---------------------------------------------------------------------------
// Live-positioned pinned note
// ---------------------------------------------------------------------------
function usePinnedPosition(note: Note) {
  // pos in page (document) coordinates
  const [state, setState] = useState<{ x: number; y: number; missing: boolean }>(() => ({
    x: note.x,
    y: note.y,
    missing: false,
  }));

  useLayoutEffect(() => {
    let raf = 0;

    const recompute = () => {
      const anchor = resolveAnchor(note.anchor_id);
      if (anchor && note.rel_x != null && note.rel_y != null) {
        const rect = anchor.getBoundingClientRect();
        const x = rect.left + window.scrollX + note.rel_x * rect.width;
        const y = rect.top + window.scrollY + note.rel_y * rect.height;
        setState({ x, y, missing: false });
      } else {
        setState({ x: note.x, y: note.y, missing: !!note.anchor_id });
      }
    };

    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        recompute();
      });
    };

    recompute();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    // Track anchor size changes (accordions opening, images loading, etc.).
    const anchor = resolveAnchor(note.anchor_id);
    let ro: ResizeObserver | null = null;
    if (anchor && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(schedule);
      ro.observe(anchor);
    }
    // And react to DOM mutations in case the anchor is (re)inserted after load.
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro?.disconnect();
      mo.disconnect();
    };
  }, [note.anchor_id, note.rel_x, note.rel_y, note.x, note.y]);

  return state;
}

function PinnedNote({ note }: { note: Note }) {
  const { x, y, missing } = usePinnedPosition(note);

  const dragging = useRef<{
    startClientX: number;
    startClientY: number;
    startX: number;
    startY: number;
  } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    dragging.current = {
      startClientX: e.clientX,
      startClientY: e.clientY,
      startX: x,
      startY: y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragging.current.startClientX;
    const dy = e.clientY - dragging.current.startClientY;
    const newX = dragging.current.startX + dx;
    const newY = dragging.current.startY + dy;
    // Absolute update during drag; re-anchor happens on drop.
    setLocalPosition(note.id, { x: newX, y: newY, anchor_id: null, rel_x: null, rel_y: null });
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragging.current) {
      // Re-anchor to whatever the user dropped over.
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const anchor = findAnchor(el);
      let patch: Partial<Note>;
      const pageX = e.clientX + window.scrollX;
      const pageY = e.clientY + window.scrollY;
      if (anchor) {
        const rect = anchor.el.getBoundingClientRect();
        patch = {
          x: pageX,
          y: pageY,
          anchor_id: anchor.key,
          rel_x: rect.width > 0 ? (e.clientX - rect.left) / rect.width : 0.5,
          rel_y: rect.height > 0 ? (e.clientY - rect.top) / rect.height : 0.5,
        };
      } else {
        patch = { x: pageX, y: pageY, anchor_id: null, rel_x: null, rel_y: null };
      }
      setLocalPosition(note.id, patch);
      void commitPosition(note.id, patch);
    }
    dragging.current = null;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div
      style={{ left: x, top: y }}
      className="absolute z-[110] w-64 -translate-x-1/2 rounded-lg bg-[#fde68a] text-[#0b1733] shadow-xl ring-1 ring-black/10"
    >
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        className="flex cursor-grab items-center gap-2 rounded-t-lg bg-[#fcd34d] px-3 py-2 active:cursor-grabbing"
      >
        <GripVertical className="size-4 text-[#0b1733]/50" />
        <span className="truncate text-xs font-semibold">{note.author}</span>
        {missing && (
          <span
            title="The section this note was pinned to no longer exists — showing at its last known position."
            className="flex items-center gap-1 rounded-full bg-[#0b1733]/10 px-1.5 py-0.5 text-[10px] font-semibold text-[#7c2d12]"
          >
            <AlertTriangle className="size-3" />
            anchor missing
          </span>
        )}
        <button
          type="button"
          aria-label="Resolve note"
          onClick={() => resolveNote(note.id)}
          className="ml-auto flex items-center gap-1 rounded-full bg-[#0b1733]/10 px-2 py-1 text-[11px] font-semibold hover:bg-[#0b1733]/20"
        >
          <Check className="size-3" />
          Resolve
        </button>
      </div>
      <p className="whitespace-pre-wrap px-3 py-2.5 text-sm leading-relaxed">{note.text}</p>
    </div>
  );
}
