## Hero overlay content

Add centered content in the top half of the hero, layered above the mountain video, with theme-aware text.

### Layout
- New absolutely-positioned overlay inside `src/components/yovu/Hero.tsx`, `z-10`, `pointer-events-none` on wrapper / `pointer-events-auto` on the selector so video stays interactive elsewhere.
- Vertical placement: `top-0 h-1/2` flex column, `items-center justify-center`, with top padding to clear the fixed nav (~`pt-28`).
- Stack order: pill selector → H1 headline → subheadline. All center-aligned.

### Industry selector pill
- Matte glass pill matching the Nav: `bg-canvas/40 backdrop-blur-xl border border-border/40 rounded-full` with subtle inner shadow.
- Structure: muted "I work in" label + shadcn `Select` (borderless trigger, transparent bg, chevron icon, bold value).
- Options: Insurance (default), Real Estate, Legal, Financial Services, Healthcare, Other. Selection is local state — no routing/side effects.
- Text colors use semantic tokens (`text-ink`, `text-ink/70`) so they read on both light and dark video backdrops.

### Headline + subheadline
- H1: "Peak Communication" — Urbanist, bold, large display size (`text-6xl md:text-8xl`), `text-ink`, tight tracking.
- Subheadline: "Discover how insurance brokerages across Canada are improving efficiency with our all-in-one unified communications platform." — Epilogue, `text-ink/80`, `max-w-2xl`.
- Soft bloom halo behind the text block (reusing the existing radial-blur pattern) for legibility over the video.

### Files
- Edit `src/components/yovu/Hero.tsx` — add overlay markup + selector state.
- No new shadcn installs needed (`select.tsx` already present).

### Notes
- Selector value is currently presentational only; wiring it to filter content can be a follow-up.
- Existing fallback `<img>` + looping `<video>` stack is preserved untouched.
