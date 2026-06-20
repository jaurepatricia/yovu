## Change

In `src/components/yovu/Nav.tsx`, swap the matte-glass layer for a clean opaque bar with a single hairline bottom border that matches the rings used elsewhere on the page (`border-border`, same token as the cards/buttons).

### `src/components/yovu/Nav.tsx`

- **`<nav>`**: drop `pointer-events-none` (no more soft fade zone) — keep `fixed inset-x-0 top-0 z-50`.
- **Glass layer div**: remove entirely. No more `backdrop-blur`, `backdrop-saturate`, or mask-image fade.
- **Content row wrapper**: change to a full-width bar — `relative border-b border-border bg-canvas`, then an inner `mx-auto max-w-6xl px-6 py-3 flex items-center justify-between` for the existing content.
- Logo, links, ThemeToggle, Log In, and the signal "Get a Demo" button stay exactly as they are.

### Keep

- Hero (unchanged, still renders behind the fixed nav with no top whitespace since nav is `fixed`).
- All link labels, ThemeToggle, CTA styling.

### Out of scope

Hero, theme tokens, link hover behavior, mobile menu.
