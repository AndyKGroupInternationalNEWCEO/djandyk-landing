import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { borrowedSunshineAlbum } from "@/data/borrowed-sunshine-tracks";
import BorrowedSunshineClient from "../BorrowedSunshineClient";

export function generateStaticParams() {
  return borrowedSunshineAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = borrowedSunshineAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | ${borrowedSunshineAlbum.title} | DJ Andy'K`;
  const description = track.story ?? `${track.title} — from the album ${borrowedSunshineAlbum.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${borrowedSunshineAlbum.slug}/${track.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "music.song",
      url,
      title,
      description,
      images: [{ url: track.coverUrl, width: 1200, height: 1200, alt: track.title }],
    },
  };
}

// Renders the exact same album page as `/borrowed-sunshine` — hero, Cover
// Flow, Track Overview — just with Cover Flow already expanded on this
// track, so a shared link opens straight into the immersive view instead
// of a separate page layout.
export default async function TrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track: slug } = await params;
  const exists = borrowedSunshineAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <BorrowedSunshineClient initialSlug={slug} />;
}
