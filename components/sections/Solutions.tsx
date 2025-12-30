"use client";

import { motion } from "framer-motion";
import { colors } from "@/lib/theme";
import { Brain, Database, Mic, Bot, Scan, Video, Smartphone, Network, Cloud } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const solutions = [
    {
        title: "Generative AI and LLM Consulting",
        description: "Design, evaluate, and improve LLM systems with strong prompt engineering, model fine-tuning, guardrails, and observability. Built for reliability, cost control, and measurable performance.",
        icon: Brain
    },
    {
        title: "RAG and Enterprise Knowledge Systems",
        description: "Build large-scale retrieval systems that ingest and index millions of documents for search, summarization, and insights. Secure, governed, and designed for real enterprise usage.",
        icon: Database
    },
    {
        title: "Voice AI and Conversational Agents",
        description: "Deploy voice and chat assistants that handle real customer workflows end-to-end. From speech pipelines to multi-turn dialogs, integrations, and human handoff, built for low latency and production stability.",
        icon: Mic
    },
    {
        title: "AI Automation and Multi-Agent Workflows",
        description: "Automate complex business processes using intelligent agents and orchestration. We design workflows that connect tools, enforce rules, and execute actions across teams and systems.",
        icon: Bot
    },
    {
        title: "Computer Vision and OCR",
        description: "Extract structured intelligence from images, scans, videos, and satellite imagery. Use cases include document automation, visual verification, analytics, and real-time vision-driven workflows.",
        icon: Scan
    },
    {
        title: "Generative Video and Multimodal Pipelines",
        description: "Build end-to-end text-to-video and image-to-video pipelines for ads, avatars, explainers, and narrative content. Designed for scalability, reproducibility, and production delivery.",
        icon: Video
    },
    {
        title: "Custom AI Product Engineering",
        description: "End-to-end product development for AI-powered web and mobile applications. We combine UX/UI, backend engineering, and AI systems into cohesive products that ship.",
        icon: Smartphone
    },
    {
        title: "Enterprise Integrations",
        description: "Integrate AI solutions with enterprise systems like SAP, MuleSoft, Dell Boomi, HubSpot, and e-commerce platforms. We focus on clean data flows, reliability, and operational fit.",
        icon: Network
    },
    {
        title: "Cloud, DevOps, and Data Governance",
        description: "Production infrastructure for AI at scale, including Kubernetes, CI/CD, monitoring, secure ETL, and governance. Built to meet enterprise security, compliance, and reliability expectations.",
        icon: Cloud
    }
];

export default function Solutions() {
    return (
        <section className="relative py-24 px-6 md:px-12 z-20">
            <div className="container mx-auto">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[0.9] mb-6 font-oswald uppercase tracking-tight">
                        Our Business<br />
                        <span className="text-accent">Solutions</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-xl font-geist-mono border-l-2 border-accent pl-6 py-2">
                        Comprehensive services to drive digital transformation and AI integration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <MagicCard
                                className="h-full p-8 cursor-pointer flex flex-col"
                                gradientColor={colors.accent}
                                gradientOpacity={0.15}
                            >
                                {/* Header: Icon + Title */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-white/5 transition-colors duration-300 shrink-0">
                                        <solution.icon className="w-6 h-6 text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white font-oswald uppercase tracking-wide leading-tight transition-colors duration-300">
                                        {solution.title}
                                    </h3>
                                </div>

                                <p className="text-white/50 font-geist-sans leading-relaxed text-sm md:text-base pl-[calc(3rem+1rem)]">
                                    {solution.description}
                                </p>
                            </MagicCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
