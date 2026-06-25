# Add Canadian maple leaf to "Proudly Canadian" card

Edit `src/components/yovu/Canada.tsx` headline card (the `lg:col-span-5` div):

1. **Layout**: change card to `flex flex-col justify-center` so the icon + headline + button group is vertically centered in the container while remaining left-aligned. Keep existing padding and ring.

2. **Icon**: add a maple-leaf icon above the headline, matching the right-column icon treatment — a `size-12` rounded square chip (`rounded-xl bg-canvas ring-1 ring-border`) containing a `size-5` stroked maple leaf in `text-signal`.
   - Lucide has no maple leaf, so inline a small custom SVG component at the top of the file using `stroke="currentColor"`, `strokeWidth={1.5}`, `fill="none"`, `strokeLinejoin="round"` to match Lucide's outline style.
   - Path: a standard 11-point Canadian maple leaf outline scaled to a 24×24 viewBox.

3. **Spacing**: replace the headline's `mt-3` with appropriate spacing now that the icon sits above it (`mt-6`), and keep the button's `mt-10`.

No other files change. Tokens (`text-signal`, `bg-canvas`, `ring-border`) already match the rest of the section.
