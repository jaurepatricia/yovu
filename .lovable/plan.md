## Change

Replace the JPG frame sequence in the hero with the video file at `public/hf_20260620_034017_37a9daab-d2e1-42fb-b418-393d485328df.mp4`, scrubbed by scroll progress. Keep parallax. Show the full frame (no cropping).

### `src/components/yovu/Hero.tsx`

- Remove `ScrollFrameSequence` import and the `TOTAL_FRAMES` / `getFrameSrc` logic.
- Replace the `<ScrollFrameSequence />` element inside the parallax `motion.div` with a new `<ScrollVideo />` component pointing at the mp4.
- Keep the existing `useScroll` / `mountainY` parallax wrapper, sticky stage, headline, and CTAs unchanged.

### New `src/components/yovu/ScrollVideo.tsx`

- Props: `src: string`, `progress: MotionValue<number>`, `className?: string`, `ariaLabel?: string`.
- Render a `<video>` element with `muted`, `playsInline`, `preload="auto"`, no `autoplay`, no `controls`, no `loop`.
- Use `object-contain` (not cover) so the full video is visible with no cropping. Background stays `bg-canvas` so letterbox bars match the page.
- On mount, set `video.pause()` and wait for `loadedmetadata` to read `duration`.
- Subscribe to `progress` via `useMotionValueEvent`; on change, compute `targetTime = clamp(p, 0, 1) * duration` and schedule a `requestAnimationFrame` that sets `video.currentTime = targetTime` (rAF-throttled, single pending frame, matching the pattern in `ScrollFrameSequence`).
- Respect `prefers-reduced-motion`: if reduced, render a static `<video>` poster frame (set `currentTime` to last frame after metadata loads) and skip the scroll subscription.
- No canvas, no frame preloading — the browser handles decoding.

### Cleanup

- Leave `public/frames/` and `ScrollFrameSequence.tsx` in place (not referenced anymore, but out of scope to delete).

### Out of scope

Headline, CTAs, nav, other sections, theme tokens.
