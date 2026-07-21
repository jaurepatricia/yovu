# Accessibility Plan page + PDF download

## New route: `/accessibility-plan`

Create `src/routes/accessibility-plan.tsx` mirroring the structure of `src/routes/privacy-policy.tsx`:

- Same `<main>` shell, `Nav`, `Footer`
- Hero section (kicker "Legal", H1, subhead) with matching padding: `mx-auto max-w-7xl px-6 pt-40 pb-16 text-center lg:pt-56 lg:pb-24`
- Body section: `mx-auto max-w-7xl px-6 pb-24 lg:pb-32`
- Same typography (`font-display` H2s, `text-ink/75` body, bullet style)
- Route-specific `head()` with title/description/og tags

**Hero copy**
- Kicker: `Legal`
- H1: `Accessibility Plan`
- Subhead: `How YOVU Office Phone identifies, removes, and prevents barriers to accessibility across our services, workplace, and communications.`
- Directly under the subhead: a `Download PDF` button (opens in new tab) — see PDF section below.

**Sections** (from the uploaded doc, verbatim structure):
1. Introduction (paragraph)
2. Areas of Consideration (intro + bulleted list — 7 items)
3. Accessibility Policy (paragraph)
4. Communication and Outreach (paragraph)
5. Customer Service (paragraph)
6. Product and Service Accessibility (paragraph)
7. Physical Space Accessibility (paragraph)
8. Feedback Mechanism (paragraphs + bulleted contact methods)
9. Compliance Monitoring and Reporting (paragraph)
10. Consultations (paragraph)
11. Plan Review Dates (bulleted: Last Review May 31 2025, Next Review May 31 2027)

The bullet renderer already handles `lead` + `body` — plain items will use `lead` only.

## Footer link

In `src/components/yovu/Footer.tsx`, wire the existing "Accessibility Plan" text (currently a static `<a>`) to link to `/accessibility-plan` via TanStack `<Link>`.

## PDF download — recommended method

**Best method: Lovable Assets (CDN pointer).** Rationale:
- The PDF is a binary file — Lovable Assets externalizes binaries to CDN storage instead of bloating the git repo.
- Produces a stable, cacheable URL served under `/__l5e/assets-v1/{asset_id}/{filename}`.
- Immutable URL is safe to share and won't 404 on redeploy.
- Simple to consume: import the generated `.asset.json`, use its `.url`.

**How it will work once you provide the PDF** (e.g. `Accessibility_Plan.pdf`):
1. Upload via the sandbox CLI: `lovable-assets create --file /mnt/user-uploads/Accessibility_Plan.pdf > src/assets/accessibility-plan.pdf.asset.json`
2. Import in the route: `import pdfAsset from "@/assets/accessibility-plan.pdf.asset.json"`
3. Render two links in the hero:
   - **Open in new tab:** `<a href={pdfAsset.url} target="_blank" rel="noopener noreferrer">View PDF</a>`
   - **Download:** `<a href={pdfAsset.url} download="YOVU-Accessibility-Plan.pdf">Download PDF</a>`

Alternatives considered:
- `public/` folder — works but ships the binary in the repo and doesn't get CDN treatment. Not recommended.
- Generating the PDF from the docx on the server — unnecessary complexity for a static legal document.

**Blocker for the PDF step:** you haven't uploaded a PDF yet — only the .docx. I'll build the page now with a placeholder button hidden until you upload the PDF (or, if you'd like, I can generate a PDF from the .docx content using the pdf skill and use that). Tell me which you'd prefer:
- (a) upload your own finalized PDF, then I wire it up, or
- (b) generate a PDF from the .docx content now and wire that up.

## Files touched

- Create `src/routes/accessibility-plan.tsx`
- Edit `src/components/yovu/Footer.tsx` (link swap)
- Later: add `src/assets/accessibility-plan.pdf.asset.json` once PDF is decided
