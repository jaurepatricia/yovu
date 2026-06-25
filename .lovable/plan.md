In `src/components/yovu/Canada.tsx`:

1. On the pillar card row (line 69), change `items-start` to `items-center` so the icon sits vertically centered in the card next to the text.
2. On the icon wrapper (line 71), drop the fixed `size-12` box and use a simple `shrink-0` container so the icon no longer has a square footprint behind it.
3. Bump the icon size from `size-5` to `size-7` (line 72) for a slightly larger presence.

No other components or copy are affected.