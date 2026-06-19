## Goal

Make the Features accordion auto-advance through items on a timer, with a vertical progress rail on the left edge that fills as the timer runs. Hovering the accordion text or the visual panel pauses both the timer and the rail; leaving resumes.

## Changes

**`src/components/ui/accordion-feature-section.tsx`** (only file touched)

1. **Auto-advance state**
   - `activeId` already exists. Add `isPaused` (boolean) and `progress` (0–100) state.
   - `useEffect` runs a `requestAnimationFrame` loop that advances `progress` based on elapsed time vs. a `CYCLE_MS` constant (default 6000ms). When `progress` reaches 100, move to the next feature (wrap to first) and reset progress to 0. Loop pauses when `isPaused` is true (timestamp baseline resets on resume so the current item doesn't snap forward).
   - Manually opening a different accordion item (existing `onValueChange` / trigger `onClick`) resets `progress` to 0 so the timer restarts on that item.

2. **Vertical timer rail (left edge of the accordion column)**
   - Wrap the left column in a `relative` container with a thin full-height track (`absolute left-0 top-0 bottom-0 w-[2px] bg-border`).
   - Inside the track, render one segment per feature stacked vertically (equal `flex-1` height). Each segment shows:
     - past items → fully filled with `bg-signal`
     - active item → filled to `progress%` via inline `style={{ height: \`${progress}%\` }}` on an inner div, `bg-signal`
     - future items → empty (track color only)
   - Accordion content shifts right with `pl-6` so the rail sits in the gutter.

3. **Hover pause**
   - The outer grid wrapper gets `onMouseEnter={() => setIsPaused(true)}` and `onMouseLeave={() => setIsPaused(false)}`. This covers both the accordion column and the visual panel in one handler since they share the wrapper.
   - Also bind the same handlers via `onFocus`/`onBlur` for keyboard users tabbing through triggers.

4. **Reduced motion**
   - If `matchMedia('(prefers-reduced-motion: reduce)').matches`, skip the auto-advance loop entirely (component behaves as before: manual open only, no rail animation — rail still renders as a static indicator of the active item).

## Out of scope

- No changes to `Features.tsx`, copy, icons, or the visual panel content.
- No new dependencies. No motion library.
- Cycle duration stays hardcoded at 6s (easy to tweak later).
