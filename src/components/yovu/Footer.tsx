import { YovuLogo } from "./YovuLogo";
import { FlickeringMountain } from "@/components/ui/flickering-mountain";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Communicate", href: "/communicate" },
      { label: "Capture", href: "/capture" },
      { label: "Coach", href: "/coach" },
      { label: "Plans & Pricing", href: "/pricing" },
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
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Accessibility Plan", href: "/accessibility-plan" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-canvas">
      {/* Brand + link columns */}
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
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

      {/* Full-width flickering mountain — spans the entire footer, sized by
          viewport width so it stays flush and scales up on wider screens. */}
      <FlickeringMountain className="mt-16 h-[13.5vw] w-full lg:mt-24" />

      {/* Copyright — below the mountain, no divider */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 pb-10 pt-6 text-sm text-ink/50 sm:flex-row">
        <span>© {new Date().getFullYear()} YOVU Office Phone. All Rights Reserved. Powered by LCA Systems Inc.</span>
        <span>1105 Frances St, London, ON N5W 2L9</span>
      </div>
    </footer>
  );
}
