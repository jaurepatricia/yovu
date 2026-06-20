## Goal
Improve hero headline legibility against the mountain scroll sequence by adding a soft bloom/blur halo behind the text.

## Change
In `src/components/yovu/Hero.tsx`, inside the headline container (the `motion.div` with `headlineOpacity`/`headlineY`), add a single decorative element behind the `<h1>` + paragraph:

- Absolutely positioned, centered, `pointer-events-none`, `aria-hidden`
- Large soft radial gradient from `canvas` (the page bg) at ~60% opacity in the center, fading to transparent at the edges
- Paired with a `backdrop-blur-xl` layer masked by the same radial fade, so the mountain image behind the text becomes softly blurred (frosted bloom) without a hard rectangle edge
- Sized roughly `120% × 140%` of the text block, with generous feathering so it reads as ambient glow, not a card

No changes to text, layout, scroll transforms, or the CTA block. Works in both light and dark themes because it uses the semantic `--canvas` token.

## Out of scope
- Headline copy, font, size, color
- Mountain sequence / scroll behavior
- CTAs, paragraph styling, other sections
