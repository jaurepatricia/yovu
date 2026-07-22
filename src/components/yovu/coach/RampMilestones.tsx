import { motion } from "motion/react";
import { Check } from "lucide-react";

const milestones = [
  { day: "30", label: "Onboarding complete", metric: "First solo calls" },
  { day: "60", label: "Hitting call targets", metric: "Consistent volume" },
  { day: "90", label: "Fully ramped", metric: "Owning renewals" },
];

/**
 * Ramp-milestone tracker overlaid on the right of a z-layout image. Each
 * 30/60/90-day milestone checks off in sequence. Theme aware, decorative.
 */
export function RampMilestones() {
  return (
    <div className="absolute inset-y-0 right-0 flex w-1/2 items-center justify-center p-4 sm:p-6">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[17rem] overflow-hidden rounded-2xl bg-white/90 shadow-xl shadow-black/20 ring-1 ring-black/5 backdrop-blur-md dark:bg-[#0b1733]/75 dark:ring-white/10"
      >
        <div className="border-b border-slate-200/70 px-4 py-3 dark:border-white/10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">
            Ramp progress
          </p>
        </div>
        <div className="space-y-3 px-4 py-4">
          {milestones.map((m, i) => (
            <motion.div
              key={m.day}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.45 }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{ scale: 0.6 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 0.45 + i * 0.45, ease: "backOut" }}
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"
              >
                <Check className="size-4" strokeWidth={3} />
              </motion.span>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-slate-800 dark:text-white">
                  {m.day}-Day &middot; {m.label}
                </p>
                <p className="truncate text-[11px] text-slate-500 dark:text-white/55">{m.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
