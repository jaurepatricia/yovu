import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const CYCLE_MS = 5000;

const items = [
  {
    title: "Mobile App",
    copy: "Turn your iOS or Android device into your business phone. Access your corporate directory, sync contacts, and keep your personal number private while working.",
  },
  {
    title: "Desktop & Web Phone",
    copy: "Access full phone functionality, make calls, and check voicemails right from your browser or desktop application with click-to-call functionality on any phone number.",
  },
  {
    title: "Call Flipping",
    copy: "Start a call on your desktop and seamlessly transition it to your mobile device or desk phone without dropping the connection.",
  },
  {
    title: "Multi-Ring",
    copy: "Ring your desk phone, web dialer, and mobile device simultaneously so you never miss a client.",
  },
];

export function CommunicateDevices() {
  const [activeItem, setActiveItem] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reducedMotion = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Auto-advance. Re-arms whenever the active item changes, so any manual
  // click naturally resets the 5s timer.
  useEffect(() => {
    if (reducedMotion.current || isPaused) return;
    const t = setTimeout(() => {
      setActiveItem((i) => (i + 1) % items.length);
    }, CYCLE_MS);
    return () => clearTimeout(t);
  }, [activeItem, isPaused]);

  const active = items[activeItem];

  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Work From Anywhere
          </h2>
          <p className="mt-5 text-pretty text-lg text-ink/70">
            Your phone system should follow you, not tie you to a desk. Our mobility solutions let
            your team work from anywhere without compromising professionalism.
          </p>
        </div>

        {/* Content: accordion + media */}
        <div
          className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left: accordion */}
          <div className="divide-y divide-border">
            {items.map((item, i) => {
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
                        <MediaCard title={item.title} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: media (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <MediaCard title={active.title} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Placeholder media panel until each device animation is built. */
function MediaCard({ title }: { title: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-surface shadow-lg shadow-ink/5 ring-1 ring-border">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/50">
          {title}
        </span>
      </div>
    </div>
  );
}
