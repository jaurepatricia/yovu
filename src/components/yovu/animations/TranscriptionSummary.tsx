import { motion } from "motion/react";
import { Star } from "lucide-react";
import { demoContact } from "./demoContact";

/**
 * AI call summary card with green sentiment analysis, a summary, and topics.
 * Pure CSS / motion.
 */


export function TranscriptionSummary() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[24rem] max-w-[92%] space-y-3 rounded-xl bg-white p-4 text-left shadow-2xl shadow-black/30 ring-1 ring-black/5"
      >
        {/* Sentiment */}
        <div>
          <p className="text-[11px] font-medium text-slate-500">
            Sentiment Analysis
          </p>
          <div className="mt-1 h-6 overflow-hidden rounded-md bg-slate-100">
            <motion.div
              className="flex h-full items-center justify-center rounded-md bg-emerald-500 text-xs font-semibold text-white"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              100
            </motion.div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <p className="text-[11px] font-medium text-slate-500">Summary</p>
          <p className="mt-1 text-[13px] leading-snug text-slate-700">
            {demoContact.firstName} is happy with his auto coverage so far and
            would like to add his wife as a second driver on the policy.
          </p>
        </div>

        {/* Topics */}
        <div>
          <p className="text-[11px] font-medium text-slate-500">Topics</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {["Renewal", "Adding a Driver"].map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center gap-1 rounded-full bg-[#2563eb]/10 px-2 py-0.5 text-[11px] font-medium text-[#2563eb]"
              >
                <Star className="size-3 fill-amber-400 text-amber-400" />
                {topic}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
