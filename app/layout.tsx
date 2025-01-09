import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import clsx from "clsx";

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://daaho.lib.miamioh.edu"),
  title: "DAAHO - Documenting Asian American Histories in Ohio",
  description: "The DAAHO project serves as a central hub for exploring the stories, achievements, and enduring contributions of Asian American citizens and diasporic Asians in Ohio.",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
