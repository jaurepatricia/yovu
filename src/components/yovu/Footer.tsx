import { Phone, MapPin } from "lucide-react";
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
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Accessibility Plan", href: "/accessibility-plan" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-canvas">
      {/* Brand + link columns */}
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: brand + tagline + contact */}
          <div>
            <YovuLogo height={44} />
            <p className="mt-6 font-display text-3xl font-bold tracking-tight text-signal md:text-4xl">
              Your Voice. Unified.
            </p>
            <div className="mt-8 space-y-3 text-sm text-ink/70">
              <a
                href="tel:+18446851001"
                className="flex items-center gap-3 transition-colors hover:text-ink"
              >
                <Phone className="size-4 shrink-0 text-signal" strokeWidth={2} />
                +1 (844) 685-1001
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-signal" strokeWidth={2} />
                1105 Frances St, London, ON N5W 2L9
              </p>
            </div>
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

      {/* Bottom bar — copyright + legal links, below the mountain */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 pb-10 pt-6 text-sm text-ink/50 sm:flex-row">
        <span>
          © {new Date().getFullYear()} YOVU Office Phone. All Rights Reserved. Powered by LCA
          Systems Inc.
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
