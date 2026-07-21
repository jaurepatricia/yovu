import { motion } from "motion/react";
import { Search, Play } from "lucide-react";

/**
 * Static "searchable call history" visual: a search field over a list of past
 * calls with client, date, and playback. Matches the feature card style.
 */
const results = [
  { name: "James Carter", meta: "Renewal · Mar 4", dur: "6:12" },
  { name: "Priya Anand", meta: "Policy change · Mar 2", dur: "3:48" },
  { name: "Marc Tremblay", meta: "New quote · Feb 28", dur: "8:05" },
];

export function SearchableHistory() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[24rem] max-w-[92%] rounded-xl bg-white p-4 text-left shadow-2xl shadow-black/30 ring-1 ring-black/5"
      >
        {/* Search field */}
        <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
          <Search className="size-4 text-slate-400" strokeWidth={2} />
          <span className="text-[13px] text-slate-500">
            renewal
            <span className="ml-0.5 inline-block h-3.5 w-px translate-y-0.5 bg-slate-400" />
          </span>
        </div>

        {/* Results */}
        <div className="mt-3 divide-y divide-slate-100">
          {results.map((r) => (
            <div key={r.name} className="flex items-center justify-between py-2">
              <div>
                <p className="text-[13px] font-semibold text-slate-800">{r.name}</p>
                <p className="text-[11px] text-slate-500">{r.meta}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] tabular-nums text-slate-400">{r.dur}</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-[#2563eb]/10 text-[#2563eb]">
                  <Play className="size-3 fill-current" strokeWidth={0} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
