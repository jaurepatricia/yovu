import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const rows = [
  { label: "Vehicle", value: "2024 Honda CR-V" },
  { label: "Interest", value: "Trade-in + financing" },
  { label: "Next step", value: "Test drive — Sat 10am" },
];

/** Automotive AI call summary card: the vehicle, the customer's interest, and
 *  the next step pulled from a sales call. Theme aware. */
export function AutoCallSummary() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[21rem] max-w-[92%] overflow-hidden rounded-xl bg-white text-left shadow-2xl shadow-black/20 ring-1 ring-black/5 dark:bg-[#0b1733] dark:ring-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 dark:border-white/10">
          <Sparkles className="size-3.5 text-signal" strokeWidth={2.25} />
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-white/60">
            AI call summary
          </p>
        </div>
        <dl className="space-y-2.5 px-4 py-3.5 text-[13px]">
          {rows.map((r) => (
            <div key={r.label} className="flex gap-3">
              <dt className="w-20 shrink-0 text-slate-400 dark:text-white/45">{r.label}</dt>
              <dd className="font-medium text-slate-700 dark:text-white/85">{r.value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </div>
  );
}
