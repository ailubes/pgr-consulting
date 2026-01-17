"use client";

import { clsx } from "clsx";

interface LogoProps {
    className?: string;
    imageClassName?: string;
}

export function Logo({ className, imageClassName }: LogoProps) {
    return (
        <div className={clsx("flex items-center gap-3 group", className)}>
            <img
                src="/images/logo.png"
                alt="PGR Consulting Group"
                className={clsx(
                    "w-auto object-contain transition-all duration-500 dark:brightness-0 dark:invert",
                    imageClassName || "h-10 md:h-12 group-hover:scale-110"
                )}
            />
        </div>
    );
}
