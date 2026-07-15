## Update `TeamsCollaboration.tsx`

Restructure the "Why use an integration?" section into two stacked parts:

### 1. New 2-column copy/image section (top)
- Left column: Headline "Why use an integration?" + body copy "Bring your team together while simplifying your tech stack. Boost productivity and inclusion by simplifying how your workforce collaborates."
- Right column: Placeholder image block (matching the `aspect-[4/3] rounded-2xl bg-surface ring-1 ring-border` style used in `TeamsBenefits`)
- Responsive: stacks on mobile, side-by-side on `lg:`

### 2. Existing 3-column icon grid (below)
- Keep the three cards (Simplify Your IT, Increase Connection, Boost Productivity) exactly as they are today — same icons, same copy, same visual treatment
- Remove the old centered heading above them (since the new section now provides the header)
- Add appropriate spacing between the two sub-sections

No other files change. Copy on the icon cards stays identical to current.
