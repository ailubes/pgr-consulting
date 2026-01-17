"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function MetricOverlay() {
    const t = useTranslations("HomePage.research.metrics");

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-6 right-6 left-6 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col gap-4 z-20"
        >
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{t("trust")}</span>
                    <span className="text-2xl font-black text-gray-900 dark:text-white">{t("region")}</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-sm font-black animate-pulse">trending_up</span>
                    <span className="text-lg font-black tracking-tighter">+12.4%</span>
                </div>
            </div>

            <div className="flex items-end gap-1.5 h-16">
                {[40, 65, 50, 90, 75, 45, 60, 85].map((height, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.8 + (i * 0.1), duration: 1, ease: "easeOut" }}
                        className={`flex-1 rounded-sm ${height === 90 ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-gray-100 dark:bg-gray-800'}`}
                    />
                ))}
            </div>

            <div className="flex justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">{t("q1")}</span>
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">{t("realtime")}</span>
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">{t("verified")}</span>
            </div>
        </motion.div>
    );
}
