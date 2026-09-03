import type { Metadata } from "next";
import DoNotDisturbClient from "./DoNotDisturbClient";

export const metadata: Metadata = {
  title: "Do Not Disturb | Concept Album | DJ Andy'K",
  description:
    "Do Not Disturb — a concept album by DJ Andy'K. One unforgettable night, first drink to last confession, told in groovy house and funky tech house.",
  alternates: { canonical: "https://www.djandykofficial.com/do-not-disturb" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/do-not-disturb",
    title: "Do Not Disturb | Concept Album by DJ Andy'K",
    description:
      "One unforgettable night, first drink to last confession, told in groovy house and funky tech house.",
    images: [
      {
        url: "/releases/do-not-disturb-album-cover.png",
        width: 1200,
        height: 1200,
        alt: "Do Not Disturb — Concept Album by DJ Andy'K",
      },
    ],
  },
};

export default function DoNotDisturbPage() {
  return <DoNotDisturbClient />;
}
