import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Anis Sakka — ICT Engineer | AI & Cybersecurity",
  description:
    "Portfolio of Anis Sakka — ICT engineer specializing in AI and cybersecurity for 5G/6G networks. M.Sc.A. in IT Engineering (ÉTS Montréal).",
  keywords: ["AI", "Cybersecurity", "5G", "O-RAN", "Federated Learning", "Deep Learning", "Portfolio", "Researcher"],
  authors: [{ name: "Anis Sakka" }],
  openGraph: {
    title: "Anis Sakka — ICT Engineer | AI & Cybersecurity",
    description: "AI-driven security for 5G/6G networks: predicting cyberattack duration for intelligent mitigation.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }} suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
