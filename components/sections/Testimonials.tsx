"use client";

import { Marquee } from "@/components/ui/marquee";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "Kuzushi Labs transformed our data infrastructure, enabling real-time analytics we didn't think were possible.",
        author: "Sarah J.",
        role: "CTO, FinTech Startups"
    },
    {
        quote: "Their approach to AI is pragmatic and effective. We saw ROI within weeks of deployment.",
        author: "David L.",
        role: "Director of Operations"
    },
    {
        quote: "A true partner in innovation. The team delivered a complex generative AI model ahead of schedule.",
        author: "Elena R.",
        role: "Product Lead"
    },
    {
        quote: "The scalability of the systems they built allowed us to handle 10x traffic without a hitch.",
        author: "Michael T.",
        role: "VP of Engineering"
    },
    {
        quote: "Exceptional quality and attention to detail. They don't just write code; they understand the business.",
        author: "Jessica M.",
        role: "Founder, SaaS Company"
    }
];

const ReviewCard = ({
    quote,
    author,
    role,
}: {
    quote: string;
    author: string;
    role: string;
}) => {
    return (
        <div className={cn(
            "relative w-80 cursor-pointer overflow-hidden rounded-xl border border-white/10 p-8",
            "bg-[#0a0a0a] hover:bg-white/5 transition-colors duration-300",
        )}>
            <Quote size={32} className="text-accent/20 mb-4" />
            <p className="text-white/80 font-geist-sans text-sm md:text-base mb-6 leading-relaxed">
                "{quote}"
            </p>
            <div>
                <h4 className="text-white font-bold font-oswald tracking-wide">{author}</h4>
                <span className="text-white/40 text-xs md:text-sm font-geist-mono">{role}</span>
            </div>
        </div>
    );
};

export default function Testimonials() {
    return (
        <section className="relative py-24 z-20 border-t border-white/5 overflow-hidden">
            <div className="container-fluid px-0">
                <div className="mb-16 px-6 md:px-12 container mx-auto">
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-none mb-4 font-oswald uppercase tracking-tight">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-tertiary to-accent">Partners Say</span>
                    </h2>
                </div>

                <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:40s]">
                        {testimonials.map((t, i) => (
                            <ReviewCard key={i} {...t} />
                        ))}
                    </Marquee>


                </div>
            </div>
        </section>
    );
}
