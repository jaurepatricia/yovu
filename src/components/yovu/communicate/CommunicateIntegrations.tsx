import { ArrowRight } from "lucide-react";

export function CommunicateIntegrations() {
  return (
    <section id="integrations" className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Integrations
          </h2>
          <p className="mt-6 text-pretty text-lg text-ink/70">
            You can enjoy syncing with over 70 platforms, including powerful, direct integrations
            with Applied Epic, Salesforce, and Microsoft Teams to keep your voice and data unified.
            Need something specific? Our developers build custom integrations for any proprietary
            software.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
            >
              Learn More
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Right: reserved (empty for now) */}
        <div aria-hidden="true" />
      </div>
    </section>
  );
}
