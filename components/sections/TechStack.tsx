"use client";

import { useState } from "react";
import { techStackTabs } from "@/lib/process-data";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TechStack() {
    const [activeTabId, setActiveTabId] = useState(techStackTabs[0].id);
    const activeTab = techStackTabs.find(t => t.id === activeTabId) || techStackTabs[0];

    return (
        <section className="py-24 px-6 relative z-10 w-full max-w-[1600px] mx-auto border-t border-white/5">
            <div className="flex flex-col items-center mb-16 text-center">
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
                    The Engine
                </span>
                <h2 className="text-4xl md:text-6xl font-bold font-oswald text-white uppercase leading-none">
                    Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Stack</span>
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Tabs Navigation */}
                <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                    {techStackTabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTabId === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTabId(tab.id)}
                                className={cn(
                                    "flex items-center gap-4 p-4 md:p-6 text-left transition-all duration-300 border-b lg:border-b-0 lg:border-l-2 min-w-[200px] lg:min-w-0",
                                    isActive
                                        ? "border-accent bg-white/[0.03] text-white"
                                        : "border-white/10 text-white/40 hover:text-white/70 hover:bg-white/[0.01]"
                                )}
                            >
                                <Icon className={cn("w-5 h-5 shrink-0 transition-colors", isActive ? "text-accent" : "text-current")} />
                                <span className="font-oswald uppercase md:text-lg tracking-wide font-medium">
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="w-full lg:w-2/3 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTabId}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-8"
                        >
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold font-oswald text-white uppercase mb-4">
                                    {activeTab.label}
                                </h3>
                                <p className="text-white/60 font-geist-sans text-lg leading-relaxed max-w-2xl">
                                    {activeTab.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {activeTab.logos.map((logo, i) => {
                                    const Icon = logo.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="h-24 px-2 flex flex-col items-center justify-center gap-2 bg-white/[0.02] border border-white/5 rounded-lg text-center hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group/item"
                                        >
                                            {Icon && (
                                                <Icon className="w-8 h-8 text-white/40 group-hover/item:text-accent transition-colors duration-300" />
                                            )}
                                            <span className="text-white/60 group-hover/item:text-white transition-colors duration-300 font-geist-mono text-xs font-medium">
                                                {logo.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
