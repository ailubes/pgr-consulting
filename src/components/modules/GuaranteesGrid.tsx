"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function GuaranteesGrid() {
    const t = useTranslations("guarantees");

    const items = [
        { id: "analysis", icon: "manage_search" },
        { id: "privacy", icon: "lock" },
        { id: "conflict", icon: "handshake" }, // or 'block' with a specific design, but handshake implies trust
        { id: "interests", icon: "verified_user" }
    ];

    return (
        <section className="py-24 bg-brand-black text-white relative overflow-hidden">
            <div className="absolute inset-0 swiss-grid opacity-5 pointer-events-none" />
            <Container className="relative z-10">
                <SectionHeading
                    label={t("title")}
                    title={t("title")}
                    className="mb-20 text-white"
                />

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6 group"
                        >
                            <div className="size-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl text-white">
                                    {item.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-black mb-3 text-white/90 group-hover:text-white transition-colors">
                                    {t(`${item.id}.title`)}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {t(`${item.id}.desc`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
