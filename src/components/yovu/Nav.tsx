import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#features", label: "Features" },
  { href: "#integrations", label: "Integrations" },
  { href: "#security", label: "Security" },
  { href: "#canada", label: "Company" },
];

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-canvas">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-10">
          <a href="#top" className="font-display text-xl font-bold tracking-tight">
            YOVU
          </a>
          <div className="hidden gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink/60 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#demo"
            className="hidden text-sm font-medium text-ink/70 transition-colors hover:text-ink sm:inline"
          >
            Log In
          </a>
          <a
            href="#demo"
            className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-ink ring-1 ring-signal transition-transform hover:scale-[1.02]"
          >
            Get a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}

