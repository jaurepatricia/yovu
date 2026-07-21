# Fix `/privacy-policy` hero padding

The body section (`py-24 lg:py-32`) already matches the standard used by other section components across the site. The mismatch is in the hero: it uses `pb-12` while the rest of the site's heroes (e.g. `/applied-epic`) use `pb-16 lg:pb-24`.

## Change

In `src/routes/privacy-policy.tsx` line 123, update the hero section classes:

- From: `mx-auto max-w-4xl px-6 pt-40 pb-12 text-center lg:pt-56`
- To: `mx-auto max-w-4xl px-6 pt-40 pb-16 text-center lg:pt-56 lg:pb-24`

No other changes. Body section, max-widths, and horizontal padding already match the rest of the site.
