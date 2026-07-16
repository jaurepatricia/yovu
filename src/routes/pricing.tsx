import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { PricingTable } from "@/components/yovu/pricing/PricingTable";
import { CompareFeatures } from "@/components/yovu/pricing/CompareFeatures";
import { NonProfitBanner } from "@/components/yovu/pricing/NonProfitBanner";

import { FAQ } from "@/components/yovu/FAQ";

const faqItems = [
  {
    q: "Does YOVU offer non-profit discounts?",
    a: "Yes! We're happy to offer not-for-profit and charitable discounts to registered not-for-profits and charity organizations. Contact our team to get an updated quote with a discount added.",
  },
  {
    q: "Does YOVU offer a free trial?",
    a: "Instead of a free trial, we offer free customized demos of our commercial phone systems with a business specialist, including a free consultation and no-obligation quote. We know that every business, whether it's a small business phone system or a larger enterprise solution, has different needs in a communications platform. Our VoIP solution, designed for commercial phone systems, is developed to offer a customized solution for each of our clients, so the system is ready for their specific needs as soon as it arrives. We believe this personalized approach is better than a cookie-cutter free trial and can show you directly how our system will best suit your business needs, whether it's for commercial phone systems or commercial phone plans.",
  },
  {
    q: "How secure is YOVU?",
    a: "YOVU is geographically redundant across several secure data centers in Canada, with backup Internet connectivity and power protecting our services against outages. Since the system is not hosted at your location, we can be part of your business continuity plan. Calls can be encrypted for increased security and routed to cell phones or other offices if you lose your local internet. Even if you lose your office, you won't lose your calls. There's a reason we are the most secure small business phone system in Canada.",
  },
  {
    q: "Can I add a new YOVU number afterwards?",
    a: "Yes! Contact your account specialist or our support team to have them add new numbers quickly to your account.",
  },
  {
    q: "Can YOVU send faxes?",
    a: "Yes! Our web portal is equipped to send and receive your faxes. It's simple and easy to use. Alternatively, we can provide an analogue ATA adapter that allows your fax machine to connect to our FoIP network.",
  },
  {
    q: "Can I move my VoIP phone to another location?",
    a: "Absolutely! Your desk phone will work anywhere in the world, you just need high-speed internet. Don't forget to update your 911 address with us if you move locations for an extended period. If you're expanding into a new city, we can even provide you with a new local number to match the new area code.",
  },
  {
    q: "Can I use my existing desk phones?",
    a: "Depending on the type of desk phone you have. We are compatible with most newer Polycom, Cisco, Aastra, Snom, Yealink, Mitel and Grandstream phones. If it is a non-VoIP phone, we can use a VoIP ATA adapter. Sometimes, we are able to offer new customers trade-ins for ShoreTel, Cisco, Mitel and other newer systems.",
  },
  {
    q: "Can I customize my YOVU phone number?",
    a: "Yes! We offer a wide selection of local, toll-free and international numbers to meet your business' needs. If you have multiple numbers that need to route within your organization (ex. multiple offices), you can route your numbers to support local and national customers in the same auto-attendant.",
  },
];

function PricingPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <div className="pt-20">
        <PricingTable />
        <CompareFeatures />
        <NonProfitBanner />
        <FAQ items={faqItems} />

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
