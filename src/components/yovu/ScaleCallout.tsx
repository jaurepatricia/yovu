import { ArrowRight } from "lucide-react";
import dialerMockup from "@/assets/homepage/Dialer Iphone Cloud Mockup.png";

export function ScaleCallout() {
  return (
    <section className="px-6 pb-24 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {/* Left column: two stacked panels */}
        <div className="grid gap-6 lg:grid-rows-[1.4fr_1fr]">
          {/* Emphasized top panel */}
          <div className="flex flex-col justify-between gap-10 rounded-3xl bg-ink p-10 text-canvas lg:p-12">
            <h2 className="text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl">
              Discover how you can scale your brokerage with our business communications platform.
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

          {/* See Plans panel */}
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-ink p-10 text-canvas lg:p-12">
            <h3 className="text-balance font-display text-2xl font-bold tracking-tight md:text-3xl">
              Curious if YOVU is for you?
            </h3>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-canvas ring-1 ring-canvas/25 transition-colors hover:bg-canvas/10"
              >
                See Plans
                <ArrowRight className="size-4" />
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
