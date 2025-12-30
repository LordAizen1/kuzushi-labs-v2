"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingLines from "@/components/FloatingLines";
import Navbar from "@/components/layout/Navbar";
import WorksGrid from "@/components/sections/WorksGrid";
import WorksDynamic from "@/components/sections/WorksDynamic";
import { FADE_IN_VARIANTS } from "@/lib/constants";
import { InstagramIcon, TwitterIcon, LinkedInIcon, EmailIcon } from "@/components/ui/SocialIcons";
import AudioToggle from "@/components/ui/AudioToggle";
import Link from "next/link";
import { gradientColors } from "@/lib/theme";

type WorksMode = "grid" | "dynamic";

export default function WorksPage() {
  const [mode, setMode] = useState<WorksMode>("grid");

  // Lock window scroll ONLY for "dynamic" mode
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlHeight = html.style.height;
    const prevBodyHeight = body.style.height;

    if (mode === "dynamic") {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      html.style.height = "100%";
      body.style.height = "100%";
    } else {
      // Grid Mode: Reset to default behavior (scrollable)
      html.style.overflow = "";
      body.style.overflow = "";
      html.style.height = "";
      body.style.height = "";
      body.style.overflowY = "";
      body.style.overflowX = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      html.style.height = "";
      body.style.height = "";
      body.style.overflowY = "";
      body.style.overflowX = "";
    };
  }, [mode]);

  return (
    <main className={`relative bg-background min-h-[100dvh] ${mode === "dynamic" ? "overflow-hidden" : ""}`}>
      {/* FloatingLines background - fixed to prevent scroll repaint */}
      <div className="fixed inset-0 z-0 h-full w-full">
        <FloatingLines
          linesGradient={[...gradientColors]}
        />
      </div>

      <div className="relative z-10 min-h-[100dvh] flex flex-col">
        <Navbar />

        <section className="relative flex-1 pt-28 pb-16 px-6 md:px-12 flex flex-col gap-8">
          {/* Title + Layout toggle - Same line container */}
          <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 pt-28 pointer-events-none">
            <motion.h1
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold uppercase tracking-tight text-white pointer-events-auto"
              initial="hidden"
              animate="visible"
              variants={FADE_IN_VARIANTS}
            >
              Works
            </motion.h1>

            <div className="hidden md:flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white/60 pointer-events-auto">
              <button
                type="button"
                onClick={() => setMode("grid")}
                className="flex items-center gap-2"
              >
                <span
                  className={`inline-block h-[6px] w-[6px] rounded-full ${mode === "grid" ? "bg-accent" : "bg-white/30"
                    }`}
                />
                <span className={mode === "grid" ? "text-white" : "text-white/40"}>
                  Grid
                </span>
              </button>
              <button
                type="button"
                onClick={() => setMode("dynamic")}
                className="flex items-center gap-2"
              >
                <span
                  className={`inline-block h-[6px] w-[6px] rounded-full ${mode === "dynamic" ? "bg-accent" : "bg-white/30"
                    }`}
                />
                <span className={mode === "dynamic" ? "text-white" : "text-white/40"}>
                  Dynamic
                </span>
              </button>
            </div>
          </div>

          {/* Content - Pushed down to account for fixed header */}
          <div className="mt-16">
            {mode === "grid" ? (
              <WorksGrid />
            ) : (
              <WorksDynamic />
            )}
          </div>
        </section>

        {/* Footer - Persists across both Grid and Dynamic modes */}
        <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-start px-6 md:px-12 pt-0 pb-6 md:pb-8 bg-transparent z-50">
          {/* Social Icons + Audio Toggle - Bottom Left */}
          <div className="flex items-center gap-2 md:gap-3">
            {[
              { Icon: InstagramIcon, href: "#" },
              { Icon: TwitterIcon, href: "#" },
              { Icon: LinkedInIcon, href: "#" },
              { Icon: EmailIcon, href: "#" },
            ].map(({ Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 bg-transparent text-white/60 hover:text-black hover:bg-accent hover:border-accent transition-colors"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}

            {/* Separator */}
            <div className="w-[1px] h-8 md:h-10 bg-white/20 mx-1" />

            {/* Audio Toggle */}
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 bg-transparent text-white hover:border-white/40 hover:bg-white/5 transition-colors">
              <AudioToggle />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

