import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { untilTheLightsComeOnAlbum } from "@/data/until-the-lights-come-on-track";
import UntilTheLightsComeOnClient from "../UntilTheLightsComeOnClient";

export function generateStaticParams() {
  return untilTheLightsComeOnAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = untilTheLightsComeOnAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | DJ Andy'K`;
  const description = track.story ?? `${track.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${untilTheLightsComeOnAlbum.slug}/${track.slug}`;

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
  const exists = untilTheLightsComeOnAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <UntilTheLightsComeOnClient initialSlug={slug} />;
}
