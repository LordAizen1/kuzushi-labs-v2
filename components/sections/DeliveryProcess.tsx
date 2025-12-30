import React from "react";
import { deliverySteps } from "@/lib/process-data";
import { Timeline } from "@/components/ui/timeline";

export default function DeliveryProcess() {
    const timelineData = deliverySteps.map((step) => ({
        title: step.number,
        content: (
            <div>
                <h3 className="text-2xl md:text-4xl mb-4 font-bold font-oswald text-white uppercase">
                    {step.title}
                </h3>
                <p className="text-white/60 font-geist-sans text-lg leading-relaxed">
                    {step.description}
                </p>
            </div>
        ),
    }));

    return (
        <section className="relative z-10 w-full bg-transparent">
            <div className="flex flex-col items-center pt-24 text-center">
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
                    The Methodology
                </span>
                <h2 className="text-4xl md:text-6xl font-bold font-oswald text-white uppercase leading-none">
                    AI-First <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Delivery</span>
                </h2>
                <p className="mt-6 text-white/50 max-w-2xl font-geist-sans px-6">
                    A structured, outcome-driven journey — from first call to measurable impact.
                </p>
            </div>

            <Timeline data={timelineData} />
        </section>
    );
}
