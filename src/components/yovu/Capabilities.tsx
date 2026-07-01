import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import mountainLightBlurred from "@/assets/homepage/mountain_light_blurred.png";
import mountainDarkBlurred from "@/assets/homepage/mountain_dark_blurred.png";
import { ClickToDial } from "@/components/yovu/animations/ClickToDial";

const CYCLE_MS = 5000;

type Item = {
  title: string;
  copy: string;
  cta: { label: string; href: string };
  /** Optional animated overlay shown over the card background. */
  media?: ReactNode;
};

type Category = {
  id: string;
  label: string;
  items: Item[];
};

const categories: Category[] = [
  {
    id: "communicate",
    label: "Communicate",
    items: [
      {
        title: "Work From Anywhere",
        copy: "Ring multiple devices, seamlessly flip calls, and keep your personal number private.",
        cta: { label: "Get a Demo", href: "#demo" },
        media: <ClickToDial />,
      },
      {
        title: "Caller Context",
        copy: "Screen pops instantly reveal caller accounts, letting you personalize service and eliminate repetitive questions.",
        cta: { label: "Learn More", href: "#demo" },
      },
      {
        title: "Transfers & Custom Statuses",
        copy: "Avoid blind handoffs by checking live statuses, transferring with context, or adding a colleague.",
        cta: { label: "Learn More", href: "#demo" },
      },
    ],
  },
  {
    id: "capture",
    label: "Capture",
    items: [
      {
        title: "Call Transcription",
        copy: "Review recorded calls, search conversation history, and find details fast.",
        cta: { label: "Get a Demo", href: "#demo" },
      },
      {
        title: "AI Summary",
        copy: "Generate customizable summaries with sentiment, key points, and action items ready for your BMS.",
        cta: { label: "Learn More", href: "#demo" },
      },
      {
        title: "Recording Storage",
        copy: "Store recordings for up to seven years to support compliance and strengthen your E&O documentation.",
        cta: { label: "Our Security", href: "#security" },
      },
    ],
  },
  {
    id: "coach",
    label: "Coach",
    items: [
      {
        title: "In-Depth Reporting",
        copy: "Track call activity, team performance, and queue trends with customizable dashboards.",
        cta: { label: "Get a Demo", href: "#demo" },
      },
      {
        title: "Listen, Whisper & Collaborate",
        copy: "Listen live, coach privately, or join the call when your team needs support.",
        cta: { label: "Learn More", href: "#demo" },
      },
      {
        title: "More Coming Soon",
        copy: "Turn real conversations into training tools that help new hires ramp faster and top performers scale.",
        cta: { label: "Get Early Access", href: "#demo" },
      },
    ],
  },
];

export function Capabilities() {
  const [activeCat, setActiveCat] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reducedMotion = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const category = categories[activeCat];
  const itemCount = category.items.length;

  // Auto-advance. Re-arms whenever the active item/category changes, so any
  // manual click naturally resets the 5s timer.
  useEffect(() => {
    if (reducedMotion.current || isPaused) return;
    const t = setTimeout(() => {
      setActiveItem((i) => (i + 1) % itemCount);
    }, CYCLE_MS);
    return () => clearTimeout(t);
  }, [activeCat, activeItem, isPaused, itemCount]);

  const selectCategory = (i: number) => {
    setActiveCat(i);
    setActiveItem(0);
  };

  const active = category.items[activeItem];
  const mediaKey = `${category.id}-${activeItem}`;

  return (
    <section id="capabilities" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Explore Key Features
          </h2>
        </div>

        {/* Content: accordion + media */}
        <div
          className="grid gap-10 lg:grid-cols-2 lg:gap-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left: tabs + accordion */}
          <div>
            {/* Category tabs */}
            <div
              role="tablist"
              aria-label="Feature categories"
              className="mb-8 grid grid-cols-3 gap-3"
            >
              {categories.map((c, i) => {
                const isActive = i === activeCat;
                return (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => selectCategory(i)}
                    className={
                      isActive
                        ? "w-full rounded-full border border-signal bg-signal-soft py-2.5 text-center text-sm font-semibold text-ink transition-colors"
                        : "w-full rounded-full border border-border py-2.5 text-center text-sm font-semibold text-ink/60 transition-colors hover:border-ink/20 hover:text-ink"
                    }
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>

            <div className="divide-y divide-border">
              {category.items.map((item, i) => {
                const isOpen = i === activeItem;
                return (
                  <div key={item.title}>
                    <button
                      onClick={() => setActiveItem(i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span
                        className={
                          isOpen
                            ? "font-display text-lg font-semibold tracking-tight text-ink md:text-xl"
                            : "font-display text-lg font-semibold tracking-tight text-ink/55 transition-colors md:text-xl"
                        }
                      >
                        {item.title}
                      </span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-ink">
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="text-pretty text-ink/65">
                          {item.copy}
                        </p>
                        {/* Mobile media (inline under open item) */}
                        <div className="mt-6 lg:hidden">
                          <MediaCard item={item} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA — links to the active category page */}
            <div className="mt-8">
              <a
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
              >
                Learn More
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Right: media (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mediaKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <MediaCard item={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Rounded media card with a theme-aware blurred mountain background.
 * Renders the item's animated `media` overlay when present, otherwise a
 * placeholder title label until that feature's animation is built.
 */
function MediaCard({ item }: { item: Item }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg shadow-ink/5 ring-1 ring-border">
      {/* Theme-aware blurred background */}
      <img
        src={mountainLightBlurred}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover dark:hidden"
      />
      <img
        src={mountainDarkBlurred}
        alt=""
        aria-hidden
        className="absolute inset-0 hidden size-full object-cover dark:block"
      />
      {/* Overlay: animated media if available, else placeholder label */}
      {item.media ?? (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/50">
            {item.title}
          </span>
        </div>
      )}
    </div>
  );
}
