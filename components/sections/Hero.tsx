"use client";

import { motion } from "framer-motion";
import Clock from "@/components/ui/Clock";
import CountUp from "@/components/CountUp";
import { Instagram, Twitter, Mail, Play } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import AudioToggle from "@/components/ui/AudioToggle";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import ColorBends from "@/components/ColorBends";
import { useEffect } from "react";
import { colors, gradientColors } from "@/lib/theme";

const DURATION = 1.0;
const SMOOTH_EASE = [0.25, 0.4, 0.25, 1] as const; // Custom cubic-bezier for smoothness

export default function Hero() {

    return (
        // Section: Min Height (100dvh prevents mobile bar issues), Overflow X Hidden
        <section className="relative min-h-[100dvh] flex flex-col pt-24 pb-8 px-6 md:px-12 overflow-x-hidden items-center justify-between">

            {/* Animated Background - ColorBends */}
            <div className="absolute inset-0 z-0 opacity-50">
                <ColorBends
                    // Toned down colors (darker/less saturated)
                    colors={["#b33e56", "#5a3cba", "#008f75"]}
                    transparent={false}
                />
            </div>

            {/* 1. Center - Main Title - Always grows to fill space between navbar and dashboard */}
            <div className="flex-grow flex items-center justify-center z-10 w-full pointer-events-none">
                <div className="flex flex-col items-center">
                    <h1 className="flex flex-wrap justify-center gap-x-[1.5vw] text-[clamp(3.5rem,11vw,16rem)] font-bold uppercase leading-[0.85] tracking-tight text-center text-white">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.1 }}
                        >
                            KUZUSHI
                        </motion.span>
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.2 }}
                        >
                            LABS
                        </motion.span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.3 }}
                        className="text-white/80 text-center max-w-xl mt-6 text-sm md:text-lg font-medium leading-relaxed font-geist-sans px-4 tracking-wide"
                    >
                        Kuzushi Labs is an AI-native product studio building production-grade AI systems for enterprises, startups, and government agencies. We design, ship, and scale end-to-end AI products - fast, secure, and measurable.
                    </motion.p>
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
                            md:h-[220px] md:min-h-0              /* Tablet */
                            xl:w-[250px] xl:h-[160px]            /* Desktop */
                            flex flex-col justify-between
                        ">
                            <div className="absolute inset-0 bg-black opacity-100 z-0">
                                <video
                                    className="w-full h-full object-cover opacity-80"
                                    src="https://res.cloudinary.com/dgplteq4r/video/upload/q_auto:good,f_auto/v1767440972/anowmly_-_Made_with_Clipchamp_uovtvz.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>

                            <div className="relative z-10 p-3 md:p-4 flex justify-between items-start text-white mix-blend-difference">
                                <span className="text-[10px] md:text-[14px] xl:text-[10px] uppercase font-bold tracking-wider">Curated<br />Projects</span>
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
                            md:h-[220px] md:min-h-0              /* Tablet */
                            xl:w-[250px] xl:h-[160px]            /* Desktop */
                        ">
                            <p className="text-[11px] leading-tight md:text-[24px] md:leading-[1.2] xl:text-[15px] xl:leading-snug font-medium text-white tracking-tight line-clamp-4 md:line-clamp-none">
                                Kuzushi Labs crafts custom websites.
                            </p>

                            <div className="flex flex-col md:flex-row xl:flex-row items-center gap-1 md:gap-2 xl:gap-2 mt-auto w-full">
                                <Link href="/works" className="flex-1 w-full">
                                    <InteractiveHoverButton className="w-full border-white/10 text-white text-[11px] uppercase tracking-widest font-bold whitespace-nowrap px-1 rounded-none">Our Work</InteractiveHoverButton>
                                </Link>
                                <Link href="/contact" className="flex-1 w-full">
                                    <InteractiveHoverButton className="w-full border-white/10 text-white text-[11px] uppercase tracking-widest font-bold whitespace-nowrap px-1 rounded-none">Contact</InteractiveHoverButton>
                                </Link>
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
                            <a href="#" className="flex-1 xl:flex-none w-12 h-12 md:w-20 md:h-20 xl:w-12 xl:h-12 flex items-center justify-center border border-white/10 bg-transparent text-white/60 hover:text-black hover:bg-accent hover:border-accent transition-colors rounded-sm xl:rounded-none" title="Instagram (Coming Soon)">
                                <Instagram size={14} className="md:w-5 md:h-5 xl:w-4 xl:h-4" />
                            </a>
                            <a href="https://x.com/arunanksharan" target="_blank" rel="noopener noreferrer" className="flex-1 xl:flex-none w-12 h-12 md:w-20 md:h-20 xl:w-12 xl:h-12 flex items-center justify-center border border-white/10 bg-transparent text-white/60 hover:text-black hover:bg-accent hover:border-accent transition-colors rounded-sm xl:rounded-none" title="X (Twitter)">
                                <Twitter size={14} className="md:w-5 md:h-5 xl:w-4 xl:h-4" />
                            </a>
                            <a href="https://www.linkedin.com/company/kuzushilabs/" target="_blank" rel="noopener noreferrer" className="flex-1 xl:flex-none w-12 h-12 md:w-20 md:h-20 xl:w-12 xl:h-12 flex items-center justify-center border border-white/10 bg-transparent text-white/60 hover:text-black hover:bg-accent hover:border-accent transition-colors rounded-sm xl:rounded-none" title="LinkedIn">
                                <FaLinkedinIn size={14} className="md:w-5 md:h-5 xl:w-4 xl:h-4" />
                            </a>
                            <a href="mailto:arunank@kuzushilabs.xyz" className="flex-1 xl:flex-none w-12 h-12 md:w-20 md:h-20 xl:w-12 xl:h-12 flex items-center justify-center border border-white/10 bg-transparent text-white/60 hover:text-black hover:bg-accent hover:border-accent transition-colors rounded-sm xl:rounded-none" title="Email">
                                <Mail size={14} className="md:w-5 md:h-5 xl:w-4 xl:h-4" />
                            </a>
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
                        <div className="w-full h-[18vh] min-h-[100px] md:h-[220px] xl:w-[250px] xl:h-[160px]">
                            <Clock timezone="Asia/Kolkata" label="Kolkata, IN" />
                        </div>
                        {/* Project Counter */}
                        <div className="w-full h-[18vh] min-h-[100px] md:h-[220px] xl:w-[250px] xl:h-[160px] border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center gap-2">
                            <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-white/50 font-geist-mono">Projects</span>
                            <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-white font-oswald">
                                <CountUp to={10} duration={2} />
                            </div>
                            <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-accent font-geist-mono">& Counting</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
