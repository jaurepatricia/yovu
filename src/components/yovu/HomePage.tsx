import { Nav } from "@/components/yovu/Nav";
import { Hero } from "@/components/yovu/Hero";
import { LogoCarousel } from "@/components/yovu/LogoCarousel";
import { Capabilities } from "@/components/yovu/Capabilities";
import { Statement } from "@/components/yovu/Statement";
import { Features } from "@/components/yovu/Features";
import { Integrations } from "@/components/yovu/Integrations";
import { Security } from "@/components/yovu/Security";
import { Canada } from "@/components/yovu/Canada";
import { Testimonials } from "@/components/yovu/Testimonials";
import { FAQ } from "@/components/yovu/FAQ";
import { FinalCTA } from "@/components/yovu/FinalCTA";
import { Footer } from "@/components/yovu/Footer";

export function HomePage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <Hero />
      <LogoCarousel />
      <Capabilities />
      <Statement />
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
