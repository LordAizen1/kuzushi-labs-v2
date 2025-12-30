"use client";

import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="relative bg-background min-h-screen overflow-x-hidden">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            <div className="pt-[80px] min-h-[calc(100vh-80px)]">
                <Contact />
            </div>
        </main>
    );
}
