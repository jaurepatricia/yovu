## Goal

Add the `SpotlightCard` primitive to `src/components/ui/` and use it to wrap the two cards in the Security section (E&O Audit Logs + SOC 2 Certified), so a mouse-following radial glow appears on hover — tuned to the Evergreen Signal palette.

## Changes

1. **New `src/components/ui/spotlight-card.tsx`**
   - Reconstruct the canonical `SpotlightCard` (the paste was JSX-stripped). API:
     - Props: `children`, `className`, `spotlightColor?: string` (default `rgba(16,185,129,0.25)` — signal green), plus all `HTMLAttributes<HTMLDivElement>`.
     - `useRef` on the wrapping `div`; `useState` for `position` and `opacity`.
     - `onMouseMove` updates position from `getBoundingClientRect`; `onMouseEnter` sets opacity 1; `onMouseLeave` sets 0.
   - Render: a `relative overflow-hidden` div with the supplied `className`, an absolutely-positioned spotlight `div` using `background: radial-gradient(circle at Xpx Ypx, spotlightColor, transparent 40%)` and `opacity` transitioned over ~500ms, plus the children rendered above it.
   - No hardcoded colors beyond the default prop; consumer controls surface.

2. **Update `src/components/yovu/Security.tsx`**
   - Wrap the dark E&O card (`lg:col-span-7`) with `SpotlightCard`, passing `spotlightColor="rgba(16,185,129,0.22)"` and keeping all current classes/content on the SpotlightCard root.
   - Wrap the SOC 2 card with `SpotlightCard`, `spotlightColor="rgba(16,185,129,0.14)"` (lighter on the light surface).
   - No copy, layout, icon, or grid-structure changes.

## Out of scope

- No changes elsewhere; no new dependencies; no demo file.
