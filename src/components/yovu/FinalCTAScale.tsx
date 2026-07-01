import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";
import mountainVector from "@/assets/homepage/mountain vector graphic.svg";

// Lighter blue accent (matches the site's signal), replacing the demo's purple.
const GRID_COLOR = "#3b82f6";

export function FinalCTAScale() {
  return (
    <section id="demo" className="px-6 py-24 lg:py-32">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-[2.5rem] bg-ink px-6 py-24 text-center text-canvas lg:py-32">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="animate-fade-in-up text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight opacity-0 [animation-delay:200ms] md:text-6xl">
            Scale Your Brokerage
          </h2>
          <p className="mt-6 max-w-2xl animate-fade-in-up text-pretty text-lg text-canvas/65 opacity-0 [animation-delay:300ms]">
            Connect your team and upgrade your client experience in one move.
            Book a 30-minute demo to see how simple scaling your business
            communications with YOVU can be.
          </p>
          <a
            href="#"
            className="mt-12 inline-flex animate-fade-in-up items-center justify-center rounded-full bg-signal px-8 py-4 text-base font-semibold text-white opacity-0 ring-1 ring-signal transition-transform [animation-delay:500ms] hover:scale-[1.03]"
          >
            Schedule a call
          </a>
        </div>

        {/* Flickering grid, masked to the mountain vector, at the bottom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            WebkitMaskImage: `url('${mountainVector}')`,
            maskImage: `url('${mountainVector}')`,
            WebkitMaskSize: "100% auto",
            maskSize: "100% auto",
            WebkitMaskPosition: "center bottom",
            maskPosition: "center bottom",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          <FlickeringGrid
            className="h-full w-full"
            color={GRID_COLOR}
            squareSize={3}
            gridGap={6}
            flickerChance={0.2}
            maxOpacity={0.5}
          />
        </div>
      </div>
    </section>
  );
}
