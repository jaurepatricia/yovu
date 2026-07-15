import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureGridItem {
  icon: LucideIcon;
  title: string;
  copy: string;
}

interface FeatureGridProps {
  items: FeatureGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClass: Record<2 | 3 | 4, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export function FeatureGrid({ items, columns = 3, className }: FeatureGridProps) {
  return (
    <section className={cn("bg-canvas py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className={cn("grid gap-10 sm:grid-cols-2", columnClass[columns])}>
          {items.map(({ icon: Icon, title, copy }) => (
            <div key={title}>
              <Icon className="size-8 text-signal" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                {title}
              </h3>
              <p className="mt-3 text-pretty text-base text-ink/70">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
