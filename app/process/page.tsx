"use client";

import Navbar from "@/components/layout/Navbar";
import DeliveryProcess from "@/components/sections/DeliveryProcess";
import TechStack from "@/components/sections/TechStack";
import GridMotion from "@/components/GridMotion";
import { TextGif } from "@/components/ui/text-gif";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProcessPage() {
    return (
        <main className="relative bg-background min-h-screen overflow-x-hidden selection:bg-accent/30">
            <Navbar />

            {/* Animated Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <GridMotion items={Array.from({ length: 24 }, () => "")} gradientColor="#111" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-12 px-6 md:px-12 flex flex-col items-center justify-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[clamp(3rem,8vw,6rem)] font-bold text-white uppercase leading-[0.85] tracking-tight font-oswald mb-6"
                >
                    Scientific <TextGif
                        text="Delivery"
                        gifUrl="https://media.giphy.com/media/3zvbrvbRe7wxBofOBI/giphy.gif"
                        size="custom"
                        className="text-[clamp(3rem,8vw,6rem)] font-bold font-oswald uppercase !leading-[0.85] tracking-tight pb-0 md:pb-0"
                    />
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-xl text-white/50 text-lg md:text-xl font-geist-sans leading-relaxed"
                >
                    We treat AI implementation as an engineering discipline, not an experiment. Precision, scalability, and impact are built-in defaults.
                </motion.p>
            </section>

            {/* Main Sections */}
            <DeliveryProcess />
            <TechStack />

            {/* CTA Footer */}
            <section className="relative z-10 py-24 border-t border-white/10 mt-12 bg-black/40 backdrop-blur-md">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold font-oswald text-white uppercase mb-8 leading-tight">
                        Ready to Engineer <br /> <span className="text-accent">Your Outcome?</span>
                    </h2>
                    <Link href="/contact">
                        <RainbowButton className="h-14 px-10 text-sm font-bold uppercase tracking-widest">
                            Start Discovery
                        </RainbowButton>
                    </Link>
                </div>
            </section>
        </main>
    );
}
