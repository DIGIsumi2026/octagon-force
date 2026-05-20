import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 140) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    const updateActiveSection = () => {
      const current = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          return {
            id,
            top: element.getBoundingClientRect().top
          };
        })
        .filter(Boolean) as Array<{ id: string; top: number }>;

      const visible = current
        .filter((section) => section.top <= offset)
        .sort((a, b) => Math.abs(a.top) - Math.abs(b.top));

      if (visible[0]?.id) {
        setActiveSection(visible[0].id);
      } else if (current[0]?.top > offset) {
        setActiveSection(sectionIds[0] ?? "home");
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [offset, sectionIds]);

  return activeSection;
}
