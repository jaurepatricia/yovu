import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Phone } from "lucide-react";

/**
 * Capture hero animation: a set of client-call cards orbit in a circle, then
 * collapse and stack into one consolidated card — the concept being that every
 * conversation is pulled into one central place by YOVU. Loops. Decorative.
 *
 * Cards use placeholder content (avatar + text bars) for now.
 */

const COUNT = 8;
const RADIUS = 140; // px, orbit radius
const ORBIT_MS = 9000;
const STACK_HOLD_MS = 2600;

// Distinct placeholder accents so each "call" reads as a different client.
const accents = [
  "#2563eb",
  "#0ea5e9",
  "#6366f1",
  "#14b8a6",
  "#f59e0b",
  "#ec4899",
  "#8b5cf6",
  "#10b981",
];

function CallCard({ accent }: { accent: string }) {
  return (
    <div className="flex h-full w-full items-center gap-2 rounded-2xl bg-white p-2.5 ring-1 ring-black/5 dark:bg-[#0b1733] dark:ring-white/10">
      <span
        className="flex size-8 shrink-0 items-center justify-center rounded-full text-white"
        style={{ backgroundColor: accent }}
      >
        <Phone className="size-4" strokeWidth={2.5} />
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1.5">
        <span className="h-2 w-3/4 rounded-full bg-slate-200 dark:bg-white/20" />
        <span className="h-2 w-1/2 rounded-full bg-slate-100 dark:bg-white/10" />
      </span>
    </div>
  );
}

export function CallCollector() {
  const [phase, setPhase] = useState<"orbit" | "stack">("orbit");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const run = () => {
      setPhase("orbit");
      t = setTimeout(() => {
        setPhase("stack");
        t = setTimeout(run, STACK_HOLD_MS);
      }, ORBIT_MS);
    };
    run();
    return () => clearTimeout(t);
  }, []);

  const orbiting = phase === "orbit";

  return (
    <div className="relative flex size-[26rem] items-center justify-center">
      {/* Rotating ring that carries the orbiting cards */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: orbiting ? 360 : 0 }}
        transition={
          orbiting
            ? { duration: 14, repeat: Infinity, ease: "linear" }
            : { duration: 0.9, ease: "easeInOut" }
        }
      >
        {Array.from({ length: COUNT }).map((_, i) => {
          const angle = (i / COUNT) * 2 * Math.PI;
          const orbitX = Math.cos(angle) * RADIUS;
          const orbitY = Math.sin(angle) * RADIUS;
          // Stacked target: a tidy pile at the centre with a small fan offset.
          const stackX = (i - (COUNT - 1) / 2) * 3;
          const stackY = (i - (COUNT - 1) / 2) * 4;
          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-14 w-40"
              style={{ marginLeft: "-5rem", marginTop: "-1.75rem" }}
              animate={
                orbiting
                  ? { x: orbitX, y: orbitY, rotate: -360, scale: 1, opacity: 1 }
                  : { x: stackX, y: stackY, rotate: 0, scale: 1.12, opacity: 1 }
              }
              transition={
                orbiting
                  ? {
                      x: { duration: 0.9, ease: "easeInOut" },
                      y: { duration: 0.9, ease: "easeInOut" },
                      scale: { duration: 0.9, ease: "easeInOut" },
                      rotate: { duration: 14, repeat: Infinity, ease: "linear" },
                    }
                  : { duration: 0.9, ease: "easeInOut", delay: i * 0.05 }
              }
            >
              <CallCard accent={accents[i]} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Central hub badge that the calls collapse into */}
      <motion.div
        className="pointer-events-none absolute flex size-16 items-center justify-center rounded-2xl bg-signal text-white shadow-lg shadow-signal/30 ring-1 ring-white/20"
        animate={{ opacity: orbiting ? 1 : 0, scale: orbiting ? 1 : 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <Phone className="size-6" strokeWidth={2.5} />
      </motion.div>
    </div>
  );
}
