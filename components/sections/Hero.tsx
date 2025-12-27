"use client";

import { motion } from "framer-motion";
import { SMOOTH_EASE, DURATION } from "@/lib/constants";
import GlitchText from "@/components/ui/GlitchText";
import Clock from "@/components/ui/Clock";
import { Instagram, Twitter, Linkedin, Mail, Play, ArrowUpRight, Plus } from "lucide-react";
import AudioToggle from "@/components/ui/AudioToggle";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col pt-24 pb-8 px-6 md:px-12 overflow-hidden">

            {/* 1. Center - Main Title */}
            <div className="flex-grow flex items-center justify-center z-10">
                <div className="flex flex-col items-center">
                    <h1 className="flex flex-wrap justify-center gap-x-[2vw] text-[clamp(4rem,13vw,16rem)] font-bold uppercase leading-[0.85] tracking-tight text-center">
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.1 }}
                        >
                            <GlitchText text="Kuzushi" />
                        </motion.div>
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.2 }}
                        >
                            <GlitchText text="Labs" />
                        </motion.div>
                    </h1>
                </div>
            </div>

            {/* 2. Bottom Flex Layout */}
            <div className="w-full flex flex-wrap xl:flex-nowrap justify-between items-end gap-4 relative z-10 w-full px-0 pb-2">

                {/* Left Group: Reel + Text */}
                <div className="flex items-end gap-4">
                    {/* Reel Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.4 }}
                    >
                        {/* 250px Width */}
                        <div className="relative overflow-hidden rounded-sm w-[250px] h-[160px] flex flex-col justify-between group cursor-pointer transition-all duration-500 bg-black/50">
                            <div className="absolute inset-0 bg-black opacity-100 z-0">
                                <video
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    src="https://r2.studiolumio.com/reel.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>

                            <div className="relative z-10 p-4 flex justify-between items-start text-white mix-blend-difference">
                                <span className="text-[10px] uppercase font-bold tracking-wider">Curated<br />Stories</span>
                            </div>

                            <div className="absolute bottom-2 right-2 flex items-center gap-1 text-white text-[10px] font-bold uppercase z-10 pt-2 pl-2 bg-gradient-to-tr from-black/50 to-transparent">
                                Play Reel <Play size={10} fill="currentColor" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Description & CTAs Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.5 }}
                    >
                        {/* 250px Width */}
                        <div className="w-[250px] h-[160px] p-4 border border-white/10 bg-black/20 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-colors">
                            <p className="text-[15px] font-medium text-white leading-snug tracking-tight">
                                Kuzushi Labs crafts custom websites that go beyond pretty pixels.
                            </p>
                            <div className="flex flex-row items-center gap-2 mt-auto w-full">
                                {/* Our Work: White Box -> Yellow on Hover */}
                                <motion.button
                                    className="relative flex items-center justify-center flex-1 h-[32px] text-[10px] uppercase font-bold tracking-widest overflow-hidden group text-black"
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white z-0"
                                        variants={{
                                            initial: { backgroundColor: "#ffffff" },
                                            hover: { backgroundColor: "#e4ff4e" }
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                                        {/* Sparkle Enter */}
                                        <motion.div
                                            className="absolute left-[-10px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
                                            variants={{
                                                initial: { opacity: 0, x: -5, left: -10 },
                                                hover: { opacity: 1, x: 0, left: 12 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="10" height="10" rx="5" fill="#222222" />
                                                <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#e4ff4e" />
                                            </svg>
                                        </motion.div>
                                        {/* Text Shift */}
                                        <motion.span
                                            className="block pt-[1px]"
                                            variants={{
                                                initial: { x: -6 }, // Shifted left to avoid collision
                                                hover: { x: 4 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            Our Work
                                        </motion.span>
                                        {/* Plus Exit */}
                                        <motion.div
                                            className="absolute right-2 top-1/2 -translate-y-1/2" // Moved closer to edge
                                            variants={{
                                                initial: { opacity: 1, x: 0 },
                                                hover: { opacity: 0, x: 10 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Plus size={10} strokeWidth={3} />
                                        </motion.div>
                                    </div>
                                </motion.button>

                                {/* Contact Us: Yellow Box -> White on Hover */}
                                <motion.button
                                    className="relative flex items-center justify-center flex-1 h-[32px] text-[10px] uppercase font-bold tracking-widest overflow-hidden group text-black"
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-[#e4ff4e] z-0"
                                        variants={{
                                            initial: { backgroundColor: "#e4ff4e" },
                                            hover: { backgroundColor: "#ffffff" }
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                                        {/* Sparkle Enter */}
                                        <motion.div
                                            className="absolute left-[-10px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
                                            variants={{
                                                initial: { opacity: 0, x: -5, left: -10 },
                                                hover: { opacity: 1, x: 0, left: 10 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="10" height="10" rx="5" fill="#222222" />
                                                <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#e4ff4e" />
                                            </svg>
                                        </motion.div>
                                        {/* Text Shift */}
                                        <motion.span
                                            className="block pt-[1px]"
                                            variants={{
                                                initial: { x: -6 }, // Shifted left to avoid collision
                                                hover: { x: 4 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            Contact us
                                        </motion.span>
                                        {/* Arrow Exit */}
                                        <motion.div
                                            className="absolute right-2 top-1/2 -translate-y-1/2" // Moved closer to edge
                                            variants={{
                                                initial: { opacity: 1, x: 0 },
                                                hover: { opacity: 0, x: 10 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowUpRight size={10} strokeWidth={3} />
                                        </motion.div>
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Middle Group: Social Icons & Audio Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.6 }}
                    className="flex items-end justify-center pb-2 px-2"
                >
                    <div className="flex gap-2">
                        {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 text-white/60 hover:text-black hover:bg-[#e4ff4e] hover:border-[#e4ff4e] transition-colors duration-300">
                                <Icon size={16} />
                            </a>
                        ))}

                        <div className="ml-2 w-12 h-12 flex items-center justify-center border-l border-white/10 opacity-50">
                            <div className="w-[1px] h-full bg-white/20"></div>
                        </div>

                        <div className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:border-white/40 hover:bg-white/5 transition-colors">
                            <AudioToggle />
                        </div>
                    </div>
                </motion.div>

                {/* Right Group: Clocks */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: DURATION, ease: SMOOTH_EASE, delay: 0.7 }}
                    className="flex gap-4 items-end"
                >
                    <Clock timezone="Asia/Kolkata" label="Kolkata, IN" />
                    <Clock timezone="America/New_York" label="New York, USA" />
                </motion.div>

            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </section>
    );
}
