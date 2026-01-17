"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/modules/ServiceCard";
import { HeroSection } from "@/components/modules/HeroSection";
import { MediaLogos } from "@/components/modules/MediaLogos";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const t = useTranslations("HomePage");

  const services = [
    { id: "pr", icon: "campaign" },
    { id: "reputation", icon: "shield_person" },
    { id: "gr", icon: "gavel" },
    { id: "advocacy", icon: "target" },
    { id: "elections", icon: "how_to_reg" },
    { id: "research", icon: "analytics" },
  ];

  const expertiseTitle = t("expertise.title");
  const expertiseHighlight = t("expertise.titleHighlight");
  const expertiseParts = expertiseTitle.split(expertiseHighlight);

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <MediaLogos />

      {/* Expertise Grid */}
      <section className="py-24 bg-white dark:bg-background-dark overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full diagonal-stripes opacity-5 pointer-events-none" />
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary font-black tracking-[0.3em] uppercase text-xs block mb-4 border-l-4 border-primary pl-4"
              >
                {t("expertise.label")}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-brand-black dark:text-white leading-[0.95] tracking-tighter"
              >
                {expertiseParts[0]}
                <span className="italic font-normal font-serif text-primary">{expertiseHighlight}</span>
                {expertiseParts[1]}
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 dark:text-gray-400 max-w-xs text-sm leading-relaxed font-medium"
            >
              {t("expertise.desc")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ServiceCard
                  title={t(`services.${service.id}.title`)}
                  description={t(`services.${service.id}.desc`)}
                  icon={service.icon}
                  href={`/services/${service.id}`}
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Research CTA Section */}
      <section className="py-24 px-6 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16 text-white relative shadow-2xl shadow-primary/20"
          >
            <div className="absolute top-0 right-0 p-24 diagonal-stripes h-full w-1/2 opacity-20 pointer-events-none" />
            <div className="flex-1 z-10">
              <span className="text-white/70 font-black uppercase tracking-[0.3em] text-[10px] block mb-8 italic">{t("research.label")}</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.95] tracking-tighter">
                {t("research.moldova.title")}
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium">
                {t("research.moldova.desc")}
              </p>
              <Button size="lg" className="group bg-brand-black text-white hover:bg-white hover:text-primary px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all duration-300">
                {t("research.button")}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Button>
            </div>

            <div className="flex-1 w-full lg:w-auto z-10">
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 shadow-2xl">
                <div className="space-y-10">
                  {[
                    { label: t("research.stats.alignment"), val: 72 },
                    { label: t("research.stats.concern"), val: 48 },
                    { label: t("research.stats.trust"), val: 65 }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3 text-white/90">
                        <span>{stat.label}</span>
                        <span>{stat.val}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.val}%` }}
                          transition={{ delay: 0.5 + (i * 0.2), duration: 1.5, ease: "circOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-[8px] font-black uppercase tracking-[0.3em] text-white/50">
                  <span>{t("research.methodology")}</span>
                  <span className="material-symbols-outlined text-sm">verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter dark:text-white">
              {t("cta.title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              {t("cta.desc")}
            </p>
            <Button size="lg" className="rounded-xl px-12 py-6 text-sm font-black uppercase tracking-widest">
              {t("cta.button")}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
