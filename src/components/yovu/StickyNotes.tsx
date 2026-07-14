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
 */
import { useSyncExternalStore, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { createClient } from "@supabase/supabase-js";
import { StickyNote, Check, GripVertical, Lock } from "lucide-react";
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
  x: number;
  y: number;
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
async function placeAt(x: number, y: number, pathname: string) {
  if (!draft) return;
  const payload = { author: draft.author, text: draft.text, pathname, x, y };
  draft = null;
  commit();
  await supabase.from("review_notes").insert(payload); // Realtime echoes it back
}
// Live drag updates local state only; persisted once on drop.
function setLocalPosition(id: string, x: number, y: number) {
  notes = notes.map((n) => (n.id === id ? { ...n, x, y } : n));
  commit();
}
async function commitPosition(id: string, x: number, y: number) {
  await supabase.from("review_notes").update({ x, y }).eq("id", id);
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
          <StickyNote className="size-5" />
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
          onClick={(e) => placeAt(e.pageX, e.pageY, pathname)}
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

function PinnedNote({ note }: { note: Note }) {
  const dragging = useRef<{ dx: number; dy: number; x: number; y: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    dragging.current = { dx: e.pageX - note.x, dy: e.pageY - note.y, x: note.x, y: note.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const x = e.pageX - dragging.current.dx;
    const y = e.pageY - dragging.current.dy;
    dragging.current.x = x;
    dragging.current.y = y;
    setLocalPosition(note.id, x, y);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragging.current) {
      void commitPosition(note.id, dragging.current.x, dragging.current.y);
    }
    dragging.current = null;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div
      style={{ left: note.x, top: note.y }}
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
