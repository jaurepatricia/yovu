import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { CommunicateHero } from "@/components/yovu/communicate/CommunicateHero";
import { ZLayout, type ZLayoutItem } from "@/components/yovu/ZLayout";
import { Statement } from "@/components/yovu/Statement";
import {
  FeatureSlidingCards,
  type FeatureSlidingCard,
} from "@/components/yovu/FeatureSlidingCards";
import { FloatingGridEnterprise } from "@/components/yovu/communicate/FloatingGridEnterprise";
import { CommunicateBranded } from "@/components/yovu/communicate/CommunicateBranded";
import { DeviceAccordion } from "@/components/yovu/communicate/DeviceAccordion";
import {
  ChatToCall,
  AvailabilityRouting,
  QueueCallback,
} from "@/components/yovu/communicate/CommunicateCardVisuals";
import { FeatureWall } from "@/components/yovu/communicate/FeatureWall";
import { ClickToDial } from "@/components/yovu/animations/ClickToDial";
import { CallerContext } from "@/components/yovu/animations/CallerContext";
import { FAQ } from "@/components/yovu/FAQ";
import { ScaleCallout } from "@/components/yovu/ScaleCallout";

function ZPlaceholder() {
  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-surface ring-1 ring-border">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/25">
        Image placeholder
      </span>
    </div>
  );
}

const introBlocks: ZLayoutItem[] = [
  {
    kicker: "Business Phone System",
    title: "Roam free, stay connected",
    copy: "Experience reliable VoIP calling customized to fit your organization's exact needs. Manage all communication from a single workspace across multiple devices, allowing your team to stay connected no matter where they are.",
    compactCopy: true,
    extra: <DeviceAccordion />,
    media: <ZPlaceholder />,
  },
  {
    kicker: "Integrations",
    title: "Sync your tools, elevate your workflows",
    copy: "Empower your team's productivity by linking your phone system with over 70 essential platforms you use daily, including Applied Epic, Salesforce, and Microsoft Teams. Seamlessly trigger automated replies, establish advanced call routing, and configure custom workflows that perfectly match your business operations.",
    media: <ZPlaceholder />,
  },
  {
    kicker: "Reliable & Secure",
    title: "Uncompromising security & constant support",
    copy: "Ensure your operations run without interruption using a premier cloud-based phone system built for uncompromising reliability. Enjoy secure, fully encrypted calls that protect your sensitive information and keep your daily communications safe, all backed by our amazing, dedicated support team.",
    media: <ZPlaceholder />,
  },
];

const featureCards: FeatureSlidingCard[] = [
  {
    title: "Chat, SMS, & text",
    copy: "Keep your personal number private by managing all your business chats, SMS, and texts on a secure line within one unified workspace. Enhance your professional presence by listing multiple company numbers and easily assigning local, international, or toll-free numbers directly to your team members.",
    media: <ChatToCall />,
  },
  {
    title: "Click-to-call",
    copy: "Make calls with a single click directly from any phone number or client profile, without ever leaving the tool you are working in. This eliminates manual dialing, saving time and preventing misdials.",
    media: <ClickToDial />,
  },
  {
    title: "Screen pop up",
    copy: "Deliver highly personalized service — a screen pop surfaces the caller's identity and account before anyone picks up, informing your team instantly on the exact needs of the caller.",
    media: <CallerContext />,
  },
  {
    title: "Call routing",
    copy: "Direct every conversation to the right person using custom distribution rules and personalized ring sequences for your entire team. You can easily check real-time availability statuses and seamlessly loop colleagues into live calls.",
    media: <AvailabilityRouting />,
  },
  {
    title: "Queue callback",
    copy: "Put clients in control of their time. By offering clear wait-time updates and convenient callback requests, you can eliminate hold-time fatigue and improve the caller experience.",
    media: <QueueCallback />,
  },
  {
    title: "A complete suite of VoIP features",
    copy: "Access an expansive library of standard VoIP capabilities equipped with absolutely everything your business needs to power its communications. From the basics to advanced tools, we provide all the essential features to keep your calls organized, teams aligned, and conversations running smoothly.",
    media: <FeatureWall columns={1} fade="none" />,
  },
];

const faqItems = [
  {
    q: "Is YOVU a full phone system or just an add-on?",
    a: "It is a full cloud phone system. YOVU Communicator handles voice and text, queues, transfers, and conferencing, and runs inside Applied Epic so the phone is part of the client workflow.",
  },
  {
    q: "Do I need to install software on every computer?",
    a: "No. Communicator is browser-based. It floats over your work or docks beside it, so there is nothing to install or patch per workstation.",
  },
  {
    q: "What happens to my business phone if the internet or power goes out?",
    a: "If your internet or power goes down, you will temporarily lose access to your physical desk phone, but your phone system stays online. YOVU is hosted in the cloud, meaning your automated voice menus and voicemails will continue to function normally. Inbound calls will be automatically routed to your cell phone or mobile app, ensuring you never miss a client. Once power and internet are restored, your desk phone will reconnect automatically.",
  },
  {
    q: "Is cloud-based VoIP secure for my business?",
    a: "Yes. YOVU Office Phone is hosted in geographically redundant, highly secure Canadian data centers with backup internet and power. We offer a 99.99% uptime guarantee backed by SLAs, and calls can be fully encrypted for enhanced security. Because the system is off-site, it also serves as a built-in disaster recovery solution for your business.",
  },
  {
    q: "Do I need new cabling or special hardware to switch to VoIP?",
    a: "All you need to run VoIP is a high-speed broadband internet connection and a VoIP-enabled phone. Desk phones require a standard Ethernet (CAT5e or Cat6) connection. If you don't have cabling at every desk, we offer cordless phone options. For hardware, there are plenty of models to choose from brands like Polycom, Cisco, Yealink, and Mitel.",
  },
  {
    q: "How difficult is it to add new lines or locations as my business grows?",
    a: "Scaling your business is incredibly simple with VoIP. You never have to worry about outgrowing the system or paying high installation fees for new lines. You can add a new user instantly through our intuitive web portal, and if you are opening a new physical location, we can set up local numbers and ship the necessary hardware with just one phone call.",
  },
  {
    q: "Are there long-distance fees with a VoIP business phone?",
    a: "No. With YOVU Office Phone, you will never pay long-distance fees for calls within Canada (all 10 provinces) and the continental US (lower 48 states). We also offer highly competitive and affordable rates for international calling outside of North America.",
  },
  {
    q: "Can I text clients from YOVU?",
    a: "Yes. Talk and text run from the same workspace, so calls and SMS sit together in one place.",
  },
];

function CommunicatePage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <CommunicateHero />
      <ZLayout items={introBlocks} textFirst />
      <Statement copy="Every conversation matters — that's why whether you're working from home or the office, every call is clear, secure, and dependable." />
      <FeatureSlidingCards
        heading="Everything your team needs to connect"
        cards={featureCards}
        cardClassName="bg-[#f8fafc] dark:bg-surface"
      />
      <FloatingGridEnterprise />
      <CommunicateBranded />
      <FAQ items={faqItems} />
      <ScaleCallout heading="Ready to navigate your calls with total clarity and ease?" />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/communicate")({
  head: () => ({
    meta: [
      { title: "Business Phone System — YOVU" },
      {
        name: "description",
        content:
          "Elevate your business phone system with YOVU — enterprise-grade reliability, Canadian support, and a communications platform built for how your team works.",
      },
      { property: "og:title", content: "Business Phone System — YOVU" },
      {
        property: "og:description",
        content:
          "Enterprise VoIP with 70+ integrations, mobility, and secure, dependable calling for Canadian businesses.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CommunicatePage,
});
