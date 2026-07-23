import { motion } from "motion/react";
import { Mail } from "lucide-react";

/**
 * Frosted activity prompt overlaid on the right of a z-layout image: an email
 * activity logged against a Salesforce record. Theme aware, decorative.
 */
export function ActivityPrompt() {
  return (
    <div className="absolute inset-y-0 right-0 flex w-[64%] items-center justify-center p-4 sm:p-6">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex w-full max-w-[23rem] flex-col rounded-2xl bg-white/75 p-4 shadow-xl shadow-black/20 ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#0b1733]/60 dark:ring-white/15"
      >
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300">
            <Mail className="size-[18px]" strokeWidth={2.25} />
          </span>
          <p className="text-[13px] font-semibold leading-snug text-slate-800 dark:text-white">
            Commercial General Liability Insurance Quote
          </p>
        </div>
        <p className="mt-2 whitespace-nowrap text-[12px] text-slate-500 dark:text-white/60">
          Michael Brown sent an email to David Smith
        </p>
      </motion.div>
    </div>
  );
}
