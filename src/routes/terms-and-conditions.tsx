import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";

type Section = {
  id: string;
  heading: string;
  paragraphs: ReactNode[];
};

const sections: Section[] = [
  {
    id: "acceptable-use",
    heading: "Acceptable Use",
    paragraphs: [
      "The Customer is responsible for all activity it conducts using the Services. Customer will not use the Services for purposes proscribed by LCA from time to time, including without limitation: illegal or inappropriate purposes; sending spam; perpetration of security breaches; hacking; privacy breaches; fraudulent activity; distribution of viruses or other harmful code; transmission, distribution or storage of any material protected by copyright, trade-mark, trade secret or other intellectual property right without proper authorization or rights, or material that is infringing, obscene, defamatory, fraudulent, discriminatory, or abusive; any unauthorized access, alteration, theft, corruption or destruction of files, data, transmission facilities or equipment. LCA does not routinely monitor the use of the Service for all such uses, but may in its discretion suspend the access of offending users.",
    ],
  },
  {
    id: "support",
    heading: "Support",
    paragraphs: [
      "LCA shall provide support (“Support”) for the YOVU Services on the terms contained herein. Support does not include any enhancements or customizations.",
      "Support is provided between 08:30 – 17:00 Hrs. Eastern time Monday to Friday (excluding statutory and civic holidays) (“Regular Time”).",
      <>
        After-hours emergency support is available 24/7. Details on our after-hours support can be
        found at{" "}
        <a
          href="https://my.yovu.ca/s/article/YOVU-After-Hours-Emergency"
          className="font-medium text-signal underline underline-offset-2 hover:no-underline"
        >
          my.yovu.ca/s/article/YOVU-After-Hours-Emergency
        </a>
        .
      </>,
      "Support will include upgrades from time to time as deemed necessary by LCA, or as LCA provides to its customers generally. Such upgrades will require a maintenance window for a reasonable time for which advance notice will be given.",
      "LCA may charge for Support at its then-current rates for equipment not supplied by LCA, or if LCA equipment (i) has been serviced, installed, altered (hardware or software), replaced or relocated, by any person other than those designated prior by LCA.; (ii) displays defects which are cosmetic in nature and/or are the result of mishandling, abuse, misuse or improper storage or operation, installation or maintenance by any person(s) other than LCA; (iii) has been damaged by any external causes whatsoever including use in conjunction with equipment which is electronically or mechanically incompatible; (iv) has not been used in accordance with the environmental conditions as stipulated by both LCA and the manufacture of the equipment.",
    ],
  },
  {
    id: "dispute-resolution",
    heading: "Dispute Resolution",
    paragraphs: [
      "To resolve disputes which may arise between the parties, any party will notify the other in writing of its intent to escalate to each parties’ President or CEO.",
      "If the issue is not resolved within ten (10) days, then the resolution of the dispute shall be referred to a mediator chosen by the parties. If the parties are unable to agree on a mediator, then either party may apply to a judge of the Ontario Court (General Division), and such judge shall appoint an independent mediator with relevant experience and sufficient qualifications to provide mediation services to the Parties.",
      "If the parties are unable to resolve the dispute with the assistance of the mediator, within fifteen (15) days of the appointment thereof, the dispute shall be settled by arbitration in accordance with the Arbitrations Act (Ontario). If the Customer does not have a Canadian business establishment, the arbitration shall be in accordance with the International Commercial Arbitration Act (Ontario). The award of the arbitration shall be final and binding upon the parties hereto, and enforceable in any court of competent jurisdiction. The venue for any arbitration hereunder shall be London, Ontario.",
      "Nothing in this section shall defer or interfere with the entitlement of either party to obtain injunctive relief.",
    ],
  },
];

function TermsPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Nav />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-40 text-center lg:pb-24 lg:pt-56">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Terms and Conditions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70">
          Here, you will find information regarding the terms and conditions of our services. We
          strive to provide our customers with clear and concise information about our services.
          Please take a moment to review our terms and conditions carefully to ensure a satisfactory
          experience.
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
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-ink/75 md:text-lg">
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — YOVU Office Phone" },
      {
        name: "description",
        content:
          "YOVU Office Phone terms and conditions, covering acceptable use, support, and dispute resolution.",
      },
      { property: "og:title", content: "Terms and Conditions — YOVU Office Phone" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TermsPage,
});
