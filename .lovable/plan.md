# Recolor: Evergreen → Deep Navy + Electric Blue

Swap the green-based "Evergreen Signal" palette in `src/styles.css` for a navy + electric blue palette. Token names (`--ink`, `--signal`, `--canvas`, `--surface`) stay the same so no component code needs to change.

## New palette

**Light mode**
- `--canvas` `#ffffff` — pure white page background (more white, less neutral)
- `--surface` `#f1f4f8` — very light cool grey for cards/muted areas
- `--ink` `#0b1733` — deep navy used for text + dark accents (neutral, not distracting)
- `--signal` `#2563eb` — electric blue accent that pops on white
- `--signal-soft` `#dbe7ff` — soft blue tint for backgrounds/glows
- Border `rgba(11, 23, 51, 0.08)`, input `rgba(11, 23, 51, 0.12)` (cool, navy-tinted, not warm)
- Muted foreground `rgba(11, 23, 51, 0.6)`

**Dark mode**
- `--canvas` `#070b1a` — very dark navy, neutral background
- `--surface` `#111a33` — slightly lifted navy surface
- `--card` / `--popover` `#0c1226`
- `--ink` `#eef2f9` — cool near-white text
- `--signal` `#3b82f6` — slightly brighter blue so it still pops on dark navy
- `--signal-soft` `rgba(59, 130, 246, 0.18)`
- Border `rgba(238, 242, 249, 0.08)`, input `rgba(238, 242, 249, 0.12)`
- `--primary-foreground` `#070b1a` (dark navy text on blue buttons)

## Implementation

- Edit only `src/styles.css` lines 53–111 (`:root` and `.dark` token blocks). Header comment also updated to reflect navy/blue.
- No changes to component files — every component already reads `bg-canvas`, `text-ink`, `bg-signal`, `text-signal`, `bg-signal-soft`, `border-border`, etc.
- The `::selection` rule at line 132 keeps using `var(--signal)`, which now resolves to blue automatically.

## Out of scope

- No layout, typography, or component changes.
- Hero scroll-frame imagery (mountain photos) stays as-is — only UI chrome recolors.
