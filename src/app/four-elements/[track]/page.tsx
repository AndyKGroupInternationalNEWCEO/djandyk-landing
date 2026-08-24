import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fourElementsAlbum } from "@/data/four-elements-tracks";
import FourElementsClient from "../FourElementsClient";

export function generateStaticParams() {
  return fourElementsAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = fourElementsAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | ${fourElementsAlbum.title} | DJ Andy'K`;
  const description = track.story ?? `${track.title} — from the album ${fourElementsAlbum.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${fourElementsAlbum.slug}/${track.slug}`;

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

// Renders the exact same album page as `/four-elements` — hero, Cover
// Flow, Track Overview — just with Cover Flow already expanded on this
// track, so a shared link opens straight into the immersive view instead
// of a separate page layout.
export default async function TrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track: slug } = await params;
  const exists = fourElementsAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <FourElementsClient initialSlug={slug} />;
}
