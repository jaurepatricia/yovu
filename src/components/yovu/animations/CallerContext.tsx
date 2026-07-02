import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PhoneIncoming } from "lucide-react";
import { demoContact } from "./demoContact";

/**
 * Looping "caller context" demo: an incoming call rings, then a screen pop
 * surfaces the caller's Applied Epic account before pickup. Pure CSS / motion.
 * Renders the popped state statically when reduced motion is preferred.
 */

const glass =
  "bg-white/80 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/50 dark:ring-white/15";

const details: { label: string; value: string; accent?: string }[] = [
  { label: "Policy", value: demoContact.policyType },
  { label: "Policy #", value: demoContact.policyNumber },
  { label: "Renewal", value: demoContact.renewal, accent: "text-[#c2410c]" },
  { label: "Status", value: demoContact.status, accent: "text-emerald-600" },
  { label: "Phone", value: demoContact.phone },
];

export function CallerContext() {
  const [popped, setPopped] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced.current) setPopped(true);
  }, []);

  useEffect(() => {
    if (reduced.current) return;
    const t = setTimeout(() => setPopped((p) => !p), popped ? 2600 : 1600);
    return () => clearTimeout(t);
  }, [popped]);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Faint floating chips for depth */}
      <motion.div
        aria-hidden
        className={`absolute left-[9%] top-[20%] h-8 w-20 rounded-lg ${glass} opacity-40`}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className={`absolute bottom-[16%] right-[9%] h-8 w-24 rounded-lg ${glass} opacity-40`}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="relative flex w-[19rem] max-w-[86%] flex-col items-center gap-3">
        {/* Incoming call banner */}
        <div className="flex items-center gap-2.5 rounded-full bg-white py-2 pl-2.5 pr-4 shadow-lg shadow-black/15 ring-1 ring-black/5">
          <span className="relative flex size-7 items-center justify-center rounded-full bg-[#2563eb] text-white">
            <PhoneIncoming className="size-3.5" strokeWidth={2.5} />
            <motion.span
              className="absolute inset-0 rounded-full ring-2 ring-[#2563eb]"
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
            />
          </span>
          <span className="text-xs font-medium text-slate-700">
            {popped ? "Matched to account" : "Incoming call"}
            <span className="ml-1 text-slate-400">{demoContact.phone}</span>
          </span>
        </div>

        {/* Screen-pop account card */}
        <AnimatePresence>
          {popped && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full overflow-hidden rounded-xl bg-white text-left shadow-2xl shadow-black/30 ring-1 ring-black/5"
            >
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-[#2563eb]/10 text-xs font-semibold text-[#2563eb]">
                  {demoContact.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {demoContact.name}
                  </p>
                  <p className="truncate text-[11px] text-slate-500">
                    {demoContact.addressLine2}
                  </p>
                </div>
              </div>

              {/* Detail rows */}
              <div className="divide-y divide-slate-100 px-4 py-1 text-[13px]">
                {details.map((d, i) => (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.08 }}
                    className="flex items-center justify-between py-1.5"
                  >
                    <span className="text-slate-500">{d.label}</span>
                    <span className={`font-medium ${d.accent ?? "text-slate-800"}`}>
                      {d.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-2 border-t border-slate-200 px-4 py-2 text-[11px] text-slate-400">
                <span>Applied Epic</span>
                <span className="text-slate-300">|</span>
                <span>Screen pop</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
