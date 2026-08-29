import type { Metadata } from "next";
import HumanStoriesClient from "./HumanStoriesClient";

export const metadata: Metadata = {
  title: "Human Stories | House / Progressive House Album | DJ Andy'K",
  description:
    "Human Stories — a 13-track house and progressive house album by DJ Andy'K, including four instrumental piano versions.",
  alternates: { canonical: "https://www.djandykofficial.com/human-stories" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/human-stories",
    title: "Human Stories | House / Progressive House Album by DJ Andy'K",
    description: "House / Progressive House.",
    images: [
      {
        url: "/releases/hs-album.png",
        width: 1200,
        height: 1200,
        alt: "Human Stories — House / Progressive House album by DJ Andy'K",
      },
    ],
  },
};

export default function HumanStoriesPage() {
  return <HumanStoriesClient />;
}
