import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";

const steps = [
  {
    label: "Step 1",
    copy: "Any new or existing YOVU client with a Microsoft Teams account will need a Microsoft common area phone license.",
  },
  {
    label: "Step 2",
    copy: "The YOVU Teams Connector converts the Microsoft Teams built-in softphone into a registered endpoint on the YOVU Office Phone network.",
  },
  {
    label: "Step 3",
    copy: "Any number registered with YOVU can be set up to ring to a Teams client or multiple Teams clients. When dialing out using Teams, it connects to the YOVU network.",
  },
];

export function TeamsHowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const count = steps.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(count - 1, Math.max(0, Math.floor(v * count))));
  });

  const goTo = (i: number) => {
    const el = sectionRef.current;
    if (!el || typeof window === "undefined") return;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: elTop + ((i + 0.5) / count) * scrollable, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative" style={{ height: `${count * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Placeholder background */}
        <div aria-hidden="true" className="absolute inset-0 bg-surface" />

        {/* Crossfading step copy */}
        {steps.map((step, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              active === i ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div className="mx-auto flex h-full max-w-7xl items-center px-6">
              {/* Left column copy; right side left open for future imagery */}
              <div className="max-w-xl lg:max-w-lg">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
                  {step.label}
                </span>
                <p className="mt-5 text-pretty font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-4xl md:leading-snug">
                  {step.copy}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Section eyebrow heading, pinned top-left of the content column */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
          <div className="mx-auto max-w-7xl px-6 pt-28">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              How It Works
            </h2>
          </div>
        </div>

        {/* Segmented progress line */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="mx-auto flex h-full max-w-7xl items-center px-6">
            <div className="pointer-events-auto -ml-5 flex flex-col gap-1.5 md:-ml-8">
              {Array.from({ length: count }).map((_, i) => (
                <ProgressSegment
                  key={i}
                  progress={scrollYProgress}
                  index={i}
                  count={count}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressSegment({
  progress,
  index,
  count,
  onClick,
}: {
  progress: MotionValue<number>;
  index: number;
  count: number;
  onClick: () => void;
}) {
  const scaleY = useTransform(progress, [index / count, (index + 1) / count], [0, 1]);
  return (
    <button
      type="button"
      aria-label={`Go to step ${index + 1}`}
      onClick={onClick}
      className="relative h-16 w-1 overflow-hidden rounded-full bg-ink/25 transition-colors"
    >
      <motion.span style={{ scaleY }} className="absolute inset-0 origin-top rounded-full bg-ink" />
    </button>
  );
}
