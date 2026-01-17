"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";

type Segment = "government" | "business" | "civil";

interface ServiceSegmentTabsProps {
    onSegmentChange: (segment: Segment) => void;
}

export function ServiceSegmentTabs({ onSegmentChange }: ServiceSegmentTabsProps) {
    const [activeTab, setActiveTab] = useState<Segment>("government");
    const t = useTranslations("ServicesPage.tabs");

    const tabs: Segment[] = ["government", "business", "civil"];

    const handleTabChange = (tab: Segment) => {
        setActiveTab(tab);
        onSegmentChange(tab);
    };

    return (
        <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-100 dark:bg-white/5 p-1.5 rounded-2xl border border-gray-200 dark:border-white/10 relative">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        className={clsx(
                            "relative px-6 py-3 text-xs md:text-sm font-black uppercase tracking-widest rounded-xl transition-all z-10",
                            activeTab === tab
                                ? "text-primary dark:text-white"
                                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        )}
                    >
                        {t(tab)}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white dark:bg-primary shadow-sm rounded-xl -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
