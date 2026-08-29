import type { Metadata } from "next";
import DeepConnectionsClient from "./DeepConnectionsClient";

export const metadata: Metadata = {
  title: "Deep Connections | House / Progressive House Album | DJ Andy'K",
  description:
    "Deep Connections — a 7-track house and progressive house album by DJ Andy'K.",
  alternates: { canonical: "https://www.djandykofficial.com/deep-connections" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/deep-connections",
    title: "Deep Connections | House / Progressive House Album by DJ Andy'K",
    description: "House / Progressive House.",
    images: [
      {
        url: "/albums/deep-connections.jpg",
        width: 1200,
        height: 1200,
        alt: "Deep Connections — House / Progressive House album by DJ Andy'K",
      },
    ],
  },
};

export default function DeepConnectionsPage() {
  return <DeepConnectionsClient />;
}
