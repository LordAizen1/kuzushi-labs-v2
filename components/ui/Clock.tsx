"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ClockProps {
    timezone: string;
    label: string;
}

export default function Clock({ timezone, label }: ClockProps) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Get time for specific timezone
    const getDateInTimezone = (tz: string) => {
        return new Date(time.toLocaleString("en-US", { timeZone: tz }));
    };

    const localDate = getDateInTimezone(timezone);
    const seconds = localDate.getSeconds();
    const minutes = localDate.getMinutes();
    const hours = localDate.getHours();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;

    const timezoneAbbr = localDate.toLocaleTimeString("en-US", { timeZone: timezone, timeZoneName: "short" }).split(' ').pop();

    return (
        <div className="w-[220px] h-[160px] border border-white/10 bg-black/20 backdrop-blur-sm p-4 relative group hover:border-white/30 transition-colors flex justify-between items-end">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20" />

            {/* Left Side: Info */}
            <div className="flex flex-col justify-between h-full z-10 w-1/2">
                <div className="text-[12px] uppercase tracking-widest text-[#888] font-bold">{label}</div>

                <div className="flex flex-col gap-1 mt-auto">
                    <div className="text-xl text-white font-bold tracking-tight leading-none">
                        {localDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}
                    </div>
                    <div className="text-[9px] uppercase tracking-widest text-[#666] font-bold">
                        {timezoneAbbr}
                    </div>
                </div>
            </div>

            <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Ticks (Simplified) */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[1px] h-[3px] bg-white"
                        style={{
                            top: "2px",
                            transform: `rotate(${i * 30}deg)`,
                            transformOrigin: "50% 38px"
                        }}
                    />
                ))}

                {/* Hour Hand */}
                <motion.div
                    className="absolute w-[1.5px] h-5 bg-white origin-bottom z-10 rounded-full"
                    style={{ rotate: hourDegrees, bottom: "50%", x: "-50%" }}
                />
                {/* Minute Hand */}
                <motion.div
                    className="absolute w-[1px] h-7 bg-[#d4d4d4] origin-bottom z-10 rounded-full"
                    style={{ rotate: minuteDegrees, bottom: "50%", x: "-50%" }}
                />
                {/* Second Hand */}
                <motion.div
                    className="absolute w-[1px] h-8 bg-accent origin-bottom z-10 rounded-full"
                    style={{ rotate: secondDegrees, bottom: "50%", x: "-50%" }}
                />
                {/* Center Dot */}
                <div className="absolute w-1 h-1 bg-white rounded-full z-20" />
            </div>
        </div>
    );
}
