import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import CookieBanner from "@/components/CookieBanner";
import AlbumAnnouncementPopup from "@/components/AlbumAnnouncementPopup";
import MusicLabPromoBanner from "@/components/MusicLabPromoBanner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://www.djandykofficial.com";
const SITE_TITLE = "DJ Andy'K | Official Website — Trance, Progressive House & EDM";
const SITE_DESCRIPTION =
  "DJ Andy'K — UK-based Trance, Progressive House & EDM producer. Stream When Later Becomes Never, Human Stories and more on Spotify, Apple Music and SoundCloud.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | DJ Andy'K",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "DJ Andy'K",
    "DJAndyK",
    "Andrej Kneisl",
    "DJ Andy K Slovakia",
    "DJ Andy K UK",
    "DJ Andy K Paraguay",
    "Trance DJ",
    "Progressive House producer",
    "EDM producer",
    "When Later Becomes Never",
    "Human Stories",
    "Deep Connections",
    "Four Elements",
    "djandykofficial.com",
    "Andy'K Group International",
  ],
  authors: [{ name: "DJ Andy'K" }],
  creator: "DJ Andy'K",
  publisher: "ANDY'K GROUP INTERNATIONAL LTD",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "DJ Andy'K",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DJ Andy'K" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const BREADCRUMB_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Press", item: `${SITE_URL}/press` },
    { "@type": "ListItem", position: 3, name: "Music", item: `${SITE_URL}/#music` },
    { "@type": "ListItem", position: 4, name: "Albums", item: `${SITE_URL}/#albums` },
    { "@type": "ListItem", position: 5, name: "Sets", item: `${SITE_URL}/#sets` },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }}
        />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${playfairDisplay.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <CookieBanner />
            <MusicLabPromoBanner />
            {/* AlbumAnnouncementPopup removed — Before I Forget campaign ended */}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
