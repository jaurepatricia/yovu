import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";
import mountainVector from "@/assets/homepage/Mountain Outline.svg";

// Site signal blue for the twinkling squares.
const GRID_COLOR = "#3b82f6";

/**
 * A field of flickering squares masked to the YOVU mountain silhouette, flush
 * to the bottom of its container. Built on the low-level FlickeringGrid engine.
 * Purely decorative.
 */
export function FlickeringMountain({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{
        WebkitMaskImage: `url('${mountainVector}')`,
        maskImage: `url('${mountainVector}')`,
        WebkitMaskSize: "100% auto",
        maskSize: "100% auto",
        WebkitMaskPosition: "center bottom",
        maskPosition: "center bottom",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    >
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
