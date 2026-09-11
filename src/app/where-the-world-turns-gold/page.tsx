import type { Metadata } from "next";
import WhereTheWorldTurnsGoldClient from "./WhereTheWorldTurnsGoldClient";

export const metadata: Metadata = {
  title: "Where the World Turns Gold | Special Release | DJ Andy'K",
  description:
    "Where the World Turns Gold — a special release by DJ Andy'K featuring Margirt “Ritta” Fellner.",
  alternates: { canonical: "https://www.djandykofficial.com/where-the-world-turns-gold" },
  openGraph: {
    type: "music.song",
    url: "https://www.djandykofficial.com/where-the-world-turns-gold",
    title: "Where the World Turns Gold | Special Release by DJ Andy'K",
    description: "ft. Margirt “Ritta” Fellner.",
    images: [
      {
        url: "/releases/where-the-world-turns-gold.png",
        width: 1200,
        height: 1200,
        alt: "Where the World Turns Gold — special release by DJ Andy'K ft. Margirt “Ritta” Fellner",
      },
    ],
  },
};

export default function WhereTheWorldTurnsGoldPage() {
  return <WhereTheWorldTurnsGoldClient />;
}
