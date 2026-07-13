import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FloatingCard } from "@/components/ui/floating-card";
import whispyClouds from "@/assets/hero/whispy clouds.webp";

const cards = [
  {
    title: "Online Portal",
    copy: "Let employees manage their own extensions and settings via a secure dashboard.",
  },
  {
    title: "Drag-and-Drop IVR",
    copy: "Visually build automated menus to guide clients to the right department.",
  },
  {
    title: "Smart Routing",
    copy: "Route calls intelligently based on business hours or team availability.",
  },
  {
    title: "Call Handling",
    copy: "Easily control custom greetings, voicemail timers, and missed call actions.",
  },
  {
    title: "Call Queues",
    copy: "Smoothly manage high call volumes by routing callers to the next available agent.",
  },
  {
    title: "Omnichannel SMS",
    copy: "Enable text messaging in your queues for faster, text-based customer support.",
  },
];

export function FloatingGridEnterprise() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Faux-3D parallax: the sky zooms out from the centre as the section scrolls.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.35, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative my-16 flex min-h-screen items-center overflow-hidden lg:my-24"
    >
      {/* Parallax sky background */}
      <motion.img
        src={whispyClouds}
        alt=""
        aria-hidden="true"
        style={{ scale, y }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            The Enterprise Cloud Phone
          </h2>
        </div>

        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <FloatingCard key={card.title}>
              <div className="flex h-full min-h-[18rem] flex-col justify-center rounded-3xl border border-white/30 bg-[#0b1733]/45 p-7 ring-1 ring-white/10 backdrop-blur-xl backdrop-saturate-150">
                <h3 className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-pretty text-white/80">{card.copy}</p>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
