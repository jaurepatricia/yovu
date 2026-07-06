import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-card p-8 ring-1 ring-border ${className}`}
    >
      {children}
    </div>
  );
}

/** Slow, blur-in/out cycler through every additional feature. */
function CyclingFeatures() {
  const [i, setI] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (reduced.current) return;
    const t = setInterval(() => setI((v) => (v + 1) % features.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex h-full min-h-[7rem] items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(8px)", y: -10 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl"
        >
          {features[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/** Incoming text + call-back, peeking from the corner. */
function TalkTextVisual() {
  return (
    <div className="pointer-events-none absolute -bottom-4 -right-3 w-56 transition-transform duration-500 ease-out group-hover:-translate-y-3">
      <div className="ml-auto w-max max-w-[12rem] rounded-2xl rounded-br-sm bg-[#2563eb] px-3 py-2 text-xs text-white shadow-lg">
        Can you call me back?
      </div>
      <div className="mt-2 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-lg ring-1 ring-black/5">
        <span className="flex size-5 items-center justify-center rounded-full bg-[#2563eb] text-white">
          <Phone className="size-3" strokeWidth={2.5} />
        </span>
        Calling {demoContact.firstName}…
      </div>
    </div>
  );
}

/** Caller screen-pop, peeking from the corner. */
function CallerVisual() {
  return (
    <div className="pointer-events-none absolute -bottom-5 -right-5 w-60 rounded-xl bg-white p-3 text-left shadow-2xl ring-1 ring-black/5 transition-transform duration-500 ease-out group-hover:-translate-y-3">
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 items-center justify-center rounded-full bg-[#2563eb]/10 text-[11px] font-semibold text-[#2563eb]">
          {demoContact.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-slate-800">
            {demoContact.name}
          </p>
          <p className="truncate text-[10px] text-slate-500">
            {demoContact.addressLine2}
          </p>
        </div>
      </div>
      <div className="mt-2 space-y-1 border-t border-slate-100 pt-2 text-[11px]">
        <div className="flex justify-between">
          <span className="text-slate-500">Policy</span>
          <span className="font-medium text-slate-800">
            {demoContact.policyType}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Renewal</span>
          <span className="font-medium text-[#c2410c]">
            {demoContact.renewal}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Agent status toggling to "On a call" on hover. */
function StatusVisual() {
  return (
    <div className="pointer-events-none absolute -bottom-4 -right-4 w-52 rounded-xl bg-white p-3 shadow-2xl ring-1 ring-black/5">
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 items-center justify-center rounded-full bg-[#2563eb]/10 text-[11px] font-semibold text-[#2563eb]">
          AV
        </span>
        <div>
          <p className="text-xs font-semibold text-slate-800">Alex V.</p>
          <span className="mt-0.5 inline-flex items-center gap-1.5 text-[11px] font-medium">
            {/* Available (default) */}
            <span className="inline-flex items-center gap-1.5 text-emerald-600 transition-opacity duration-300 group-hover:hidden">
              <span className="size-2 rounded-full bg-emerald-500" />
              Available
            </span>
            {/* On a call (hover) */}
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
            Capabilities
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <Card className="flex-1 min-h-[15rem]">
              <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                Talk &amp; Text
              </h3>
              <p className="mt-3 max-w-xs text-pretty text-ink/70">
                Voice and SMS from the same workspace, so a quick text
                confirmation and a callback live in the same place as the rest
                of the conversation.
              </p>
              <TalkTextVisual />
            </Card>

            <Card className="flex-1 min-h-[15rem]">
              <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                Warm &amp; Personalized Calls
              </h3>
              <p className="mt-3 max-w-xs text-pretty text-ink/70">
                Deliver highly personalized service — a screen pop surfaces the
                caller's identity and account before anyone picks up,
                eliminating unnecessary repetition and reducing handle time.
              </p>
              <CallerVisual />
            </Card>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <Card className="min-h-[12rem]">
              <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                Transfers &amp; Custom Statuses
              </h3>
              <p className="mt-3 max-w-xs text-pretty text-ink/70">
                See who is available and their detailed status in the directory,
                transfer with context, or bring a colleague onto the call — all
                from the same interface.
              </p>
              <StatusVisual />
            </Card>

            <Card className="flex flex-1 flex-col">
              <div className="flex flex-1 items-center">
                <CyclingFeatures />
              </div>
              <div className="pt-4">
                <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                  All That &amp; More
                </h3>
                <p className="mt-3 max-w-md text-pretty text-ink/70">
                  We offer everything your business needs to keep calls
                  organized, teams connected, and conversations running smoothly.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
