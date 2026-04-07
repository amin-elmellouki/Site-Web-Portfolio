import type { Metadata } from "next";
import { Manrope, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-accent",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://aminelmellouki.dev";
const siteDescription =
  "Développeur full stack freelance à Orléans. J'accompagne les équipes, clubs et structures dans la conception d'applications web et mobile claires, fiables et prêtes à être mises en ligne.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#amin-el-mellouki`,
      name: "Amin EL MELLOUKI",
      jobTitle: "Développeur full stack freelance",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orléans",
        addressCountry: "FR",
      },
      email: "mailto:amin.elmellouki1@gmail.com",
      sameAs: [
        "https://github.com/amin-elmellouki",
        "https://www.linkedin.com/in/amin-e-a924012b5/",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "FastAPI",
        "React Native",
        "PostgreSQL",
        "Docker",
      ],
      description: siteDescription,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Amin EL MELLOUKI",
      url: siteUrl,
      inLanguage: "fr-FR",
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#amin-el-mellouki`,
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Amin EL MELLOUKI - Développeur full stack freelance",
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Amin EL MELLOUKI - Développeur full stack freelance",
    description: siteDescription,
    url: siteUrl,
    siteName: "Amin EL MELLOUKI",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amin EL MELLOUKI - Développeur full stack freelance",
    description: siteDescription,
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
      className={`${spaceGrotesk.variable} ${manrope.variable} ${syne.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a href="#main-content" className="skip-link">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
