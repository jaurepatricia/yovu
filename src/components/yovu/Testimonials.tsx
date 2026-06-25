import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Switching to YOVU was the single best operational decision we made this year. The deep integration with Applied Epic has saved our account managers hours of manual data entry every single week.",
    name: "Sarah Jenkins",
    role: "Principal, Atlantic Insurance Group",
  },
  {
    quote:
      "We went from chasing call notes to having every conversation summarized and logged automatically. Our E&O posture has never been stronger.",
    name: "Mark Bouchard",
    role: "Operations Lead, Western Brokerage Group",
  },
  {
    quote:
      "The AI summaries save our brokers at least an hour a day. It pays for itself in the first week.",
    name: "Elena Rossi",
    role: "Director of Service, Rossi & Co.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];

  return (
    <section className="bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
              Don't just take our word for it.
            </h2>
            <p className="mt-6 text-pretty text-ink/70">
              Join over 100+ insurance brokers boosting their productivity with YOVU
              right inside their Applied Epic dashboards.
            </p>
            <div className="mt-10 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-signal" : "w-4 bg-ink/15"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative min-h-[280px] rounded-3xl bg-card p-8 ring-1 ring-border md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                  <p className="font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="size-12 rounded-full bg-surface ring-1 ring-border" />
                    <div>
                      <div className="font-semibold text-ink">{t.name}</div>
                      <div className="text-sm text-ink/55">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
