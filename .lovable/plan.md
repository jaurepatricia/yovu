## Split `TeamsCollaboration` into reusable `SectionIntro` + `FeatureGrid`

Replace the single-purpose `TeamsCollaboration` component with two composable, prop-driven layout primitives so the same pattern can be reused across pages.

### New components

**1. `src/components/yovu/layouts/SectionIntro.tsx`**

A 2-column intro band: headline + body copy on the left, media on the right. Stacks on mobile, side-by-side on `lg:`.

Props:
- `kicker?: string` — optional uppercase eyebrow (matches the style already used in `TeamsBenefits`).
- `headline: string`
- `body?: string`
- `media?: ReactNode` — right-column content. Falls back to the current `aspect-[4/3] rounded-2xl bg-surface ring-1 ring-border` placeholder when omitted.
- `reverse?: boolean` — swap columns on `lg:` (media left, copy right). Defaults to `false`.
- `className?: string` — pass-through for section-level overrides.

**2. `src/components/yovu/layouts/FeatureGrid.tsx`**

An N-column grid of icon + title + copy cards. Matches the existing visual treatment (Lucide icon in `text-signal`, `font-display` title, `text-ink/70` body).

Props:
- `items: Array<{ icon: LucideIcon; title: string; copy: string }>`
- `columns?: 2 | 3 | 4` — desktop column count. Defaults to `3`. Mobile is always 1-col, `sm:` is 2-col.
- `className?: string`

Both components share the page's vertical rhythm: wrap in a `<section className="bg-canvas py-24 lg:py-32">` at the call site, or let each component render its own section — pick one and be consistent. **Decision:** each component renders its own `<section>` so they can be dropped in independently; when stacked, use `lg:space-y-32` on a wrapping `<div>` (matches the pattern used elsewhere on the page).

### Call site update

`src/routes/microsoft-teams.tsx`:

```tsx
<div className="bg-canvas">
  <SectionIntro
    headline="Why use an integration?"
    body="Bring your team together while simplifying your tech stack. Boost productivity and inclusion by simplifying how your workforce collaborates."
  />
  <FeatureGrid
    items={[
      { icon: Layers, title: "Simplify Your IT", copy: "Reduce the number of applications…" },
      { icon: Users, title: "Increase Connection", copy: "Voice-enabled collaboration…" },
      { icon: Zap, title: "Boost Productivity", copy: "When employees can easily collaborate…" },
    ]}
  />
</div>
```

Remove the import of `TeamsCollaboration` and delete `src/components/yovu/teams/TeamsCollaboration.tsx`.

### Notes

- `TeamsCollaboration` is only used on `/microsoft-teams` (verified via ripgrep), so this is a safe rename with a single call-site update.
- Copy on all three icon cards and the intro remains identical to today — this change is structural only.
- Placing the new files under `src/components/yovu/layouts/` (not `teams/`) signals they are cross-page primitives.
- No changes to `TeamsBenefits`, `TeamsHero`, `TeamsHowItWorks`, or any other component.