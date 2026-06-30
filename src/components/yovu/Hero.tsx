import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import mountainLightVideo from "@/assets/hero/mountain_light.mp4.asset.json";
import mountainDarkVideo from "@/assets/hero/mountain_dark.mp4.asset.json";
import mountainLightImage from "@/assets/hero/mountain_light.png.asset.json";
import mountainDarkImage from "@/assets/hero/mountain_dark.png.asset.json";

const INDUSTRIES = [
  "Insurance",
  "Real Estate",
  "Legal",
  "Financial Services",
  "Healthcare",
  "Other",
];

export function Hero() {
  const [lightVideoFailed, setLightVideoFailed] = useState(false);
  const [darkVideoFailed, setDarkVideoFailed] = useState(false);
  const [industry, setIndustry] = useState("Insurance");

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
        <div className="pointer-events-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-canvas/40 px-5 py-2 shadow-sm backdrop-blur-xl">
          <span className="font-[Epilogue] text-sm text-ink/70">I work in</span>
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger className="h-auto w-auto gap-1 border-0 bg-transparent p-0 text-sm font-semibold text-ink shadow-none focus:ring-0 focus:ring-offset-0 [&>svg]:hidden">
              <SelectValue />
              <ChevronDown className="h-4 w-4 opacity-70" />
            </SelectTrigger>
            <SelectContent>
              {INDUSTRIES.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <h1 className="font-[Urbanist] text-6xl font-bold tracking-tight text-ink md:text-8xl">
          Peak Communication
        </h1>

        <p className="mt-5 max-w-2xl font-[Epilogue] text-base text-ink/80 md:text-lg">
          Discover how insurance brokerages across Canada are improving
          efficiency with our all-in-one unified communications platform.
        </p>
      </div>
    </section>
  );
}
