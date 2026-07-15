import type { ReactNode } from "react";

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

export function IndividualFeatureCards({
  heading,
  cards,
  className,
}: IndividualFeatureCardsProps) {
  return (
    <section className={`bg-canvas py-24 lg:py-32 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading and the spacing above it stay pinned as the cards stack beneath. */}
        <div className="sticky top-20 z-20 bg-canvas pb-8 pt-4 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {heading}
          </h2>
        </div>

        {/* Cards slide up and stack together as the viewer scrolls. */}
        <div className="flex flex-col gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="sticky top-44 overflow-hidden rounded-3xl bg-card p-8 shadow-lg shadow-black/5 ring-1 ring-border md:p-12"
            >
              <div className="grid items-center gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-pretty text-base text-ink/70">
                    {card.copy}
                  </p>
                </div>
                <div className="md:col-span-1">
                  {card.media ?? (
                    <div className="aspect-square w-full rounded-2xl bg-surface ring-1 ring-border" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
