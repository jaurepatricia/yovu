## Diagnosis

The hero video is **3256×2544, 5.04s, 23 MB, 121 frames, H.264 mp4**. Two issues are causing the "not playing as I scroll" symptom:

1. **MP4 likely isn't fragmented for instant seek.** When `currentTime` is set on a streaming MP4 whose moov atom is mid-file, the browser stalls until it fetches the right byte range. During fast scroll the seeks pile up and nothing visibly updates.
2. **Scroll distance is too short.** The hero is `min-h-[180vh]`, so only ~80vh of scroll drives the entire 5s video — feels jumpy and easy to scroll past before any frame swap renders.

There's also a hydration warning in console about `data-selector-active` / `data-selector-interaction-mode` on `<body>`. That's injected by the Lovable preview's visual-selector overlay, not by our code — unrelated to this request, will not touch.

## Change

### `src/components/yovu/Hero.tsx`

- Increase the outer scroll container from `min-h-[180vh]` to `min-h-[320vh]` so the 5s video scrubs across ~2.4 viewports of scroll. Hero stays sticky (`h-screen`) so the video is visible the whole time. Headline / CTA transform ranges unchanged (they're percentage-based on `scrollYProgress`).
- Keep `object-contain` so the full 3256×2544 frame is visible with no crop. `bg-canvas` on the parallax wrapper fills the letterbox area with the page background.

### `src/components/yovu/ScrollVideo.tsx`

- **Preload the mp4 as a blob** before wiring scroll: `fetch(src)` → `blob()` → `URL.createObjectURL(blob)` → set as `video.src`. This guarantees the entire file is local before any seeking, so `currentTime = t` updates immediately on every scroll tick.
- Show a subtle bottom progress bar (same pattern as the old `ScrollFrameSequence`) while the blob downloads; hide once ready.
- Keep the existing rAF-throttled seek, `useMotionValueEvent` subscription, and `prefers-reduced-motion` fallback (jump to last frame).
- Add `onSeeked` no-op handler purely so React keeps the element mounted across re-renders; no other behavior change.

### Verification

After edit, drive the live preview with Playwright: scroll the page in steps, take screenshots at 0%, 25%, 50%, 75%, 100% of the hero scroll range, and confirm the video frame visibly changes between shots. Report findings with screenshot evidence.

### Out of scope

Headline, CTAs, nav, other sections, hydration warning from the preview selector overlay, re-encoding the mp4 to fragmented format (would require a build step — blob preload solves the playback problem without it).
