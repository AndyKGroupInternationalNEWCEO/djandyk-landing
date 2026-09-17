import type { Metadata } from "next";
import SixTranceBalladsClient from "./SixTranceBalladsClient";

export const metadata: Metadata = {
  title: "THE ALBUM — From Me, To... | Six Trance Ballads",
  description:
    "Six trance ballads written as personal letters. THE ALBUM (From Me, To...) by DJ Andy'K. First listen on SoundCloud every Sunday.",
  alternates: { canonical: "https://www.djandykofficial.com/six-trance-ballads" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/six-trance-ballads",
    title: "THE ALBUM — From Me, To... | Six Trance Ballads by DJ Andy'K",
    description:
      "Six trance ballads written as personal letters. New track every Wednesday. Full album 22.7.2026.",
    images: [
      {
        url: "/releases/six-trance-ballads-the-album.png",
        width: 1200,
        height: 1200,
        alt: "I Arrived As Someone Else — Six Trance Ballads by DJ Andy'K",
      },
    ],
  },
};

export default function SixTranceBalladsPage() {
  return <SixTranceBalladsClient />;
}
