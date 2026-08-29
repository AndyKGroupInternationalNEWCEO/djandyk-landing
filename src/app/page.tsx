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
import AlbumCatalogue from "@/components/AlbumCatalogue";
import LovedBySection from "@/components/LovedBySection";
import IntegrationsSection from "@/components/IntegrationsSection";
import MonthlyTop10Section from "@/components/MonthlyTop10Section";
import DJSetsSection from "@/components/DJSetsSection";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { HeroBackground } from "@/components/BackgroundGrid";
import LatestReleaseBanner from "@/components/LatestReleaseBanner";
import MusicLabSection from "@/components/MusicLabSection";
import MusicLabBanner from "@/components/MusicLabBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { ALBUM_CATALOGUE, type CatalogueAlbum } from "@/lib/albumCatalogue";

function splitGenres(genre?: string): string[] {
  if (!genre) return [];
  return genre
    .split(/[/·]/)
    .map((g) => g.trim())
    .filter(Boolean);
}

function isReleased(album: CatalogueAlbum): boolean {
  if (album.archived) return false;
  if (album.completeBadge || album.availableNow) return true;
  if (album.completionDate) return new Date(album.completionDate) <= new Date();
  return false;
}

// Only released albums get a publish date — an in-development album's
// placeholder completionDate (e.g. the far-future date used to mean
// "in progress") is never real publication data.
function albumYear(album: CatalogueAlbum): string | undefined {
  if (!isReleased(album)) return undefined;
  if (album.completionDate) return album.completionDate.slice(0, 4);
  const match = album.kicker.match(/(\d{4})/);
  return match ? match[1] : undefined;
}

function albumUrl(album: CatalogueAlbum): string | undefined {
  if (!album.href) return undefined;
  return album.href.startsWith("/")
    ? `https://www.djandykofficial.com${album.href}`
    : album.href;
}

// Generated from the same central catalogue used by the homepage and
// Press/EPK — every album appears exactly once, with no separate
// hand-maintained list to fall out of sync.
const musicAlbumEntities = ALBUM_CATALOGUE.map((album) => {
  const entity: Record<string, unknown> = {
    "@type": "MusicAlbum",
    name: album.title,
    byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
  };

  const genres = splitGenres(album.genre);
  if (genres.length) entity.genre = genres;

  const year = albumYear(album);
  if (year) entity.datePublished = year;

  if (album.archived) {
    // Withdrawn release — no active streaming offer, not presented as
    // currently available.
    entity.description =
      "Archived release — withdrawn and no longer actively distributed.";
  } else {
    const url = albumUrl(album);
    if (url) entity.url = url;
  }

  return entity;
});

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
        "https://soundcloud.com/djandyk_2024",
        "https://www.youtube.com/@djandykofficial",
        "https://tidal.com/browse/artist/65848653",
        "https://www.instagram.com/djandykofficial",
        "https://www.tiktok.com/@djandykofficial",
        "https://www.beatport.com/artist/dj-andyk/2441664",
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
    ...musicAlbumEntities,
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

      {/* Streaming Platforms — "Where the music lives" */}
      <ScrollReveal>
        <IntegrationsSection />
      </ScrollReveal>

      {/* Monthly Top 10 — directly below "Where the music lives", above the album catalogue */}
      <ScrollReveal>
        <MonthlyTop10Section />
      </ScrollReveal>

      <TronDivider />

      {/* Album Catalogue — Signature / Concept / Studio / Legacy, each album exactly once */}
      <ScrollReveal>
        <AlbumCatalogue />
      </ScrollReveal>

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

      {/* Discography */}
      <ScrollReveal>
        <PricingSection />
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
