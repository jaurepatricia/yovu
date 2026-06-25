## Dark-mode Logos for McDougall and Select Path

Same pattern used for Stoneridge:

1. Upload both PNGs from `/mnt/user-uploads/` to Lovable Assets:
   - `mcdougall-dark.png.asset.json`
   - `selectpath-dark.png.asset.json`
2. In `src/components/yovu/LogoCarousel.tsx`, import the new pointers and add `srcDark` to the McDougall and Select Path entries. Existing render logic already swaps `srcDark` in via `dark:block` / `dark:hidden`.

No other changes.