import { createFileRoute } from "@tanstack/react-router";
import { PlugZap, Lock, Database } from "lucide-react";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { FAQ } from "@/components/yovu/FAQ";
import { ZLayout, type ZLayoutItem } from "@/components/yovu/ZLayout";
import {
  IndividualFeatureCards,
  type IndividualFeatureCard,
} from "@/components/yovu/IndividualFeatureCards";
import {
  SectionIntroFeatureGrid,
  type SectionIntroFeatureItem,
} from "@/components/yovu/teams/SectionIntroFeatureGrid";
import { AppliedHowItWorks } from "@/components/yovu/applied/AppliedHowItWorks";

const integrationBenefits: SectionIntroFeatureItem[] = [
  {
    icon: PlugZap,
    title: "Embedded by Design",
    copy: "The only conversation capturing platform certified integration partner in Canada, built on Applied Systems' current API and embedded inside Applied Epic. No screen-switching necessary.",
  },
  {
    icon: Lock,
    title: "Controlled Access",
    copy: "Role-based access gives administrators control over who can view recordings, transcripts, and reports. Permissions stay aligned with your internal security and compliance requirements.",
  },
  {
    icon: Database,
    title: "Long-term Storage",
    copy: "Retention is configurable up to seven years to support your long-term E&O documentation policy. Data is stored on Canadian servers for added control and compliance.",
  },
];

const benefits: ZLayoutItem[] = [
  {
    kicker: "COMMUNICATION",
    title: "Every call connected to the client",
    copy: "See exactly who is calling before you say hello. YOVU automatically matches incoming numbers to your Applied Epic records, instantly popping the client's profile on your screen so you never have to ask for an account number again. Need to make a call? Use one-click dialing directly from Applied Epic, and log activities right after the call ends. No more deciphering hand-written notes.",
  },
  {
    kicker: "MOBILITY",
    title: "Take your calls on the road",
    copy: "Keep your workflow completely unbroken when you leave the office. Calls taken on your mobile device automatically flow right back into the client's Applied Epic record, exactly like they would at your desk. Recordings, transcripts, and summaries sync instantly, ensuring every conversation is securely captured no matter where your team is working.",
  },
  {
    kicker: "SECURITY",
    title: "Our policy is peace of mind",
    copy: "Built specifically for long-term E&O documentation, we offer up to seven years of call retention stored securely on Canadian servers. As your brokerage grows and your tech stack evolves, our conversation logging is designed to travel with you, continuously extending to integrate seamlessly with additional management systems.",
  },
];

const featureCards: IndividualFeatureCard[] = [
  {
    title: "Screen Pop",
    copy: "Instantly see who is calling and access their full account details the moment your phone rings. You can easily customize this pop-up notification to trigger either when the line rings or when you answer.",
  },
  {
    title: "Click-to-Call",
    copy: "Make calls with a single click directly from a client's profile without ever leaving the Applied Epic platform. This eliminates manual data entry, saving you valuable time and preventing accidental misdials.",
  },
  {
    title: "Call Transcription & Retention",
    copy: "Review exact conversation transcripts for coaching, quality assurance, or efficiently resolving client disputes. Our secure seven-year data retention turns potential misunderstandings into concrete, easily accessible records for your E&O documentation.",
  },
  {
    title: "Customizable AI Summaries",
    copy: "Automatically generate tailored AI summaries that extract key details and recommended next steps rather than providing a massive transcript. This ensures the next team member who opens the file gets immediate, actionable context instead of raw text they have to decode.",
  },
  {
    title: "Activity Log",
    copy: "Review full call histories and enter new data directly during an active call to keep your workflow completely seamless. After hanging up, use the generated AI summaries to quickly complete your logs and finish administrative tasks on the spot.",
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

function AppliedEpicHero() {
  return (
    <section className="bg-canvas pb-16 pt-40 lg:pb-24 lg:pt-56">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl">
          Applied Epic Integration
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink/70">
          Automatically link calls to client profiles in Applied Epic without manual data entry. Reduce administrative workload and keep your team focused on what matters—your clients.
        </p>
      </div>
    </section>
  );
}

function AppliedEpicPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <AppliedEpicHero />
      <ZLayout heading="Built into the way brokers already work" items={benefits} />
      <IndividualFeatureCards
        heading="Easy to use features right inside Applied Epic"
        cards={featureCards}
      />
      <AppliedHowItWorks />
      <SectionIntroFeatureGrid items={integrationBenefits} />
      <FAQ items={faqItems} />
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
