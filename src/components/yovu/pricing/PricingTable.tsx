import { useState } from "react";
import { Check, ArrowRight, Info } from "lucide-react";

type Feature = string | { text: string; tooltip: string };

type Tier = {
  name: string;
  tagline: string;
  monthly?: string;
  annually?: string;
  priceLabel?: string;
  priceNote?: string;
  cta: { label: string; href: string };
  featuresTitle: string;
  features: Feature[];
  emphasize?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    tagline: "Standard Voice + Core Communicator",
    monthly: "18",
    annually: "15",
    priceNote: "per user",
    cta: { label: "Get Started", href: "#demo" },
    featuresTitle: "What's included:",
    features: [
      "Telephony features",
      "SMS",
      "Call Control",
      "Click-to-Call",
      "History",
      "1-month recording\u00a0",

    ],
  },
  {
    name: "Professional",
    tagline: "Queuing, Transcription Summary & Sentiment",
    monthly: "39",
    annually: "32",
    priceNote: "per user",
    cta: { label: "Get Started", href: "#demo" },
    featuresTitle: "Everything in Starter, plus:",
    features: [
      "Queue Login",
      "Reason Codes",
      "MS Teams Presence",
      "Voicemail Drop",
      "Transcription Summary / Sentiment / Topics",
      "12-month recording",
    ],
  },
  {
    name: "Advanced",
    tagline: "Analytics, BMS/CRM Integration, 7-Year Recording",
    priceLabel: "Custom",
    priceNote: "\n",
    cta: { label: "Schedule a Call", href: "#demo" },
    featuresTitle: "Everything in Professional, plus:",
    features: [
      { text: "1 Integration", tooltip: "Epic, Acturis, Vertafore, or Salesforce" },
      "Queue Analytics",
      "Scripting",
      "Audio Signatures",
      "MS Teams Softphone",
      "84-month recording",
    ],

    emphasize: true,
  },
  {
    name: "Ultra",
    tagline: "All Integrations, Transcription, Preferred Routing, AI Receptionist",
    priceLabel: "Custom",
    priceNote: "\n",
    cta: { label: "Schedule a Call", href: "#demo" },
    featuresTitle: "Everything in Advanced, plus:",
    features: [
      {
        text: "All Integrations",
        tooltip: "Epic, Acturis, Vertafore, Salesforce, NetSuite, and Web CRM",
      },
      "Full Transcriptions",
      "Preferred Agent Routing",
      "AI Receptionist",
    ],
  },
];

export function PricingTable() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center lg:mb-28">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Plans & Pricing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-ink/70 md:text-lg">
            Straightforward plans that grow with your organization. Start with our robust telephony
            features and scale all the way up to full integrations, transcriptions and an AI
            receptionist.
          </p>
        </div>

        {/* Monthly / Annual toggle */}
        <div className="mb-14 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-surface p-1 ring-1 ring-border">
            {(["Monthly", "Annual"] as const).map((label) => {
              const isAnnual = label === "Annual";
              const active = isAnnual === annual;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setAnnual(isAnnual)}
                  aria-pressed={active}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    active ? "bg-signal text-white" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl bg-card p-8 text-center ${
                tier.emphasize ? "ring-2 ring-signal lg:-my-2 lg:py-10" : "ring-1 ring-border"
              }`}
            >
              {tier.emphasize && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-signal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}

              {/* Tier header */}
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                  {tier.name}
                </h2>
              </div>

              {/* Price */}
              <div className="mt-6 min-h-[4.5rem]">
                {tier.monthly ? (
                  <>
                    <p className="text-center text-sm text-ink/60">Starting at</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display text-4xl font-bold text-ink">
                        ${annual ? tier.annually : tier.monthly}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-ink/60">
                      {tier.priceNote}
                    </p>
                  </>
                ) : (
                  <>
                    <p aria-hidden="true" className="text-center text-sm text-ink/60">
                      &nbsp;
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display text-4xl font-bold text-ink">
                        {tier.priceLabel}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-ink/60">{tier.priceNote?.trim() || "\u00a0"}</p>
                  </>
                )}
              </div>

              {/* CTA */}
              <a
                href={tier.cta.href}
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  tier.emphasize
                    ? "bg-signal text-white ring-1 ring-signal hover:bg-signal/90"
                    : "text-ink ring-1 ring-border hover:bg-ink/5"
                }`}
              >
                {tier.cta.label}
                {!tier.emphasize && <ArrowRight className="size-4" />}
              </a>

              {/* Features */}
              <div className="mt-8 text-sm font-medium text-ink">{tier.featuresTitle}</div>

              <ul className="mt-4 flex-1 space-y-3 text-left">
                {tier.features.map((feature) => {
                  const text = typeof feature === "string" ? feature : feature.text;
                  const tooltip = typeof feature === "string" ? undefined : feature.tooltip;
                  return (
                    <li key={text} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-signal" />
                      <span className="flex items-center gap-1.5 text-sm leading-relaxed text-ink/70">
                        {text}
                        {tooltip && (
                          <span className="group/tip relative inline-flex">
                            <button
                              type="button"
                              aria-label={tooltip}
                              className="inline-flex text-ink/40 transition-colors hover:text-ink/70"
                            >
                              <Info className="size-4" />
                            </button>
                            <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[14rem] -translate-x-1/2 rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-canvas opacity-0 shadow-lg transition-opacity group-hover/tip:opacity-100">
                              {tooltip}
                            </span>
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
