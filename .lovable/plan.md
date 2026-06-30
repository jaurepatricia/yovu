## Goal
Replace the empty Hero with a full-viewport (100vw × 100vh) looping background video that swaps based on light/dark theme, with the matching still image as a poster/fallback if the video fails or is slow to load.

## Approach
1. Upload the four files to the CDN via `lovable-assets`:
   - `mountain_light.mp4`, `mountain_dark.mp4`
   - `mountain_light.png`, `mountain_dark.png`
   Stored as `src/assets/hero/*.asset.json` pointers (binaries not committed).

2. Rewrite `src/components/yovu/Hero.tsx`:
   - `<section>` sized `w-screen h-screen` with `overflow-hidden`, keeps `id="top"`.
   - Two `<video>` elements layered absolutely-positioned, `object-cover w-full h-full`:
     - Light video shown via `block dark:hidden`, `poster={mountainLight.url}`
     - Dark video shown via `hidden dark:block`, `poster={mountainDark.url}`
   - Attributes on both: `autoPlay`, `loop`, `muted`, `playsInline`, `preload="metadata"`.
   - `onError` handler hides the `<video>` so the matching `<img>` fallback underneath (same `object-cover`) takes over. Image layers also toggle via `dark:` classes.
   - Stack order: fallback `<img>` → `<video>` on top. If video loads, it covers the image; if it fails, the image remains visible.

3. No nav/layout changes. Remove the unused `ScrollFrameSequence` import paths only if Hero was the sole consumer (verify; leave file in place either way).

## Files
- New: `src/assets/hero/mountain_light.mp4.asset.json`, `mountain_dark.mp4.asset.json`, `mountain_light.png.asset.json`, `mountain_dark.png.asset.json`
- Edit: `src/components/yovu/Hero.tsx`

## Notes
- Theme switching uses the existing `dark` class on `<html>` (same mechanism as the logo carousel's `dark:block` / `dark:hidden` toggle), so no JS is needed to pick the variant.
- `poster` attribute ensures the still image renders instantly while the video buffers; `onError` covers the case where the video fails outright.
