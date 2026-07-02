import { motion } from "motion/react";
import { FileText, ChevronDown, Save } from "lucide-react";

/**
 * YOVU softphone Call Log panel being filled out and saved to the BMS.
 * Pure CSS / motion.
 */


const NOTES =
  "Adding Mrs. Amy Carter to the auto policy as a second driver. Awaiting an email with a photo of her driver's license.";

export function ActivityLogging() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[19rem] max-w-[88%] rounded-xl bg-white text-left shadow-2xl shadow-black/30 ring-1 ring-black/5"
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
          <FileText className="size-4 text-[#2563eb]" />
          <span className="text-sm font-semibold text-[#2563eb]">Call Log</span>
          <ChevronDown className="ml-auto size-4 text-[#2563eb]" />
        </div>

        <div className="space-y-3 px-4 py-3">
          {/* What */}
          <fieldset className="rounded-md border border-slate-200 px-3 pb-2 pt-1">
            <legend className="px-1 text-[11px] text-slate-500">What *</legend>
            <span className="text-[13px] font-medium text-[#2563eb]">
              Adding a Driver
            </span>
          </fieldset>

          {/* Notes */}
          <fieldset className="rounded-md border border-slate-200 px-3 pb-2 pt-1">
            <legend className="px-1 text-[11px] text-slate-500">Notes</legend>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-[13px] leading-snug text-slate-700"
            >
              {NOTES}
            </motion.p>
          </fieldset>

          {/* Save */}
          <div className="flex justify-end">
            <motion.span
              className="flex size-9 items-center justify-center rounded-md bg-[#2563eb] text-white shadow-md shadow-[#2563eb]/30"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <Save className="size-4" />
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
