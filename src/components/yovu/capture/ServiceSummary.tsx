import { motion } from "motion/react";

const lines = [
  "Recall notice: replace airbag inflator module",
  "Front brake pads worn — ~20% remaining",
  "Follow-up: order parts and book inspection",
];

/**
 * Frosted AI call-summary overlaid on the left of a z-layout image, capturing
 * the service details discussed on a call. Theme aware, decorative.
 */
export function ServiceSummary() {
  return (
    <div className="absolute inset-y-0 left-0 flex w-1/2 items-center justify-center p-4 sm:p-6">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex w-full max-w-[18rem] flex-col gap-3 rounded-2xl bg-white/75 p-4 shadow-xl shadow-black/20 ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#0b1733]/60 dark:ring-white/15"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">
          Call summary
        </p>
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.35 + i * 0.2 }}
            className="text-[13px] leading-snug text-slate-700 dark:text-white/85"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
