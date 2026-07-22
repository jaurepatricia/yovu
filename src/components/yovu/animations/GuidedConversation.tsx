import { motion } from "motion/react";
import { Lightbulb, Star } from "lucide-react";

/**
 * Guided Conversations visual: a live in-call prompt surfaces a suggested
 * question, the rep asks it, and it lands as a strong opening. Matches the
 * coaching-card style from the z-layout. Theme aware.
 */
export function GuidedConversation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[22rem] max-w-[92%] overflow-hidden rounded-2xl bg-white text-left ring-1 ring-black/5 dark:bg-[#0b1733] dark:ring-white/10"
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-slate-200/70 px-4 py-3 dark:border-white/10">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-40" />
            <span className="relative inline-flex size-2 rounded-full bg-signal" />
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">
            Live Coach
          </p>
        </div>

        <div className="space-y-2.5 px-4 py-3.5 text-[13px] leading-snug">
          {/* Suggested prompt surfacing mid-call */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="flex items-start gap-2 rounded-lg bg-signal/10 px-2.5 py-2 ring-1 ring-signal/20"
          >
            <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-signal" strokeWidth={2.5} />
            <p className="text-slate-600 dark:text-white/70">
              <span className="font-semibold text-signal">Suggested:</span> Ask what&rsquo;s changed
              in their business this year.
            </p>
          </motion.div>

          {/* Rep delivers it */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.75 }}
            className="text-slate-700 dark:text-white/85"
          >
            <span className="font-semibold text-slate-800 dark:text-white">You:</span> What&rsquo;s
            changed for your business since we last spoke?
          </motion.p>
        </div>

        {/* Coaching note */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 1.1 }}
          className="flex items-center gap-1.5 border-t border-slate-200/70 px-4 py-3 dark:border-white/10"
        >
          <Star className="size-3.5 shrink-0 fill-amber-400 text-amber-400" strokeWidth={0} />
          <span className="text-[13px] font-semibold text-slate-800 dark:text-white">
            Great opening question
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
