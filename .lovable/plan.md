Flush the HMR gate so the buffered edits to `src/components/yovu/Testimonials.tsx` (quote marks removed, heading updated to "Loved by the community", description updated) are applied to the running preview.

Steps:
1. `curl -sf -X POST http://localhost:8080/__hmr_flush` to re-transform changed modules and reload the preview.
2. Confirm the testimonials section on `/` shows the updated heading, description, and unquoted testimonial text.