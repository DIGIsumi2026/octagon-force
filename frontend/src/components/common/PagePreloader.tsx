import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const FIRST_LOAD_DURATION = 1700;
const ROUTE_NAVIGATION_DURATION = 900;

export default function PagePreloader() {
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const isFirstLoadRef = useRef(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("preloader-active", isVisible);

    return () => {
      document.body.classList.remove("preloader-active");
    };
  }, [isVisible]);

  useEffect(() => {
    const video = videoRef.current;
    const duration = isFirstLoadRef.current
      ? FIRST_LOAD_DURATION
      : ROUTE_NAVIGATION_DURATION;

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    setIsVisible(true);

    if (video) {
      try {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } catch {
        video.load();
      }
    }

    timerRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, duration);

    isFirstLoadRef.current = false;

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [location.pathname]);

  return (
    <div
      className={`site-preloader ${
        isVisible ? "site-preloader--visible" : ""
      }`}
      aria-hidden={!isVisible}
    >
      <div className="site-preloader__inner">
        <video
          ref={videoRef}
          className="site-preloader__video"
          src="/videos/preloader-transparent.webm"
          poster="/images/preloader-fallback.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}
