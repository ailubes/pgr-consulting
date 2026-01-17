"use client";

import { Container } from "@/components/layout/Container";
import { useTranslations } from "next-intl";

export function InstitutionalPartners() {
    const t = useTranslations("AboutPage.partners");

    const partners = [
        { name: "INFO SAPIENS", role: t("roles.research"), logo: "📊" },
        { name: "ECA UKRAINE", role: t("roles.ally"), logo: "🏛️" },
        { name: "GOV TECH UA", role: t("roles.digital"), logo: "💻" },
    ];

    return (
        <section className="py-24 border-t border-gray-100 dark:border-gray-800">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs block mb-4">{t("badge")}</span>
                    <h2 className="text-3xl md:text-4xl font-black dark:text-white">{t("title")}</h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center gap-4 group cursor-default">
                            <div className="h-16 w-56 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-500 relative overflow-hidden">
                                <span className="font-black italic tracking-tighter text-xl text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
                                    {partner.name}
                                </span>
                                <div className="absolute top-0 right-0 w-16 h-16 diagonal-stripes opacity-0 group-hover:opacity-10 transition-opacity" />
                            </div>
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {partner.role}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
