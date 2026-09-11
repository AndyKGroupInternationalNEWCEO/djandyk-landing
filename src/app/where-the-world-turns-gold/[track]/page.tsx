import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { whereTheWorldTurnsGoldAlbum } from "@/data/where-the-world-turns-gold-track";
import WhereTheWorldTurnsGoldClient from "../WhereTheWorldTurnsGoldClient";

export function generateStaticParams() {
  return whereTheWorldTurnsGoldAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = whereTheWorldTurnsGoldAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | DJ Andy'K`;
  const description = track.story ?? `${track.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${whereTheWorldTurnsGoldAlbum.slug}/${track.slug}`;

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
  const exists = whereTheWorldTurnsGoldAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <WhereTheWorldTurnsGoldClient initialSlug={slug} />;
}
