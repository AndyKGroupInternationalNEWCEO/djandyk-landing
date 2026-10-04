import type { Metadata } from "next";
import LittleBoyLittleGirlClient from "./LittleBoyLittleGirlClient";

export const metadata: Metadata = {
  title: "Little Boy & Little Girl | New Single",
  description:
    "Little Boy & Little Girl — a new progressive trance / progressive house single by DJ Andy'K feat. Thymoty Lorrens: Little Boy, Let the Signal In and Little Girl, Breathe Endlessly.",
  alternates: { canonical: "https://www.djandykofficial.com/little-boy-little-girl" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/little-boy-little-girl",
    title: "Little Boy & Little Girl | New Single by DJ Andy'K",
    description: "feat. Thymoty Lorrens — Little Boy, Let the Signal In · Little Girl, Breathe Endlessly.",
    images: [
      {
        url: "/releases/little-boy-little-girl-cover.png",
        width: 1254,
        height: 1254,
        alt: "Little Boy & Little Girl — single by DJ Andy'K feat. Thymoty Lorrens",
      },
    ],
  },
};

export default function LittleBoyLittleGirlPage() {
  return <LittleBoyLittleGirlClient />;
}
