import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/yovu/ui/Eyebrow";
import { Button } from "@/components/yovu/ui/Button";
import { AlertCircle, MessageCircle, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { FAQ } from "@/components/yovu/FAQ";
import { Statement } from "@/components/yovu/Statement";
import { ZLayout, type ZLayoutItem } from "@/components/yovu/ZLayout";
import {
  FeatureSlidingCards,
  type FeatureSlidingCard,
} from "@/components/yovu/FeatureSlidingCards";
import {
  SectionIntroFeatureGrid,
  type SectionIntroFeatureItem,
} from "@/components/yovu/teams/SectionIntroFeatureGrid";
import { SalesforceHowItWorks } from "@/components/yovu/salesforce/SalesforceHowItWorks";
import developersWorking from "@/assets/imagery/developers working together.webp";
import { CallerContext } from "@/components/yovu/animations/CallerContext";
import { CallRecording } from "@/components/yovu/animations/CallRecording";
import { CallControl } from "@/components/yovu/animations/CallControl";
import { SalesforceContactCard } from "@/components/yovu/salesforce/SalesforceContactCard";
import { SmsChat } from "@/components/yovu/salesforce/SmsChat";
import { ActivityTimeline } from "@/components/yovu/salesforce/ActivityTimeline";
import { ActivityPrompt } from "@/components/yovu/salesforce/ActivityPrompt";
import mountainPeak from "@/assets/hero/light-mountain-peak.webp";
import mountainPeakMask from "@/assets/hero/light-mountain-peak-mask.webp";
import mountainPeakDark from "@/assets/hero/dark-mountain-peak.webp";
import mountainPeakMaskDark from "@/assets/hero/dark-mountain-peak-mask.webp";
import salesforceMockup from "@/assets/hero/salesforce-ui-mockup.webp";
import seniorOnLaptop from "@/assets/imagery/senior-professional-working-on-laptop.webp";
import salesforceAnalytics from "@/assets/imagery/salesforce-dashboard-and-analytics.webp";

const zImageClass = "aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border";

const accuracyItems: ZLayoutItem[] = [
  {
    kicker: "Activity Log",
    title: "Keep the work moving",
    copy: "Review complete call history, reports and enter new data from within an active call. Stay in the account when the call is finished to complete logs on the spot. Log calls in any Object within focus logging. This unique integration allows admin, customer service and team members the ability to leverage the time-saving feature.",
    media: (
      <div className="relative">
        <img
          src={seniorOnLaptop}
          alt="Professional reviewing account activity on a laptop"
          loading="lazy"
          decoding="async"
          className={zImageClass}
        />
        <ActivityPrompt />
      </div>
    ),
  },
  {
    kicker: "Call Analytics",
    title: "Productivity backed by real data",
    copy: "From within Salesforce, you have instant access to all call details, history and recordings. Customize the experience to suit your unique business requirements by leveraging dashboards and reports. Understand who is achieving the most calls on your team. Engage in gamification for increased activity to help propel productivity.",
    media: (
      <img
        src={salesforceAnalytics}
        alt="Salesforce dashboards and analytics for call activity"
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
    copy: "Inbound Calls associated with an account will show you who's calling with access to all the details on their account. Customize this notification to activate on ring or on answer.",
    media: <CallerContext />,
  },
  {
    title: "Click-to-call",
    copy: "Make calls directly from a client's account on a single click, remaining embedded in one tool. Save time by capturing the results of these calls instantly in their account.",
    media: <SalesforceContactCard />,
  },
  {
    title: "Call recording",
    copy: "Listen to previously recorded calls directly from the account. Give sales and customer service managers insights through easily accessible call playback directly within Salesforce.",
    media: <CallRecording />,
  },
  {
    title: "Call control",
    copy: "All the power in one tool. Transfer, hold, end and switch to a second call all from within Salesforce.",
    media: <CallControl />,
  },
  {
    title: "SMS support",
    copy: "Send and receive SMS messages directly within the Salesforce UI, complete with file attachment support. Drives faster client engagement and traceable conversations within Salesforce.",
    media: <SmsChat />,
  },
  {
    title: "Activity tracking",
    copy: "All SMS and calls from YOVU are automatically captured alongside Salesforce records such as emails, events, and tasks in the native activity feed timeline.",
    media: <ActivityTimeline />,
  },
];

const integrationBenefits: SectionIntroFeatureItem[] = [
  {
    icon: AlertCircle,
    title: "Live updates",
    copy: "Stop waiting for status updates on phone calls for days from sales and support team members.",
  },
  {
    icon: Zap,
    title: "Improve accuracy",
    copy: "Increase productivity and gain more visibility within your organization with improved metrics and reliable accuracy.",
  },
  {
    icon: MessageCircle,
    title: "Stay current",
    copy: "Communicate with customers and leads with the confidence that you have the most relevant and recent data on their account.",
  },
];

const faqItems = [
  {
    q: "What is YOVU's Salesforce integration?",
    a: "It is a VoIP and CTI integration that connects YOVU's business phone system with Salesforce so users can access customer details, call logs, and reporting from within Salesforce.",
  },
  {
    q: "Who can use the YOVU Salesforce integration?",
    a: "New or existing YOVU customers with a Salesforce Lightning account can access the Salesforce phone integration.",
  },
  {
    q: "How does screen pop work?",
    a: "For inbound calls tied to an account, the integration can show who is calling and display account details inside Salesforce, with notifications that can be customized to appear on ring or on answer.",
  },
  {
    q: "Can users make calls directly from Salesforce?",
    a: "Yes, users can click-to-call directly from a client account and stay inside the same Salesforce workflow while capturing call results right away.",
  },
  {
    q: "Does YOVU's Salesforce integration support call recording?",
    a: "Yes, recorded calls can be accessed from within the account, which gives sales and customer service managers a simple way to review conversations and coach teams.",
  },
  {
    q: "What call controls are available inside Salesforce?",
    a: "Users can manage calls from within Salesforce, including transferring, holding, ending, and switching to a second call.",
  },
  {
    q: "How does YOVU's Salesforce integration improve reporting and accuracy?",
    a: "The integration is designed to reduce manual processes by logging call activity, surfacing call history and analytics, and helping teams maintain more current sales and customer records.",
  },
  {
    q: "Can the setup be customized for different users or teams?",
    a: "Yes, profiles, softphones, and search fields can be tailored to user roles and business requirements from the dashboard.",
  },
];

function HeroCopy({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`flex max-w-xl flex-col ${centered ? "items-center text-center" : "text-left"}`}>
      <Eyebrow>Integrations</Eyebrow>
      <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl">
        Salesforce
      </h1>
      <p className="mt-6 text-pretty text-lg text-ink/70">
        Skyrocket sales, productivity, and reporting with complete Salesforce integration built
        right into our VoIP phone service.
      </p>
      <Button href="#demo" className="mt-8 w-fit">
              See it in action
            </Button>
    </div>
  );
}

function SalesforcePanel({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className={`rounded-2xl bg-white/45 p-3 shadow-2xl shadow-black/20 ring-1 ring-white/50 backdrop-blur-md dark:bg-white/10 dark:ring-white/15 ${className ?? ""}`}
    >
      <img
        src={salesforceMockup}
        alt="The YOVU integration inside the Salesforce interface"
        decoding="async"
        className="block w-full rounded-xl"
      />
    </motion.div>
  );
}

function SalesforceHero() {
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

      {/* Layer 2 (xl+ only): mockup tucked behind the peak */}
      <div className="absolute inset-y-0 right-0 z-10 hidden items-center xl:flex">
        <SalesforcePanel className="w-[46rem] 2xl:w-[54rem]" />
      </div>

      {/* Layer 3: mountain mask foreground (light / dark) */}
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

      {/* xl+ layout: copy pinned left */}
      <div className="relative z-30 hidden h-full items-center xl:flex">
        <div className="mx-auto w-full max-w-7xl px-6">
          <HeroCopy />
        </div>
      </div>

      {/* Below xl: stacked — copy on top, mockup centered floating above the mountain */}
      <div className="relative z-30 flex flex-col items-center gap-10 px-6 pb-16 pt-36 lg:pt-40 xl:hidden">
        <HeroCopy centered />
        <SalesforcePanel className="w-full max-w-md sm:max-w-lg lg:max-w-2xl" />
      </div>
    </section>
  );
}

function SalesforceIntegrationPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <SalesforceHero />
      <ZLayout heading="Scale your workflows to new heights" items={accuracyItems} />
      <FeatureSlidingCards
        heading="Keep every conversation connected in Salesforce"
        cards={featureCards}
        cardClassName="bg-[#f8fafc] dark:bg-surface"
      />
      <Statement copy="Transform how you work with customers using YOVU's Salesforce integration for more personalized communication, increased productivity, and real-time results." />
      <SalesforceHowItWorks />
      <SectionIntroFeatureGrid
        items={integrationBenefits}
        media={
          <img
            src={developersWorking}
            alt="Developers collaborating together at a workstation"
            className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border"
          />
        }
      />
      <FAQ items={faqItems} />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/salesforce")({
  head: () => ({
    meta: [
      { title: "Salesforce Integration — YOVU" },
      {
        name: "description",
        content:
          "Skyrocket sales, productivity, and reporting with YOVU's complete Salesforce integration — screen pop, click-to-call, recording, and full call control inside Salesforce.",
      },
      { property: "og:title", content: "Salesforce Integration — YOVU" },
      {
        property: "og:description",
        content:
          "Connect YOVU's VoIP phone system with Salesforce for screen pop, click-to-call, call recording, and complete call control inside your CRM.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SalesforceIntegrationPage,
});
