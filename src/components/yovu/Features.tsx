import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone, MonitorSmartphone, FileText, Sparkles, ListChecks } from "lucide-react";

const features = [
  {
    key: "dial",
    label: "Click-to-Dial & Warm Transfer",
    icon: Phone,
    copy:
      "Call any client directly from Applied Epic with one click. Transfer calls with full context attached — no searching for numbers, no repeating information.",
  },
  {
    key: "popup",
    label: "Screen Pop-up for Applied Epic",
    icon: MonitorSmartphone,
    copy:
      "YOVU instantly matches the incoming caller to their Applied Epic record. Policy details, renewal dates, and E&O flags appear on screen before you even say hello.",
  },
  {
    key: "transcribe",
    label: "Call Transcription",
    icon: FileText,
    copy:
      "See the conversation transcribed with both speakers labeled. All calls are recorded and searchable so you can review conversations with ease.",
  },
  {
    key: "summary",
    label: "AI Call Summary & Action Items",
    icon: Sparkles,
    copy:
      "When the call ends, YOVU generates a structured summary with key discussion points and action items, ready for approval before logging to Epic.",
  },
  {
    key: "logging",
    label: "Auto Task & Activity Logging",
    icon: ListChecks,
    copy:
      "Every call is automatically logged to Applied Epic — duration, summary, broker, and timestamp. Follow-up tasks are created instantly, keeping your E&O record up to date.",
  },
];

export function Features() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal">
            Product Overview
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
            Built for Insurance Brokerages.
          </h2>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Tab rail */}
          <div className="flex w-full shrink-0 flex-col gap-1 lg:w-80">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isActive = i === active;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-3 rounded-xl border-l-2 p-4 text-left transition-colors ${
                    isActive
                      ? "border-signal bg-signal-soft/40"
                      : "border-transparent hover:bg-surface/60"
                  }`}
                >
                  <Icon
                    className={`size-4 shrink-0 ${isActive ? "text-signal" : "text-ink/40"}`}
                  />
                  <span
                    className={`text-sm font-semibold ${isActive ? "text-ink" : "text-ink/55"}`}
                  >
                    {f.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Showcase */}
          <div className="flex-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface ring-1 ring-border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0 grid place-items-center p-8"
                >
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-card ring-1 ring-border">
                    <current.icon className="size-10 text-signal" />
                    <span className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/30">
                      {current.label}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={current.key + "-copy"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 max-w-2xl text-pretty text-base text-ink/70 md:text-lg"
              >
                {current.copy}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
