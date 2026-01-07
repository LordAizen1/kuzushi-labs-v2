"use client";

import { GridScan } from "@/components/GridScan";
import Navbar from "@/components/layout/Navbar";
import WorksGrid from "@/components/sections/WorksGrid";
import StackedProducts from "@/components/sections/StackedProducts";
import { AuroraText } from "@/components/ui/aurora-text";
import { products, caseStudies } from "@/lib/works-data";
import { gradientColors } from "@/lib/theme";
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <main className="relative bg-background min-h-[100dvh]">
      {/* GridScan background */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
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

            <StackedProducts items={products} />
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


