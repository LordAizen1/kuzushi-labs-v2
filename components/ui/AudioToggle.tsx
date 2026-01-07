"use client";

import { motion } from "framer-motion";
import { useAudio } from "@/components/providers/AudioContext";
import { PiSpeakerHighDuotone, PiSpeakerSlashDuotone } from "react-icons/pi";

export default function AudioToggle() {
    const { isPlaying, toggle } = useAudio();

    return (
        <button
            onClick={toggle}
            className="w-full h-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
            aria-label={isPlaying ? "Mute background music" : "Play background music"}
        >
            <motion.div
                key={isPlaying ? "playing" : "paused"}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
                {isPlaying ? (
                    <PiSpeakerHighDuotone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                ) : (
                    <PiSpeakerSlashDuotone className="w-5 h-5 md:w-6 md:h-6 text-white/50" />
                )}
            </motion.div>
        </button>
    );
}
