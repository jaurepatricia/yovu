import { Nav } from "@/components/yovu/Nav";
import { Hero } from "@/components/yovu/Hero";

import { Capabilities } from "@/components/yovu/Capabilities";
import { Statement } from "@/components/yovu/Statement";
import { Features } from "@/components/yovu/Features";
import { Integrations } from "@/components/yovu/Integrations";
import { Security } from "@/components/yovu/Security";
import { Canada } from "@/components/yovu/Canada";
import { CommunicateShowcase } from "@/components/yovu/communicate/CommunicateShowcase";
import { CommunicateCapabilities } from "@/components/yovu/communicate/CommunicateCapabilities";
import { CommunicateIntegrations } from "@/components/yovu/communicate/CommunicateIntegrations";
import { TestimonialsQuote } from "@/components/yovu/TestimonialsQuote";
import { Testimonials } from "@/components/yovu/Testimonials";


import { FinalCTA } from "@/components/yovu/FinalCTA";
import { Footer } from "@/components/yovu/Footer";

export function HomePage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <Hero />
      <CommunicateShowcase />
      <CommunicateCapabilities />
      <CommunicateIntegrations />
      
      <Capabilities />
      <Statement />
      <Features />
      <Integrations />
      <Security />
      <Canada />
      <TestimonialsQuote />
      <Testimonials />
      
      
      <FinalCTA />
      <Footer />
    </main>
  );
}
