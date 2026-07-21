## Change

In `src/routes/applied-epic.tsx`, remove the `pt-32 lg:pt-40` top padding on the hero's inner container so the existing `flex h-full items-center` truly centers the content vertically. The nav bar is fixed/overlay, so no top offset is needed for it.

Keep:
- Left-aligned text (`text-left`, `max-w-xl`).
- Existing spacing between elements (`mt-6`, `mt-8`).
- Gradient overlay and 16:9/full-viewport hero sizing.
