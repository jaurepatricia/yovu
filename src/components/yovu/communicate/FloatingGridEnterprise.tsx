import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FloatingCard } from "@/components/ui/floating-card";
import blueSky from "@/assets/hero/Blue Sky with Clouds.webp";

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
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden">
      {/* Parallax sky background */}
      <motion.img
        src={blueSky}
        alt=""
        aria-hidden="true"
        style={{ scale, y }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
        <div className="mb-14 text-center">
          <h2
            className="font-display text-4xl font-bold tracking-tight text-[#0b1733] md:text-5xl"
            style={{
              textShadow: "0 0 28px rgba(255,255,255,0.85), 0 0 12px rgba(255,255,255,0.7)",
            }}
          >
            The Enterprise Cloud Phone
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <FloatingCard key={card.title}>
              <div className="h-full rounded-3xl border border-white/50 bg-white/35 p-7 shadow-xl shadow-black/10 backdrop-blur-xl backdrop-saturate-150">
                <h3 className="font-display text-xl font-bold tracking-tight text-[#0b1733] md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-pretty text-[#0b1733]/75">{card.copy}</p>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
