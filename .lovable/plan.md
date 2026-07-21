Align the `/privacy-policy` page's spacing and width with the rest of the site (About Us as reference).

**Changes to `src/routes/privacy-policy.tsx`:**

1. Hero section (line 123):
   - Update top padding from `pt-32 lg:pt-40` to `pt-40 lg:pt-56` to match other page heroes.
   - Change container from `max-w-3xl` to `max-w-4xl` and center the text (`text-center`), matching About Us hero.
   - Center the intro paragraph with `mx-auto max-w-2xl`.

2. Body section (line 137):
   - Increase max width from `max-w-3xl` to `max-w-4xl` for consistency with content areas on other pages while keeping the long-form readability.
   - Bump bottom padding from `pb-24 lg:pb-32` to `py-24 lg:py-32` so top/bottom spacing between hero and Footer is balanced like other pages.

No changes to Nav, Footer, or copy.
