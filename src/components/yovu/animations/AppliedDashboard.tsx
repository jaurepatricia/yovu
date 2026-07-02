import {
  FileText,
  Users,
  FileSignature,
  ShieldCheck,
  BadgeCheck,
  ReceiptText,
  Paperclip,
  ClipboardList,
  Activity,
} from "lucide-react";
import { motion } from "motion/react";
import appliedLogomark from "@/assets/logos/Applied Logomark.svg";
import appliedText from "@/assets/logos/Applied Text.svg";
import { demoContact } from "./demoContact";

/**
 * Stylized Applied Epic dashboard that animates open, as if the user partly
 * opened the BMS. Sidebar tabs stagger in with Account Detail active.
 * Pure CSS / motion — recreates the look, not the product.
 */


const tabs = [
  { label: "Account Detail", Icon: FileText },
  { label: "Contacts", Icon: Users },
  { label: "Client Contracts", Icon: FileSignature },
  { label: "Policies", Icon: ShieldCheck },
  { label: "Proofs of Insurance", Icon: BadgeCheck },
  { label: "Transactions", Icon: ReceiptText },
  { label: "Attachments", Icon: Paperclip },
  { label: "Claims", Icon: ClipboardList },
  { label: "Activities", Icon: Activity },
];

export function AppliedDashboard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

      {/* Applied Epic window */}
      <motion.div
        initial={{ opacity: 0, x: -18, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[26rem] max-w-[92%] overflow-hidden rounded-lg bg-white text-left shadow-2xl shadow-black/30 ring-1 ring-black/10"
      >
        {/* Header */}
        <div className="flex items-center gap-2 bg-[#17255e] px-3 py-2">
          <img src={appliedLogomark} alt="" className="h-4 w-auto" />
          <img src={appliedText} alt="Applied" className="h-3 w-auto" />
          <span className="text-[10px] font-medium text-white/70">Epic</span>
          <span className="ml-auto flex gap-1">
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-white/25" />
          </span>
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
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
                  className={`flex items-center gap-2 px-3 py-[5px] text-[11px] ${
                    active
                      ? "border-l-2 border-[#2563eb] bg-white font-semibold text-[#2563eb]"
                      : "border-l-2 border-transparent text-slate-600"
                  }`}
                >
                  <t.Icon
                    className={`size-3.5 ${active ? "text-[#2563eb]" : "text-slate-400"}`}
                  />
                  <span className="truncate">{t.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2 p-3">
            <p className="text-[11px] font-semibold text-slate-700">Account</p>
            <div className="rounded border border-[#2563eb]/60 px-2 py-1 text-[11px] text-slate-700">
              {demoContact.name}
            </div>
            {[70, 55, 62].map((w, i) => (
              <div key={i} className="space-y-1">
                <div className="h-1.5 w-10 rounded-full bg-slate-200" />
                <motion.div
                  className="h-2 rounded bg-slate-100"
                  style={{ width: `${w}%` }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
