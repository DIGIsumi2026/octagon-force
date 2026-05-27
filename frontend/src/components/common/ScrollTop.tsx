import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentProgress =
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

      setIsVisible(scrollTop > 320);
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`scroll-top ${isVisible ? "scroll-top--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg className="scroll-top__progress" viewBox="0 0 48 48">
        <circle
          className="scroll-top__progress-bg"
          cx="24"
          cy="24"
          r="21"
          pathLength="100"
        />

        <circle
          className="scroll-top__progress-bar"
          cx="24"
          cy="24"
          r="21"
          pathLength="100"
          style={{
            strokeDashoffset: 100 - progress,
          }}
        />
      </svg>

      <span className="scroll-top__icon">
        <ArrowUp />
      </span>
    </button>
  );
}