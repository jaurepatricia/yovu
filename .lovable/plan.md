## Change

In `src/components/yovu/Hero.tsx`, remove the gradient overlay that fades the hero frame sequence into the canvas color:

- **Line 46**: Delete the `<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas" />` element sitting inside the parallax background wrapper. This is the subtle gradient visible over the hero in both light and dark mode.

## Keep

- The soft bloom halo behind the headline (lines 54–66) stays untouched — it's the readability effect behind the H1/subcopy.
- No changes to scroll math, CTAs, frame sequence, or Nav.

## Out of scope

Any other section, theme tokens, or Nav styling.
