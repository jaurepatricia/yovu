import { motion } from "motion/react";

const features = [
  "Call Recording",
  "Live Chat",
  "Web Phone",
  "Text to Business Line",
  "iOS and Android App",
  "Robocall Blockers",
  "Text-to-Speech",
  "Auto Attendant",
  "Toll-Free Numbers",
  "Conferencing",
  "Business Hours",
  "Call Routing",
  "Extensions",
  "No Long Distance Fees",
  "Call Blacklisting",
  "Voicemail Transcription",
  "Music On Hold",
  "Call Reporting",
  "Caller ID Control",
  "Shared Contacts",
  "Company Directory",
  "Dial-by-Name Directory",
  "Schedule Call Detail Reports",
  "Direct Numbers & Extensions",
];

function Pill({ label }: { label: string }) {
  return (
    <span className="shrink-0 rounded-full bg-canvas px-4 py-2 text-sm font-medium text-ink/75 ring-1 ring-border">
      {label}
    </span>
  );
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((f, i) => (
          <Pill key={i} label={f} />
        ))}
      </motion.div>
    </div>
  );
}

function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl bg-card p-8 ring-1 ring-border ${className}`}
    >
      <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function CommunicateCapabilities() {
  const half = Math.ceil(features.length / 2);
  return (
    <section id="capabilities" className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Capabilities
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Talk & Text">
            <p className="mt-3 text-pretty text-ink/70">
              Voice and SMS from the same workspace, so a quick text
              confirmation and a callback live in the same place as the rest of
              the conversation.
            </p>
          </Card>

          <Card title="Warm & Personalized Calls" className="md:row-span-2">
            <p className="mt-3 text-pretty text-ink/70">
              Deliver highly personalized service — a screen pop surfaces the
              caller's identity and account before anyone picks up, eliminating
              the need for unnecessary repetition and reducing handle time.
            </p>
          </Card>

          <Card title="Transfers & Custom Statuses">
            <p className="mt-3 text-pretty text-ink/70">
              See who is available and their detailed status in the directory,
              transfer with context, or bring a colleague onto the call, all
              from the same interface. Fewer cold handoffs, fewer calls bounced
              between desks.
            </p>
          </Card>

          <Card title="All That & More" className="md:col-span-2">
            <p className="mt-3 max-w-2xl text-pretty text-ink/70">
              We offer everything your business needs to keep calls organized,
              teams connected, and conversations running smoothly.
            </p>
            <div className="mt-6 space-y-3">
              <MarqueeRow items={features.slice(0, half)} />
              <MarqueeRow items={features.slice(half)} reverse />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
