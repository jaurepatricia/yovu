import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Phone, Monitor, Smartphone } from "lucide-react";
import { demoContact } from "./demoContact";

/**
 * "Work From Anywhere" demo: one live call moves seamlessly across a desk
 * phone, desktop, and mobile. The active device lights up while the others
 * dim, and a single call token slides between them so it reads as the same
 * uninterrupted conversation on a consistent business number. Pure CSS /
 * motion; renders a single active device when reduced motion is preferred.
 */

const devices = [
  { id: "desk", label: "Desk phone", Icon: Phone },
  { id: "desktop", label: "Desktop", Icon: Monitor },
  { id: "mobile", label: "Mobile", Icon: Smartphone },
] as const;

const HOLD_MS = 2200;

function formatTime(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function DeviceHandoff() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [seconds, setSeconds] = useState(12);
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Hop the call between devices.
  useEffect(() => {
    if (reduced.current) return;
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % devices.length);
    }, HOLD_MS);
    return () => clearInterval(t);
  }, []);

  // Continuous call timer — the same call keeps running as it moves.
  useEffect(() => {
    if (reduced.current) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 overflow-hidden px-4">
      {/* Shared business number badge */}
      <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-slate-600 shadow-sm ring-1 ring-black/5">
        <span className="size-1.5 rounded-full bg-emerald-500" />
        One number · {demoContact.phone}
      </div>

      {/* Device row */}
      <div className="flex items-end justify-center gap-3 sm:gap-4">
        {devices.map((device, i) => {
          const active = i === activeIdx;
          return (
            <motion.div
              key={device.id}
              animate={{
                scale: active ? 1 : 0.92,
                opacity: active ? 1 : 0.55,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`relative flex w-24 flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-lg shadow-black/10 ring-1 sm:w-28 ${
                active ? "ring-2 ring-[#2563eb]" : "ring-black/5"
              }`}
            >
              {/* Device screen */}
              <div className="relative flex h-16 w-full items-center justify-center overflow-hidden rounded-lg bg-slate-50">
                <device.Icon
                  className={`size-6 ${active ? "text-[#2563eb]" : "text-slate-400"}`}
                  strokeWidth={1.75}
                />

                {/* Call token — animates between devices via shared layoutId */}
                {active && (
                  <motion.div
                    layoutId="call-token"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-x-1.5 bottom-1.5 flex items-center gap-1.5 rounded-md bg-[#2563eb] px-1.5 py-1 text-white shadow-md"
                  >
                    <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-white/20 text-[8px] font-semibold">
                      {demoContact.initials}
                    </span>
                    <span className="truncate text-[9px] font-medium leading-none">
                      {demoContact.firstName}
                    </span>
                    <span className="ml-auto text-[9px] tabular-nums leading-none text-white/80">
                      {formatTime(seconds)}
                    </span>
                  </motion.div>
                )}
              </div>

              <span
                className={`text-[10px] font-medium ${active ? "text-slate-700" : "text-slate-400"}`}
              >
                {device.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      <p className="text-[11px] font-medium text-slate-500">Same call, wherever you are</p>
    </div>
  );
}
