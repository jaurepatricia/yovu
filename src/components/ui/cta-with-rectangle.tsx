import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";

interface CTAProps {
  badge?: { text: string };
  title: string;
  description?: string;
  action: {
    text: string;
    href: string;
    variant?: "default" | "glow";
  };
  withGlow?: boolean;
  className?: string;
}

export function CTASection({
  badge,
  title,
  description,
  action,
  withGlow = true,
  className,
}: CTAProps) {
  return (
    <section className={cn("px-6 pb-24", className)}>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-[2.5rem] bg-ink px-6 py-24 text-center text-canvas lg:py-32">
        {badge && (
          <Badge
            variant="outline"
            className="animate-fade-in-up border-signal/40 bg-signal/10 text-signal opacity-0 [animation-delay:100ms]"
          >
            {badge.text}
          </Badge>
        )}

        <h2 className="mt-6 animate-fade-in-up text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight opacity-0 [animation-delay:200ms] md:text-6xl">
          {title}
        </h2>

        {description && (
          <p className="mt-6 max-w-2xl animate-fade-in-up text-pretty text-lg text-canvas/65 opacity-0 [animation-delay:300ms]">
            {description}
          </p>
        )}

        <a
          href={action.href}
          className="relative z-10 mt-12 inline-flex animate-fade-in-up items-center justify-center rounded-full bg-signal px-8 py-4 text-base font-semibold text-ink opacity-0 ring-1 ring-signal transition-transform [animation-delay:500ms] hover:scale-[1.03]"
        >
          {action.text}
        </a>

        {withGlow && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -bottom-1/2 h-[60%] animate-scale-in opacity-0 [animation-delay:700ms]"
            style={{
              background:
                "radial-gradient(ellipse at center, color-mix(in oklab, var(--signal) 40%, transparent) 0%, transparent 60%)",
            }}
          />
        )}
      </div>
    </section>
  );
}
