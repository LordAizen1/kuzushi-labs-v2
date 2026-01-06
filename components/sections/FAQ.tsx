"use client";

import { motion } from "framer-motion";
import { PiPlusBold } from "react-icons/pi";
import { useState } from "react";
import { colors } from "@/lib/theme";
import { Highlighter } from "@/components/ui/highlighter";

const faqs = [
    {
        q: "What makes Kuzushi Labs different from other AI vendors or dev studios?",
        a: "We operate as an end-to-end AI product partner—not just a prototype shop. Our focus is production-grade engineering (reliability, security, observability), fast iteration, and measurable business outcomes, with senior ownership from architecture to deployment."
    },
    {
        q: "Which industries (verticals) do you work with?",
        a: "We’ve delivered across healthcare, telecommunications, financial services, education, travel/hospitality, consumer apps, enterprise functions (HR/Finance/Procurement), and government digital infrastructure—adapting the solution to domain constraints and compliance needs."
    },
    {
        q: "Can you fine-tune models on our data?",
        a: "Yes. We can fine-tune or customize models where it adds clear value, and we also use retrieval and structured tooling when that is a safer and more maintainable approach. The choice depends on accuracy needs, data availability, and governance requirements."
    },
    {
        q: "How do you handle security, privacy, and compliance?",
        a: "We follow security-by-design: least-privilege access, encryption, audit logs, data minimization, and controlled environments. We align the architecture to your compliance and deployment requirements (enterprise or government), including stricter isolation where needed."
    },
    {
        q: "Who owns the IP and deliverables?",
        a: "For client engagements, you own the project-specific deliverables we build for you. We retain ownership of our internal accelerators and reusable components used to speed delivery, while ensuring your system and assets remain under your control."
    },
    {
        q: "Do you provide post-deployment support and iteration?",
        a: "Yes. We offer post-launch support for stability, monitoring, bug fixes, and continuous improvement (prompt/model/workflow tuning). We can also provide knowledge transfer and ongoing maintenance based on your preferred engagement model."
    },
    {
        q: "What does a typical engagement look like and how fast can we see results?",
        a: "We usually start with a short discovery to define scope and success metrics, followed by a pilot delivered in weeks. Once validated, we harden and scale into production with integrations, monitoring, and governance."
    },
    {
        q: "What is your business model and pricing structure?",
        a: "We support flexible engagement models—fixed-scope projects, phased build-and-scale, or monthly retainers for ongoing delivery and support. Pricing depends on scope, integrations, deployment requirements, and the level of ongoing iteration/operations needed."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative py-24 px-6 md:px-12 z-20 border-t border-white/5">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-16 text-center">
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-none mb-4 font-oswald uppercase tracking-tight">
                        <Highlighter action="underline" color={colors.accent} strokeWidth={1.5} animationDuration={500} iterations={2} padding={2} isView={true}>Frequently</Highlighter> Asked <Highlighter color={colors.accent} strokeWidth={1.5} animationDuration={500} iterations={2} padding={2} isView={true}>Questions</Highlighter>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 bg-[#0a0a0a] rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg md:text-xl font-medium text-white font-geist-sans">{faq.q}</span>
                                <PiPlusBold
                                    className={`text-accent shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                                />
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === i ? "auto" : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-white/60 font-geist-sans leading-relaxed">
                                    {faq.a}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
