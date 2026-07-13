import { Clock, PhoneOutgoing, Music, Bot } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Business Hours",
    copy: "Customize greetings at the user and organizational level. Ensure your callers always receive relevant, helpful information, whether they call during or after business hours.",
  },
  {
    icon: PhoneOutgoing,
    title: "Caller ID & Custom Numbers",
    copy: "Control how your business appears on outbound calls using individual or company-wide caller IDs. Instantly spin up custom numbers for special promotions or new services.",
  },
  {
    icon: Music,
    title: "Music on Hold",
    copy: "Keep callers engaged while they wait. Easily customize your hold experience by selecting from our premium default music or uploading your own branded MP3 files.",
  },
  {
    icon: Bot,
    title: "AI Receptionist",
    copy: "Let our smart AI Receptionist handle the front desk. It professionally greets your customers, understands their exact needs, and instantly routes them to the right person.",
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
