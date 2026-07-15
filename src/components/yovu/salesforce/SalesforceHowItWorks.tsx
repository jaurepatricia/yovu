import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import blueSky from "@/assets/hero/Blue Sky with Clouds.webp";

const steps = [
  {
    title: "Connect Your Accounts",
    copy: "Activate YOVU inside of Salesforce to easily link your VoIP phone system with your CRM. This integration is automatically available for any new or existing YOVU client using Salesforce Lightning.",
  },
  {
    title: "Customize Your Setup",
    copy: "Configure your dashboard to perfectly fit your team's workflow by tailoring user profiles and softphones to specific roles. You can also update search fields so your team only sees the most relevant customer data instantly.",
  },
  {
    title: "Call, Control, and Log Instantly",
    copy: "Enjoy a seamless workflow with automated screen pops, one-click calling, and full call controls right inside your CRM. You will save time by capturing call results instantly and reviewing previous recordings directly from the client's account.",
  },
];

export function SalesforceHowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const count = steps.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Parallax: the sky drifts and settles as the section scrolls through.
  const { scrollYProgress: bgProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(bgProgress, [0, 1], [1.3, 1]);
  const y = useTransform(bgProgress, [0, 1], ["-5%", "5%"]);

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(count - 1, Math.max(0, Math.floor(v * count))));
  });

  const goTo = (i: number) => {
    const el = sectionRef.current;
    if (!el || typeof window === "undefined") return;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: elTop + ((i + 0.5) / count) * scrollable, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative my-16 lg:my-24"
      style={{ height: `${count * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Parallax sky background */}
        <motion.img
          src={blueSky}
          alt=""
          aria-hidden="true"
          style={{ scale, y }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Centered white card */}
        <div className="relative z-10 mx-6 w-full max-w-2xl rounded-3xl bg-white p-10 text-center shadow-2xl shadow-black/10 md:p-14">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#0b1733] md:text-4xl">
            How it Works
          </h2>

          <div className="mt-8 flex items-center gap-6 md:gap-10">
            {/* Step numbers rail */}
            <div className="flex shrink-0 flex-col gap-3">
              {steps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to step ${i + 1}`}
                  aria-current={active === i}
                  className={`flex size-10 items-center justify-center rounded-full font-display text-lg font-bold transition-all duration-300 ${
                    active === i
                      ? "bg-signal text-white"
                      : "bg-[#0b1733]/5 text-[#0b1733]/40 hover:text-[#0b1733]/70"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Cycling step content, stacked in one grid cell */}
            <div className="grid flex-1 text-left">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`col-start-1 row-start-1 transition-opacity duration-500 ease-out ${
                    active === i ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <h3 className="font-display text-xl font-bold tracking-tight text-[#0b1733] md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-pretty text-base text-[#0b1733]/70">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
