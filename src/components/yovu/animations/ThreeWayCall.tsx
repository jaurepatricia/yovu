import { motion } from "motion/react";
import { User } from "lucide-react";

/**
 * Three-way coaching call: three people connected in a triangle, shown directly
 * on the card surface (no boxed background). Simple and theme aware.
 */

function Node({ label, x, y }: { label: string; x: string; y: string }) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
      style={{ left: x, top: y }}
    >
      <span className="flex size-14 items-center justify-center rounded-full bg-white text-signal ring-1 ring-black/10 dark:ring-white/20">
        <User className="size-6" strokeWidth={2} />
      </span>
      <span className="text-[11px] font-medium text-ink/60">{label}</span>
    </div>
  );
}

export function ThreeWayCall({ framed = false }: { framed?: boolean }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative ${framed ? "h-60 w-[24rem]" : "h-56 w-[22rem]"} max-w-[94%] text-signal`}
    >
      {/* Triangle of connecting lines behind the nodes */}
      <svg viewBox="0 0 320 224" className="absolute inset-0 h-full w-full">
        <polygon
          points="80,62 240,62 160,178"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>

      <Node label="Agent" x="25%" y="27.7%" />
      <Node label="Client" x="75%" y="27.7%" />
      <Node label="Supervisor" x="50%" y="79.5%" />
    </motion.div>
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {framed ? (
        <div className="flex items-center justify-center rounded-3xl bg-white/40 px-6 py-5 ring-1 ring-white/50 backdrop-blur-md dark:bg-white/10 dark:ring-white/15">
          {content}
        </div>
      ) : (
        content
      )}
    </div>
  );
}
