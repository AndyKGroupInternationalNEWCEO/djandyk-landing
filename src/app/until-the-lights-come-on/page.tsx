import type { Metadata } from "next";
import UntilTheLightsComeOnClient from "./UntilTheLightsComeOnClient";

export const metadata: Metadata = {
  title: "Until the Lights Come On | DJ Andy'K ft. Livia Benttner",
  description:
    "Until the Lights Come On — a song by DJ Andy'K featuring Livia Benttner.",
  alternates: { canonical: "https://www.djandykofficial.com/until-the-lights-come-on" },
  openGraph: {
    type: "music.song",
    url: "https://www.djandykofficial.com/until-the-lights-come-on",
    title: "Until the Lights Come On | DJ Andy'K ft. Livia Benttner",
    description: "ft. Livia Benttner.",
    images: [
      {
        url: "/releases/until-the-lights-come-on.png",
        width: 1200,
        height: 1200,
        alt: "Until the Lights Come On — DJ Andy'K ft. Livia Benttner",
      },
    ],
  },
};

export default function UntilTheLightsComeOnPage() {
  return <UntilTheLightsComeOnClient />;
}
