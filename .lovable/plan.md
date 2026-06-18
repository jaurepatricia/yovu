# YOVU Homepage — Build Plan

Build a single-page TanStack Start homepage matching the Product-Forward Density direction, using your full copy verbatim. Mostly-white canvas, deep forest-ink type, signal-green accent, Urbanist + Epilogue.

## Sections (in order)

1. **Sticky nav** — YOVU wordmark, links (Features, Integrations, Security, Company), light/dark toggle, "Get a Demo" (signal-green).
2. **Hero** — "Breathe new life into your brokerage communications." + supporting copy + two CTAs (Explore Features secondary, Get a Demo primary). Mountain video placeholder behind, scroll-driven: as user scrolls, headline/copy fade out, product mockup scales/rises into frame, primary CTA pushes above the mockup. Mountain area left empty (placeholder box) per your note.
3. **Client logo carousel** — "Trusted by leading Canadian P&C brokerages" + 5–6 placeholder logo boxes, slow auto-scrolling marquee.
4. **Product Overview / Feature Highlights** — "Built for Insurance Brokerages". Left-rail tabs for the 5 features (Click-to-Dial & Warm Transfer, Screen Pop-up, Call Transcription, AI Summary, Auto Logging). Right side cross-fades a placeholder product mockup per tab. Full bullet copy beneath active tab title.
5. **Integrations** — "Plays nice with your tech stack." Copy + Learn More CTA, with a small bento of integration logo tiles.
6. **Security & Compliance** — "Protect your brokerage and simplify your audits." Two-card bento (E&O Audit Logs / SOC 2 Certified) + Learn More CTA.
7. **Based in Canada** — "Proudly Canadian. Powerfully Supported." Bento layout: large headline card + 3 checkmark/icon cards (Server / Headset / Shield icons for uptime, support, PIPEDA) + Meet Our Team CTA.
8. **Testimonials** — "Don't Just Take Our Word for It" + subheadline. Rotating/auto-advancing testimonial cards (3 placeholder quotes) in an asymmetric layout.
9. **FAQ** — Accordion with all 10 of your questions (deduped where you repeated two).
10. **Final CTA** — "See How YOVU Works" + subheadline + Schedule a Call (signal-green).
11. **Footer** — wordmark, minimal link groups, copyright.

## Design tokens (locked from chosen direction)

- Canvas `#fafaf8`, Surface `#ececea`, Ink `#0a1f1a`, Signal `#10b981`
- Display: Urbanist 500/600/700 · Body: Epilogue 400/500
- Dark mode inverts canvas↔ink; signal stays `#10b981`; tokens defined in `src/styles.css` only (no hardcoded colors in components)

## Motion

- Hero scroll parallax via `useScroll` + `useTransform` (Motion for React)
- Tab content cross-fades on change
- Testimonial auto-rotate every ~6s
- Restrained hover states only (no fade-in-on-every-element)
- Respects `prefers-reduced-motion`

## Technical notes

- One route: `src/routes/index.tsx` rebuilt; reusable section components under `src/components/sections/*`
- Light/dark toggle stored in `localStorage`, applied via `class="dark"` on `<html>`
- Add `motion` (Framer Motion) via `bun add motion`
- Add `@fontsource-variable/urbanist` and `@fontsource-variable/epilogue` via bun, imported in `src/styles.css`
- All copy used verbatim from your message; FAQ deduped (your list had 2 repeats)
- SEO: `<title>` + meta description + OG tags in `index.tsx` head()
- Mountain video and product mockups are intentional placeholders (boxes) for now — easy swap later
- No backend, no Cloud, no forms wiring — CTAs are visual only this round

## Out of scope (this turn)

- Real mountain video, real product screenshots, real client logos
- Integrations / Security / Company sub-pages (CTAs link to anchors only)
- Demo booking backend
