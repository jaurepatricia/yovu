## Goal
Replace the shadcn `Select`-based industry pill in `src/components/yovu/Hero.tsx` with the custom button-driven dropdown from the YOVU project's hero.

## Changes

**`src/components/yovu/Hero.tsx`**
- Remove imports of `Select`, `SelectContent`, `SelectItem`, `SelectTrigger`, `SelectValue`.
- Add `useRef`, `useEffect` for outside-click close.
- Add local `open` state (`industry` already exists).
- Replace the pill markup with the YOVU-project pattern:
  - Container: `relative inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur px-5 py-2.5 text-[15px]`.
  - "I work in" label: `text-white/60`.
  - Trigger `<button>` toggles `open`, shows current `industry` + rotating `ChevronDown`.
  - Open panel: absolute `ul` (`mt-2 w-64 rounded-2xl bg-white text-foreground shadow-2xl ring-1 ring-black/5 z-20`) listing all INDUSTRIES; selected item gets `text-primary font-medium`; hover `bg-muted`.
- Close on outside click via a ref + `mousedown` listener.

## Notes
- Keep the existing INDUSTRIES list (Insurance default, plus current options) — only the trigger/panel styling/markup changes.
- Keep the rest of the hero (videos, bloom, headline, subhead) untouched.
- The source pill uses light-on-dark styling (`text-white/60`); the YOVU2 hero overlays video in both themes, so this matches the source intent. No dark-mode-only branching added.
