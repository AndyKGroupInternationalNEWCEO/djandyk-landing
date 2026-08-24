import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { euphoriaAlbum } from "@/data/euphoria-tracks";
import TrackDetailClient from "./TrackDetailClient";

export function generateStaticParams() {
  return euphoriaAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = euphoriaAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | ${euphoriaAlbum.title} | DJ Andy'K`;
  const description = track.story ?? `${track.title} — from the album ${euphoriaAlbum.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${euphoriaAlbum.slug}/${track.slug}`;

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

export default async function TrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track: slug } = await params;
  const index = euphoriaAlbum.tracks.findIndex((t) => t.slug === slug);
  if (index === -1) notFound();

  const tracks = euphoriaAlbum.tracks;
  const track = tracks[index];
  const prevTrack = tracks[(index - 1 + tracks.length) % tracks.length];
  const nextTrack = tracks[(index + 1) % tracks.length];

  return <TrackDetailClient album={euphoriaAlbum} track={track} prevTrack={prevTrack} nextTrack={nextTrack} />;
}
