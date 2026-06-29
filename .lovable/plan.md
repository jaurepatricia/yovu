## Goal
Create a `/v2` route that renders an identical copy of the current homepage, so both versions can be A/B tested independently going forward.

## Approach
- Extract the current homepage body (the `<main>` with Nav, Hero, LogoCarousel, Features, Integrations, Security, Canada, Testimonials, FAQ, FinalCTA, Footer) from `src/routes/index.tsx` into a shared component `src/components/yovu/HomePage.tsx`.
- `src/routes/index.tsx` renders `<HomePage />` and keeps its existing `head()` meta (v1).
- New `src/routes/v2.tsx` with `createFileRoute("/v2")` also renders `<HomePage />` with its own `head()` meta (title suffix " — v2", `noindex` to keep it out of search).
- No visual or copy changes between v1 and v2 yet — they're byte-identical renders. Future edits to either route can diverge by swapping props or forking the component.

## Files
- New: `src/components/yovu/HomePage.tsx` — shared page composition.
- Edit: `src/routes/index.tsx` — import and render `HomePage`.
- New: `src/routes/v2.tsx` — `/v2` route rendering `HomePage` with its own meta + `<meta name="robots" content="noindex">`.
- `src/routeTree.gen.ts` regenerates automatically.

## Notes
- Routes are reached at `/` and `/v2`. No nav link to `/v2` is added (keeps it unlinked for controlled testing); you can share the URL directly.
- When you're ready for the versions to diverge, tell me what should change in v2 and I'll fork the relevant section components.
