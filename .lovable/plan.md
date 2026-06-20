## Goal
Make the hero parallax frame sequence fill the full viewport (including the area behind the floating nav pill) while it's pinned, until the user scrolls past the last frame. Keep all existing progressive/lazy frame-loading behavior intact.

## Changes

**`src/components/yovu/Hero.tsx`** — sticky stage sizing only:
- Change the sticky stage from `sticky top-16 h-[calc(100vh-4rem)]` to `sticky top-0 h-screen` so the frame canvas spans the entire viewport and renders behind the transparent nav pill.
- Shift the headline/copy block down so it isn't hidden under the nav: add `pt-16` to the centered flex container (keeps optical centering relative to the visible area below the nav).
- Leave the CTA block (`bottom-24`) and mountain parallax wrapper unchanged.
- No change to scroll math: the outer `min-h-[180vh]` and `useScroll` offsets still drive the sequence from frame 0 → last frame across the same scroll distance, so the sequence pins through the full viewport and only releases after the last frame.

**`src/components/yovu/Nav.tsx`** — no functional change required. It's already `sticky top-0 z-50` with a transparent track and a frosted pill, so it will float over the full-bleed hero correctly.

**`ScrollFrameSequence.tsx`** — untouched. Eager-load-first-20 + background batches of 8 + reduced-motion fallback all preserved.

## Out of scope
- Nav styling, links, or layout
- Headline copy, bloom halo, CTA styles
- Frame asset pipeline or loading strategy
- Any section below the hero
