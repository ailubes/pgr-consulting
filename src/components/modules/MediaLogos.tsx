import { Container } from "@/components/layout/Container";

export function MediaLogos() {
    return (
        <section className="py-16 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-black/10">
            <Container>
                <h5 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-gray-600 mb-12">
                    In the Global Spotlight
                </h5>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {/* TRT World */}
                    <div className="flex items-center gap-2 group cursor-default">
                        <div className="bg-brand-black text-white px-2 py-0.5 font-black text-xl group-hover:bg-primary transition-colors">TRT</div>
                        <div className="font-light text-xl uppercase tracking-widest text-brand-black dark:text-gray-300">World</div>
                    </div>

                    {/* RBC Ukraine */}
                    <div className="flex items-center gap-1 group cursor-default">
                        <div className="text-2xl font-black text-brand-black dark:text-gray-300 group-hover:text-primary transition-colors">RBC</div>
                        <div className="text-[10px] uppercase font-bold text-primary">Ukraine</div>
                    </div>

                    {/* Kyiv Post */}
                    <div className="flex flex-col items-center group cursor-default">
                        <div className="text-xl font-serif italic font-black text-brand-black dark:text-gray-300">Kyiv Post</div>
                        <div className="h-0.5 w-full bg-brand-black dark:bg-gray-700 group-hover:bg-primary transition-colors"></div>
                    </div>

                    {/* EU Monitor */}
                    <div className="flex items-center gap-2 group cursor-default">
                        <span className="material-symbols-outlined text-brand-black dark:text-gray-300 group-hover:text-primary transition-colors">public</span>
                        <span className="font-black text-lg uppercase tracking-tighter text-brand-black dark:text-gray-300">EU <span className="text-primary italic">Monitor</span></span>
                    </div>

                    {/* Pravda */}
                    <div className="flex items-center gap-2 group cursor-default">
                        <div className="text-xl font-black tracking-tight text-brand-black dark:text-gray-300 group-hover:text-primary transition-colors">Pravda</div>
                        <div className="size-2 rounded-full bg-primary animate-pulse" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
