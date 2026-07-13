import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { CommunicateHero } from "@/components/yovu/communicate/CommunicateHero";
import { CommunicateCollaborate } from "@/components/yovu/communicate/CommunicateCollaborate";
import { CommunicateDevices } from "@/components/yovu/communicate/CommunicateDevices";
import { CommunicateIntegrations } from "@/components/yovu/communicate/CommunicateIntegrations";

function CommunicatePage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <CommunicateHero />
      <CommunicateCollaborate />
      <CommunicateDevices />
      <CommunicateIntegrations />
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
