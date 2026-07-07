import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { demoContact } from "@/components/yovu/animations/demoContact";

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

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-card p-8 ring-1 ring-border ${className}`}
    >
      {children}
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="block whitespace-nowrap rounded-full bg-canvas px-4 py-2 text-sm font-medium text-ink/75 ring-1 ring-border">
      {label}
    </span>
  );
}

function MarqueeColumn({
  items,
  reverse,
  duration,
}: {
  items: string[];
  reverse?: boolean;
  duration: number;
}) {
  return (
    <div className="w-max overflow-hidden">
      <motion.div
        className="flex flex-col gap-3"
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((f, i) => (
          <Pill key={i} label={f} />
        ))}
      </motion.div>
    </div>
  );
}

/** A wall of feature pills scrolling, blurring in/out at the edges. */
function FeatureWall() {
  const third = Math.ceil(features.length / 3);
  const cols = [
    features.slice(0, third),
    features.slice(third, third * 2),
    features.slice(third * 2),
  ];
  return (
    <div className="relative h-64 w-full overflow-hidden">
      <div className="flex justify-center gap-3">
        {cols.map((items, i) => (
          <MarqueeColumn key={i} items={items} reverse={i % 2 === 1} duration={26 + i * 5} />
        ))}
      </div>
      {/* Fade + blur the pills as they rotate through the top and bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-card to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]" />
    </div>
  );
}

/** Incoming text + call-back thread. */
function TalkTextVisual() {
  return (
    <div className="w-full max-w-[15rem] transition-transform duration-500 ease-out group-hover:-translate-y-1">
      <div className="w-max max-w-full rounded-2xl rounded-bl-sm bg-surface px-3.5 py-2.5 text-sm text-ink/80 shadow-sm ring-1 ring-border">
        Can you call me back?
      </div>
      <div className="ml-auto mt-3 flex w-max items-center gap-2 rounded-full bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-lg ring-1 ring-black/5">
        <span className="flex size-6 items-center justify-center rounded-full bg-[#2563eb] text-white">
          <Phone className="size-3.5" strokeWidth={2.5} />
        </span>
        Calling {demoContact.firstName}…
      </div>
    </div>
  );
}

/** Caller screen-pop with account details. */
function CallerVisual() {
  return (
    <div className="w-full max-w-[17rem] rounded-xl bg-white p-4 text-left shadow-2xl ring-1 ring-black/5 transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-[#2563eb]/10 text-sm font-semibold text-[#2563eb]">
          {demoContact.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-800">{demoContact.name}</p>
          <p className="truncate text-xs text-slate-500">{demoContact.addressLine2}</p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5 border-t border-slate-100 pt-3 text-[13px]">
        <div className="flex justify-between">
          <span className="text-slate-500">Policy</span>
          <span className="font-medium text-slate-800">{demoContact.policyType}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Renewal</span>
          <span className="font-medium text-[#c2410c]">{demoContact.renewal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Status</span>
          <span className="font-medium text-emerald-600">{demoContact.status}</span>
        </div>
      </div>
    </div>
  );
}

/** Agent status card that toggles to "On a call" on hover. */
function StatusVisual() {
  return (
    <div className="w-full max-w-[14rem] rounded-xl bg-white p-4 shadow-2xl ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-[#2563eb]/10 text-sm font-semibold text-[#2563eb]">
          AV
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-800">Alex V.</p>
          <span className="mt-0.5 inline-flex text-[13px] font-medium">
            <span className="inline-flex items-center gap-1.5 text-emerald-600 group-hover:hidden">
              <span className="size-2 rounded-full bg-emerald-500" />
              Available
            </span>
            <span className="hidden items-center gap-1.5 text-[#dc2626] group-hover:inline-flex">
              <span className="size-2 rounded-full bg-[#dc2626]" />
              On a call
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function CommunicateCapabilities() {
  return (
    <section id="capabilities" className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            VoIP Phone Features
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Talk & Text — small */}
          <Card className="min-h-[14rem]">
            <div className="flex h-full items-center gap-5">
              <div className="w-[42%] shrink-0">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  Talk &amp; Text
                </h3>
                <p className="mt-3 text-pretty text-ink/70">
                  Voice and SMS from the same workspace — a quick text and a callback in one place.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center pt-4">
                <TalkTextVisual />
              </div>
            </div>
          </Card>

          {/* Warm & Personalized — tall */}
          <Card className="min-h-[30rem] md:row-span-2">
            <div className="flex h-full flex-col">
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  Warm &amp; Personalized Calls
                </h3>
                <p className="mt-3 max-w-md text-pretty text-ink/70">
                  Deliver highly personalized service — a screen pop surfaces the caller's identity
                  and account before anyone picks up, eliminating unnecessary repetition and
                  reducing handle time.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center pt-8">
                <CallerVisual />
              </div>
            </div>
          </Card>

          {/* Transfers & Custom Statuses — small */}
          <Card className="min-h-[14rem]">
            <div className="relative flex h-full items-center">
              <div className="w-1/2">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  Transfers &amp; Statuses
                </h3>
                <p className="mt-3 text-pretty text-ink/70">
                  See who's available, transfer with context, or bring a colleague onto the call.
                </p>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8">
                <StatusVisual />
              </div>
            </div>
          </Card>

          {/* All That & More — largest, full width */}
          <Card className="min-h-[22rem] md:col-span-2">
            <div className="flex h-full flex-col gap-8 lg:flex-row lg:items-center">
              <div className="lg:max-w-sm">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  All That &amp; More
                </h3>
                <p className="mt-3 max-w-md text-pretty text-ink/70">
                  We offer everything your business needs to keep calls organized, teams connected,
                  and conversations running smoothly.
                </p>
              </div>
              <div className="flex-1">
                <FeatureWall />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
