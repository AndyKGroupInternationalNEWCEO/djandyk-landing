import type { Metadata } from "next";
import BorrowedSunshineClient from "./BorrowedSunshineClient";

export const metadata: Metadata = {
  title: "Borrowed Sunshine | Trance / Progressive Trance Album | DJ Andy'K",
  description:
    "Borrowed Sunshine — a trance and progressive trance album by DJ Andy'K. 10 tracks, 10 stories, 10 moments you'll never forget. New track every Friday.",
  alternates: { canonical: "https://www.djandykofficial.com/borrowed-sunshine" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/borrowed-sunshine",
    title: "Borrowed Sunshine | Trance / Progressive Trance Album by DJ Andy'K",
    description:
      "10 Tracks. 10 Stories. 10 Moments You'll Never Forget. New track every Friday. Full album 2.10.2026.",
    images: [
      {
        url: "/releases/borrowed-sunshine-cover.png",
        width: 1200,
        height: 1200,
        alt: "Borrowed Sunshine — Trance / Progressive Trance album by DJ Andy'K",
      },
    ],
  },
};

export default function BorrowedSunshinePage() {
  return <BorrowedSunshineClient />;
}
