import { motion } from "motion/react";
import { FileText } from "lucide-react";

/**
 * SMS Support visual: a client asks for their insurance quote and the rep sends
 * it back as a PDF, all inside the Salesforce SMS thread. Theme aware.
 */
export function SmsChat() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[22rem] max-w-[94%] rounded-xl bg-white p-4 text-left ring-1 ring-black/5 dark:bg-[#0b1733] dark:ring-white/10"
      >
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-white/60">
          SMS · David Smith
        </p>
        <div className="space-y-2.5 text-[13px] leading-snug">
          {/* Incoming */}
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2 text-slate-700 dark:bg-white/10 dark:text-white/85">
            Hi! Any update on my Commercial General Liability quote?
          </div>
          {/* Outgoing */}
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-signal px-3 py-2 text-white">
            All done — sending it over now.
          </div>
          {/* Outgoing PDF attachment */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="ml-auto flex max-w-[80%] items-center gap-2.5 rounded-2xl rounded-br-sm bg-signal px-3 py-2 text-white"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-white/20">
              <FileText className="size-4" strokeWidth={2} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[12px] font-semibold">CGL_Insurance_Quote.pdf</span>
              <span className="block text-[11px] text-white/70">PDF · 248 KB</span>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
