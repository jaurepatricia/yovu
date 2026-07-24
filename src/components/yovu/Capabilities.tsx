import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import mountainLightBlurred from "@/assets/homepage/mountain_light_blurred.png";
import mountainDarkBlurred from "@/assets/homepage/mountain_dark_blurred.png";
import { ClickToDial } from "@/components/yovu/animations/ClickToDial";
import { IntegrationScreenPop } from "@/components/yovu/animations/IntegrationScreenPop";
import { DeviceHandoff } from "@/components/yovu/animations/DeviceHandoff";
import { CallRecording } from "@/components/yovu/animations/CallRecording";
import { TranscriptionSummary } from "@/components/yovu/animations/TranscriptionSummary";
import { ActivityLogging } from "@/components/yovu/animations/ActivityLogging";
import { ReportingDashboard } from "@/components/yovu/animations/ReportingDashboard";
import { ThreeWayCall } from "@/components/yovu/animations/ThreeWayCall";
import { GuidedConversation } from "@/components/yovu/animations/GuidedConversation";

const CYCLE_MS = 5000;

export type Item = {
  title: string;
  copy: string;
  cta: { label: string; href: string };
  /** Optional animated overlay shown over the card background. */
  media?: ReactNode;
  /** Small eyebrow-style label shown inline beside the title (e.g. "Coming Soon"). */
  tag?: string;
};

export type Category = {
  id: string;
  label: string;
  items: Item[];
};

const defaultCategories: Category[] = [
  {
    id: "communicate",
    label: "Communicate",
    items: [
      {
        title: "Business phone system",
        copy: "Reliable cloud communications for modern insurance teams, equipped with with click-to-call, warm transfers, and advanced call management.",
        cta: { label: "Get a Demo", href: "#demo" },
        media: <ClickToDial />,
      },
      {
        title: "Insurance integrations",
        copy: "Automate workflows directly within Applied Epic or your preferred management system. Get full caller context instantly with screen pops.",
        cta: { label: "Our Integrations", href: "#integrations" },
        media: <IntegrationScreenPop />,
      },
      {
        title: "Work from anywhere",
        copy: "Transition easily between desktop, mobile, and desk phones with a consistent communication experience wherever your team goes.",
        cta: { label: "Learn More", href: "#demo" },
        media: <DeviceHandoff />,
      },
    ],
  },
  {
    id: "capture",
    label: "Capture",
    items: [
      {
        title: "Automatic logging",
        copy: "Recordings, summaries, and call data automatically attached to client files in your management system.",
        cta: { label: "Get a Demo", href: "#demo" },
        media: <ActivityLogging />,
      },
      {
        title: "Long term call recording",
        copy: "Ensure E&O defensibility with secure playback and up to seven years of retention and import your past recordings straight to YOVU.",
        cta: { label: "Learn More", href: "#demo" },
        media: <CallRecording />,
      },
      {
        title: "Transcription & tailored AI summaries",
        copy: "Get transcripts and AI summaries customized for your insurance team. We capture the exact key points, sentiment, and follow-up tasks.",
        cta: { label: "Our Security", href: "#security" },
        media: <TranscriptionSummary />,
      },
    ],
  },
  {
    id: "coach",
    label: "Coach",
    items: [
      {
        title: "Guided conversations",
        tag: "Coming Soon",
        copy: "Real-time prompts guide your team during live calls to ramp up new hires faster. Ensure consistent documentation and strengthen E&O records.",
        cta: { label: "Get Early Access", href: "#demo" },
        media: <GuidedConversation />,
      },
      {
        title: "Performance insights",
        copy: "Track call activity, team performance, and trends with customizable reporting & dashboards.",
        cta: { label: "Get a Demo", href: "#demo" },
        media: <ReportingDashboard />,
      },
      {
        title: "Listen, whisper & collaborate",
        copy: "Listen live, coach privately, or join the call when your team needs support.",
        cta: { label: "Learn More", href: "#demo" },
        media: <ThreeWayCall framed />,
      },
    ],
  },
];

export { defaultCategories };

export function Capabilities({ categories = defaultCategories }: { categories?: Category[] } = {}) {
  const [activeCat, setActiveCat] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reducedMotion = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Explore key features</h2>
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
                      <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                        <span
                          className={
                            isOpen
                              ? "font-display text-lg font-semibold tracking-tight text-ink md:text-xl"
                              : "font-display text-lg font-semibold tracking-tight text-ink/55 transition-colors md:text-xl"
                          }
                        >
                          {item.title}
                        </span>
                        {item.tag && (
                          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-signal">
                            {item.tag}
                          </span>
                        )}
                      </span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-ink">
                        <ChevronDown
                          className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="text-pretty text-ink/65">{item.copy}</p>
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
                href={`/${category.id}`}
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
