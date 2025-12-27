"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SMOOTH_EASE, DURATION } from "@/lib/constants";
import { Globe, ArrowUpRight } from "lucide-react";

const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: DURATION,
            ease: SMOOTH_EASE
        }
    }
};

export default function Navbar() {
    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference text-white pointer-events-none"
        >
            {/* Left: Logo/Icon */}
            <div className="pointer-events-auto">
                <Link href="/" className="group flex items-center justify-center transition-opacity hover:opacity-80">
                    <Globe className="w-8 h-8 text-accent animate-spin-slow group-hover:text-white transition-colors" />
                </Link>
            </div>

            {/* Right: Navigation Links & CTA */}
            <div className="flex items-center gap-2 pointer-events-auto">
                {/* Links: Individual Bordered Boxes */}
                {["Studio", "Works", "Lab"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative flex items-center justify-center px-6 py-2.5 h-[36px] bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group transition-all duration-300 hover:border-white/50"
                    >
                        {/* Container is explicitly relative for absolute icon positioning. w-auto ensures it hugs the text. */}
                        <div className="relative flex items-center justify-center w-auto h-full">
                            {/* Sparkle Icon - Absolute Position relative to Text. Centered (top-1/2). Left offset reduced to -16px */}
                            <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="10" height="10" rx="5" fill="#E4FF4E" />
                                    <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#222222" />
                                </svg>
                            </div>

                            {/* Text - Centered. top-1/2 icon aligns with this. Added pt-[1px] for visual uppercase centering. */}
                            <span className="text-[11px] uppercase tracking-widest font-bold text-white group-hover:text-[#E4FF4E] transition-all duration-300 group-hover:translate-x-2 flex items-center justify-center h-full pt-[1px]">
                                {item}
                            </span>
                        </div>
                    </Link>
                ))}

                {/* Hello CTA */}
                <motion.div
                    className="relative overflow-hidden"
                    initial="initial"
                    whileHover="hover"
                >
                    <Link
                        href="#contact"
                        className="relative flex items-center justify-center px-8 py-2.5 h-[36px] min-w-[110px] text-black text-[11px] uppercase tracking-widest font-bold transition-colors rounded-none"
                    >
                        {/* Animated Background - 0.3s */}
                        <motion.div
                            className="absolute inset-0 bg-accent z-0"
                            variants={{
                                initial: { backgroundColor: "#E4FF4E" },
                                hover: { backgroundColor: "#FFFFFF" }
                            }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Content Container */}
                        <div className="relative z-10 flex items-center justify-center w-full h-full">
                            {/* Sparkle Icon - Absolute Left. Pure Motion. */}
                            <motion.div
                                className="absolute left-[-16px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
                                variants={{
                                    initial: { opacity: 0, x: -8, left: -16 },
                                    hover: { opacity: 1, x: 0, left: -10 }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="10" height="10" rx="5" fill="#222222" />
                                    <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#E4FF4E" />
                                </svg>
                            </motion.div>

                            {/* Text "Hello" - 0.3s */}
                            <motion.span
                                className="text-black block flex items-center justify-center h-full pt-[1px]"
                                variants={{
                                    initial: { x: -6 },
                                    hover: { x: 4 }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                Hello
                            </motion.span>

                            {/* Arrow (Right) - 0.3s */}
                            <motion.div
                                className="absolute right-[-16px] top-1/2 -translate-y-1/2 flex items-center justify-center"
                                variants={{
                                    initial: { opacity: 1, x: 0 },
                                    hover: { opacity: 0, x: 10 }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <ArrowUpRight size={14} strokeWidth={2.5} />
                            </motion.div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </motion.nav>
    );
}
