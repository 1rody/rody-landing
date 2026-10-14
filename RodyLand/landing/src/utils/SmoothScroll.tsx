'use client'

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export let lenis: Lenis | null = null;

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                     "ontouchstart" in window ||
                     navigator.maxTouchPoints > 0;

    if (isMobile) return;

    lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.1,

      syncTouch: false,
    });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return children;
}