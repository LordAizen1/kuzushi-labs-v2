"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SMOOTH_EASE, DURATION } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="w-10 h-10 text-accent animate-spin-slow group-hover:text-white transition-colors"
                    >
                        <path d="M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"></path>
                    </svg>
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
