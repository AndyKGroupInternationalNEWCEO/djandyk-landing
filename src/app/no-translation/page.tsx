import type { Metadata } from "next";
import NoTranslationClient from "./NoTranslationClient";

export const metadata: Metadata = {
  title: "No Translation | Melodic Progressive Tech House Album | DJ Andy'K",
  description:
    "No Translation — a melodic progressive tech house album by DJ Andy'K. Six languages, one night, nothing needs explaining. New track every Friday.",
  alternates: { canonical: "https://www.djandykofficial.com/no-translation" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/no-translation",
    title: "No Translation | Melodic Progressive Tech House Album by DJ Andy'K",
    description:
      "Six Languages. One Night. Nothing Needs Explaining. New track every Friday. Full album 4.12.2026.",
    images: [
      {
        url: "/releases/no-translation-cover.png",
        width: 1200,
        height: 1200,
        alt: "No Translation — Melodic Progressive Tech House album by DJ Andy'K",
      },
    ],
  },
};

export default function NoTranslationPage() {
  return <NoTranslationClient />;
}
