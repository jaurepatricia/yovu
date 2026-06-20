import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, type MotionValue } from "motion/react";

interface ScrollVideoProps {
  src: string;
  progress: MotionValue<number>;
  className?: string;
  ariaLabel?: string;
}

export function ScrollVideo({
  src,
  progress,
  className,
  ariaLabel = "Scroll-driven video",
}: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const pendingTimeRef = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => {
      durationRef.current = v.duration || 0;
      try {
        v.pause();
      } catch {}
      if (reducedMotion && durationRef.current) {
        v.currentTime = durationRef.current;
      }
    };
    if (v.readyState >= 1) onMeta();
    else v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, [reducedMotion]);

  const scheduleSeek = (t: number) => {
    pendingTimeRef.current = t;
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const v = videoRef.current;
      if (!v) return;
      try {
        v.currentTime = pendingTimeRef.current;
      } catch {}
    });
  };

  useMotionValueEvent(progress, "change", (p) => {
    if (reducedMotion) return;
    const d = durationRef.current;
    if (!d) return;
    const clamped = Math.max(0, Math.min(1, p));
    scheduleSeek(clamped * d);
  });

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="auto"
      aria-label={ariaLabel}
      className={`${className ?? ""} object-contain`}
    />
  );
}
