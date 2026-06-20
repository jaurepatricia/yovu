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
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Preload entire mp4 as a blob so currentTime seeks are instant.
  useEffect(() => {
    let cancelled = false;
    let createdUrl: string | null = null;

    (async () => {
      try {
        const res = await fetch(src);
        if (!res.ok || !res.body) throw new Error("fetch failed");
        const total = Number(res.headers.get("content-length")) || 0;
        const reader = res.body.getReader();
        const chunks: Uint8Array[] = [];
        let received = 0;
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (value) {
            chunks.push(value);
            received += value.length;
            if (total) setLoadProgress(Math.min(1, received / total));
          }
        }
        if (cancelled) return;
        const blob = new Blob(chunks as BlobPart[], { type: "video/mp4" });
        createdUrl = URL.createObjectURL(blob);
        setBlobUrl(createdUrl);
        setLoadProgress(1);
      } catch {
        // Fallback to direct src; seek may be slower
        if (!cancelled) setBlobUrl(src);
      }
    })();

    return () => {
      cancelled = true;
      if (createdUrl) URL.revokeObjectURL(createdUrl);
    };
  }, [src]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !blobUrl) return;
    const onMeta = () => {
      durationRef.current = v.duration || 0;
      try {
        v.pause();
      } catch {
        // ignore
      }
      setReady(true);
      if (reducedMotion && durationRef.current) {
        v.currentTime = Math.max(0, durationRef.current - 0.01);
      }
    };
    if (v.readyState >= 1) onMeta();
    else v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, [blobUrl, reducedMotion]);

  const scheduleSeek = (t: number) => {
    pendingTimeRef.current = t;
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const v = videoRef.current;
      if (!v) return;
      try {
        v.currentTime = pendingTimeRef.current;
      } catch {
        // ignore
      }
    });
  };

  useMotionValueEvent(progress, "change", (p) => {
    if (reducedMotion) return;
    const d = durationRef.current;
    if (!d) return;
    const clamped = Math.max(0, Math.min(1, p));
    scheduleSeek(clamped * Math.max(0, d - 0.01));
  });

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {blobUrl ? (
        <video
          ref={videoRef}
          src={blobUrl}
          muted
          playsInline
          preload="auto"
          aria-label={ariaLabel}
          onSeeked={() => {}}
          className={`${className ?? ""} object-contain`}
        />
      ) : null}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-signal/70 transition-opacity duration-500"
        style={{
          transform: `scaleX(${loadProgress})`,
          transformOrigin: "left",
          opacity: ready ? 0 : 1,
        }}
      />
    </>
  );
}
