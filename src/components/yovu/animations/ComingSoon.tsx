import { motion } from "motion/react";
import { Lock } from "lucide-react";

/**
 * See-through window popup with an animated lock for the "More Coming Soon"
 * feature. Pure CSS / motion.
 */

export function ComingSoon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex w-[20rem] max-w-[86%] flex-col items-center gap-4 rounded-2xl bg-white/10 px-8 py-12 text-center shadow-2xl shadow-black/20 ring-1 ring-white/25 backdrop-blur-md"
      >
        {/* Animated lock */}
        <div className="relative">
          <motion.span
            className="absolute inset-0 rounded-full ring-1 ring-[#3b82f6]"
            animate={{ scale: [1, 1.35], opacity: [0.35, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            className="relative flex size-16 items-center justify-center rounded-full bg-signal text-white shadow-lg shadow-signal/40 ring-1 ring-[#3b82f6]/50"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Lock className="size-7" strokeWidth={2} />
          </motion.span>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-white">More coming soon</p>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-white/25" />
          <div className="mx-auto h-1.5 w-16 rounded-full bg-white/20" />
        </div>
      </motion.div>
    </div>
  );
}
