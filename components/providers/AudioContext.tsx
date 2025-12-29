"use client";

import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";

interface AudioContextType {
    isPlaying: boolean;
    volume: number;
    setVolume: (value: number) => void;
    toggle: () => void;
    play: () => void;
    pause: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const AUDIO_URL = "https://res.cloudinary.com/dgplteq4r/video/upload/v1766228054/Syko_-_BrooklynBloodPop_prod._Duvaal_yaucpo.mp3";
const DEFAULT_VOLUME = 0.3; // Start at 30% volume so it never blasts at full

export function AudioProvider({ children }: { children: ReactNode }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolumeState] = useState(DEFAULT_VOLUME);
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
        audioRef.current.volume = DEFAULT_VOLUME;

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

    // Keep the underlying <audio> element in sync with volume state
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

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

    const setVolume = (value: number) => {
        // Clamp between 0 and 1
        const clamped = Math.min(1, Math.max(0, value));
        setVolumeState(clamped);
        if (audioRef.current) {
            audioRef.current.volume = clamped;
        }
    };

    const toggle = () => {
        if (isPlaying) pause();
        else play();
    };

    return (
        <AudioContext.Provider value={{ isPlaying, volume, setVolume, toggle, play, pause }}>
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
