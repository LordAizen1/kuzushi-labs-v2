"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SMOOTH_EASE, DURATION } from "@/lib/constants";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

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

interface NavbarProps {
    showBackButton?: boolean;
}

export default function Navbar({ showBackButton = false }: NavbarProps) {
    const router = useRouter();

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference text-white pointer-events-none"
        >
            {/* All Nav Items - Even spacing on mobile, grouped on desktop */}
            <div className="flex w-full items-center justify-between md:justify-start gap-1 md:gap-2 pointer-events-auto">
                {/* Logo/Icon OR Back Button */}
                {showBackButton ? (
                    <button
                        onClick={() => router.back()}
                        className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[9px] md:text-[11px] uppercase tracking-widest font-bold"
                    >
                        <ArrowLeft size={16} className="md:w-5 md:h-5" />
                        <span className="hidden md:inline">Back</span>
                    </button>
                ) : (
                    <Link href="/" className="group flex items-center justify-center transition-opacity hover:opacity-80">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            fill="currentColor"
                            className="w-8 h-8 md:w-10 md:h-10 text-accent animate-spin-slow group-hover:text-white transition-colors"
                        >
                            <path d="M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"></path>
                        </svg>
                    </Link>
                )}

                {/* Spacer - Hidden on mobile, grows on desktop to push buttons right */}
                <div className="hidden md:block md:flex-grow"></div>

                {/* Studio Link */}
                <Link
                    href="#studio"
                    className="relative flex items-center justify-center min-w-[55px] md:min-w-[80px] px-2 py-2 md:px-4 md:py-2.5 h-[28px] md:h-[36px] bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group transition-all duration-300 hover:border-white/50"
                >
                    <div className="relative flex items-center justify-center w-auto h-full">
                        {/* Sparkle Icon - Hover Effect */}
                        <div className="absolute left-[-10px] md:left-[-12px] top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="10" height="10" rx="5" fill="#E4FF4E" />
                                <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#222222" />
                            </svg>
                        </div>
                        <span className="text-[9px] md:text-[11px] uppercase tracking-widest font-bold text-white group-hover:text-[#E4FF4E] group-hover:translate-x-1 transition-all duration-300 flex items-center justify-center h-full pt-[1px]">
                            Studio
                        </span>
                    </div>
                </Link>

                {/* Works Link */}
                <Link
                    href="/works"
                    className="relative flex items-center justify-center min-w-[55px] md:min-w-[80px] px-2 py-2 md:px-4 md:py-2.5 h-[28px] md:h-[36px] bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group transition-all duration-300 hover:border-white/50"
                >
                    <div className="relative flex items-center justify-center w-auto h-full">
                        {/* Sparkle Icon - Hover Effect */}
                        <div className="absolute left-[-10px] md:left-[-12px] top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="10" height="10" rx="5" fill="#E4FF4E" />
                                <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#222222" />
                            </svg>
                        </div>
                        <span className="text-[9px] md:text-[11px] uppercase tracking-widest font-bold text-white group-hover:text-[#E4FF4E] group-hover:translate-x-1 transition-all duration-300 flex items-center justify-center h-full pt-[1px]">
                            Works
                        </span>
                    </div>
                </Link>

                {/* Lab Link */}
                <Link
                    href="/#lab"
                    className="relative flex items-center justify-center min-w-[55px] md:min-w-[80px] px-2 py-2 md:px-4 md:py-2.5 h-[28px] md:h-[36px] bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group transition-all duration-300 hover:border-white/50"
                >
                    <div className="relative flex items-center justify-center w-auto h-full">
                        {/* Sparkle Icon - Hover Effect */}
                        <div className="absolute left-[-10px] md:left-[-12px] top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="10" height="10" rx="5" fill="#E4FF4E" />
                                <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#222222" />
                            </svg>
                        </div>
                        <span className="text-[9px] md:text-[11px] uppercase tracking-widest font-bold text-white group-hover:text-[#E4FF4E] group-hover:translate-x-1 transition-all duration-300 flex items-center justify-center h-full pt-[1px]">
                            Lab
                        </span>
                    </div>
                </Link>

                {/* Hello CTA - With hover animations */}
                <motion.div
                    className="relative overflow-hidden"
                    initial="initial"
                    whileHover="hover"
                >
                    <Link
                        href="#contact"
                        className="relative flex items-center gap-1 min-w-[55px] md:min-w-[80px] px-2 py-2 md:px-3 md:py-2.5 h-[28px] md:h-[36px] text-black text-[9px] md:text-[11px] uppercase tracking-widest font-bold rounded-none overflow-hidden"
                    >
                        {/* Animated Background */}
                        <motion.div
                            className="absolute inset-0 bg-[#E4FF4E] z-0"
                            variants={{
                                initial: { backgroundColor: "#E4FF4E" },
                                hover: { backgroundColor: "#FFFFFF" }
                            }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Sparkle Icon - Fades in from left */}
                        <motion.div
                            className="relative z-10"
                            variants={{
                                initial: { opacity: 0, x: -8 },
                                hover: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[10px] md:h-[10px]">
                                <rect width="10" height="10" rx="5" fill="#222222" />
                                <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#E4FF4E" />
                            </svg>
                        </motion.div>

                        {/* Text - Shifts right on hover */}
                        <motion.span
                            className="relative z-10 flex items-center gap-1"
                            variants={{
                                initial: { x: -4 },
                                hover: { x: 2 }
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Hello
                            {/* Arrow - Fades out and moves right */}
                            <motion.svg
                                width="7"
                                height="6"
                                viewBox="0 0 7 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="md:w-2 md:h-2"
                                variants={{
                                    initial: { opacity: 1, x: 0 },
                                    hover: { opacity: 0, x: 8 }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <path d="M5.5 5V1M5.5 1H1.5M5.5 1L1.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </motion.svg>
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </motion.nav>
    );
}
