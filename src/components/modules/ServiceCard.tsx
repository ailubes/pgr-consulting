"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
    const t = useTranslations("Services.shared");

    return (
        <Link href={href}>
            <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group h-full flex flex-col p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
                {/* Background Pattern on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 diagonal-stripes opacity-0 group-hover:opacity-10 transition-opacity transform translate-x-8 -translate-y-8" />

                <div className="relative z-10">
                    <div className="size-16 md:size-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center text-primary mb-6 md:mb-8 group-hover:from-primary group-hover:to-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/10 group-hover:shadow-2xl group-hover:shadow-primary/30">
                        <span className="material-symbols-outlined text-4xl md:text-5xl font-light">{icon}</span>
                    </div>

                    <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-3 md:mb-4 dark:text-white group-hover:text-primary transition-colors">
                        {title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                        {description}
                    </p>
                </div>

                <div className="mt-auto flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    {t("explore")}
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
            </motion.div>
        </Link>
    );
}
