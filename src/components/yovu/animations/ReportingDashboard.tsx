import { motion } from "motion/react";

/**
 * Mini analytics dashboard: a line chart draws in and stat tiles load into
 * frame with data. Pure CSS / motion / SVG.
 */

const lines: { color: string; points: string }[] = [
  { color: "#2563eb", points: "0,46 12,30 24,38 36,14 48,34 60,20 72,40 84,24 96,18" },
  { color: "#10b981", points: "0,52 12,48 24,40 36,44 48,28 60,42 72,26 84,40 96,34" },
  { color: "#f59e0b", points: "0,56 12,52 24,54 36,46 48,50 60,38 72,48 84,36 96,44" },
];

const legend = ["#2563eb", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"];

const ARC = "M4 24 A20 20 0 0 1 44 24";

function StatTile({
  label,
  value,
  fill,
  delay,
}: {
  label: string;
  value: string;
  fill: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className="flex flex-1 flex-col items-center justify-center rounded-lg bg-white p-2 shadow-md shadow-black/10 ring-1 ring-black/5"
    >
      <span className="text-[9px] font-semibold text-slate-600">{label}</span>
      <svg viewBox="0 0 48 28" className="mt-1 w-14">
        <path
          d={ARC}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <motion.path
          d={ARC}
          fill="none"
          stroke="#2563eb"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: fill }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: delay + 0.2 }}
        />
      </svg>
      <span className="-mt-1 text-base font-semibold text-signal">
        {value}
      </span>
    </motion.div>
  );
}

export function ReportingDashboard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="flex w-[26rem] max-w-[92%] gap-3">
        {/* Line chart card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 rounded-lg bg-white p-3 shadow-md shadow-black/10 ring-1 ring-black/5"
        >
          <p className="mb-2 text-[10px] font-semibold text-slate-700">
            Total Talk Time Per Agent
          </p>
          <svg viewBox="0 0 96 60" className="w-full">
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
          <StatTile label="Active Calls" value="3" fill={0.45} delay={0.35} />
          <StatTile label="Agents Online" value="8" fill={0.75} delay={0.5} />
        </div>
      </div>
    </div>
  );
}
