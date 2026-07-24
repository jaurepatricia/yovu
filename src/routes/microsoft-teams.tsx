import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/yovu/ui/Button";
import { motion } from "motion/react";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { Statement } from "@/components/yovu/Statement";
import { FAQ } from "@/components/yovu/FAQ";
import { ZLayout, type ZLayoutItem } from "@/components/yovu/ZLayout";
import { TeamsHowItWorks } from "@/components/yovu/teams/TeamsHowItWorks";
import { SectionIntroFeatureGrid } from "@/components/yovu/teams/SectionIntroFeatureGrid";
import developersWorking from "@/assets/imagery/developers working together.webp";
import mountainPeak from "@/assets/hero/light-mountain-peak.webp";
import mountainPeakMask from "@/assets/hero/light-mountain-peak-mask.webp";
import mountainPeakDark from "@/assets/hero/dark-mountain-peak.webp";
import mountainPeakMaskDark from "@/assets/hero/dark-mountain-peak-mask.webp";
import teamsMeeting from "@/assets/hero/microsoft-teams-meeting.webp";
import teamsAppMockup from "@/assets/imagery/microsoft-teams-app-mockup.webp";
import teamsCalendarMockup from "@/assets/imagery/microsoft-teams-calendar-meeting-mockup.webp";
import manOnLaptop from "@/assets/imagery/man-working-on-laptop.webp";

const zImageClass = "aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border";

const teamsBenefitsItems: ZLayoutItem[] = [
  {
    kicker: "COMMUNICATION",
    title: "Communicate effectively without leaving Teams",
    copy: "Make and receive all your business calls directly within the Microsoft Teams interface. Unify your communication channels into a single platform so your team can collaborate without switching contexts.",
    media: (
      <img
        src={teamsAppMockup}
        alt="The YOVU calling experience inside the Microsoft Teams mobile app"
        loading="lazy"
        decoding="async"
        className={zImageClass}
      />
    ),
  },
  {
    kicker: "MOBILITY",
    title: "Work from anywhere, on any device",
    copy: "Use YOVU and Microsoft Teams on any PC, Mac, or mobile device to keep your team connected on the go. Stay fully accessible and responsive no matter where your workday takes you.",
    media: (
      <img
        src={teamsCalendarMockup}
        alt="A scheduled Microsoft Teams meeting on the calendar"
        loading="lazy"
        decoding="async"
        className={zImageClass}
      />
    ),
  },
  {
    kicker: "SECURITY",
    title: "Protect your data with built-in security",
    copy: "Enjoy enterprise-grade, end-to-end encryption for all your signaling and media. You maintain complete administrative control, including the ability to revoke Microsoft 365 tenant access securely at any time.",
    media: (
      <img
        src={manOnLaptop}
        alt="Professional working securely on a laptop"
        loading="lazy"
        decoding="async"
        className={zImageClass}
      />
    ),
  },
];

const faqItems = [
  {
    q: "How does the YOVU and Microsoft Teams integration improve business communication?",
    a: "The integration brings all your communication tools into one shared workspace. It allows your team to make and receive calls, chat, host meetings, share files, and work with relevant business applications without switching between different programs.",
  },
  {
    q: "Can I use the YOVU Teams integration on my mobile device?",
    a: "Yes, you can make and receive calls on any web-connected device. The Microsoft Teams application can be installed on PCs, Macs, or mobile devices, allowing your team to leverage YOVU Office Phone functionality from anywhere.",
  },
  {
    q: "Is the YOVU Microsoft Teams integration secure?",
    a: "Yes, enterprise-grade security and end-to-end encryption for both signalling and media are built into the integration. The YOVU Teams connector also manages SSL certificates for each customer and provides fine-grained access control, including the ability to revoke access to the Microsoft 365 tenant at any time.",
  },
  {
    q: "How does integrating YOVU with Microsoft Teams impact IT and support costs?",
    a: "By reducing the number of different applications users need to get their work done, the YOVU Teams connector simplifies IT management in the cloud. This flexibility helps lower support costs while increasing overall working efficiency and productivity.",
  },
  {
    q: "Does the integration help with team collaboration?",
    a: "Yes, the YOVU Teams Connector increases productivity and allows for real-time collaboration. The integration brings Microsoft Teams to life with voice-enabled collaboration, which is a growing asset for company inclusion and helps businesses achieve their goals faster.",
  },
];

function HeroCopy({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`flex max-w-xl flex-col ${centered ? "items-center text-center" : "text-left"}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">Integrations</p>
      <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink md:text-6xl lg:text-7xl">
        Microsoft Teams
      </h1>
      <p className="mt-6 text-pretty text-lg text-ink/70">
        Unify your communications by bringing YOVU&rsquo;s secure business phone directly into
        Microsoft Teams. Boost productivity and simplify your IT with one seamless integration.
      </p>
      <Button href="#demo" className="mt-8 w-fit">
              See it in Action
            </Button>
    </div>
  );
}

function TeamsPanel({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className={`rounded-2xl bg-white/45 p-3 shadow-2xl shadow-black/20 ring-1 ring-white/50 backdrop-blur-md dark:bg-white/10 dark:ring-white/15 ${className ?? ""}`}
    >
      <img
        src={teamsMeeting}
        alt="A YOVU call running inside a Microsoft Teams meeting"
        decoding="async"
        className="block w-full rounded-xl"
      />
    </motion.div>
  );
}

function MicrosoftTeamsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas xl:aspect-video xl:max-h-screen xl:min-h-[640px]">
      {/* Layer 1: mountain peak background (light / dark) */}
      <img
        src={mountainPeak}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover dark:hidden"
      />
      <img
        src={mountainPeakDark}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 z-0 hidden h-full w-full object-cover dark:block"
      />

      {/* Layer 2 (xl+ only): meeting panel tucked behind the peak */}
      <div className="absolute inset-y-0 right-0 z-10 hidden items-center xl:flex">
        <TeamsPanel className="w-[46rem] 2xl:w-[54rem]" />
      </div>

      {/* Layer 3: mountain mask foreground (light / dark) */}
      <img
        src={mountainPeakMask}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover dark:hidden"
      />
      <img
        src={mountainPeakMaskDark}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full object-cover dark:block"
      />

      {/* xl+ layout: copy pinned left */}
      <div className="relative z-30 hidden h-full items-center xl:flex">
        <div className="mx-auto w-full max-w-7xl px-6">
          <HeroCopy />
        </div>
      </div>

      {/* Below xl: stacked — copy on top, panel centered floating above the mountain */}
      <div className="relative z-30 flex flex-col items-center gap-10 px-6 pb-16 pt-36 lg:pt-40 xl:hidden">
        <HeroCopy centered />
        <TeamsPanel className="w-full max-w-md sm:max-w-lg lg:max-w-2xl" />
      </div>
    </section>
  );
}

function MicrosoftTeamsPage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <MicrosoftTeamsHero />
      <ZLayout heading="One shared workspace" items={teamsBenefitsItems} />
      <Statement copy="YOVU's integration brings Microsoft Teams to life, making meetings more personal while boosting real-time collaboration." />
      <TeamsHowItWorks />
      <SectionIntroFeatureGrid
        media={
          <img
            src={developersWorking}
            alt="Developers collaborating together at a workstation"
            loading="lazy"
            decoding="async"
            className={zImageClass}
          />
        }
      />
      <FAQ heading="Frequently Asked Questions" items={faqItems} />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/microsoft-teams")({
  head: () => ({
    meta: [
      { title: "Microsoft Teams Integration — YOVU" },
      {
        name: "description",
        content:
          "Combine your YOVU Business VoIP system with Microsoft Teams to streamline workflows, make and receive calls in Teams, and keep your team connected anywhere.",
      },
      { property: "og:title", content: "Microsoft Teams Integration — YOVU" },
      {
        property: "og:description",
        content:
          "Power your communications by bringing YOVU calling into Microsoft Teams — secure, mobile, and built for collaboration.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MicrosoftTeamsPage,
});
