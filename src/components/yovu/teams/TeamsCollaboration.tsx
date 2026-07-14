import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "Simplify Your IT",
    copy: "Reduce the number of applications your team needs to juggle, lowering support costs while increasing efficiency.",
  },
  {
    title: "Increase Connection",
    copy: "Voice-enabled collaboration is a growing asset for company inclusion, keeping remote and distributed teams connected.",
  },
  {
    title: "Boost Productivity",
    copy: "When employees can easily collaborate and connect from any device, business goals are achieved faster.",
  },
];

export function TeamsCollaboration() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: placeholder image */}
        <div className="aspect-[4/3] w-full rounded-3xl bg-surface ring-1 ring-border" />

        {/* Right: accordion */}
        <div className="divide-y divide-border border-t border-border">
          {items.map((item, i) => {
            const isOpen = i === open;
            return (
              <div key={item.title}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-4 text-left"
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
                    isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-pretty text-base text-ink/65">{item.copy}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
