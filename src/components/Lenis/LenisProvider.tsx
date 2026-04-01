"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export default function LenisProvider({ children }: any) {
  useEffect(() => {
    const lenis = new Lenis({
        lerp: 0.1
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy()
  }, []);

  return <>{children}</>
}
