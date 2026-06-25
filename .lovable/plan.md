## Logo Carousel Updates

### 1. Remove Surenet
- Delete the Surenet entry from the `logos` array in `src/components/yovu/LogoCarousel.tsx`.
- Delete its import.
- Delete the asset pointer: `lovable-assets delete --file src/assets/logos/surenet.png.asset.json`.

### 2. Dark-mode Stoneridge logo
- Upload the new white Stoneridge logo from `/mnt/user-uploads/Stoneridge_Logo_Dark_Mode.png` to Lovable Assets as `src/assets/logos/stoneridge-dark.png.asset.json`.
- Import it alongside the existing `stoneridge` (light) asset.
- Render both logos in the Stoneridge slot, using Tailwind theme variants to toggle visibility:
  - Light: show existing `stoneridge.url` (`dark:hidden`)
  - Dark: show new `stoneridge-dark.url` (`hidden dark:block`)
- Both inherit the same grayscale/hover styling already applied.

No other components, sizing, spacing, or carousel behavior change.
