import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, PhoneCall, MousePointer2 } from "lucide-react";

/**
 * Looping "click-to-dial" demo that sits over a feature card.
 * A cursor taps the dial button on a contact card, a call connects, and the
 * sequence loops. Pure CSS / motion — no media assets. Renders a static
 * connected state when the user prefers reduced motion.
 */

type Phase = "ready" | "tap" | "calling" | "connected";

const STEPS: { phase: Phase; ms: number }[] = [
  { phase: "ready", ms: 1300 },
  { phase: "tap", ms: 450 },
  { phase: "calling", ms: 1300 },
  { phase: "connected", ms: 1700 },
];

// Frosted-glass surface that reads over both the light and dark blurred bg.
const glass =
  "bg-white/80 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/50 dark:ring-white/15";

export function ClickToDial() {
  const [step, setStep] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced.current) setStep(3); // hold on "connected"
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
  const inCall = phase === "calling" || phase === "connected";

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Faint floating chips for layered depth */}
      <motion.div
        aria-hidden
        className={`absolute left-[8%] top-[20%] flex items-center gap-2 rounded-full px-3 py-1.5 ${glass} opacity-50`}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="size-4 rounded-full bg-signal/30" />
        <span className="h-1.5 w-10 rounded-full bg-ink/15" />
      </motion.div>
      <motion.div
        aria-hidden
        className={`absolute bottom-[16%] right-[7%] flex items-center gap-2 rounded-full px-3 py-1.5 ${glass} opacity-50`}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="size-4 rounded-full bg-signal/30" />
        <span className="h-1.5 w-8 rounded-full bg-ink/15" />
      </motion.div>

      {/* Contact card */}
      <div
        className={`relative w-[68%] max-w-xs rounded-2xl p-5 shadow-xl shadow-ink/10 ${glass}`}
      >
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-signal/15 text-sm font-semibold text-signal">
            JR
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">
              Jordan Reyes
            </p>
            <p className="truncate text-xs text-ink/55">Auto · Renewal</p>
          </div>
        </div>

        {/* Phone row with dial button */}
        <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-ink/[0.04] px-3 py-2.5 ring-1 ring-ink/5">
          <span className="font-mono text-sm tracking-tight text-ink/80">
            (416) 555-0142
          </span>
          <div className="relative">
            {/* Tap ripple */}
            <AnimatePresence>
              {tapping && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-signal/40"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>
            <motion.span
              className="relative flex size-9 items-center justify-center rounded-full bg-signal text-white shadow-lg shadow-signal/30"
              animate={{ scale: tapping ? 0.88 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="size-4" strokeWidth={2.5} />
            </motion.span>
          </div>
        </div>
      </div>

      {/* Cursor */}
      {!reduced.current && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute"
          initial={false}
          animate={{
            x: phase === "ready" ? [40, 92] : 92,
            y: phase === "ready" ? [56, 30] : 30,
            opacity: inCall ? 0 : 1,
          }}
          transition={{ duration: phase === "ready" ? 1.1 : 0.3, ease: "easeInOut" }}
        >
          <MousePointer2 className="size-5 fill-ink text-white drop-shadow" />
        </motion.div>
      )}

      {/* Call status pill */}
      <AnimatePresence>
        {inCall && (
          <motion.div
            className={`absolute bottom-[10%] flex items-center gap-2.5 rounded-full py-2 pl-2.5 pr-4 shadow-xl shadow-ink/10 ${glass}`}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-signal text-white">
              <PhoneCall className="size-3.5" strokeWidth={2.5} />
            </span>
            {phase === "calling" ? (
              <span className="flex items-center gap-1.5 text-xs font-medium text-ink/80">
                Calling
                <span className="flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="size-1 rounded-full bg-ink/50"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </span>
              </span>
            ) : (
              <span className="flex items-center gap-2 text-xs font-medium text-ink/80">
                Connected
                {/* Waveform */}
                <span className="flex items-end gap-0.5">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.span
                      key={i}
                      className="w-0.5 rounded-full bg-signal"
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
                <span className="font-mono text-[11px] tabular-nums text-ink/50">
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
