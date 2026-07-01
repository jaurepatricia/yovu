import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight } from "lucide-react";

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

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function TestimonialsQuote() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const t = testimonials[i];

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Headline */}
        <h2 className="text-center font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Our Clients Say It Best
        </h2>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-4xl md:leading-[1.2]">
                {t.quote}
              </p>

              {/* Author row + next button (aligned to the right margin) */}
              <div className="mt-10 flex items-center justify-between gap-4">
                <figcaption className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-surface text-sm font-semibold text-ink ring-1 ring-border">
                    {initials(t.name)}
                  </span>
                  <div>
                    <div className="font-semibold text-ink">{t.name}</div>
                    <div className="text-sm text-ink/55">{t.role}</div>
                  </div>
                </figcaption>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface text-ink ring-1 ring-border transition-colors hover:bg-ink/5"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Progress segments — full width */}
        <div className="mt-12 flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1 flex-1 rounded-full transition-colors ${
                idx === i ? "bg-ink" : "bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
