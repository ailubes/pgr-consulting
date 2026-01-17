"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/branding/Logo";
import { Container } from "./Container";
import { motion } from "framer-motion";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-brand-black text-white pt-32 pb-16 border-t-8 border-primary overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] diagonal-stripes opacity-[0.03] pointer-events-none -mr-48 -mt-48 rotate-12" />
            <div className="absolute bottom-0 left-0 w-96 h-96 swiss-grid opacity-[0.05] pointer-events-none -ml-24 -mb-24" />

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-10">
                        <Link href="/">
                            <Logo className="brightness-200" />
                        </Link>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-medium">
                            {t("description")}
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: "LN", label: "LinkedIn" },
                                { icon: "FB", label: "Facebook" },
                                { icon: "X", label: "Twitter" }
                            ].map((social) => (
                                <a
                                    key={social.icon}
                                    href="#"
                                    className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group overflow-hidden relative"
                                >
                                    <span className="text-[10px] font-black group-hover:scale-110 transition-transform relative z-10">{social.icon}</span>
                                    <div className="absolute inset-0 diagonal-stripes opacity-0 group-hover:opacity-20 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary mb-10 border-l-2 border-primary/30 pl-4">
                            {t("navigation")}
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-[11px] font-black uppercase tracking-widest">
                            {["services", "about", "media", "contact"].map((link) => (
                                <li key={link}>
                                    <Link href={`/${link}`} className="hover:text-white hover:translate-x-1 transition-all inline-block">
                                        {t(`links.${link}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary mb-10 border-l-2 border-primary/30 pl-4">
                            {t("expertise")}
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-[11px] font-black uppercase tracking-widest">
                            <li><a href="#" className="hover:text-white transition-colors">{t("risk")}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t("leg")}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t("opinion")}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t("narrative")}</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary mb-10 border-l-2 border-primary/30 pl-4">
                            {t("contact")}
                        </h4>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">location_on</span>
                                <div className="text-gray-400 text-xs font-bold leading-relaxed">
                                    <span className="text-white block mb-1">Horizon Business Center</span>
                                    Kyiv, Ukraine
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                                <div className="text-gray-400 text-xs font-bold leading-relaxed">
                                    <span className="text-white block mb-1">Inquiries</span>
                                    hello@pgrconsulting.group
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <p>© {new Date().getFullYear()} PGR Consulting Group. {t("rights")}</p>
                        <div className="hidden md:block size-1 bg-gray-800 rounded-full" />
                        <p className="italic text-gray-700">ISO 20252:2019 COMPLIANT</p>
                    </div>
                    <div className="flex gap-10">
                        <Link href="/privacy" className="hover:text-white transition-colors">{t("privacy")}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t("terms")}</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
