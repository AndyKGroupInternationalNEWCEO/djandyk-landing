import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { wavelengthTracesAlbum } from "@/data/wavelength-traces-tracks";
import WavelengthTracesClient from "../WavelengthTracesClient";

export function generateStaticParams() {
  return wavelengthTracesAlbum.tracks.map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: slug } = await params;
  const track = wavelengthTracesAlbum.tracks.find((t) => t.slug === slug);
  if (!track) return {};

  const title = `${track.title} | ${wavelengthTracesAlbum.title} | DJ Andy'K`;
  const description = track.story ?? `${track.title} — from the album ${wavelengthTracesAlbum.title} by DJ Andy'K.`;
  const url = `https://www.djandykofficial.com/${wavelengthTracesAlbum.slug}/${track.slug}`;

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
  const exists = wavelengthTracesAlbum.tracks.some((t) => t.slug === slug);
  if (!exists) notFound();

  return <WavelengthTracesClient initialSlug={slug} />;
}
