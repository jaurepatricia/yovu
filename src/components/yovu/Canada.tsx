import { ArrowUpRight, Headset, Server, ShieldCheck } from "lucide-react";

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
          <div className="lg:col-span-5 rounded-3xl bg-card p-8 ring-1 ring-border lg:p-12">
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Proudly Canadian.
              <br />
              Powerfully Supported.
            </h2>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
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
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-canvas ring-1 ring-border">
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
