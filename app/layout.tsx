import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Sakka Mohamed Anis — AI Researcher & Security Engineer",
  description:
    "Portfolio of Sakka Mohamed Anis — Master's researcher at ÉTS Montréal specialising in AI, 5G cybersecurity and deep learning.",
  keywords: ["AI", "Cybersecurity", "5G", "Deep Learning", "Portfolio", "Researcher"],
  authors: [{ name: "Sakka Mohamed Anis" }],
  openGraph: {
    title: "Sakka Mohamed Anis — AI Researcher & Security Engineer",
    description: "Predicting cyber-attacks in 5G networks with deep learning.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
