In `src/components/yovu/Canada.tsx`:

1. Replace the `MapleLeaf` SVG component's `viewBox` and `path` with the uploaded `canada-maple-leaf.svg` artwork. The uploaded path is a filled outline shape, so render it with `fill="currentColor"` (not stroke) and `viewBox="0 0 32 32"`, while keeping `aria-hidden`.
2. Remove the surrounding chip box on line 45 (`flex size-12 items-center justify-center rounded-xl bg-canvas ring-1 ring-border`) so the leaf sits directly in the card — matching the pillar icons that no longer have boxes.
3. Render the leaf at `size-7 text-signal` to match the pillar icons' size and blue color.

No other files change.