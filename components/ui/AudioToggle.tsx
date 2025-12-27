"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AudioToggle() {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        // Placeholder for actual audio logic
        setIsPlaying(!isPlaying);
    };

    return (
        <button
            onClick={toggleAudio}
            className="w-full h-full flex items-center justify-center cursor-pointer"
            aria-label="Toggle background music"
        >
            <div className="w-[20px] h-[8px] flex items-center justify-center overflow-hidden">
                <svg width="20" height="8" viewBox="0 0 20 8" className="w-full h-full">
                    {/* 
                       Simple line representation that scales vertically or wiggles. 
                       Since we can't do complex canvas analysis easily without audio source,
                       we'll use a scaled-Y animation on a path to simulate a wave.
                     */}
                    <motion.path
                        d="M0 4 Q 2.5 1, 5 4 T 10 4 T 15 4 T 20 4"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        variants={{
                            playing: {
                                d: [
                                    "M0 4 Q 2.5 1, 5 4 T 10 4 T 15 4 T 20 4",
                                    "M0 4 Q 2.5 7, 5 4 T 10 4 T 15 4 T 20 4",
                                    "M0 4 Q 2.5 1, 5 4 T 10 4 T 15 4 T 20 4"
                                ],
                                transition: {
                                    duration: 0.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                    times: [0, 0.5, 1]
                                }
                            },
                            paused: {
                                d: "M0 4 L 20 4",
                                transition: { duration: 0.2 }
                            }
                        }}
                        animate={isPlaying ? "playing" : "paused"}
                    />
                    {/* Alternative: A simple dash that turns into a wave. 
                         Let's just use a straight line that becomes a squiggly line.
                     */}
                </svg>
            </div>
        </button>
    );
}
