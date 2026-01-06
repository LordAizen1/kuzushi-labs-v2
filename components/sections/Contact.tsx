"use client";

import { motion } from "framer-motion";
import { colors } from "@/lib/theme";
import { PiMapPinDuotone, PiArrowRightBold, PiCheckCircleDuotone, PiSpinnerGapBold } from "react-icons/pi"; // Added icons
import { AuroraText } from "@/components/ui/aurora-text";
import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";
import { useState } from "react";

// Replace this with your deployed Google Apps Script URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxJJwTaC_li1EXOSEGlzjMzWtlXuWa9sgdLaylRu0gkwfmnV9DFDg-f_ZQv4cjmPoiSnA/exec";

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        };

        try {
            // Note: Google Apps Script Web Apps require 'no-cors' needed if not handling OPTIONS correctly, 
            // but standard JSON POST usually works if the script handles it. 
            // However, for simple setups, 'no-cors' is often robust but returns opaque response.
            // We'll try standard fetch. If CORS issues arise, we can switch to no-cors or JSONP.
            // Actually, best practice for these scripts is to rely on the redirect.

            // Using 'no-cors' implies we can't read the response, but the request goes through.
            // Checking response is better.

            // Ensure you update the URL constant above!
            if (GOOGLE_SCRIPT_URL.includes("YOUR_SCRIPT_ID")) {
                throw new Error("Please configure the Google Script URL in the code.");
            }

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Crucial for calling GAS from client-side without complex CORS setup
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // With no-cors, we assume success if no network error thrown
            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();

        } catch (err) {
            console.error("Submission Error:", err);
            setError("Something went wrong. Please try again or email us directly.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-6 md:px-12 z-10">
            {/* Background Gradient similar to Hero but subtle */}
            <div className="absolute inset-0 bg-background z-0" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center relative z-10 h-full">
                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                    className="flex flex-col gap-6 lg:gap-8 justify-center"
                >
                    <div>
                        <h1 className="text-[clamp(2.5rem,5vw,5.5rem)] font-bold text-white leading-[0.9] mb-6 font-oswald uppercase tracking-tight">
                            <Highlighter action="underline" color={colors.accent} isView={true}>Build</Highlighter> With <Highlighter color={colors.accent} isView={true}>Us</Highlighter><br />
                            <AuroraText>Something Better</AuroraText>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-md font-geist-mono border-l-2 border-accent pl-6 py-2">
                            Connect with Kuzushi Labs to discuss your AI and software development needs.
                        </p>
                    </div >

                    <div className="space-y-6 mt-2">
                        <div className="flex flex-col gap-4">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Email</span>
                            <div className="flex flex-col gap-2">
                                <Link
                                    href="mailto:akshat@kuzushilabs.xyz"
                                    className="text-lg md:text-2xl lg:text-3xl text-white hover:text-accent transition-colors flex items-center gap-4 group font-oswald font-medium"
                                >
                                    akshat@kuzushilabs.xyz
                                    <PiArrowRightBold className="w-5 h-5 lg:w-6 lg:h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                                </Link>
                                <Link
                                    href="mailto:arunank@kuzushilabs.xyz"
                                    className="text-lg md:text-2xl lg:text-3xl text-white hover:text-accent transition-colors flex items-center gap-4 group font-oswald font-medium"
                                >
                                    arunank@kuzushilabs.xyz
                                    <PiArrowRightBold className="w-5 h-5 lg:w-6 lg:h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Our Offices</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-accent">
                                        <PiMapPinDuotone size={18} />
                                        <h3 className="text-white font-bold text-lg uppercase font-oswald tracking-wide">Bengaluru</h3>
                                    </div>
                                    <p className="text-white/50 leading-relaxed font-geist-mono text-xs uppercase tracking-wider">
                                        Diamond District, HAL Road,<br />
                                        Domlur, Bengaluru,<br />
                                        Karnataka - 560008
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div >

                {/* Right Side: Form */}
                < motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                    className="bg-[#0a0a0a] border border-white/10 p-6 lg:p-10 relative overflow-hidden group lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto custom-scrollbar"
                >
                    {/* Decorative corner accent */}
                    < div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 blur-2xl rounded-full pointer-events-none" />

                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-10 font-oswald uppercase tracking-tight">Contact Us</h2>

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-12 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
                                <PiCheckCircleDuotone size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white uppercase font-oswald mb-3">Message Received</h3>
                            <p className="text-white/60 font-geist-sans max-w-xs">
                                Thanks for reaching out. We've received your inquiry and will get back to you shortly.
                            </p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="mt-8 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <form className="space-y-6 lg:space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                <div className="space-y-2 lg:space-y-3 group/input">
                                    <label htmlFor="name" className="text-xs font-bold text-white/40 uppercase tracking-[0.1em] group-focus-within/input:text-accent transition-colors">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="JOHN DOE"
                                        className="w-full bg-transparent border-b border-white/10 py-2 lg:py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all font-oswald tracking-wide text-base lg:text-lg"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                <div className="space-y-2 lg:space-y-3 group/input">
                                    <label htmlFor="email" className="text-xs font-bold text-white/40 uppercase tracking-[0.1em] group-focus-within/input:text-accent transition-colors">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="HELLO@EXAMPLE.COM"
                                        className="w-full bg-transparent border-b border-white/10 py-2 lg:py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all font-oswald tracking-wide text-base lg:text-lg"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 lg:space-y-3 group/input">
                                <label htmlFor="phone" className="text-xs font-bold text-white/40 uppercase tracking-[0.1em] group-focus-within/input:text-accent transition-colors">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+1 234 567 890"
                                    className="w-full bg-transparent border-b border-white/10 py-2 lg:py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all font-oswald tracking-wide text-base lg:text-lg"
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="space-y-2 lg:space-y-3 group/input">
                                <label htmlFor="message" className="text-xs font-bold text-white/40 uppercase tracking-[0.1em] group-focus-within/input:text-accent transition-colors">Tell us more about your need</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    placeholder="HOW CAN WE HELP YOU?"
                                    className="w-full bg-transparent border-b border-white/10 py-2 lg:py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all resize-none font-oswald tracking-wide text-base lg:text-lg"
                                    disabled={isLoading}
                                ></textarea>
                                <p className="text-[10px] uppercase tracking-wider text-white/30 mt-2">Note: Your idea is secured under NDA.</p>
                            </div>

                            {error && (
                                <p className="text-red-500 text-xs uppercase tracking-wider font-bold">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 lg:py-5 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-300 mt-2 text-xs lg:text-sm relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isLoading ? (
                                        <>
                                            Sending...
                                            <PiSpinnerGapBold size={16} className="animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <PiArrowRightBold size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>
                    )}
                </motion.div >
            </div >
        </section >
    );
}
