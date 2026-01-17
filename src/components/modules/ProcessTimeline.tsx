"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

export function ProcessTimeline() {
    const t = useTranslations("process");

    const steps = ["step1", "step2", "step3", "step4"];

    return (
        <section className="py-24 md:py-32 bg-background-light dark:bg-background-dark overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-brand-black dark:text-white mb-6">
                        {t("title")}
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Mobile: hidden, Desktop: visible) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 dark:bg-white/10" />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                {/* Step Number Bubble */}
                                <div className="size-24 rounded-full bg-white dark:bg-background-dark border-4 border-gray-100 dark:border-white/10 flex items-center justify-center relative z-10 mx-auto lg:mx-0 mb-8 transition-colors group-hover:border-primary group-hover:scale-110 duration-300">
                                    <span className="text-3xl font-black text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div className="text-center lg:text-left">
                                    <h3 className="text-xl font-black text-brand-black dark:text-white mb-4">
                                        {t(`${step}.title`)}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {t(`${step}.desc`)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
