"use client";

import { motion } from "framer-motion";
import { useAudio } from "@/components/providers/AudioContext";

export default function AudioToggle() {
    const { isPlaying, toggle } = useAudio();

    return (
        <button
            onClick={toggle}
            className="w-full h-full flex items-center justify-center cursor-pointer"
            aria-label="Toggle background music"
        >
            <div className="w-[20px] h-[8px] flex items-center justify-center overflow-hidden">
                <svg width="20" height="8" viewBox="0 0 20 8" className="w-full h-full overflow-visible">
                    <motion.g
                        animate={{ x: [0, -20] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 1
                        }}
                    >
                        <motion.path
                            // 2-Cycle Path (Total width 40px). 
                            // Cycle 1: 0-20, Cycle 2: 20-40. 
                            // This allows seamless scrolling from 0 to -20.
                            d="M 0 4 Q 5 4, 10 4 T 20 4 T 30 4 T 40 4"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            variants={{
                                playing: {
                                    // High Amplitude Wave (y=1 to y=7)
                                    d: "M 0 4 Q 5 1, 10 4 T 20 4 T 30 4 T 40 4",
                                    transition: { duration: 0.5, ease: "easeInOut" }
                                },
                                paused: {
                                    // Flat Line (Topology Preserved)
                                    d: "M 0 4 Q 5 4, 10 4 T 20 4 T 30 4 T 40 4",
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }
                            }}
                            animate={isPlaying ? "playing" : "paused"}
                        />
                    </motion.g>
                </svg>
            </div>
        </button>
    );
}
