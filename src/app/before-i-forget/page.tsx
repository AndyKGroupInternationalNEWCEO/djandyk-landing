import type { Metadata } from "next";
import BeforeIForgetClient from "./BeforeIForgetClient";

export const metadata: Metadata = {
  title: "Before I Forget | Trance / Progressive Trance Album | DJ Andy'K",
  description:
    "Before I Forget — an 8-track trance and progressive trance album by DJ Andy'K.",
  alternates: { canonical: "https://www.djandykofficial.com/before-i-forget" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/before-i-forget",
    title: "Before I Forget | Trance / Progressive Trance Album by DJ Andy'K",
    description: "Trance / Progressive Trance.",
    images: [
      {
        url: "/releases/before-i-forget.png",
        width: 1200,
        height: 1200,
        alt: "Before I Forget — Trance / Progressive Trance album by DJ Andy'K",
      },
    ],
  },
};

export default function BeforeIForgetPage() {
  return <BeforeIForgetClient />;
}
