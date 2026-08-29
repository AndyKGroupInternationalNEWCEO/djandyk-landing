export interface Track {
  n: number;
  slug: string;
  title: string;
  from: string;
  story?: string;
  accent: string;
  key?: string;
  bpm?: number;
  chords?: string;
  durationSeconds?: number;
  coverUrl: string;
  videoUrl?: string | null;
  audioSrc?: string | null;
  genre?: string;
  subgenre?: string;
  releaseDate?: string;
  vocal?: string;
  instruments?: string[];
  mood?: string;
  /** Official YouTube embed (e.g. a piano version music video) — shown as a video player in Song Info alongside the audio player, when present. */
  youtubeUrl?: string;
  /** Stock footage attribution shown beneath the YouTube embed, when present. */
  videoCredit?: string;
  lyrics: string[][];
}

export interface Album {
  slug: string;
  title: string;
  accent: string;
  heroCoverSrc: string;
  tracks: Track[];
}
