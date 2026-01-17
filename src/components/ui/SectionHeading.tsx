"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface SectionHeadingProps {
    label?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    label,
    title,
    description,
    align = "left",
    className
}: SectionHeadingProps) {
    return (
        <div className={clsx(
            "flex flex-col gap-4",
            align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
            className
        )}>
            {label && (
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-black tracking-[0.4em] uppercase text-[10px] flex items-center gap-3"
                >
                    <span className="w-8 h-[1px] bg-primary/30" />
                    {label}
                </motion.span>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-black text-brand-black dark:text-white leading-[0.95] tracking-tighter"
            >
                {title}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl leading-relaxed font-medium"
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}
