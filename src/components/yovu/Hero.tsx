import { useState } from "react";
import mountainLightVideo from "@/assets/hero/mountain_light.mp4.asset.json";
import mountainDarkVideo from "@/assets/hero/mountain_dark.mp4.asset.json";
import mountainLightImage from "@/assets/hero/mountain_light.png.asset.json";
import mountainDarkImage from "@/assets/hero/mountain_dark.png.asset.json";

export function Hero() {
  const [lightVideoFailed, setLightVideoFailed] = useState(false);
  const [darkVideoFailed, setDarkVideoFailed] = useState(false);

  return (
    <section
      id="top"
      className="relative h-screen w-screen overflow-hidden bg-canvas"
    >
      {/* Fallback images (always present underneath the video) */}
      <img
        src={mountainLightImage.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover block dark:hidden"
      />
      <img
        src={mountainDarkImage.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover hidden dark:block"
      />

      {/* Light video */}
      {!lightVideoFailed && (
        <video
          key="light"
          src={mountainLightVideo.url}
          poster={mountainLightImage.url}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setLightVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover block dark:hidden"
        />
      )}

      {/* Dark video */}
      {!darkVideoFailed && (
        <video
          key="dark"
          src={mountainDarkVideo.url}
          poster={mountainDarkImage.url}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setDarkVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover hidden dark:block"
        />
      )}
    </section>
  );
}
