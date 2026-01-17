"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MetricOverlay } from "./MetricOverlay";

export function HeroSection() {
    const t = useTranslations("HomePage.hero");

    const headline = t("headline");
    const highlight = t("headlineHighlight");

    // Split headline by highlight to style it
    const parts = headline.split(highlight);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-32">
            {/* Background Layers */}
            <div className="absolute inset-0 swiss-grid opacity-30 dark:opacity-20 z-0" />
            <div className="absolute inset-0 diagonal-stripes opacity-10 z-0" />

            {/* Linear Asset - Large subtle overlay */}
            <motion.img
                initial={{ opacity: 0, x: -100, y: -100, scale: 1.2 }}
                animate={{ opacity: 0.5, x: 0, y: 0, scale: 1.4 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src="/images/linear.png"
                alt=""
                style={{
                    filter: "invert(31%) sepia(88%) saturate(1511%) hue-rotate(331deg) brightness(85%) contrast(92%)"
                }}
                className="absolute -top-1/4 -left-1/4 w-[120%] h-auto select-none pointer-events-none z-[1] dark:opacity-50 transition-opacity"
            />

            <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] w-fit"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                        </span>
                        {t("badge")}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tighter text-brand-black dark:text-white"
                    >
                        {parts[0]}
                        <span className="text-primary italic font-serif">{highlight}</span>
                        {parts[1]}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
                    >
                        {t("subheadline")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <Button size="lg" className="rounded-xl px-10 py-5 text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                            {t("cta")}
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-xl px-10 py-5 text-sm font-black uppercase tracking-widest bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                            {t("learnMore")}
                        </Button>
                    </motion.div>
                </div>

                <div className="lg:col-span-5 relative h-full min-h-[500px] hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 2 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="relative aspect-square w-full bg-gray-200 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white dark:border-gray-950"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10 mix-blend-multiply" />
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVWy3Cw-ZyLg4n_9ln9O_1Drvf5LW6s6US102WdZfkGXnVd3C9RqxQuRRo1-ekTbv1mkLfVdRCqWLzVTJzSMDzsAwwIAhqVrrbWmLAVJ6UjYqs525h7RFJFm4nGzSa0e_ux_tl8n5g7wIg2PLAFc0uJFSKeE2TvqN2xgE-st7ON-VTG0gbgiYW2e7djEF-IVOI6WC2yHYbixTzSwSgPBuCn8FrBnhTX4znDfJkZWG5urUK30vwwmmnS4NPCl6Rb32Vz3HcASAl4AAC"
                            alt="Modern government building architectural detail"
                            className="w-full h-full object-cover grayscale contrast-125 opacity-70 scale-105"
                        />
                        <MetricOverlay />
                    </motion.div>

                    {/* Decorative accent */}
                    <div className="absolute -top-12 -left-12 size-48 rounded-full border border-primary/10 animate-pulse-subtle" />
                    <div className="absolute -bottom-24 -right-12 size-72 rounded-full bg-primary/5 blur-3xl" />
                </div>
            </Container>
        </section>
    );
}
