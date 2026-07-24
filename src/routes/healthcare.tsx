import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/yovu/Nav";
import { Footer } from "@/components/yovu/Footer";
import { Hero } from "@/components/yovu/Hero";
import { Capabilities, type Category } from "@/components/yovu/Capabilities";
import { Statement } from "@/components/yovu/Statement";
import { ZLayout, type ZLayoutItem } from "@/components/yovu/ZLayout";
import { Showcase, type Slide, forestStream, mountainRoad, manIpad } from "@/components/yovu/Showcase";
import { AboutTestimonials } from "@/components/yovu/AboutTestimonials";
import { FAQ } from "@/components/yovu/FAQ";
import { ScaleCallout } from "@/components/yovu/ScaleCallout";
import { CallControl } from "@/components/yovu/animations/CallControl";
import { DeviceHandoff } from "@/components/yovu/animations/DeviceHandoff";
import { CallRecording } from "@/components/yovu/animations/CallRecording";
import { ReportingDashboard } from "@/components/yovu/animations/ReportingDashboard";
import { ThreeWayCall } from "@/components/yovu/animations/ThreeWayCall";
import { GuidedConversation } from "@/components/yovu/animations/GuidedConversation";
import zImg1 from "@/assets/imagery/healthcare-worker-on-the-phone.webp";
import zImg2 from "@/assets/imagery/nurse-smiling.webp";
import zImg3 from "@/assets/imagery/doctor-with-young-patient.webp";
import {
  ChatToCall,
  AvailabilityRouting,
  QueueCallback,
} from "@/components/yovu/communicate/CommunicateCardVisuals";

const cta = { label: "Learn more", href: "#demo" };

const healthcareCategories: Category[] = [
  {
    id: "communicate",
    label: "Communicate",
    items: [
      {
        title: "Business phone system",
        copy: "Reliable cloud communications for your whole practice, with click-to-call, warm transfers, and advanced call management across the front desk and every department.",
        cta,
        media: <CallControl />,
      },
      {
        title: "Intelligent call routing",
        copy: "Send every patient to the right person using custom answering rules, personalized ring sequences, and real-time staff availability.",
        cta,
        media: <AvailabilityRouting />,
      },
      {
        title: "Work from anywhere",
        copy: "Take patient calls securely from the front desk, the exam room, or home. Desktop, mobile, and desk phones stay in sync wherever your team is.",
        cta,
        media: <DeviceHandoff />,
      },
    ],
  },
  {
    id: "capture",
    label: "Capture",
    items: [
      {
        title: "Long-term call recording",
        copy: "Securely record and retain calls for quality, training, and dispute resolution, so what was said and agreed is always on the record.",
        cta,
        media: <CallRecording />,
      },
      {
        title: "Secure chat & SMS",
        copy: "Send appointment reminders and follow-ups by text from a secure business line, keeping personal numbers private and every message in one place.",
        cta,
        media: <ChatToCall />,
      },
      {
        title: "Queue callback",
        copy: "Put patients in control of their time with clear wait-time updates and callback requests, so no one is stuck on hold.",
        cta,
        media: <QueueCallback />,
      },
    ],
  },
  {
    id: "coach",
    label: "Coach",
    items: [
      {
        title: "Reporting & insights",
        copy: "Understand call volume, wait times, and staffing needs with customizable dashboards and reports across your practice.",
        cta,
        media: <ReportingDashboard />,
      },
      {
        title: "Listen, whisper & collaborate",
        copy: "Listen to a live call silently, whisper guidance only your staff member can hear, or join a three-way call when a patient needs a specialist.",
        cta,
        media: <ThreeWayCall framed />,
      },
      {
        title: "Guided conversations",
        tag: "Coming Soon",
        copy: "Real-time prompts guide your team during live calls to ramp up new staff faster and keep every patient interaction consistent.",
        cta,
        media: <GuidedConversation />,
      },
    ],
  },
];

const zImageClass = "aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border";

const introBlocks: ZLayoutItem[] = [
  {
    kicker: "Personal Experience",
    title: "Support & service",
    copy: "Confidently serve your patients using trusted, highly secure lines and customizable live answering rules. Personalize every step of the patient journey with intelligent automated routing and seamless software integrations.",
    media: <img src={zImg1} alt="Healthcare worker on the phone" loading="lazy" decoding="async" className={zImageClass} />,
  },
  {
    kicker: "Consistent Platform",
    title: "Secure connection",
    copy: "Protect your sensitive conversations with a confidential communications platform built for uncompromising reliability. We provide best-in-class call encryption, active fraud mitigation, and robust network security so you can operate with complete peace of mind.",
    media: <img src={zImg2} alt="Nurse smiling" loading="lazy" decoding="async" className={zImageClass} />,
  },
  {
    kicker: "Secure Integrations",
    title: "Patient insights",
    copy: "Make every interaction count by unifying your essential tools to deliver reliable, real-time patient insights to your staff. Seamlessly connect with your wider team of specialists to ensure coordinated care and a frictionless experience for every caller.",
    media: <img src={zImg3} alt="Doctor with a young patient" loading="lazy" decoding="async" className={zImageClass} />,
  },
];

const showcaseSlides: Slide[] = [
  {
    headline: "Built to fit your stack",
    copy: "YOVU connects to the tools your practice already trusts, so your team can spend more time caring for patients and less time switching screens.",
    cta: { label: "Explore features", href: "/communicate" },
    image: forestStream,
    tone: "light",
  },
  {
    headline: "Built for peace of mind",
    copy: "YOVU keeps your patient conversations secure and confidential. We take your data seriously — that's why we're SOC 2 Type 2 Certified and PIPEDA Compliant, with fully encrypted calls.",
    cta: { label: "Learn more", href: "/capture" },
    image: mountainRoad,
    tone: "dark",
  },
  {
    headline: "Built by Canadians",
    copy: "YOVU was built by a team of dedicated Canadians and our local support staff is ready to help 24/7. You'll never have to speak to an off-shore call centre.",
    cta: { label: "Our team", href: "/about-us" },
    image: manIpad,
    tone: "light",
    narrowCopy: true,
  },
];

const faqItems = [
  {
    q: "Is YOVU secure enough for a healthcare practice?",
    a: "Yes. YOVU offers fully encrypted calls, active fraud mitigation, and robust network security, hosted in geographically redundant Canadian data centers. We are SOC 2 Type 2 Certified and PIPEDA Compliant, and your data stays in Canada.",
  },
  {
    q: "Can patients reach the right person without long hold times?",
    a: "Yes. Custom answering rules and ring sequences route each patient to the right person, and queue callback lets patients keep their place in line and be called back instead of waiting on hold.",
  },
  {
    q: "Can staff take calls securely from home or between locations?",
    a: "Yes. YOVU works on desk phones, desktop, web, and the mobile app, so staff can answer patient calls from the front desk, an exam room, or home with the same security and professionalism.",
  },
  {
    q: "Does YOVU support after-hours answering?",
    a: "Yes. Customizable live answering rules and automated routing let you direct after-hours calls to on-call staff, voicemail, or an answering service so patients are never left without a path forward.",
  },
  {
    q: "Is cloud-based VoIP reliable for a clinic?",
    a: "Yes. YOVU is hosted in geographically redundant, highly secure Canadian data centers with backup internet and power, and offers a 99.99% uptime guarantee backed by SLAs.",
  },
  {
    q: "Are there long-distance fees?",
    a: "No. With YOVU you will never pay long-distance fees for calls within Canada and the continental US, with competitive rates for international calling.",
  },
];

function HealthcarePage() {
  return (
    <main className="bg-canvas text-ink">
      <Nav />
      <Hero
        defaultIndustry="Healthcare"
        showAppliedPill={false}
        subcopy="Discover how healthcare practices across Canada are improving the patient experience with our secure, all-in-one communications platform."
      />
      <Capabilities categories={healthcareCategories} />
      <Statement copy="Every conversation is part of care — that's why whether a patient reaches the front desk or a specialist, every call is clear, secure, and dependable." />
      <ZLayout heading="Built for every patient interaction" items={introBlocks} />
      <Showcase slides={showcaseSlides} />
      <AboutTestimonials />
      <FAQ items={faqItems} className="pt-12 lg:pt-16" />
      <ScaleCallout heading="Ready to give every patient a better call experience?" />
      <Footer />
    </main>
  );
}

export const Route = createFileRoute("/healthcare")({
  head: () => ({
    meta: [
      { title: "YOVU — Secure VoIP Phone System for Canadian Healthcare" },
      {
        name: "description",
        content:
          "YOVU is the secure business phone system built for Canadian healthcare practices — encrypted calls, intelligent patient routing, callback queues, and dependable Canadian support.",
      },
      {
        name: "keywords",
        content:
          "healthcare phone system, secure VoIP for clinics, patient call routing, PIPEDA compliant phone system, Canadian healthcare VoIP",
      },
      { property: "og:title", content: "YOVU — Secure VoIP Phone System for Canadian Healthcare" },
      {
        property: "og:description",
        content:
          "Secure, encrypted communications for healthcare practices — intelligent patient routing, callback queues, and 24/7 Canadian support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HealthcarePage,
});
