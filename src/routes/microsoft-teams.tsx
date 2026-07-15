import { createFileRoute } from "@tanstack/react-router";
import { Layers, Users, Zap } from "lucide-react";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { Statement } from "@/components/yovu/Statement";
import { FAQ } from "@/components/yovu/FAQ";
import { TeamsHero } from "@/components/yovu/teams/TeamsHero";
import { TeamsBenefits } from "@/components/yovu/teams/TeamsBenefits";
import { TeamsHowItWorks } from "@/components/yovu/teams/TeamsHowItWorks";
import { SectionIntro } from "@/components/yovu/layouts/SectionIntro";
import { FeatureGrid } from "@/components/yovu/layouts/FeatureGrid";

const collaborationFeatures = [
  {
    icon: Layers,
    title: "Simplify Your IT",
    copy: "Reduce the number of applications your team needs to juggle, lowering support costs while increasing efficiency.",
  },
  {
    icon: Users,
    title: "Increase Connection",
    copy: "Voice-enabled collaboration is a growing asset for company inclusion, keeping remote and distributed teams connected.",
  },
  {
    icon: Zap,
    title: "Boost Productivity",
    copy: "When employees can easily collaborate and connect from any device, business goals are achieved faster.",
  },
];

const faqItems = [
  {
    q: "How does the YOVU and Microsoft Teams integration improve business communication?",
    a: "The integration brings all your communication tools into one shared workspace. It allows your team to make and receive calls, chat, host meetings, share files, and work with relevant business applications without switching between different programs.",
  },
  {
    q: "Can I use the YOVU Teams integration on my mobile device?",
    a: "Yes, you can make and receive calls on any web-connected device. The Microsoft Teams application can be installed on PCs, Macs, or mobile devices, allowing your team to leverage YOVU Office Phone functionality from anywhere.",
  },
  {
    q: "Is the YOVU Microsoft Teams integration secure?",
    a: "Yes, enterprise-grade security and end-to-end encryption for both signalling and media are built into the integration. The YOVU Teams connector also manages SSL certificates for each customer and provides fine-grained access control, including the ability to revoke access to the Microsoft 365 tenant at any time.",
  },
  {
    q: "How does integrating YOVU with Microsoft Teams impact IT and support costs?",
    a: "By reducing the number of different applications users need to get their work done, the YOVU Teams connector simplifies IT management in the cloud. This flexibility helps lower support costs while increasing overall working efficiency and productivity.",
  },
  {
    q: "Does the integration help with team collaboration?",
    a: "Yes, the YOVU Teams Connector increases productivity and allows for real-time collaboration. The integration brings Microsoft Teams to life with voice-enabled collaboration, which is a growing asset for company inclusion and helps businesses achieve their goals faster.",
  },
];

function MicrosoftTeamsPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <TeamsHero />
      <TeamsBenefits />
      <Statement copy="YOVU's integration brings Microsoft Teams to life, making meetings more personal while boosting real-time collaboration." />
      <TeamsHowItWorks />
      <SectionIntro
        headline="Why use an integration?"
        body="Bring your team together while simplifying your tech stack. Boost productivity and inclusion by simplifying how your workforce collaborates."
      />
      <FeatureGrid items={collaborationFeatures} />
      <FAQ heading="Frequently Asked Questions" items={faqItems} />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/microsoft-teams")({
  head: () => ({
    meta: [
      { title: "Microsoft Teams Integration — YOVU" },
      {
        name: "description",
        content:
          "Combine your YOVU Business VoIP system with Microsoft Teams to streamline workflows, make and receive calls in Teams, and keep your team connected anywhere.",
      },
      { property: "og:title", content: "Microsoft Teams Integration — YOVU" },
      {
        property: "og:description",
        content:
          "Power your communications by bringing YOVU calling into Microsoft Teams — secure, mobile, and built for collaboration.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MicrosoftTeamsPage,
});
