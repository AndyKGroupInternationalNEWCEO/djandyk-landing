import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { silenceForCrazyBitchesAlbum } from "@/data/silence-for-crazy-bitches-tracks";
import SilenceForCrazyBitchesClient from "../SilenceForCrazyBitchesClient";

export function generateStaticParams() {
  return silenceForCrazyBitchesAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = silenceForCrazyBitchesAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | ${silenceForCrazyBitchesAlbum.title}`;
  const description = track.story ?? `${track.title} — from ${silenceForCrazyBitchesAlbum.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${silenceForCrazyBitchesAlbum.slug}/${track.slug}`;

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
  const exists = silenceForCrazyBitchesAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <SilenceForCrazyBitchesClient initialSlug={slug} />;
}
