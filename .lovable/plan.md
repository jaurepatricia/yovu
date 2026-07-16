## Verify the sticky-note migration ran

Since the review notes live in an **external Supabase project** (not this project's Lovable Cloud), I can't query it directly from here. Here are three ways to confirm the three new columns (`anchor_id`, `rel_x`, `rel_y`) exist on `public.review_notes`.

### Option A — Check in the Supabase dashboard (fastest)
1. Open your Supabase project → **Table Editor** → `review_notes`.
2. Look at the column list. You should see `anchor_id` (text), `rel_x` (float4), `rel_y` (float4) alongside the existing `x`, `y`, `body`, `pathname`, etc.

### Option B — Run a quick SQL check
In the Supabase **SQL Editor**, run:

```sql
select column_name, data_type
from information_schema.columns
where table_schema = 'public'
  and table_name = 'review_notes'
order by ordinal_position;
```

You should see `anchor_id`, `rel_x`, `rel_y` in the results.

### Option C — Test it live on the site
1. Unlock the sticky-note tool on the site.
2. Drop a new note on any section.
3. Reload the page — if the note reappears in roughly the same spot **and** doesn't show the "anchor missing" badge, the new columns are being written and read correctly.

If the insert fails silently or the note disappears on reload, the columns aren't there yet and we need to re-run the migration.

---

Want me to switch to build mode just to add a tiny dev-only "migration status" indicator in the sticky-note toolbar (checks the columns exist on load and warns if not)? Otherwise Option B is the definitive check.