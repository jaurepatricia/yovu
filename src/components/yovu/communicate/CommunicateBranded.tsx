import { Clock, PhoneOutgoing, Music, Bot } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Business Hours",
    copy: "Customize greetings at both a user level and organizational level to ensure callers receive relevant information both during and after business hours.",
  },
  {
    icon: PhoneOutgoing,
    title: "Caller ID & Custom Numbers",
    copy: "Control exactly how your business appears on outbound calls with individual or company-wide caller IDs. Need a dedicated line? Instantly spin up custom numbers for special promotions or new services.",
  },
  {
    icon: Music,
    title: "Music on Hold",
    copy: "Customize your call waiting & holding music simply by using our default music or uploading your own MP3 files.",
  },
  {
    icon: Bot,
    title: "AI Receptionist",
    copy: "Our smart AI Receptionist greets your customers, understands their needs, and instantly routes them to the right person.",
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

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
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
