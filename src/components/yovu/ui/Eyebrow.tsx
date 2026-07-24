import type { ReactNode } from "react";

/**
 * The standard YOVU section eyebrow: small, uppercase, tracked, signal-blue.
 * One treatment everywhere so the label reads the same on every section.
 */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] text-signal ${className}`}
    >
      {children}
    </p>
  );
}
