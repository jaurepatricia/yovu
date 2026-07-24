import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import whispyClouds from "@/assets/hero/whispy clouds.webp";

const cards = [
  {
    title: "Online portal",
    copy: "Let employees manage their own extensions and settings via a secure dashboard.",
  },
  {
    title: "Drag-and-drop IVR",
    copy: "Visually build automated menus to guide clients to the right department.",
  },
  {
    title: "Smart routing",
    copy: "Route calls intelligently based on business hours or team availability.",
  },
  {
    title: "Call handling",
    copy: "Easily control custom greetings, voicemail timers, and missed call actions.",
  },
  {
    title: "Call queues",
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
      {/* Parallax sky background, softened behind the card */}
      <motion.img
        src={whispyClouds}
        alt=""
        aria-hidden="true"
        style={{ scale, y }}
        className="absolute inset-0 h-full w-full object-cover blur"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-white/30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="rounded-3xl bg-white px-6 py-16 shadow-2xl shadow-black/10 md:px-12 md:py-20 lg:px-16">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">The enterprise cloud phone</h2>
            <p className="mt-5 text-pretty text-lg text-ink/70">
              Enterprise-grade control over every call, queue, and conversation, built for
              established brokerages that run on their phones.
            </p>
          </div>

          {/* Feature grid */}
          <div className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              >
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-pretty text-base leading-relaxed text-ink/70">
                  {card.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
