## Logo Carousel Update

Replace the placeholder text logos in `src/components/yovu/LogoCarousel.tsx` with the 7 uploaded broker logos, each linking to its respective site.

### Asset handling
- Upload all 7 PNGs from `/mnt/user-uploads/` to Lovable Assets via `lovable-assets create` and write `.asset.json` pointers under `src/assets/logos/`.
- Import each pointer and render via `<img src={asset.url} />`.

### Component changes (`LogoCarousel.tsx`)
- Replace the `logos` string array with an array of `{ name, src, href }` objects.
- Section background: change from `bg-surface/40` to `bg-white` (use `bg-canvas` in light mode; keep dark mode legible by using `bg-canvas` token so it follows theme).
- Each item becomes an `<a target="_blank" rel="noopener noreferrer">` wrapping the `<img>`.
- Sizing/spacing: uniform slot per logo — `h-12 w-40` flex container, `img` set to `max-h-full max-w-full object-contain`, gap increased to `gap-20` for breathing room.
- Grayscale → color on hover: `grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100`.
- Edge blur fade: replace the existing solid-to-transparent gradient overlays with wider (`w-32`) overlays that combine a white gradient AND `backdrop-blur-sm` masked by the gradient, so logos appear to softly blur as they pass under the edges. Use `mask-image: linear-gradient(...)` on a `backdrop-blur` div for the soft blur transition.
- Update the eyebrow caption color to work on white (`text-ink/50`).

### Files touched
- `src/components/yovu/LogoCarousel.tsx` (rewrite logos list + styling)
- `src/assets/logos/*.png.asset.json` (7 new pointer files)

No other components or tokens change.
