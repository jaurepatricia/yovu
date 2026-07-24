import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { FAQ } from "@/components/yovu/FAQ";
import { ZLayout, type ZLayoutItem } from "@/components/yovu/ZLayout";
import {
  FeatureSlidingCards,
  type FeatureSlidingCard,
} from "@/components/yovu/FeatureSlidingCards";
import { GuidedConversation } from "@/components/yovu/animations/GuidedConversation";
import { ThreeWayCall } from "@/components/yovu/animations/ThreeWayCall";
import { ReportingDashboard } from "@/components/yovu/animations/ReportingDashboard";
import { Scorecard } from "@/components/yovu/animations/Scorecard";
import { CoachingCard } from "@/components/yovu/coach/CoachingCard";
import { RampMilestones } from "@/components/yovu/coach/RampMilestones";
import coachHero from "@/assets/hero/mountain-climbers-working-together.webp";
import womanSmiling from "@/assets/imagery/professional woman on the phone smiling.webp";
import manOnPeak from "@/assets/imagery/man on mountain peak.webp";

const zImageClass = "aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border";

const introBlocks: ZLayoutItem[] = [
  {
    kicker: "Instant Feedback",
    title: "Grounded by real work",
    copy: "As the workforce evolves and experienced professionals retire, your best sales tactics should not leave with them. Instead of a generic, off-the-shelf training manual, Coach is wired directly into the call data YOVU already captures. Every piece of feedback is based on your team's real conversations, capturing the specific questions, niches, and follow-ups that make your top producers win.",
    media: (
      <div className="relative">
        <img
          src={womanSmiling}
          alt="Insurance professional smiling on a call at her desk"
          loading="lazy"
          decoding="async"
          className={zImageClass}
        />
        <CoachingCard />
      </div>
    ),
  },
  {
    kicker: "Faster Onboarding",
    title: "Reach new heights",
    copy: "Accelerate onboarding by giving new hires structured guidance based on real interactions, rather than waiting for a manager to overhear a live call. Coach automatically surfaces the specific calls supervisors need to review by exception. This targeted approach saves management from monitoring everyone blindly while ensuring new hires hit their 30, 60, and 90-day ramp milestones.",
    media: (
      <div className="relative">
        <img
          src={manOnPeak}
          alt="Professional standing on a mountain peak"
          loading="lazy"
          decoding="async"
          className={zImageClass}
        />
        <RampMilestones />
      </div>
    ),
  },
];

const featureCards: FeatureSlidingCard[] = [
  {
    title: "Guided conversations",
    tag: "Coming Soon",
    copy: "Live prompts and questions surface during the call, helping new hires ramp faster. This keeps documentation consistent across the team, supporting stronger, standardized E&O records.",
    media: <GuidedConversation />,
  },
  {
    title: "Listen, whisper & collaborate",
    copy: "Provide real-time coaching without disrupting the client experience. Listen to calls silently, whisper advice that only your employee can hear, or collaborate and create a three-way call when your team needs backup.",
    media: <ThreeWayCall />,
  },
  {
    title: "Unified dashboards & automated reporting",
    copy: "Get a 360-degree view of your operations at a glance. Understand call volume, queue times, and team bandwidth in real time to support inbound callers, or have customized metrics on employee activity emailed directly to your team daily.",
    media: <ReportingDashboard />,
  },
  {
    title: "Scorecards & playbooks",
    tag: "Roadmap",
    copy: "We are building a central knowledge base to equip new hires with scripts and carrier details, alongside call scorecards that grade actual recorded conversations against your custom rubrics for greetings, disclosures, and closing techniques.",
    media: <Scorecard />,
  },
];

const faqItems = [
  {
    q: "Is Coach available today?",
    a: "While core features like in-depth reporting, customizable dashboards, and advanced call functions are available now, the full vision for Coach is still in development. Communicate and Capture are live today, and you can join early access to help shape Coach as our next major product offering.",
  },
  {
    q: "What will Coach do?",
    a: "It is being built to ramp new hires faster with onboarding checklists and a sales playbook, score real calls against a brokerage's own rubric, hold a knowledge base, and surface coaching moments to supervisors by exception. Live AI coaching is planned for a later phase.",
  },
  {
    q: "How is Coach different from a standard training tool?",
    a: "Coach is built on the calls YOVU Communicator already captures inside Applied Epic, so coaching is based on real conversations rather than a generic training manual.",
  },
  {
    q: "When will Coach launch?",
    a: "We are building it with brokerages and will share timing with early-access participants. Talk to us if you want a say in what ships first.",
  },
  {
    q: "Can I see how the phones are performing in real time?",
    a: "Yes. Dashboards give near real-time queue data, including waiting callers, average hold times, service levels, and agent availability, and reporting tracks call volume and broker and CSR performance over time.",
  },
  {
    q: "How hard is it to administer?",
    a: "Administration is centralized and browser-based, with role-based access controls, so you manage users and permissions from one place.",
  },
];

function CoachHero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas aspect-video max-h-screen min-h-[600px]">
      <img
        src={coachHero}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex max-w-xl flex-col text-left">
            <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl">
              Never lose your footing on a call
            </h1>
            <p className="mt-6 text-pretty text-lg text-ink/70">
              Coach turns real-world call data into a steady path upward, guiding your agents safely
              through tough conversations and ambitious management goals.
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

function CoachPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <CoachHero />
      <ZLayout items={introBlocks} textFirst />
      <FeatureSlidingCards
        heading="Built to grow your team"
        cards={featureCards}
        cardClassName="bg-[#f8fafc] dark:bg-surface"
      />
      <FAQ items={faqItems} />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/coach")({
  head: () => ({
    meta: [
      { title: "Coach — YOVU" },
      {
        name: "description",
        content:
          "Scale your top performers with YOVU Coach — real-time listen/whisper/collaborate, unified dashboards and reporting, and coaching built on the calls you already capture.",
      },
      { property: "og:title", content: "Coach — YOVU" },
      {
        property: "og:description",
        content:
          "Accelerate onboarding and team performance with coaching grounded in your team's real conversations.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CoachPage,
});
