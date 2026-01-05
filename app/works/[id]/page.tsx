import { worksData } from "@/lib/works-data";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { colors } from "@/lib/theme";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AuroraText } from "@/components/ui/aurora-text";
import { Highlighter } from "@/components/ui/highlighter";
import DarkVeil from "@/components/DarkVeil";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SparklesText } from "@/components/ui/sparkles-text";

export async function generateStaticParams() {
    return worksData.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = worksData.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    const Icon = project.icon;

    return (
        <main className="relative min-h-screen bg-[#050505]">
            {/* Background - Fixed */}
            <div className="fixed inset-0 z-0">
                <DarkVeil />
            </div>

            <div className="relative z-10">
                <Navbar showBackButton={true} />

                {/* Progress Bar / Scroll Indicator (Optional, maybe later) */}

                <div className="container mx-auto px-6 md:px-12 pt-32 pb-24">

                    {/* Header Section */}
                    <header className="mb-20 md:mb-24">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 shrink-0">
                                <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-wrap items-center gap-4">
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-oswald text-white uppercase leading-[0.9] tracking-tight">
                                        {project.title}
                                    </h1>
                                    {project.website && (
                                        <Link
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-white/5 hover:bg-accent hover:border-accent transition-all duration-300"
                                        >
                                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-black group-hover:rotate-45 transition-transform duration-300" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 border-t border-white/10 pt-12">
                            <div className="col-span-1 lg:col-span-2">
                                <p className="text-xl md:text-2xl text-white/80 font-geist-sans leading-relaxed tracking-wide">
                                    {project.description}
                                </p>
                            </div>
                            <div className="col-span-1">
                                {project.detail.problem && (
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-bold">The Problem</h3>
                                        <ul className="space-y-3">
                                            {project.detail.problem.map((item, i) => (
                                                <li key={i} className="text-sm md:text-base text-white/60 font-geist-mono flex items-start gap-3">
                                                    <span className="text-accent/50 mt-1.5 w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>

                    {/* Main Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24">

                        {/* Solution */}
                        {project.detail.solution && (
                            <section className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white font-oswald uppercase flex items-center gap-3">
                                    <span className="w-8 h-[2px] bg-accent inline-block"></span>
                                    The Solution
                                </h2>
                                <ul className="space-y-4">
                                    {project.detail.solution.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <div className="mt-1 p-1 rounded-full bg-accent/10 text-accent shrink-0">
                                                <Check size={10} />
                                            </div>
                                            <p className="text-white/70 font-geist-sans group-hover:text-white transition-colors">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Impact */}
                        {project.detail.impact && (
                            <section className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-white font-oswald uppercase flex items-center gap-3">
                                    <span className="w-8 h-[2px] bg-accent inline-block"></span>
                                    Impact
                                </h2>
                                <ul className="space-y-4">
                                    {project.detail.impact.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <span className="text-accent/50 mt-[2px] font-mono text-xs">{(i + 1).toString().padStart(2, '0')}</span>
                                            <p className="text-white/70 font-geist-sans group-hover:text-white transition-colors">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                    </div>

                    {/* Full Width Sections */}
                    <div className="mt-16 md:mt-24 space-y-16 md:space-y-24">

                        {/* Technical Implementation */}
                        {project.detail.technical && (
                            <section className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                    <div className="md:col-span-4">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white font-oswald uppercase mb-2">Technical</h2>
                                        <p className="text-white/40 text-sm font-geist-mono">Under the hood.</p>
                                    </div>
                                    <div className="md:col-span-8">
                                        <div className="text-lg text-white/80 font-geist-sans leading-relaxed font-mono text-sm bg-white/5 p-6 rounded-lg border border-white/5">
                                            <SparklesText className="text-lg md:text-xl font-geist-mono text-white/90" sparklesCount={5}>
                                                {project.detail.technical}
                                            </SparklesText>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                    </div>

                    {/* Footer Navigation */}
                    <div className="mt-24 pt-12 border-t border-white/10 flex justify-between items-center">
                        <Link href="/works" className="text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                            All Works
                        </Link>
                        <Link href="/contact">
                            <RainbowButton className="h-12 px-8 text-xs font-bold uppercase tracking-widest">
                                Start a Project
                            </RainbowButton>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
