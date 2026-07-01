import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const COPY =
  "YOVU integrates directly with your Broker Management System to automatically capture, transcribe, and summarize every client call, freeing your insurance brokerage from manual data entry while improving your E&O defensibility.";

export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  const words = COPY.split(" ");

  return (
    <section className="py-40 lg:py-56">
      <div className="mx-auto max-w-7xl px-6">
        <p
          ref={ref}
          className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.1]"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  // Starts grey (low-opacity ink) and darkens to full ink as it scrolls in.
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="text-ink">
      {children}{" "}
    </motion.span>
  );
}
