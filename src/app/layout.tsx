import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://aminelmellouki.dev";

export const metadata: Metadata = {
  title: "Amin EL MELLOUKI - Développeur Full Stack",
  description:
    "Portfolio d'Amin EL MELLOUKI, développeur full stack spécialisé en applications web et mobile avec React, Next.js, FastAPI et React Native.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Amin EL MELLOUKI - Développeur Full Stack",
    description:
      "Développeur full stack · Applications web et mobile · React · Next.js · FastAPI · React Native",
    url: siteUrl,
    siteName: "Amin EL MELLOUKI",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amin EL MELLOUKI - Développeur Full Stack",
    description:
      "Applications web et mobile avec React, Next.js, FastAPI et React Native",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${notoSerif.variable} ${manrope.variable} antialiased`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
