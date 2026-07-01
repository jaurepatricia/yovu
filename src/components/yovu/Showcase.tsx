import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import forestStream from "@/assets/homepage/forest stream blurred.png";
import mountainRoad from "@/assets/homepage/mountain_winding_road.png";
import manIpad from "@/assets/homepage/man holding ipad.png";
import yovuLogo from "@/assets/homepage/YOVU Logo.svg";
import appliedLogomark from "@/assets/logos/Applied Logomark.svg";
import teamsLogo from "@/assets/logos/Microsoft Office Teams logo.svg";
import salesforceLogo from "@/assets/logos/Salesforce logo.svg";

const AUTOPLAY_MS = 7000;

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
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Only autoplay while the section is on screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-advance with enough time to read. Re-arms on each slide change, so
  // manual navigation also resets the timer.
  useEffect(() => {
    if (!api || !inView || paused || reduced.current) return;
    const t = setTimeout(() => api.scrollNext(), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [api, inView, paused, selected]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {slides.map((slide, i) => {
            const light = slide.tone === "light";
            return (
              <CarouselItem key={i} className="relative h-screen pl-0">
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
                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
                  <div
                    className={`max-w-lg pl-16 md:pl-20 ${light ? "text-white" : "text-[#0b1733]"}`}
                  >
                    <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
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

                    {slide.showIntegrations && <IntegrationLockup />}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Vertical dot nav, aligned to the left of the content */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="pointer-events-auto flex flex-col items-center gap-2 rounded-full bg-black/20 px-2 py-3 backdrop-blur">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`w-2 rounded-full bg-white transition-all ${
                  selected === i ? "h-6 opacity-100" : "h-2 opacity-50 hover:opacity-80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** YOVU + cycling integration logos, animating in on scroll. */
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="mt-12 flex items-center gap-4"
    >
      <img src={yovuLogo} alt="YOVU" className="h-5 w-auto" />
      <Plus className="size-4 text-white/70" strokeWidth={2.5} />
      {/* Cycling integration chip */}
      <div className="relative size-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/20 ring-1 ring-black/5"
          >
            <img
              src={active.src}
              alt={active.name}
              className="size-7 object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
