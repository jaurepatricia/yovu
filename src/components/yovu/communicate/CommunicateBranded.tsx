import { Clock, PhoneOutgoing, Music, Bot } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Business Hours",
    copy: "Set custom greetings at the user and organization level, so callers hear the right message during and after hours.",
  },
  {
    icon: PhoneOutgoing,
    title: "Caller ID & Custom Numbers",
    copy: "Control how your business appears on outbound calls, and spin up custom numbers for promotions or new lines.",
  },
  {
    icon: Music,
    title: "Music on Hold",
    copy: "Shape the wait with our built-in hold music, or upload your own MP3 files whenever you like.",
  },
  {
    icon: Bot,
    title: "AI Receptionist",
    copy: "Our AI receptionist greets callers, understands their needs, and routes them to the right person instantly.",
  },
];

export function CommunicateBranded() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Branded Experience
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
