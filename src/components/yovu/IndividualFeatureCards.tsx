import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

export type IndividualFeatureCard = {
  title: string;
  copy: string;
  media?: ReactNode;
};

type IndividualFeatureCardsProps = {
  heading: string;
  cards: IndividualFeatureCard[];
  className?: string;
};

export function IndividualFeatureCards({ heading, cards, className }: IndividualFeatureCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const total = cards.length;

  return (
    <section
      ref={ref}
      className={`relative bg-canvas ${className ?? ""}`}
      style={{ height: `${total * 100}vh` }}
    >
      {/* One pinned stage holds the heading + the whole card stack, so the
          heading stays locked above the top card and only leaves when the
          section ends — they move together as one unit. */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-28 text-center lg:pt-32">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-7xl flex-1 px-6">
          {cards.map((card, i) => (
            <StackCard
              key={card.title}
              card={card}
              index={i}
              total={total}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({
  card,
  index,
  total,
  progress,
}: {
  card: IndividualFeatureCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Card 0 rests from the start; each later card slides up over the previous
  // one during its slice of the scroll.
  const start = index === 0 ? 0 : (index - 1) / total;
  const end = index / total;
  const y = useTransform(progress, [start, end], [index === 0 ? "0%" : "105%", "0%"]);

  return (
    <motion.div
      style={{ y, zIndex: index }}
      className="absolute inset-x-0 top-0 overflow-hidden rounded-3xl bg-card p-8 shadow-sm shadow-black/[0.03] ring-1 ring-border/60 md:p-12"
    >
      <div className="grid items-center gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {card.title}
          </h3>
          <p className="mt-4 max-w-xl text-pretty text-base text-ink/70">{card.copy}</p>
        </div>
        <div className="md:col-span-1">
          {card.media ?? (
            <div className="aspect-square w-full rounded-2xl bg-surface ring-1 ring-border" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
