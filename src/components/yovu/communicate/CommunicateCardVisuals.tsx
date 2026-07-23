import { motion } from "motion/react";
import { Phone, PhoneCall } from "lucide-react";

/** Chat, SMS & Text: an incoming "call me back" text and a call kicking off. */
export function ChatToCall() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[16rem]"
      >
        <div className="w-max max-w-full rounded-2xl rounded-bl-sm bg-white px-3.5 py-2.5 text-sm text-slate-700 ring-1 ring-black/5 dark:bg-[#0b1733] dark:text-white/85 dark:ring-white/10">
          Can you call me back?
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="ml-auto mt-3 flex w-max items-center gap-2 rounded-full bg-signal px-3.5 py-2.5 text-sm font-medium text-white shadow-lg shadow-signal/30"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-white/20">
            <PhoneCall className="size-3.5" strokeWidth={2.5} />
          </span>
          Calling David…
        </motion.div>
      </motion.div>
    </div>
  );
}

const team = [
  { initials: "AV", name: "Alex V.", status: "Available", cls: "text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500" },
  { initials: "PK", name: "Priya K.", status: "On a call", cls: "text-[#dc2626] dark:text-red-400", dot: "bg-[#dc2626]" },
  { initials: "MB", name: "Michael B.", status: "Away", cls: "text-amber-600 dark:text-amber-400", dot: "bg-amber-500" },
];

/** Call Routing: a team roster with live availability statuses. */
export function AvailabilityRouting() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[19rem] max-w-[94%] rounded-xl bg-white p-4 text-left ring-1 ring-black/5 dark:bg-[#0b1733] dark:ring-white/10"
      >
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-white/60">
          Team availability
        </p>
        <div className="space-y-3">
          {team.map((m) => (
            <div key={m.initials} className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-signal/10 text-xs font-semibold text-signal">
                {m.initials}
              </span>
              <span className="flex-1 text-sm font-medium text-slate-800 dark:text-white">
                {m.name}
              </span>
              <span className={`inline-flex items-center gap-1.5 text-[13px] font-medium ${m.cls}`}>
                <span className={`size-2 rounded-full ${m.dot}`} />
                {m.status}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/** Queue Callback: wait-time notice with a keep-my-place callback offer. */
export function QueueCallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[19rem] max-w-[94%] rounded-xl bg-white p-5 text-center ring-1 ring-black/5 dark:bg-[#0b1733] dark:ring-white/10"
      >
        <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-signal/10 text-signal">
          <Phone className="size-5" strokeWidth={2} />
        </span>
        <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-white">
          Estimated wait: 4 min
        </p>
        <p className="mt-1 text-[13px] text-slate-500 dark:text-white/60">
          Keep your place in line and we&rsquo;ll call you back.
        </p>
        <span className="mt-3 inline-flex items-center justify-center rounded-full bg-signal px-4 py-2 text-[13px] font-semibold text-white">
          Request a callback
        </span>
      </motion.div>
    </div>
  );
}
