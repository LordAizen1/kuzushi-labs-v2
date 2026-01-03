"use client";

import Navbar from "@/components/layout/Navbar";

import GridMotion from "@/components/GridMotion";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion } from "framer-motion";
import { colors } from "@/lib/theme";

export default function About() {
    return (
        <main className="relative bg-background min-h-screen overflow-x-hidden">
            <Navbar />

            {/* Animated Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <GridMotion items={Array.from({ length: 28 }, () => "")} gradientColor="#111" />
            </div>

            <div className="relative z-10">
                {/* Simple About Hero */}
                <section className="pt-32 pb-12 px-6 md:px-12 flex flex-col items-center justify-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[clamp(3.5rem,10vw,8rem)] font-bold text-white uppercase leading-[0.8] tracking-tight font-oswald mb-8"
                    >
                        We Are <AuroraText>Kuzushi Labs</AuroraText>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl text-white/70 text-lg md:text-xl font-geist-sans leading-relaxed"
                    >
                        Here at Kuzushi Labs we engineer AI native solutions. We are committed to <span className="font-pixel text-accent text-sm md:text-base mx-1">creating</span> innovative and inspiring world-class products. Come <span className="font-pixel text-accent text-sm md:text-base mx-1">transform</span> your ideas into powerful realities.
                    </motion.p>
                </section>

                {/* Content can be expanded here later */}
                <div className="h-20"></div>
            </div>
        </main>
    );
}
