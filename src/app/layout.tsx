import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.htqmexico.com";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteDescription =
  "HT Quality: 24 años de experiencia en la gestión de comercio exterior en México. Importación de líneas de producción, maquinaria industrial y equipos especializados, de origen a entrega en México.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HT Quality | Importación de Maquinaria y Equipos Industriales",
    template: "%s | HT Quality",
  },
  description: siteDescription,
  keywords: [
    "comercio exterior",
    "importación maquinaria industrial",
    "importación CIF",
    "aduanas México",
    "equipos especializados",
    "HT Quality",
    "logística internacional",
    "líneas de producción",
  ],
  authors: [{ name: "HT Quality" }],
  creator: "HT Quality",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "HT Quality",
    title: "HT Quality | Importación de Maquinaria y Equipos Industriales",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "HT Quality | Importación de Maquinaria y Equipos Industriales",
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.jpg", apple: "/icon.jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HT Quality",
  url: SITE_URL,
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
    addressLocality: "México",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contacto@htquality.com.mx",
    contactType: "business",
    availableLanguage: ["Spanish", "English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
