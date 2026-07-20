import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";
import mountainOutline from "@/assets/homepage/Mountain Outline.svg";

// Site signal blue for the twinkling squares.
const GRID_COLOR = "#3b82f6";

// NOTE: the asset inlines as a single-quoted `data:` SVG URI, so the CSS
// url() must be wrapped in double quotes or the declaration is dropped.
const maskStyle = {
  WebkitMaskImage: `url("${mountainOutline}")`,
  maskImage: `url("${mountainOutline}")`,
  WebkitMaskSize: "100% auto",
  maskSize: "100% auto",
  WebkitMaskPosition: "center bottom",
  maskPosition: "center bottom",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
} as const;

/**
 * A field of flickering squares masked to the YOVU mountain outline, flush to
 * the bottom of its container. Built on the low-level FlickeringGrid engine.
 * Purely decorative.
 */
export function FlickeringMountain({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`} style={maskStyle}>
      <FlickeringGrid
        className="h-full w-full"
        color={GRID_COLOR}
        squareSize={4}
        gridGap={6}
        flickerChance={0.2}
        maxOpacity={0.5}
      />
    </div>
  );
}
