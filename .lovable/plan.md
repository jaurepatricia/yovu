## Locale toggle in top nav

Add a circular button next to `ThemeToggle` in `src/components/yovu/Nav.tsx` that opens a small popover of country/language options. Visual only — persists the choice, no content translation.

### Locales

- 🇨🇦 Canada — English (`en-CA`)
- 🇨🇦 Canada — French (`fr-CA`)
- 🇺🇸 US — English (`en-US`)
- 🇲🇽 Mexico — Spanish (`es-MX`)

Default: `en-CA` (or match `navigator.language` if it starts with one of the four).

### Component: `src/components/yovu/LocaleToggle.tsx`

- Circular 36px button, same border/hover styles as `ThemeToggle`.
- Content: the flag emoji of the active locale (e.g. 🇨🇦), rendered at ~18px.
- `aria-label`: "Change country and language" plus the current locale.
- Click opens a shadcn `Popover` (already in the project via components.json) anchored bottom-right.
- Popover lists the four locales as buttons: `flag  Country — Language`, with a check on the active one.
- Selection updates state, closes the popover, writes `localStorage["yovu-locale"]`, and sets `document.documentElement.lang`.
- SSR-safe: read `localStorage` inside `useEffect`, not in `useState` initializer.

### Nav wiring

In `src/components/yovu/Nav.tsx`, import `LocaleToggle` and render it immediately before `<ThemeToggle />` inside the right-hand action group.

### Out of scope

No string translation, no routing changes, no i18n library. Just the toggle and stored preference — ready to hook into real i18n later.
