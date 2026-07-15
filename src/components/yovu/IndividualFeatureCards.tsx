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

function Card({ card }: { card: IndividualFeatureCard }) {
  return (
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
  );
}

const cardShell =
  "overflow-hidden rounded-3xl bg-card p-8 shadow-sm shadow-black/[0.03] ring-1 ring-border/60 md:p-12";

export function IndividualFeatureCards({ heading, cards, className }: IndividualFeatureCardsProps) {
  const stacked = cards.slice(0, -1);
  const last = cards[cards.length - 1];

  return (
    <section className={`bg-canvas py-24 lg:py-32 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/*
          Heading + all-but-last card share one sticky context. The heading pins
          while those cards stack beneath it, then releases as the last card
          arrives — so the last card is never covered and the effect stops there.
        */}
        <div>
          <div className="sticky top-20 z-30 bg-canvas pb-8 pt-4 text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {heading}
            </h2>
          </div>

          {stacked.length > 0 && (
            <div className="flex flex-col gap-8">
              {stacked.map((card) => (
                <div key={card.title} className={`sticky top-48 ${cardShell}`}>
                  <Card card={card} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Final card scrolls in normally — no sticky, never under the heading. */}
        {last && (
          <div className={`${stacked.length > 0 ? "mt-8" : ""} ${cardShell}`}>
            <Card card={last} />
          </div>
        )}
      </div>
    </section>
  );
}
