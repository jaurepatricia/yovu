import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";

type Bullet = { lead: string; body?: string };
type Section = {
  id: string;
  heading: string;
  intro?: string;
  bullets?: Bullet[];
  paragraphs?: string[];
};

const sections: Section[] = [
  {
    id: "introduction",
    heading: "Introduction",
    paragraphs: [
      "YOVU Office Phone is committed to providing accessible telecommunications services to all Canadians, including persons with disabilities, in accordance with Canadian Radio-television and Telecommunications Commission (CRTC) regulations. While we have always maintained an all-encompassing inclusion methodology, this Accessibility Plan allows all branches of our business to review and ensure the equality we provide. This plan outlines our strategies to guarantee equal access to our products and services, reflecting our dedication to addressing every individual accessibility need with respect, care, and autonomy.",
    ],
  },
  {
    id: "areas",
    heading: "Areas of Consideration",
    intro: "We evaluate our accessibility practices across the following key areas:",
    bullets: [
      { lead: "Employment" },
      { lead: "The built environment" },
      { lead: "Information and communication technologies" },
      { lead: "Communication other than information and communication technologies" },
      { lead: "The procurement of goods, services, and facilities" },
      { lead: "The design and delivery of programs and services" },
      { lead: "Transportation" },
    ],
  },
  {
    id: "policy",
    heading: "Accessibility Policy",
    paragraphs: [
      "YOVU Office Phone strives to identify and remove barriers to accessibility in our services and facilities to remain fully compliant with CRTC policies. Our company ensures that all employees receive proper training on accessibility standards and procedures. Any barriers or accessibility issues will be reviewed by our Office Coordinator, Maggie Brown, and remediated within a maximum period of 30 days.",
    ],
  },
  {
    id: "communication",
    heading: "Communication and Outreach",
    paragraphs: [
      "We provide accessible formats and communication support for individuals with disabilities upon request. Information about our accessibility services and contact details for inquiries will remain readily available on our website. Maggie Brown is responsible for ensuring that this publicly available information is accurate and up to date.",
    ],
  },
  {
    id: "customer-service",
    heading: "Customer Service",
    paragraphs: [
      "We deliver accessible customer service through multiple channels, including phone and email, ensuring individuals with disabilities can easily access support. Our customer service representatives receive specialized training on how to interact with customers with various disabilities and how to accommodate their needs effectively. We review and renew this training on an annual basis.",
    ],
  },
  {
    id: "product-service",
    heading: "Product and Service Accessibility",
    paragraphs: [
      "YOVU Office Phone makes every effort to deliver telecommunications products and services in an accessible manner. We regularly review our current offerings to identify and address any barriers. When developing new products and services, we consider all possible factors to prevent foreseeable accessibility issues before they occur.",
    ],
  },
  {
    id: "physical-space",
    heading: "Physical Space Accessibility",
    paragraphs: [
      "Our physical office space in St. Thomas, Ontario, is designed and maintained to be highly accessible to individuals with disabilities. We strictly comply with all applicable building codes and accessibility standards to ensure a welcoming environment for everyone.",
    ],
  },
  {
    id: "feedback",
    heading: "Feedback Mechanism",
    paragraphs: [
      "We welcome customers to report accessibility issues or provide suggestions for improvement through various communication channels. All feedback is reviewed and addressed promptly by Maggie Brown, and appropriate measures will be taken to improve accessibility based on your input. Information received is kept strictly confidential and handled in accordance with the Personal Information Protection and Electronic Documents Act and the Privacy Act.",
      "Contact methods include:",
    ],
    bullets: [
      { lead: "Direct phone line", body: "at 519-850-5103." },
      { lead: "Email", body: "at accessibility.reports@yovu.com." },
      { lead: "Anonymous web submissions", body: "via our accessibility portal." },
    ],
  },
  {
    id: "compliance",
    heading: "Compliance Monitoring and Reporting",
    paragraphs: [
      "YOVU Office Phone commits to regularly monitoring our compliance with the accessibility standards and regulations set forth by the CRTC. We review and report on any accessibility issues that arise during the year alongside the specific remedies implemented to solve them.",
    ],
  },
  {
    id: "consultations",
    heading: "Consultations",
    paragraphs: [
      "This plan and its related policies were created through verbal consultations with YOVU Office Phone staff and current customers who have visible or non-visible disabilities. Based on their personal experiences, no current barriers were identified, but participants provided valuable recommendations to ensure our services remain barrier-free moving forward.",
    ],
  },
  {
    id: "review-dates",
    heading: "Plan Review Dates",
    bullets: [
      { lead: "Date of Last Review:", body: "May 31, 2025." },
      { lead: "Next Scheduled Review:", body: "May 31, 2027." },
    ],
  },
];

function AccessibilityPlanPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Nav />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-16 text-center lg:pt-56 lg:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Accessibility Plan
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70">
          How YOVU Office Phone identifies, removes, and prevents barriers to
          accessibility across our services, workplace, and communications.
        </p>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
        <div className="space-y-14">
          {sections.map((s) => (
            <article key={s.id}>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {s.heading}
              </h2>

              {s.intro && (
                <p className="mt-4 text-base text-ink/75 md:text-lg">
                  {s.intro}
                </p>
              )}

              {s.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="mt-4 text-base leading-relaxed text-ink/75 md:text-lg"
                >
                  {p}
                </p>
              ))}

              {s.bullets && (
                <ul className="mt-6 space-y-4">
                  {s.bullets.map((b) => (
                    <li
                      key={b.lead}
                      className="relative pl-6 text-base leading-relaxed text-ink/75 md:text-lg"
                    >
                      <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-ink/40" />
                      <span className="font-semibold text-ink">{b.lead}</span>
                      {b.body ? ` ${b.body}` : null}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/accessibility-plan")({
  head: () => ({
    meta: [
      { title: "Accessibility Plan — YOVU Office Phone" },
      {
        name: "description",
        content:
          "YOVU Office Phone's Accessibility Plan: how we identify, remove, and prevent barriers to accessibility across our services, workplace, and communications.",
      },
      { property: "og:title", content: "Accessibility Plan — YOVU Office Phone" },
      {
        property: "og:description",
        content:
          "Our commitment to accessible telecommunications for all Canadians, in line with CRTC regulations.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AccessibilityPlanPage,
});
