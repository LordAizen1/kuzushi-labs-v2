"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FADE_IN_VARIANTS } from "@/lib/constants";
import { Product } from "@/lib/works-data";
import { PiArrowUpRightBold } from "react-icons/pi";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface ProductsGridProps {
    items: Product[];
    basePath?: string;
}

export default function ProductsGrid({ items, basePath = "/products" }: ProductsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((product, index) => {
                const Icon = product.icon;

                return (
                    <motion.div
                        key={product.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={FADE_IN_VARIANTS}
                        transition={{ delay: 0.05 * index }}
                        className="group relative h-full"
                    >
                        <Link href={`${basePath}/${product.id}`} className="block h-full">
                            <div className="relative h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-500 flex flex-col">

                                {/* Image Section - 16:9 Aspect Ratio */}
                                <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                                    {/* Icon Badge */}
                                    <div className="absolute top-4 left-4 p-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl">
                                        <Icon className="w-5 h-5 text-accent" />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <h3 className="text-xl md:text-2xl font-bold font-oswald text-white uppercase leading-tight mb-3 group-hover:text-accent transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-white/60 font-geist-sans text-sm leading-relaxed line-clamp-3">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 group-hover:text-white transition-colors">
                                            View Product
                                        </span>
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                            <PiArrowUpRightBold className="w-4 h-4 text-white/50 group-hover:text-black transition-colors" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );
}
