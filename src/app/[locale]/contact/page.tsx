"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function ContactPage() {
    const t = useTranslations("ContactPage");

    const heroTitle = t("hero.title");
    const heroHighlight = t("hero.titleHighlight");
    const heroParts = heroTitle.split(heroHighlight);

    return (
        <main className="pt-32 bg-background-light dark:bg-background-dark min-h-screen relative overflow-hidden">
            {/* Background Decoration */}
            <motion.img
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 0.1, x: 0 }}
                transition={{ duration: 2 }}
                src="/images/linear.png"
                alt=""
                className="absolute top-0 -left-1/4 w-full h-auto pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"
            />

            <Container className="pt-24 pb-32 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-7">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-primary font-black tracking-[0.4em] uppercase text-[10px] block mb-6 border-l-4 border-primary pl-4"
                        >
                            {t("hero.label")}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black text-brand-black dark:text-white leading-[0.9] tracking-tighter mb-10"
                        >
                            {heroParts[0]}
                            <span className="text-primary italic font-serif">{heroHighlight}</span>
                            {heroParts[1]}
                        </motion.h1>

                        <div className="grid md:grid-cols-2 gap-12 mt-20">
                            <div>
                                <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-primary mb-6">{t("info.hq")}</h4>
                                <div className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
                                    <p className="text-xl text-brand-black dark:text-white font-black tracking-tight">{t("info.city")}</p>
                                    <p>{t("info.building")}</p>
                                    <p>{t("info.email")}</p>
                                    <p>+380 (44) 000-00-00</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-primary mb-6">{t("info.hours")}</h4>
                                <div className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
                                    <p>{t("info.workDays")}</p>
                                    <p className="text-xl text-brand-black dark:text-white font-black tracking-tight">{t("info.workHours")}</p>
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mt-2 font-black">{t("info.weekend")}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-20 flex gap-6">
                            {["LinkedIn", "X (Twitter)", "Facebook"].map((platform) => (
                                <a
                                    key={platform}
                                    href="#"
                                    className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
                                >
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white dark:bg-gray-900 p-12 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl shadow-black/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 diagonal-stripes opacity-10 -mr-24 -mt-24" />
                            <h3 className="text-4xl font-black mb-4 dark:text-white tracking-tighter">{t("form.title")}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 font-medium italic">{t("form.desc")}</p>

                            <form className="space-y-8">
                                {["name", "email", "subject"].map((field) => (
                                    <div key={field}>
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">{t(`form.${field}`)}</label>
                                        <input
                                            className="w-full bg-gray-50 dark:bg-black/20 border-none rounded-2xl focus:ring-2 focus:ring-primary text-sm p-5 text-brand-black dark:text-white font-medium"
                                            placeholder={t(`form.${field}Placeholder`)}
                                        />
                                    </div>
                                ))}
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">{t("form.message")}</label>
                                    <textarea
                                        rows={5}
                                        className="w-full bg-gray-50 dark:bg-black/20 border-none rounded-2xl focus:ring-2 focus:ring-primary text-sm p-5 text-brand-black dark:text-white font-medium"
                                        placeholder={t("form.messagePlaceholder")}
                                    />
                                </div>
                                <Button className="w-full py-6 rounded-3xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-4">
                                    {t("form.submit")}
                                    <span className="material-symbols-outlined">rocket_launch</span>
                                </Button>
                            </form>
                        </motion.div>
                    </aside>
                </div>
            </Container>
        </main>
    );
}
