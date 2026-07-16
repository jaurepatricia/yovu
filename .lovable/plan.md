# Make sticky notes resilient to layout changes

Today notes are pinned by absolute `pageX`/`pageY` on the document. If a section is removed, resized, or reordered, the coordinates stay put but the content underneath changes — the note ends up floating over the wrong thing or off-screen. Fix: anchor each note to the nearest identifiable section and store an offset *relative to that section*, then compute the on-screen position at render time from the anchor's live position.

## What changes

### 1. Data model (Supabase `review_notes` table)

Add two nullable columns (existing rows keep working):

- `anchor_id text` — the anchor element's stable identifier (e.g. `"features"`, `"hero"`).
- `rel_x real`, `rel_y real` — offset within the anchor, stored as fractions of its width/height (0–1). Fractions, not pixels, so a section that grows/shrinks vertically keeps the note in roughly the same visual spot.

Existing `x`/`y` columns stay as a fallback for legacy notes and for anchor-not-found recovery.

### 2. Placement (when the user clicks to pin)

On click:
1. Use `document.elementsFromPoint(clientX, clientY)` to find what's under the cursor.
2. Walk up to the nearest ancestor that is a `<section>` **or** has an `id` **or** has a new `data-note-anchor="<name>"` attribute.
3. Read that anchor's `getBoundingClientRect()`, compute `rel_x = (pageX - anchorLeft) / anchorWidth`, same for y.
4. Save `{ anchor_id, rel_x, rel_y }` plus the legacy `x`/`y` as a fallback.

If nothing anchor-worthy is found (rare — root `<body>` is the last resort), fall back to the current absolute behavior.

### 3. Rendering

For each note:
1. Look up the anchor element by id (or `[data-note-anchor="…"]`).
2. If found: position = `anchorRect.top + pageYOffset + rel_y * anchorRect.height` (same for x). Recompute on scroll/resize with a `ResizeObserver` on the anchor + a window resize listener so the note tracks layout changes.
3. If not found (anchor was deleted): fall back to the stored absolute `x`/`y` and show a small "⚠ anchor missing" badge on the note so reviewers know the surrounding content has changed.

### 4. Drag behavior

Dragging updates `rel_x`/`rel_y` against the same anchor (not re-anchoring mid-drag). If the user drags outside the current anchor's bounds, we re-anchor on drop to whatever section they landed on. Persisted once on pointer-up, same as today.

### 5. Section tagging pass

Most top-level sections already render a `<section>`; a few (Hero, Features) also have ids. To make anchor names stable and human-readable, add `data-note-anchor="<slug>"` to each major section wrapper on the homepage and the sub-pages (Communicate, Salesforce, Teams, Applied Epic, Pricing). This is a light one-time pass — no visual change.

## Scroll parallax — what to expect

Your Hero uses a scroll-scrubbed mountain video, and other sections use `motion` reveal animations. Two cases:

- **Reveal / fade / slide-in animations** (most sections, `ZLayout`, `IndividualFeatureCards`, etc.): these transform *children inside* the section, not the section wrapper itself. If we anchor to the `<section>` wrapper, the note stays glued to the section's layout position and does **not** jitter with the inner animations. This is what you want.
- **Scroll-scrubbed Hero video**: the video fills the Hero section but the `<section id="top">` wrapper itself doesn't move — only the canvas frames inside it change. So a note pinned in the Hero will stay put over the Hero area as you scroll, exactly like it does today. It won't "ride" the parallax video (which would feel unpleasant anyway, since the video isn't real depth — it's a frame swap).

Net effect: notes feel stuck to the *section*, not to individual animated layers. That's the resilient behavior you want. If you ever add a section whose wrapper itself is transformed on scroll (uncommon), we can opt that one out by anchoring to an inner static child via `data-note-anchor`.

## Files touched

- `src/components/yovu/StickyNotes.tsx` — placement, rendering, drag, fallback badge, anchor lookup helpers.
- One new Supabase migration adding `anchor_id`, `rel_x`, `rel_y` to `review_notes` (existing notes unaffected; new columns nullable).
- Light `data-note-anchor` tagging across top-level section wrappers in `src/components/yovu/*` and route files.

## Not changing

- Passphrase gate, Realtime sync, resolve flow, Nav trigger UI — all stay identical.
- Existing pinned notes keep working via the legacy `x`/`y` fallback until they're resolved or dragged (a drag will upgrade them to the new anchor model automatically).
