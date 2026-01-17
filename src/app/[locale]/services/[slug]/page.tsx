"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const t = useTranslations("Services");
    const tCommon = useTranslations("Services.shared");
    const tNav = useTranslations("Navigation");

    // Mapping symbols based on slug
    const iconMap: Record<string, string> = {
        'pr': 'campaign',
        'reputation': 'shield_person',
        'gr': 'gavel',
        'advocacy': 'target',
        'elections': 'how_to_reg',
        'research': 'analytics'
    };

    const icon = iconMap[slug] || 'verified';

    // Get offer items - since we can't easily iterate translated objects in next-intl without raw, 
    // we'll use a predefined set of keys or a helper.
    // For simplicity, let's assume we have a set of common keys we might find.
    // However, it's better to just pass the keys from the JSON.

    const offerKeysMap: Record<string, string[]> = {
        'pr': ['strategy', 'training', 'press', 'crisis', 'monitoring', 'content'],
        'reputation': ['audit', 'strategy', 'monitoring', 'crisis', 'positive', 'negative'],
        'gr': ['strategy', 'stakeholder', 'leg', 'ministry', 'regulatory', 'procurement'],
        'advocacy': ['research', 'strategy', 'coalition', 'lobbying', 'media', 'grassroots'],
        'elections': ['research', 'strategy', 'positioning', 'message', 'digital', 'exitpoll'],
        'research': ['national', 'regional', 'exitpoll', 'focus', 'omnibus', 'ratings']
    };

    const offerKeys = offerKeysMap[slug] || [];

    return (
        <main className="pt-32 bg-background-light dark:bg-background-dark min-h-screen relative overflow-hidden">
            {/* Background Decoration */}
            <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.5, scale: 1.2 }}
                transition={{ duration: 2 }}
                src="/images/linear.png"
                alt=""
                style={{
                    filter: "invert(31%) sepia(88%) saturate(1511%) hue-rotate(331deg) brightness(85%) contrast(92%)"
                }}
                className="absolute -top-1/4 -right-1/4 w-full h-auto pointer-events-none z-[1] transition-opacity"
            />

            <Container className="pt-12 pb-24 relative z-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-16">
                    <Link href="/" className="hover:text-primary transition-colors">{tNav("home")}</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <Link href="/services" className="hover:text-primary transition-colors">{tNav("services")}</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-primary uppercase">{slug}</span>
                </nav>

                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8">
                        {/* Hero Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative overflow-hidden rounded-[3rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-10 md:p-20 mb-20 shadow-2xl shadow-black/5"
                        >
                            <div className="absolute inset-0 diagonal-stripes opacity-10 pointer-events-none" />
                            <div className="relative z-10 grid md:grid-cols-1 gap-12">
                                <div>
                                    <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-primary/20">
                                        <span className="material-symbols-outlined text-sm">{icon}</span>
                                        {tCommon("offer")}
                                    </div>
                                    <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10 text-brand-black dark:text-white">
                                        {t(`${slug}.title`)} <br />
                                        <span className="text-primary italic font-serif">Strategy.</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed font-medium">
                                        {t(`${slug}.desc`)}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative badge */}
                            <div className="absolute bottom-10 right-10 hidden md:block">
                                <div className="bg-primary/5 dark:bg-white/5 p-6 rounded-3xl border border-primary/10 flex items-center gap-6 backdrop-blur-3xl">
                                    <span className="text-5xl font-black text-primary tracking-tighter">15+</span>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 max-w-[80px]">
                                        Years of Expertise
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Content Blocks */}
                        <section className="space-y-20">
                            <div>
                                <SectionHeading
                                    label={tCommon("methodology")}
                                    title={tCommon("offer")}
                                    description={t(`${slug}.subtitle`)}
                                    className="mb-12"
                                />
                                <div className="grid md:grid-cols-2 gap-8">
                                    {offerKeys.map((key, i) => (
                                        <motion.div
                                            key={key}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl group hover:border-primary/20 transition-all"
                                        >
                                            <div className="size-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                                <span className="material-symbols-outlined text-3xl font-light">verified</span>
                                            </div>
                                            <h3 className="text-2xl font-black mb-4 dark:text-white">{t(`${slug}.offer.${key}`)}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                                {t(`${slug}.offer.${key}Desc`)}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Quote Section */}
                            <div className="relative rounded-[2.5rem] overflow-hidden h-96 group">
                                <img
                                    className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_XpBRTC1nZASZKZNCOlgbK3nhDziGU7qRTDi1u1MVhlv-tvvxnfyGom-8Y60r8v0k1E6n3FtwT6VS6NSaZ344GDn99XsT0Lvk1swV4qAP4i_4hcCk3DmFnMMeGPO6m6EH54_K4SiGP8yQqRUwBd2Jd8DNJKqQonaYDNayQyxsLiOQNb1R1VZSdrjlvt6YC5dCetMsF27Y8ULzUZjdJTTWJcUoF863u-abxL4Uk3nHD4uOq0--pu7nMBBDJuhpnzi-B81WiQHwETNx"
                                    alt="Modern architecture"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent flex items-end p-10 md:p-16">
                                    <blockquote className="text-white text-2xl md:text-3xl font-black tracking-tight leading-tight max-w-3xl italic">
                                        &quot;Bridging the gap between private enterprise and public policy for sustainable regional growth.&quot;
                                    </blockquote>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Form */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl shadow-black/5 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 diagonal-stripes opacity-10 -mr-16 -mt-16" />
                                <h3 className="text-3xl font-black mb-4 dark:text-white tracking-tighter leading-none">Consult <br />an Expert</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 font-medium">Schedule a confidential session with our strategic leads.</p>

                                <form className="space-y-6">
                                    {["Full Name", "Organization", "Email Address"].map((label) => (
                                        <div key={label}>
                                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{label}</label>
                                            <input
                                                className="w-full bg-gray-50 dark:bg-black/20 border-none rounded-xl focus:ring-2 focus:ring-primary text-sm p-4 text-brand-black dark:text-white font-medium"
                                                placeholder={label === 'Email Address' ? 'name@example.com' : label}
                                                type={label === 'Email Address' ? 'email' : 'text'}
                                            />
                                        </div>
                                    ))}
                                    <Button className="w-full py-5 rounded-2xl flex items-center justify-center gap-3">
                                        {tCommon("cta")}
                                        <span className="material-symbols-outlined text-sm">send</span>
                                    </Button>
                                </form>

                                <div className="mt-10 pt-8 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-[8px] font-black text-gray-400 tracking-[0.3em] uppercase">
                                    <span>NDA Guaranteed</span>
                                    <span className="size-1 bg-primary rounded-full" />
                                    <span>24h Response</span>
                                </div>
                            </motion.div>

                            <div className="mt-8 p-8 bg-primary/5 rounded-3xl border border-primary/10 flex items-center gap-6">
                                <span className="material-symbols-outlined text-primary text-4xl">verified</span>
                                <p className="text-[10px] font-black text-gray-500 dark:text-gray-400 italic uppercase tracking-widest leading-relaxed">
                                    Full compliance with international ethics standards and lobbying registries.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </main>
    );
}
