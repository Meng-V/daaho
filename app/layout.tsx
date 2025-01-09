import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://daaho.lib.miamioh.edu"),
  title: "DAAHO - Documenting Asian American Histories in Ohio",
  description: "The DAAHO project serves as a central hub for exploring the stories, achievements, and enduring contributions of Asian American citizens and diasporic Asians in Ohio.",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
