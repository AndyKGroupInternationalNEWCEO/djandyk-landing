"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COVER = "/releases/no-translation-cover.png";

const TRACKS = [
  {
    n: 1,
    title: "Don't Look Away (Bana Öyle Bakma)",
    from: "feat. Emir Cem Karahan",
    story: "Some looks ask questions. Others already know the answer.",
    releaseDate: "2026-10-30",
    date: "30.10.2026",
    accent: "#E84C3C",
    coverUrl: "/releases/dont-look-away.png",
    audioSrc: "/audio/dont-look-away.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 2,
    title: "No Explanation (Bala Kalam)",
    from: "feat. Rania Al-Masri",
    story: "Some truths arrive without language. Some disappear before they can be explained.",
    releaseDate: "2026-11-06",
    date: "6.11.2026",
    accent: "#F0A020",
    coverUrl: "/releases/no-explanation.png",
    audioSrc: "/audio/no-explanation.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 3,
    title: "Read My Face (Pa Fjalë)",
    from: "feat. Arta Gashi",
    story: "The face speaks before the voice is ready. Before a confession becomes a sentence, it appears in the eyes, the breath and the smallest movement of the face.",
    releaseDate: "2026-11-13",
    date: "13.11.2026",
    accent: "#4A90D9",
    coverUrl: "/releases/read-my-face.png",
    audioSrc: "/audio/read-my-face.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 4,
    title: "Read It in My Eyes (Pročitaj Mi u Očima)",
    from: "feat. Luka Vuković",
    story: "No confession. No disguise. The truth was visible all along.",
    releaseDate: "2026-11-20",
    date: "20.11.2026",
    accent: "#D9432E",
    coverUrl: "/releases/read-it-in-my-eyes.png",
    audioSrc: "/audio/read-it-in-my-eyes.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 5,
    title: "Before Dawn (Преди Зори)",
    from: "feat. Mira Velinova",
    story: "The night doesn't end quietly — it builds until the light breaks through. Some nights don't fade — they rise, rhythm by rhythm, toward the first light.",
    releaseDate: "2026-11-27",
    date: "27.11.2026",
    accent: "#40E0C0",
    coverUrl: "/releases/before-dawn.png",
    audioSrc: "/audio/before-dawn.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 6,
    title: "Under Your Skin (Sub Pielea Ta)",
    from: "feat. Andreea Dumitrescu",
    story: "You can change the story. You can erase every trace. But some people never completely leave.",
    releaseDate: "2026-12-04",
    date: "4.12.2026",
    accent: "#E8B020",
    coverUrl: "/releases/under-your-skin.png",
    audioSrc: "/audio/under-your-skin.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
];

type Track = (typeof TRACKS)[number];

const ACCENT = "#E84C3C";

function TrackCard({ track }: { track: Track }) {
  const [lyricsOpen, setLyricsOpen] = useState(false);
  const isOut = new Date(track.releaseDate) <= new Date();

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `2px solid ${track.accent}`,
      }}
    >
      {/* Cover — full width square */}
      <div className="aspect-square w-full relative overflow-hidden">
        <img
          src={track.coverUrl}
          alt={track.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end p-3">
          <span
            className="text-[9px] font-mono uppercase tracking-[0.3em] px-2.5 py-1 rounded-full border"
            style={{
              color: isOut ? track.accent : "rgba(255,255,255,0.4)",
              borderColor: isOut ? `${track.accent}66` : "rgba(255,255,255,0.15)",
              background: "rgba(0,0,0,0.6)",
            }}
          >
            {isOut ? "Out Now" : track.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Number + feature credit line */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold" style={{ color: track.accent }}>
            {String(track.n).padStart(2, "0")}
          </span>
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.12)" }}>/</span>
          <span className="text-xs font-mono uppercase tracking-widest min-w-0 truncate" style={{ color: "rgba(255,255,255,0.3)" }}>
            {track.from}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold tracking-tight mb-1 leading-snug font-sans"
          style={{ color: isOut ? "#f0f6fc" : "rgba(255,255,255,0.55)" }}
        >
          {track.title}
        </h3>

        {/* Release date */}
        <p className="text-[11px] font-mono uppercase tracking-widest mb-2" style={{ color: isOut ? track.accent : "rgba(255,255,255,0.25)" }}>
          {isOut ? "Released" : `Release · ${track.date}`}
        </p>

        {/* Story — 2-line pull-quote */}
        <p
          className="text-sm leading-relaxed mb-3 font-serif italic"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          {track.story}
        </p>

        {/* Audio player */}
        <div className="mb-3">
          <audio
            controls
            preload="none"
            className="w-full"
            style={{
              accentColor: track.accent,
              colorScheme: "dark",
              borderRadius: "6px",
            }}
          >
            <source src={track.audioSrc} type="audio/mpeg" />
          </audio>
        </div>

        {/* Lyrics toggle */}
        <button
          onClick={() => setLyricsOpen((o) => !o)}
          className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest mb-3 py-1.5 transition-opacity hover:opacity-70 w-fit"
          style={{ color: track.accent }}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-3 h-3 transition-transform duration-200"
            style={{ transform: lyricsOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            <path d="M6 4l4 4-4 4" />
          </svg>
          {lyricsOpen ? "Hide lyrics" : "Read lyrics"}
        </button>

        {/* Lyrics block — stanza format */}
        {lyricsOpen && (
          <div
            className="rounded-xl p-4 mb-3"
            style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {track.lyrics.length > 0 ? (
              track.lyrics.map((stanza, si) => (
                <div key={si} style={{ marginBottom: si < track.lyrics.length - 1 ? "1rem" : 0 }}>
                  {stanza.map((line, li) => (
                    <p
                      key={li}
                      className="text-sm leading-relaxed font-serif"
                      style={{ color: "rgba(255,255,255,0.62)" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-sm leading-relaxed font-serif italic" style={{ color: "rgba(255,255,255,0.35)" }}>
                Lyrics coming soon.
              </p>
            )}
          </div>
        )}

        {/* Streaming links */}
        <div className="flex gap-2 flex-wrap">
          {track.soundcloudUrl ? (
            <a
              href={track.soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-opacity hover:opacity-70"
              style={{ color: "#ff5500", borderColor: "rgba(255,85,0,0.35)" }}
            >
              SoundCloud
            </a>
          ) : (
            <span
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
              style={{ color: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              SoundCloud — soon
            </span>
          )}
          {track.spotifyUrl ? (
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-opacity hover:opacity-70"
              style={{ color: "#1db954", borderColor: "rgba(29,185,84,0.35)" }}
            >
              Spotify
            </a>
          ) : (
            <span
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
              style={{ color: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              Streaming — soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NoTranslationClient() {
  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero */}
        <section className="px-6 pt-20 pb-12 max-w-[680px] mx-auto text-center">
          <span
            className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-6 px-3 py-1 rounded-full border"
            style={{ color: ACCENT, borderColor: `${ACCENT}33`, background: `${ACCENT}0d` }}
          >
            Album · Melodic Progressive Tech House · 2026
          </span>

          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-3 font-sans"
            style={{ color: "#f0f6fc" }}
          >
            NO TRANSLATION
          </h1>

          <p
            className="text-lg font-light mb-4 font-mono uppercase tracking-[0.2em]"
            style={{ color: ACCENT }}
          >
            Six Languages. One Night. Nothing Needs Explaining.
          </p>

          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.28)" }}>
            Words change. The night does not.
            <br />
            Full album: 4.12.2026
          </p>
        </section>

        {/* Track list — 2-col on desktop */}
        <section className="px-6 pb-12 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRACKS.map((track) => (
              <TrackCard key={track.n} track={track} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer in white wrapper so site CSS vars render correctly */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
