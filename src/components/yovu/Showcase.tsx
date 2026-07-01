import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import forestStream from "@/assets/homepage/forest stream blurred.png";
import mountainRoad from "@/assets/homepage/mountain_winding_road.png";
import manIpad from "@/assets/homepage/man holding ipad.png";

type Tone = "light" | "dark";

type Slide = {
  headline: string;
  copy: string;
  cta: { label: string; href: string };
  image: string;
  tone: Tone;
};

const slides: Slide[] = [
  {
    headline: "Built to fit your stack",
    copy: "YOVU connects to the tools you already trust and uses, improving efficiency so you spend more time connecting with clients.",
    cta: { label: "Our Integrations", href: "#integrations" },
    image: forestStream,
    tone: "light",
  },
  {
    headline: "Built for the long road",
    copy: "YOVU stores your recordings for seven years to strengthen your E&O documentation. We take your data seriously, that’s why we’re also SOC 2 Type 2 Certified and PIPEDA Compliant.",
    cta: { label: "Our Security", href: "#security" },
    image: mountainRoad,
    tone: "dark",
  },
  {
    headline: "Built by Canadians",
    copy: "YOVU was built by a team of dedicated Canadians and our local support staff is ready to help 24/7. You’ll never have to speak to an off-shore call centre.",
    cta: { label: "Our Team", href: "#canada" },
    image: manIpad,
    tone: "light",
  },
];

export function Showcase() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {slides.map((slide, i) => {
            const light = slide.tone === "light";
            return (
              <CarouselItem key={i} className="relative h-screen pl-0">
                {/* Background image */}
                <img
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Readability scrim on the text side */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 ${
                    light
                      ? "bg-gradient-to-r from-black/45 via-black/15 to-transparent"
                      : "bg-gradient-to-r from-white/55 via-white/20 to-transparent"
                  }`}
                />

                {/* Content */}
                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
                  <div className="flex gap-6">
                    {/* Vertical dotted accent */}
                    <div
                      className={`w-px shrink-0 self-stretch border-l border-dotted ${
                        light ? "border-white/50" : "border-[#0b1733]/40"
                      }`}
                    />
                    <div
                      className={`max-w-lg ${light ? "text-white" : "text-[#0b1733]"}`}
                    >
                      <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                        {slide.headline}
                      </h2>
                      <p
                        className={`mt-5 max-w-md text-base md:text-lg ${
                          light ? "text-white/80" : "text-[#0b1733]/75"
                        }`}
                      >
                        {slide.copy}
                      </p>
                      <a
                        href={slide.cta.href}
                        className={`mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${
                          light
                            ? "border-white/70 text-white hover:bg-white/10"
                            : "border-[#0b1733]/40 text-[#0b1733] hover:bg-[#0b1733]/5"
                        }`}
                      >
                        {slide.cta.label}
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Arrows (desktop) */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => api?.scrollPrev()}
        className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-black/25 p-2.5 text-white backdrop-blur transition-colors hover:bg-black/40 md:flex"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => api?.scrollNext()}
        className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-black/25 p-2.5 text-white backdrop-blur transition-colors hover:bg-black/40 md:flex"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 rounded-full bg-white transition-all ${
              selected === i ? "w-6 opacity-100" : "w-2 opacity-50 hover:opacity-80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
