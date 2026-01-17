"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function MediaPage() {
    const t = useTranslations("MediaPage");

    const categories = [
        { id: "all", label: t("sidebar.categories.all"), icon: "dashboard", active: true },
        { id: "polling", label: t("sidebar.categories.polling"), icon: "bar_chart" },
        { id: "analysis", label: t("sidebar.categories.analysis"), icon: "query_stats" },
        { id: "reports", label: t("sidebar.categories.reports"), icon: "description" },
        { id: "bulletins", label: t("sidebar.categories.bulletins"), icon: "newsmode" },
    ];

    const heroTitle = t("hero.title");
    const heroHighlight = t("hero.titleHighlight");
    const heroParts = heroTitle.split(heroHighlight);

    const featuredTitle = t("featured.title");
    // Some titles might have newlines in JSON
    const featuredTitleLines = featuredTitle.split("\n");

    return (
        <main className="pt-32 bg-background-light dark:bg-background-dark min-h-screen relative overflow-hidden">
            {/* Background Decoration */}
            <motion.img
                initial={{ opacity: 0, x: -100, y: -100, scale: 1.2 }}
                animate={{ opacity: 0.5, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src="/images/linear.png"
                alt=""
                style={{
                    filter: "invert(31%) sepia(88%) saturate(1511%) hue-rotate(331deg) brightness(85%) contrast(92%)"
                }}
                className="absolute -top-1/4 -left-1/4 w-full h-auto pointer-events-none z-[1] transition-opacity"
            />

            <Container className="flex pt-12 pb-24 relative z-10">
                {/* Sidebar */}
                <aside className="w-64 hidden lg:flex flex-col gap-8 shrink-0 border-r border-gray-100 dark:border-gray-800 pr-12">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-6">{t("sidebar.filter")}</h3>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-black text-xs uppercase tracking-widest ${cat.active
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-brand-black dark:hover:text-white"
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto p-6 bg-brand-black rounded-3xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-20 h-20 diagonal-stripes opacity-10 -mr-10 -mt-10" />
                        <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3">{t("sidebar.premium.title")}</h4>
                        <p className="text-[10px] leading-relaxed text-gray-400 font-bold mb-6">
                            {t("sidebar.premium.desc")}
                        </p>
                        <Button size="sm" className="w-full bg-white text-brand-black hover:bg-primary hover:text-white transform group-hover:scale-[1.02]">
                            {t("sidebar.premium.button")}
                        </Button>
                    </div>
                </aside>

                {/* Main Content */}
                <section className="flex-1 lg:pl-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-primary font-black tracking-[0.4em] uppercase text-[10px] block mb-4 border-l-4 border-primary pl-4"
                            >
                                {t("hero.label")}
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-black tracking-tighter text-brand-black dark:text-white leading-[0.95]"
                            >
                                {heroParts[0]}
                                <span className="text-primary italic font-serif">{heroHighlight}</span>
                                {heroParts[1]}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mt-8 font-medium italic"
                            >
                                {t("hero.subtitle")}
                                <br />
                                {t("hero.desc")}
                            </motion.p>
                        </div>
                    </div>

                    {/* Featured Report */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 hover:shadow-primary/5 transition-all duration-500 flex flex-col xl:flex-row relative mb-20"
                    >
                        <div className="absolute top-6 left-6 z-10">
                            <span className="bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">{t("featured.label")}</span>
                        </div>

                        {/* Mock Graph Placeholder */}
                        <div className="w-full xl:w-2/5 aspect-video xl:aspect-auto bg-gray-50 dark:bg-black/20 relative overflow-hidden border-b xl:border-b-0 xl:border-r border-gray-100 dark:border-gray-800">
                            <div className="absolute inset-0 swiss-grid opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="w-full h-full flex flex-col justify-end gap-2">
                                    <div className="flex items-end gap-2 h-full">
                                        {[40, 70, 55, 90, 65].map((h, i) => (
                                            <div key={i} className={`flex-1 rounded-t-lg transition-all duration-1000 ${i === 3 ? 'bg-primary' : 'bg-primary/20'}`} style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-2 text-[8px] font-black text-gray-400 uppercase tracking-tighter">
                                        <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>2024 (PROJ)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 xl:p-14 xl:w-3/5 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                                <span>{t("featured.type")}</span>
                                <span className="size-1 bg-primary rounded-full" />
                                <span>May 2024</span>
                                <span className="size-1 bg-primary rounded-full" />
                                <span>{t("featured.readTime")}</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black leading-[0.95] tracking-tighter mb-6 group-hover:text-primary transition-colors">
                                {featuredTitleLines.map((line, i) => (
                                    <span key={i}>{line}{i < featuredTitleLines.length - 1 && <br />}</span>
                                ))}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                                {t("featured.desc")}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button className="px-8 py-4 text-xs">
                                    {t("featured.download")}
                                </Button>
                                <Button variant="outline" className="px-8 py-4 text-xs bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700">
                                    {t("featured.summary")}
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Categories / Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: t("research.firearms.title"), type: t("sidebar.categories.polling"), date: "Feb 2021", icon: "poll" },
                            { title: t("research.exitpoll.title"), type: t("sidebar.categories.analysis"), date: "Oct 2020", icon: "bolt" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl hover:border-primary/20 hover:shadow-xl transition-all group"
                            >
                                <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item.type}</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.date}</span>
                                </div>
                                <h4 className="text-2xl font-black mb-6 tracking-tighter dark:text-white group-hover:text-primary transition-colors">
                                    {item.title}
                                </h4>
                                <Button variant="ghost" size="sm" className="px-0 group-hover:text-primary">
                                    Read Analysis <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </Container>

            {/* Media Mention Logos Section */}
            <section className="py-24 border-t border-gray-100 dark:border-gray-800 bg-gray-50/30">
                <Container>
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs block mb-4">{t("highlights.label")}</span>
                        <h2 className="text-3xl font-black dark:text-white uppercase tracking-tighter">{t("highlights.title")}</h2>
                    </div>
                    {/* Reusing existing MediaLogos styling/logic */}
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="text-2xl font-black text-brand-black dark:text-gray-300">TRT World</div>
                        <div className="text-2xl font-black text-brand-black dark:text-gray-300">Kyiv Post</div>
                        <div className="text-2xl font-black text-brand-black dark:text-gray-300">RBC Ukraine</div>
                        <div className="text-2xl font-black text-brand-black dark:text-gray-300">EU Monitor</div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
