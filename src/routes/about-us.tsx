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
import teamPhoto from "@/assets/imagery/YOVU Team Photo.webp";
import aaronImg from "@/assets/imagery/Aaron Atkinson.webp";
import marianoImg from "@/assets/imagery/Mariano Saint-Clair.webp";
import seanImg from "@/assets/imagery/Sean Loffhagen.webp";
import blakeImg from "@/assets/imagery/Blake Stephenson.webp";
import glenImg from "@/assets/imagery/Glen McAfee.webp";
import aboutHero from "@/assets/hero/canadian-flag-mountains.webp";

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
  { name: "Aaron Atkinson", title: "President", image: aaronImg },
  { name: "Mariano Saint-Clair", title: "Chief Technology & Operating Officer", image: marianoImg },
  { name: "Sean Loffhagen", title: "Senior Operations & Development Manager", image: seanImg },
  { name: "Blake Stephenson", title: "Infrastructure & Support Manager", image: blakeImg },
  { name: "Glen McAfee", title: "Operations Manager", image: glenImg },
];

function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas aspect-video max-h-screen min-h-[600px]">
      <img
        src={aboutHero}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Left legibility scrim — theme-aware (white in light, dark in dark) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-canvas/30 to-transparent"
      />
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex max-w-xl flex-col text-left">
            <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl">Business phones done right since 2011</h1>
            <p className="mt-6 text-pretty text-lg text-ink/70">
              Fifteen years building the business phone system that brokerages, dealerships,
              healthcare clinics, non-profits, and small businesses use across Canada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipTeam() {
  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">Our leadership team</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="w-full sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="aspect-square w-full rounded-3xl object-cover ring-1 ring-border"
              />
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
        intro={`In 2011, our founders left big telecom with a simple conviction: Canadian businesses deserved better. Phone service should be reliable, support should be responsive, and clients should never feel like just another ticket in the queue.\u00a0\n\nThat belief became YOVU. We built the kind of business phone company we knew should exist — one with modern technology, dependable service, and real people who answer when clients call. Fifteen years later, that is still the standard we hold ourselves to.`}
        items={values}
        media={
          <img
            src={teamPhoto}
            alt="The YOVU team"
            className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border"
          />
        }
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
