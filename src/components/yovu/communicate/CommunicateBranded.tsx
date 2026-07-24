import { Clock, PhoneOutgoing, Music, Bot } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Business hours",
    copy: "Customize greetings at the user and organizational level. Ensure your callers always receive relevant, helpful information, whether they call during or after business hours.",
  },
  {
    icon: PhoneOutgoing,
    title: "Custom numbers",
    copy: "Control how your business appears on outbound calls Instantly spin up custom numbers for special promotions or new services.",
  },
  {
    icon: Music,
    title: "Music on hold",
    copy: "Keep callers engaged while they wait. Easily customize your hold experience by selecting from our premium default music or uploading your own branded MP3 files.",
  },
  {
    icon: Bot,
    title: "AI receptionist",
    copy: "Let our smart AI Receptionist handle the front desk. It professionally greets your customers, understands their exact needs, and instantly routes them to the right person.",
  },
];

export function CommunicateBranded() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Featured-use-case style intro */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-signal">
              Featured Use Case
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">Cultivate a branded experience</h2>
            <p className="mt-6 max-w-xl text-pretty text-base text-ink/70">
              Ensure every interaction reflects your unique identity with customizable greetings,
              branded hold music, and seamless AI receptionist routing. Plus, you can easily control
              your outbound caller ID and spin up custom numbers to maintain a professional, cohesive
              image across all your communications.
            </p>
          </div>
          {/* TODO: replace with branded-experience image */}
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-surface ring-1 ring-border">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/25">
              Image placeholder
            </span>
          </div>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, copy }) => (
            <div key={title}>
              <Icon className="size-8 text-signal" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                {title}
              </h3>
              <p className="mt-3 text-pretty text-base text-ink/70">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
