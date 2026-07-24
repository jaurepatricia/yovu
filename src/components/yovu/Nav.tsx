import { useEffect, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
// TEMPORARY review tool — remove before launch (see StickyNotes.tsx).
import { StickyNoteTrigger } from "./StickyNotes";
import { ThemeToggle } from "./ThemeToggle";
import { YovuLogo } from "./YovuLogo";

function useAlignNavViewport(rootRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const align = () => {
      const wrapper = root.querySelector<HTMLElement>(".absolute.left-0.top-full");
      if (!wrapper) return;
      const openTrigger = root.querySelector<HTMLElement>('button[data-state="open"]');
      if (!openTrigger) {
        wrapper.style.left = "";
        wrapper.style.transform = "";
        return;
      }
      const rootRect = root.getBoundingClientRect();
      const trigRect = openTrigger.getBoundingClientRect();
      let centerX = trigRect.left - rootRect.left + trigRect.width / 2;
      // Keep wide panels within the viewport (24px gutter) instead of
      // overflowing off the left/right edge when centred under the trigger.
      const halfW = wrapper.offsetWidth / 2;
      const pad = 24;
      const minCenter = pad - rootRect.left + halfW;
      const maxCenter = window.innerWidth - pad - rootRect.left - halfW;
      if (maxCenter >= minCenter) {
        centerX = Math.max(minCenter, Math.min(centerX, maxCenter));
      }
      wrapper.style.left = `${centerX}px`;
      wrapper.style.transform = "translateX(-50%)";
    };
    const raf = () => requestAnimationFrame(align);
    raf();
    const mo = new MutationObserver(raf);
    mo.observe(root, {
      attributes: true,
      subtree: true,
      attributeFilter: ["data-state", "style"],
    });
    window.addEventListener("resize", raf);
    return () => {
      mo.disconnect();
      window.removeEventListener("resize", raf);
    };
  }, [rootRef]);
}

const capabilities = [
  {
    href: "/communicate",
    title: "Communicate",
    description:
      "A cloud phone system that streamlines your daily workflow with talk, text, and intelligent call queues.",
  },
  {
    href: "/capture",
    title: "Capture",
    description:
      "Automatically log conversations with transcriptions, AI summaries, and sentiment analysis.",
  },
  {
    href: "/coach",
    title: "Coach",
    description:
      "Accelerate new hire onboarding and team performance using analytics dashboards and training tools.",
  },
];

const industries = [
  { href: "/", label: "Insurance" },
  { href: "/healthcare", label: "Healthcare" },
  { href: "/automotive", label: "Automotive" },
  { href: "/nonprofit", label: "Non-Profit & Charity" },
  { href: "#", label: "All Others" },
];

const integrations = [
  { href: "/applied-epic", label: "Applied Epic" },
  { href: "/microsoft-teams", label: "Microsoft Teams" },
  { href: "/salesforce", label: "SalesForce" },
];

const companyLinks = [
  { href: "/about-us", label: "About Us", external: false },
  { href: "/contact-us", label: "Contact Us", external: false },
  { href: "https://my.yovu.ca/s/", label: "Support Centre", external: true },
  { href: "https://portal.yovu.ca/portal/", label: "Portal Login", external: true },
];

const triggerCls =
  "bg-transparent text-sm font-medium text-ink/60 hover:bg-transparent hover:text-ink focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-ink px-3";

const itemCls =
  "inline-flex h-9 items-center justify-center rounded-md bg-transparent px-3 text-sm font-medium text-ink/60 transition-colors hover:bg-accent hover:text-ink focus:bg-accent focus:text-ink focus:outline-none";

const menuLinkCls =
  "block rounded-md px-2 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-accent hover:text-ink";

export function Nav() {
  const navMenuRef = useRef<HTMLDivElement>(null);
  useAlignNavViewport(navMenuRef);
  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50">
      {/* Matte-glass layer with soft bottom fade */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 bottom-0 border-b border-border/50 bg-canvas/50 backdrop-blur-xl backdrop-saturate-150"
      />
      {/* Content row */}
      <div className="pointer-events-auto relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <a href="/" aria-label="YOVU home">
            <YovuLogo height={18} />
          </a>

          <NavigationMenu ref={navMenuRef} className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {/* Solutions — capabilities + industries */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerCls}>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-8 p-6">
                    {/* By Capabilities */}
                    <div>
                      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-ink/50">
                        By Capabilities
                      </p>
                      <ul className="flex flex-col gap-1">
                        {capabilities.map((f) => (
                          <li key={f.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={f.href}
                                className="block rounded-md px-2 py-2 transition-colors hover:bg-accent"
                              >
                                <div className="text-sm font-semibold text-ink">{f.title}</div>
                                <p className="mt-0.5 text-xs leading-snug text-ink/60">
                                  {f.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* By Industry */}
                    <div>
                      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-ink/50">
                        By Industry
                      </p>
                      <ul className="flex flex-col">
                        {industries.map((item) => (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              <a href={item.href} className={menuLinkCls}>
                                {item.label}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Integrations */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerCls}>Integrations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-52 p-4">
                    <ul className="flex flex-col">
                      {integrations.map((i) => (
                        <li key={i.label}>
                          <NavigationMenuLink asChild>
                            <a href={i.href} className={menuLinkCls}>
                              {i.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Plans & Pricing */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/pricing" className={itemCls}>
                    Plans &amp; Pricing
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Company */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerCls}>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-52 p-4">
                    <ul className="flex flex-col">
                      {companyLinks.map((c) => (
                        <li key={c.label}>
                          <NavigationMenuLink asChild>
                            <a
                              href={c.href}
                              className={menuLinkCls}
                              {...(c.external
                                ? { target: "_blank", rel: "noreferrer" }
                                : {})}
                            >
                              {c.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <StickyNoteTrigger />
          <a
            href="https://portal.yovu.ca/portal/"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-ink/70 transition-colors hover:text-ink sm:inline"
          >
            Login
          </a>
          <a
            href="/book-demo"
            className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
          >
            Book Demo
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
