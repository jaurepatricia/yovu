import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { ArrowRight } from "lucide-react";

type Panel = {
  headline: string;
  copy: string;
  cta: { label: string; href: string };
};

const panels: Panel[] = [
  {
    headline: "Business Phone System",
    copy: "We offer numerous calling and routing VoIP phone features for Commercial Phone Systems to help ensure your organization's communication is seamless, reliable, and custom to your needs.",
    cta: { label: "Our Capabilities", href: "#capabilities" },
  },
  {
    headline: "Integrations",
    copy: "We believe you do your best work when your tools talk to each other, which is why we connect your phone system to over 70 platforms you use every day, like Applied Epic, Salesforce, and Microsoft Teams.",
    cta: { label: "Our Integrations", href: "#integrations" },
  },
  {
    headline: "Reliable & Secure",
    copy: "We provide businesses with the best cloud-based phone system, offering reliable communication solutions for businesses. Our secure and encrypted calls ensure that your communications are protected and your business operations run smoothly.",
    cta: { label: "Our Security", href: "#" },
  },
];

// Complete the horizontal travel before the pin ends, so the last panel
// settles centered and holds for the final stretch of scroll.
const TRAVEL = 0.85;

export function CommunicateShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const count = panels.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const trackX = useTransform(
    scrollYProgress,
    [0, TRAVEL],
    ["0%", `-${((count - 1) / count) * 100}%`],
  );

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = Math.min(v / TRAVEL, 1);
    setActive(Math.min(count - 1, Math.max(0, Math.floor(p * count))));
  });

  const goTo = (i: number) => {
    const el = sectionRef.current;
    if (!el || typeof window === "undefined") return;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollable = el.offsetHeight - window.innerHeight;
    const target = i === count - 1 ? TRAVEL : ((i + 0.5) / count) * TRAVEL;
    window.scrollTo({
      top: elTop + target * scrollable,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-canvas"
      style={{ height: `${count * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Horizontal track */}
        <motion.div style={{ x: trackX }} className="flex h-full">
          {panels.map((panel, i) => (
            <div
              key={i}
              className="flex h-full w-screen shrink-0 items-center"
            >
              <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
                {/* Text */}
                <div className="max-w-xl">
                  <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                    {panel.headline}
                  </h2>
                  <p className="mt-5 max-w-lg text-pretty text-base text-ink/70 md:text-lg">
                    {panel.copy}
                  </p>
                  <a
                    href={panel.cta.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
                  >
                    {panel.cta.label}
                    <ArrowRight className="size-4" />
                  </a>
                </div>
                {/* Image placeholder */}
                <div className="aspect-[4/3] w-full rounded-3xl bg-surface ring-1 ring-border" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Horizontal segmented progress bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-10 z-20">
          <div className="mx-auto flex max-w-7xl justify-center gap-2 px-6">
            {Array.from({ length: count }).map((_, i) => (
              <ProgressSegment
                key={i}
                progress={scrollYProgress}
                index={i}
                count={count}
                active={active === i}
                onClick={() => goTo(i)}
              />
            ))}
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
  active: boolean;
  onClick: () => void;
}) {
  const scaleX = useTransform(
    progress,
    [(index / count) * TRAVEL, ((index + 1) / count) * TRAVEL],
    [0, 1],
  );
  return (
    <button
      type="button"
      aria-label={`Go to section ${index + 1}`}
      onClick={onClick}
      className="pointer-events-auto relative h-1 w-16 overflow-hidden rounded-full bg-ink/15"
    >
      <motion.span
        style={{ scaleX }}
        className="absolute inset-0 origin-left rounded-full bg-ink"
      />
    </button>
  );
}
