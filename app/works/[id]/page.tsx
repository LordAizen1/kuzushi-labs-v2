import { worksData } from "@/lib/works-data";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { colors } from "@/lib/theme";
import { Check } from "lucide-react";
import Link from "next/link";
import { AuroraText } from "@/components/ui/aurora-text";
import { Highlighter } from "@/components/ui/highlighter";
import DarkVeil from "@/components/DarkVeil";
import { RainbowButton } from "@/components/ui/rainbow-button";

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
                        <div className="flex items-start gap-6 mb-8">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 shrink-0">
                                <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-oswald text-white uppercase leading-[0.9] tracking-tight">
                                    {project.title}
                                </h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 border-t border-white/10 pt-12">
                            <div className="col-span-1 lg:col-span-2">
                                <p className="text-xl md:text-2xl text-white/80 font-geist-sans leading-relaxed tracking-wide">
                                    {project.description}
                                </p>
                            </div>
                            <div className="col-span-1">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-bold">Who It's For</h3>
                                    <p className="text-sm md:text-base text-white/60 font-geist-mono">
                                        {project.detail.whoFor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24">

                        {/* Use Cases */}
                        <section className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-white font-oswald uppercase flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-accent inline-block"></span>
                                Use Cases
                            </h2>
                            <ul className="space-y-4">
                                {project.detail.useCases.map((useCase, i) => (
                                    <li key={i} className="flex items-start gap-4 group">
                                        <span className="text-accent/50 mt-[2px] font-mono text-xs">{(i + 1).toString().padStart(2, '0')}</span>
                                        <p className="text-white/70 font-geist-sans group-hover:text-white transition-colors">{useCase}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Key Features */}
                        <section className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-white font-oswald uppercase flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-accent inline-block"></span>
                                Key Features
                            </h2>
                            <ul className="space-y-4">
                                {project.detail.keyFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4 group">
                                        <div className="mt-1 p-1 rounded-full bg-accent/10 text-accent">
                                            <Check size={10} />
                                        </div>
                                        <p className="text-white/70 font-geist-sans group-hover:text-white transition-colors">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>

                    {/* Full Width Sections */}
                    <div className="mt-16 md:mt-24 space-y-16 md:space-y-24">

                        {/* Integrations */}
                        <section className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-4">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white font-oswald uppercase mb-2">Integrations</h2>
                                    <p className="text-white/40 text-sm font-geist-mono">Seamlessly connects with your stack.</p>
                                </div>
                                <div className="md:col-span-8">
                                    <p className="text-lg text-white/80 font-geist-sans leading-relaxed">
                                        {project.detail.integrations}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Outcomes */}
                        <section className="relative overflow-hidden p-8 md:p-16 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/20">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />

                            <div className="relative z-10 text-center max-w-4xl mx-auto">
                                <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-6">Business Outcomes</h2>
                                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-oswald leading-tight">
                                    "{project.detail.outcomes}"
                                </p>
                            </div>
                        </section>

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
