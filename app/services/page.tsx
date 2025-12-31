"use client";

import Navbar from "@/components/layout/Navbar";
import Solutions from "@/components/sections/Solutions";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import GridMotion from "@/components/GridMotion";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion } from "framer-motion";

export default function Services() {
    return (
        <main className="relative bg-background min-h-screen overflow-x-hidden selection:bg-accent/30">
            <Navbar />

            {/* Animated Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <GridMotion items={Array.from({ length: 28 }, () => "")} gradientColor="#111" />
            </div>

            <div className="relative z-10">
                {/* Services Hero */}
                <section className="pt-32 pb-12 px-6 md:px-12 flex flex-col items-center justify-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[clamp(3.5rem,10vw,8rem)] font-bold text-white uppercase leading-[0.8] tracking-tight font-oswald mb-8"
                    >
                        Our <AuroraText>Services</AuroraText>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl text-white/60 text-lg md:text-xl font-geist-sans leading-relaxed"
                    >
                        Comprehensive AI solutions tailored to your enterprise. From strategy to deployment, we engineer the future of your business.
                    </motion.p>
                </section>

                {/* Migrated Sections */}
                <Solutions />
                <Testimonials />
                <FAQ />
            </div>
        </main>
    );
}
