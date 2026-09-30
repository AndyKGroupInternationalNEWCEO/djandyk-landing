import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { turnTheAttitudeIntoGratitudeAlbum } from "@/data/turn-the-attitude-into-gratitude-tracks";
import TurnTheAttitudeIntoGratitudeClient from "../TurnTheAttitudeIntoGratitudeClient";

export function generateStaticParams() {
  return turnTheAttitudeIntoGratitudeAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = turnTheAttitudeIntoGratitudeAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | ${turnTheAttitudeIntoGratitudeAlbum.title}`;
  const description = track.story ?? `${track.title} — from ${turnTheAttitudeIntoGratitudeAlbum.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${turnTheAttitudeIntoGratitudeAlbum.slug}/${track.slug}`;

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
  const exists = turnTheAttitudeIntoGratitudeAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <TurnTheAttitudeIntoGratitudeClient initialSlug={slug} />;
}
