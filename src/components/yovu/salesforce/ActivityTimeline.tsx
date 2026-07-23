import { motion } from "motion/react";
import { Mail, MessageSquare, Phone, type LucideIcon } from "lucide-react";

type Row = { Icon: LucideIcon; tint: string; title: string; sub: string; when: string };

const rows: Row[] = [
  {
    Icon: Mail,
    tint: "bg-emerald-100 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    title: "Commercial General Liability Insurance Quote",
    sub: "You sent an email to David Smith",
    when: "Today",
  },
  {
    Icon: MessageSquare,
    tint: "bg-emerald-100 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    title: "SMS to David Smith — here it is attached",
    sub: "You had a task",
    when: "Today",
  },
  {
    Icon: MessageSquare,
    tint: "bg-emerald-100 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    title: "SMS from David Smith — could you text it?",
    sub: "You had a task",
    when: "Today",
  },
  {
    Icon: Phone,
    tint: "bg-signal/10 text-signal",
    title: "Call to David Smith",
    sub: "You logged a call about YOVU Office Phone",
    when: "Yesterday",
  },
];

/**
 * Activity Tracking visual: SMS and calls captured alongside emails and tasks
 * in the native Salesforce activity timeline. Theme aware.
 */
export function ActivityTimeline() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[23rem] max-w-[94%] rounded-xl bg-white p-4 text-left ring-1 ring-black/5 dark:bg-[#0b1733] dark:ring-white/10"
      >
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-white/60">
          Activity
        </p>
        <div className="space-y-3">
          {rows.map((r, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className={`flex size-7 shrink-0 items-center justify-center rounded-md ${r.tint}`}>
                <r.Icon className="size-3.5" strokeWidth={2.25} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12.5px] font-medium text-slate-700 dark:text-white/85">
                  {r.title}
                </p>
                <p className="truncate text-[11px] text-slate-500 dark:text-white/55">{r.sub}</p>
              </div>
              <span className="shrink-0 text-[11px] text-slate-400 dark:text-white/45">{r.when}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
