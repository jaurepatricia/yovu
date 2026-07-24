import { motion } from "motion/react";
import { Phone, CalendarCheck, MessageSquare, type LucideIcon } from "lucide-react";

type Row = { Icon: LucideIcon; tint: string; title: string; sub: string; when: string };

const rows: Row[] = [
  {
    Icon: Phone,
    tint: "bg-signal/10 text-signal",
    title: "Booked a test drive — 2024 CR-V",
    sub: "Call logged to Marcus Bellemare",
    when: "Today",
  },
  {
    Icon: CalendarCheck,
    tint: "bg-emerald-100 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    title: "Service appointment confirmed",
    sub: "Oil change + brake inspection",
    when: "Today",
  },
  {
    Icon: MessageSquare,
    tint: "bg-emerald-100 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    title: "SMS from the lot",
    sub: "Is the Civic still available?",
    when: "Yesterday",
  },
];

/** Automotive activity log: calls, service bookings, and texts logged to the
 *  customer record automatically. Theme aware. */
export function AutoActivityLog() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[23rem] max-w-[92%] rounded-xl bg-white p-4 text-left shadow-2xl shadow-black/20 ring-1 ring-black/5 dark:bg-[#0b1733] dark:ring-white/10"
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
