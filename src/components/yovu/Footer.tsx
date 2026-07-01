import { YovuLogo } from "./YovuLogo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <YovuLogo height={20} />
        <div className="flex flex-wrap justify-center gap-6 text-sm text-ink/50">
          <a href="#" className="transition-colors hover:text-ink">Privacy Policy</a>
          <a href="#" className="transition-colors hover:text-ink">Terms of Service</a>
          <a href="#" className="transition-colors hover:text-ink">PIPEDA Compliance</a>
          <a href="#" className="transition-colors hover:text-ink">Contact</a>
        </div>
        <span className="text-sm text-ink/50">
          © {new Date().getFullYear()} YOVU Communications Inc.
        </span>
      </div>
    </footer>
  );
}
