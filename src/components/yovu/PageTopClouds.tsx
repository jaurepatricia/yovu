import whiteClouds from "@/assets/hero/white-clouds-across-the-sky.webp";
import darkClouds from "@/assets/hero/dark-clouds-across-the-sky.webp";

/**
 * Decorative cloud image anchored to the very top of a page, fading seamlessly
 * into the canvas background. Theme-aware: white clouds in light mode, dark
 * clouds in dark mode. Sits behind the (translucent) nav and the top of the
 * page content — parent must be `relative`, and the first content section
 * should be transparent so the clouds show through its top padding.
 */
export function PageTopClouds() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[440px] overflow-hidden sm:h-[540px]"
    >
      <img
        src={whiteClouds}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover object-top dark:hidden"
      />
      <img
        src={darkClouds}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="hidden h-full w-full object-cover object-top dark:block"
      />
      {/* Fade the image seamlessly into the page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-canvas" />
    </div>
  );
}
