import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { zwischenlandungAlbum } from "@/data/zwischenlandung-tracks";
import ZwischenlandungClient from "../ZwischenlandungClient";

export function generateStaticParams() {
  return zwischenlandungAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = zwischenlandungAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | ${zwischenlandungAlbum.title} | DJ Andy'K`;
  const description = track.story ?? `${track.title} — from ${zwischenlandungAlbum.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${zwischenlandungAlbum.slug}/${track.slug}`;

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
  const exists = zwischenlandungAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <ZwischenlandungClient initialSlug={slug} />;
}
