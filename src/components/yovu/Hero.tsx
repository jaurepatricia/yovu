import { useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { ScrollFrameSequence } from "./ScrollFrameSequence";

const TOTAL_FRAMES = 151;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 0.35], [0, -60]);
  const mockupY = useTransform(scrollYProgress, [0.1, 0.7], [180, -40]);
  const mockupScale = useTransform(scrollYProgress, [0.1, 0.7], [0.92, 1]);
  const mockupOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.2, 0.55], [0, -80]);
  const mountainY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const getFrameSrc = useCallback(
    (i: number) => `/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`,
    [],
  );


  return (
    <section ref={ref} id="top" className="relative">
      <div className="relative min-h-[180vh]">
        {/* Sticky stage */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Mountain video / parallax background */}
          <motion.div
            style={{ y: mountainY }}
            className="absolute inset-0 -top-20 -bottom-20"
          >
            <ScrollFrameSequence
              totalFrames={TOTAL_FRAMES}
              getFrameSrc={getFrameSrc}
              progress={scrollYProgress}
              ariaLabel="Mountain landscape scroll animation"
              className="absolute inset-0 size-full bg-canvas"
            />
            
          </motion.div>

          {/* Headline + copy */}
          <motion.div
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 pt-16 text-center"
          >
            {/* Soft bloom halo behind headline for legibility */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60%] w-[110%] -translate-x-1/2 -translate-y-1/2 backdrop-blur-2xl"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.5) 60%, transparent 80%)",
                maskImage:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.5) 60%, transparent 80%)",
                background:
                  "radial-gradient(ellipse at center, color-mix(in oklab, var(--canvas) 65%, transparent) 0%, color-mix(in oklab, var(--canvas) 35%, transparent) 50%, transparent 80%)",
              }}
            />
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink text-balance md:text-7xl lg:text-[5.5rem]">
              Thaw Cold Leads & Watch Your Brokerage Bloom
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/70 md:text-xl">
              Stop letting your client interactions freeze up in disconnected systems.
              YOVU is an enterprise-scale platform that thaws out your workflows,
              capturing and actioning every call directly within Applied Epic so your
              business can truly thrive.
            </p>
          </motion.div>

          {/* CTAs — pushed above mockup as scroll progresses */}
          <motion.div
            style={{ y: ctaY }}
            className="absolute inset-x-0 bottom-24 z-20 flex flex-wrap justify-center gap-4 px-6"
          >
            <a
              href="#demo"
              className="flex items-center gap-2 rounded-full bg-signal py-3 pl-2 pr-5 text-sm font-semibold text-ink ring-1 ring-signal shadow-lg shadow-signal/20 transition-transform hover:scale-[1.03]"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-ink/10">
                <Check className="size-4" strokeWidth={2.5} />
              </span>
              Get a Demo
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 rounded-full bg-canvas/80 px-5 py-3 text-sm font-semibold text-ink ring-1 ring-border backdrop-blur transition-colors hover:bg-canvas"
            >
              Explore Features
              <ArrowRight className="size-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
