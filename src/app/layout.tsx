import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://denia-capital.com";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const siteDescription =
  "Buscamos seguir el legado de una gran empresa en México. Inversión privada, adquisición y operación de empresas consolidadas con alto potencial.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Denia Capital Partners | Inversión Privada en México",
    template: "%s | Denia Capital Partners",
  },
  description: siteDescription,
  keywords: [
    "inversión privada",
    "México",
    "adquisición de empresas",
    "search fund",
    "private equity",
    "Denia Capital",
    "transición empresarial",
  ],
  authors: [{ name: "Denia Capital Partners" }],
  creator: "Denia Capital Partners",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Denia Capital Partners",
    title: "Denia Capital Partners | Inversión Privada en México",
    description: siteDescription,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Denia Capital Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denia Capital Partners | Inversión Privada en México",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Denia Capital Partners",
  url: SITE_URL,
  logo: `${SITE_URL}/images/Screenshot_2026-02-21_at_14.37.13-removebg-preview.png`,
  description:
    "Vehículo de inversión privada en México. Buscamos adquirir una única compañía, tomar una participación mayoritaria y dedicarle tiempo completo para hacerla crecer.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
    addressLocality: "México",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "pedro.garza@denia-capital.com",
    contactType: "business",
    availableLanguage: ["Spanish", "English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
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
