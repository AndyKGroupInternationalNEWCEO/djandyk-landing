import type { Metadata } from "next";
import WavelengthTracesClient from "./WavelengthTracesClient";

export const metadata: Metadata = {
  title: "Wavelength Traces | Trance Album | DJ Andy'K",
  description:
    "Wavelength Traces — a 13-track trance album by DJ Andy'K. Some connections fade. Their traces stay.",
  alternates: { canonical: "https://www.djandykofficial.com/wavelength-traces" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/wavelength-traces",
    title: "Wavelength Traces | Trance Album by DJ Andy'K",
    description: "Trance.",
    images: [
      {
        url: "/releases/wavelength-traces-cover.png",
        width: 1200,
        height: 1200,
        alt: "Wavelength Traces — trance album by DJ Andy'K",
      },
    ],
  },
};

export default function WavelengthTracesPage() {
  return <WavelengthTracesClient />;
}
