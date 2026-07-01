import yovuLogo from "@/assets/homepage/YOVU Logo.svg";

// Source SVG viewBox is 817.07 x 192.65.
const RATIO = 817.07 / 192.65;

/**
 * Theme-aware YOVU wordmark. The source SVG is solid white, so we render it as
 * a CSS mask over an `ink`-colored box — navy in light mode, near-white in dark
 * mode — for readability on any background.
 */
export function YovuLogo({
  height = 24,
  className = "",
  label = "YOVU",
}: {
  height?: number;
  className?: string;
  label?: string;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-block bg-ink ${className}`}
      style={{
        height,
        width: height * RATIO,
        maskImage: `url("${yovuLogo}")`,
        WebkitMaskImage: `url("${yovuLogo}")`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
