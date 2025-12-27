"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "outline" | "solid";
    className?: string;
}

export default function MagneticButton({
    children,
    variant = "outline",
    className,
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for that "heavy" feel
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        x.set(middleX * 0.15); // Move 15% of distance
        y.set(middleY * 0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const baseStyles = "relative px-6 py-3 rounded-full text-sm uppercase tracking-widest font-medium transition-colors duration-300";
    const variants = {
        outline: "border border-accent/30 text-accent hover:bg-accent hover:text-background",
        solid: "bg-accent text-background hover:bg-white",
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={cn(baseStyles, variants[variant], className)}
            {...props as any}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}
