"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamMemberCard } from "@/components/modules/TeamMemberCard";
import { InstitutionalPartners } from "@/components/modules/InstitutionalPartners";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
    const t = useTranslations("AboutPage");

    const heroTitle = t("hero.title");
    const heroHighlight = t("hero.titleHighlight");
    const heroParts = heroTitle.split(heroHighlight);

    // Using any for raw since next-intl types are strict
    const getTags = (key: string): string[] => {
        try {
            // @ts-ignore
            return t.raw(`team.${key}.tags`) || [];
        } catch (e) {
            return [];
        }
    };

    return (
        <main className="pt-32 bg-background-light dark:bg-background-dark min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden border-b border-gray-100 dark:border-white/5">
                <div className="absolute inset-0 swiss-grid opacity-10" />
                <div className="absolute top-0 right-0 w-1/2 h-full diagonal-stripes opacity-10 -mr-24 -mt-24 pointer-events-none" />

                {/* Linear Asset Decoration */}
                <motion.img
                    initial={{ opacity: 0, x: 100, rotate: 10 }}
                    animate={{ opacity: 0.1, x: 0, rotate: 0 }}
                    transition={{ duration: 2 }}
                    src="/images/linear.png"
                    alt=""
                    className="absolute -bottom-1/2 -left-1/4 w-full h-auto pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"
                />

                <Container className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10"
                        >
                            <span className="size-1.5 bg-primary rounded-full animate-pulse" />
                            {t("hero.label")}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black text-brand-black dark:text-white leading-[0.85] tracking-tighter mb-10"
                        >
                            {heroParts[0]}
                            <span className="text-primary italic font-serif">{heroHighlight}</span>
                            {heroParts[1]}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed font-medium italic mb-12"
                        >
                            {t("hero.subtitle")}
                        </motion.p>
                        <Button className="px-10 py-5 text-[10px]">{t("hero.cta")}</Button>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full opacity-50" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative bg-white dark:bg-gray-900 rounded-[3rem] p-12 border border-gray-100 dark:border-gray-800 shadow-2xl"
                        >
                            <span className="material-symbols-outlined text- primary text-6xl mb-8 font-light italic opacity-20">format_quote</span>
                            <h3 className="text-3xl font-black text-brand-black dark:text-white leading-tight tracking-tight mb-8">
                                {t("mission.quote")}
                            </h3>
                            <div className="flex gap-8 border-t border-gray-100 dark:border-gray-800 pt-8">
                                <div>
                                    <h4 className="font-black text-primary text-xs uppercase tracking-widest mb-2">{t("mission.integrity.title")}</h4>
                                    <p className="text-xs text-gray-500">{t("mission.integrity.desc")}</p>
                                </div>
                                <div className="w-px bg-gray-100 dark:bg-gray-800" />
                                <div>
                                    <h4 className="font-black text-primary text-xs uppercase tracking-widest mb-2">{t("mission.data.title")}</h4>
                                    <p className="text-xs text-gray-500">{t("mission.data.desc")}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Braing Trust (Team) Section */}
            <section className="py-32 bg-white dark:bg-background-dark/50">
                <Container>
                    <SectionHeading
                        label={t("team.label")}
                        title={t("team.title")}
                        description={t("team.desc")}
                        className="mb-24"
                    />

                    <div className="grid md:grid-cols-2 gap-20">
                        <TeamMemberCard
                            name={t("team.ruslan.name")}
                            title={t("team.ruslan.title")}
                            description={t("team.ruslan.bio")}
                            tags={getTags("ruslan")}
                        />
                        <TeamMemberCard
                            name={t("team.alla.name")}
                            title={t("team.alla.title")}
                            description={t("team.alla.bio")}
                            tags={getTags("alla")}
                        />
                    </div>
                </Container>
            </section>

            {/* Strategic Ecosystem */}
            <InstitutionalPartners />
        </main>
    );
}
