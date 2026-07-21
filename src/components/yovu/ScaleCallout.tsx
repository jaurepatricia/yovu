import { ChevronRight } from "lucide-react";
import dialerMockup from "@/assets/homepage/Dialer Iphone Cloud Mockup.png";

export function ScaleCallout({
  heading = "Are you ready to bridge the gap between your client calls and your BMS?",
}: {
  heading?: string;
}) {
  return (
    <section className="px-6 pb-24 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {/* Left column: one card, two CTAs split by a divider */}
        <div className="flex flex-col overflow-hidden rounded-3xl bg-surface ring-1 ring-border">
          {/* Emphasized top CTA */}
          <div className="flex flex-[1.4] flex-col justify-between gap-10 p-10 lg:p-12">
            <h2 className="text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-4xl">
              {heading}
            </h2>
            <div>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
              >
                Book a demo
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* See Plans CTA */}
          <div className="flex flex-1 flex-col justify-between gap-10 p-10 lg:p-12">
            <h3 className="text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-4xl">
              Curious if YOVU is for you?
            </h3>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink ring-1 ring-border transition-colors hover:bg-ink/5"
              >
                See Plans
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right column: product mockup */}
        <div className="overflow-hidden rounded-3xl bg-ink">
          <img
            src={dialerMockup}
            alt="YOVU dialer app on an iPhone"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
