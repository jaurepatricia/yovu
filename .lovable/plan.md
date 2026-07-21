## Change

In `src/routes/applied-epic.tsx`, revert the hero content block from centered to left-aligned, and align its left edge with the site's standard section gutter (the `max-w-7xl` + `px-6` container used by sections below).

### Details

- Remove `justify-center` from the flex row wrapping the content.
- Remove `mx-auto items-center text-center` from the inner content block; keep it left-aligned with `max-w-2xl`.
- Keep the eyebrow ("Integrations"), H1, paragraph, and "See it in Action" button; keep their vertical spacing (`mt-6` / `mt-8`).
- Container stays `max-w-7xl px-6` so the left edge matches every section below (ZLayout, FeatureSlidingCards, FAQ, etc.).
- Gradient overlay: switch back to a left-weighted gradient (`bg-gradient-to-r from-canvas/80 via-canvas/40 to-transparent`) so the left-aligned copy stays legible over the hero image.
