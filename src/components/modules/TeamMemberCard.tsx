"use client";

import { motion } from "framer-motion";

interface TeamMemberProps {
    name: string;
    title: string;
    description: string;
    image?: string;
    tags?: string[];
}

export function TeamMemberCard({ name, title, description, image, tags = [] }: TeamMemberProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
        >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8 bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-gray-950 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/5">
                        <span className="material-symbols-outlined text-6xl text-primary/20 italic">person_filled</span>
                    </div>
                )}

                {/* Overlay with diagonal stripes */}
                <div className="absolute inset-0 diagonal-stripes opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
            </div>

            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-3xl font-black text-brand-black dark:text-white leading-none tracking-tighter mb-2 group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                    <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">
                        {title}
                    </p>
                </div>
                <a href="#" className="bg-brand-black dark:bg-white/10 p-2 rounded-lg text-white hover:bg-primary transition-all">
                    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
                {description}
            </p>

            {tags.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-gray-100 dark:border-white/5">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-white/5 text-[9px] font-black uppercase tracking-widest rounded-md border border-gray-100 dark:border-white/5 text-gray-400">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
