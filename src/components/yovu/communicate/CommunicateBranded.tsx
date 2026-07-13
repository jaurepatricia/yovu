import { Clock, PhoneOutgoing, Music, Bot } from "lucide-react";

const items = [
  {
    icon: Bot,
    title: "AI Receptionist",
    copy: "Our smart AI Receptionist greets your customers, understands their needs, and instantly routes them to the right person.",
    span: "md:col-span-2",
  },
  {
    icon: Clock,
    title: "Business Hours",
    copy: "Customize greetings at both a user level and organizational level to ensure callers receive relevant information both during and after business hours.",
    span: "md:col-span-1",
  },
  {
    icon: Music,
    title: "Music on Hold",
    copy: "Customize your call waiting & holding music simply by using our default music or uploading your own MP3 files.",
    span: "md:col-span-1",
  },
  {
    icon: PhoneOutgoing,
    title: "Caller ID & Custom Numbers",
    copy: "Control exactly how your business appears on outbound calls with individual or company-wide caller IDs. Need a dedicated line? Instantly spin up custom numbers for special promotions or new services.",
    span: "md:col-span-2",
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

        <div className="grid gap-4 md:grid-cols-3">
          {items.map(({ icon: Icon, title, copy, span }) => (
            <div
              key={title}
              className={`flex min-h-[15rem] flex-col rounded-3xl bg-card p-8 ring-1 ring-border ${span}`}
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-signal/10 text-signal">
                <Icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                {title}
              </h3>
              <p className="mt-3 max-w-md text-pretty text-base text-ink/70">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
