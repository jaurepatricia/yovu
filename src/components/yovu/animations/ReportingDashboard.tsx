import { motion } from "motion/react";

/**
 * Mini analytics dashboard: a line chart draws in and stat tiles load into
 * frame. Pure CSS / motion / SVG.
 */

const lines: { color: string; points: string }[] = [
  { color: "#2563eb", points: "0,46 12,30 24,38 36,14 48,34 60,20 72,40 84,24 96,18" },
  { color: "#10b981", points: "0,52 12,48 24,40 36,44 48,28 60,42 72,26 84,40 96,34" },
  { color: "#f59e0b", points: "0,56 12,52 24,54 36,46 48,50 60,38 72,48 84,36 96,44" },
];

const legend = ["#2563eb", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"];

function StatTile({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className="flex flex-1 flex-col items-center justify-center rounded-lg bg-white p-3 shadow-md shadow-black/10 ring-1 ring-black/5"
    >
      <div className="mb-2 h-1.5 w-12 rounded-full bg-slate-200" />
      <svg viewBox="0 0 48 26" className="w-12">
        <path
          d="M4 24 A20 20 0 0 1 44 24"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-lg font-semibold text-slate-400">0</span>
      <span className="sr-only">{label}</span>
    </motion.div>
  );
}

export function ReportingDashboard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="flex w-[22rem] max-w-[90%] gap-3">
        {/* Line chart card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 rounded-lg bg-white p-3 shadow-md shadow-black/10 ring-1 ring-black/5"
        >
          <div className="mb-2 h-2 w-24 rounded-full bg-slate-300" />
          <svg viewBox="0 0 96 60" className="w-full">
            {/* grid */}
            {[12, 24, 36, 48].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="96"
                y2={y}
                stroke="#f1f5f9"
                strokeWidth="0.5"
              />
            ))}
            {lines.map((l, i) => (
              <motion.polyline
                key={i}
                points={l.points}
                fill="none"
                stroke={l.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 + i * 0.25 }}
              />
            ))}
          </svg>
          {/* legend — grey rounded lines */}
          <div className="mt-2 space-y-1">
            {legend.map((c, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: c }}
                />
                <span className="h-1.5 w-14 rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stat tiles */}
        <div className="flex w-[34%] flex-col gap-3">
          <StatTile label="Active Calls" delay={0.35} />
          <StatTile label="Agents Online" delay={0.5} />
        </div>
      </div>
    </div>
  );
}
