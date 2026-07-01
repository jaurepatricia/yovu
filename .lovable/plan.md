## Plan

Split the homepage layout so `/` and `/v2` render different section lists.

### Changes

1. **`src/routes/index.tsx`** — Stop using the shared `HomePage` component. Inline a homepage composition that includes only:
   - Nav
   - Hero
   - LogoCarousel
   - Capabilities (ends with "Explore Key Features")
   - Statement
   - Testimonials
   - FAQ
   - FinalCTA
   - Footer

   Sections removed from `/` only: **Features**, **Integrations**, **Security**, **Canada**.

2. **`src/routes/v2.tsx`** — Leave untouched. It keeps rendering `HomePage`, which retains the full section list (the "graveyard").

3. **`src/components/yovu/HomePage.tsx`** — Leave untouched so `/v2` still shows every section.

No component files are deleted; the four sections remain available for later reuse.