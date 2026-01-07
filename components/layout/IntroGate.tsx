"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useIntroStore } from "@/lib/store";
import { useAudio } from "@/components/providers/AudioContext";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme";

type IntroPhase = "flicker" | "split" | "waiting" | "undo" | "complete";

export default function IntroGate({ children }: { children: React.ReactNode }) {
    const { hasIntroRun, setIntroFinished } = useIntroStore();
    const [phase, setPhase] = useState<IntroPhase>("flicker");
    const { play } = useAudio();

    // If intro has already run, skip animation and correct flicker flash
    // We use a mounted check to avoid hydration mismatch if using persist
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Check if intro has already run - skip to complete state
        if (useIntroStore.getState().hasIntroRun) {
            setPhase("complete");
        }
    }, []);

    // --- PHASE 1: FLICKER (Auto) ---
    useEffect(() => {
        if (phase === "flicker" && isMounted) {
            const timer = setTimeout(() => {
                setPhase("split");
            }, 1500); // 1.5s Flicker
            return () => clearTimeout(timer);
        }
    }, [phase, isMounted, hasIntroRun]);

    // --- PHASE 2: SPLIT (Auto) ---
    // Transition handled by layout animation latency, but we trigger "waiting"
    // after the split *start* effectively.
    useEffect(() => {
        if (phase === "split") {
            // Allow split animation to settle before setting state to 'waiting' 
            // (Waiting enables the buttons)
            const timer = setTimeout(() => {
                setPhase("waiting");
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    // --- PHASE 3: AUTO-ENTER (3s Timeout) ---
    useEffect(() => {
        if (phase === "waiting") {
            const timer = setTimeout(() => {
                handleInteraction(false); // Enter without sound
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    const handleInteraction = (shouldPlay: boolean = false) => {
        if (shouldPlay) play();
        setPhase("undo");
    };

    // --- PHASE 4: UNDO -> COMPLETE ---
    const handleUndoComplete = () => {
        // Called when the "Undo" text merge animation finishes
        // Then we fade out the container
        setTimeout(() => {
            setIntroFinished();
            setPhase("complete");
        }, 800);
    };

    // If already complete, just render children
    if (isMounted && hasIntroRun) return <>{children}</>;
    // Prevent flash content before hydration/check
    if (!isMounted) return null;

    // ... (rest of file)

    {/* Arrow (Right) */ }
    <motion.div
        className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center"
        variants={{
            initial: { opacity: 1, x: 0 },
            hover: { opacity: 0, x: 10 }
        }}
        transition={{ duration: 0.3 }}
    >
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5V1M5 1H1M5 1L1 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </motion.div>

    // --- VARIANTS --- //

    const smoothEase: [number, number, number, number] = [0.19, 1, 0.22, 1];

    // Parent container for text (handles staggering)
    const textContainer = {
        flicker: {
            transition: { staggerChildren: 0.08, delayChildren: 0.2 }
        },
        split: { transition: { staggerChildren: 0 } }, // No stagger during split
        waiting: {},
        undo: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 } // Reverse stagger for exit
        }
    };

    // Individual character flicker
    const charVariants = {
        flicker: {
            opacity: [0, 1, 0, 1, 1],
            transition: { duration: 0.8, times: [0, 0.2, 0.5, 0.8, 1] }
        },
        split: { opacity: 1 },
        waiting: { opacity: 1 },
        undo: {
            opacity: [1, 0, 1, 0, 0], // Flicker out
            transition: { duration: 0.8 }
        }
    };

    // Center container expands to push text apart - SLOWER (Desktop)
    const centerContainer = {
        closed: {
            width: 0,
            opacity: 0,
            overflow: "hidden",
            transition: {
                width: { duration: 2.5, ease: smoothEase },
                opacity: { duration: 0.5 }
            }
        },
        open: {
            width: "auto",
            opacity: 1,
            transition: {
                width: { duration: 2.5, ease: smoothEase },
                opacity: { duration: 1.0 }
            }
        }
    };

    // Mobile container - just fade in fast (no width animation)
    const mobileCenterContainer = {
        closed: {
            opacity: 0,
            transition: { duration: 0.2 }
        },
        open: {
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    const gateContainer = {
        visible: { opacity: 1 },
        exit: {
            opacity: 0,
            transition: { duration: 2.0, ease: "easeInOut" as const } // Slower exit for smoothness
        }
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {phase !== "complete" && (
                    <motion.div
                        className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
                        initial="visible"
                        animate="visible"
                        exit="exit"
                        variants={gateContainer}
                    >
                        {/* TEXT + BUTTONS CONTAINER - Column on mobile, Row on desktop */}
                        <div className="relative flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">

                            {/* === MOBILE LAYOUT === */}
                            {/* TEXT ROW: KUZUSHI + LABS together on mobile */}
                            <div className="flex items-center justify-center gap-3 md:hidden">
                                <motion.h1
                                    className="flex text-[clamp(2.5rem,14vw,7rem)] font-bold text-white uppercase leading-none tracking-tight z-20 whitespace-nowrap"
                                    animate={phase}
                                    variants={textContainer}
                                >
                                    {Array.from("KUZUSHI").map((char, i) => (
                                        <motion.span key={i} variants={charVariants}>{char}</motion.span>
                                    ))}
                                </motion.h1>
                                <motion.h1
                                    className="flex text-[clamp(2.5rem,14vw,7rem)] font-bold text-white uppercase leading-none tracking-tight z-20 whitespace-nowrap"
                                    animate={phase}
                                    variants={textContainer}
                                    onAnimationComplete={(definition) => {
                                        if (phase === "undo") handleUndoComplete();
                                    }}
                                >
                                    {Array.from("LABS").map((char, i) => (
                                        <motion.span key={i} variants={charVariants}>{char}</motion.span>
                                    ))}
                                </motion.h1>
                            </div>

                            {/* MOBILE BUTTONS - Below text, horizontal row */}
                            <motion.div
                                className="md:hidden z-10 flex flex-col justify-center"
                                initial="closed"
                                animate={phase === "split" || phase === "waiting" ? "open" : "closed"}
                                variants={mobileCenterContainer}
                            >
                                <div className="flex flex-row items-center justify-center gap-4 px-4 py-3 border border-white/10 bg-[#0a0a0a] shadow-2xl whitespace-nowrap">
                                    {/* Enter with sound - Navbar-style hover animations */}
                                    <motion.button
                                        onClick={() => handleInteraction(true)}
                                        className="group relative flex items-center justify-center px-5 py-2.5 bg-accent hover:bg-white text-black text-[11px] font-medium transition-colors duration-300 overflow-hidden"
                                        initial={{ x: -30, opacity: 0 }}
                                        animate={phase === "split" || phase === "waiting" ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                                    >
                                        {/* Sparkle - Slides in from left */}
                                        <div className="flex items-center justify-center opacity-0 -translate-x-2 w-0 mr-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-[14px] group-hover:mr-2 transition-all duration-300 ease-out">
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                                <rect width="10" height="10" rx="5" fill="#222222" />
                                                <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill={colors.accent} />
                                            </svg>
                                        </div>

                                        {/* Text - Shifts right on hover */}
                                        <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                                            Enter with sound
                                        </span>

                                        {/* Arrow - Fades out and slides right */}
                                        <div className="flex items-center justify-center ml-2 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 ease-out">
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                                <path d="M5 5V1M5 1H1M5 1L1 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </motion.button>

                                    {/* Enter without sound */}
                                    <motion.button
                                        onClick={() => handleInteraction(false)}
                                        className="text-white text-[11px] font-medium px-2 py-2 hover:text-accent transition-colors"
                                        initial={{ x: 30, opacity: 0 }}
                                        animate={phase === "split" || phase === "waiting" ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                                    >
                                        Enter without sound
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* === DESKTOP LAYOUT === */}
                            {/* KUZUSHI - Desktop only */}
                            <motion.h1
                                className="hidden md:flex text-[clamp(2rem,5vw,4rem)] font-bold text-white uppercase leading-none tracking-tight z-20 whitespace-nowrap"
                                animate={phase}
                                variants={textContainer}
                            >
                                {Array.from("KUZUSHI").map((char, i) => (
                                    <motion.span key={i} variants={charVariants}>{char}</motion.span>
                                ))}
                            </motion.h1>

                            {/* DESKTOP BUTTONS - Between text with full hover animations */}
                            <motion.div
                                className="hidden md:flex z-10 flex-col justify-center overflow-hidden"
                                initial="closed"
                                animate={phase === "split" || phase === "waiting" ? "open" : "closed"}
                                variants={centerContainer}
                            >
                                <div className="flex flex-row items-center gap-6 px-4 py-2 mx-4 border border-white/10 bg-[#0a0a0a] min-w-max justify-between shadow-2xl whitespace-nowrap">
                                    <motion.button
                                        onClick={() => handleInteraction(true)}
                                        className="relative flex items-center justify-center px-6 py-2.5 min-w-[220px] h-[40px] text-black text-[12px] uppercase font-bold overflow-hidden group"
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        {/* Animated Background */}
                                        <motion.div
                                            className="absolute inset-0 bg-accent z-0"
                                            variants={{
                                                initial: { backgroundColor: colors.accent },
                                                hover: { backgroundColor: "#ffffff" }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="relative z-10 flex items-center justify-center w-full h-full gap-2">
                                            <motion.div
                                                className="absolute left-[-16px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
                                                variants={{
                                                    initial: { opacity: 0, x: -8, left: -20 },
                                                    hover: { opacity: 1, x: 0, left: 16 }
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="10" height="10" rx="5" fill="#222222" />
                                                    <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill={colors.accent} />
                                                </svg>
                                            </motion.div>
                                            <motion.span
                                                className="text-black block flex items-center justify-center h-full pt-[1px]"
                                                variants={{
                                                    initial: { x: -6 },
                                                    hover: { x: 6 }
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                Enter with sound
                                            </motion.span>
                                            <motion.div
                                                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center"
                                                variants={{
                                                    initial: { opacity: 1, x: 0 },
                                                    hover: { opacity: 0, x: 10 }
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 5V1M5 1H1M5 1L1 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </motion.button>
                                    <button
                                        onClick={() => handleInteraction(false)}
                                        className="text-white text-[12px] uppercase font-bold px-4 py-2 hover:text-accent underline decoration-zinc-700 hover:decoration-accent underline-offset-4 transition-all"
                                    >
                                        Enter without sound
                                    </button>
                                </div>
                            </motion.div>

                            {/* LABS - Desktop only */}
                            <motion.h1
                                className="hidden md:flex text-[clamp(2rem,5vw,4rem)] font-bold text-white uppercase leading-none tracking-tight z-20 whitespace-nowrap"
                                animate={phase}
                                variants={textContainer}
                                onAnimationComplete={(definition) => {
                                    if (phase === "undo") handleUndoComplete();
                                }}
                            >
                                {Array.from("LABS").map((char, i) => (
                                    <motion.span key={i} variants={charVariants}>{char}</motion.span>
                                ))}
                            </motion.h1>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Main Content (Hidden/Revealed underneath, or rendered always) 
          If we want to "reveal" the homepage, it should be rendered behind the gate.
      */}
            <div className={cn("relative z-0", phase !== "complete" && "fixed inset-0 overflow-hidden")}>
                {children}
            </div>
        </>
    );
}
