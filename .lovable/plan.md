# Update Top Navigation

Replace the current four anchor links in `src/components/yovu/Nav.tsx` with a new structure using shadcn's `NavigationMenu` primitives (already in the project at `src/components/ui/navigation-menu.tsx`).

## New nav structure

1. **Solutions** — dropdown
   - Heading: "By Industry"
   - Links: Insurance, Healthcare, Automotive, Non-Profit & Charity, All Others
2. **Products** — two-column mega menu
   - Column 1 "Features":
     - Communicate — "A cloud phone system that streamlines your daily workflow with talk, text, and intelligent call queues."
     - Capture — "Automatically log conversations with transcriptions, AI summaries, and sentiment analysis."
     - Coach — "Accelerate new hire onboarding and team performance using analytics dashboards and training tools."
   - Column 2 "Integrations": Applied Epic, Microsoft, SalesForce
3. **Plans & Pricing** — plain link
4. **About Us** — plain link

## Implementation notes

- Edit only `src/components/yovu/Nav.tsx`. Logo, ThemeToggle, Log In, and Get a Demo CTA on the right stay unchanged.
- Use `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink` from `@/components/ui/navigation-menu`.
- All hrefs use `#` placeholders since no dedicated routes exist yet.
- Column headings styled as small uppercase eyebrow (`text-xs font-semibold uppercase tracking-wider text-ink/50`).
- Feature item title: `font-medium text-ink`; sub-text below: `text-sm text-ink/60` for visual hierarchy.
- Products panel: `grid grid-cols-2 gap-8 p-6 w-[640px]` so the two columns are evenly spaced.
- Solutions panel: single column, `p-4 w-64`, with "By Industry" heading above the list.
- Keep the existing matte-glass nav bar background, fixed positioning, and right-side actions intact.
- Mobile (`md:hidden`): keep menus hidden as today (no mobile drawer added in this change).

## Out of scope

- No new route files, no real destination pages.
- No mobile menu drawer.
- No changes to other components or styles.
