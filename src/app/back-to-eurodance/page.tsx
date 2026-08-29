import type { Metadata } from "next";
import BackToEurodanceClient from "./BackToEurodanceClient";

export const metadata: Metadata = {
  title: "Back to Eurodance | Authentic 90s Eurodance Album | DJ Andy'K",
  description:
    "Back to Eurodance — an authentic 90s eurodance album by DJ Andy'K. 6 tracks, 6 memories, one return to the dancefloor. New track every Friday.",
  alternates: { canonical: "https://www.djandykofficial.com/back-to-eurodance" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/back-to-eurodance",
    title: "Back to Eurodance | Authentic 90s Eurodance Album by DJ Andy'K",
    description:
      "6 Memories. One Return to the Dancefloor. New track every Friday. Full album 23.10.2026.",
    images: [
      {
        url: "/releases/back-to-eurodance-cover.png",
        width: 1200,
        height: 1200,
        alt: "Back to Eurodance — Authentic 90s Eurodance album by DJ Andy'K",
      },
    ],
  },
};

export default function BackToEurodancePage() {
  return <BackToEurodanceClient />;
}
