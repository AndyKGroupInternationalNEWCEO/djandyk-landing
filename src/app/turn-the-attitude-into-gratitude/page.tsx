import type { Metadata } from "next";
import TurnTheAttitudeIntoGratitudeClient from "./TurnTheAttitudeIntoGratitudeClient";

export const metadata: Metadata = {
  title: "Turn the Attitude Into Gratitude | New Single",
  description:
    "Turn the Attitude Into Gratitude — a new single by DJ Andy'K feat. Lia Bonson, in three versions: Original Mix, Retro Rock Crossover Mix and Melodic Club Mix.",
  alternates: { canonical: "https://www.djandykofficial.com/turn-the-attitude-into-gratitude" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/turn-the-attitude-into-gratitude",
    title: "Turn the Attitude Into Gratitude | New Single by DJ Andy'K",
    description: "feat. Lia Bonson — some mornings start with gratitude. This one doesn't.",
    images: [
      {
        url: "/releases/turn-the-attitude-into-gratitude-cover.jpg",
        width: 1254,
        height: 1254,
        alt: "Turn the Attitude Into Gratitude — single by DJ Andy'K feat. Lia Bonson",
      },
    ],
  },
};

export default function TurnTheAttitudeIntoGratitudePage() {
  return <TurnTheAttitudeIntoGratitudeClient />;
}
