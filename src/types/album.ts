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
  lyrics: string[][];
}

export interface Album {
  slug: string;
  title: string;
  accent: string;
  heroCoverSrc: string;
  tracks: Track[];
}
