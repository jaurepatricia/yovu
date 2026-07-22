import { motion } from "motion/react";
import { Voicemail } from "lucide-react";

/**
 * Frosted alert overlaid on the left of a z-layout image: a new voicemail
 * transcription has landed. Theme aware, decorative.
 */
export function VoicemailAlert() {
  return (
    <div className="absolute inset-y-0 left-0 flex w-1/2 items-center justify-center p-4 sm:p-6">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex w-full max-w-[17rem] items-center gap-3 rounded-2xl bg-white/75 p-3.5 shadow-xl shadow-black/20 ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#0b1733]/60 dark:ring-white/15"
      >
        <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-signal/10 text-signal">
          <motion.span
            className="absolute inline-flex size-full rounded-full bg-signal"
            animate={{ scale: [1, 1.3], opacity: [0.25, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <Voicemail className="relative size-5" strokeWidth={2.25} />
        </span>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-slate-800 dark:text-white">New voicemail</p>
          <p className="text-[12px] text-slate-500 dark:text-white/60">
            Transcription available
          </p>
        </div>
      </motion.div>
    </div>
  );
}
