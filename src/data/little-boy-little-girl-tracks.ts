import type { Album } from "@/types/album";

// Lyrics pending — will come from the single booklet.
const BOY_ACCENT = "#7EC8F2";
const GIRL_ACCENT = "#F2A7C8";

export const littleBoyLittleGirlAlbum: Album = {
  slug: "little-boy-little-girl",
  title: "Little Boy & Little Girl",
  accent: "#F2A65A",
  heroCoverSrc: "/releases/little-boy-little-girl-cover.png",
  tracks: [
    {
      n: 1,
      slug: "little-boy-let-the-signal-in",
      title: "Little Boy, Let the Signal In",
      from: "feat. Thymoty Lorrens",
      accent: BOY_ACCENT,
      genre: "Trance",
      releaseDate: "2026-10-03",
      durationSeconds: 343,
      coverUrl: "/releases/little-boy-let-the-signal-in.png",
      audioSrc: "/audio/little-boy-let-the-signal-in.mp3",
      lyrics: [],
    },
    {
      n: 2,
      slug: "little-girl-breathe-endlessly",
      title: "Little Girl, Breathe Endlessly",
      from: "feat. Thymoty Lorrens",
      accent: GIRL_ACCENT,
      genre: "Trance",
      releaseDate: "2026-10-03",
      durationSeconds: 338,
      coverUrl: "/releases/little-girl-breathe-endlessly.png",
      audioSrc: "/audio/little-girl-breathe-endlessly.mp3",
      lyrics: [],
    },
  ],
};
