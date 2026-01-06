"use client";

import FloatingLines from "@/components/FloatingLines";
import Navbar from "@/components/layout/Navbar";
import WorksGrid from "@/components/sections/WorksGrid";
import ProductsGrid from "@/components/sections/ProductsGrid";
import { AuroraText } from "@/components/ui/aurora-text";
import { products, caseStudies } from "@/lib/works-data";
import { gradientColors } from "@/lib/theme";
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <main className="relative bg-background min-h-[100dvh]">
      {/* FloatingLines background */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <FloatingLines
          linesGradient={[...gradientColors]}
        />
      </div>

      <div className="relative z-10 min-h-[100dvh] flex flex-col">
        <Navbar />

        <div className="pt-32 pb-24 px-6 md:px-12 flex flex-col gap-24 md:gap-32">

          {/* Products Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16"
            >
              <h1 className="text-[clamp(3rem,6vw,6rem)] font-bold text-white uppercase leading-[0.9] tracking-tight font-oswald mb-4">
                Our <AuroraText>Products</AuroraText>
              </h1>
              <p className="max-w-2xl text-white/60 text-lg md:text-xl font-geist-sans leading-relaxed">
                Scalable, AI-native platforms built to solve core enterprise challenges.
              </p>
            </motion.div>

            <ProductsGrid items={products} basePath="/products" />
          </section>

          {/* Separator / Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Case Studies Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-[0.9] tracking-tight font-oswald mb-4">
                Case <span className="text-white/30">Studies</span>
              </h2>
              <p className="max-w-2xl text-white/60 text-lg md:text-xl font-geist-sans leading-relaxed">
                Real-world deployments and their measurable impact.
              </p>
            </motion.div>

            <WorksGrid items={caseStudies} basePath="/products" />
          </section>

        </div>
      </div>
    </main>
  );
}


