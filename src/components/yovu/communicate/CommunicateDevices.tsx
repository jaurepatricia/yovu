import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Roam Free, Stay Connected
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: placeholder image */}
          <div className="aspect-[4/3] w-full rounded-3xl bg-surface ring-1 ring-border" />

          {/* Right: intro copy and accordion */}
          <div>
            <p className="text-pretty text-base text-ink/70">
              Give your team the freedom to work from anywhere. Whether at a desk or in the field,
              they can make and receive calls with the same reliability and professionalism as they
              would from their office.
            </p>

            <div className="mt-6 divide-y divide-border border-t border-border">
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
                        <p className="text-pretty text-ink/65">{item.copy}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
