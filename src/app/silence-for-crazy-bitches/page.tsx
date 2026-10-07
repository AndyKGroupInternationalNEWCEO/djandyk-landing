import type { Metadata } from "next";
import SilenceForCrazyBitchesClient from "./SilenceForCrazyBitchesClient";

export const metadata: Metadata = {
  title: "Silence for Crazy Bitches | New Single",
  description:
    "Silence for Crazy Bitches — a new single by DJ Andy'K feat. Max Liem, in three versions: Original Tribal Version, Trance Version and Techno Version, plus a Special Piano Version bonus track.",
  alternates: { canonical: "https://www.djandykofficial.com/silence-for-crazy-bitches" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/silence-for-crazy-bitches",
    title: "Silence for Crazy Bitches | New Single by DJ Andy'K",
    description: "feat. Max Liem — one song, three versions, one clear message. Less drama. More drums.",
    images: [
      {
        url: "/releases/silence-for-crazy-bitches-cover.jpg",
        width: 1254,
        height: 1254,
        alt: "Silence for Crazy Bitches — single by DJ Andy'K feat. Max Liem",
      },
    ],
  },
};

export default function SilenceForCrazyBitchesPage() {
  return <SilenceForCrazyBitchesClient />;
}
