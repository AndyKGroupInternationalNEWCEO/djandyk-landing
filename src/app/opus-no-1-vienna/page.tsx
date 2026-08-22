import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import OpusNo1ViennaClient from "./OpusNo1ViennaClient";

export const metadata: Metadata = {
  title: "Opus No. 1: Vienna | DJ Andy'K",
  description:
    "Opus No. 1: Vienna — a continuous work in four movements by DJ Andy'K. Fortepiano, orchestra and progressive trance, composed in Vienna.",
  alternates: { canonical: "https://www.djandykofficial.com/opus-no-1-vienna" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/opus-no-1-vienna",
    title: "Opus No. 1: Vienna | DJ Andy'K",
    description:
      "A Continuous Work in Four Movements. Fortepiano · Orchestra · Progressive Trance.",
    images: [
      {
        url: "/releases/opus-no-1-vienna-cover.png",
        width: 1200,
        height: 1200,
        alt: "Opus No. 1: Vienna — DJ Andy'K",
      },
    ],
  },
};

const dir = path.join(process.cwd(), "src/app/opus-no-1-vienna");
const css = fs.readFileSync(path.join(dir, "content.css.txt"), "utf-8");
const body = fs.readFileSync(path.join(dir, "content.body.html"), "utf-8");
const script = fs.readFileSync(path.join(dir, "content.script.js"), "utf-8");

export default function OpusNo1ViennaPage() {
  return <OpusNo1ViennaClient css={css} body={body} script={script} />;
}
