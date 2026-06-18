import { Check } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="demo" className="px-6 pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-24 text-center text-canvas lg:py-32">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal">
          See How YOVU Works
        </span>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          See How YOVU Works.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-canvas/65">
          Book a 30-minute conversation with our experts and see how our integration
          with Applied Epic can help your insurance brokerage save real time and money.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="flex items-center gap-3 rounded-full bg-signal py-4 pl-3 pr-6 text-base font-semibold text-ink ring-1 ring-signal transition-transform hover:scale-[1.03]"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-ink/10">
              <Check className="size-5" strokeWidth={2.5} />
            </span>
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
