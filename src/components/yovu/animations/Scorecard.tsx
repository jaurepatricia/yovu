import { motion } from "motion/react";
import { Check } from "lucide-react";

/**
 * Static "call scorecard" visual: a graded call against a rubric with an
 * overall score. Matches the feature card style.
 */
const criteria = [
  { label: "Branded greeting", done: true },
  { label: "Required disclosures", done: true },
  { label: "Needs assessment", done: true },
  { label: "Clear next step", done: false },
];

export function Scorecard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[22rem] max-w-[92%] rounded-xl bg-white p-4 text-left shadow-2xl shadow-black/30 ring-1 ring-black/5"
      >
        {/* Header + score */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <p className="text-[13px] font-semibold text-slate-800">Call Scorecard</p>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
            88%
          </span>
        </div>

        {/* Rubric rows */}
        <div className="mt-3 space-y-2.5">
          {criteria.map((c) => (
            <div key={c.label} className="flex items-center gap-2.5">
              <span
                className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
                  c.done ? "bg-emerald-500 text-white" : "border border-slate-300 text-transparent"
                }`}
              >
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span
                className={`text-[13px] ${c.done ? "text-slate-700" : "text-slate-400"}`}
              >
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
