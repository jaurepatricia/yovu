import { motion } from "motion/react";

/**
 * Static "transcription & sentiment" visual: a short transcript with speaker
 * labels and per-line sentiment tags. Matches the feature card style.
 */
const lines = [
  { who: "Agent", text: "Thanks for calling — how can I help today?", tone: null },
  {
    who: "Client",
    text: "My premium went up and no one told me why.",
    tone: { label: "Frustrated", cls: "bg-amber-100 text-amber-700" },
  },
  {
    who: "Agent",
    text: "Let's review it together and get that sorted.",
    tone: { label: "Reassuring", cls: "bg-emerald-100 text-emerald-700" },
  },
];

export function TranscriptSentiment() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[24rem] max-w-[92%] rounded-xl bg-white p-4 text-left shadow-2xl shadow-black/30 ring-1 ring-black/5"
      >
        <p className="text-[11px] font-medium text-slate-500">Transcript</p>
        <div className="mt-2 space-y-2.5">
          {lines.map((line, i) => (
            <div key={i}>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-semibold ${
                    line.who === "Agent" ? "text-[#2563eb]" : "text-slate-700"
                  }`}
                >
                  {line.who}
                </span>
                {line.tone && (
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${line.tone.cls}`}
                  >
                    {line.tone.label}
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-[13px] leading-snug text-slate-600">{line.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
