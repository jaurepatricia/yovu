import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import mountainLightVideo from "@/assets/hero/mountain_light.mp4.asset.json";
import mountainDarkVideo from "@/assets/hero/mountain_dark.mp4.asset.json";
import mountainLightImage from "@/assets/hero/mountain_light.png.asset.json";
import mountainDarkImage from "@/assets/hero/mountain_dark.png.asset.json";
import appliedLogoWhite from "@/assets/logos/Applied Logo White.svg";

const INDUSTRIES = [
  "Insurance",
  "Healthcare",
  "Automotive",
  "Non-Profit or Charity",
  "Other",
] as const;

export function Hero() {
  const [lightVideoFailed, setLightVideoFailed] = useState(false);
  const [darkVideoFailed, setDarkVideoFailed] = useState(false);
  const [industry, setIndustry] = useState<(typeof INDUSTRIES)[number]>("Insurance");
  const [open, setOpen] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (pillRef.current && !pillRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <section id="top" className="relative h-screen w-screen overflow-hidden bg-canvas">
      {/* Fallback images */}
      <img
        src={mountainLightImage.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover block dark:hidden"
      />
      <img
        src={mountainDarkImage.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover hidden dark:block"
      />

      {!lightVideoFailed && (
        <video
          key="light"
          src={mountainLightVideo.url}
          poster={mountainLightImage.url}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setLightVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover block dark:hidden"
        />
      )}

      {!darkVideoFailed && (
        <video
          key="dark"
          src={mountainDarkVideo.url}
          poster={mountainDarkImage.url}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setDarkVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover hidden dark:block"
        />
      )}

      {/* Top-half overlay content */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-1/2 flex-col items-center justify-center px-6 pt-28 text-center">
        {/* Soft bloom for legibility */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[820px] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-canvas/30 blur-3xl"
        />

        {/* Industry selector pill */}
        <div
          ref={pillRef}
          className="pointer-events-auto relative mb-6 inline-flex items-center gap-3 rounded-full bg-canvas/50 px-7 py-3.5 text-lg text-ink ring-1 ring-border/50 backdrop-blur-xl backdrop-saturate-150 md:text-xl"
        >
          <span className="text-ink/60">I work in</span>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center gap-1 font-semibold text-ink transition-colors hover:text-ink/80"
          >
            <span>{industry}</span>
            <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <ul className="absolute left-0 top-full z-20 mt-2 w-max min-w-full overflow-hidden rounded-xl border border-border bg-canvas p-1 text-left shadow-xl dark:ring-1 dark:ring-inset dark:ring-white/15">
              {INDUSTRIES.map((i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => {
                      setIndustry(i);
                      setOpen(false);
                    }}
                    className={`block w-full whitespace-nowrap rounded-md px-3 py-1.5 text-left text-sm transition-colors hover:bg-accent hover:text-ink ${
                      i === industry ? "font-semibold text-ink" : "text-ink/80"
                    }`}
                  >
                    {i}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <h1 className="font-display text-6xl font-bold tracking-tight text-ink md:text-8xl">
          Peak Communication
        </h1>

        <p className="mt-5 max-w-2xl text-base text-ink/80 md:text-lg">
          Discover how insurance brokerages across Canada are improving efficiency with our
          all-in-one unified communications platform.
        </p>
      </div>

      {/* Certified Integration Partner pill — pops up from the bottom on load */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          className="flex items-center justify-center gap-3 rounded-full bg-[#0b1733]/80 px-6 py-3 ring-1 ring-white/10 backdrop-blur-md"
        >
          <img src={appliedLogoWhite} alt="Applied" className="h-5 w-auto md:h-6" />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white md:text-xs">
            Epic Certified Integration Partner
          </span>
        </motion.div>
      </div>
    </section>
  );
}
