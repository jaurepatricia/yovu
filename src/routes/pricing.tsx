import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { PricingTable } from "@/components/yovu/pricing/PricingTable";

function PricingPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <div className="pt-20">
        <PricingTable />
      </div>
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Plans & Pricing — YOVU" },
      {
        name: "description",
        content:
          "Simple, scalable plans for insurance brokerages — from core cloud calling to full BMS/CRM integrations and an AI receptionist.",
      },
      { property: "og:title", content: "Plans & Pricing — YOVU" },
      {
        property: "og:description",
        content:
          "Choose the YOVU plan that fits your brokerage, with monthly or annual billing and non-profit discounts.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PricingPage,
});
