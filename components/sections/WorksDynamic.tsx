"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { worksData as WORKS } from "@/lib/works-data";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

// Register outside to ensure it runs once
gsap.registerPlugin(ScrollTrigger);

export default function WorksDynamic() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Hydration check to ensure GSAP runs on client with populated DOM
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Buffer: 3 sets for infinite loop
  const extendedWorks = [...WORKS, ...WORKS, ...WORKS];

  useGSAP(() => {
    // Only run if mounted and ref exists
    if (!mounted) return;
    const el = sidebarRef.current;
    if (!el) return;



    // 1. Initialize Lenis for Smooth Momentum
    const lenis = new Lenis({
      wrapper: el,
      content: el.firstElementChild as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Initial Scroll Position & Infinite Logic
    const totalHeight = el.scrollHeight;
    const singleSetHeight = totalHeight / 3;

    // Start at middle set
    lenis.scrollTo(singleSetHeight, { immediate: true });

    // Infinite Jump Logic
    lenis.on('scroll', (e: any) => {
      const scroll = e.scroll;
      if (scroll < singleSetHeight * 0.5) {
        lenis.scrollTo(scroll + singleSetHeight, { immediate: true });
      } else if (scroll > singleSetHeight * 2.5) {
        lenis.scrollTo(scroll - singleSetHeight, { immediate: true });
      }
    });

    // 3. Setup ScrollTriggers for Items (Active Detection)
    const items = gsap.utils.toArray<HTMLElement>('.work-item');

    items.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        scroller: el,
        // center center triggers when item center passes viewport center
        start: "top 50%",
        end: "bottom 50%",

        onEnter: () => setActiveIndex(i % WORKS.length),
        onEnterBack: () => setActiveIndex(i % WORKS.length),
      });
    });

    // 4. Snapping Logic (GSAP Physics)
    let snapTimeout: NodeJS.Timeout;

    lenis.on('scroll', () => {
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(() => {
        // Find closest item center relative to viewport center
        const center = el.clientHeight / 2;
        const currentScroll = lenis.scroll;

        let closest: number | null = null;
        let minDiff = Infinity;

        items.forEach((item) => {
          const itemCenter = item.offsetTop + item.offsetHeight / 2;
          // Distance from visual center: abs(itemCenter - (scroll + viewportHeight/2))
          // Wait, itemCenter is absolute in scroll space? Yes.
          // Viewport Center in Scroll Space = currentScroll + containerHeight/2
          const diff = Math.abs(itemCenter - (currentScroll + center));

          if (diff < minDiff) {
            minDiff = diff;
            closest = itemCenter - center;
          }
        });

        if (closest !== null && Math.abs(closest - currentScroll) > 1) {
          lenis.scrollTo(closest, { duration: 0.6, easing: (t) => 1 - Math.pow(1 - t, 2) });
        }
      }, 50);
    });

    // Refresh ScrollTrigger after setup to ensure positions are calc'd
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: sidebarRef, dependencies: [mounted] });

  const handleThumbnailClick = (originalIndex: number) => {
    if (!lenisRef.current || !sidebarRef.current) return;

    // Find target in Middle Set (Set 2)
    const targetGlobalIndex = WORKS.length + originalIndex;
    const items = sidebarRef.current.querySelectorAll('.work-item');
    const targetItem = items[targetGlobalIndex] as HTMLElement;

    if (targetItem) {
      const containerHeight = sidebarRef.current.clientHeight;
      const targetScroll = targetItem.offsetTop - containerHeight / 2 + targetItem.offsetHeight / 2;
      lenisRef.current.scrollTo(targetScroll, { duration: 1.0 });
    }
  };

  const activeWork = WORKS[activeIndex];

  return (
    <section className="works-dynamic works_dynamic relative w-full h-full">
      {/* Left Sidebar - Thumbnails (scrollable) */}
      <div
        ref={sidebarRef}
        className="works_dynamic-left dynamic-left fixed left-0 top-0 bottom-0 w-[120px] md:w-[140px] lg:w-[160px] overflow-y-auto overflow-x-hidden scrollbar-hide z-20 pl-4 md:pl-6 pr-4 md:pr-6"
        style={{
          paddingTop: 'calc(50vh - 60px)',
          paddingBottom: 'calc(50vh - 60px)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)',
        }}
      >
        <div className="flex flex-col gap-3 md:gap-4 pb-20">
          {extendedWorks.map((work, i) => {
            const originalIndex = i % WORKS.length;
            const isActive = originalIndex === activeIndex;

            return (
              <button
                key={`${work.id}-${i}`}
                data-global-index={i}
                onClick={() => handleThumbnailClick(originalIndex)}
                className={`work-item relative flex items-center justify-center w-full aspect-square transition-all duration-500 ease-out ${isActive
                  ? "opacity-100"
                  : "opacity-30 hover:opacity-60"
                  }`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative w-full h-full overflow-hidden border transition-all duration-500 ${isActive
                    ? "border-accent"
                    : "border-transparent"
                    }`}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className={`object-cover transition-all duration-500 ${isActive ? "grayscale-0" : "grayscale"
                      }`}
                  />
                </div>

                {/* Active Indicator Line (if active) */}
                {isActive && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-accent" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Text Display - Active Project Title & Year (Aligned with Sidebar) */}
      <div className="fixed left-[140px] md:left-[160px] lg:left-[180px] top-1/2 -translate-y-1/2 z-20 flex items-center pointer-events-none">
        <motion.div
          key={activeWork.id} // Animation key based on active work
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-1 pl-4"
        >
          <h2 className="text-[14px] font-bold uppercase tracking-wider text-white leading-none">
            {activeWork.title}
          </h2>
          {activeWork.year && (
            <span className="text-[12px] text-white/80 tracking-wider">
              {activeWork.year}
            </span>
          )}
        </motion.div>
      </div>

      {/* Main Showcase - Center Stage */}
      <div className="works_dynamic-main fixed left-[160px] md:left-[180px] lg:left-[200px] right-0 top-0 bottom-0 flex items-center justify-center px-6 md:px-12 z-10 pointer-events-none">
        <motion.figure
          key={activeWork.id}
          className="relative w-full max-w-[500px] flex flex-col gap-4 md:gap-6 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Image - Square and smaller */}
          <div className="relative w-full aspect-[4/3] mx-auto overflow-hidden group">

            <Image
              src={activeWork.image}
              alt={activeWork.title}
              fill
              className="object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Bottom Details Row */}
          <div className="flex items-end justify-between w-full mt-4">
            {/* Pagination */}
            <p className="text-[12px] text-white/80 tracking-widest font-mono">
              {String(activeIndex + 1).padStart(2, "0")}/{String(WORKS.length).padStart(2, "0")}
            </p>

            {/* Right: Description + Link */}
            <div className="flex flex-col items-end text-right gap-2">
              <p className="text-[14px] text-white font-medium max-w-[280px]">
                {activeWork.description || "A Portfolio Where Design, Interaction, and Creativity Come Alive"}
              </p>
              <Link
                href={`/works/${activeWork.id}`}
                className="flex items-center gap-2 text-accent text-[12px] uppercase tracking-wider font-bold hover:text-white transition-colors group/link"
              >
                More Details
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover/link:translate-x-1">
                  <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.figure>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
