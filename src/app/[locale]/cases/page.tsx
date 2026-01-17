"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function CasesPage() {
    const t = useTranslations("CasesPage");

    const cases = [
        { id: "constitution", icon: "gavel" },
        { id: "chernivtsi", icon: "how_to_reg" },
        { id: "strategies", icon: "strategy" },
        { id: "mediation", icon: "handshake" }
    ];

    const heroTitle = t("hero.title");
    const heroHighlight = t("hero.titleHighlight");
    const heroParts = heroTitle.split(heroHighlight);

    return (
        <main className="pt-32 bg-background-light dark:bg-background-dark min-h-screen">
            {/* Hero Section */}
            <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden border-b border-gray-100 dark:border-white/5">
                {/* Linear Asset Decoration */}
                <motion.img
                    initial={{ opacity: 0, x: -100, y: -100, scale: 1.2 }}
                    animate={{ opacity: 0.5, x: 0, y: 0, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src="/images/linear.png"
                    alt=""
                    style={{
                        filter: "invert(31%) sepia(88%) saturate(1511%) hue-rotate(331deg) brightness(85%) contrast(92%)"
                    }}
                    className="absolute -top-1/4 -left-1/4 w-full h-auto pointer-events-none z-[1] transition-opacity"
                />

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-primary font-black tracking-[0.3em] uppercase text-xs block mb-6">{t("hero.label")}</span>
                        <h1 className="text-6xl md:text-8xl font-black text-brand-black dark:text-white leading-[0.85] tracking-tighter mb-8">
                            {heroParts[0]}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600 italic font-serif pr-4">{heroHighlight}</span>
                            {heroParts[1]}
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium leading-relaxed">
                            {t("hero.subtitle")}
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Cases Grid */}
            <section className="py-12 md:py-16 lg:py-24">
                <Container>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {cases.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white dark:bg-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-100 dark:border-white/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                    <span className="material-symbols-outlined text-7xl md:text-9xl text-primary">{item.icon}</span>
                                </div>

                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-4 md:mb-6">
                                    {t(`cases.${item.id}.tag`)}
                                </span>

                                <h3 className="text-xl md:text-2xl font-black text-brand-black dark:text-white mb-3 md:mb-4 leading-tight">
                                    {t(`cases.${item.id}.title`)}
                                </h3>

                                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6 md:mb-8">
                                    {t(`cases.${item.id}.desc`)}
                                </p>

                                <Button variant="outline" className="rounded-xl text-xs uppercase tracking-widest group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                    Детальніше
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}
