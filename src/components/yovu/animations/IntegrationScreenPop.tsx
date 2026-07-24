import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  PhoneIncoming,
  FileText,
  Users,
  FileSignature,
  ShieldCheck,
  ReceiptText,
  Activity,
} from "lucide-react";
import appliedLogomark from "@/assets/logos/Applied Logomark.svg";
import appliedText from "@/assets/logos/Applied Text.svg";
import { demoContact } from "./demoContact";

/**
 * "Insurance Integrations" demo: an incoming call rings first, then it is
 * matched to the caller's Applied Epic account — the BMS window opens with the
 * account detail already loaded. Combines the caller screen-pop with the
 * Applied Epic dashboard. Pure CSS / motion; renders the matched state
 * statically when reduced motion is preferred.
 */

const tabs = [
  { label: "Account Detail", Icon: FileText },
  { label: "Contacts", Icon: Users },
  { label: "Client Contracts", Icon: FileSignature },
  { label: "Policies", Icon: ShieldCheck },
  { label: "Transactions", Icon: ReceiptText },
  { label: "Activities", Icon: Activity },
];

export function IntegrationScreenPop() {
  const [matched, setMatched] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setMatched(true);
  }, []);

  useEffect(() => {
    if (reduced.current || matched) return;
    const t = setTimeout(() => setMatched(true), 1600);
    return () => clearTimeout(t);
  }, [matched]);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative flex w-[26rem] max-w-[92%] flex-col items-center gap-3">
        {/* Incoming call banner — leads the sequence */}
        <div className="z-10 flex items-center gap-2.5 rounded-full bg-white py-2 pl-2.5 pr-4 shadow-lg shadow-black/15 ring-1 ring-black/5">
          <span className="relative flex size-7 items-center justify-center rounded-full bg-signal text-white">
            <PhoneIncoming className="size-3.5" strokeWidth={2.5} />
            {!matched && (
              <motion.span
                className="absolute inset-0 rounded-full ring-1 ring-signal"
                animate={{ scale: [1, 1.35], opacity: [0.35, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              />
            )}
          </span>
          <span className="text-xs font-medium text-slate-700">
            {matched ? "Matched to account" : "Incoming call"}
            <span className="ml-1 text-slate-400">{demoContact.phone}</span>
          </span>
        </div>

        {/* Applied Epic window — opens once the call is matched */}
        <AnimatePresence>
          {matched && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full overflow-hidden rounded-lg bg-white text-left shadow-2xl shadow-black/30 ring-1 ring-black/10"
            >
              {/* Header */}
              <div className="flex items-center gap-2 bg-[#17255e] px-3 py-2">
                <img src={appliedLogomark} alt="" className="h-4 w-auto" />
                <img src={appliedText} alt="Applied" className="h-3 w-auto" />
                <span className="text-[10px] font-medium text-white/70">Epic</span>
              </div>

              {/* Body */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-[42%] shrink-0 border-r border-slate-200 bg-slate-50 py-1.5">
                  {tabs.map((t, i) => {
                    const active = i === 0;
                    return (
                      <motion.div
                        key={t.label}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
                        className={`flex items-center gap-2 px-3 py-[5px] text-[11px] ${
                          active
                            ? "border-l-2 border-signal bg-white font-semibold text-signal"
                            : "border-l-2 border-transparent text-slate-600"
                        }`}
                      >
                        <t.Icon className={`size-3.5 ${active ? "text-signal" : "text-slate-400"}`} />
                        <span className="truncate">{t.label}</span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Content — matched account */}
                <div className="flex-1 space-y-2 p-3">
                  <p className="text-[11px] font-semibold text-slate-700">Account</p>
                  <motion.div
                    initial={{ backgroundColor: "rgba(37,99,235,0)" }}
                    animate={{
                      backgroundColor: [
                        "rgba(37,99,235,0)",
                        "rgba(37,99,235,0.12)",
                        "rgba(37,99,235,0)",
                      ],
                    }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                    className="flex items-center gap-2 rounded border border-signal/60 px-2 py-1.5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-semibold text-slate-800">
                        {demoContact.name}
                      </p>
                      <p className="truncate text-[10px] text-slate-500">
                        {demoContact.policyType} · {demoContact.policyNumber}
                      </p>
                    </div>
                  </motion.div>
                  {[
                    { label: "Renewal", value: demoContact.renewal, accent: "text-[#c2410c]" },
                    { label: "Status", value: demoContact.status, accent: "text-emerald-600" },
                    { label: "Phone", value: demoContact.phone },
                  ].map((d, i) => (
                    <motion.div
                      key={d.label}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      className="flex items-center justify-between text-[11px]"
                    >
                      <span className="text-slate-500">{d.label}</span>
                      <span className={`font-medium ${d.accent ?? "text-slate-800"}`}>
                        {d.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
