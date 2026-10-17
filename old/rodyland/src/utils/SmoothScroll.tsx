'use client'

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css"; // importa o CSS recomendado

export let lenis: Lenis | null = null;

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.08,              
      syncTouch: true,         // faz o smooth funcionar no touch
      syncTouchLerp: 0.07,     
      touchInertiaExponent: 1.4,
      touchMultiplier: 1.2,
    });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return children;
}