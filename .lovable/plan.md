## Add Monthly/Annual toggle to Compare Features header

Enlarge the top-left header cell of the Compare Features table and place a Monthly / Annual pill toggle inside it (mirroring the reference screenshot). Prices in the tier header cells switch based on the toggle.

### Changes in `src/components/yovu/pricing/CompareFeatures.tsx`

1. Extend the `tiers` data with both monthly and annual prices:
   - Starter — $18 monthly / $15 annual
   - Professional — $39 monthly / $32 annual
   - Advanced — Custom (no toggle effect)
   - Ultra — Custom (no toggle effect)

2. Add local state `const [annual, setAnnual] = useState(false)`.

3. Make the first `<th>` taller and wider-feeling by increasing vertical padding and rendering a Monthly / Annual segmented pill inside it, styled to match the existing pill on `PricingTable.tsx` (rounded-full, `bg-surface`, `ring-1 ring-border`, active state `bg-signal text-white`). Keep the "Compare Features by Category" heading above.

4. Tier header cells render `t.monthly` or `t.annually` based on state. Custom tiers keep showing "Custom". Note text becomes "per user / mo" (monthly) or "per user / mo, billed annually" (annual).

### Non-goals

- Do not share state with the `PricingTable` toggle above — keeping it local avoids lifting state across sections.
- No changes to feature rows, categories, or styling tokens.