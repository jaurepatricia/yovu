import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  
} from "@/components/ui/navigation-menu";
import { LocaleToggle } from "./LocaleToggle";
import { ThemeToggle } from "./ThemeToggle";
import { YovuLogo } from "./YovuLogo";

const industries = [
  { href: "#", label: "Insurance" },
  { href: "#", label: "Healthcare" },
  { href: "#", label: "Automotive" },
  { href: "#", label: "Non-Profit & Charity" },
  { href: "#", label: "All Others" },
];

const features = [
  {
    href: "#",
    title: "Communicate",
    description:
      "A cloud phone system that streamlines your daily workflow with talk, text, and intelligent call queues.",
  },
  {
    href: "#",
    title: "Capture",
    description:
      "Automatically log conversations with transcriptions, AI summaries, and sentiment analysis.",
  },
  {
    href: "#",
    title: "Coach",
    description:
      "Accelerate new hire onboarding and team performance using analytics dashboards and training tools.",
  },
];

const integrations = [
  { href: "#", label: "Applied Epic" },
  { href: "#", label: "Microsoft" },
  { href: "#", label: "SalesForce" },
];

const triggerCls =
  "bg-transparent text-sm font-medium text-ink/60 hover:bg-transparent hover:text-ink focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-ink px-3";

const itemCls =
  "inline-flex h-9 items-center justify-center rounded-md bg-transparent px-3 text-sm font-medium text-ink/60 transition-colors hover:bg-accent hover:text-ink focus:bg-accent focus:text-ink focus:outline-none";


export function Nav() {
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
          <a href="#top" aria-label="YOVU home">
            <YovuLogo height={18} />
          </a>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerCls}>
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-4">
                    <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-ink/50">
                      By Industry
                    </p>
                    <ul className="flex flex-col">
                      {industries.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block rounded-md px-2 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-accent hover:text-ink"
                            >
                              {item.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Products */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerCls}>
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[640px] grid-cols-2 gap-8 p-6">
                    {/* Features column */}
                    <div>
                      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-ink/50">
                        Features
                      </p>
                      <ul className="flex flex-col gap-1">
                        {features.map((f) => (
                          <li key={f.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={f.href}
                                className="block rounded-md px-2 py-2 transition-colors hover:bg-accent"
                              >
                                <div className="text-sm font-semibold text-ink">
                                  {f.title}
                                </div>
                                <p className="mt-0.5 text-xs leading-snug text-ink/60">
                                  {f.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Integrations column */}
                    <div>
                      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-ink/50">
                        Integrations
                      </p>
                      <ul className="flex flex-col">
                        {integrations.map((i) => (
                          <li key={i.label}>
                            <NavigationMenuLink asChild>
                              <a
                                href={i.href}
                                className="block rounded-md px-2 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-accent hover:text-ink"
                              >
                                {i.label}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Plans & Pricing */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#" className={itemCls}>
                    Plans &amp; Pricing
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#" className={itemCls}>
                    About Us
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <LocaleToggle />
          <ThemeToggle />
          <a
            href="#demo"
            className="hidden text-sm font-medium text-ink/70 transition-colors hover:text-ink sm:inline"
          >
            Log In
          </a>
          <a
            href="#demo"
            className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-white ring-1 ring-signal transition-transform hover:scale-[1.02]"
          >
            Get a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
