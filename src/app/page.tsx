import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJ Andy'K | Official Website — Trance, Progressive House & EDM",
  description:
    "DJ Andy'K — UK-based Trance, Progressive House & EDM producer. Stream When Later Becomes Never, Human Stories and more on Spotify, Apple Music and SoundCloud.",
  alternates: { canonical: "https://www.djandykofficial.com" },
  openGraph: {
    type: "website",
    url: "https://www.djandykofficial.com",
    title: "DJ Andy'K | Trance, Progressive House & EDM",
    description:
      "DJ Andy'K — UK-based Trance, Progressive House & EDM producer. Stream When Later Becomes Never, Human Stories and more on Spotify, Apple Music and SoundCloud.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DJ Andy'K" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Andy'K | Trance, Progressive House & EDM",
    description: "UK-based music producer — Trance, Progressive House and EDM.",
    images: ["/og-image.jpg"],
  },
};

import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TronDivider from "@/components/TronDivider";
import FaqSection from "@/components/FaqSection";
import RoadmapSection from "@/components/RoadmapSection";
import TestimonialPair from "@/components/TestimonialPair";
import PricingSection from "@/components/PricingSection";
import FeaturedAlbums from "@/components/FeaturedAlbums";
import LovedBySection from "@/components/LovedBySection";
import IntegrationsSection from "@/components/IntegrationsSection";
import DJSetsSection from "@/components/DJSetsSection";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FlagshipSystems from "@/components/FlagshipSystems";
import { HeroBackground } from "@/components/BackgroundGrid";
import LatestReleaseBanner from "@/components/LatestReleaseBanner";
import SixTranceBalladsPromo from "@/components/SixTranceBalladsPromo";
import BorrowedSunshinePromo from "@/components/BorrowedSunshinePromo";
import BackToEurodancePromo from "@/components/BackToEurodancePromo";
import NoTranslationPromo from "@/components/NoTranslationPromo";
import MusicLabSection from "@/components/MusicLabSection";
import MusicLabBanner from "@/components/MusicLabBanner";
import BeatportBanner from "@/components/BeatportBanner";
import ScrollReveal from "@/components/ScrollReveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      "@id": "https://djandykofficial.com/#artist",
      name: "DJ Andy'K",
      url: "https://djandykofficial.com",
      description:
        "UK-based music producer creating Trance, Progressive House, and EDM that blend emotion, energy, and storytelling.",
      genre: ["Trance", "Progressive House", "EDM"],
      foundingLocation: {
        "@type": "Place",
        name: "United Kingdom",
      },
      email: "ceo@andykgroup.com",
      member: {
        "@type": "Person",
        name: "Andrej Kneisl",
        alternateName: "DJ Andy'K",
      },
      recordLabel: {
        "@type": "Organization",
        name: "ANDY'K GROUP INTERNATIONAL LTD",
        url: "https://djandykofficial.com",
      },
      sameAs: [
        "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
        "https://music.apple.com/gb/artist/dj-andyk/1835064975",
        "https://soundcloud.com/djandykofficial",
        "https://www.youtube.com/@djandykofficial",
        "https://tidal.com/browse/artist/65848653",
        "https://www.instagram.com/djandykofficial",
        "https://www.tiktok.com/@djandykofficial",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://djandykofficial.com/#website",
      url: "https://djandykofficial.com",
      name: "DJ Andy'K",
      publisher: { "@id": "https://djandykofficial.com/#artist" },
    },
    {
      "@type": "WebPage",
      "@id": "https://djandykofficial.com/#webpage",
      url: "https://djandykofficial.com",
      name: "DJ Andy'K — Official Website | Trance, Progressive House & EDM",
      isPartOf: { "@id": "https://djandykofficial.com/#website" },
      about: { "@id": "https://djandykofficial.com/#artist" },
      description:
        "Official website of DJ Andy'K. Producer of Trance, Progressive House, and EDM. Based in the UK, sharing music worldwide.",
    },
    {
      "@type": "MusicAlbum",
      name: "When Later Becomes Never",
      byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
      datePublished: "2026",
      genre: ["Progressive House", "Trance"],
      url: "https://open.spotify.com/album/1ezdr7EOZWuLBiw7Rpqis6",
    },
    {
      "@type": "MusicAlbum",
      name: "Human Stories",
      byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
      datePublished: "2026",
      genre: ["House", "Progressive House"],
      url: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    },
    {
      "@type": "MusicAlbum",
      name: "Deep Connections",
      byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
      datePublished: "2026",
      genre: ["House", "Progressive House"],
      url: "https://open.spotify.com/album/39Zb0euYMqdqg658wqKVGU",
    },
    {
      "@type": "MusicAlbum",
      name: "Music Is Your Passion",
      byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
      datePublished: "2026",
      genre: ["Trance"],
      url: "https://open.spotify.com/album/2en5D8nLMSTpRE6fhS1BJY",
    },
    {
      "@type": "MusicAlbum",
      name: "Four Elements",
      byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
      datePublished: "2026",
      genre: ["EDM"],
      url: "https://open.spotify.com/album/18OaI45bkpYwJtzL59BoUw",
    },
  ],
};

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-[60px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBanner />
      <Navbar />
      <LatestReleaseBanner />

      <ScrollReveal>
        <div className="relative overflow-clip">
          <HeroBackground />
          <Hero />
        </div>
      </ScrollReveal>

      <TronDivider />

      {/* Sound Philosophy */}
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>

      <BeatportBanner />

      {/* Featured Releases */}
      <ScrollReveal>
        <FeaturedAlbums />
      </ScrollReveal>

      <SixTranceBalladsPromo />

      <BorrowedSunshinePromo />

      <BackToEurodancePromo />

      <NoTranslationPromo />

      <TronDivider />

      {/* About */}
      <ScrollReveal>
        <LovedBySection />
      </ScrollReveal>

      <TronDivider />

      {/* Artist Spotlight */}
      <ScrollReveal>
        <section className="relative pt-12 pb-14 px-8 max-w-[1200px] mx-auto">
          <TestimonialPair />
        </section>
      </ScrollReveal>

      <TronDivider />

      {/* Streaming Platforms */}
      <ScrollReveal>
        <IntegrationsSection />
      </ScrollReveal>

      <TronDivider />

      {/* Discography */}
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>

      <TronDivider />

      {/* Flagship Albums */}
      <ScrollReveal>
        <FlagshipSystems />
      </ScrollReveal>

      <TronDivider />

      {/* Album Journey */}
      <ScrollReveal>
        <RoadmapSection />
      </ScrollReveal>

      <TronDivider />

      {/* DJ Sets */}
      <ScrollReveal>
        <DJSetsSection />
      </ScrollReveal>

      <TronDivider />

      <ScrollReveal>
        <ContactForm />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>

      {/* Music Lab Live Banner — directly above pricing cards */}
      <MusicLabBanner />

      {/* Andy'K Music Lab */}
      <ScrollReveal>
        <MusicLabSection />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
