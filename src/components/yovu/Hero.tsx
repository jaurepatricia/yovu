import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import mountainLightVideo from "@/assets/hero/mountain_light.mp4.asset.json";
import mountainDarkVideo from "@/assets/hero/mountain_dark.mp4.asset.json";
import mountainLightImage from "@/assets/hero/mountain_light.png.asset.json";
import mountainDarkImage from "@/assets/hero/mountain_dark.png.asset.json";
import appliedEpicLogo from "@/assets/homepage/Applied Epic White Logo.png";

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
    <section
      id="top"
      className="relative h-screen w-screen overflow-hidden bg-canvas"
    >
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
          className="pointer-events-auto relative mb-6 inline-flex items-center gap-2 rounded-full bg-canvas/50 px-5 py-2.5 text-[15px] text-ink ring-1 ring-border/50 backdrop-blur-xl backdrop-saturate-150"
        >
          <span className="text-ink/60">I work in</span>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center gap-1 font-semibold text-ink transition-colors hover:text-ink/80"
          >
            <span>{industry}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
          {open && (
            <ul className="absolute left-0 top-full z-20 mt-2 w-64 overflow-hidden rounded-2xl bg-canvas/95 text-left shadow-2xl ring-1 ring-border/50 backdrop-blur-xl">
              {INDUSTRIES.map((i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => {
                      setIndustry(i);
                      setOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm text-ink transition-colors hover:bg-ink/5 ${
                      i === industry ? "font-semibold text-ink" : "text-ink/70"
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
          Discover how insurance brokerages across Canada are improving
          efficiency with our all-in-one unified communications platform.
        </p>
      </div>

      {/* Bottom dark-blue gradient to soften the badge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(7,11,26,0.85), rgba(7,11,26,0.4) 45%, transparent)",
        }}
      />

      {/* Certified Integration Partner badge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-center gap-4 pb-7">
        <span className="text-sm font-medium uppercase tracking-[0.18em] text-white/85 md:text-base">
          Certified Integration Partner
        </span>
        <img
          src={appliedEpicLogo}
          alt="Applied Epic"
          className="h-8 w-auto opacity-95 md:h-9"
        />
      </div>
    </section>
  );
}
