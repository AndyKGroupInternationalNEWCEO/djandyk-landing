import type { Metadata } from "next";
import FourElementsClient from "./FourElementsClient";

export const metadata: Metadata = {
  title: "Four Elements | Deep Melodic / Progressive Album | DJ Andy'K",
  description:
    "Four Elements — a 4-track deep melodic and progressive album by DJ Andy'K.",
  alternates: { canonical: "https://www.djandykofficial.com/four-elements" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/four-elements",
    title: "Four Elements | Deep Melodic / Progressive Album by DJ Andy'K",
    description: "4 Tracks. Deep Melodic / Progressive.",
    images: [
      {
        url: "/albums/four-elements.jpg",
        width: 1200,
        height: 1200,
        alt: "Four Elements — Deep Melodic / Progressive album by DJ Andy'K",
      },
    ],
  },
};

export default function FourElementsPage() {
  return <FourElementsClient />;
}
