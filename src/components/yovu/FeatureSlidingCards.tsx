import type { ReactNode } from "react";
import { Eyebrow } from "@/components/yovu/ui/Eyebrow";

export type FeatureSlidingCard = {
  title: string;
  copy: string;
  media?: ReactNode;
  /** Small status label shown inline beside the heading (e.g. "Coming Soon"),
   * styled like the eyebrow text. */
  tag?: string;
};

type FeatureSlidingCardsProps = {
  heading: string;
  cards: FeatureSlidingCard[];
  className?: string;
  /** Card background utility. Defaults to `bg-card`; pass e.g. `bg-surface`
   * to lift the card off the page background so the visual pops. */
  cardClassName?: string;
};

export function FeatureSlidingCards({
  heading,
  cards,
  className,
  cardClassName = "bg-card",
}: FeatureSlidingCardsProps) {
  return (
    <section className={`bg-canvas ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/*
          The heading pins to the very top and its opaque background covers the
          whole area above the cards' pin line, so cards slide up and tuck
          underneath it (never peeking above). Every card stays in the sticky
          stack — including the last — so they pile onto the same spot and the
          top card is always fully visible below the heading. The stack then
          scrolls away with the section once the last card is on top.
        */}
        <div className="sticky top-0 z-30 bg-canvas pb-8 pt-28 text-center lg:pt-32">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="flex flex-col gap-8 pb-24 lg:pb-32">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`sticky top-[13rem] overflow-hidden rounded-3xl p-8 shadow-sm shadow-black/[0.03] ring-1 ring-border/60 md:p-12 ${cardClassName}`}
            >
              <div className="grid items-center gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  {card.tag && (
                    <Eyebrow className="mb-3">
                      {card.tag}
                    </Eyebrow>
                  )}
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-pretty text-base text-ink/70">{card.copy}</p>
                </div>
                <div className="md:col-span-1">
                  {card.media ? (
                    <div className="relative mx-auto h-72 w-full [&_*]:shadow-none">
                      {card.media}
                    </div>
                  ) : (
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
