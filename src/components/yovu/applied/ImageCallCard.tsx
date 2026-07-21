type Row = { label: string; value: string; accent?: "renewal" | "status" };

// Fictional placeholder client, distinct from the screen-pop demo contact.
const client: { name: string; location: string; rows: Row[] } = {
  name: "Sarah Mitchell",
  location: "Calgary, AB  T2P 3H7",
  rows: [
    { label: "Policy", value: "Commercial Auto" },
    { label: "Policy #", value: "CA-7781045" },
    { label: "Renewal", value: "in 30 days", accent: "renewal" },
    { label: "Status", value: "Active", accent: "status" },
    { label: "Phone", value: "(403) 555-0198" },
  ],
};

/**
 * Glassy call-details card overlaid on the left of a z-layout image. Theme
 * aware: frosted white in light mode, deep navy in dark mode. Decorative.
 */
export function ImageCallCard() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-5 left-5 w-56 overflow-hidden rounded-2xl bg-white/85 shadow-xl shadow-black/20 ring-1 ring-black/5 backdrop-blur-md dark:bg-[#0b1733]/70 dark:ring-white/10"
    >
      {/* Header */}
      <div className="border-b border-slate-200/70 px-4 py-3 dark:border-white/10">
        <p className="truncate text-sm font-semibold text-slate-800 dark:text-white">
          {client.name}
        </p>
        <p className="truncate text-[11px] text-slate-500 dark:text-white/60">{client.location}</p>
      </div>

      {/* Detail rows */}
      <div className="divide-y divide-slate-100 px-4 py-1 text-[13px] dark:divide-white/10">
        {client.rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-1.5">
            <span className="text-slate-500 dark:text-white/55">{row.label}</span>
            <span
              className={
                row.accent === "renewal"
                  ? "font-medium text-[#c2410c] dark:text-orange-300"
                  : row.accent === "status"
                    ? "font-medium text-emerald-600 dark:text-emerald-400"
                    : "font-medium text-slate-800 dark:text-white"
              }
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
