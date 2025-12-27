"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useIntroStore } from "@/lib/store";
import { cn } from "@/lib/utils";

type IntroPhase = "flicker" | "split" | "waiting" | "undo" | "complete";

export default function IntroGate({ children }: { children: React.ReactNode }) {
    const { hasIntroRun, setIntroFinished } = useIntroStore();
    const [phase, setPhase] = useState<IntroPhase>("flicker");

    // If intro has already run, skip animation and correct flicker flash
    // We use a mounted check to avoid hydration mismatch if using persist
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // DEV MODE: Commented out to force intro every time for testing
        // if (useIntroStore.getState().hasIntroRun) {
        //     setPhase("complete");
        // }
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

    const handleInteraction = () => {
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

    // --- VARIANTS --- //

    const smoothEase: [number, number, number, number] = [0.19, 1, 0.22, 1];

    const flickerText = {
        flicker: {
            opacity: [0, 1, 0.2, 1, 0.1, 1, 0.1, 1, 0.5, 1],
            transition: { duration: 1.5, times: [0, 0.1, 0.3, 0.4, 0.6, 0.7, 0.8, 0.85, 0.9, 1] }
        },
        split: { opacity: 1 },
        waiting: { opacity: 1 },
        undo: { opacity: 1 }
    };

    // Center container expands to push text apart
    const centerContainer = {
        closed: { width: 0, opacity: 0, overflow: "hidden" },
        open: {
            width: "auto",
            opacity: 1,
            transition: {
                width: { duration: 1.2, ease: smoothEase },
                opacity: { duration: 0.8, delay: 0.2 } // Fade in slightly after width starts
            }
        }
    };

    const gateContainer = {
        visible: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 1.5, ease: "easeInOut" as const } }
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
                        {/* TEXT CONTAINER - Flexbox for automatic centering */}
                        <div className="relative flex items-center justify-center gap-6"> {/* Gap-6 represents the natural space between words */}

                            {/* KUZUSHI */}
                            <motion.h1
                                className="text-[clamp(2rem,5vw,4rem)] font-bold text-white uppercase leading-none tracking-tight z-20 whitespace-nowrap"
                                animate={phase}
                            >
                                <motion.span animate={phase} variants={flickerText}>KUZUSHI</motion.span>
                            </motion.h1>

                            {/* BUTTONS - Expands to separate */}
                            <motion.div
                                initial="closed"
                                animate={phase === "split" || phase === "waiting" ? "open" : "closed"}
                                variants={centerContainer}
                                className="z-10 flex flex-col justify-center overflow-hidden"
                            >
                                <div className="flex items-center gap-6 px-4 py-2 mx-4 border border-white/10 bg-[#0a0a0a] min-w-max justify-between shadow-2xl whitespace-nowrap">
                                    <motion.button
                                        onClick={handleInteraction}
                                        className="relative flex items-center justify-center px-6 py-2.5 min-w-[180px] h-[40px] text-black text-[12px] uppercase font-bold overflow-hidden group"
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        {/* Animated Background */}
                                        <motion.div
                                            className="absolute inset-0 bg-[#e4ff4e] z-0"
                                            variants={{
                                                initial: { backgroundColor: "#e4ff4e" },
                                                hover: { backgroundColor: "#ffffff" }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Content Container */}
                                        <div className="relative z-10 flex items-center justify-center w-full h-full gap-2">
                                            {/* Sparkle Icon - Absolute Left. Pure Motion. */}
                                            <motion.div
                                                className="absolute left-[-16px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
                                                variants={{
                                                    initial: { opacity: 0, x: -8, left: -20 },
                                                    hover: { opacity: 1, x: 0, left: 16 } // Popping in on the left padding
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="10" height="10" rx="5" fill="#222222" />
                                                    <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill="#e4ff4e" />
                                                </svg>
                                            </motion.div>

                                            {/* Text */}
                                            <motion.span
                                                className="text-black block flex items-center justify-center h-full pt-[1px]"
                                                variants={{
                                                    initial: { x: -6 },
                                                    hover: { x: 6 } // Shift right to make room for sparkle
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                Enter with sound
                                            </motion.span>

                                            {/* Arrow (Right) */}
                                            <motion.div
                                                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
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
                                        onClick={handleInteraction}
                                        className="text-white text-[12px] uppercase font-bold px-4 py-2 hover:text-[#e4ff4e] underline decoration-zinc-700 hover:decoration-[#e4ff4e] underline-offset-4 transition-all"
                                    >
                                        Enter without sound
                                    </button>
                                </div>
                            </motion.div>

                            {/* LABS */}
                            <motion.h1
                                className="text-[clamp(2rem,5vw,4rem)] font-bold text-white uppercase leading-none tracking-tight z-20 whitespace-nowrap"
                                animate={phase}
                                onAnimationComplete={(definition) => {
                                    if (phase === "undo") handleUndoComplete();
                                }}
                            >
                                <motion.span animate={phase} variants={flickerText}>LABS</motion.span>
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
