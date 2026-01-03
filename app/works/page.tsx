"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingLines from "@/components/FloatingLines";
import Navbar from "@/components/layout/Navbar";
import WorksGrid from "@/components/sections/WorksGrid";
import WorksDynamic from "@/components/sections/WorksDynamic";
import { FADE_IN_VARIANTS } from "@/lib/constants";
import { LayoutGrid, Sparkles } from "lucide-react";
import { gradientColors } from "@/lib/theme";

type WorksMode = "grid" | "dynamic";

export default function WorksPage() {
  // Default to grid on mobile, dynamic on desktop
  const [mode, setMode] = useState<WorksMode>("grid");
  const [isClient, setIsClient] = useState(false);

  // Set initial mode based on screen size (client-side only)
  useEffect(() => {
    setIsClient(true);
    const isMobile = window.innerWidth < 768;
    setMode(isMobile ? "grid" : "dynamic");
  }, []);

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
          {/* Layout toggle - Right side */}
          <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-end px-6 md:px-12 pt-28 pointer-events-none">
            <div className="hidden md:flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white/60 pointer-events-auto">
              <button
                type="button"
                onClick={() => setMode("dynamic")}
                className="flex items-center gap-2"
              >
                <Sparkles
                  size={14}
                  className={mode === "dynamic" ? "text-accent" : "text-white/30"}
                />
                <span className={mode === "dynamic" ? "text-white" : "text-white/40"}>
                  Dynamic
                </span>
              </button>
              <button
                type="button"
                onClick={() => setMode("grid")}
                className="flex items-center gap-2"
              >
                <LayoutGrid
                  size={14}
                  className={mode === "grid" ? "text-accent" : "text-white/30"}
                />
                <span className={mode === "grid" ? "text-white" : "text-white/40"}>
                  Grid
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
      </div>
    </main>
  );
}

