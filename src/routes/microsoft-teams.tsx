import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { Statement } from "@/components/yovu/Statement";
import { FAQ } from "@/components/yovu/FAQ";
import { TeamsHero } from "@/components/yovu/teams/TeamsHero";
import { ZLayout } from "@/components/yovu/ZLayout";

const teamsBenefitsItems = [
  {
    kicker: "COMMUNICATION",
    title: "Communicate effectively without leaving Teams",
    copy: "Make and receive all your business calls directly within the Microsoft Teams interface. Unify your communication channels into a single platform so your team can collaborate without switching contexts.",
  },
  {
    kicker: "MOBILITY",
    title: "Work from anywhere, on any device",
    copy: "Install Teams on any PC, Mac, or mobile device to keep your team connected on the go. Stay fully accessible and responsive no matter where your workday takes you.",
  },
  {
    kicker: "SECURITY",
    title: "Protect your data with built-in security",
    copy: "Enjoy enterprise-grade, end-to-end encryption for all your signaling and media. You maintain complete administrative control, including the ability to revoke Microsoft 365 tenant access securely at any time.",
  },
];
import { TeamsHowItWorks } from "@/components/yovu/teams/TeamsHowItWorks";
import { SectionIntroFeatureGrid } from "@/components/yovu/teams/SectionIntroFeatureGrid";
import developersWorking from "@/assets/imagery/developers working together.webp";

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
      <ZLayout heading="One shared workspace" items={teamsBenefitsItems} />
      <Statement copy="YOVU's integration brings Microsoft Teams to life, making meetings more personal while boosting real-time collaboration." />
      <TeamsHowItWorks />
      <SectionIntroFeatureGrid
        media={
          <img
            src={developersWorking}
            alt="Developers collaborating together at a workstation"
            className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border"
          />
        }
      />
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
