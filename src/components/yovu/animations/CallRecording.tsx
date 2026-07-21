import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Copy, Pause, PhoneForwarded, PhoneOff } from "lucide-react";
import { demoContact } from "./demoContact";

/**
 * YOVU softphone during an active, recording call. The REC button pulses and
 * the call timer counts up. Pure CSS / motion.
 */


export function CallRecording() {
  const [secs, setSecs] = useState(14);
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (reduced.current) return;
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const time = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

      {/* Softphone call card */}
      <div className="w-[24rem] max-w-[92%] rounded-xl bg-white p-4 text-left shadow-2xl shadow-black/30 ring-1 ring-black/5">
        <div className="flex items-center gap-1.5">
          <ExternalLink className="size-3.5 text-[#2563eb]" />
          <span className="text-sm font-semibold text-[#2563eb]">
            {demoContact.name}
          </span>
          <span className="ml-auto text-xs font-medium text-[#2563eb]">
            {time}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-slate-500">
          <Copy className="size-3" />
          <span className="text-[13px]">{demoContact.phone}</span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          {/* Recording button (highlighted) */}
          <div className="relative">
            <motion.span
              className="absolute inset-0 rounded-full ring-1 ring-[#dc2626]"
              animate={{ scale: [1, 1.35], opacity: [0.35, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="relative flex items-center gap-1.5 rounded-full bg-[#dc2626] px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#dc2626]/30">
              <motion.span
                className="size-2 rounded-full bg-white"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
              />
              REC
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <Pause className="size-4" />
            <PhoneForwarded className="size-4" />
            <span className="flex size-8 items-center justify-center rounded-full bg-[#dc2626] text-white">
              <PhoneOff className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
