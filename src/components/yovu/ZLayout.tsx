import { motion } from "motion/react";
import type { ReactNode } from "react";

export type ZLayoutItem = {
  kicker?: string;
  title: string;
  copy: string;
  media?: ReactNode;
};

type ZLayoutProps = {
  heading?: string;
  eyebrow?: string;
  intro?: string;
  items: ZLayoutItem[];
  className?: string;
};

export function ZLayout({ heading, eyebrow, intro, items, className }: ZLayoutProps) {
  return (
    <section className={`bg-canvas py-24 lg:py-32 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(heading || eyebrow || intro) && (
          <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-signal">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                {heading}
              </h2>
            )}
            {intro && <p className="mt-5 text-pretty text-base text-ink/70">{intro}</p>}
          </div>
        )}

        <div className="space-y-20 lg:space-y-32">
          {items.map((item, i) => {
            const imageRight = i % 2 === 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-24"
              >
                <div className={`${imageRight ? "lg:order-1" : "lg:order-2"} lg:px-4 xl:px-8`}>
                  {item.kicker && (
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-signal">
                      {item.kicker}
                    </p>
                  )}
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-pretty text-base text-ink/70">{item.copy}</p>
                </div>
                <div className={imageRight ? "lg:order-2" : "lg:order-1"}>
                  {item.media ?? (
                    <div className="aspect-[4/3] w-full rounded-2xl bg-surface ring-1 ring-border" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
