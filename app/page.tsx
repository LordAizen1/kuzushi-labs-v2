"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative bg-background min-h-[100dvh] xl:h-[100dvh] overflow-y-auto xl:overflow-hidden overflow-x-hidden">
      <div className="relative z-10 h-full">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
