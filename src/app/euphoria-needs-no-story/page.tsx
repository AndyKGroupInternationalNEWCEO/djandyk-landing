import type { Metadata } from "next";
import EuphoriaNeedsNoStoryClient from "./EuphoriaNeedsNoStoryClient";

export const metadata: Metadata = {
  title: "Euphoria Needs No Story | Trance Album | DJ Andy'K",
  description:
    "Euphoria Needs No Story — a 10-track trance album by DJ Andy'K. Ten tracks, four voices, one continuous trance journey from rebirth to pure euphoria.",
  alternates: { canonical: "https://www.djandykofficial.com/euphoria-needs-no-story" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/euphoria-needs-no-story",
    title: "Euphoria Needs No Story | Trance Album by DJ Andy'K",
    description:
      "Ten tracks. Four voices. One continuous trance journey. Euphoria Needs No Story moves through rebirth, memory, silence, distance and temporary immortality before arriving at pure euphoria.",
    images: [
      {
        url: "/releases/euphoria-needs-no-story-cover.png",
        width: 1200,
        height: 1200,
        alt: "Euphoria Needs No Story — Trance album by DJ Andy'K",
      },
    ],
  },
};

export default function EuphoriaNeedsNoStoryPage() {
  return <EuphoriaNeedsNoStoryClient />;
}
