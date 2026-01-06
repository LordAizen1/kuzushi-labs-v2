"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Product } from "@/lib/works-data";
import { PiArrowUpRightBold } from "react-icons/pi";
import { cn } from "@/lib/utils";

interface StackedProductsProps {
    items: Product[];
}

const Card = ({
    item,
    index,
    total,
    scrollYProgress,
}: {
    item: Product;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}) => {
    // Calculate dynamic top offset for stacking
    // Responsive top offset calculation via CSS variables or Classes
    // Replaced inline calculation with responsive styling in the return
    // const topOffset = 120 + index * 50;

    // Determine the scroll range where this card should animate
    // We assume the total scroll length represents the stacked sequence.
    // Progress is 0 when container starts, 1 when it ends.
    // Simplification: Divide progress into slots for each card.
    const step = 1 / total;
    const start = index * step;
    const end = start + step;

    // Scale down as the NEXT card comes in (from start to end of this slot)
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.85]);

    // Optional: Fade out slightly or darken
    const opacity = useTransform(scrollYProgress, [start, end], [1, 0.6]);

    const Icon = item.icon;

    return (
        <div
            className="flex items-center justify-center sticky top-[calc(5rem+var(--index)*2rem)] md:top-[calc(8rem+var(--index)*3rem)] h-[70vh] md:h-[80vh]"
            style={{
                // @ts-ignore: Custom CSS variable for index
                '--index': index,
                marginBottom: `${(total - index - 1) * 20}px`,
                zIndex: index + 1
            }}
        >
            <motion.div
                style={{
                    scale,
                    // opacity // Optional: uncomment if desire fade
                }}
                className={cn(
                    "relative w-full h-[60vh] md:h-[500px] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl origin-top will-change-transform",
                    "bg-[#0a0a0a] hover:border-accent/40 transition-colors duration-500"
                )}
            >
                <Link href={`/products/${item.id}`} className="flex flex-col md:flex-row h-full">
                    {/* Image Section - 40% on mobile, 50% on desktop */}
                    <div className="w-full md:w-1/2 h-[40%] md:h-full relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent opacity-60" />

                        <div className="absolute top-4 left-4 p-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl">
                            <Icon className="w-6 h-6 text-accent" />
                        </div>
                    </div>

                    {/* Content Section - 60% on mobile */}
                    <div className="w-full md:w-1/2 h-[60%] md:h-full p-5 md:p-10 flex flex-col justify-between bg-[#111]">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                                    Product {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold font-oswald text-white uppercase leading-none mb-3 md:mb-6">
                                {item.title}
                            </h3>
                            <p className="text-white/60 font-geist-sans text-sm md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase text-white/40 font-bold tracking-wider mb-1">Impact</span>
                                <span className="text-white font-oswald tracking-wide font-medium">{item.detail.outcomes.split(" ").slice(0, 4).join(" ")}...</span>
                            </div>
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-accent hover:border-accent hover:text-black transition-all duration-300">
                                <PiArrowUpRightBold className="w-5 h-5 transition-colors" />
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
};

export default function StackedProducts({ items }: StackedProductsProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="w-full relative">
            {items.map((item, index) => (
                <Card
                    key={item.id}
                    item={item}
                    index={index}
                    total={items.length}
                    scrollYProgress={scrollYProgress}
                />
            ))}
            {/* Spacer is inherent in the container height because cards are relative+sticky */}
        </div>
    );
}
