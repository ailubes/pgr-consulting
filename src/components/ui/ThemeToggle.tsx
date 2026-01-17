"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <div className="size-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10" />
    );

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="size-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all relative overflow-hidden group"
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={theme}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="material-symbols-outlined text-xl"
                >
                    {theme === "dark" ? "light_mode" : "dark_mode"}
                </motion.span>
            </AnimatePresence>
            <div className="absolute inset-0 diagonal-stripes opacity-0 group-hover:opacity-5 transition-opacity" />
        </button>
    );
}
