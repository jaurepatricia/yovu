import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Hero } from "@/components/yovu/Hero";
import { LogoCarousel } from "@/components/yovu/LogoCarousel";
import { CccOverview } from "@/components/yovu/CccOverview";
import { Statement } from "@/components/yovu/Statement";
import { Showcase } from "@/components/yovu/Showcase";
import { Testimonials } from "@/components/yovu/Testimonials";
import { FAQ } from "@/components/yovu/FAQ";
import { ScaleCallout } from "@/components/yovu/ScaleCallout";
import { Footer } from "@/components/yovu/Footer";

// /v2 is a standalone snapshot of the homepage, kept as an alternate version.
function HomePageV2() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <Hero />
      <LogoCarousel />
      <CccOverview />
      <Statement />
      <Showcase />
      <Testimonials />
      <FAQ className="pt-12 lg:pt-16" />
      <ScaleCallout />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "YOVU — Enterprise VoIP for Canadian P&C Brokerages (v2)" },
      {
        name: "description",
        content:
          "YOVU v2 — alternate homepage variant. Enterprise VoIP for Canadian P&C brokerages, embedded in Applied Epic.",
      },
      { name: "robots", content: "noindex,nofollow" },
      { property: "og:title", content: "YOVU — v2" },
      {
        property: "og:description",
        content: "Alternate homepage variant.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePageV2,
});
