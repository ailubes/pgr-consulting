"use client";

import { usePathname, Link, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Logo } from "@/components/branding/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function TopNav() {
    const t = useTranslations("Navigation");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll(); // Initial check
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: t("home") },
        { href: "/services", label: t("services") },
        { href: "/about", label: t("about") },
        { href: "/media", label: t("media") },
    ];

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <header
            className={clsx(
                "fixed top-0 z-[100] w-full transition-all duration-500",
                isScrolled
                    ? "bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 py-4 shadow-xl shadow-black/5"
                    : "bg-transparent border-b border-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/">
                        <Logo />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (pathname === "" && link.href === "/");
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={clsx(
                                        "relative text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300",
                                        isActive
                                            ? "text-primary"
                                            : "text-gray-500 hover:text-brand-black dark:hover:text-white"
                                    )}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navIndicator"
                                            className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    {/* Language Switcher */}
                    <div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-xl border border-gray-200 dark:border-white/10">
                        <button
                            onClick={() => switchLocale('en')}
                            className={clsx(
                                "px-3 py-1.5 text-[9px] font-black rounded-lg transition-all uppercase tracking-widest",
                                locale === 'en'
                                    ? "bg-white dark:bg-primary shadow-sm text-primary dark:text-white"
                                    : "text-gray-400 hover:text-primary"
                            )}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => switchLocale('ua')}
                            className={clsx(
                                "px-3 py-1.5 text-[9px] font-black rounded-lg transition-all uppercase tracking-widest",
                                locale === 'ua'
                                    ? "bg-white dark:bg-primary shadow-sm text-primary dark:text-white"
                                    : "text-gray-400 hover:text-primary"
                            )}
                        >
                            UA
                        </button>
                    </div>

                    <ThemeToggle />

                    <Link href="/contact">
                        <Button size="sm" className="rounded-xl px-8 py-3.5 text-[10px] bg-brand-black dark:bg-white text-white dark:text-brand-black hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all transform hover:scale-[1.05]">
                            {t("contact")}
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-3 lg:hidden">
                    <ThemeToggle />
                    <button
                        className="p-2 text-brand-black dark:text-white bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {isMobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="lg:hidden fixed inset-0 bg-brand-black/60 backdrop-blur-md z-40"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="lg:hidden fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white dark:bg-background-dark z-50 p-10 shadow-2xl flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-16">
                                <Logo />
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-gray-400"
                                >
                                    <span className="material-symbols-outlined font-black">close</span>
                                </button>
                            </div>

                            <nav className="flex flex-col gap-8 mb-auto">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={clsx(
                                            "text-2xl font-black uppercase tracking-tighter transition-colors",
                                            pathname === link.href ? "text-primary" : "text-brand-black dark:text-white"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="pt-10 border-t border-gray-100 dark:border-white/10 space-y-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t("selectLanguage")}</span>
                                    <div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-xl">
                                        <button onClick={() => switchLocale('en')} className={clsx("px-4 py-2 text-[10px] font-black rounded-lg", locale === 'en' ? "bg-white dark:bg-primary text-primary dark:text-white" : "text-gray-400")}>EN</button>
                                        <button onClick={() => switchLocale('ua')} className={clsx("px-4 py-2 text-[10px] font-black rounded-lg", locale === 'ua' ? "bg-white dark:bg-primary text-primary dark:text-white" : "text-gray-400")}>UA</button>
                                    </div>
                                </div>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full py-6 rounded-2xl text-[12px]">
                                        {t("contact")}
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
