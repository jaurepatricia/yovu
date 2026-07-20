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
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: brand + flickering mountain filling the negative space */}
          <div className="flex flex-col">
            <YovuLogo height={36} />
            <p className="mt-6 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Your Voice. Unified.
            </p>
            <FlickeringMountain className="mt-10 h-48 w-full sm:h-56 lg:mt-auto lg:h-72" />
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

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-ink/50 sm:flex-row">
          <span>© {new Date().getFullYear()} YOVU Communications Inc.</span>
          <span>Proudly built and supported in Canada.</span>
        </div>
      </div>
    </footer>
  );
}
