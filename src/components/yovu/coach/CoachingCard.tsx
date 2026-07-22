import { motion } from "motion/react";

/**
 * Glassy coaching card overlaid on the left of a z-layout image. Shows a short
 * transcript excerpt from a real call with an AI coaching note surfacing on the
 * strong line. Theme aware, decorative.
 */
export function CoachingCard() {
  return (
    <div className="absolute inset-y-0 left-0 flex w-1/2 items-center justify-center p-4 sm:p-6">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[17rem] overflow-hidden rounded-2xl bg-white/90 shadow-xl shadow-black/20 ring-1 ring-black/5 backdrop-blur-md dark:bg-[#0b1733]/75 dark:ring-white/10"
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-slate-200/70 px-4 py-3 dark:border-white/10">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-40" />
            <span className="relative inline-flex size-2 rounded-full bg-signal" />
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">
            AI Coach
          </p>
        </div>

        {/* Transcript excerpt */}
        <div className="space-y-2.5 px-4 py-3.5 text-[13px] leading-snug">
          <p className="text-slate-500 dark:text-white/55">
            <span className="font-semibold text-slate-700 dark:text-white/80">Client:</span> Do I
            need to add my new driver right away?
          </p>
          <motion.p
            initial={{ backgroundColor: "rgba(16,185,129,0)" }}
            whileInView={{ backgroundColor: "rgba(16,185,129,0.14)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-md px-1.5 py-1 text-slate-700 dark:text-white/85"
          >
            <span className="font-semibold text-slate-800 dark:text-white">You:</span> Great catch —
            let&rsquo;s review your coverage before we make any changes.
          </motion.p>
        </div>

        {/* Coaching note */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center gap-2 border-t border-slate-200/70 px-4 py-3 dark:border-white/10"
        >
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
            Strong discovery
          </span>
          <span className="text-[11px] text-slate-500 dark:text-white/55">Nice open question</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
