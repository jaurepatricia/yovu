## Improve margins in `TeamsBenefits.tsx`

Scope: only the alternating benefit rows section on `/microsoft-teams`. No copy or structural changes.

### Changes
1. **Row gutter**: increase horizontal gap between copy and image so text doesn't crowd the visual.
   - `lg:gap-16` → `lg:gap-20 xl:gap-24`
2. **Row rhythm**: give more vertical breathing room between the three alternating rows.
   - `space-y-16 lg:space-y-24` → `space-y-20 lg:space-y-32`
3. **Copy column padding**: add inner side padding on desktop so text sits away from the row edge and aligns more editorially.
   - Copy `<div>`: add `lg:px-4 xl:px-8`
4. **Kicker spacing**: bump kicker → headline gap for a cleaner editorial stack.
   - Kicker `<p>`: `mb-3` → `mb-4`
5. **Headline → body**: slightly larger gap.
   - Body `<p>`: `mt-4` → `mt-5`
6. **Intro block**: increase the gap between the intro and the first row on large screens.
   - Intro wrapper: `mb-16 lg:mb-24` → `mb-20 lg:mb-28`

### Out of scope
Section-level `py-24 lg:py-32`, container `max-w-7xl px-6`, image aspect ratio, and all copy remain unchanged.
