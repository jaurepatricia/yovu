import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Headphones, Ear, Volume2, Users } from "lucide-react";
import { demoContact } from "./demoContact";

/**
 * Three-way coaching call shown directly on the card surface (no boxed
 * background): agent + client on a live line, with a supervisor joining who
 * cycles through the Listen / Whisper / Collaborate modes. Theme aware.
 */

const modes = [
  { label: "Listen", Icon: Ear },
  { label: "Whisper", Icon: Volume2 },
  { label: "Collaborate", Icon: Users },
];

function Node({
  initials,
  role,
  x,
  y,
  badge,
}: {
  initials: string;
  role: string;
  x: string;
  y: string;
  badge?: boolean;
}) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
      style={{ left: x, top: y }}
    >
      <span className="relative flex size-14 items-center justify-center rounded-full bg-signal/10 text-base font-semibold text-signal ring-1 ring-signal/25">
        {initials}
        {badge && (
          <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-signal text-white ring-2 ring-[#f8fafc] dark:ring-surface">
            <Headphones className="size-2.5" strokeWidth={2.5} />
          </span>
        )}
      </span>
      <span className="text-[11px] font-medium text-ink/60">{role}</span>
    </div>
  );
}

export function ThreeWayCall() {
  const [mode, setMode] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setMode((m) => (m + 1) % modes.length), 2200);
    return () => clearInterval(id);
  }, []);

  const Active = modes[mode];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative h-56 w-[22rem] max-w-[94%] text-signal"
      >
        <svg viewBox="0 0 320 224" className="absolute inset-0 h-full w-full">
          {/* Solid live call line: agent <-> client */}
          <line
            x1="70"
            y1="58"
            x2="250"
            y2="58"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Dotted supervisor line joining the middle of the call */}
          <motion.path
            d="M160 58 L160 156"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 7"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          />
          <circle cx="160" cy="58" r="3.5" fill="currentColor" />
        </svg>

        <Node initials="AV" role="Agent" x="21.9%" y="25.9%" />
        <Node initials={demoContact.initials} role="Client" x="78.1%" y="25.9%" />
        <Node initials="SU" role="Supervisor" x="50%" y="69.6%" badge />

        {/* Cycling mode pill on the supervisor line */}
        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
          <AnimatePresence mode="wait">
            <motion.span
              key={Active.label}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-1.5 rounded-full bg-signal px-3 py-1 text-[11px] font-semibold text-white shadow-sm"
            >
              <Active.Icon className="size-3" strokeWidth={2.5} />
              {Active.label}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
