# Electric blue button text → white

Change the button label color on every solid `bg-signal` CTA from `text-ink` to `text-white` so the navy-on-blue contrast issue in light mode is fixed. White on blue also reads well in dark mode, so no mode-specific override is needed.

## Files

- `src/components/yovu/Nav.tsx` line 186 — "Get a Demo" pill: `text-ink` → `text-white`.
- `src/components/yovu/Canada.tsx` line 35 — Canada section CTA: `text-ink` → `text-white`.
- `src/components/ui/cta-with-rectangle.tsx` line 49 — final CTA button: `text-ink` → `text-white`.

No changes to outlined or ghost buttons, badges, or other `text-signal` usages — only the solid blue buttons.
