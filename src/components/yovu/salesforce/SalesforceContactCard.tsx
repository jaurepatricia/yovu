import { motion } from "motion/react";
import { User, Phone } from "lucide-react";

/**
 * Click-to-call visual styled like a Salesforce contact card: contact icon with
 * name, title, email, and a click-to-call phone number. Theme aware.
 * Fictional placeholder contact (reserved 555-01xx number).
 */
export function SalesforceContactCard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[22rem] max-w-[94%] rounded-xl bg-white text-left ring-1 ring-black/5 dark:bg-[#0b1733] dark:ring-white/10"
      >
        <p className="border-b border-slate-100 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:border-white/10 dark:text-white/60">
          Contact
        </p>
        <div className="flex items-start gap-3 px-4 py-3.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-signal/10 text-signal">
            <User className="size-5" strokeWidth={2} />
          </span>
          <div className="min-w-0 flex-1 space-y-2">
            <p className="text-sm font-semibold text-signal">David Smith</p>
            <dl className="space-y-1 text-[12px]">
              <div className="flex gap-2">
                <dt className="w-12 shrink-0 text-slate-400 dark:text-white/45">Title</dt>
                <dd className="text-slate-600 dark:text-white/70">VP, Operations</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-12 shrink-0 text-slate-400 dark:text-white/45">Email</dt>
                <dd className="truncate text-slate-600 dark:text-white/70">david.smith@example.com</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-12 shrink-0 text-slate-400 dark:text-white/45">Phone</dt>
                <dd className="flex items-center gap-1.5 font-medium text-signal">
                  <Phone className="size-3.5 fill-current" strokeWidth={0} />
                  +1 (416) 555-0148
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
