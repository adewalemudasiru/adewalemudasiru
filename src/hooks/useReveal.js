import { useEffect } from "react";

// Adds .is-visible to each .reveal element the first time it enters the viewport.
// Elements that enter together are staggered so cards in a row cascade. Re-scans on route change.
export const useReveal = (pathname) => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e, i) => {
            e.target.style.transitionDelay = `${Math.min(i, 3) * 70}ms`;
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
};
