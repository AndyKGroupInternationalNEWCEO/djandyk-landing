import type { Metadata } from "next";
import ZwischenlandungClient from "./ZwischenlandungClient";

export const metadata: Metadata = {
  title: "Zwischenlandung | Deluxe Edition Single | DJ Andy'K",
  description:
    "Zwischenlandung — a German-language trance single by DJ Andy'K feat. Robert Zigller, in four interpretations: Official, Piano, Progressive Trance and Melodic Techno & Afro Beats.",
  alternates: { canonical: "https://www.djandykofficial.com/zwischenlandung" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/zwischenlandung",
    title: "Zwischenlandung | Deluxe Edition Single by DJ Andy'K",
    description: "feat. Robert Zigller — four interpretations of one encounter.",
    images: [
      {
        url: "/releases/zwischenlandung-official.png",
        width: 1200,
        height: 1200,
        alt: "Zwischenlandung — single by DJ Andy'K feat. Robert Zigller",
      },
    ],
  },
};

export default function ZwischenlandungPage() {
  return <ZwischenlandungClient />;
}
