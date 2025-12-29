"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WORKS } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Particles from "@/components/Particles";
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight, Plus, Minus } from "lucide-react";
import AudioToggle from "@/components/ui/AudioToggle";

const FADE_IN = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
};

export default function ProjectDetailPage() {
    const params = useParams();
    // On mobile, show About section by default
    const [showAbout, setShowAbout] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    const projectId = params.id as string;
    const project = WORKS.find((w) => w.id === projectId || w.slug === projectId);

    // Lock scroll for this page (similar to Dynamic mode)
    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
        html.style.height = "100%";
        body.style.height = "100%";

        return () => {
            html.style.overflow = "";
            body.style.overflow = "";
            html.style.height = "";
            body.style.height = "";
        };
    }, []);

    if (!project) {
        return (
            <main className="relative bg-background min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <Link href="/works" className="text-accent hover:underline">
                        ← Back to Works
                    </Link>
                </div>
            </main>
        );
    }

    // Use galleryItems if available, otherwise just the featured image
    const galleryImages = project.galleryItems?.length ? project.galleryItems : [project.image];

    // Handle scroll for gallery navigation
    const handleWheel = (e: React.WheelEvent) => {
        if (e.deltaY > 0 && currentSlide < galleryImages.length - 1) {
            setCurrentSlide((prev) => prev + 1);
        } else if (e.deltaY < 0 && currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    };

    return (
        <main className="relative bg-background h-[100dvh] overflow-hidden">
            {/* Starfield Background */}
            <div className="absolute inset-0 z-0">
                <Particles
                    className="absolute inset-0 z-0"
                    particleCount={150}
                    particleSpread={10}
                    speed={0.05}
                    particleColors={["#ffffff"]}
                    moveParticlesOnHover={false}
                    alphaParticles={true}
                    particleBaseSize={50}
                    sizeRandomness={0.7}
                    cameraDistance={28}
                    disableRotation={false}
                />
            </div>

            <div className="relative z-10 h-full flex flex-col">
                {/* Navbar with Back Button */}
                <Navbar showBackButton={true} />

                {/* Main Content: Two Panels - Reversed order on mobile (info first, gallery below) */}
                <div className="flex-1 flex flex-col-reverse md:flex-row items-center md:justify-center gap-8 md:gap-16 pt-24 pb-24 md:pt-20 md:pb-0 px-6 md:px-12 overflow-y-auto md:overflow-visible">
                    {/* Left Panel: Gallery */}
                    <div
                        className="w-full max-w-[550px] md:w-[50vw] md:max-w-[600px]"
                        onWheel={handleWheel}
                    >
                        <motion.div
                            className="relative w-full aspect-[4/3] overflow-hidden border border-white/10 bg-black/40"
                            initial="hidden"
                            animate="visible"
                            variants={FADE_IN}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={galleryImages[currentSlide]}
                                        alt={`${project.title} - Slide ${currentSlide + 1}`}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Gallery Dots */}
                            {galleryImages.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {galleryImages.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentSlide(i)}
                                            className={`w-2 h-2 rounded-full transition-colors ${i === currentSlide ? "bg-accent" : "bg-white/30"
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Right Panel on Desktop, Top Panel on Mobile: Project Info */}
                    <div className="w-full md:flex-1 md:max-w-[500px] flex flex-col justify-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={FADE_IN}
                            className="space-y-8"
                        >
                            {/* Title */}
                            <h1 className="text-[clamp(2rem,4vw,4rem)] font-bold leading-[0.95] text-white break-words">
                                {project.title}
                            </h1>

                            {/* Action Links */}
                            <div className="space-y-4">
                                {/* About Project Toggle */}
                                <button
                                    onClick={() => setShowAbout(!showAbout)}
                                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider"
                                >
                                    About Project
                                    {showAbout ? <Minus size={14} /> : <Plus size={14} />}
                                </button>

                                {/* About Content */}
                                <AnimatePresence>
                                    {showAbout && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-4 space-y-4 text-white/70 text-sm leading-relaxed">
                                                <p>{project.fullDescription || project.description}</p>
                                                {project.services && (
                                                    <div>
                                                        <span className="text-white/40 uppercase text-[10px] tracking-wider">Services</span>
                                                        <p className="mt-1">{project.services.join(" • ")}</p>
                                                    </div>
                                                )}
                                                {project.industry && (
                                                    <div>
                                                        <span className="text-white/40 uppercase text-[10px] tracking-wider">Industry</span>
                                                        <p className="mt-1">{project.industry}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Visit Live Link */}
                                {project.websiteLink && (
                                    <a
                                        href={project.websiteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-accent hover:text-white transition-colors text-sm uppercase tracking-wider"
                                    >
                                        Visit live <ArrowUpRight size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-6 z-50">
                    {/* Social Icons */}
                    <div className="flex items-center gap-2 md:gap-3">
                        {[
                            { Icon: Instagram, href: "#" },
                            { Icon: Twitter, href: "#" },
                            { Icon: Linkedin, href: "#" },
                            { Icon: Mail, href: "#" },
                        ].map(({ Icon, href }, i) => (
                            <Link
                                key={i}
                                href={href}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 bg-transparent text-white/60 hover:text-black hover:bg-[#e4ff4e] hover:border-[#e4ff4e] transition-colors"
                            >
                                <Icon size={14} className="md:w-4 md:h-4" />
                            </Link>
                        ))}
                    </div>

                    {/* Audio Toggle */}
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 bg-transparent text-white hover:border-white/40 hover:bg-white/5 transition-colors">
                        <AudioToggle />
                    </div>
                </footer>
            </div>
        </main>
    );
}
