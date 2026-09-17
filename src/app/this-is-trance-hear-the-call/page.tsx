import type { Metadata } from "next";
import ThisIsTranceHearTheCallClient from "./ThisIsTranceHearTheCallClient";

export const metadata: Metadata = {
  title: "This Is Trance, Hear the Call | New Single",
  description:
    "This Is Trance, Hear the Call — a new single by DJ Andy'K feat. Aria Noir, in three interpretations: Official Trance, Live Rehearsal Room and Techno Meets Trance.",
  alternates: { canonical: "https://www.djandykofficial.com/this-is-trance-hear-the-call" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/this-is-trance-hear-the-call",
    title: "This Is Trance, Hear the Call | New Single by DJ Andy'K",
    description: "feat. Aria Noir — one rehearsal take that refused to stay private.",
    images: [
      {
        url: "/releases/this-is-trance-hear-the-call-cover.png",
        width: 1200,
        height: 1200,
        alt: "This Is Trance, Hear the Call — single by DJ Andy'K feat. Aria Noir",
      },
    ],
  },
};

export default function ThisIsTranceHearTheCallPage() {
  return <ThisIsTranceHearTheCallClient />;
}
