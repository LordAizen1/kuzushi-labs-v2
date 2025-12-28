"use client";

import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";

interface AudioContextType {
    isPlaying: boolean;
    toggle: () => void;
    play: () => void;
    pause: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const AUDIO_URL = "https://res.cloudinary.com/dgplteq4r/video/upload/v1766228054/Syko_-_BrooklynBloodPop_prod._Duvaal_yaucpo.mp3";

export function AudioProvider({ children }: { children: ReactNode }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const isPlayingRef = useRef(false);

    // Sync ref with state for event listeners
    useEffect(() => {
        isPlayingRef.current = isPlaying;
    }, [isPlaying]);

    // Initialize Audio Object & Visibility Logic
    useEffect(() => {
        audioRef.current = new Audio(AUDIO_URL);
        audioRef.current.loop = true;

        const handleVisibilityChange = () => {
            if (!audioRef.current) return;

            if (document.hidden) {
                // Determine if we should pause (but keep state as "playing" if user intends it)
                audioRef.current.pause();
            } else {
                // If the user INTENDS for it to be playing, resume
                if (isPlayingRef.current) {
                    audioRef.current.play().catch(e => console.error("Resume failed:", e));
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Cleanup
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const play = () => {
        if (!audioRef.current) return;
        audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch((e) => console.error("Audio playback failed:", e));
    };

    const pause = () => {
        if (!audioRef.current) return;
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const toggle = () => {
        if (isPlaying) pause();
        else play();
    };

    return (
        <AudioContext.Provider value={{ isPlaying, toggle, play, pause }}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within an AudioProvider");
    }
    return context;
}
