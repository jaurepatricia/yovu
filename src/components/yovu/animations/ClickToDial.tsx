import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, PhoneCall, MousePointer2 } from "lucide-react";
import { demoContact } from "./demoContact";

/**
 * Looping "click-to-dial" demo styled after the Applied Epic contact card.
 * A cursor taps the blue phone number, it highlights, and a call connects —
 * making the click-to-call action obvious. Pure CSS / motion, no assets.
 * Renders a static connected state when the user prefers reduced motion.
 */

type Phase = "ready" | "tap" | "calling" | "connected";

const STEPS: { phase: Phase; ms: number }[] = [
  { phase: "ready", ms: 1700 },
  { phase: "tap", ms: 500 },
  { phase: "calling", ms: 1400 },
  { phase: "connected", ms: 1800 },
];


export function ClickToDial() {
  const [step, setStep] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced.current) setStep(3);
  }, []);

  useEffect(() => {
    if (reduced.current) return;
    const t = setTimeout(
      () => setStep((i) => (i + 1) % STEPS.length),
      STEPS[step].ms,
    );
    return () => clearTimeout(t);
  }, [step]);

  const phase = STEPS[step].phase;
  const tapping = phase === "tap";
  const active = phase === "tap" || phase === "calling" || phase === "connected";
  const inCall = phase === "calling" || phase === "connected";

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

      {/* Applied Epic contact card */}
      <div className="relative w-[19rem] max-w-[86%] overflow-hidden rounded-xl bg-white text-left shadow-2xl shadow-black/30 ring-1 ring-black/5">
        {/* Tabs */}
        <div className="flex items-end gap-1 border-b border-slate-200 px-3 pt-3">
          <span className="rounded-t-md border border-b-0 border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
            Primary
          </span>
          <span className="px-3 py-1 text-xs font-medium text-slate-400">
            Additional
          </span>
        </div>

        {/* Body */}
        <div className="space-y-0.5 px-4 py-3 text-[13px] leading-snug text-slate-700">
          <p className="font-semibold text-slate-800">{demoContact.name}</p>
          <p>{demoContact.addressLine1}</p>
          <p>{demoContact.addressLine2}</p>
          <p>Canada</p>

          {/* Click-to-call row */}
          <div className="relative pt-0.5">
            <span
              className={`relative inline-flex items-center gap-1.5 rounded px-1.5 py-0.5 transition-colors ${
                active ? "bg-[#2563eb]/10 ring-1 ring-[#2563eb]/30" : ""
              }`}
            >
              {/* Tap ripple */}
              <AnimatePresence>
                {tapping && (
                  <motion.span
                    className="absolute inset-0 rounded bg-[#2563eb]/25"
                    initial={{ scale: 0.6, opacity: 0.7 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
              <Phone className="size-3.5 text-[#2563eb]" strokeWidth={2.5} />
              <span className="font-medium text-[#2563eb] underline decoration-[#2563eb]/40 underline-offset-2">
                {demoContact.phone}
              </span>
            </span>
          </div>

          <p className="text-slate-500">Contact via: Phone</p>
        </div>

        {/* Cursor tapping the number */}
        {!reduced.current && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-[26%] top-[63%] z-30"
            initial={false}
            animate={{
              x: phase === "ready" ? [26, 0] : 0,
              y: phase === "ready" ? [26, 0] : 0,
              scale: tapping ? 0.85 : 1,
              opacity: inCall ? 0 : 1,
            }}
            transition={{ duration: phase === "ready" ? 1.2 : 0.25, ease: "easeInOut" }}
          >
            <MousePointer2 className="size-5 fill-slate-900 text-white drop-shadow" />
          </motion.div>
        )}
      </div>

      {/* Call status pill */}
      <AnimatePresence>
        {inCall && (
          <motion.div
            className="absolute bottom-[9%] flex items-center gap-2.5 rounded-full bg-white py-2 pl-2.5 pr-4 shadow-xl shadow-black/20 ring-1 ring-black/5"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-[#2563eb] text-white">
              <PhoneCall className="size-3.5" strokeWidth={2.5} />
            </span>
            {phase === "calling" ? (
              <span className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                Calling {demoContact.firstName}
                <span className="flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="size-1 rounded-full bg-slate-400"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </span>
              </span>
            ) : (
              <span className="flex items-center gap-2 text-xs font-medium text-slate-700">
                Connected
                <span className="flex items-end gap-0.5">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.span
                      key={i}
                      className="w-0.5 rounded-full bg-[#2563eb]"
                      animate={{ height: [4, 12, 6, 10, 4] }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        delay: i * 0.12,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </span>
                <span className="font-mono text-[11px] tabular-nums text-slate-400">
                  00:04
                </span>
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
