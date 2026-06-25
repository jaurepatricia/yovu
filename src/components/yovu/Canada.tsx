import { ArrowUpRight, Headset, Server, ShieldCheck } from "lucide-react";

function MapleLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.35,30.54h-.69v-6.32l-7.28.91c-.12.01-.23-.03-.31-.12-.08-.09-.1-.22-.06-.33l.88-2.64-7.47-5.6c-.1-.08-.15-.2-.13-.33s.11-.23.23-.27l2.5-.83-1.74-3.48c-.06-.12-.05-.27.04-.37s.22-.15.35-.12l3.52.88.86-2.57c.04-.11.13-.2.25-.23.12-.03.24,0,.32.09l3.95,3.95-1.66-7.46c-.03-.12.01-.25.11-.33.09-.08.22-.11.34-.07l2.61.87,2.73-4.55c.12-.21.47-.21.59,0l2.73,4.55,2.61-.87c.12-.04.25-.01.34.07.09.08.13.21.11.33l-1.66,7.47,3.95-3.95c.08-.08.21-.12.32-.09.12.03.21.11.25.23l.86,2.57,3.52-.88c.13-.03.27.01.35.12.08.1.1.25.04.37l-1.74,3.48,2.5.83c.12.04.21.14.23.27.02.13-.03.25-.13.33l-7.47,5.6.88,2.64c.04.11.01.24-.06.33-.07.09-.18.14-.31.12l-7.28-.91v6.31ZM2.36,16.28l7.14,5.35c.12.09.17.24.12.39l-.78,2.36,7.12-.89s.06,0,.09,0l7.12.89-.78-2.36c-.05-.14,0-.3.12-.39l7.14-5.35-2.25-.75c-.09-.03-.17-.1-.21-.2-.04-.09-.03-.2.01-.29l1.58-3.16-3.11.78c-.18.05-.35-.06-.41-.23l-.78-2.34-4.4,4.4c-.11.11-.28.13-.41.06-.14-.07-.2-.23-.17-.38l1.78-8.03-2.3.77c-.15.05-.32-.01-.41-.15l-2.58-4.3-2.58,4.3c-.08.14-.25.2-.4.15l-2.3-.77,1.78,8.03c.03.15-.04.3-.17.38-.14.08-.3.05-.41-.06l-4.4-4.39-.78,2.34c-.06.17-.23.27-.41.23l-3.11-.78,1.58,3.16c.05.09.05.19.01.29-.04.09-.11.16-.21.2l-2.25.75Z" />
    </svg>
  );
}

const pillars = [
  {
    icon: Server,
    title: "99.99% Server Uptime",
    copy: "Hosted on geo-redundant Canadian data centers for unbreakable reliability.",
  },
  {
    icon: Headset,
    title: "24/7 Local Support",
    copy: "Speak directly to our in-house VoIP experts around the clock, never an offshore call center.",
  },
  {
    icon: ShieldCheck,
    title: "PIPEDA Compliant",
    copy: "Client data stays in Canada with no cross-border exposure.",
  },
];

export function Canada() {
  return (
    <section id="canada" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Headline card */}
          <div className="lg:col-span-5 flex flex-col justify-center rounded-3xl bg-card p-8 ring-1 ring-border lg:p-12">
            <MapleLeaf className="size-7 text-signal" />
            <h2 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Proudly Canadian.
              <br />
              Powerfully Supported.
            </h2>
            <a
              href="#"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
            >
              Meet Our Team
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-1">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex items-center gap-5 rounded-2xl bg-surface/60 p-6 ring-1 ring-border md:p-8"
                >
                  <div className="shrink-0">
                    <Icon className="size-7 text-signal" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-pretty text-ink/65">{p.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
