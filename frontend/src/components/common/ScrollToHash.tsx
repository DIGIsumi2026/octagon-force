import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = hash.replace("#", "");

    const timer = window.setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        const yOffset = -110;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 120);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}