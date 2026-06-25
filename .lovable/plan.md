In `src/components/yovu/Nav.tsx`:

The "Plans & Pricing" and "About Us" items currently use a custom `linkCls` (just text + padding) so they don't get the same height, rounded hover background, or font sizing as the "Solutions"/"Products" triggers (which use `navigationMenuTriggerStyle()` + `triggerCls`).

Fix: make the two plain links visually identical to the dropdown triggers (minus the chevron).

1. Add a new shared class string `itemCls` matching `triggerCls` styling, applied via `navigationMenuTriggerStyle()` override — same transparent background, `text-ink/60` default, `hover:text-ink`, hover `bg-accent`, `data-[active]` states, `h-9 px-3 rounded-md text-sm font-medium`.
2. Replace the `linkCls` usage on both "Plans & Pricing" and "About Us" `<a>` elements with `itemCls`, and pass it to `NavigationMenuLink`'s `className` (drop the `navigationMenuTriggerStyle()` wrapper that's currently adding default trigger styles which include a white-ish hover bg that doesn't match).
3. Delete the now-unused `linkCls` constant.

Result: all four nav items share identical hover/active styling — same height, padding, rounded hover background, and muted-to-ink color transition. Only Solutions/Products keep the chevron.

No other files change.