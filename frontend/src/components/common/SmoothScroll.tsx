import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      anchors: true,
      prevent: (node) =>
        node instanceof HTMLElement && Boolean(node.closest(".mobile-menu")),
    });

    let frameId = 0;
    let resumeAfterJobModal = false;

    const onJobModalToggle = (event: Event) => {
      if ((event as CustomEvent<boolean>).detail) {
        resumeAfterJobModal = !lenis.isStopped;
        lenis.stop();
      } else if (resumeAfterJobModal) {
        lenis.start();
        resumeAfterJobModal = false;
      }
    };

    window.addEventListener("career-job-modal-toggle", onJobModalToggle);

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("career-job-modal-toggle", onJobModalToggle);
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
