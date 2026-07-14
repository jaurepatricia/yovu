import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { Statement } from "@/components/yovu/Statement";
import { TeamsHero } from "@/components/yovu/teams/TeamsHero";
import { TeamsBenefits } from "@/components/yovu/teams/TeamsBenefits";
import { TeamsCollaboration } from "@/components/yovu/teams/TeamsCollaboration";

function MicrosoftTeamsPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <TeamsHero />
      <TeamsBenefits />
      <Statement copy="YOVU's integration brings Microsoft Teams to life, making meetings more personal while boosting real-time collaboration." />
      <TeamsCollaboration />
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
