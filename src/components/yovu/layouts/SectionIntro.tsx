import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  kicker?: string;
  headline: string;
  body?: string;
  media?: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function SectionIntro({
  kicker,
  headline,
  body,
  media,
  reverse = false,
  className,
}: SectionIntroProps) {
  return (
    <section className={cn("bg-canvas py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <div className={reverse ? "lg:order-2" : undefined}>
            {kicker && (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-signal">
                {kicker}
              </p>
            )}
            <h2
              className={cn(
                "font-display text-4xl font-bold tracking-tight text-ink md:text-5xl",
                kicker && "mt-4",
              )}
            >
              {headline}
            </h2>
            {body && (
              <p className="mt-6 max-w-xl text-pretty text-base text-ink/70">{body}</p>
            )}
          </div>
          <div className={reverse ? "lg:order-1" : undefined}>
            {media ?? (
              <div className="aspect-[4/3] w-full rounded-2xl bg-surface ring-1 ring-border" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
