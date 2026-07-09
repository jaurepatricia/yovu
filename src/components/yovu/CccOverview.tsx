import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type Step = {
  id: string;
  nav: string;
  title: string;
  copy: string;
  items: string[];
  cta: { label: string; href: string };
};

const steps: Step[] = [
  {
    id: "ccc-communicate",
    nav: "Communicate",
    title: "Communicate with your clients",
    copy: "Built for modern insurance brokerages, our reliable cloud communications system connects a full suite of VoIP features directly to your BMS, like Applied Epic.",
    items: ["Work from anywhere", "Click-to-call", "Caller context"],
    cta: { label: "Learn More", href: "#" },
  },
  {
    id: "ccc-capture",
    nav: "Capture",
    title: "Capture your calls",
    copy: "Calls are captured and automatically attached to client files within your BMS so you can spend more time focusing on clients and closing policies.",
    items: ["Transcription", "Tailored AI summaries", "Long-term call storage"],
    cta: { label: "Learn More", href: "#" },
  },
  {
    id: "ccc-coach",
    nav: "Coach",
    title: "Coach your team",
    copy: "Foster collaboration and drive continuous employee growth with an expanding suite of dedicated coaching tools tailored to your team's success.",
    items: [
      "Performance Insights",
      "Listen, Whisper & Collaborate",
      "Guided Conversations (Coming Soon)",
    ],
    cta: { label: "Learn More", href: "#" },
  },
];

export function CccOverview() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      // Trigger when a step crosses the vertical center of the viewport.
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (i: number) => {
    stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="how-it-works" className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-12">
          <p className="text-sm font-medium text-ink/50">How it works</p>
          <p className="max-w-3xl text-pretty font-display text-3xl font-bold leading-snug tracking-tight text-ink md:text-4xl">
            YOVU integrates directly with your Broker Management System to automatically capture,
            transcribe, and summarize every client call, freeing your insurance brokerage from
            manual data entry while improving your E&O defensibility.
          </p>
        </div>

        {/* Main: sticky nav + steps */}
        <div className="mt-24 grid gap-10 lg:mt-40 lg:grid-cols-[200px_1fr] lg:gap-12">
          {/* Sticky nav: starts at the top of the first step, rides centered in the
              viewport while scrolling, and is clamped by the column so it ends at the
              bottom of the last step. top offset ~= 50vh minus half the nav height. */}
          <div className="hidden lg:block">
            <nav className="sticky top-[calc(50vh-4rem)] flex flex-col">
              {steps.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={isActive ? "true" : undefined}
                    className="flex items-center justify-between border-b border-border py-3 text-left text-sm transition-colors"
                  >
                    <span className={isActive ? "font-semibold text-ink" : "text-ink/45"}>
                      {s.nav}
                    </span>
                    <span
                      className={`size-1.5 rounded-full transition-colors ${
                        isActive ? "bg-signal" : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Steps */}
          <div className="space-y-20 lg:space-y-36">
            {steps.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                data-index={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                {/* Placeholder media */}
                <div className="aspect-[4/5] w-full rounded-2xl bg-surface ring-1 ring-border" />

                {/* Copy */}
                <div>
                  <h3 className="text-balance font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-5 max-w-md text-pretty text-ink/70">{s.copy}</p>

                  <ul className="mt-8 border-t border-border">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-border py-3 text-sm font-medium text-ink/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={s.cta.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
                  >
                    {s.cta.label}
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
