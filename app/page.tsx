"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <main className="relative bg-background h-[100dvh] overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Particles
          className="absolute inset-0 z-0"
          particleCount={350}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff", "#ffffff", "#ffffff"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 h-full">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
