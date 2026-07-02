import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Hero } from "@/components/yovu/Hero";
import { LogoCarousel } from "@/components/yovu/LogoCarousel";
import { Capabilities } from "@/components/yovu/Capabilities";
import { Statement } from "@/components/yovu/Statement";
import { Showcase } from "@/components/yovu/Showcase";
import { TestimonialsQuote } from "@/components/yovu/TestimonialsQuote";
import { FAQ } from "@/components/yovu/FAQ";
import { FinalCTAScale } from "@/components/yovu/FinalCTAScale";
import { Footer } from "@/components/yovu/Footer";

function HomePage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <Hero />
      <LogoCarousel />
      <Capabilities />
      <Statement />
      <Showcase />
      <TestimonialsQuote />
      <FinalCTAScale />
      <FAQ className="pt-12 lg:pt-16" />
      <Footer />
    </main>
  );
}

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
  component: HomePage,
});
