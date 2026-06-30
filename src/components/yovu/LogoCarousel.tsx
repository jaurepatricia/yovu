import mcfarlanRowlands from "@/assets/logos/mcfarlan-rowlands.png.asset.json";
import mcdougall from "@/assets/logos/mcdougall.png.asset.json";
import mcdougallDark from "@/assets/logos/mcdougall-dark.png.asset.json";
import youngs from "@/assets/logos/youngs.png.asset.json";
import stoneridge from "@/assets/logos/stoneridge.png.asset.json";
import stoneridgeDark from "@/assets/logos/stoneridge-dark.png.asset.json";
import selectpath from "@/assets/logos/selectpath.png.asset.json";
import selectpathDark from "@/assets/logos/selectpath-dark.png.asset.json";
import aaMunro from "@/assets/logos/aa-munro.png.asset.json";

type Logo = { name: string; src: string; srcDark?: string; href: string };

const logos: Logo[] = [
  { name: "McFarlan Rowlands", src: mcfarlanRowlands.url, href: "https://mcfarlanrowlands.com/" },
  { name: "McDougall Insurance", src: mcdougall.url, srcDark: mcdougallDark.url, href: "https://www.mcdougallinsurance.com/" },
  { name: "Youngs Insurance Brokers", src: youngs.url, href: "https://www.youngsinsurance.ca/site/home" },
  { name: "Stoneridge Insurance", src: stoneridge.url, srcDark: stoneridgeDark.url, href: "https://stoneridgeinsurance.ca/" },
  { name: "Select Path Insurance", src: selectpath.url, srcDark: selectpathDark.url, href: "https://www.selectpath.ca/" },
  { name: "AA Munro Insurance", src: aaMunro.url, href: "https://www.aamunro.com/" },
];

export function LogoCarousel() {
  const doubled = [...logos, ...logos];
  return (
    <section className="border-y border-border bg-canvas py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-12 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-ink/45">
          Trusted by leading Canadian P&amp;C brokerages
        </p>
        <div className="relative overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-20">
            {doubled.map((logo, i) => (
              <a
                key={i}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.name}
                className="group flex h-16 w-44 shrink-0 items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className={`max-h-full max-w-full object-contain grayscale opacity-60 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100 ${logo.srcDark ? "dark:hidden" : ""}`}
                />
                {logo.srcDark && (
                  <img
                    src={logo.srcDark}
                    alt={logo.name}
                    loading="lazy"
                    className="hidden max-h-full max-w-full object-contain grayscale opacity-60 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:block"
                  />
                )}
              </a>
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-32 backdrop-blur-sm"
            style={{
              maskImage: "linear-gradient(to right, black, transparent)",
              WebkitMaskImage: "linear-gradient(to right, black, transparent)",
              background: "linear-gradient(to right, var(--canvas), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-32 backdrop-blur-sm"
            style={{
              maskImage: "linear-gradient(to left, black, transparent)",
              WebkitMaskImage: "linear-gradient(to left, black, transparent)",
              background: "linear-gradient(to left, var(--canvas), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
