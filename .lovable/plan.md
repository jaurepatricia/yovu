## Goal

Replace the current tabbed "Built for Insurance Brokerages" section with a desktop-accordion layout: a vertical accordion on the left (title + expanded description inline), and a synced visual panel on the right that swaps when you open an item.

## What changes

1. **New file** `src/components/ui/accordion-feature-section.tsx`
   - Port the `Feature197` component (the pasted source was image-stripped, so I'll reconstruct the canonical layout): a 2-col grid (`lg:grid-cols-2`), left side is a shadcn `Accordion type="single" collapsible`, right side shows the active item's visual.
   - Each `AccordionItem` uses `onClick` on the trigger to set `activeImage` / `activeTabId`.
   - Visual panel renders the active item's `image` (string URL OR `ReactNode` — see below).
   - Styling tuned to Evergreen Signal tokens: signal-colored active trigger, `border-border` dividers, `bg-surface` visual panel, rounded corners matching the rest of the site.

2. **Extend the type** so `image` can be a `ReactNode` (not just a URL).
   - Reason: today's Features section renders an icon placeholder, not real screenshots. Forcing a string URL would require stock images we don't have.
   - Shape: `image: string | React.ReactNode`. If string → render as `<img>`; otherwise render the node directly.

3. **Rewrite** `src/components/yovu/Features.tsx`
   - Keep the same 5 feature entries, icons, and copy already in the file.
   - Drop the manual tab-rail + `AnimatePresence` showcase.
   - Render the new `Feature197` with each `image` set to the existing icon-in-card placeholder JSX (so visuals stay consistent with the current look until real screenshots arrive).
   - Keep the section header ("Product Overview" / "Built for Insurance Brokerages.") and `id="features"`.

4. **No changes** to `accordion.tsx` (already installed), `package.json` (radix-accordion + lucide-react already present), or any other section.

## Behavior

- Desktop (≥lg): two columns, accordion left, sticky-ish visual right.
- Mobile: single column, visual appears above or below each open item (visual panel stacks on top, accordion below — matches the reference component).
- First item open by default; opening another item updates the right-side visual.
- Respects existing dark/light theme via tokens; no hardcoded colors.

## Out of scope

- No real product screenshots (placeholders stay).
- No changes to motion library usage elsewhere.
- No copy edits.
