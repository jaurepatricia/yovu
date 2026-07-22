import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PhoneIncoming, PhoneOutgoing } from "lucide-react";

/**
 * Capture hero animation: client-call cards orbit in a circle, then collapse
 * and stack into one consolidated pile — every conversation pulled into one
 * central place by YOVU. Loops, and respects prefers-reduced-motion (renders
 * the stacked state statically). Decorative.
 *
 * Card content is fictional placeholder data (reserved 555-01xx numbers).
 */

type Call = {
  name: string;
  number: string;
  dir: "in" | "out";
};

const calls: Call[] = [
  { name: "David Smith", number: "+1 (416) 555-0148", dir: "out" },
  { name: "Olivia Johnson", number: "+1 (604) 555-0192", dir: "in" },
  { name: "Michael Brown", number: "+1 (902) 555-0173", dir: "out" },
  { name: "Charlotte Tremblay", number: "+1 (613) 555-0110", dir: "in" },
  { name: "Noah Martin", number: "+1 (306) 555-0126", dir: "out" },
  { name: "Emma Wilson", number: "+1 (514) 555-0164", dir: "in" },
];

const COUNT = calls.length;
const RADIUS = 230;
const ORBIT_MS = 9000;
const STACK_HOLD_MS = 2600;

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function CallCard({ call }: { call: Call }) {
  const Dir = call.dir === "in" ? PhoneIncoming : PhoneOutgoing;
  return (
    <div className="flex h-full w-full items-center gap-4 rounded-2xl bg-white/70 px-5 ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#0b1733]/60 dark:ring-white/10">
      <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-400 to-slate-600 text-lg font-semibold text-white dark:from-slate-500 dark:to-slate-700">
        {initials(call.name)}
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-lg font-semibold text-ink">{call.name}</span>
        <span className="flex items-center gap-1.5 text-sm text-ink/55">
          <Dir className="size-4 shrink-0" strokeWidth={2.25} />
          <span className="truncate">{call.number}</span>
        </span>
      </span>
    </div>
  );
}

export function CallCollector() {
  const [phase, setPhase] = useState<"orbit" | "stack">("orbit");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setPhase("stack");
      return;
    }
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
  }, [reduced]);

  const orbiting = phase === "orbit";

  return (
    <div className="relative flex size-[38rem] items-center justify-center">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: orbiting ? 360 : 0 }}
        transition={
          orbiting
            ? { duration: 16, repeat: Infinity, ease: "linear" }
            : { duration: 0.9, ease: "easeInOut" }
        }
      >
        {calls.map((call, i) => {
          const angle = (i / COUNT) * 2 * Math.PI;
          const orbitX = Math.cos(angle) * RADIUS;
          const orbitY = Math.sin(angle) * RADIUS;
          const stackX = (i - (COUNT - 1) / 2) * 4;
          const stackY = (i - (COUNT - 1) / 2) * 6;
          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-24 w-72"
              style={{ marginLeft: "-9rem", marginTop: "-3rem" }}
              animate={
                orbiting
                  ? { x: orbitX, y: orbitY, rotate: -360, scale: 1, opacity: 1 }
                  : { x: stackX, y: stackY, rotate: 0, scale: 1.04, opacity: 1 }
              }
              transition={
                orbiting
                  ? {
                      x: { duration: 0.9, ease: "easeInOut" },
                      y: { duration: 0.9, ease: "easeInOut" },
                      scale: { duration: 0.9, ease: "easeInOut" },
                      rotate: { duration: 16, repeat: Infinity, ease: "linear" },
                    }
                  : { duration: 0.9, ease: "easeInOut", delay: i * 0.05 }
              }
            >
              <CallCard call={call} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
