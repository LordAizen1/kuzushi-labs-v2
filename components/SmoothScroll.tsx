"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { DURATION } from "@/lib/constants";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // Slightly longer than our animation duration for a floaty feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
