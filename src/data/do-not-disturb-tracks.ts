// "Do Not Disturb" uses its own door-hanger swipe-stack layout, not the
// shared Cover Flow Track/Album system — the cards are styled after a
// hotel "Do Not Disturb" door tag, so they get a lightweight track shape
// tailored to that instead of reusing src/types/album.ts.

export interface DNDTrack {
  n: number;
  slug: string;
  title: string;
  feat: string;
  tagline: string;
  accent: string;
  durationSeconds: number;
  coverUrl: string;
  audioSrc: string;
  releaseDate: string;
  /** Not yet supplied for any track — the Song Info drawer omits any of
   * these that are undefined rather than inventing a value. */
  story?: string;
  bpm?: number;
  key?: string;
  chords?: string;
  /** Clean lyric stanzas — no [Verse]/[Drop]/etc. tags. Not yet supplied. */
  lyrics?: string[][];
}

export const doNotDisturbAlbum = {
  slug: "do-not-disturb",
  title: "Do Not Disturb",
  subtitle: "A Concept Album",
  genre: "Groovy House / Funky Tech House",
  description:
    "One unforgettable night, first drink to last confession, told in groovy house and funky tech house.",
  accent: "#C9A227",
  heroCoverSrc: "/releases/do-not-disturb-album-cover.png",
  tracks: [
    {
      n: 1,
      slug: "blame-the-dj",
      title: "Blame The DJ",
      feat: "feat. Juliana Ritter",
      tagline: "First drink. The first bad decision.",
      accent: "#D9B84A",
      durationSeconds: 205,
      coverUrl: "/releases/blame-the-dj.png",
      audioSrc: "/audio/blame-the-dj.mp3",
      releaseDate: "2026-07-12",
    },
    {
      n: 2,
      slug: "put-it-on-my-tab",
      title: "Put It On My Tab",
      feat: "feat. Adam Rooth",
      tagline: "Another round. No limits.",
      accent: "#C98A3E",
      durationSeconds: 233,
      coverUrl: "/releases/put-it-on-my-tab.png",
      audioSrc: "/audio/put-it-on-my-tab.mp3",
      releaseDate: "2026-07-19",
    },
    {
      n: 3,
      slug: "no-receipts",
      title: "No Receipts",
      feat: "feat. Adam Rooth",
      tagline: "No proof. No explanation.",
      accent: "#C9A227",
      durationSeconds: 270,
      coverUrl: "/releases/no-receipts.png",
      audioSrc: "/audio/no-receipts.mp3",
      releaseDate: "2026-07-12",
    },
    {
      n: 4,
      slug: "wrong-floor",
      title: "Wrong Floor",
      feat: "feat. Lisa Manfled & Adam Rooth",
      tagline: "Hotel elevator. Wrong decision.",
      accent: "#D6608F",
      durationSeconds: 219,
      coverUrl: "/releases/wrong-floor.png",
      audioSrc: "/audio/wrong-floor.mp3",
      releaseDate: "2026-08-02",
    },
    {
      n: 5,
      slug: "late-check-out",
      title: "Late Check-Out",
      feat: "feat. Lisa Manfled",
      tagline: "Morning after. Reception calls.",
      accent: "#D9A24A",
      durationSeconds: 270,
      coverUrl: "/releases/late-check-out.png",
      audioSrc: "/audio/late-check-out.mp3",
      releaseDate: "2026-08-09",
    },
    {
      n: 6,
      slug: "i-left-my-halo-at-the-bar",
      title: "I Left My Halo At The Bar",
      feat: "feat. Lisa Manfled",
      tagline: "Looking back. No regrets.",
      accent: "#C9A227",
      durationSeconds: 220,
      coverUrl: "/releases/i-left-my-halo-at-the-bar.png",
      audioSrc: "/audio/i-left-my-halo-at-the-bar.mp3",
      releaseDate: "2026-08-16",
    },
    {
      n: 7,
      slug: "too-pretty-to-explain",
      title: "Too Pretty To Explain",
      feat: "feat. Juliana Ritter",
      tagline: "Final confidence. No explanation needed.",
      accent: "#D6608F",
      durationSeconds: 187,
      coverUrl: "/releases/too-pretty-to-explain.png",
      audioSrc: "/audio/too-pretty-to-explain.mp3",
      releaseDate: "2026-08-23",
    },
  ] satisfies DNDTrack[],
};
