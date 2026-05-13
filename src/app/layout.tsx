import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://novises.com"),
  title: {
    default: "Novises İşitme Cihazları | Sakarya Adapazarı",
    template: "%s | Novises İşitme Cihazları",
  },
  description:
    "Sakarya Adapazarı'nda profesyonel işitme cihazı ve işitme testi hizmeti. Novises İşitme Cihazları ile daha iyi duymaya başlayın. Ücretsiz işitme testi için randevu alın.",
  keywords: [
    "Sakarya işitme cihazları",
    "Adapazarı işitme cihazı",
    "işitme testi Sakarya",
    "işitme cihazı fiyatları Sakarya",
    "işitme kaybı çözümü",
    "Novises işitme",
  ],
  authors: [{ name: "Novises İşitme Cihazları" }],
  creator: "Novises İşitme Cihazları",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://novises.com",
    siteName: "Novises İşitme Cihazları",
    title: "Novises İşitme Cihazları | Sakarya Adapazarı",
    description:
      "Sakarya Adapazarı'nda profesyonel işitme cihazı ve ücretsiz işitme testi hizmeti.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Novises İşitme Cihazları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novises İşitme Cihazları | Sakarya",
    description:
      "Sakarya Adapazarı'nda profesyonel işitme cihazı ve işitme testi hizmeti.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://novises.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "Novises İşitme Cihazları",
  description:
    "Sakarya Adapazarı'nda profesyonel işitme cihazı satışı ve işitme testi hizmeti.",
  url: "https://novises.com",
  telephone: "+905302406684",
  email: "info@novises.com",
  image: "https://novises.com/images/logo.svg",
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Güllük, Adnan Menderes Cd Sağlık Sk no:3 iç kapı 108",
    addressLocality: "Adapazarı",
    addressRegion: "Sakarya",
    postalCode: "54100",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7697,
    longitude: 30.3922,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
