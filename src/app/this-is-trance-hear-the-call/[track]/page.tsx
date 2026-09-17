import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { thisIsTranceHearTheCallAlbum } from "@/data/this-is-trance-hear-the-call-tracks";
import ThisIsTranceHearTheCallClient from "../ThisIsTranceHearTheCallClient";

export function generateStaticParams() {
  return thisIsTranceHearTheCallAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = thisIsTranceHearTheCallAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | ${thisIsTranceHearTheCallAlbum.title} | DJ Andy'K`;
  const description = track.story ?? `${track.title} — from ${thisIsTranceHearTheCallAlbum.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${thisIsTranceHearTheCallAlbum.slug}/${track.slug}`;

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
  const exists = thisIsTranceHearTheCallAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <ThisIsTranceHearTheCallClient initialSlug={slug} />;
}
