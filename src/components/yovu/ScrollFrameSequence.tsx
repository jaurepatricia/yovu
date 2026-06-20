import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, type MotionValue } from "motion/react";

interface ScrollFrameSequenceProps {
  totalFrames: number;
  getFrameSrc: (index: number) => string;
  progress: MotionValue<number>;
  className?: string;
  ariaLabel?: string;
}

export function ScrollFrameSequence({
  totalFrames,
  getFrameSrc,
  progress,
  className,
  ariaLabel = "Scroll-driven image sequence",
}: ScrollFrameSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<Array<HTMLImageElement | null>>(
    Array(totalFrames).fill(null),
  );
  const loadedRef = useRef<boolean[]>(Array(totalFrames).fill(false));
  const rafRef = useRef<number | null>(null);
  const pendingIndexRef = useRef(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect reduced-motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Draw a frame to the canvas with object-fit: cover math
  const draw = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Walk backwards to find the nearest loaded frame ≤ index, then forwards
    let img: HTMLImageElement | null = null;
    for (let i = index; i >= 0; i--) {
      if (loadedRef.current[i]) {
        img = imagesRef.current[i];
        break;
      }
    }
    if (!img) {
      for (let i = index + 1; i < totalFrames; i++) {
        if (loadedRef.current[i]) {
          img = imagesRef.current[i];
          break;
        }
      }
    }
    if (!img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    if (!iw || !ih) return;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  const scheduleDraw = (index: number) => {
    pendingIndexRef.current = index;
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      draw(pendingIndexRef.current);
    });
  };

  // Size canvas to container with DPR
  useEffect(() => {
    if (reducedMotion) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      scheduleDraw(pendingIndexRef.current);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    return () => ro.disconnect();
  }, [reducedMotion]);

  // Progressive image loading
  useEffect(() => {
    if (reducedMotion) return;
    let cancelled = false;
    const order: number[] = [];
    const eagerCount = Math.min(20, totalFrames);
    for (let i = 0; i < eagerCount; i++) order.push(i);
    for (let i = eagerCount; i < totalFrames; i++) order.push(i);

    const loadOne = (idx: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.src = getFrameSrc(idx);
        const done = () => {
          if (cancelled) return resolve();
          imagesRef.current[idx] = img;
          loadedRef.current[idx] = true;
          setLoadedCount((c) => c + 1);
          // Redraw if current target falls on/near this newly loaded frame
          scheduleDraw(pendingIndexRef.current);
          resolve();
        };
        img.onload = done;
        img.onerror = () => resolve();
      });

    (async () => {
      // Eager batch: load first 20 in parallel
      await Promise.all(order.slice(0, eagerCount).map(loadOne));
      if (cancelled) return;
      // Background: batches of 8
      const rest = order.slice(eagerCount);
      const batchSize = 8;
      for (let i = 0; i < rest.length; i += batchSize) {
        if (cancelled) return;
        await Promise.all(rest.slice(i, i + batchSize).map(loadOne));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [totalFrames, getFrameSrc, reducedMotion]);

  // Scrub on scroll
  useMotionValueEvent(progress, "change", (p) => {
    if (reducedMotion) return;
    const clamped = Math.max(0, Math.min(1, p));
    const idx = Math.round(clamped * (totalFrames - 1));
    scheduleDraw(idx);
  });

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (reducedMotion) {
    return (
      <div ref={containerRef} className={className}>
        <img
          src={getFrameSrc(totalFrames - 1)}
          alt={ariaLabel}
          className="size-full object-cover"
        />
      </div>
    );
  }

  const progressRatio = loadedCount / totalFrames;
  const fullyLoaded = loadedCount === totalFrames;

  return (
    <div ref={containerRef} className={className}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={ariaLabel}
        className="size-full"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-signal/70 transition-opacity duration-500"
        style={{
          transform: `scaleX(${progressRatio})`,
          transformOrigin: "left",
          opacity: fullyLoaded ? 0 : 1,
        }}
      />
    </div>
  );
}
