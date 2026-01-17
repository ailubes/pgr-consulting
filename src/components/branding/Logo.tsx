"use client";

import { clsx } from "clsx";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <div className={clsx("flex items-center gap-3 group", className)}>
            <img
                src="/images/logo.png"
                alt="PGR Consulting Group"
                className="h-10 md:h-12 w-auto object-contain transition-all group-hover:scale-105 duration-500 dark:brightness-0 dark:invert"
            />
        </div>
    );
}
