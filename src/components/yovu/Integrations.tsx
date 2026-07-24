import { ArrowUpRight } from "lucide-react";

const tiles = [
  "Applied Epic",
  "Salesforce",
  "HubSpot",
  "Microsoft 365",
  "Google Workspace",
  "Slack",
  "Zapier",
  "Power Automate",
];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">Plays nice with your tech stack</h2>
            <p className="mt-6 max-w-md text-pretty text-base text-ink/70 md:text-lg">
              We adapt to your workflow, not the other way around. YOVU connects seamlessly
              with your CRMs and business tools to automate tasks and eliminate manual
              data entry. No middleware or syncs required, just an all-in-one system
              that works exactly where you do.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-canvas transition-transform hover:scale-[1.02]"
            >
              Learn More
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {tiles.map((t, i) => (
                <div
                  key={t}
                  className={`flex aspect-square items-center justify-center rounded-2xl p-4 text-center text-xs font-semibold tracking-tight text-ink/70 ring-1 ring-border ${
                    i % 3 === 0 ? "bg-surface" : "bg-card"
                  }`}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
