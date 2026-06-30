import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import mountainLightVideo from "@/assets/hero/mountain_light.mp4.asset.json";
import mountainDarkVideo from "@/assets/hero/mountain_dark.mp4.asset.json";
import mountainLightImage from "@/assets/hero/mountain_light.png.asset.json";
import mountainDarkImage from "@/assets/hero/mountain_dark.png.asset.json";

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
          className="pointer-events-auto relative mb-6 inline-flex items-center gap-2 rounded-full bg-white/40 px-5 py-2.5 text-[15px] text-[#0a1f3d] ring-1 ring-white/40 backdrop-blur"
        >
          <span className="text-[#0a1f3d]/70">I work in</span>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center gap-1 font-semibold transition hover:text-[#0a1f3d]"
          >
            <span>{industry}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />

          </button>
          {open && (
            <ul className="absolute left-0 top-full z-20 mt-2 w-64 overflow-hidden rounded-2xl bg-white text-left text-foreground shadow-2xl ring-1 ring-black/5">
              {INDUSTRIES.map((i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => {
                      setIndustry(i);
                      setOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm transition hover:bg-muted ${
                      i === industry ? "font-medium text-primary" : ""
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
    </section>
  );
}
