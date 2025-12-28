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
        <div className="w-full h-full border border-white/10 bg-[#0a0a0a] relative group hover:border-white/30 transition-colors overflow-hidden">

            {/* Grain/Starry Background Effect */}
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-150 contrast-200"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full p-4 md:p-6 flex flex-col justify-between">

                {/* TOP LEFT: Label & Digital Time */}
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] md:text-[12px] xl:text-[12px] uppercase tracking-wider font-bold text-white/70">
                        {label}
                    </span>
                    <span className="text-xl md:text-2xl xl:text-xl text-white font-bold leading-none tracking-tight">
                        {localDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}
                    </span>
                </div>

                {/* BOTTOM LAYER */}
                <div className="flex justify-between items-end w-full">
                    {/* LEFT: Timezone */}
                    <span className="text-[10px] md:text-[12px] xl:text-[11px] font-bold text-white/50 uppercase tracking-widest">
                        {timezoneAbbr}
                    </span>

                    {/* RIGHT: Analog Clock */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 xl:w-16 xl:h-16">
                        {/* Ticks */}
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-[1px] h-full left-1/2 -translate-x-1/2"
                                style={{ transform: `rotate(${i * 30}deg)` }}
                            >
                                <div className="w-full h-[6%] bg-white"></div>
                            </div>
                        ))}


                        {/* Hour Hand */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-[1.5px] h-[30%] bg-white origin-bottom rounded-full"
                            style={{ rotate: hourDegrees, y: "-100%", x: "-50%" }}
                        />
                        {/* Minute Hand */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-[1px] h-[45%] bg-[#d4d4d4] origin-bottom rounded-full"
                            style={{ rotate: minuteDegrees, y: "-100%", x: "-50%" }}
                        />
                        {/* Second Hand */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-[1px] h-[45%] bg-[#e4ff4e] origin-bottom rounded-full"
                            style={{ rotate: secondDegrees, y: "-100%", x: "-50%" }}
                        />
                        {/* Center Dot */}
                        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
}
