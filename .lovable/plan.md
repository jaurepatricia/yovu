## Change

Replace the floating pill in `src/components/yovu/Nav.tsx` with a full-width matte-glass bar that fades out at the bottom edge (no hard line).

### `src/components/yovu/Nav.tsx`

- **Line 12 `<nav>`**: keep `fixed inset-x-0 top-0 z-50`, add `pointer-events-none` so the soft fade area below the bar doesn't block clicks.
- **Line 13 inner container**: split into two stacked layers inside the nav:
  1. **Glass layer** — full-width, absolutely positioned at the top, ~64–72px tall, `bg-canvas/50 backdrop-blur-xl backdrop-saturate-150`, masked with a `mask-image: linear-gradient(to bottom, black 60%, transparent)` so the blur/tint softly dissipates into the hero with no hard bottom border. No ring, no rounded corners, no shadow.
  2. **Content row** — `relative` wrapper with `pointer-events-auto`, `mx-auto max-w-6xl px-6 py-3 flex items-center justify-between`. Keep logo, links, ThemeToggle, Log In, and the signal "Get a Demo" button exactly as they are.

### Keep

- Links array, labels, ThemeToggle, Log In link, signal CTA styling, fonts.
- Hero stays untouched (it already renders behind the fixed nav).

### Out of scope

Hero, theme tokens, link hover behavior, mobile menu.

## Technical notes

- Use Tailwind `backdrop-blur-xl backdrop-saturate-150` — do NOT hand-write `-webkit-backdrop-filter` (Lightning CSS would drop the standard property).
- Soft fade via Tailwind arbitrary `[mask-image:linear-gradient(to_bottom,black_60%,transparent)]` on the glass layer; this avoids a visible border at the bottom.
