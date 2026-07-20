import { YovuLogo } from "./YovuLogo";
import { FlickeringMountain } from "@/components/ui/flickering-mountain";

const columns = [
  {
    heading: "Product Capabilities",
    links: [
      { label: "Communicate", href: "/communicate" },
      { label: "Capture", href: "/capture" },
      { label: "Coach", href: "/coach" },
    ],
  },
  {
    heading: "Integrations",
    links: [
      { label: "Applied Epic", href: "/applied-epic" },
      { label: "Microsoft Teams", href: "/microsoft-teams" },
      { label: "Salesforce", href: "/salesforce" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "#" },
      { label: "Portal Log-in", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Accessibility Policy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-canvas">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="relative z-10">
          {/* Brand + columns, with the flickering mountain flush to their
              bottom-left, stretching ~75% wide and behind the link columns —
              ending above the copyright line below. */}
          <div className="relative pb-16">
            <FlickeringMountain className="absolute bottom-0 left-0 z-0 h-28 w-3/4 sm:h-40 lg:h-48" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left: brand + tagline */}
              <div>
                <YovuLogo height={36} />
                <p className="mt-6 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                  Your Voice. Unified.
                </p>
              </div>

              {/* Right: tidy link columns */}
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {columns.map((col) => (
                  <div key={col.heading}>
                    <h3 className="text-sm font-semibold text-ink">{col.heading}</h3>
                    <ul className="mt-4 space-y-3">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-sm text-ink/60 transition-colors hover:text-ink"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar — divider sits directly under the mountain */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-ink/50 sm:flex-row">
            <span>© {new Date().getFullYear()} YOVU Communications Inc.</span>
            <span>Proudly built and supported in Canada.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
