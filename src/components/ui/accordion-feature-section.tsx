import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FeatureItem {
  id: number;
  title: string;
  image: string | ReactNode;
  description: string;
}

interface Feature197Props {
  features: FeatureItem[];
  className?: string;
  cycleMs?: number;
}

function Visual({ image }: { image: string | ReactNode }) {
  if (typeof image === "string") {
    return (
      <img
        src={image}
        alt=""
        className="h-full w-full rounded-2xl object-cover"
      />
    );
  }
  return <>{image}</>;
}

const Feature197 = ({ features, className, cycleMs = 6000 }: Feature197Props) => {
  const [activeId, setActiveId] = useState<number>(features[0]?.id ?? 1);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeIndex = Math.max(
    0,
    features.findIndex((f) => f.id === activeId),
  );
  const active = features[activeIndex] ?? features[0];

  const reducedMotion = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  // Auto-advance loop
  useEffect(() => {
    if (reducedMotion.current) return;
    if (isPaused) return;

    let raf = 0;
    let start = performance.now() - (progress / 100) * cycleMs;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / cycleMs) * 100);
      setProgress(pct);
      if (pct >= 100) {
        const nextIndex = (activeIndex + 1) % features.length;
        setActiveId(features[nextIndex].id);
        setProgress(0);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, isPaused, cycleMs, features.length]);

  const handleSelect = (id: number) => {
    setActiveId(id);
    setProgress(0);
  };

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <div className={cn("mx-auto max-w-7xl px-6", className)}>
      <div
        className="grid gap-10 lg:grid-cols-2 lg:gap-16"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
      >
        {/* Accordion column with timer rail */}
        <div className="relative pl-6">
          {/* Vertical track */}
          <div className="absolute left-0 top-0 bottom-0 flex w-[2px] flex-col gap-0 overflow-hidden rounded-full bg-border">
            {features.map((f, i) => {
              const isActive = f.id === activeId;
              const isPast = i < activeIndex;
              const fill = isPast ? 100 : isActive ? progress : 0;
              return (
                <div key={f.id} className="relative flex-1">
                  <div
                    className="absolute left-0 top-0 w-full bg-signal transition-[height] duration-75 ease-linear"
                    style={{ height: `${fill}%` }}
                  />
                </div>
              );
            })}
          </div>

          <Accordion
            type="single"
            collapsible
            value={`item-${activeId}`}
            onValueChange={(v) => {
              if (!v) return;
              handleSelect(Number(v.replace("item-", "")));
            }}
            className="w-full"
          >
            {features.map((feature) => {
              const isActive = feature.id === activeId;
              return (
                <AccordionItem
                  key={feature.id}
                  value={`item-${feature.id}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger
                    onClick={() => handleSelect(feature.id)}
                    className={cn(
                      "py-5 text-left font-display text-lg font-semibold tracking-tight no-underline hover:no-underline md:text-xl",
                      isActive ? "text-ink" : "text-ink/55",
                    )}
                  >
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-pretty text-base text-ink/65">
                    {feature.description}
                    <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface ring-1 ring-border lg:hidden">
                      <Visual image={feature.image} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Desktop visual */}
        <div className="hidden lg:block">
          <div className="sticky top-28 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface ring-1 ring-border">
            {active && <Visual image={active.image} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Feature197 };
