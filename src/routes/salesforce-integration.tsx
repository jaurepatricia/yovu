import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, MessageCircle, Zap } from "lucide-react";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { FAQ } from "@/components/yovu/FAQ";
import {
  IndividualFeatureCards,
  type IndividualFeatureCard,
} from "@/components/yovu/IndividualFeatureCards";
import {
  SectionIntroFeatureGrid,
  type SectionIntroFeatureItem,
} from "@/components/yovu/teams/SectionIntroFeatureGrid";

const featureCards: IndividualFeatureCard[] = [
  {
    title: "Screen Pop",
    copy: "Inbound Calls associated with an account will show you who's calling with access to all the details on their account. Customize this notification to activate on ring or on answer.",
  },
  {
    title: "Click to Call",
    copy: "Make calls directly from a client's account on a single click, remaining embedded in one tool. Save time by capturing the results of these calls instantly in their account.",
  },
  {
    title: "Call Recording",
    copy: "Listen to previously recorded calls directly from the account. Give sales and customer service managers insights through easily accessible call playback directly within Salesforce.",
  },
  {
    title: "Call Control",
    copy: "All the power in one tool. Transfer, hold, end and switch to a second call all from within Salesforce.",
  },
];

const integrationBenefits: SectionIntroFeatureItem[] = [
  {
    icon: AlertCircle,
    title: "Live Updates",
    copy: "Stop waiting for status updates on phone calls for days from sales and support team members.",
  },
  {
    icon: Zap,
    title: "Improve Accuracy",
    copy: "Increase productivity and gain more visibility within your organization with improved metrics and reliable accuracy.",
  },
  {
    icon: MessageCircle,
    title: "Stay Current",
    copy: "Communicate with customers and leads with the confidence that you have the most relevant and recent data on their account.",
  },
];

const faqItems = [
  {
    q: "What is YOVU's Salesforce Integration?",
    a: "It is a VoIP and CTI integration that connects YOVU's business phone system with Salesforce so users can access customer details, call logs, and reporting from within Salesforce.",
  },
  {
    q: "Who can use the YOVU Salesforce integration?",
    a: "YOVU states that new or existing YOVU customers with a Salesforce Lightning account can access the Salesforce phone integration.",
  },
  {
    q: "How does screen pop work?",
    a: "For inbound calls tied to an account, the integration can show who is calling and display account details inside Salesforce, with notifications that can be customized to appear on ring or on answer.",
  },
  {
    q: "Can users make calls directly from Salesforce?",
    a: "Yes, YOVU says users can click to call directly from a client account and stay inside the same Salesforce workflow while capturing call results right away.",
  },
  {
    q: "Does the integration support call recording?",
    a: "Yes, recorded calls can be accessed from within the account, which gives sales and customer service managers a simple way to review conversations and coach teams.",
  },
  {
    q: "What call controls are available inside Salesforce?",
    a: "YOVU says users can manage calls from within Salesforce, including transferring, holding, ending, and switching to a second call.",
  },
  {
    q: "How does the integration improve reporting and accuracy?",
    a: "The integration is designed to reduce manual processes by logging call activity, surfacing call history and analytics, and helping teams maintain more current sales and customer records.",
  },
  {
    q: "Can the setup be customized for different users or teams?",
    a: "Yes, YOVU says profiles, softphones, and search fields can be tailored to user roles and business requirements from the dashboard.",
  },
];

function SalesforceHero() {
  return (
    <section className="bg-canvas pb-16 pt-40 lg:pb-24 lg:pt-56">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl">
          Salesforce Integration
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink/70">
          Skyrocket sales and productivity and reporting with complete Salesforce integration built
          right into our VoIP phone service.
        </p>
      </div>
    </section>
  );
}

function SalesforceIntegrationPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <SalesforceHero />
      <IndividualFeatureCards heading="Everything you need, inside Salesforce" cards={featureCards} />
      <SectionIntroFeatureGrid items={integrationBenefits} />
      <FAQ items={faqItems} />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/salesforce-integration")({
  head: () => ({
    meta: [
      { title: "Salesforce Integration — YOVU" },
      {
        name: "description",
        content:
          "Skyrocket sales, productivity, and reporting with YOVU's complete Salesforce integration — screen pop, click to call, recording, and full call control inside Salesforce.",
      },
      { property: "og:title", content: "Salesforce Integration — YOVU" },
      {
        property: "og:description",
        content:
          "Connect YOVU's VoIP phone system with Salesforce for screen pop, click to call, call recording, and complete call control inside your CRM.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SalesforceIntegrationPage,
});
