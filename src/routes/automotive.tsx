import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { Hero } from "@/components/yovu/Hero";
import { LogoCarousel, type Logo } from "@/components/yovu/LogoCarousel";
import { Capabilities, defaultCategories, type Category, type Item } from "@/components/yovu/Capabilities";
import { Statement } from "@/components/yovu/Statement";
import { ZLayout, type ZLayoutItem } from "@/components/yovu/ZLayout";
import { Showcase, type Slide, forestStream, mountainRoad, manIpad } from "@/components/yovu/Showcase";
import { AboutTestimonials } from "@/components/yovu/AboutTestimonials";
import { FAQ } from "@/components/yovu/FAQ";
import { ScaleCallout } from "@/components/yovu/ScaleCallout";
import { ReportingDashboard } from "@/components/yovu/animations/ReportingDashboard";
import { VanityNumberPromo } from "@/components/yovu/automotive/VanityNumberPromo";
import acura from "@/assets/automotive logos/Acura.png";
import chevrolet from "@/assets/automotive logos/Chevrolet.png";
import gm from "@/assets/automotive logos/General-Motors.png";
import genesis from "@/assets/automotive logos/Genesis.jpg";
import lexus from "@/assets/automotive logos/Lexus.png";
import mercedes from "@/assets/automotive logos/Mercedes-Benz.png";
import volkswagen from "@/assets/automotive logos/Volkswagen.png";
import chrysler from "@/assets/automotive logos/chrysler.png";
import dodge from "@/assets/automotive logos/dodge.png";
import ford from "@/assets/automotive logos/ford.png";
import honda from "@/assets/automotive logos/honda.png";
import hyundai from "@/assets/automotive logos/hyundai.png";
import jeep from "@/assets/automotive logos/jeep.png";
import nissan from "@/assets/automotive logos/nissan.png";
import toyota from "@/assets/automotive logos/toyota.png";

const carLogos: Logo[] = [
  { name: "Toyota", src: toyota },
  { name: "Honda", src: honda },
  { name: "Ford", src: ford },
  { name: "Chevrolet", src: chevrolet },
  { name: "General Motors", src: gm },
  { name: "Nissan", src: nissan },
  { name: "Hyundai", src: hyundai },
  { name: "Jeep", src: jeep },
  { name: "Dodge", src: dodge },
  { name: "Chrysler", src: chrysler },
  { name: "Volkswagen", src: volkswagen },
  { name: "Mercedes-Benz", src: mercedes },
  { name: "Lexus", src: lexus },
  { name: "Acura", src: acura },
  { name: "Genesis", src: genesis },
];

// Automotive copy overrides for the "Explore Key Features" tabs, keyed by the
// original (insurance) card title.
const featureOverrides: Record<string, Partial<Item>> = {
  "Business Phone System": {
    copy: "Reliable cloud communications for modern dealership teams, equipped with click-to-call, warm transfers, and advanced call management.",
  },
  "Insurance Integrations": {
    title: "Targeted Marketing Solutions",
    copy: "Dedicated phone numbers for specific advertising campaigns to track dialed-number statistics and monitor campaign success.",
    cta: { label: "Learn More", href: "#demo" },
    media: <VanityNumberPromo />,
  },
  "Automatic Logging": {
    copy: "Recordings, summaries, and call data automatically attached to customer records in your dealership's system.",
  },
  "Long Term Call Recording": {
    copy: "Reduce customer conflict and protect every quote with secure playback and long-term retention. Import your past recordings straight to YOVU.",
    cta: { label: "Learn More", href: "#demo" },
  },
  "Transcription & Tailored AI Summaries": {
    copy: "Get transcripts and AI summaries tailored to your dealership, capturing the exact key points, sentiment, and follow-up tasks from every call.",
    cta: { label: "Learn More", href: "#demo" },
  },
  "Guided Conversations": {
    copy: "Real-time prompts guide your team during live calls to ramp up new hires faster and keep documentation consistent across departments.",
  },
  "Performance Insights": {
    title: "Department based Reporting",
    copy: "Review analytics and progress reports for individual Sales teams, Service Department, and Parts Department separately.",
    media: <ReportingDashboard />,
  },
};

const autoCategories: Category[] = defaultCategories.map((cat) => ({
  ...cat,
  items: cat.items.map((it) => ({ ...it, ...(featureOverrides[it.title] ?? {}) })),
}));

const departmentBlocks: ZLayoutItem[] = [
  {
    kicker: "Sales",
    title: "Sell from anywhere on the lot",
    copy: "Review analytics and progress reports for individual sales teams. Answer sales leads from your vehicle lot or anywhere across the dealership. Text and follow up with prospects direct from mobile or webphone.",
    media: <ZPlaceholder />,
  },
  {
    kicker: "Service",
    title: "Keep the service lane moving",
    copy: "Dashboards provide insights to peak hours and more efficient service advisor staffing. Book service appointments from anywhere. Call recording reduces customer conflict by ensuring quoting and pricing is accurate and approved.",
    media: <ZPlaceholder />,
  },
  {
    kicker: "Parts",
    title: "Every order on the record",
    copy: "Track calls and orders seamlessly with the added layer of protection. Eliminate discrepancies and enforce vendor accountability through call recording.",
    media: <ZPlaceholder />,
  },
];

const autoSlides: Slide[] = [
  {
    headline: "Built to fit your stack",
    copy: "YOVU connects to the tools your dealership already trusts, so your team can spend more time with customers and closing deals.",
    cta: { label: "Explore Features", href: "/communicate" },
    image: forestStream,
    tone: "light",
  },
  {
    headline: "Built for the long road",
    copy: "YOVU keeps your call recordings to protect every quote, price, and order. We take your data seriously — that's why we're also SOC 2 Type 2 Certified and PIPEDA Compliant.",
    cta: { label: "Learn More", href: "/capture" },
    image: mountainRoad,
    tone: "dark",
  },
  {
    headline: "Built by Canadians",
    copy: "YOVU was built by a team of dedicated Canadians and our local support staff is ready to help 24/7. You'll never have to speak to an off-shore call centre.",
    cta: { label: "Our Team", href: "/about-us" },
    image: manIpad,
    tone: "light",
    narrowCopy: true,
  },
];

const faqItems = [
  {
    q: "Is YOVU a full phone system for dealerships?",
    a: "Yes. YOVU is a full cloud phone system that handles voice and text, queues, transfers, and conferencing across your sales, service, and parts departments from one platform.",
  },
  {
    q: "Can my team take calls from anywhere on the lot?",
    a: "Yes. YOVU works on desk phones, desktop, web, and the mobile app, so your team can answer leads and service calls from the showroom, the lot, or the service drive without missing a customer.",
  },
  {
    q: "How does call recording help my dealership?",
    a: "Recordings protect every quote and order by keeping an accurate record of what was said and approved, which reduces customer conflict and helps hold vendors accountable.",
  },
  {
    q: "Can I track which ads are driving phone calls?",
    a: "Yes. You can assign dedicated phone numbers to specific advertising campaigns and track dialed-number statistics to see which campaigns are driving calls and results.",
  },
  {
    q: "Is cloud-based VoIP reliable and secure?",
    a: "Yes. YOVU is hosted in geographically redundant, highly secure Canadian data centers with backup internet and power, a 99.99% uptime guarantee, and the option for fully encrypted calls.",
  },
  {
    q: "Are there long-distance fees?",
    a: "No. With YOVU you will never pay long-distance fees for calls within Canada and the continental US, with competitive rates for international calling.",
  },
];

function ZPlaceholder() {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-surface ring-1 ring-border">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/25">
        Image placeholder
      </span>
    </div>
  );
}

function AutomotivePage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <Hero
        defaultIndustry="Automotive"
        showAppliedPill={false}
        subcopy="Discover how dealerships across Canada are improving efficiency with our all-in-one unified communications platform."
      />
      <LogoCarousel logos={carLogos} solidWhite durationSeconds={100} />
      <Capabilities categories={autoCategories} />
      <Statement copy="Every conversation moves a deal forward — that's why whether your team is on the lot, at the service desk, or in parts, every call is clear, tracked, and dependable." />
      <ZLayout heading="One platform for your whole dealership" items={departmentBlocks} />
      <Showcase slides={autoSlides} />
      <AboutTestimonials />
      <FAQ items={faqItems} className="pt-12 lg:pt-16" />
      <ScaleCallout heading="Ready to connect every department at your dealership?" />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/automotive")({
  head: () => ({
    meta: [
      { title: "YOVU — VoIP Phone System for Canadian Car Dealerships" },
      {
        name: "description",
        content:
          "YOVU is the business phone system built for Canadian automotive dealerships — connect sales, service, and parts with call recording, campaign tracking, and dependable Canadian support.",
      },
      {
        name: "keywords",
        content:
          "dealership phone system, VoIP for car dealerships, automotive business phone, call tracking for dealerships, Canadian dealership VoIP",
      },
      { property: "og:title", content: "YOVU — VoIP Phone System for Canadian Car Dealerships" },
      {
        property: "og:description",
        content:
          "One communications platform for sales, service, and parts — call recording, campaign tracking, and 24/7 Canadian support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AutomotivePage,
});
