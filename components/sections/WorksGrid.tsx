"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FADE_IN_VARIANTS } from "@/lib/constants";

import { worksData as WORKS } from "@/lib/works-data";

export default function WorksGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-12 md:gap-y-16">
      {WORKS.map((work, index) => (
        <motion.article
          key={work.id}
          className="relative group w-full max-w-[240px] md:max-w-[320px] mx-auto"
          initial="hidden"
          animate="visible"
          variants={FADE_IN_VARIANTS}
          transition={{ delay: 0.05 * index }}
        >
          <Link href={`/works/${work.id}`} className="block cursor-pointer">
            <div className="relative aspect-square overflow-hidden border border-white/10 bg-black/40">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* subtle grain overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-soft-light" />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-white/70">
              <span className="font-medium uppercase tracking-[0.18em]">
                {work.title}
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
