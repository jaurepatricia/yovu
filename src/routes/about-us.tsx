import { createFileRoute } from "@tanstack/react-router";
import { Compass, ShieldCheck, Lightbulb } from "lucide-react";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { Statement } from "@/components/yovu/Statement";
import { AboutTestimonials } from "@/components/yovu/AboutTestimonials";
import { AboutMap } from "@/components/yovu/AboutMap";
import {
  SectionIntroFeatureGrid,
  type SectionIntroFeatureItem,
} from "@/components/yovu/teams/SectionIntroFeatureGrid";

const values: SectionIntroFeatureItem[] = [
  {
    icon: Compass,
    title: "Authenticity",
    copy: "We show our true commitment to the clients we serve by providing a high-quality product and fostering genuine, transparent connections that help them succeed.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    copy: "We strive to be the team our clients can always depend on, providing a 99.99% platform uptime and 24/7 access to our dedicated, in-house Canadian support team.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    copy: "We embrace innovation, explore new possibilities and continuously seek to drive growth in our business and the businesses of our clients.",
  },
];

const leaders = [
  { name: "Aaron Atkinson", title: "President" },
  { name: "Mariano Saint-Clair", title: "Chief Technology & Operating Officer" },
  { name: "Sean Loffhagen", title: "Senior Operations & Development Manager" },
  { name: "Blake Stephenson", title: "Infrastructure & Support Manager" },
  { name: "Matthew Reid", title: "Sales Manager" },
  { name: "Glen McAfee", title: "Operations Manager" },
];

function AboutHero() {
  return (
    <section className="bg-canvas pb-16 pt-40 lg:pb-24 lg:pt-56">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl">
          Canadian business phones, done right since 2011.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink/70">
          Fifteen years building the business phone system that brokerages, dealerships, healthcare
          clinics, non-profits, and small businesses use across Canada.
        </p>
      </div>
    </section>
  );
}

function LeadershipTeam() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Our Leadership Team
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <div key={leader.name}>
              <div className="aspect-square w-full rounded-3xl bg-surface ring-1 ring-border" />
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                {leader.name}
              </h3>
              <p className="mt-1 text-base text-ink/70">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUsPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <AboutHero />
      <SectionIntroFeatureGrid
        eyebrow="Mission & Values"
        heading="Built Differently"
        intro="In 2011, our founders left big telecom with a simple conviction: Canadian businesses deserved better. Phone service should be reliable, support should be responsive, and clients should never feel like just another ticket in the queue. That belief became YOVU. We built the kind of business phone company we knew should exist — one with modern technology, dependable service, and real people who answer when clients call. Fifteen years later, that is still the standard we hold ourselves to."
        items={values}
      />
      <Statement copy="We know that better conversations lead to real results. We help with the work that comes before and after each call so that professionals can focus on the work that matters most – connecting with people." />
      <LeadershipTeam />
      <AboutMap />
      <AboutTestimonials />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — YOVU" },
      {
        name: "description",
        content:
          "Since 2011, YOVU has built reliable Canadian business phone systems with modern technology, dependable service, and real in-house support.",
      },
      { property: "og:title", content: "About Us — YOVU" },
      {
        property: "og:description",
        content:
          "Fifteen years building the business phone system Canadian brokerages, clinics, dealerships, and small businesses rely on.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutUsPage,
});
