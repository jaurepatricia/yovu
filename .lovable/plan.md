Swap the two testimonial sections between the homepage (`/`) and the v2 page (`/v2`).

Currently:
- `/` (src/routes/index.tsx) renders `TestimonialsQuote` (single large pull-quote, "Our Clients Say It Best").
- `/v2` (renders `src/components/yovu/HomePage.tsx`) uses `Testimonials` (two-column card layout, "Don't just take our word for it.").

Changes:
1. In `src/routes/index.tsx`: replace the `TestimonialsQuote` import and usage with `Testimonials`.
2. In `src/components/yovu/HomePage.tsx`: replace the `Testimonials` import and usage with `TestimonialsQuote`.

No changes to the testimonial components themselves or to any other sections.