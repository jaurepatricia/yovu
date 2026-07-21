## Applied Epic Hero Redesign

Restructure the `AppliedEpicHero` section in `src/routes/applied-epic.tsx` with a background image, left-aligned copy, and a CTA button.

### Changes

**1. Upload test background image as a Lovable Asset**
- Run `lovable-assets create --file /mnt/user-uploads/hero_image_test.png --filename applied-hero-test.png > src/assets/hero/applied-hero-test.png.asset.json`
- Import the pointer in `applied-epic.tsx`

**2. Rewrite `AppliedEpicHero` section**
- Section becomes a full-viewport hero: `relative h-screen w-screen overflow-hidden` (matches the homepage `Hero.tsx` pattern for a 16:9-ish cinematic feel at typical viewports). On very tall/narrow viewports we'll cap with `min-h-[56.25vw]` (16:9) so it never stretches unnaturally.
- Background: `<img>` absolutely positioned, `object-cover`, `object-right` so the mountain peak sits on the right (matching the uploaded test image composition).
- Subtle left-side gradient overlay (`bg-gradient-to-r from-canvas/70 via-canvas/30 to-transparent`) to keep text legible against the sky.
- Content container: `max-w-7xl mx-auto px-6` with an inner `max-w-2xl` block, left-aligned (`text-left`), vertically centered, pushed down below the Nav (`pt-40 lg:pt-48`).
- H1 unchanged: "Applied Epic Integration".
- Paragraph unchanged, left-aligned (remove `mx-auto`).
- New CTA button below the paragraph: **"See it in Action"** — primary pill styled to match the site's existing signal-blue button used on the accessibility page (rounded-full, bg-primary, text-primary-foreground, hover state). Link target `#demo` for now.

### Technical notes

- Keeps the change scoped to the hero `<section>` on `/applied-epic` only — no other pages affected.
- Background image is a placeholder test asset; easily swappable later by replacing the `.asset.json` pointer.
- Uses the same asset-pointer pattern already in use for hero videos, so no new plumbing.

### Files touched
- `src/assets/hero/applied-hero-test.png.asset.json` (new)
- `src/routes/applied-epic.tsx` (edit `AppliedEpicHero` only)
