"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAlbumStatus } from "@/lib/albumStatus";

const COVER = "/releases/back-to-eurodance-cover.png";

const TRACKS = [
  {
    n: 1,
    title: "Stay (feat. Eva & Mark Witman)",
    from: "feat. Eva & Mark Witman",
    story: "The night had almost won, until the piano found us first. We stayed because leaving felt like the wrong kind of ending.",
    releaseDate: "2026-09-11",
    date: "11.9.2026",
    accent: "#C060D0",
    coverUrl: "/releases/stay.png",
    audioSrc: "/audio/stay.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 2,
    title: "Fire Inside (feat. Ritta & J-Jack)",
    from: "feat. Ritta & J-Jack",
    story: "Something older than the music was moving under our feet. We didn't call it out — it called itself.",
    releaseDate: "2026-09-18",
    date: "18.9.2026",
    accent: "#D040A0",
    coverUrl: "/releases/fire-inside.png",
    audioSrc: "/audio/fire-inside.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 3,
    title: "Back To You (feat. Jully Calleb & Spencer Marks)",
    from: "feat. Jully Calleb & Spencer Marks",
    story: "Every street we tried led back to the same door. Some hearts just aren't built for other directions.",
    releaseDate: "2026-09-25",
    date: "25.9.2026",
    accent: "#9060C0",
    coverUrl: "/releases/back-to-you.png",
    audioSrc: "/audio/back-to-you.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 4,
    title: "No Control (feat. Ritta & J-Jack)",
    from: "feat. Ritta & J-Jack",
    story: "The beat stopped asking permission somewhere around midnight. By the drop, none of us were driving anymore.",
    releaseDate: "2026-10-02",
    date: "2.10.2026",
    accent: "#E050B0",
    coverUrl: "/releases/no-control.png",
    audioSrc: "/audio/no-control.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 5,
    title: "Too Late For Goodbye (feat. Nella & J'B Ray)",
    from: "feat. Nella & J'B Ray",
    story: "The lights were already coming up when we asked for one more song. Goodbye can wait for the next chorus.",
    releaseDate: "2026-10-09",
    date: "9.10.2026",
    accent: "#A050D0",
    coverUrl: "/releases/too-late-for-goodbye.png",
    audioSrc: "/audio/too-late-for-goodbye.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 6,
    title: "Feel My Body (feat. Iazabella Marieera & Paollo Rivaninni)",
    from: "feat. Iazabella Marieera & Paollo Rivaninni",
    story: "The bassline found our pulse before we noticed it was gone. Some nights don't need words, just movement.",
    releaseDate: "2026-10-16",
    date: "16.10.2026",
    accent: "#C040C0",
    coverUrl: "/releases/feel-my-body.png",
    audioSrc: "/audio/feel-my-body.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
];

type Track = (typeof TRACKS)[number];

const ACCENT = "#D040A0";

function TrackCard({ track }: { track: Track }) {
  const [lyricsOpen, setLyricsOpen] = useState(false);
  const isOut = new Date(track.releaseDate) <= new Date();

  return (
    <div
      className="card-punch rounded-2xl overflow-hidden w-[260px] sm:w-[280px] shrink-0 snap-start"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `2px solid ${track.accent}`,
        color: track.accent,
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

export default function BackToEurodanceClient() {
  const albumStatus = getAlbumStatus(TRACKS);

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
            {albumStatus === "released" ? "Released" : "Album · Eurodance · 2026"}
          </span>

          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-3 font-sans"
            style={{ color: "#f0f6fc" }}
          >
            BACK TO EURODANCE
          </h1>

          <p
            className="text-lg font-light mb-4 font-mono uppercase tracking-[0.2em]"
            style={{ color: ACCENT }}
          >
            Authentic 90s Eurodance
          </p>

          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.28)" }}>
            6 Tracks. 6 Memories. One Return to the Dancefloor.
            <br />
            Full album: 23.10.2026
          </p>
        </section>

        {/* Track list — horizontal swipeable row */}
        <section className="pb-12 max-w-[1100px] mx-auto">
          <div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-2">
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
