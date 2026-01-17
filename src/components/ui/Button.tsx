"use client";

import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "language" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    children,
    className,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-primary text-white hover:brightness-110 shadow-lg shadow-primary/20",
        secondary: "bg-background-dark text-white hover:bg-gray-800 dark:bg-white dark:text-background-dark dark:hover:bg-gray-100",
        ghost: "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
        language: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold",
        outline: "bg-transparent border-2 border-primary/20 text-brand-black dark:text-white hover:border-primary/50"
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-10 py-5 text-base"
    };

    return (
        <button
            className={clsx(
                "inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-300 active:scale-[0.98] cursor-pointer rounded-xl",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
