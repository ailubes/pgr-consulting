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

            {/* Impact Metrics */}
            <section className="py-12 md:py-16 lg:py-24 bg-white dark:bg-background-dark/50">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <span className="text-primary font-black tracking-[0.3em] uppercase text-xs block mb-4">{t("impact.label")}</span>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-black dark:text-white mb-4">
                            {t("impact.title")}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            {t("impact.subtitle")}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { key: "projects", icon: "workspace_premium" },
                            { key: "campaigns", icon: "campaign" },
                            { key: "clients", icon: "groups" },
                            { key: "years", icon: "calendar_today" }
                        ].map((metric, index) => (
                            <motion.div
                                key={metric.key}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-gray-50 dark:bg-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-white/10 text-center group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className="absolute inset-0 diagonal-stripes opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl md:rounded-3xl" />
                                <div className="relative z-10">
                                    <div className="size-12 md:size-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center text-primary mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300">
                                        <span className="material-symbols-outlined text-2xl md:text-4xl">{metric.icon}</span>
                                    </div>
                                    <div className="text-3xl md:text-5xl font-black text-brand-black dark:text-white mb-2 group-hover:text-primary transition-colors">
                                        {t(`impact.metrics.${metric.key}.value`)}
                                    </div>
                                    <div className="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        {t(`impact.metrics.${metric.key}.label`)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-primary/20" />
                <div className="absolute inset-0 diagonal-stripes opacity-5" />

                {/* Linear Asset Decoration */}
                <motion.img
                    initial={{ opacity: 0, x: 100, y: 100, scale: 1.2 }}
                    whileInView={{ opacity: 0.3, x: 0, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src="/images/linear.png"
                    alt=""
                    style={{
                        filter: "invert(31%) sepia(88%) saturate(1511%) hue-rotate(331deg) brightness(85%) contrast(92%)"
                    }}
                    className="absolute -bottom-1/4 -right-1/4 w-full h-auto pointer-events-none opacity-20"
                />

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8">
                            <span className="size-2 bg-primary rounded-full animate-pulse" />
                            {t("cta.badge")}
                        </span>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-[0.9] tracking-tight">
                            {t("cta.title")}
                        </h2>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
                            {t("cta.description")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white px-8 md:px-12 py-5 md:py-6 rounded-xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group"
                            >
                                {t("cta.primaryButton")}
                                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/30 text-white hover:bg-white hover:text-brand-black px-8 md:px-12 py-5 md:py-6 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300"
                            >
                                {t("cta.secondaryButton")}
                            </Button>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </main>
    );
}
