import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const FEATURES = [
  "Call Recording",
  "Call Transcription",
  "Custom AI Summary",
  "Activity Logging",
];

/**
 * Vertical auto-rotating carousel of glassy feature pills. The focused pill
 * scales up while off-centre pills blur and fade. Theme-aware: frosted white
 * with dark text in light mode, navy glass with light text in dark mode.
 * Rotation pauses on hover.
 */
export function FeatureCarousel() {
  const [focusIndex, setFocusIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setFocusIndex((i) => (i + 1) % FEATURES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      className="relative h-72 w-56"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    >
      <ul className="absolute inset-0">
        {FEATURES.map((label, i) => {
          const n = FEATURES.length;
          const raw = (((i - focusIndex) % n) + n) % n;
          const offset = raw > n / 2 ? raw - n : raw;
          const absOff = Math.min(Math.abs(offset), 2);
          const y = offset * 64;
          const scale = 1.15 - absOff * 0.15;
          const opacity = Math.abs(offset) > 2 ? 0 : 1 - absOff * 0.38;
          const blur = absOff * 1.2;
          return (
            <motion.li
              key={label}
              animate={{ y, scale, opacity, filter: `blur(${blur}px)` }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "transform, opacity, filter" }}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center whitespace-nowrap rounded-full bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 shadow-lg shadow-black/10 ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#0b1733]/60 dark:text-white dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] dark:ring-white/15"
            >
              {label}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
