import { useRef, useState, type MouseEvent, type ReactNode } from "react";

interface CardTransform {
  rotateX: number;
  rotateY: number;
  translateY: number;
  scale: number;
}

const RESET: CardTransform = { rotateX: 0, rotateY: 0, translateY: 0, scale: 1 };

/**
 * A card wrapper that tilts toward the cursor in faux-3D and lifts slightly on
 * hover, then settles back when the pointer leaves. Respects the surrounding
 * layout — it only adds transform + perspective.
 */
export function FloatingCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState<CardTransform>(RESET);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setT({
      rotateX: (y / rect.height) * -10,
      rotateY: (x / rect.width) * 10,
      translateY: -8,
      scale: 1.02,
    });
  };

  return (
    <div style={{ perspective: "1000px" }} className="h-full">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setT(RESET)}
        style={{
          transform: `translateY(${t.translateY}px) rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg) scale(${t.scale})`,
          transformStyle: "preserve-3d",
        }}
        className={`h-full transition-transform duration-300 ease-out ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
