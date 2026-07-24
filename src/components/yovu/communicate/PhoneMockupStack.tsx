import { useCallback, useEffect, useState } from "react";
import light1 from "@/assets/phone app screens/phone-app-light-1.webp";
import light2 from "@/assets/phone app screens/phone-app-light-2.webp";
import light3 from "@/assets/phone app screens/phone-app-light-3.webp";
import dark1 from "@/assets/phone app screens/phone-app-dark-1.webp";
import dark2 from "@/assets/phone app screens/phone-app-dark-2.webp";
import dark3 from "@/assets/phone app screens/phone-app-dark-3.webp";

const phones = [
  { light: light1, dark: dark1 },
  { light: light2, dark: dark2 },
  { light: light3, dark: dark3 },
];

/**
 * Coverflow carousel of the phone-app mockups. Auto-rotates (no chevrons),
 * with the centre phone at full size and the neighbours fanned back and blurred.
 * Screen 2 starts front and centre. Theme-aware — swaps light/dark by mode.
 */
export function PhoneMockupStack({ className }: { className?: string }) {
  const total = phones.length;
  const [currentIndex, setCurrentIndex] = useState(Math.floor(total / 2));

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className={className}>
      <div className="relative flex h-[26rem] w-full items-center justify-center [perspective:1000px] md:h-[34rem]">
        {phones.map((phone, index) => {
          const offset = index - currentIndex;
          let pos = (offset + total) % total;
          if (pos > Math.floor(total / 2)) pos = pos - total;

          const isCenter = pos === 0;
          const isAdjacent = Math.abs(pos) === 1;

          return (
            <div
              key={index}
              className="absolute flex h-[24rem] w-[12rem] items-center justify-center transition-all duration-700 ease-in-out md:h-[32rem] md:w-64"
              style={{
                transform: `translateX(${pos * 52}%) scale(${
                  isCenter ? 1 : isAdjacent ? 0.85 : 0.7
                }) rotateY(${pos * -10}deg)`,
                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                filter: isCenter ? "blur(0px)" : "blur(4px)",
                visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
              }}
            >
              <img
                src={phone.light}
                alt=""
                aria-hidden="true"
                className="h-full w-full rounded-xl object-cover shadow-2xl shadow-black/30 ring-1 ring-black/10 dark:hidden"
              />
              <img
                src={phone.dark}
                alt=""
                aria-hidden="true"
                className="hidden h-full w-full rounded-xl object-cover shadow-2xl shadow-black/30 ring-1 ring-white/10 dark:block"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
