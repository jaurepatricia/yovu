# Remove top padding on privacy-policy body section

In `src/routes/privacy-policy.tsx` line 137, change the body section classes:

- From: `mx-auto max-w-7xl px-6 py-24 lg:py-32`
- To: `mx-auto max-w-7xl px-6 pb-24 lg:pb-32`

This removes the top padding while preserving the bottom padding.
