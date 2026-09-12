import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileCta } from "@/components/mobile-cta";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { AGENCY, SITE_URL } from "@/data/config";
import { LanguageProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/copy";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fly Voyages Algérie — Agence de voyages à Béjaïa",
    template: "%s — Fly Voyages Algérie",
  },
  description:
    "Agence de voyages et de billetterie aérienne à Béjaïa : préparation de voyages, billets d'avion, séjours et circuits. Déposez votre demande, notre équipe vous recontacte par téléphone ou WhatsApp.",
  // Canonical is only emitted once a real domain is configured,
  // so the placeholder origin is never advertised to search engines.
  alternates:
    SITE_URL.includes("example.com") ? undefined : { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: SITE_URL,
    siteName: AGENCY.name,
    title: "Fly Voyages Algérie — Agence de voyages à Béjaïa",
    description:
      "Votre agence de voyages à Béjaïa : voyages, billetterie aérienne, séjours et circuits. Demande en ligne, réponse rapide par téléphone ou WhatsApp.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1600,
        height: 1000,
        alt: "Front de mer de Béjaïa au coucher du soleil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Voyages Algérie — Agence de voyages à Béjaïa",
    description:
      "Votre agence de voyages à Béjaïa : voyages, billetterie, séjours et circuits. WhatsApp 0550 06 06 20.",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#10202f",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await cookies();
  const locale: Locale = store.get("fv-lang")?.value === "ar" ? "ar" : "fr";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream-50"
        >
          {locale === "ar" ? "الانتقال إلى المحتوى الرئيسي" : "Aller au contenu principal"}
        </a>
        <LanguageProvider locale={locale}>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
          <MobileCta />
        </LanguageProvider>
      </body>
    </html>
  );
}
