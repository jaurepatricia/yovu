## Goal

Add the signal-green spotlight hover effect to the final "See How YOVU Works" CTA card, matching the Security section treatment.

## Changes

1. **`src/components/ui/cta-with-rectangle.tsx`**
   - Import `SpotlightCard` from `@/components/ui/spotlight-card`.
   - Wrap the inner dark rectangle (`<div class="relative mx-auto flex max-w-7xl ... rounded-[2.5rem] bg-ink ...">`) with `<SpotlightCard spotlightColor="rgba(16,185,129,0.22)" className="mx-auto max-w-7xl rounded-[2.5rem]">`, moving the outer sizing/rounded classes onto the SpotlightCard so the glow is clipped to the rounded card.
   - Keep all existing content, badge, heading, description, CTA button, and the bottom radial glow untouched.

## Out of scope

- No copy, layout, color-token, or animation changes.
- No changes to `FinalCTA.tsx` or other consumers of `CTASection`.
