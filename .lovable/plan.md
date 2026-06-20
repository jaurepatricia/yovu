## Issue
The `<Nav>` is rendered as a sibling above `<Hero>` and reserves an `h-16` (64px) block in normal flow. Even though the nav pill itself is transparent, that 64px slot pushes the Hero down so the parallax video starts below — not behind — the nav.

## Fix
Take the nav out of the document flow so it floats over the Hero from the very top of the page.

**`src/components/yovu/Nav.tsx`**
- Change the outer `<nav>` from `sticky top-0 z-50 h-16` to `fixed inset-x-0 top-0 z-50` (no reserved height).
- Keep the inner floating pill (`mt-3`, frosted glass, etc.) unchanged.

**`src/components/yovu/Hero.tsx`** — no change needed. The sticky stage is already `top-0 h-screen`, so with the nav out of flow the parallax sequence will start flush with the top of the viewport and render behind the floating pill.

## Out of scope
- Nav pill styling, links, copy
- Any other section's spacing (subsequent sections still start after the Hero's `min-h-[180vh]` track, unchanged)
- Hero content, headline bloom, CTAs, or scroll math
