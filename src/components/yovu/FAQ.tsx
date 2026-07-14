import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItem = { q: string; a: string };

const defaultItems: FaqItem[] = [
  {
    q: "Can we automatically record calls for compliance and training?",
    a: "Yes, you can enable call recording for all calls, specific extensions, or on-demand. Recordings are stored securely to help you meet insurance industry compliance standards.",
  },
  {
    q: "Is a cloud phone system secure enough for sensitive insurance data?",
    a: "Absolutely. YOVU protects your communications with enterprise-grade encryption. Our digital infrastructure is hosted in two hardened, geo-redundant Canadian data centers to ensure your data stays secure and local.",
  },
  {
    q: "How does cloud VoIP support hybrid or fully remote insurance teams?",
    a: "Cloud VoIP empowers your team to work from anywhere with an internet connection. Because your communications platform is hosted in the cloud, an agent working from home or on the road has access to the exact same features — auto-attendants, call routing, and CRM integrations — as they would in the office.",
  },
  {
    q: "What hardware do I need for VoIP?",
    a: "All you need to run VoIP is a broadband internet connection and a VoIP-enabled phone, with lots of models to choose from. Some users place firewalls or other devices between the broadband Internet connection and the phone, but these are not normally required.",
  },
  {
    q: "How does VoIP handle after-hours inquiries and claims?",
    a: "You can easily set business hours and customize routing rules. After-hours calls can be directed to voicemail, forwarded to an on-call agent, or routed to a 24/7 answering service.",
  },
  {
    q: "How does YOVU integrate with Applied Epic and other broker management systems?",
    a: "YOVU's communication tools are embedded directly within Applied Epic. This means your agents don't have to launch a separate third-party application to keep track of calls or manually keep notes. They can trigger calls with a single click directly from the client's profile within Epic, keeping their workflow centralized and efficient.",
  },
  {
    q: "Can VoIP help automate data entry?",
    a: "Yes. Because the phone system integrates natively within your Broker Management System (BMS) like Applied Epic, it can automatically log call records, durations, and recordings directly into the client's file. This eliminates manual data entry, saving your agents time and ensuring your records are always accurate — decreasing the chance for errors and omissions.",
  },
  {
    q: "Can our agents use their personal mobile phones without giving out their private numbers?",
    a: "Absolutely. By using the YOVU Mobile app, agents can make and receive calls on their personal smartphones using their dedicated business caller ID. This protects their personal privacy while ensuring clients receive professional, consistent communication.",
  },
];

export function FAQ({
  className,
  items = defaultItems,
}: {
  className?: string;
  items?: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink md:text-lg">{item.q}</span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-ink">
                    <ChevronDown
                      className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-pretty text-ink/65">{item.a}</p>
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
