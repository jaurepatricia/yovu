/**
 * TEMPORARY REVIEW TOOL — sticky notes for internal website review.
 *
 * ⚠️ REMOVE BEFORE GOING LIVE. Teardown is fully contained:
 *   1. Delete this file (src/components/yovu/StickyNotes.tsx).
 *   2. Remove <StickyNoteTrigger /> from src/components/yovu/Nav.tsx (+ its import).
 *   3. Remove <StickyNoteLayer /> from src/routes/__root.tsx (+ its import).
 * Notes live only in each reviewer's browser (localStorage key below); clearing
 * that key, or deleting this feature, removes all notes. Use Export/Import in the
 * panel to share note sets between teammates.
 */
import { useSyncExternalStore, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { StickyNote, Check, GripVertical, Download, Upload } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const STORAGE_KEY = "yovu_sticky_notes_v1";

type Note = {
  id: string;
  author: string;
  text: string;
  pathname: string;
  x: number;
  y: number;
};

type Snapshot = { notes: Note[]; draft: { author: string; text: string } | null };

// ---------------------------------------------------------------------------
// Tiny external store (shared between the nav trigger and the overlay layer)
// ---------------------------------------------------------------------------
function loadNotes(): Note[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Note[]) : [];
  } catch {
    return [];
  }
}

let notes: Note[] = loadNotes();
let draft: Snapshot["draft"] = null;
let snapshot: Snapshot = { notes, draft };
const listeners = new Set<() => void>();
const SERVER_SNAPSHOT: Snapshot = { notes: [], draft: null };

function commit() {
  snapshot = { notes, draft };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }
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

function beginPlacement(d: { author: string; text: string }) {
  draft = d;
  commit();
}
function cancelPlacement() {
  draft = null;
  commit();
}
function placeAt(x: number, y: number, pathname: string) {
  if (!draft) return;
  const id = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
  notes = [...notes, { id, author: draft.author, text: draft.text, pathname, x, y }];
  draft = null;
  commit();
}
function moveNote(id: string, x: number, y: number) {
  notes = notes.map((n) => (n.id === id ? { ...n, x, y } : n));
  commit();
}
function resolveNote(id: string) {
  notes = notes.filter((n) => n.id !== id);
  commit();
}

function initialsOf(author: string) {
  const parts = author.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// ---------------------------------------------------------------------------
// Nav trigger — compose a note, then enter "placement" mode
// ---------------------------------------------------------------------------
export function StickyNoteTrigger() {
  const { notes: all } = useStore();
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    setAuthor(window.localStorage.getItem("yovu_sticky_author") ?? "");
  }, []);

  const startPlacing = () => {
    if (!author.trim() || !text.trim()) return;
    window.localStorage.setItem("yovu_sticky_author", author.trim());
    beginPlacement({ author: author.trim(), text: text.trim() });
    setText("");
    setOpen(false);
  };

  const exportNotes = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(all, null, 2));
      alert(`Copied ${all.length} note(s) to your clipboard as JSON.`);
    } catch {
      alert("Could not access the clipboard.");
    }
  };

  const importNotes = () => {
    const raw = window.prompt("Paste exported notes JSON to merge:");
    if (!raw) return;
    try {
      const incoming = JSON.parse(raw) as Note[];
      if (!Array.isArray(incoming)) throw new Error("bad");
      const byId = new Map(notes.map((n) => [n.id, n]));
      incoming.forEach((n) => byId.set(n.id, n));
      notes = [...byId.values()];
      commit();
      alert(`Imported. ${notes.length} note(s) total.`);
    } catch {
      alert("That didn't look like valid notes JSON.");
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          aria-label="Add a review sticky note"
          className="relative flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1.5 text-ink transition-colors hover:bg-accent"
        >
          <StickyNote className="size-5" />
          {all.length > 0 && (
            <span className="flex size-5 items-center justify-center rounded-full bg-signal text-xs font-semibold text-white">
              {all.length}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-4">
        <div className="text-sm font-semibold text-ink">Add a review note</div>
        <p className="mt-1 text-xs text-ink/60">
          Notes are saved in your browser only. Use Export/Import to share with the team.
        </p>

        <label className="mt-3 block text-xs font-medium text-ink/70">Your name or initials</label>
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

        <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs">
          <span className="text-ink/60">{all.length} note(s) saved</span>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={exportNotes}
              className="inline-flex items-center gap-1 text-ink/70 hover:text-ink"
            >
              <Download className="size-3.5" /> Export
            </button>
            <button
              type="button"
              onClick={importNotes}
              className="inline-flex items-center gap-1 text-ink/70 hover:text-ink"
            >
              <Upload className="size-3.5" /> Import
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// ---------------------------------------------------------------------------
// Overlay layer — placement mode + all pinned notes (rendered once, in root)
// ---------------------------------------------------------------------------
export function StickyNoteLayer() {
  const { notes: all, draft } = useStore();
  const location = useLocation();
  const pathname = location.pathname;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Esc cancels placement mode.
  useEffect(() => {
    if (!draft) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && cancelPlacement();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [draft]);

  if (!mounted || typeof document === "undefined") return null;

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
  const dragging = useRef<{ dx: number; dy: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    dragging.current = { dx: e.pageX - note.x, dy: e.pageY - note.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    moveNote(note.id, e.pageX - dragging.current.dx, e.pageY - dragging.current.dy);
  };
  const onPointerUp = (e: React.PointerEvent) => {
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
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0b1733] text-[10px] font-bold text-[#fde68a]">
          {initialsOf(note.author)}
        </span>
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
