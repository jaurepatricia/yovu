import { motion } from "motion/react";
import { Headphones } from "lucide-react";
import { demoContact } from "./demoContact";

/**
 * Three-way coaching call: agent + client on a live (solid) call, with a
 * supervisor joined via a dotted line into the middle of that call.
 * Pure CSS / motion / SVG.
 */

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
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
      style={{ left: x, top: y }}
    >
      <span className="relative flex size-12 items-center justify-center rounded-full bg-[#2563eb]/10 text-sm font-semibold text-[#2563eb] ring-1 ring-[#2563eb]/20">
        {initials}
        {badge && (
          <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-[#2563eb] text-white ring-2 ring-white">
            <Headphones className="size-2.5" strokeWidth={2.5} />
          </span>
        )}
      </span>
      <span className="text-[11px] font-medium text-slate-600">{role}</span>
    </div>
  );
}

export function ThreeWayCall() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex w-[24rem] max-w-[92%] items-center justify-center rounded-xl bg-white p-6 shadow-2xl shadow-black/30 ring-1 ring-black/5"
      >
        <div className="relative w-[17rem] max-w-full">
          <svg viewBox="0 0 240 176" className="block w-full">
            {/* Solid live call line: agent <-> client */}
            <line
              x1="56"
              y1="44"
              x2="184"
              y2="44"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Dotted supervisor line joining the middle of the call */}
            <motion.path
              d="M120 44 L120 120"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            />
            {/* Join dot at the intersection */}
            <circle cx="120" cy="44" r="3" fill="#2563eb" />
          </svg>

          <Node initials="AV" role="Agent" x="23.3%" y="25%" />
          <Node initials={demoContact.initials} role="Client" x="76.7%" y="25%" />
          <Node initials="SU" role="Supervisor" x="50%" y="78%" badge />
        </div>
      </motion.div>
    </div>
  );
}
