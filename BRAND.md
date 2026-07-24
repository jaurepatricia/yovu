# YOVU Brand Cheat Sheet

Quick reference for the website's fonts and colors. Source of truth is
`src/styles.css` — update that file first, then mirror changes here.

Dark mode is **class-based** (`.dark` on `<html>`), not `prefers-color-scheme`.
Every token below flips via the `.dark` block in `src/styles.css`.

## Fonts

| Role | Family | Token | Tailwind |
|------|--------|-------|----------|
| Display / headings | Urbanist Variable | `--font-display` | `font-display` |
| Body / UI | Epilogue Variable | `--font-sans` | default body font |

Body font-feature-settings: `"ss01", "cv11"`.

## Colors

| Token | Tailwind | Light | Dark |
|-------|----------|-------|------|
| `--canvas` (page bg) | `bg-canvas` | `#ffffff` | `#070b1a` |
| `--surface` | `bg-surface` | `#f1f4f8` | `#111a33` |
| `--card` | `bg-card` | `#ffffff` | `#0c1226` |
| `--ink` (text) | `text-ink` | `#0b1733` | `#eef2f9` |
| `--signal` (brand blue) | `text-signal` / `bg-signal` | `#2563eb` | `#3b82f6` |
| `--signal-soft` | `bg-signal-soft` | `#dbe7ff` | `rgba(59,130,246,0.18)` |
| `--primary` | `bg-primary` | = signal | = signal |
| `--primary-foreground` | `text-primary-foreground` | `#ffffff` | `#ffffff` |
| `--border` | `border-border` | `rgba(11,23,51,0.08)` | `rgba(238,242,249,0.08)` |
| `--muted-foreground` | `text-muted-foreground` | `rgba(11,23,51,0.6)` | `rgba(238,242,249,0.6)` |
| `--ring` (focus) | `ring-ring` | = signal | = signal |

`--secondary`, `--muted`, and `--accent` all map to `--surface`; their
`-foreground` variants map to `--ink`.

## Core hex (light / dark)

```
Brand blue (signal):  #2563eb  /  #3b82f6
Ink (text):           #0b1733  /  #eef2f9
Canvas (bg):          #ffffff  /  #070b1a
Surface:              #f1f4f8  /  #111a33
Card:                 #ffffff  /  #0c1226
Signal soft:          #dbe7ff  /  rgba(59,130,246,0.18)
```

## Notes

- In **light mode, `canvas` and `card` are both `#ffffff`**, so cards use
  `bg-surface` (or `#f8fafc`) to separate from the page background.
- Filled blue buttons use `bg-primary text-primary-foreground` — foreground is
  white in **both** modes (primary is always the signal blue).
- Tailwind utilities (`bg-canvas`, `text-signal`, …) are wired through the
  `@theme` block in `src/styles.css`, which maps each `--color-*` to its
  `--token`.
