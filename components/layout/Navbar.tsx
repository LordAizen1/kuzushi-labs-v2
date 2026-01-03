"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SMOOTH_EASE, DURATION } from "@/lib/constants";
import { ArrowLeft, Menu, X } from "lucide-react";
import { colors } from "@/lib/theme";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: DURATION,
            ease: SMOOTH_EASE
        }
    }
};

const menuVariants = {
    closed: {
        opacity: 0,
        y: "-100%",
        transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1] as [number, number, number, number]
        }
    },
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1] as [number, number, number, number]
        }
    }
};

interface NavbarProps {
    showBackButton?: boolean;
}

const NavLink = ({ href, label, onClick, className = "" }: { href: string, label: string, onClick?: () => void, className?: string }) => (
    <Link
        href={href}
        onClick={onClick}
    >
        <InteractiveHoverButton className={cn("border-white/10 text-white text-[11px] uppercase tracking-widest font-bold whitespace-nowrap px-1 rounded-none", className)}>
            {label}
        </InteractiveHoverButton>
    </Link>
);

export default function Navbar({ showBackButton = false }: NavbarProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference text-white pointer-events-none"
            >
                <div className="flex w-full items-center justify-between pointer-events-auto">
                    {/* Logo / Back Button */}
                    {showBackButton ? (
                        <button
                            onClick={() => router.back()}
                            className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold"
                        >
                            <ArrowLeft size={16} className="w-5 h-5" />
                            <span className="hidden md:inline">Back</span>
                        </button>
                    ) : (
                        <Link href="/" className="group flex items-center justify-center transition-opacity hover:opacity-80 relative z-50">
                            <img
                                src="/logo-kuzushi-blackbg-Photoroom.png"
                                alt="Kuzushi Labs"
                                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                            />
                        </Link>
                    )}

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-50 p-2 text-white hover:text-accent transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        <NavLink href="/about" label="About" />
                        <NavLink href="/works" label="Works" />
                        <NavLink href="/process" label="Process" />
                        <NavLink href="/services" label="Services" />

                        {/* Hello CTA */}
                        <motion.div
                            className="relative overflow-hidden shrink-0"
                            initial="initial"
                            whileHover="hover"
                        >
                            <Link
                                href="/contact"
                                className="relative flex items-center gap-1 min-w-[80px] px-3 py-2.5 h-[36px] text-black text-[11px] uppercase tracking-widest font-bold rounded-none overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-accent z-0"
                                    variants={{
                                        initial: { backgroundColor: colors.accent },
                                        hover: { backgroundColor: "#FFFFFF" }
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    className="relative z-10"
                                    variants={{
                                        initial: { opacity: 0, x: -8 },
                                        hover: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[10px] h-[10px]">
                                        <rect width="10" height="10" rx="5" fill="#222222" />
                                        <path d="M4.99935 1.66602C5.00065 3.50642 6.49227 4.99805 8.33268 4.99935C6.49227 5.00065 5.00065 6.49227 4.99935 8.33268C4.99805 6.49227 3.50642 5.00065 1.66602 4.99935C3.50642 4.99805 4.99805 3.50642 4.99935 1.66602Z" fill={colors.accent} />
                                    </svg>
                                </motion.div>
                                <motion.span
                                    className="relative z-10 flex items-center gap-1"
                                    variants={{
                                        initial: { x: -4 },
                                        hover: { x: 2 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Hello
                                    <motion.svg
                                        width="7"
                                        height="6"
                                        viewBox="0 0 7 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-2 h-2"
                                        variants={{
                                            initial: { opacity: 1, x: 0 },
                                            hover: { opacity: 0, x: 8 }
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <path d="M5.5 5V1M5.5 1H1.5M5.5 1L1.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </motion.svg>
                                </motion.span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden"
                    >
                        <div className="flex flex-col gap-6 items-center">
                            <NavLink href="/about" label="About" onClick={() => setIsOpen(false)} className="w-64 h-12 text-lg" />
                            <NavLink href="/works" label="Works" onClick={() => setIsOpen(false)} className="w-64 h-12 text-lg" />
                            <NavLink href="/process" label="Process" onClick={() => setIsOpen(false)} className="w-64 h-12 text-lg" />
                            <NavLink href="/services" label="Services" onClick={() => setIsOpen(false)} className="w-64 h-12 text-lg" />
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="w-64 h-12 flex items-center justify-center bg-accent text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
                            >
                                Say Hello
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
