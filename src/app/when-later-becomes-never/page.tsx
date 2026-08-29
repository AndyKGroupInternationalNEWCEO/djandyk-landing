import type { Metadata } from "next";
import WhenLaterBecomesNeverClient from "./WhenLaterBecomesNeverClient";

export const metadata: Metadata = {
  title: "When Later Becomes Never | Progressive House / House Album | DJ Andy'K",
  description:
    "When Later Becomes Never — an 11-track progressive house and house album by DJ Andy'K.",
  alternates: { canonical: "https://www.djandykofficial.com/when-later-becomes-never" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/when-later-becomes-never",
    title: "When Later Becomes Never | Progressive House / House Album by DJ Andy'K",
    description: "11 Tracks. Progressive House / House.",
    images: [
      {
        url: "/releases/wlbn-album.png",
        width: 1200,
        height: 1200,
        alt: "When Later Becomes Never — Progressive House / House album by DJ Andy'K",
      },
    ],
  },
};

export default function WhenLaterBecomesNeverPage() {
  return <WhenLaterBecomesNeverClient />;
}
