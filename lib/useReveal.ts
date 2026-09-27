"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll: fade + translateY, uma vez só. `prefers-reduced-motion`
 * é tratado em CSS (globals.css), não aqui — o estado de visibilidade é só
 * o gatilho normal da animação.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
}
