import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sixTranceBalladsAlbum } from "@/data/six-trance-ballads-tracks";
import SixTranceBalladsClient from "../SixTranceBalladsClient";

export function generateStaticParams() {
  return sixTranceBalladsAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = sixTranceBalladsAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | ${sixTranceBalladsAlbum.title} | DJ Andy'K`;
  const description = track.story ?? `${track.title} — from ${sixTranceBalladsAlbum.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${sixTranceBalladsAlbum.slug}/${track.slug}`;

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

// Renders the exact same album page as `/six-trance-ballads` — hero, Cover
// Flow, Track Overview — just with Cover Flow already expanded on this
// track, so a shared link opens straight into the immersive view instead
// of a separate page layout.
export default async function TrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track: slug } = await params;
  const exists = sixTranceBalladsAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <SixTranceBalladsClient initialSlug={slug} />;
}
