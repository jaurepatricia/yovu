import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Headphones, Mic, Users } from "lucide-react";
import { demoContact } from "./demoContact";

/**
 * Three-way coaching call: agent + client connected, with a supervisor joining.
 * The mode cycles Listen → Whisper → Collaborate. Pure CSS / motion.
 */

const modes = [
  { label: "Listen", Icon: Headphones },
  { label: "Whisper", Icon: Mic },
  { label: "Collaborate", Icon: Users },
];

function Node({
  initials,
  role,
  className,
}: {
  initials: string;
  role: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className ?? ""}`}>
      <span className="flex size-11 items-center justify-center rounded-full bg-[#2563eb]/10 text-sm font-semibold text-[#2563eb] ring-1 ring-[#2563eb]/20">
        {initials}
      </span>
      <span className="text-[11px] font-medium text-slate-600">{role}</span>
    </div>
  );
}

export function ThreeWayCall() {
  const [mode, setMode] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (reduced.current) return;
    const t = setInterval(() => setMode((m) => (m + 1) % modes.length), 2200);
    return () => clearInterval(t);
  }, []);

  const Active = modes[mode].Icon;

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[19rem] max-w-[88%] rounded-xl bg-white p-5 text-center shadow-2xl shadow-black/30 ring-1 ring-black/5"
      >
        {/* Agent + Client on the live call */}
        <div className="relative flex items-center justify-center gap-14">
          {/* connecting line */}
          <span className="absolute top-[22px] left-1/2 h-0.5 w-14 -translate-x-1/2 bg-[#2563eb]/40" />
          <Node initials="AV" role="Agent" />
          <Node initials={demoContact.initials} role="Client" />
        </div>

        {/* Supervisor joining via dashed link */}
        <svg viewBox="0 0 200 40" className="mx-auto -mt-1 h-8 w-40">
          <motion.path
            d="M100 2 L100 38"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="-mt-1 flex justify-center">
          <Node initials="SU" role="Supervisor" />
        </div>

        {/* Mode chip cycling */}
        <div className="mt-4 flex justify-center">
          <motion.span
            key={mode}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#2563eb] px-3 py-1.5 text-xs font-semibold text-white"
          >
            <Active className="size-3.5" strokeWidth={2.5} />
            {modes[mode].label}
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
