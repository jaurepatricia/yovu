import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { ArrowRight, Plus } from "lucide-react";
import forestStream from "@/assets/homepage/forest stream blurred.png";
import mountainRoad from "@/assets/homepage/mountain_winding_road.png";
import manIpad from "@/assets/homepage/man holding ipad.png";
import yovuLogo from "@/assets/homepage/YOVU Logo.svg";
import appliedLogomark from "@/assets/logos/Applied Logomark.svg";
import teamsLogo from "@/assets/logos/Microsoft Office Teams logo.svg";
import salesforceLogo from "@/assets/logos/Salesforce logo.svg";

const integrations = [
  { name: "Applied Epic", src: appliedLogomark },
  { name: "Microsoft Teams", src: teamsLogo },
  { name: "Salesforce", src: salesforceLogo },
];

type Tone = "light" | "dark";

type Slide = {
  headline: string;
  copy: string;
  cta: { label: string; href: string };
  image: string;
  tone: Tone;
  showIntegrations?: boolean;
};

const slides: Slide[] = [
  {
    headline: "Built to fit your stack",
    copy: "YOVU connects to the tools you already trust and uses, improving efficiency so you spend more time connecting with clients.",
    cta: { label: "Our Integrations", href: "#integrations" },
    image: forestStream,
    tone: "light",
    showIntegrations: true,
  },
  {
    headline: "Built for the long road",
    copy: "YOVU stores your recordings for seven years to strengthen your E&O documentation. We take your data seriously, that’s why we’re also SOC 2 Type 2 Certified and PIPEDA Compliant.",
    cta: { label: "Our Security", href: "#security" },
    image: mountainRoad,
    tone: "dark",
  },
  {
    headline: "Built by Canadians",
    copy: "YOVU was built by a team of dedicated Canadians and our local support staff is ready to help 24/7. You’ll never have to speak to an off-shore call centre.",
    cta: { label: "Our Team", href: "#canada" },
    image: manIpad,
    tone: "light",
  },
];

export function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const count = slides.length;

  // Pinned: scrolling through the section's height drives the vertical slide track.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const trackY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((count - 1) / count) * 100}%`],
  );

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(count - 1, Math.max(0, Math.round(v * (count - 1)))));
  });

  const goTo = (i: number) => {
    const el = sectionRef.current;
    if (!el || typeof window === "undefined") return;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: elTop + (i / (count - 1)) * scrollable,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${count * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Vertical slide track */}
        <motion.div style={{ y: trackY }}>
          {slides.map((slide, i) => {
            const light = slide.tone === "light";
            return (
              <div key={i} className="relative h-screen w-full">
                {/* Background image */}
                <img
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Readability scrim on the text side */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 ${
                    light
                      ? "bg-gradient-to-r from-black/45 via-black/15 to-transparent"
                      : "bg-gradient-to-r from-white/55 via-white/20 to-transparent"
                  }`}
                />

                {/* Content */}
                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center gap-10 px-6">
                  <div
                    className={`max-w-lg ${light ? "text-white" : "text-[#0b1733]"}`}
                  >
                    <h2 className="font-display text-4xl font-bold tracking-tight md:whitespace-nowrap md:text-5xl">
                      {slide.headline}
                    </h2>
                    <p
                      className={`mt-5 max-w-md text-base ${
                        light ? "text-white/80" : "text-[#0b1733]/75"
                      }`}
                    >
                      {slide.copy}
                    </p>
                    <a
                      href={slide.cta.href}
                      className={`mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${
                        light
                          ? "border-white/70 text-white hover:bg-white/10"
                          : "border-[#0b1733]/40 text-[#0b1733] hover:bg-[#0b1733]/5"
                      }`}
                    >
                      {slide.cta.label}
                      <ArrowRight className="size-4" />
                    </a>
                  </div>

                  {slide.showIntegrations && (
                    <div className="hidden flex-1 items-center justify-center lg:flex">
                      <IntegrationLockup />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Vertical progress nav, nudged just outside the content margin */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="mx-auto flex h-full max-w-7xl items-center px-6">
            <ProgressNav
              progress={scrollYProgress}
              active={active}
              count={count}
              onGo={goTo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressNav({
  progress,
  active,
  count,
  onGo,
}: {
  progress: MotionValue<number>;
  active: number;
  count: number;
  onGo: (i: number) => void;
}) {
  const fill = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="pointer-events-auto -ml-5 flex flex-col items-center rounded-full bg-black/15 px-2 py-4 backdrop-blur md:-ml-8">
      <div className="relative h-56 w-1.5 rounded-full bg-white/30">
        <motion.div
          style={{ height: fill }}
          className="absolute inset-x-0 top-0 rounded-full bg-white"
        />
        <div className="absolute -inset-x-1 inset-y-0 flex flex-col justify-between">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => onGo(i)}
              className={`size-3.5 rounded-full border border-white/70 transition-colors ${
                active >= i ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** YOVU + cycling integration logos in static matte-glass circles. */
function IntegrationLockup() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const t = setInterval(
      () => setIdx((i) => (i + 1) % integrations.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);

  const active = integrations[idx];
  const glass =
    "rounded-full bg-white/12 ring-1 ring-white/25 backdrop-blur-md shadow-2xl shadow-black/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="flex items-center gap-6"
    >
      {/* YOVU */}
      <div className={`flex size-32 items-center justify-center ${glass}`}>
        <img src={yovuLogo} alt="YOVU" className="h-9 w-auto" />
      </div>
      <Plus className="size-8 shrink-0 text-white/80" strokeWidth={2.5} />
      {/* Static integration circle, icons pop in and out */}
      <div
        className={`relative flex size-32 items-center justify-center ${glass}`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={active.src}
            alt={active.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute size-16 object-contain"
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
