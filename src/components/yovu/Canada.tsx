import { ArrowUpRight, Headset, Server, ShieldCheck } from "lucide-react";

function MapleLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.5 10.7 5.2c-.3.6-1 .9-1.6.6L7 4.9l.6 3c.1.6-.3 1.2-.9 1.3l-2.4.4 1.8 1.7c.4.4.4 1 .1 1.4l-1 1.2 4.2.6c.5.1.8.5.7 1L9.5 16l2.1-.5c.3-.1.6.1.6.4l-.2 5.6h0l-.2-5.6c0-.3.3-.5.6-.4l2.1.5-.6-1.5c-.1-.5.2-.9.7-1l4.2-.6-1-1.2c-.3-.4-.3-1 .1-1.4l1.8-1.7-2.4-.4c-.6-.1-1-.7-.9-1.3l.6-3-2.1 1c-.6.3-1.3 0-1.6-.6L12 2.5Z" />
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
            <div className="flex size-12 items-center justify-center rounded-xl bg-canvas ring-1 ring-border">
              <MapleLeaf className="size-5 text-signal" />
            </div>
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
                  className="flex items-start gap-5 rounded-2xl bg-surface/60 p-6 ring-1 ring-border md:p-8"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center">
                    <Icon className="size-5 text-signal" />
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
