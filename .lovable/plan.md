# Widen `/privacy-policy` containers to `max-w-7xl`

In `src/routes/privacy-policy.tsx`, change both section containers from `max-w-4xl` to `max-w-7xl`:

- Line 123 (Hero): `mx-auto max-w-4xl px-6 pt-40 pb-16 text-center lg:pt-56 lg:pb-24` → `max-w-7xl`
- Line 137 (Body): `mx-auto max-w-4xl px-6 py-24 lg:py-32` → `max-w-7xl`

The inner hero paragraph keeps its `max-w-2xl` for readable line length. No other changes.
