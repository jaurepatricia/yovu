import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Hero } from "@/components/yovu/Hero";
import { LogoCarousel } from "@/components/yovu/LogoCarousel";
import { Capabilities } from "@/components/yovu/Capabilities";
import { Statement } from "@/components/yovu/Statement";
import { Showcase } from "@/components/yovu/Showcase";
import { TestimonialsV2 } from "@/components/yovu/TestimonialsV2";
import { FAQ } from "@/components/yovu/FAQ";
import { ScaleCallout } from "@/components/yovu/ScaleCallout";
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
      <TestimonialsV2 />
      <FAQ className="pt-12 lg:pt-16" />
      <ScaleCallout />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YOVU — VoIP Phone System for Canadian Insurance Brokerages" },
      {
        name: "description",
        content:
          "YOVU is the enterprise VoIP phone system built for Canadian P&C insurance brokerages — embedded in Applied Epic, with AI call summaries, automatic call logging, and SOC 2 security.",
      },
      { name: "keywords", content: "insurance phone system, VoIP for insurance brokerages, Applied Epic phone integration, Canadian business VoIP, brokerage communications" },
      { property: "og:title", content: "YOVU — VoIP Phone System for Canadian Insurance Brokerages" },
      {
        property: "og:description",
        content:
          "Enterprise VoIP built for Canadian insurance brokerages — deeply integrated with Applied Epic, with AI call summaries, auto-logging, and SOC 2 security.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
