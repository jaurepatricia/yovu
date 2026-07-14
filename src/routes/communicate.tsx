import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { CommunicateHero } from "@/components/yovu/communicate/CommunicateHero";
import { FeatureCardCollaborate } from "@/components/yovu/communicate/FeatureCardCollaborate";
import { CommunicateDevices } from "@/components/yovu/communicate/CommunicateDevices";
import { FloatingGridEnterprise } from "@/components/yovu/communicate/FloatingGridEnterprise";
import { CommunicateConnect } from "@/components/yovu/communicate/CommunicateConnect";
import { CommunicateBranded } from "@/components/yovu/communicate/CommunicateBranded";
import { FAQ } from "@/components/yovu/FAQ";

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
      <FeatureCardCollaborate />
      <CommunicateDevices />
      <FloatingGridEnterprise />
      <CommunicateConnect />
      <CommunicateBranded />
      <FAQ items={faqItems} />
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
