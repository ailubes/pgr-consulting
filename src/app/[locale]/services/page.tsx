"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/modules/ServiceCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function ServicesPage() {
    const t = useTranslations("ServicesPage");

    const services = [
        { id: "pr", icon: "campaign" },
        { id: "reputation", icon: "shield_person" },
        { id: "gr", icon: "gavel" },
        { id: "advocacy", icon: "target" },
        { id: "elections", icon: "how_to_reg" },
        { id: "research", icon: "analytics" },
    ];

    const heroTitle = t("hero.title");
    const heroHighlight = t("hero.titleHighlight");
    const heroParts = heroTitle.split(heroHighlight);

    const methTitle = t("methodology.title");
    const methHighlight = t("methodology.titleHighlight");
    const methParts = methTitle.split(methHighlight);

    return (
        <main className="pt-32 bg-background-light dark:bg-background-dark min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden border-b border-gray-100 dark:border-white/5">
                <div className="absolute inset-0 swiss-grid opacity-10" />
                <div className="absolute top-0 right-0 w-1/2 h-full diagonal-stripes opacity-10 -mr-24 -mt-24 pointer-events-none" />

                {/* Linear Asset Decoration */}
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.5, scale: 1.2 }}
                    transition={{ duration: 2.5 }}
                    src="/images/linear.png"
                    alt=""
                    style={{
                        filter: "invert(31%) sepia(88%) saturate(1511%) hue-rotate(331deg) brightness(85%) contrast(92%)"
                    }}
                    className="absolute -top-1/2 -right-1/4 w-full h-auto pointer-events-none z-[1] transition-opacity"
                />

                <Container className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10"
                    >
                        {t("hero.badge")}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-black dark:text-white leading-[0.85] tracking-tighter mb-12"
                    >
                        {heroParts[0]}
                        <span className="text-primary italic font-serif">{heroHighlight}</span>
                        {heroParts[1]}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed font-medium italic"
                    >
                        {t("hero.subtitle")}
                    </motion.p>
                </Container>
            </section>

            {/* Grid Section */}
            <section className="py-24 md:py-32">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <ServiceCard
                                    title={t(`list.${service.id}.title`)}
                                    description={t(`list.${service.id}.desc`)}
                                    icon={service.icon}
                                    href={`/services/${service.id}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Methodology CTA */}
            <section className="py-32 bg-brand-black relative overflow-hidden">
                <div className="absolute inset-0 diagonal-stripes opacity-5 pointer-events-none" />
                <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] block mb-8">{t("methodology.badge")}</span>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-10">
                            {methParts[0]}
                            <span className="text-primary italic font-serif">{methHighlight}</span>
                            {methParts[1]}
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                            {t("methodology.desc")}
                        </p>
                        <Button className="px-12 py-5 text-xs">{t("methodology.cta")}</Button>
                    </div>

                    <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 relative">
                        <div className="absolute -top-12 -right-12 size-40 bg-primary/20 blur-3xl rounded-full" />
                        <div className="space-y-8">
                            {[
                                { num: "01", key: "s1" },
                                { num: "02", key: "s2" },
                                { num: "03", key: "s3" },
                            ].map((step) => (
                                <div key={step.num} className="flex gap-6 group">
                                    <span className="text-3xl font-black text-primary/30 group-hover:text-primary transition-colors">{step.num}</span>
                                    <div>
                                        <h4 className="text-white font-black text-xl mb-2 tracking-tight group-hover:text-primary transition-colors">{t(`methodology.steps.${step.key}.title`)}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{t(`methodology.steps.${step.key}.desc`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
