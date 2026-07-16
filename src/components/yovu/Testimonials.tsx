import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import youngs from "@/assets/logos/youngs.png.asset.json";
import mcdougall from "@/assets/logos/mcdougall.png.asset.json";
import mcdougallDark from "@/assets/logos/mcdougall-dark.png.asset.json";

const testimonials = [
  {
    quote:
      "Invaluable for growth. YOVU solved our data dilemma. We needed better visibility and our previous tools were not accurate. YOVU solved this and added more that helped us launch a new business stream.",
    name: "Rhys Doiron",
    role: "Vice President of Corporate Development",
    brokerage: "Youngs Insurance",
    logo: youngs.url,
    logoClass: "h-14 max-w-[200px]",
  },
  {
    quote:
      "They have our complete confidence. YOVU has been an outstanding partner. Responsive, flexible, and truly willing to listen. We have complete confidence in their ability to support us as we scale.",
    name: "Lorne MacDougall",
    role: "Vice President of Operations & Corporate Development",
    brokerage: "McDougall Insurance",
    logo: mcdougall.url,
    logoDark: mcdougallDark.url,
    logoClass: "h-10 max-w-[140px]",
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
    <section data-note-anchor="testimonials" className="bg-canvas pb-32 pt-40 lg:pb-44 lg:pt-56">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
              Loved by the community
            </h2>
            <p className="mt-5 text-pretty text-ink/70 lg:max-w-[22rem]">
              Don't just take our word for it. See what professionals in leading insurance
              brokerages have to say about us.
            </p>
            <div className="mt-8 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-ink" : "w-4 bg-ink/15"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex min-h-[420px] flex-col justify-center rounded-3xl bg-surface p-8 ring-1 ring-border md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                  <p className="font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
                    {t.quote}
                  </p>
                  <div className="mt-12 flex items-center gap-4">
                    <img
                      src={t.logo}
                      alt={t.brokerage}
                      className={`w-auto object-contain ${t.logoClass} ${
                        t.logoDark ? "dark:hidden" : ""
                      }`}
                    />
                    {t.logoDark && (
                      <img
                        src={t.logoDark}
                        alt={t.brokerage}
                        className={`hidden w-auto object-contain dark:block ${t.logoClass}`}
                      />
                    )}
                    <span aria-hidden className="h-8 w-px bg-border" />
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
