import { motion } from "motion/react";
import { Phone, ArrowLeftRight, Pause, Plus, PhoneOff } from "lucide-react";
import { demoContact } from "./demoContact";

/**
 * Static "call control" visual: an active call with a bar of controls —
 * transfer, hold, add a call, and end. Matches the feature card style.
 */
const controls = [
  { icon: ArrowLeftRight, label: "Transfer" },
  { icon: Pause, label: "Hold" },
  { icon: Plus, label: "Add call" },
];

export function CallControl() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[22rem] max-w-[92%] rounded-xl bg-white p-4 text-left shadow-2xl shadow-black/30 ring-1 ring-black/5"
      >
        {/* Active call header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-signal text-white">
              <Phone className="size-4" strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-[13px] font-semibold text-slate-800">{demoContact.name}</p>
              <p className="text-[11px] text-slate-500">On call · 02:14</p>
            </div>
          </div>
          <span className="flex items-end gap-0.5">
            {[6, 11, 7, 13, 8].map((h, i) => (
              <span
                key={i}
                className="w-0.5 rounded-full bg-signal"
                style={{ height: `${h}px` }}
              />
            ))}
          </span>
        </div>

        {/* Control bar */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          {controls.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 rounded-lg bg-slate-50 py-2.5 text-[10px] font-medium text-slate-600"
            >
              <Icon className="size-4 text-slate-700" strokeWidth={2} />
              {label}
            </div>
          ))}
          <div className="flex flex-col items-center gap-1.5 rounded-lg bg-[#dc2626]/10 py-2.5 text-[10px] font-medium text-[#dc2626]">
            <PhoneOff className="size-4" strokeWidth={2} />
            End
          </div>
        </div>
      </motion.div>
    </div>
  );
}
