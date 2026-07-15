# Salesforce Integration Page

Create `/salesforce-integration` route and link it from the Products → Integrations mega menu.

## 1. New route: `src/routes/salesforce-integration.tsx`

Structure:
- `<Nav />`
- Placeholder hero section (simple centered layout, matches editorial rhythm of other pages):
  - Heading: "Salesforce Integration"
  - Copy: "Skyrocket sales and productivity and reporting with complete Salesforce integration built right into our VoIP phone service."
- `<IndividualFeatureCards heading="..." cards={...} />` with the four cards: Screen Pop, Click to Call, Call Recording, Call Control.
- `<SectionIntroFeatureGrid />` reused from the Microsoft Teams page, with:
  - Intro copy: "Why use an integration?" (same 2-column intro copy as Teams page)
  - 3-column feature grid replaced with:
    - Live Updates — `AlertCircle` icon
    - Improve Accuracy — `Zap` icon
    - Stay Current — `MessageCircle` icon
- `<FAQ items={salesforceFaq} heading="Frequently Asked Questions" />` with the 8 provided Q&As.
- `<Footer />`

Route `head()` gets Salesforce-specific title/description and og tags.

## 2. Nav update: `src/components/yovu/Nav.tsx`

Change the `SalesForce` integration entry so `href` points to `/salesforce-integration` (currently `#`).

## 3. Reuse check

- `IndividualFeatureCards`, `SectionIntroFeatureGrid`, and `FAQ` are already reusable with prop-driven content — no component changes needed beyond passing new data.
- If `SectionIntroFeatureGrid` currently hardcodes the "Why use an integration?" intro or icons, I'll refactor it to accept `intro` and `features` props so both the Teams and Salesforce pages can share it cleanly. (I'll confirm on entering build mode by reading the file.)

## Technical notes
- Filename `salesforce-integration.tsx` → route id `/salesforce-integration` (matches TanStack file-based routing rules).
- Icons from `lucide-react`: `AlertCircle`, `Zap`, `MessageCircle`.
- No business logic / backend changes.
