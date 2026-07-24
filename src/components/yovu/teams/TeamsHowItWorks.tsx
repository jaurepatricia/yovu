import { useRef, useState } from "react";
import { Eyebrow } from "@/components/yovu/ui/Eyebrow";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import blueSky from "@/assets/hero/Blue Sky with Clouds.webp";

const steps = [
  {
    title: "Add your Microsoft license",
    copy: "Start by adding a Microsoft common area phone license to your existing Microsoft Teams account. This simple prerequisite ensures your environment is properly equipped to link seamlessly with our phone system.",
  },
  {
    title: "Connect to the YOVU Network",
    copy: "Once licensed, YOVU's integration automatically registers your Microsoft Teams softphone as an active endpoint on our secure network. This bridges the two platforms together behind the scenes without any complicated hardware setup.",
  },
  {
    title: "Make and receive calls anywhere",
    copy: "With the integration live, your communication is completely unified. Any inbound call to a YOVU number can simultaneously ring one or more of your Teams clients, while all your outbound Teams calls will route reliably through YOVU's powerful VoIP network.",
  },
];

export function TeamsHowItWorks() {
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
      style={{ height: `${count * 90}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Parallax sky background */}
        <motion.img
          src={blueSky}
          alt=""
          aria-hidden="true"
          style={{ scale, y }}
          className="absolute inset-0 h-full w-full object-cover blur"
        />
        {/* Soft white wash to lighten and recede the clouds behind the card */}
        <div aria-hidden="true" className="absolute inset-0 bg-white/30" />

        {/* Card matches the content width of the sections above */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-20 text-center shadow-2xl shadow-black/10 md:px-12 md:py-24 lg:py-28">
            <Eyebrow>
              How it Works
            </Eyebrow>

            {/* Horizontal stepper — connector lines fill with scroll */}
            <div className="mt-14 flex items-center justify-center">
              {steps.map((_, i) => (
                <div key={i} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to step ${i + 1}`}
                    aria-current={active === i}
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 md:size-10 ${
                      i <= active ? "bg-signal text-white" : "bg-[#0b1733]/[0.06] text-[#0b1733]/40"
                    }`}
                  >
                    {i + 1}
                  </button>
                  {i < count - 1 && (
                    <Connector progress={scrollYProgress} index={i} count={count} />
                  )}
                </div>
              ))}
            </div>

            {/* Cycling step content, stacked in one grid cell */}
            <div className="mt-14 grid">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`col-start-1 row-start-1 transition-opacity duration-500 ease-out ${
                    active === i ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#0b1733] md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-[#0b1733]/70 md:text-lg">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#demo"
              className="mt-14 inline-flex items-center justify-center rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
            >
              Speak to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Thin line between step numbers that fills left-to-right during its step's scroll band. */
function Connector({
  progress,
  index,
  count,
}: {
  progress: MotionValue<number>;
  index: number;
  count: number;
}) {
  const scaleX = useTransform(progress, [index / count, (index + 1) / count], [0, 1]);
  return (
    <div className="relative mx-3 h-px w-32 overflow-hidden bg-[#0b1733]/10 md:mx-4 md:w-56">
      <motion.span style={{ scaleX }} className="absolute inset-0 origin-left bg-signal" />
    </div>
  );
}
