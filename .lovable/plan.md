In `src/components/yovu/Canada.tsx`, line 71, change the icon wrapper for the three pillar cards from a bordered box to a plain centered container:

- Remove `rounded-xl bg-canvas ring-1 ring-border` from the icon wrapper div
- Keep `flex size-12 shrink-0 items-center justify-center` so the icon stays centered in its allotted space

Result: the icons (Server, Headset, ShieldCheck) float freely next to the text with no box or outline behind them, still vertically aligned with the heading.