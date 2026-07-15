## Add persistent "Speak to an Expert" CTA to SalesforceHowItWorks

Add a single button below the cycling step copy in `src/components/yovu/salesforce/SalesforceHowItWorks.tsx` that stays fixed in place regardless of which step is active or the scroll position.

### Approach

The three step blocks currently stack in one grid cell and cross-fade by opacity. If the button lived inside each step block, it would fade with the copy and shift if step copy lengths differed.

To keep the CTA anchored:

1. Render the button **once**, as a sibling below the stacked step grid — outside the `.map()` — so it is not duplicated per step and doesn't fade.
2. Give the stacked step grid a fixed `min-h` so varying copy length between steps doesn't push the button up or down as steps cycle.
3. Since the card is inside a `sticky top-0` container, the button naturally stays put during scroll — the whole card is pinned.

### Styling

- Signal-colored primary button matching site conventions (rounded-full, `bg-signal text-white`, hover state).
- Centered under the copy with consistent top margin (`mt-10`).
- Links to the same destination as other "Speak to an Expert" / demo CTAs on the site (will match existing pattern — likely `/contact` or the demo route; will confirm from Nav/FinalCTA usage during implementation).

### Files changed

- `src/components/yovu/salesforce/SalesforceHowItWorks.tsx` — move button outside the step `.map()`, add `min-h` to the stacked grid.
