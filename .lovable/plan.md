## Goal

Replace the "Mountain parallax video placeholder" in `src/components/yovu/Hero.tsx` with a scroll-scrubbed image sequence using the 151 JPGs you added. Frame index is locked 1:1 to scroll position over the sticky Hero stage — scroll down advances, scroll up rewinds. No autoplay.

## Steps

### 1. Move frames into `public/`
- `mv frames public/frames` so they're served as static files at `/frames/ezgif-frame-001.jpg` … `/frames/ezgif-frame-151.jpg`.
- No renaming; the zero-padded 3-digit naming is already perfect for indexing.

### 2. New component `src/components/yovu/ScrollFrameSequence.tsx`
A reusable canvas-based scrubber. Props: `totalFrames`, `getFrameSrc(i)`, `progress` (a `MotionValue<number>` from 0→1), `className`.

- Renders a `<canvas>` filling its parent (`absolute inset-0 size-full object-cover`).
- On mount, sizes the canvas to its container × `devicePixelRatio` and re-sizes on `ResizeObserver`.
- **Progressive loading:**
  - Eagerly request frames 1–20 immediately.
  - After first paint, kick off background fetches for the rest in small batches (e.g. 8 at a time) so the network doesn't stall.
  - Store loaded `HTMLImageElement`s in a ref-held array indexed by frame number.
  - Track `loadedCount` in state purely to drive a thin progress bar overlay.
- **Scrub:** subscribe to `progress` via `useMotionValueEvent`. On each change, compute `targetIndex = round(progress * (totalFrames - 1))`, find the nearest loaded frame ≤ targetIndex (fallback: nearest loaded frame), and draw it to the canvas using `drawImage` with `object-fit: cover` math (compute scale + offset so the image covers the canvas without distortion).
- Uses `requestAnimationFrame` to coalesce draws — only one draw per frame even if scroll fires many events.
- Subtle progress indicator: a 1px-tall bar pinned to the bottom of the section, width = `loadedCount / totalFrames`, signal-green, fades out once fully loaded. Hidden once `loadedCount === totalFrames`.

### 3. Wire into `Hero.tsx`
- Remove the placeholder div (the gradient + "Mountain parallax video placeholder" text) inside the existing `motion.div` background layer.
- Drop in `<ScrollFrameSequence totalFrames={151} getFrameSrc={(i) => `/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`} progress={scrollYProgress} />` in its place.
- Keep the existing `mountainY` parallax wrapper, the bottom-fade overlay, the headline/CTA/mockup layers, and all current scroll transforms exactly as they are — the sequence simply replaces the placeholder visual underneath them.
- Section height stays at `min-h-[180vh]` so there's enough scroll distance for the scrub to feel cinematic across all 151 frames.

### 4. Accessibility & perf
- Canvas gets `role="img"` and an `aria-label="Mountain landscape scroll animation"`.
- Add `prefers-reduced-motion` handling: when set, render only the last frame as a static `<img>` and skip all scrub logic.
- Frames are served by the static handler with long-cache headers (default for `public/`).

## Out of scope
- No changes to other sections, copy, fonts, colors, or the Security/Features components.
- No CDN/asset migration (you chose `/public/frames`).
- No new dependencies — uses existing `motion/react`.

## Technical notes
- Canvas (not stacked `<img>`s) avoids 151 DOM nodes and gives smooth single-frame swaps.
- `useMotionValueEvent` + rAF coalescing keeps scroll handlers off the main thread budget.
- Progressive batched loading means first paint isn't blocked on 37 MB; the scrub may "snap" to the nearest loaded frame during the first ~1–2 seconds of fast scroll, then becomes perfectly smooth.
- Repo size note: committing 37 MB of JPGs to `public/` will bloat the git history and every deploy. If that becomes a problem later, the same component works unchanged against a CDN base URL — just swap `getFrameSrc`.
