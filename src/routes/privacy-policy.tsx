import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";

type Bullet = { lead: string; body: string };
type Section = {
  id: string;
  heading: string;
  intro?: string;
  bullets?: Bullet[];
  paragraphs?: string[];
};

const sections: Section[] = [
  {
    id: "use",
    heading: "How We Use Your Personal Data",
    intro: "YOVU Office Phone may use your personal data for the following purposes:",
    bullets: [
      {
        lead: "To provide and maintain our service.",
        body: "This includes monitoring the usage of our platform and ensuring it runs smoothly.",
      },
      {
        lead: "To manage your account.",
        body: "The personal data you provide gives you access to the different functionalities available to registered users.",
      },
      {
        lead: "To fulfill a contract.",
        body: "We use your data for the development, compliance, and undertaking of purchase contracts for products, items, or services you have acquired from us.",
      },
      {
        lead: "To contact you.",
        body: "We may reach out via email, telephone calls, SMS, or push notifications regarding updates, security alerts, or informative communications related to your contracted services.",
      },
      {
        lead: "To provide news and special offers.",
        body: "We may share general information about other goods, services, and events similar to those you have already purchased or inquired about, unless you have opted out.",
      },
      {
        lead: "To manage your requests.",
        body: "We use your information to attend to and manage any inquiries or support tickets you submit to us.",
      },
    ],
  },
  {
    id: "share",
    heading: "When We Share Your Information",
    intro: "We may share your personal information in the following situations:",
    bullets: [
      {
        lead: "With service providers.",
        body: "We may share information with trusted third parties to monitor and analyze the use of our service or to contact you on our behalf.",
      },
      {
        lead: "For business transfers.",
        body: "Your information may be shared or transferred in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of our business.",
      },
      {
        lead: "With affiliates.",
        body: "We may share your information with our parent company, subsidiaries, or joint venture partners, requiring them to honor this Privacy Policy.",
      },
      {
        lead: "With business partners.",
        body: "We may partner with other organizations to offer you certain products, services, or promotions.",
      },
      {
        lead: "With other users.",
        body: "If you share personal information or interact in public areas of our service, that information may be viewed by all users and publicly distributed. If you register through a third-party social media service, your contacts on that platform may see your name, profile, and activity descriptions.",
      },
    ],
  },
  {
    id: "retention",
    heading: "Retention of Your Personal Data",
    paragraphs: [
      "YOVU Office Phone will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.",
      "We also retain usage data for internal analysis. Usage data is generally kept for a shorter period, except when it is used to strengthen security, improve service functionality, or when we are legally obligated to retain it for longer periods.",
    ],
  },
  {
    id: "transfer",
    heading: "Transfer of Your Personal Data",
    paragraphs: [
      "Your information is processed at our operating offices and in any other places where the parties involved in the processing are located. This means your information may be transferred to and maintained on computers located outside of your province, country, or governmental jurisdiction, where data protection laws may differ from those in Ontario or Canada.",
      "Your consent to this Privacy Policy, followed by your submission of such information, represents your agreement to that transfer. We take all steps reasonably necessary to ensure your data is treated securely, and no transfer will take place to an organization or country without adequate controls in place.",
    ],
  },
  {
    id: "disclosure",
    heading: "Disclosure of Your Personal Data",
    intro: "We may disclose your personal data under the following circumstances:",
    bullets: [
      {
        lead: "Business transactions.",
        body: "If we are involved in a merger, acquisition, or asset sale, we will provide notice before your personal data is transferred and becomes subject to a different Privacy Policy.",
      },
      {
        lead: "Law enforcement.",
        body: "We may be required to disclose your data if mandated by law or in response to valid requests by public authorities, such as a court or government agency.",
      },
      {
        lead: "Other legal requirements.",
        body: "We may disclose your data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our property rights, prevent wrongdoing, or protect the personal safety of our users.",
      },
    ],
  },
  {
    id: "security",
    heading: "Security of Your Personal Data",
    paragraphs: [
      "The security of your personal data is important to us. While we strive to use commercially acceptable means to protect your personal information, please remember that no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee its absolute security, but we are committed to safeguarding your data to the best of our ability.",
    ],
  },
];

function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Nav />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-32 pb-12 lg:pt-40">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Use of Personal Data Policy and Disclosure
        </h1>
        <p className="mt-6 text-lg text-ink/70">
          How YOVU Office Phone collects, uses, shares, retains, and safeguards
          your personal information.
        </p>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-6 pb-24 lg:pb-32">
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
                      <span className="font-semibold text-ink">{b.lead}</span>{" "}
                      {b.body}
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

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — YOVU Office Phone" },
      {
        name: "description",
        content:
          "Learn how YOVU Office Phone collects, uses, shares, retains, and protects your personal data.",
      },
      { property: "og:title", content: "Privacy Policy — YOVU Office Phone" },
      {
        property: "og:description",
        content:
          "How YOVU Office Phone handles your personal information, from use and sharing to retention, transfer, disclosure, and security.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPolicyPage,
});
