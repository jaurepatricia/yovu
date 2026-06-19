import { useState, type ReactNode } from "react";
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

const Feature197 = ({ features, className }: Feature197Props) => {
  const [activeId, setActiveId] = useState<number>(features[0]?.id ?? 1);
  const active = features.find((f) => f.id === activeId) ?? features[0];

  return (
    <div className={cn("mx-auto max-w-7xl px-6", className)}>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          value={`item-${activeId}`}
          onValueChange={(v) => {
            if (!v) return;
            const id = Number(v.replace("item-", ""));
            setActiveId(id);
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
                  onClick={() => setActiveId(feature.id)}
                  className={cn(
                    "py-5 text-left font-display text-lg font-semibold tracking-tight no-underline hover:no-underline md:text-xl",
                    isActive ? "text-ink" : "text-ink/55",
                  )}
                >
                  {feature.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-pretty text-base text-ink/65">
                  {feature.description}
                  {/* Mobile-only inline visual */}
                  <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface ring-1 ring-border lg:hidden">
                    <Visual image={feature.image} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

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
