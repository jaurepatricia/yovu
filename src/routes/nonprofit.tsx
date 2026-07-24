import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { Hero } from "@/components/yovu/Hero";
import { LogoCarousel, type Logo } from "@/components/yovu/LogoCarousel";
import { Capabilities, type Category } from "@/components/yovu/Capabilities";
import { Statement } from "@/components/yovu/Statement";
import { ZLayout, type ZLayoutItem } from "@/components/yovu/ZLayout";
import { Showcase, type Slide, forestStream, mountainRoad, manIpad } from "@/components/yovu/Showcase";
import { AboutTestimonials } from "@/components/yovu/AboutTestimonials";
import { FAQ } from "@/components/yovu/FAQ";
import { ScaleCallout } from "@/components/yovu/ScaleCallout";
import { CallControl } from "@/components/yovu/animations/CallControl";
import { DeviceHandoff } from "@/components/yovu/animations/DeviceHandoff";
import { CallRecording } from "@/components/yovu/animations/CallRecording";
import { ReportingDashboard } from "@/components/yovu/animations/ReportingDashboard";
import { ThreeWayCall } from "@/components/yovu/animations/ThreeWayCall";
import { GuidedConversation } from "@/components/yovu/animations/GuidedConversation";
import {
  ChatToCall,
  AvailabilityRouting,
  QueueCallback,
} from "@/components/yovu/communicate/CommunicateCardVisuals";
import bbbs from "@/assets/nonprofit logos/bbbsc_horizontal_primary_rgb_en_gkpgr4w.png";
import jhso from "@/assets/nonprofit logos/jhso-logo-2020-en.png";
import vanier from "@/assets/nonprofit logos/Vanier Logo.png";
import msLogo from "@/assets/nonprofit logos/MS-Logo.png";
import genericLogo from "@/assets/nonprofit logos/logo.png";

const nonprofitLogos: Logo[] = [
  { name: "Big Brothers Big Sisters", src: bbbs },
  { name: "John Howard Society", src: jhso },
  { name: "Vanier", src: vanier },
  { name: "MS Society", src: msLogo },
  { name: "Community partner", src: genericLogo },
];

const cta = { label: "Learn more", href: "#demo" };

const nonprofitCategories: Category[] = [
  {
    id: "communicate",
    label: "Communicate",
    items: [
      {
        title: "Business phone system",
        copy: "Reliable cloud communications for your whole organization, with click-to-call, warm transfers, and advanced call management across every program and branch.",
        cta,
        media: <CallControl />,
      },
      {
        title: "Centralized inbound calling",
        copy: "Triage every incoming call from one place and route donors, volunteers, and clients to the right person with custom answering rules.",
        cta,
        media: <AvailabilityRouting />,
      },
      {
        title: "Work from anywhere",
        copy: "Answer calls from the office, a branch location, or home. Desktop, mobile, and desk phones stay in sync wherever your team is.",
        cta,
        media: <DeviceHandoff />,
      },
    ],
  },
  {
    id: "capture",
    label: "Capture",
    items: [
      {
        title: "Long-term call recording",
        copy: "Securely record and retain calls for quality, training, and accountability, so what was said and agreed is always on the record.",
        cta,
        media: <CallRecording />,
      },
      {
        title: "Secure chat & SMS",
        copy: "Send and receive texts from a secure business line, so staff and volunteers keep their personal numbers private and every message stays in one place.",
        cta,
        media: <ChatToCall />,
      },
      {
        title: "Queue callback",
        copy: "Offer clear wait-time updates and callback requests so no caller is left stuck on hold during a busy campaign or event.",
        cta,
        media: <QueueCallback />,
      },
    ],
  },
  {
    id: "coach",
    label: "Coach",
    items: [
      {
        title: "Reporting & insights",
        copy: "Understand call volume, wait times, and staffing needs across branches with customizable dashboards and reports.",
        cta,
        media: <ReportingDashboard />,
      },
      {
        title: "Listen, whisper & collaborate",
        copy: "Coach new volunteers and staff on live calls, whisper guidance only they can hear, or join a three-way call when a caller needs more help.",
        cta,
        media: <ThreeWayCall framed />,
      },
      {
        title: "Guided conversations",
        tag: "Coming Soon",
        copy: "Real-time prompts guide your team during live calls to ramp up new volunteers faster and keep every interaction consistent.",
        cta,
        media: <GuidedConversation />,
      },
    ],
  },
];

function ZPlaceholder() {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-surface ring-1 ring-border">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/25">
        Image placeholder
      </span>
    </div>
  );
}

const introBlocks: ZLayoutItem[] = [
  {
    kicker: "Personal Experience",
    title: "Community connection",
    copy: "Reduce resources and stay connected with your community through centralized inbound calling. Triage all incoming calls from one location. Integrate branch locations and answer from anywhere with a single system.",
    media: <ZPlaceholder />,
  },
  {
    kicker: "Consistent Performance",
    title: "Reliable support",
    copy: "User friendly, one-step setup, without the need for a dedicated IT team. Connect with multiple locations, receive an ongoing reduction in pricing, and enjoy exclusive benefits for your organization.",
    media: <ZPlaceholder />,
  },
  {
    kicker: "Secure",
    title: "Safety and privacy",
    copy: "Your team's privacy is always protected with customizable private display options. Send and receive work calls and text messages from personal devices without using personal numbers.",
    media: <ZPlaceholder />,
  },
];

const showcaseSlides: Slide[] = [
  {
    headline: "Built to fit your stack",
    copy: "YOVU connects to the tools your organization already trusts, so your team can spend more time on your mission and less time switching screens.",
    cta: { label: "Explore features", href: "/communicate" },
    image: forestStream,
    tone: "light",
  },
  {
    headline: "Built for peace of mind",
    copy: "YOVU keeps your conversations secure and reliable. We take your data seriously — that's why we're SOC 2 Type 2 Certified and PIPEDA Compliant, with fully encrypted calls.",
    cta: { label: "Learn more", href: "/capture" },
    image: mountainRoad,
    tone: "dark",
  },
  {
    headline: "Built by Canadians",
    copy: "YOVU was built by a team of dedicated Canadians and our local support staff is ready to help 24/7. You'll never have to speak to an off-shore call centre.",
    cta: { label: "Our team", href: "/about-us" },
    image: manIpad,
    tone: "light",
    narrowCopy: true,
  },
];

const faqItems = [
  {
    q: "Does YOVU offer pricing for non-profits and charities?",
    a: "Yes. Non-profit and charity organizations receive special pricing and an ongoing reduction as you grow, along with exclusive benefits for your organization. Talk to us about what your organization qualifies for.",
  },
  {
    q: "Can we connect multiple branches or locations?",
    a: "Yes. YOVU centralizes inbound calling so you can triage every call from one place and connect branch locations under a single system, answering from anywhere.",
  },
  {
    q: "Do we need an IT team to set it up?",
    a: "No. Setup is user friendly and takes just one step, with no dedicated IT team required. Our Canadian support staff is available to help around the clock.",
  },
  {
    q: "Can staff and volunteers keep their personal numbers private?",
    a: "Yes. Customizable private display options let your team send and receive work calls and text messages from personal devices without ever exposing their personal numbers.",
  },
  {
    q: "Is cloud-based VoIP reliable and secure?",
    a: "Yes. YOVU is hosted in geographically redundant, highly secure Canadian data centers with backup internet and power, a 99.99% uptime guarantee, and the option for fully encrypted calls.",
  },
];

function NonprofitPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <Hero
        defaultIndustry="Non-Profit or Charity"
        showAppliedPill={false}
        subcopy="Discover how non-profits and charities across Canada are staying connected to their communities with our all-in-one communications platform."
      />
      <LogoCarousel logos={nonprofitLogos} solidWhite />
      <Capabilities categories={nonprofitCategories} />
      <Statement copy="Every conversation strengthens your mission — that's why whether a donor, volunteer, or client calls, every call is clear, secure, and dependable." />
      <ZLayout heading="Built to serve your community" items={introBlocks} />
      <Showcase slides={showcaseSlides} />
      <AboutTestimonials />
      <FAQ items={faqItems} className="pt-12 lg:pt-16" />
      <ScaleCallout heading="Ready to connect your whole organization?" />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/nonprofit")({
  head: () => ({
    meta: [
      { title: "YOVU — VoIP Phone System for Canadian Non-Profits & Charities" },
      {
        name: "description",
        content:
          "YOVU is the business phone system for Canadian non-profits and charities — centralized calling across branches, private numbers, non-profit pricing, and dependable Canadian support.",
      },
      {
        name: "keywords",
        content:
          "non-profit phone system, charity VoIP, non-profit discount phone system, multi-branch calling, Canadian non-profit VoIP",
      },
      { property: "og:title", content: "YOVU — VoIP Phone System for Canadian Non-Profits & Charities" },
      {
        property: "og:description",
        content:
          "Centralized, secure communications for non-profits and charities — connect every branch, protect privacy, and access special non-profit pricing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NonprofitPage,
});
