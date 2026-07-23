import { motion } from "motion/react";
import { Phone, TrendingUp } from "lucide-react";

/**
 * Targeted-marketing visual: a campaign vanity number (last four digits spell
 * CARS / 2277) with tracked-call stats, showing dedicated numbers tied to a
 * promotion. Theme aware. Fictional placeholder number.
 */
export function VanityNumberPromo() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[20rem] max-w-[92%] rounded-xl bg-white p-5 text-center shadow-2xl shadow-black/20 ring-1 ring-black/5 dark:bg-[#0b1733] dark:ring-white/10"
      >
        <span className="inline-flex rounded-full bg-signal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-signal">
          Spring Sales Event
        </span>
        <div className="mt-3 flex items-center justify-center gap-2 text-slate-800 dark:text-white">
          <Phone className="size-4 text-signal" strokeWidth={2.25} />
          <span className="font-display text-2xl font-bold tracking-tight">
            1-800-555-<span className="text-signal">CARS</span>
          </span>
        </div>
        <p className="mt-1 text-[11px] text-slate-400 dark:text-white/45">Dial 2 · 2 · 7 · 7</p>
        <div className="mt-4 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-left dark:bg-white/5">
          <span className="text-[12px] text-slate-500 dark:text-white/60">Calls tracked this month</span>
          <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="size-3.5" strokeWidth={2.5} />
            342
          </span>
        </div>
      </motion.div>
    </div>
  );
}
