## Add pricing row to Compare Features table

Show each tier's price directly under its name in the Compare Features table header so viewers see prices at a glance while scanning features.

### Change

In `src/components/yovu/pricing/CompareFeatures.tsx`, replace the plain `tiers` string array with an array of `{ name, price, note }` objects and render the price beneath the tier name in the sticky-looking table `<thead>`.

Prices (mirrored from `PricingTable.tsx`, monthly rate):
- Starter — $18 / user / mo
- Professional — $39 / user / mo
- Advanced — Custom
- Ultra — Custom

### Header cell layout

```text
| Telephony Features | Starter        | Professional   | Advanced | Ultra   |
|                    | $18 /user/mo   | $39 /user/mo   | Custom   | Custom  |
```

Tier name stays bold in `text-ink`; price renders below in smaller `text-ink/60` text so the visual hierarchy matches the rest of the pricing page.

### Notes / non-goals

- No monthly/annual toggle here — the main `PricingTable` above already handles that. Keeping a single monthly figure avoids state duplication and keeps the compare table scannable.
- No changes to row data, category tabs, or styling tokens.