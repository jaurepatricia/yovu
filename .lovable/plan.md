## Plan: Privacy Policy page

### 1. New route: `src/routes/privacy-policy.tsx`
- Create a TanStack Start route at `/privacy-policy` with proper `head()` metadata (title: "Privacy Policy — YOVU Office Phone", matching description + og tags).
- Reuse existing site chrome (Nav + Footer already applied globally via `__root`/homepage pattern — I'll mirror how other content pages like `/about-us` do it).
- Layout: centered editorial column (max-w-3xl) matching the site's Urbanist/Epilogue typography and Evergreen/Navy tokens. Use existing tokens (`text-ink`, `bg-canvas`, etc.) — no new colors.
- Structure:
  - Hero band: H1 "Use of Personal Data Policy and Disclosure" + short intro line.
  - Sections rendered as H2 with body copy and bulleted lists:
    1. How We Use Your Personal Data
    2. When We Share Your Information
    3. Retention of Your Personal Data
    4. Transfer of Your Personal Data
    5. Disclosure of Your Personal Data
    6. Security of Your Personal Data
  - Bullets use bold lead-ins (e.g., **To provide and maintain our service.**) exactly as supplied.
- Copy is inserted verbatim from the uploaded document.

### 2. Footer link
- Update `src/components/yovu/Footer.tsx`: change the existing "Privacy Policy" entry in the Company column from `href: "#"` to `href: "/privacy-policy"`.

### 3. Out of scope
- No Nav changes, no new components, no design token changes.
- No embedded images from the doc — text only.
