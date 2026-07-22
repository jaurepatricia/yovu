import { createFileRoute } from "@tanstack/react-router";
import { RefreshCw, Smartphone, Layers } from "lucide-react";
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
import { TranscriptionSummary } from "@/components/yovu/animations/TranscriptionSummary";
import { TranscriptSentiment } from "@/components/yovu/animations/TranscriptSentiment";
import { SearchableHistory } from "@/components/yovu/animations/SearchableHistory";
import { CallRecording } from "@/components/yovu/animations/CallRecording";
import { CallCollector } from "@/components/yovu/capture/CallCollector";
import { VoicemailAlert } from "@/components/yovu/capture/VoicemailAlert";
import { ServiceSummary } from "@/components/yovu/capture/ServiceSummary";
import captureHero from "@/assets/hero/blurred-greenery-and-foliage.webp";
import manLookingAtPhone from "@/assets/imagery/professional man looking at phone.webp";
import mechanic from "@/assets/imagery/mechanic working on a vehicle.webp";
import treeSkyline from "@/assets/imagery/tree skyline.webp";
import appliedMacbook from "@/assets/imagery/applied-epic-macbook-mockup.webp";

const zImageClass = "aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border";

const introBlocks: ZLayoutItem[] = [
  {
    kicker: "Effortless Capture",
    title: "Capture every detail, automatically",
    copy: "Say goodbye to manual data entry, sticky notes, and incomplete client files. YOVU seamlessly captures conversations, transcribes, and logs every call, text, and voicemail the moment it happens. Your team can focus entirely on the client, knowing there’s a defensible record in the background.",
    media: (
      <div className="relative">
        <img
          src={manLookingAtPhone}
          alt="Professional checking his phone"
          loading="lazy"
          decoding="async"
          className={zImageClass}
        />
        <VoicemailAlert />
      </div>
    ),
  },
  {
    kicker: "Actionable Insight",
    title: "Turn raw conversations into action",
    copy: "A recording is good, but actionable data is better. YOVU goes beyond basic recording by instantly pulling out next steps, key details, and client sentiment. Whether it is a routine renewal or a complex service issue, anyone in your team can open a file and instantly understand exactly where the client stands.",
    media: (
      <div className="relative">
        <img
          src={mechanic}
          alt="Mechanic working on a vehicle"
          loading="lazy"
          decoding="async"
          className={zImageClass}
        />
        <ServiceSummary />
      </div>
    ),
  },
  {
    kicker: "Built for Teams",
    title: "Made to help your employees thrive",
    copy: "Capture is designed to make your client records complete, not to watch your team. Strict role-based access controls let administrators decide exactly who can view recordings, transcripts, and reports. The real value belongs to the daily operator: less time writing up manual notes, no more reconstructing calls from memory, and a seamless handoff process where callers don’t have to repeat themselves.",
    media: (
      <img
        src={treeSkyline}
        alt="Trees against a bright sky"
        loading="lazy"
        decoding="async"
        className={zImageClass}
      />
    ),
  },
];

const featureCards: FeatureSlidingCard[] = [
  {
    title: "AI summaries with next steps",
    copy: "Stop digging through raw transcripts. Our AI instantly extracts the key takeaways and next steps from every call, giving your team the exact context they need to take action right away.",
    media: <TranscriptionSummary />,
  },
  {
    title: "Transcription and sentiment",
    copy: "Conversations are transcribed and tagged for sentiment, so a service issue or an unhappy client is visible in the record rather than buried in a recording nobody has time to replay.",
    media: <TranscriptSentiment />,
  },
  {
    title: "Searchable call history",
    copy: "Find any conversation by client, phone number, date, or keyword. Renewals and policy changes stop starting with “let me find my notes.”",
    media: <SearchableHistory />,
  },
  {
    title: "Recording and playback, retained up to seven years",
    copy: "Review what was actually said for coaching, quality, a dispute, or a follow-up. Seven-year retention is what turns a he-said-she-said into a record you can pull up.",
    media: <CallRecording />,
  },
];

const appliedBenefits: SectionIntroFeatureItem[] = [
  {
    icon: RefreshCw,
    title: "Automatic logging",
    copy: "Calls tie to the matching client instantly, eliminating copy-pasting and end-of-day note backlogs.",
  },
  {
    icon: Smartphone,
    title: "Built for road warriors",
    copy: "Mobile calls, recordings, and transcripts sync right to the record so conversations are captured outside the office.",
  },
  {
    icon: Layers,
    title: "Beyond Applied Epic",
    copy: "We are actively expanding to other agency management systems so your records travel safely as your brokerage tech stack grows.",
  },
];

const faqItems = [
  {
    q: "Can I search past conversations?",
    a: "Yes. Call history is searchable by client, phone number, date, or keyword, so you can find any conversation without digging through personal notes.",
  },
  {
    q: "How long are call recordings kept?",
    a: "Recordings are retained for up to seven years, which supports stronger long-term documentation and E&O defensibility.",
  },
  {
    q: "What do the AI summaries include?",
    a: "Each summary pulls out the key details of the call and recommended next steps, so the next person who touches the account has usable context rather than a raw transcript.",
  },
  {
    q: "Is YOVU secure and audited?",
    a: "YOVU Communicator is SOC 2 Type II, with role-based access controls over who can view recordings, transcripts, and reports.",
  },
  {
    q: "Does YOVU log calls to Applied Epic automatically?",
    a: "Yes. Calls are captured and tied to the right client record in Applied Epic with no manual entry. The number-to-name match and the activity creation happen for you.",
  },
  {
    q: "Does Capture work with other systems besides Applied Epic?",
    a: "Applied Epic is the flagship integration today, and Capture is extending to additional agency management systems.",
  },
];

function CaptureHero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas aspect-video max-h-screen min-h-[600px]">
      <img
        src={captureHero}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Orbit-to-stack call animation, sitting in the right half */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 -translate-x-[2%] lg:block xl:-translate-x-[12%]">
        <CallCollector />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex max-w-2xl flex-col text-left">
            <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
              Every call captured
              <br className="hidden sm:block" /> in one place.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg text-white/80">
              Don’t just record your calls. YOVU uses AI to summarize details, extract next steps,
              and log them directly to your client records.
            </p>
            <a
              href="/book-demo"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              See it in Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapturePage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <CaptureHero />
      <ZLayout items={introBlocks} textFirst />
      <FeatureSlidingCards
        heading="Built to capture every conversation"
        cards={featureCards}
        cardClassName="bg-[#f8fafc] dark:bg-surface"
      />
      <SectionIntroFeatureGrid
        eyebrow="Featured Use Case"
        heading="Every call logged to Applied Epic, automatically."
        intro="As Canada's only certified, embedded conversation-capture platform for Applied Epic, we capture calls, texts, and voicemails as they happen. Stop relying on manually typed notes that put you at risk for E&O claims two years down the line. Our platform closes the gap between the conversation and the record, giving your brokerage a searchable and defensible file."
        items={appliedBenefits}
        media={
          <img
            src={appliedMacbook}
            alt="Applied Epic shown on a MacBook with YOVU capturing the call"
            loading="lazy"
            decoding="async"
            className="w-full object-contain"
          />
        }
      />
      <FAQ items={faqItems} />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/capture")({
  head: () => ({
    meta: [
      { title: "Capture — YOVU" },
      {
        name: "description",
        content:
          "YOVU Capture records, transcribes, and logs every call, text, and voicemail — with AI summaries, sentiment, searchable history, and automatic logging to Applied Epic.",
      },
      { property: "og:title", content: "Capture — YOVU" },
      {
        property: "og:description",
        content:
          "Automatically capture and log every conversation with AI summaries, transcription, sentiment, and up to seven years of secure retention.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CapturePage,
});
