import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Hero } from "@/components/yovu/Hero";
import { LogoCarousel } from "@/components/yovu/LogoCarousel";
import { Features } from "@/components/yovu/Features";
import { Integrations } from "@/components/yovu/Integrations";
import { Security } from "@/components/yovu/Security";
import { Canada } from "@/components/yovu/Canada";
import { Testimonials } from "@/components/yovu/Testimonials";
import { FAQ } from "@/components/yovu/FAQ";
import { FinalCTA } from "@/components/yovu/FinalCTA";
import { Footer } from "@/components/yovu/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YOVU — Enterprise VoIP for Canadian P&C Brokerages" },
      {
        name: "description",
        content:
          "YOVU is enterprise-scale VoIP for Canadian P&C insurance brokerages — embedded in Applied Epic, with AI call summaries, auto-logging, and SOC 2 security.",
      },
      { property: "og:title", content: "YOVU — Built for Canadian P&C Brokerages" },
      {
        property: "og:description",
        content:
          "Breathe new life into your brokerage communications. Enterprise VoIP deeply integrated with Applied Epic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <Hero />
      <LogoCarousel />
      <Features />
      <Integrations />
      <Security />
      <Canada />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
