import { CTASection } from "@/components/ui/cta-with-rectangle";

export function FinalCTA() {
  return (
    <div id="demo">
      <CTASection
        
        title="See How YOVU Works."
        description="Book a 30-minute conversation with our experts and see how our integration with Applied Epic can help your insurance brokerage save real time and money."
        action={{ text: "Schedule a Call", href: "#", variant: "default" }}
        withGlow
      />
    </div>
  );
}
