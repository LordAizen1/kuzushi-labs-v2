"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { WORKS, type WorkItem } from "@/lib/data";
import { Instagram, Twitter, Linkedin, Mail, Minus } from "lucide-react";
import Link from "next/link";

export default function WorksDynamic() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Create 3 sets of works for infinite loop effect
  // [Set 1: Buffer Top] [Set 2: Main] [Set 3: Buffer Bottom]
  const extendedWorks = [...WORKS, ...WORKS, ...WORKS];

  // Initialize scroll to the middle set
  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;

    // Wait for layout to be ready
    const initScroll = () => {
      // Find the start of the middle set (index = WORKS.length)
      const middleStartIndex = WORKS.length;
      const targetItem = el.querySelector(`[data-global-index="${middleStartIndex}"]`) as HTMLElement;

      if (targetItem) {
        const itemTop = targetItem.offsetTop;
        const containerHeight = el.clientHeight;
        const itemHeight = targetItem.offsetHeight;

        // Center the first item of the middle set
        // Or better: center the item corresponding to activeIndex (0 -> WORKS.length)
        el.scrollTop = itemTop - (containerHeight / 2) + (itemHeight / 2);
      }
    };

    // Small timeout to ensure DOM is rendered
    setTimeout(initScroll, 50);
  }, []);

  // Handle Scroll (Infinite Loop + Active Index)
  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;

    const scrollHandler = () => {
      if (WORKS.length === 0) return;

      const totalHeight = el.scrollHeight;
      const singleSetHeight = totalHeight / 3;
      const scrollTop = el.scrollTop;

      // Infinite Scroll Logic: Jump when near edges
      // If scrolled too far up (into Set 1), jump down to Set 2
      if (scrollTop < singleSetHeight * 0.5) {
        el.scrollTop += singleSetHeight;
        return; // Skip rest of handler this frame
      }
      // If scrolled too far down (into Set 3), jump up to Set 2
      else if (scrollTop > singleSetHeight * 2.5) {
        el.scrollTop -= singleSetHeight;
        return; // Skip rest of handler this frame
      }

      // Check for active item
      const items = el.querySelectorAll('[data-global-index]');
      if (items.length === 0) return;

      const viewportHeight = el.clientHeight;
      const viewportCenter = scrollTop + viewportHeight / 2;

      let closestGlobalIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item) => {
        const globalIndex = parseInt((item as HTMLElement).dataset.globalIndex || "0");
        const itemTop = (item as HTMLElement).offsetTop;
        const itemHeight = (item as HTMLElement).offsetHeight;
        const itemCenter = itemTop + itemHeight / 2;
        const distance = Math.abs(viewportCenter - itemCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestGlobalIndex = globalIndex;
        }
      });

      // Update active index (project index) based on global index
      const projectIndex = closestGlobalIndex % WORKS.length;

      setActiveIndex((prev) => {
        if (prev !== projectIndex) return projectIndex;
        return prev;
      });
    };

    el.addEventListener('scroll', scrollHandler, { passive: true });
    return () => el.removeEventListener('scroll', scrollHandler);
  }, []);

  const handleThumbnailClick = (originalIndex: number) => {
    setActiveIndex(originalIndex);

    const el = sidebarRef.current;
    if (!el) return;

    // Always scroll to the item in the Middle Set (Set 2) to ensure continuity
    // Middle set indices range from [WORKS.length] to [2*WORKS.length - 1]
    const targetGlobalIndex = WORKS.length + originalIndex;

    const item = el.querySelector(`[data-global-index="${targetGlobalIndex}"]`) as HTMLElement;
    if (item) {
      const itemTop = item.offsetTop;
      const containerHeight = el.clientHeight;
      const itemHeight = item.offsetHeight;

      el.scrollTo({
        top: itemTop - (containerHeight / 2) + (itemHeight / 2),
        behavior: "smooth",
      });
    }
  };

  const activeWork = WORKS[activeIndex];

  return (
    <section className="works-dynamic works_dynamic relative w-full h-full">
      {/* Left Sidebar - Thumbnails (scrollable) */}
      <div
        ref={sidebarRef}
        data-lenis-prevent
        className="works_dynamic-left dynamic-left fixed left-0 top-0 bottom-0 w-[120px] md:w-[140px] lg:w-[160px] overflow-y-auto overflow-x-hidden scrollbar-hide z-20 pl-4 md:pl-6 pr-4 md:pr-6 snap-y snap-mandatory"
        style={{
          // Use padding to push content towards center but allow scrolling
          paddingTop: '35vh',
          paddingBottom: '35vh',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)',
        }}
      >
        <div className="flex flex-col gap-3 md:gap-4">
          {extendedWorks.map((work, i) => {
            const originalIndex = i % WORKS.length;
            const isActive = originalIndex === activeIndex;

            return (
              <button
                key={`${work.id}-${i}`}
                data-global-index={i}
                data-project-index={originalIndex}
                onClick={() => handleThumbnailClick(originalIndex)}
                className={`relative flex items-center justify-center w-full aspect-square transition-all duration-500 ease-out snap-center ${isActive
                  ? "opacity-100 scale-110"
                  : "opacity-30 hover:opacity-60 scale-90"
                  }`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative w-full h-full overflow-hidden border transition-all duration-500 ${isActive
                    ? "border-[#E4FF4E]"
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
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-[#E4FF4E]" />
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
            <span className="text-[12px] text-white/50 tracking-wider">
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
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Bottom Details Row */}
          <div className="flex items-end justify-between w-full mt-4">
            {/* Pagination */}
            <p className="text-[12px] text-white/50 tracking-widest font-mono">
              {String(activeIndex + 1).padStart(2, "0")}/{String(WORKS.length).padStart(2, "0")}
            </p>

            {/* Right: Description + Link */}
            <div className="flex flex-col items-end text-right gap-2">
              <p className="text-[14px] text-white font-medium max-w-[280px]">
                {activeWork.description || "A Portfolio Where Design, Interaction, and Creativity Come Alive"}
              </p>
              <Link
                href={`/works/${activeWork.id}`}
                className="flex items-center gap-2 text-[#E4FF4E] text-[12px] uppercase tracking-wider font-bold hover:text-white transition-colors group/link"
              >
                Case Study
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
