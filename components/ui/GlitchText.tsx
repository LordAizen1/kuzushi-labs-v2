"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export default function GlitchText({ text, className }: GlitchTextProps) {
    return (
        <div className="relative overflow-hidden group">
            {/* Base Text */}
            <span className={cn("relative z-10 block", className)}>
                {text}
            </span>

            {/* Glitch Layer 1 (Red Shift) - Visible on Hover */}
            <span
                className={cn(
                    "absolute inset-0 z-0 text-red-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] group-hover:translate-y-[-2px] transition-all duration-100 ease-linear mix-blend-screen select-none pointer-events-none",
                    className
                )}
                aria-hidden="true"
            >
                {text}
            </span>

            {/* Glitch Layer 2 (Cyan Shift) - Visible on Hover */}
            <span
                className={cn(
                    "absolute inset-0 z-0 text-cyan-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[-2px] group-hover:translate-y-[2px] transition-all duration-100 ease-linear mix-blend-screen select-none pointer-events-none",
                    className
                )}
                aria-hidden="true"
            >
                {text}
            </span>

            {/* Jitter Effect (Optional - purely CSS based/simple transform for now for the industrial feel) */}
        </div>
    );
}
