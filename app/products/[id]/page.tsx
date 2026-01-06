import { products, caseStudies, Product, CaseStudy } from "@/lib/works-data";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { PiArrowUpRightBold } from "react-icons/pi";
import { IconType } from "react-icons";
import { PiLightningFill, PiStarFourFill, PiCheckCircleFill, PiTrendUpBold, PiTerminalWindowDuotone, PiTargetDuotone } from "react-icons/pi";
import Link from "next/link";
import DarkVeil from "@/components/DarkVeil";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion } from "framer-motion";

export async function generateStaticParams() {
    const allItems = [...products, ...caseStudies];
    return allItems.map((project) => ({
        id: project.id,
    }));
}

// --- Components ---

const ProductCard = ({ title, items, icon: Icon }: { title: string, items: string[], icon?: IconType }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-colors duration-500 group">
        <h3 className="text-xl font-bold font-oswald uppercase text-white mb-6 flex items-center gap-3">
            {Icon && <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />}
            {title}
        </h3>
        <ul className="space-y-4">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0 group-hover:bg-accent transition-colors" />
                    <p className="text-white/70 font-geist-sans text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                        {item}
                    </p>
                </li>
            ))}
        </ul>
    </div>
);

const ProductLayout = ({ project }: { project: Product }) => {
    const Icon = project.icon;
    return (
        <div className="container mx-auto px-6 md:px-12 pt-32 pb-24">
            {/* Hero */}
            <header className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 mb-8">
                    <Icon className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-oswald text-white uppercase leading-[0.9] tracking-tight mb-8">
                    {project.title.split('-')[0]} <br />
                    <span className="text-white/40 text-3xl md:text-5xl">{project.title.split('-').slice(1).join('-')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 font-geist-sans leading-relaxed tracking-wide max-w-2xl mx-auto">
                    {project.description}
                </p>

                <div className="mt-10 flex text-center justify-center gap-4">
                    <Link href="/contact">
                        <RainbowButton className="h-14 px-10 text-sm font-bold uppercase tracking-widest">
                            Book a Demo
                        </RainbowButton>
                    </Link>
                </div>
            </header>

            {/* Who For - Wide Banner */}
            <section className="mb-24 text-center">
                <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-6">Designed For</h2>
                <p className="text-2xl md:text-3xl text-white font-oswald max-w-3xl mx-auto leading-tight">
                    "{project.detail.whoFor}"
                </p>
            </section>

            {/* Features & Use Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <ProductCard title="Use Cases" items={project.detail.useCases} icon={PiLightningFill} />
                <ProductCard title="Key Features" items={project.detail.keyFeatures} icon={PiStarFourFill} />
            </div>

            {/* Integrations & Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                <div className="md:col-span-7 bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-2xl">
                    <h3 className="text-2xl font-bold font-oswald uppercase text-white mb-4">Integrations</h3>
                    <p className="text-lg text-white/70 font-geist-sans leading-relaxed">
                        {project.detail.integrations}
                    </p>
                </div>
                <div className="md:col-span-5 relative overflow-hidden p-8 md:p-12 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/20 flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[50px] rounded-full pointer-events-none" />
                    <h3 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Impact</h3>
                    <p className="text-2xl font-bold text-white font-oswald leading-tight">
                        "{project.detail.outcomes}"
                    </p>
                </div>
            </div>
        </div>
    );
};

const CaseStudyLayout = ({ project }: { project: CaseStudy }) => {
    const Icon = project.icon;
    return (
        <div className="container mx-auto px-6 md:px-12 pt-32 pb-24">
            {/* Header Section - Left Aligned, Report Style */}
            <header className="mb-20 md:mb-24">
                <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 shrink-0">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl md:text-6xl font-bold font-oswald text-white uppercase leading-[0.9] tracking-tight">
                            {project.title}
                        </h1>
                        <div className="flex gap-4 text-xs font-mono text-white/40 uppercase tracking-widest mt-2">
                            <span>{project.year}</span>
                            <span>•</span>
                            <span>Case Study</span>
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
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-bold flex items-center gap-2">
                                <PiTargetDuotone className="w-4 h-4" />
                                The Challenge
                            </h3>
                            <ul className="space-y-3">
                                {project.detail.problem.map((item, i) => (
                                    <li key={i} className="text-sm md:text-base text-white/60 font-geist-mono flex items-start gap-3">
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white font-oswald uppercase flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-accent inline-block"></span>
                        The Solution
                    </h2>
                    <ul className="space-y-4">
                        {project.detail.solution.map((item, i) => (
                            <li key={i} className="flex items-start gap-4 group">
                                <div className="mt-0.5 shrink-0">
                                    <PiCheckCircleFill className="w-5 h-5 text-accent" />
                                </div>
                                <p className="text-white/70 font-geist-sans group-hover:text-white transition-colors">{item}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white font-oswald uppercase flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-accent inline-block"></span>
                        Impact
                    </h2>
                    <ul className="space-y-4">
                        {project.detail.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-4 group">
                                <div className="mt-0.5 shrink-0">
                                    <PiTrendUpBold className="w-5 h-5 text-accent" />
                                </div>
                                <p className="text-white/70 font-geist-sans group-hover:text-white transition-colors">{item}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Technical Footer */}
            <section className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white font-oswald uppercase mb-2 flex items-center gap-3">
                            <PiTerminalWindowDuotone className="w-8 h-8 text-white/50" />
                            Technical
                        </h2>
                        <p className="text-white/40 text-sm font-geist-mono ml-11">Implementation Details</p>
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
        </div>
    );
};

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = products.find((p) => p.id === id) || caseStudies.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    // Type Check
    const isProduct = 'whoFor' in project.detail;

    return (
        <main className="relative min-h-screen bg-[#050505] selection:bg-accent/30">
            {/* Background - Fixed */}
            <div className="fixed inset-0 z-0">
                <DarkVeil />
            </div>

            <div className="relative z-10">
                <Navbar showBackButton={true} />

                {isProduct ? (
                    <ProductLayout project={project as Product} />
                ) : (
                    <CaseStudyLayout project={project as CaseStudy} />
                )}

                <div className="container mx-auto px-6 md:px-12 bg-[#050505]">
                    <div className="pt-12 border-t border-white/10 flex justify-between items-center pb-12">
                        <Link href="/products" className="text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                            All Products
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
