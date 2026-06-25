import { ArrowUpRight, Headset, Server, ShieldCheck } from "lucide-react";

function MapleLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.361,31h-0.72v-6.592l-7.596,0.949c-0.124,0.015-0.245-0.034-0.323-0.129c-0.079-0.096-0.103-0.225-0.063-0.343l0.917-2.753l-7.792-5.845c-0.107-0.081-0.161-0.213-0.14-0.346s0.115-0.242,0.242-0.284l2.606-0.869L1.678,11.16c-0.063-0.126-0.047-0.277,0.041-0.386s0.23-0.16,0.368-0.124l3.677,0.919l0.895-2.684c0.039-0.119,0.137-0.208,0.259-0.237C7.039,8.62,7.167,8.656,7.255,8.744l4.126,4.125L9.649,5.078c-0.028-0.126,0.014-0.259,0.11-0.345c0.097-0.087,0.234-0.115,0.355-0.074l2.727,0.909l2.852-4.752c0.13-0.217,0.487-0.217,0.617,0l2.852,4.752l2.727-0.909c0.126-0.041,0.259-0.013,0.355,0.074c0.097,0.086,0.139,0.219,0.11,0.345l-1.731,7.793l4.125-4.125c0.088-0.088,0.215-0.125,0.338-0.096c0.121,0.029,0.219,0.118,0.259,0.237l0.895,2.684l3.677-0.919c0.133-0.033,0.28,0.014,0.368,0.124c0.088,0.109,0.104,0.26,0.041,0.386L28.51,14.79l2.606,0.869c0.127,0.042,0.22,0.151,0.241,0.284c0.021,0.133-0.032,0.265-0.14,0.346l-7.792,5.844l0.918,2.754c0.039,0.118,0.015,0.247-0.063,0.343c-0.077,0.096-0.192,0.146-0.323,0.129l-7.596-0.949V31z M1.766,16.124l7.451,5.588c0.124,0.093,0.175,0.255,0.125,0.402l-0.819,2.458l7.434-0.93c0.03-0.005,0.06-0.003,0.089,0l7.434,0.93l-0.819-2.458c-0.049-0.147,0.002-0.31,0.126-0.402l7.45-5.588l-2.349-0.783c-0.099-0.033-0.179-0.107-0.219-0.204c-0.039-0.096-0.036-0.206,0.011-0.299l1.65-3.3l-3.241,0.81c-0.185,0.047-0.369-0.058-0.429-0.235l-0.815-2.447l-4.588,4.588c-0.113,0.114-0.29,0.138-0.428,0.061c-0.141-0.077-0.213-0.237-0.179-0.394l1.862-8.379l-2.397,0.799c-0.161,0.055-0.336-0.011-0.423-0.156L16.001,1.7L13.31,6.185c-0.087,0.145-0.264,0.209-0.422,0.156L10.49,5.542l1.863,8.379c0.035,0.156-0.038,0.317-0.178,0.394c-0.141,0.079-0.314,0.052-0.428-0.061L7.158,9.667l-0.816,2.447c-0.059,0.179-0.245,0.282-0.429,0.235l-3.241-0.81l1.65,3.3c0.047,0.093,0.051,0.203,0.011,0.299c-0.04,0.097-0.12,0.171-0.219,0.204L1.766,16.124z" />
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
