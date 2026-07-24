import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/yovu/ui/Button";
import { PlugZap, Lock, Database } from "lucide-react";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { FAQ } from "@/components/yovu/FAQ";
import { ZLayout, type ZLayoutItem } from "@/components/yovu/ZLayout";
import {
  FeatureSlidingCards,
  type FeatureSlidingCard,
} from "@/components/yovu/FeatureSlidingCards";
import {
  SectionIntroFeatureGrid,
  type SectionIntroFeatureItem,
} from "@/components/yovu/teams/SectionIntroFeatureGrid";
import { AppliedHowItWorks } from "@/components/yovu/applied/AppliedHowItWorks";
import { CallerContext } from "@/components/yovu/animations/CallerContext";
import { ClickToDial } from "@/components/yovu/animations/ClickToDial";
import { CallRecording } from "@/components/yovu/animations/CallRecording";
import { TranscriptionSummary } from "@/components/yovu/animations/TranscriptionSummary";
import { ActivityLogging } from "@/components/yovu/animations/ActivityLogging";
import womanOnPhone from "@/assets/imagery/woman on the phone working in corporate office.webp";
import manOnPhone from "@/assets/imagery/professional man on the phone walking outside.webp";
import mountainFlowers from "@/assets/imagery/snowy capped mountain and flowers.webp";
import developersWorking from "@/assets/imagery/developers working together.webp";
import { ImageCallCard } from "@/components/yovu/applied/ImageCallCard";
import { FeatureCarousel } from "@/components/yovu/applied/FeatureCarousel";
import { ScaleCallout } from "@/components/yovu/ScaleCallout";
import { motion } from "motion/react";
import mountainPeak from "@/assets/hero/light-mountain-peak.webp";
import mountainPeakMask from "@/assets/hero/light-mountain-peak-mask.webp";
import mountainPeakDark from "@/assets/hero/dark-mountain-peak.webp";
import mountainPeakMaskDark from "@/assets/hero/dark-mountain-peak-mask.webp";
import appliedDashboard from "@/assets/hero/applied-epic-dashboard.webp";

const zImageClass = "aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border";

const integrationBenefits: SectionIntroFeatureItem[] = [
  {
    icon: PlugZap,
    title: "Embedded by design",
    copy: "The only conversation capturing platform certified integration partner in Canada, built on Applied Systems' current API and embedded inside Applied Epic. No screen-switching necessary.",
  },
  {
    icon: Lock,
    title: "Controlled access",
    copy: "Role-based access gives administrators control over who can view recordings, transcripts, and reports. Permissions stay aligned with your internal security and compliance requirements.",
  },
  {
    icon: Database,
    title: "Long-term storage",
    copy: "Retention is configurable up to seven years to support your long-term E&O documentation policy. Data is stored on Canadian servers for added control and compliance.",
  },
];

const benefits: ZLayoutItem[] = [
  {
    kicker: "COMMUNICATION",
    title: "Every call connected to the client",
    copy: "See exactly who is calling before you say hello. YOVU automatically matches incoming numbers to your Applied Epic records, instantly popping the client's profile on your screen so you never have to ask for an account number again. Need to make a call? Use one-click dialing directly from Applied Epic, and log activities right after the call ends. No more deciphering hand-written notes.",
    media: (
      <div className="relative">
        <img
          src={womanOnPhone}
          alt="Insurance professional taking a call at her desk in a corporate office"
          loading="lazy"
          decoding="async"
          className={zImageClass}
        />
        <ImageCallCard />
      </div>
    ),
  },
  {
    kicker: "MOBILITY",
    title: "Take your calls on the road",
    copy: "Keep your workflow completely unbroken when you leave the office. Calls taken on your mobile device automatically flow right back into the client's Applied Epic record, exactly like they would at your desk. Recordings, transcripts, and summaries sync instantly, ensuring every conversation is securely captured no matter where your team is working.",
    media: (
      <div className="relative">
        <img
          src={manOnPhone}
          alt="Professional taking a call on his mobile phone while walking outside"
          loading="lazy"
          decoding="async"
          className={zImageClass}
        />
        <div className="absolute inset-y-0 right-0 flex w-1/2 items-center justify-center">
          <FeatureCarousel />
        </div>
      </div>
    ),
  },
  {
    kicker: "SECURITY",
    title: "Our policy is peace of mind",
    copy: "Made specifically for long-term E&O documentation, we offer up to seven years of call retention stored securely on Canadian servers. As your brokerage grows and your tech stack evolves, our conversation logging is designed to travel with you, continuously extending to integrate seamlessly with additional management systems.",
    media: (
      <img
        src={mountainFlowers}
        alt="Snow-capped mountain rising above a field of flowers"
        loading="lazy"
        decoding="async"
        className={zImageClass}
      />
    ),
  },
];

const featureCards: FeatureSlidingCard[] = [
  {
    title: "Screen pop",
    copy: "Instantly see who is calling and access their full account details the moment your phone rings. You can easily customize this pop-up notification to trigger either when the line rings or when you answer.",
    media: <CallerContext />,
  },
  {
    title: "Click-to-call",
    copy: "Make calls with a single click directly from a client's profile without ever leaving the Applied Epic platform. This eliminates manual data entry, saving you valuable time and preventing accidental misdials.",
    media: <ClickToDial />,
  },
  {
    title: "Call transcription & retention",
    copy: "Review exact conversation transcripts for coaching, quality assurance, or efficiently resolving client disputes. Our secure seven-year data retention turns potential misunderstandings into concrete, easily accessible records for your E&O documentation.",
    media: <CallRecording />,
  },
  {
    title: "Customizable AI summaries",
    copy: "Automatically generate tailored AI summaries that extract key details and recommended next steps rather than providing a massive transcript. This ensures the next team member who opens the file gets immediate, actionable context instead of raw text they have to decode.",
    media: <TranscriptionSummary />,
  },
  {
    title: "Activity log",
    copy: "Review full call histories and enter new data directly during an active call to keep your workflow completely seamless. After hanging up, use the generated AI summaries to quickly complete your logs and finish administrative tasks on the spot.",
    media: <ActivityLogging />,
  },
];

const faqItems = [
  {
    q: "Does YOVU log calls to Applied Epic automatically?",
    a: "No, and that is on purpose. With a client open in Applied Epic, a broker logs the call to a new or existing activity and saves, so you control what gets recorded to a file and where it goes. Capture does the write-up: the AI summary lands on the activity, with a button that streams the transcript or recording on demand.",
  },
  {
    q: "What actually gets written into Applied Epic?",
    a: "The AI summary is written onto the activity, plus a button that streams the transcript or recording when you need it. The media itself is not dumped into Applied Epic, which keeps the client record clean and readable.",
  },
  {
    q: "Does the client's file come up when they call?",
    a: "Yes, when the caller's number is on a client file. YOVU matches the number and opens the Applied Epic record on screen. If the number is on more than one file, YOVU shows a selector, with the details you choose to display, so the broker can ask which profile the caller means. A number that is not on any file does not pop.",
  },
  {
    q: "Can a broker call a client straight from Applied Epic?",
    a: "Yes. Click a client's number in Applied Epic to place the call through YOVU Communicator, with no copying digits and no misdials. The same click-to-call works on any web page.",
  },
  {
    q: "How does YOVU know which client file to use?",
    a: "You log the call to the client you have open in Applied Epic, onto a new or existing activity, so it lands exactly where you put it.",
  },
  {
    q: "Do calls a broker takes on mobile get logged too?",
    a: "Yes. From the road, a broker logs a call from their history when they get back to their desk, and the same AI summary and stream button are written to Applied Epic.",
  },
  {
    q: "Can I search past conversations?",
    a: "Yes. Call history is searchable by client, phone number, date, or keyword, so you can find any conversation without digging through personal notes.",
  },
  {
    q: "How long are call recordings kept?",
    a: "Retention is configurable up to seven years, so you can match your brokerage's E&O documentation policy.",
  },
  {
    q: "What do the AI summaries include?",
    a: "Each summary pulls out the key details of the call and recommended next steps, built from a custom template per brokerage, so the next person who touches the account has usable context rather than a raw transcript.",
  },
  {
    q: "Who can see recordings and transcripts?",
    a: "Role-based access controls let administrators decide who can view recordings, transcripts, and reports.",
  },
  {
    q: "How is the integration set up?",
    a: "Give YOVU an API key and we stand up the connection during onboarding. There is no integration project for your IT team, and it scales to new brokers and offices without reconfiguration.",
  },
  {
    q: "Does YOVU work with other systems besides Applied Epic?",
    a: "Applied Epic is the flagship integration today, and YOVU is extending conversation logging to additional agency management systems.",
  },
  {
    q: "Can I control when the screen pop appears?",
    a: "Yes. You choose whether the record pops when the call rings, when the broker answers, or only when they ask for it, so it fits how your team likes to work.",
  },
];

function HeroCopy({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`flex max-w-xl flex-col ${centered ? "items-center text-center" : "text-left"}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">Integrations</p>
      <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl">
        Applied Epic
      </h1>
      <p className="mt-6 text-pretty text-lg text-ink/70">
        Automatically link calls to client profiles in Applied Epic without manual data entry. Reduce administrative workload and keep your team focused on what matters—your clients.
      </p>
      <Button href="#demo" className="mt-8 w-fit">
              See it in Action
            </Button>
    </div>
  );
}

function DashboardPanel({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className={`rounded-2xl bg-white/45 p-3 shadow-2xl shadow-black/20 ring-1 ring-white/50 backdrop-blur-md dark:bg-white/10 dark:ring-white/15 ${className ?? ""}`}
    >
      <img
        src={appliedDashboard}
        alt="The Applied Epic dashboard with YOVU capturing a call"
        decoding="async"
        className="block w-full rounded-xl"
      />
    </motion.div>
  );
}

function AppliedEpicHero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas xl:aspect-video xl:max-h-screen xl:min-h-[640px]">
      {/* Layer 1: mountain peak background (light / dark) */}
      <img
        src={mountainPeak}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover dark:hidden"
      />
      <img
        src={mountainPeakDark}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 z-0 hidden h-full w-full object-cover dark:block"
      />

      {/* Layer 2 (xl+ only): dashboard tucked behind the peak, scaling with the
          viewport and bleeding off the right edge so the copy keeps its room */}
      <div className="absolute inset-y-0 right-0 z-10 hidden items-center xl:flex">
        <DashboardPanel className="w-[46rem] 2xl:w-[54rem]" />
      </div>

      {/* Layer 3: mountain mask foreground (light / dark) — same framing as the
          base so the peak overlaps the dashboard, making it peek out from behind */}
      <img
        src={mountainPeakMask}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover dark:hidden"
      />
      <img
        src={mountainPeakMaskDark}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full object-cover dark:block"
      />

      {/* xl+ layout: copy pinned left, above every layer */}
      <div className="relative z-30 hidden h-full items-center xl:flex">
        <div className="mx-auto w-full max-w-7xl px-6">
          <HeroCopy />
        </div>
      </div>

      {/* Below xl: stacked — copy on top, dashboard centered floating above the
          mountain (above the mask), so nothing gets squished on smaller screens */}
      <div className="relative z-30 flex flex-col items-center gap-10 px-6 pb-16 pt-36 lg:pt-40 xl:hidden">
        <HeroCopy centered />
        <DashboardPanel className="w-full max-w-md sm:max-w-lg lg:max-w-2xl" />
      </div>
    </section>
  );
}

function AppliedEpicPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <AppliedEpicHero />
      <ZLayout heading="Built for insurance professionals" items={benefits} />
      <FeatureSlidingCards
        heading="Easy to use features right inside Applied Epic"
        cards={featureCards}
        cardClassName="bg-[#f8fafc] dark:bg-surface"
      />
      <AppliedHowItWorks />
      <SectionIntroFeatureGrid
        items={integrationBenefits}
        media={
          <img
            src={developersWorking}
            alt="Developers collaborating together at a workstation"
            loading="lazy"
            decoding="async"
            className={zImageClass}
          />
        }
      />
      <FAQ items={faqItems} />
      <ScaleCallout />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/applied-epic")({
  head: () => ({
    meta: [
      { title: "Applied Epic Integration — YOVU" },
      {
        name: "description",
        content:
          "Log calls to Applied Epic without typing them up. YOVU matches callers to their records, writes AI summaries onto activities, and keeps transcripts and recordings on demand.",
      },
      { property: "og:title", content: "Applied Epic Integration — YOVU" },
      {
        property: "og:description",
        content:
          "Screen pop, click-to-call, AI summaries, and up to seven years of secure Canadian call retention — right inside Applied Epic.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AppliedEpicPage,
});
