import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { littleBoyLittleGirlAlbum } from "@/data/little-boy-little-girl-tracks";
import LittleBoyLittleGirlClient from "../LittleBoyLittleGirlClient";

export function generateStaticParams() {
  return littleBoyLittleGirlAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = littleBoyLittleGirlAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | ${littleBoyLittleGirlAlbum.title}`;
  const description = track.story ?? `${track.title} — from ${littleBoyLittleGirlAlbum.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${littleBoyLittleGirlAlbum.slug}/${track.slug}`;

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
  const exists = littleBoyLittleGirlAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <LittleBoyLittleGirlClient initialSlug={slug} />;
}
