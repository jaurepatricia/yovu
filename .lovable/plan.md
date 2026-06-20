## Goal
Modernize the top nav into a floating, frosted-glass pill so the hero shows through it.

## Changes — `src/components/yovu/Nav.tsx`
- Outer `<nav>`: keep `sticky top-0 z-50 h-16`, but drop the solid background and bottom border. It becomes a transparent track.
- Inner container: convert to a centered floating pill:
  - `mx-auto mt-3 max-w-6xl` (sits inset from the screen edges)
  - `rounded-full` to match the CTA buttons
  - `bg-canvas/40` + `backdrop-blur-xl` + `backdrop-saturate-150` for matte-glass
  - `ring-1 ring-border/50` and a soft `shadow-lg shadow-ink/5`
  - Reduce inner padding to `pl-5 pr-2 py-2` so the "Get a Demo" pill nests cleanly inside
- Links, logo, theme toggle, and CTA stay as-is (logo slightly tightened spacing if needed).

No change to nav height/offset (still 64px), so `Hero`'s `sticky top-16` continues to align.

## Out of scope
- Mobile menu behavior, link list, copy, or routing
- Hero, buttons, or any other section

## Technical notes
- Uses Tailwind's `backdrop-blur` utilities (Lightning CSS adds vendor prefixes automatically — no hand-written `-webkit-` rules).
- Semantic tokens only (`bg-canvas`, `ring-border`) so it works in light and dark.
