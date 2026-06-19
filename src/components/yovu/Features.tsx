import { Phone, MonitorSmartphone, FileText, Sparkles, ListChecks } from "lucide-react";
import { Feature197, type FeatureItem } from "@/components/ui/accordion-feature-section";

const rawFeatures = [
  {
    id: 1,
    title: "Click-to-Dial & Warm Transfer",
    icon: Phone,
    description:
      "Call any client directly from Applied Epic with one click. Transfer calls with full context attached — no searching for numbers, no repeating information.",
  },
  {
    id: 2,
    title: "Screen Pop-up for Applied Epic",
    icon: MonitorSmartphone,
    description:
      "YOVU instantly matches the incoming caller to their Applied Epic record. Policy details, renewal dates, and E&O flags appear on screen before you even say hello.",
  },
  {
    id: 3,
    title: "Call Transcription",
    icon: FileText,
    description:
      "See the conversation transcribed with both speakers labeled. All calls are recorded and searchable so you can review conversations with ease.",
  },
  {
    id: 4,
    title: "AI Call Summary & Action Items",
    icon: Sparkles,
    description:
      "When the call ends, YOVU generates a structured summary with key discussion points and action items, ready for approval before logging to Epic.",
  },
  {
    id: 5,
    title: "Auto Task & Activity Logging",
    icon: ListChecks,
    description:
      "Every call is automatically logged to Applied Epic — duration, summary, broker, and timestamp. Follow-up tasks are created instantly, keeping your E&O record up to date.",
  },
];

const features: FeatureItem[] = rawFeatures.map((f) => {
  const Icon = f.icon;
  return {
    id: f.id,
    title: f.title,
    description: f.description,
    image: (
      <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-card ring-1 ring-border">
        <Icon className="size-10 text-signal" />
        <span className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/30">
          {f.title}
        </span>
      </div>
    ),
  };
});

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto mb-16 max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal">
            Product Overview
          </span>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
            Built for Insurance Brokerages.
          </h2>
        </div>
      </div>
      <Feature197 features={features} />
    </section>
  );
}
