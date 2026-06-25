# Recolor spotlight to electric blue

Update the spotlight hover color from green (`rgba(16, 185, 129, …)`) to the new electric blue (`rgba(37, 99, 235, …)`) on the Security section cards.

## Changes

- `src/components/ui/spotlight-card.tsx` line 12: default `spotlightColor` → `"rgba(37, 99, 235, 0.25)"`.
- `src/components/yovu/Security.tsx`:
  - Line 16 (E&O card, light surface): `"rgba(37, 99, 235, 0.22)"`.
  - Line 51 (SOC 2 card, dark surface): `"rgba(59, 130, 246, 0.18)"` — slightly brighter blue + opacity so it pops against navy.

No other files touched.
