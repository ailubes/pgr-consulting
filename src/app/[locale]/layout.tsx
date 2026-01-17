import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "PGR Consulting Group",
  description: "Political Consulting & Public Opinion Research",
};

import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block" />
      </head>
      <body className={`${manrope.variable} font-display antialiased bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100`}>
        <NextIntlClientProvider messages={messages}>
          <TopNav />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
