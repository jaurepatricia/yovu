import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

type Props = {
  children: ReactNode;
  /** Renders an anchor when set, otherwise a button. */
  href?: string;
  variant?: Variant;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
} & Record<string, unknown>;

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition-colors disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-transparent text-ink ring-1 ring-border hover:bg-ink/5",
};

/**
 * The single YOVU call-to-action button. Renders an <a> when `href` is set,
 * otherwise a <button>. Use instead of hand-typing pill classes so every CTA
 * stays consistent.
 */
export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  disabled,
  className = "",
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} disabled={disabled} className={cls} {...rest}>
      {children}
    </button>
  );
}
