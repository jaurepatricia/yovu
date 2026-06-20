## Change

Update `src/components/yovu/Nav.tsx` glass layer: drop the soft mask fade, give it a defined height matching the content row, and add a hairline bottom border using the same `border-border/50` token used elsewhere.

### `src/components/yovu/Nav.tsx`

- **Glass layer div**: remove `h-24` and the `[mask-image:...]` + `[-webkit-mask-image:...]` arbitrary classes. Replace with `bottom-0` so it spans exactly the nav content height, and add `border-b border-border/50` for the hairline.
- Keep `bg-canvas/50 backdrop-blur-xl backdrop-saturate-150`.
- Content row, links, CTAs, and outer `<nav>` unchanged.

### Out of scope

Hero, theme tokens, other components.
