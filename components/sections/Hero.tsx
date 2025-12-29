"use client";

import { motion } from "framer-motion";
import LiquidText from "@/components/ui/LiquidText";
import Clock from "@/components/ui/Clock";
import { Instagram, Twitter, Linkedin, Mail, Play, Plus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AudioToggle from "@/components/ui/AudioToggle";
import { useEffect } from "react";

const DURATION = 1.0;
const SMOOTH_EASE = [0.25, 0.4, 0.25, 1] as const; // Custom cubic-bezier for smoothness

export default function Hero() {

    // Force hide scrollbar on the entire page for the "App Mode" feel
    useEffect(() => {
        // Target both html and body for maximum compatibility
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.documentElement.style.height = "100%";
        document.body.style.height = "100%";
        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.documentElement.style.height = "";
            document.body.style.height = "";
        };
    }, []);

    return (
        // Section: Fixed Height (100dvh prevents mobile bar issues), Overflow Hidden
        <section className="relative h-[100dvh] flex flex-col pt-24 pb-8 px-6 md:px-12 overflow-hidden items-center justify-between">

            {/* 1. Center - Main Title - Always grows to fill space between navbar and dashboard */}
            <div className="flex-grow flex items-center justify-center z-10 w-full">
                <div className="flex flex-col items-center">
                    <h1 className="flex flex-wrap justify-center gap-x-[1.5vw] text-[clamp(3.5rem,11vw,16rem)] font-bold uppercase leading-[0.85] tracking-tight text-center">
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.1 }}
                            className="relative inline-block"
                        >
                            <span className="opacity-0 select-none pointer-events-none">KUZUSHI</span>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]">
                                <LiquidText text="KUZUSHI" fontSize={300} />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.2 }}
                            className="relative inline-block"
                        >
                            <span className="opacity-0 select-none pointer-events-none">LABS</span>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]">
                                <LiquidText text="LABS" fontSize={300} />
                            </div>
                        </motion.div>
                    </h1>
                </div>
            </div>

            {/* 2. Responsive Layout Container 
                Mobile: Bottom Grid (2 Cols), VH-based heights to prevent scroll.
                Tablet (md): Flex Col (Vertical Symmetry)
                Desktop (xl): Flex Row (Justify Between)
            */}
            <div className="w-full relative z-10 transition-all duration-500
                flex flex-col gap-2
                md:flex-col md:h-full md:gap-4
                xl:flex-row xl:h-auto xl:justify-between xl:items-end xl:gap-4 xl:content-normal
            ">

                {/* --- TOP ROW (Reel + Desc) --- */}
                {/* Mobile: Grid 2 Cols, Fixed VH Height. Tablet: Flex Row. Desktop: Flex None. */}
                <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:flex-1 md:min-h-0 xl:flex-none xl:w-auto xl:gap-4">

                    {/* Reel Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.4 }}
                        className="w-full md:w-1/2 xl:w-auto md:h-full col-span-1"
                    >
                        <div className="relative overflow-hidden w-full transition-all duration-500 bg-[#0a0a0a] border border-white/10
                            h-[18vh] min-h-[100px]               /* Mobile: Reduced VH */
                            md:h-full md:min-h-0                 /* Tablet */
                            xl:w-[250px] xl:h-[160px]            /* Desktop */
                            flex flex-col justify-between
                        ">
                            <div className="absolute inset-0 bg-black opacity-100 z-0">
                                <video
                                    className="w-full h-full object-cover opacity-80"
                                    src="https://r2.studiolumio.com/reel.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>

                            <div className="relative z-10 p-3 md:p-4 flex justify-between items-start text-white mix-blend-difference">
                                <span className="text-[10px] md:text-[14px] xl:text-[10px] uppercase font-bold tracking-wider">Curated<br />Stories</span>
                            </div>

                            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 xl:bottom-2 xl:right-2 flex items-center gap-1 md:gap-2 xl:gap-1 text-white text-[10px] md:text-[14px] xl:text-[10px] font-bold uppercase z-10 pt-2 pl-2 bg-gradient-to-tr from-black/50 to-transparent">
                                Play <Play size={10} className="md:w-4 md:h-4 xl:w-[10px] xl:h-[10px]" fill="currentColor" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Description Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.5 }}
                        className="w-full md:w-1/2 xl:w-auto flex flex-col md:h-full col-span-1"
                    >
                        <div className="p-3 md:p-6 xl:p-4 border border-white/10 bg-[#0a0a0a] flex flex-col justify-between
                            h-[18vh] min-h-[100px]               /* Mobile */
                            md:h-full md:min-h-0                 /* Tablet */
                            xl:w-[250px] xl:h-[160px]            /* Desktop */
                        ">
                            <p className="text-[11px] leading-tight md:text-[24px] md:leading-[1.2] xl:text-[15px] xl:leading-snug font-medium text-white tracking-tight line-clamp-4 md:line-clamp-none">
                                Kuzushi Labs crafts custom websites.
                            </p>

                            <div className="flex flex-col md:flex-row xl:flex-row items-center gap-1 md:gap-2 xl:gap-2 mt-auto w-full">
                                {/* Our Work Button - With hover animations */}
                                <Link href="/works" className="w-full">
                                    <motion.button
                                        className="relative flex items-center justify-center w-full h-[24px] md:h-[48px] xl:h-[32px] text-[9px] md:text-[13px] xl:text-[10px] uppercase font-bold tracking-widest overflow-hidden text-black"
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        {/* Animated Background */}
                                        <motion.div
                                            className="absolute inset-0 bg-white z-0"
                                            variants={{
                                                initial: { backgroundColor: "#FFFFFF" },
                                                hover: { backgroundColor: "#E4FF4E" }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Sparkle Icon - Fades in */}
                                        <motion.div
                                            className="relative z-10"
                                            variants={{
                                                initial: { opacity: 0, x: -6 },
                                                hover: { opacity: 1, x: 0 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[10px] md:h-[10px]">
                                                <rect width="10" height="10" rx="5" fill="#222222" />
                                                <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#E4FF4E" />
                                            </svg>
                                        </motion.div>

                                        {/* Text - Shifts right */}
                                        <motion.span
                                            className="relative z-10 flex items-center gap-1 ml-1"
                                            variants={{
                                                initial: { x: -4 },
                                                hover: { x: 2 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            Our Work
                                            {/* Plus icon - Fades out */}
                                            <motion.div
                                                variants={{
                                                    initial: { opacity: 1, x: 0 },
                                                    hover: { opacity: 0, x: 6 }
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Plus size={10} className="md:w-4 md:h-4 xl:w-[10px] xl:h-[10px]" strokeWidth={3} />
                                            </motion.div>
                                        </motion.span>
                                    </motion.button>
                                </Link>

                                {/* Contact Button - With hover animations */}
                                <motion.button
                                    className="relative flex items-center justify-center w-full h-[24px] md:h-[48px] xl:h-[32px] text-[9px] md:text-[13px] xl:text-[10px] uppercase font-bold tracking-widest overflow-hidden text-black"
                                    initial="initial"
                                    whileHover="hover"
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

                                    {/* Sparkle Icon - Fades in */}
                                    <motion.div
                                        className="relative z-10"
                                        variants={{
                                            initial: { opacity: 0, x: -6 },
                                            hover: { opacity: 1, x: 0 }
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[10px] md:h-[10px]">
                                            <rect width="10" height="10" rx="5" fill="#222222" />
                                            <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#E4FF4E" />
                                        </svg>
                                    </motion.div>

                                    {/* Text - Shifts right */}
                                    <motion.span
                                        className="relative z-10 flex items-center gap-1 ml-1"
                                        variants={{
                                            initial: { x: -4 },
                                            hover: { x: 2 }
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Contact
                                        {/* Arrow icon - Fades out */}
                                        <motion.div
                                            variants={{
                                                initial: { opacity: 1, x: 0 },
                                                hover: { opacity: 0, x: 6 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowUpRight size={10} className="md:w-4 md:h-4 xl:w-[10px] xl:h-[10px]" strokeWidth={3} />
                                        </motion.div>
                                    </motion.span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- MIDDLE (Socials) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.6 }}
                    className="w-full md:flex-none xl:w-auto"
                >
                    <div className="w-full xl:w-auto flex flex-row gap-2 md:gap-4 xl:gap-2 md:items-stretch">

                        {/* Social Icons Group - Single Row Mobile */}
                        <div className="flex flex-1 gap-2 md:gap-4 xl:gap-2 justify-between xl:justify-start">
                            {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="flex-1 xl:flex-none w-12 h-12 md:w-20 md:h-20 xl:w-12 xl:h-12 flex items-center justify-center border border-white/10 bg-transparent text-white/60 hover:text-black hover:bg-[#e4ff4e] hover:border-[#e4ff4e] transition-colors rounded-sm xl:rounded-none">
                                    <Icon size={14} className="md:w-5 md:h-5 xl:w-4 xl:h-4" />
                                </a>
                            ))}
                        </div>

                        {/* Separator */}
                        <div className="hidden xl:flex items-center">
                            <div className="w-px h-6 bg-white/20"></div>
                        </div>

                        {/* Toggle */}
                        <div className="flex w-auto md:w-auto xl:w-auto">
                            <div className="w-12 md:w-20 h-12 md:h-20 xl:w-12 xl:h-12 flex items-center justify-center border border-white/10 bg-transparent text-white hover:border-white/40 hover:bg-white/5 transition-colors rounded-sm xl:rounded-none">
                                <AudioToggle />
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* --- RIGHT/BOTTOM (Clocks) --- */}
                {/* Mobile: Grid 2 Cols, Fixed VH Height. Tablet: Flex Grow. Desktop: Flex None. */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.7 }}
                    className="w-full md:flex-1 md:min-h-0 xl:w-auto xl:flex-none xl:h-auto"
                >
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-4 xl:flex xl:flex-row xl:gap-4 xl:items-end w-full md:h-full">
                        {/* Clock 1 */}
                        <div className="w-full h-[18vh] min-h-[100px] md:h-full xl:w-[250px] xl:h-[160px]">
                            <Clock timezone="Asia/Kolkata" label="Kolkata, IN" />
                        </div>
                        {/* Clock 2 */}
                        <div className="w-full h-[18vh] min-h-[100px] md:h-full xl:w-[250px] xl:h-[160px]">
                            <Clock timezone="America/New_York" label="New York, USA" />
                        </div>
                    </div>
                </motion.div>

            </div>
            {/* Grain Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </section>
    );
}
