import type { MetadataRoute } from "next";
import { beforeIForgetAlbum } from "@/data/before-i-forget-tracks";
import { borrowedSunshineAlbum } from "@/data/borrowed-sunshine-tracks";
import { deepConnectionsAlbum } from "@/data/deep-connections-tracks";
import { euphoriaAlbum } from "@/data/euphoria-tracks";
import { fourElementsAlbum } from "@/data/four-elements-tracks";
import { humanStoriesAlbum } from "@/data/human-stories-tracks";
import { noTranslationAlbum } from "@/data/no-translation-tracks";
import { sixTranceBalladsAlbum } from "@/data/six-trance-ballads-tracks";
import { thisIsTranceHearTheCallAlbum } from "@/data/this-is-trance-hear-the-call-tracks";
import { turnTheAttitudeIntoGratitudeAlbum } from "@/data/turn-the-attitude-into-gratitude-tracks";
import { untilTheLightsComeOnAlbum } from "@/data/until-the-lights-come-on-track";
import { wavelengthTracesAlbum } from "@/data/wavelength-traces-tracks";
import { whenLaterBecomesNeverAlbum } from "@/data/when-later-becomes-never-tracks";
import { whereTheWorldTurnsGoldAlbum } from "@/data/where-the-world-turns-gold-track";
import { zwischenlandungAlbum } from "@/data/zwischenlandung-tracks";

const BASE_URL = "https://www.djandykofficial.com";

type Entry = MetadataRoute.Sitemap[number];

// Only slugs are needed here; some album data files use their own track shape.
type SluggedAlbum = { slug: string; tracks: { slug: string }[] };

// Albums with per-track pages at /{album.slug}/{track.slug}.
// When adding a new album with a [track] route, add it here too.
const ALBUMS_WITH_TRACK_PAGES: SluggedAlbum[] = [
  turnTheAttitudeIntoGratitudeAlbum,
  wavelengthTracesAlbum,
  zwischenlandungAlbum,
  thisIsTranceHearTheCallAlbum,
  noTranslationAlbum,
  sixTranceBalladsAlbum,
  untilTheLightsComeOnAlbum,
  whereTheWorldTurnsGoldAlbum,
  euphoriaAlbum,
  deepConnectionsAlbum,
  fourElementsAlbum,
  borrowedSunshineAlbum,
  beforeIForgetAlbum,
  humanStoriesAlbum,
  whenLaterBecomesNeverAlbum,
];

// Album / project pages without per-track routes.
const STANDALONE_RELEASE_PAGES = [
  "/do-not-disturb",
  "/back-to-eurodance",
  "/opus-no-1-vienna",
  "/this-is-my-choice",
  "/this-is-my-choice/rules",
];

const LEGAL_PAGES = [
  "/privacy-policy",
  "/cookies-policy",
  "/terms-and-conditions",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entry = (
    path: string,
    changeFrequency: Entry["changeFrequency"],
    priority: number,
  ): Entry => ({ url: `${BASE_URL}${path}`, lastModified, changeFrequency, priority });

  return [
    entry("", "weekly", 1),
    entry("/press", "monthly", 0.9),
    ...ALBUMS_WITH_TRACK_PAGES.flatMap((album) => [
      entry(`/${album.slug}`, "weekly", 0.8),
      ...album.tracks.map((track) => entry(`/${album.slug}/${track.slug}`, "monthly", 0.6)),
    ]),
    ...STANDALONE_RELEASE_PAGES.map((path) => entry(path, "monthly", 0.7)),
    entry("/copyright", "yearly", 0.4),
    entry("/company-information", "yearly", 0.4),
    ...LEGAL_PAGES.map((path) => entry(path, "yearly", 0.3)),
  ];
}
