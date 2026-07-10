import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import youngs from "@/assets/logos/youngs.png.asset.json";
import mcdougall from "@/assets/logos/mcdougall.png.asset.json";
import mcdougallDark from "@/assets/logos/mcdougall-dark.png.asset.json";

const testimonials = [
  {
    quote:
      "Invaluable for growth. YOVU solved our data dilemma. We needed better visibility and our previous tools were not accurate. YOVU solved this and added more that helped us launch a new business stream.",
    name: "Rhys Doiron",
    role: "VP of Corporate Development",
    brokerage: "Youngs Insurance",
    logo: youngs.url,
  },
  {
    quote:
      "They have our complete confidence. YOVU has been an outstanding partner. Responsive, flexible, and truly willing to listen. We have complete confidence in their ability to support us as we scale.",
    name: "Lorne MacDougall",
    role: "VP of Operations & Corp Development",
    brokerage: "McDougall Insurance",
    logo: mcdougallDark.url ?? mcdougall.url,
  },
];

export function TestimonialsV2() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((v) => (v + 1) % testimonials.length);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
        {/* Left: logo card (blank image placeholder for now) */}
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-ink">
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={i}
                src={t.logo}
                alt={t.brokerage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="max-h-14 w-auto max-w-[250px] object-contain brightness-0 invert"
              />
            </AnimatePresence>
          </div>

          {/* Prev / next controls */}
          <div className="absolute bottom-6 right-6 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex size-11 items-center justify-center rounded-full text-canvas ring-1 ring-canvas/25 transition-colors hover:bg-canvas/10"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex size-11 items-center justify-center rounded-full text-canvas ring-1 ring-canvas/25 transition-colors hover:bg-canvas/10"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Right: testimonial */}
        <div className="flex min-h-[420px] flex-col justify-between rounded-3xl bg-surface p-10 ring-1 ring-border lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex h-full flex-col justify-between"
            >
              <blockquote className="text-balance font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10">
                <div className="font-semibold text-ink">{t.name}</div>
                <div className="text-sm text-ink/55">
                  {t.role} @ {t.brokerage}
                </div>
              </figcaption>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
