import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "Mobile App",
    copy: "Turn your iOS or Android device into your business phone. Access your corporate directory, sync contacts, and keep your personal number private while working.",
  },
  {
    title: "Desktop & Web Phone",
    copy: "Make calls and check voicemails right from your browser or desktop app, with click-to-call on any phone number.",
  },
  {
    title: "Call Flipping",
    copy: "Start a call on your desktop and move it to your mobile or desk phone without dropping the connection.",
  },
  {
    title: "Multi-Ring",
    copy: "Ring your desk phone, web dialer, and mobile device at once so you never miss a client.",
  },
];

/** Compact devices accordion for use inside the z-layout text column. */
export function DeviceAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-border border-t border-border">
      {items.map((item, i) => {
        const isOpen = i === open;
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-3 text-left"
            >
              <span
                className={
                  isOpen
                    ? "font-display text-base font-semibold tracking-tight text-ink"
                    : "font-display text-base font-semibold tracking-tight text-ink/55 transition-colors"
                }
              >
                {item.title}
              </span>
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-surface text-ink">
                <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <p className="text-pretty text-sm text-ink/65">{item.copy}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
