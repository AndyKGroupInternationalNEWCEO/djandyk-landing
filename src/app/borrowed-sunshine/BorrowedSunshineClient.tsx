"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAlbumStatus } from "@/lib/albumStatus";
import CoverFlow from "@/components/coverflow/CoverFlow";
import SectionTabs from "@/components/coverflow/SectionTabs";
import { borrowedSunshineAlbum } from "@/data/borrowed-sunshine-tracks";

const COVER = "/releases/borrowed-sunshine-cover.png";

const TRACKS = [
  {
    n: 1,
    title: "Too Hot To Go Home (feat. Ben Wheeler)",
    from: "feat. Ben Wheeler",
    story: "The city was already asleep, but neither of us wanted the night to end. Some goodbyes only happen when the sun comes up.",
    releaseDate: "2026-08-28",
    date: "28.8.2026",
    accent: "#E8A020",
    coverUrl: "/releases/too-hot-to-go-home.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/too-hot-to-go-home.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 2,
    title: "The Way You Smile",
    from: "DJ Andy'K",
    story: "You smiled for only a second, but the moment stayed forever. Some people never know how much one smile can change.",
    releaseDate: "2026-08-21",
    date: "21.8.2026",
    accent: "#F0C060",
    coverUrl: "/releases/the-way-you-smile.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/the-way-you-smile.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 3,
    title: "Take It Off Slowly (feat. Nicolas Beech)",
    from: "feat. Nicolas Beech",
    story: "Some nights are remembered because nothing was rushed. Every touch felt like it had all the time in the world.",
    releaseDate: "2026-08-14",
    date: "14.8.2026",
    accent: "#D4956A",
    coverUrl: "/releases/take-it-off-slowly.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/take-it-off-slowly.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 4,
    title: "Stay A Little Longer (feat. Ben Wheeler)",
    from: "feat. Ben Wheeler",
    story: "Morning was already waiting outside the window. We just weren't ready to let it in.",
    releaseDate: "2026-08-07",
    date: "7.8.2026",
    accent: "#C4845A",
    coverUrl: "/releases/stay-a-little-longer.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/stay-a-little-longer.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 5,
    title: "Borrowed Sunshine",
    from: "DJ Andy'K",
    story: "Not every beautiful moment belongs to us forever. Sometimes happiness is only borrowed.",
    releaseDate: "2026-07-31",
    date: "31.7.2026",
    accent: "#E8A020",
    coverUrl: "/releases/borrowed-sunshine.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/borrowed-sunshine.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 6,
    title: "One More Bad Idea (feat. Mark Lutscher)",
    from: "feat. Mark Lutscher",
    story: "We both knew exactly where this would end. That never stopped us from beginning.",
    releaseDate: "2026-09-04",
    date: "4.9.2026",
    accent: "#B87040",
    coverUrl: "/releases/one-more-bad-idea.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/one-more-bad-idea.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 7,
    title: "We Outran Tomorrow (feat. Max Liem)",
    from: "feat. Max Liem",
    story: "For one night, tomorrow couldn't find us. We lived as if sunrise had forgotten our names.",
    releaseDate: "2026-09-11",
    date: "11.9.2026",
    accent: "#A06030",
    coverUrl: "/releases/we-outran-tomorrow.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/we-outran-tomorrow.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 8,
    title: "Hands All Over Me",
    from: "DJ Andy'K",
    story: "The distance disappeared before the words did. Some moments ask for surrender, not permission.",
    releaseDate: "2026-09-18",
    date: "18.9.2026",
    accent: "#906050",
    coverUrl: "/releases/hands-all-over-me.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/hands-all-over-me.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 9,
    title: "Half Past Summer",
    from: "DJ Andy'K",
    story: "You can feel summer leaving long before it says goodbye. Some sunsets never stop following you.",
    releaseDate: "2026-09-25",
    date: "25.9.2026",
    accent: "#C09060",
    coverUrl: "/releases/half-past-summer.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/half-past-summer.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 10,
    title: "Nothing Asked To Stay",
    from: "DJ Andy'K",
    story: "No promises were broken because none were ever made. Sometimes silence is the only goodbye people leave behind.",
    releaseDate: "2026-10-09",
    date: "9.10.2026",
    accent: "#8A7060",
    coverUrl: "/releases/nothing-asked-to-stay.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/nothing-asked-to-stay.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
];

type Track = (typeof TRACKS)[number];

const GOLD = "#E8A020";

function TrackCard({ track }: { track: Track }) {
  const [lyricsOpen, setLyricsOpen] = useState(false);
  const isOut = new Date(track.releaseDate) <= new Date();

  return (
    <div className="card-glow rounded-2xl w-[260px] sm:w-[280px] shrink-0 snap-start" style={{ color: track.accent }}>
    <div
      className="card-glow-inner rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `2px solid ${track.accent}`,
      }}
    >
      {/* Cover — full width square (animated when a video is available) */}
      <div className="aspect-square w-full relative overflow-hidden">
        {track.videoUrl ? (
          <video
            src={track.videoUrl}
            poster={track.coverUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={track.coverUrl}
            alt={track.title}
            className="w-full h-full object-cover"
          />
        )}
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
    </div>
  );
}

export default function BorrowedSunshineClient({ initialSlug }: { initialSlug?: string } = {}) {
  const albumStatus = getAlbumStatus(TRACKS);
  const [viewMode, setViewMode] = useState<"coverflow" | "overview">("coverflow");

  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero — full-width cover (swap to a video like no-translation-hero.mp4 once one exists) */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78vh" }}>
          <video
            src="/videos/borrowed-sunshine-hero.mp4"
            poster={COVER}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />

          {/* Legibility gradient */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #0d1117 5%, rgba(13,17,23,0.55) 40%, rgba(13,17,23,0.15) 65%, transparent 100%)" }}
          />

          <div className="absolute top-6 left-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.35em]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Album
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-end text-center h-full px-6 pb-14" style={{ minHeight: "78vh" }}>
            <span
              className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-6 px-3 py-1 rounded-full border"
              style={{ color: GOLD, borderColor: `${GOLD}55`, background: "rgba(0,0,0,0.4)" }}
            >
              {albumStatus === "released" ? "Released" : "Album · Trance · 2026"}
            </span>

            <h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              BORROWED SUNSHINE
            </h1>

            <p
              className="text-lg font-light mb-4 font-mono uppercase tracking-[0.2em]"
              style={{ color: GOLD }}
            >
              Trance / Progressive Trance
            </p>

            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              10 Tracks. 10 Stories. 10 Moments You&apos;ll Never Forget.
              <br />
              Full album: 9.10.2026
            </p>
          </div>
        </section>

        {/* Cover Flow vs. Track Overview — one view at a time, Cover Flow by default */}
        <div id="tracks" style={{ background: "#0d1117" }}>
          <div className="flex justify-center pb-8 px-6">
            <SectionTabs
              accent={GOLD}
              activeTab={viewMode}
              onTabChange={(id) => setViewMode(id as "coverflow" | "overview")}
              tabs={[
                { id: "coverflow", label: "Cover Flow" },
                { id: "overview", label: "Track Overview" },
              ]}
            />
          </div>

          {viewMode === "coverflow" ? (
            <CoverFlow album={borrowedSunshineAlbum} initialSlug={initialSlug} />
          ) : (
            <section className="pb-12 max-w-[1100px] mx-auto">
              <div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-2">
                {TRACKS.map((track) => (
                  <TrackCard key={track.n} track={track} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Full tracklist artwork — full-bleed, same treatment as the hero */}
        <section className="relative w-full overflow-hidden">
          <video
            src="/videos/borrowed-sunshine-tracklist.mp4"
            poster="/releases/borrowed-sunshine-tracklist.png"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />

          {/* Legibility gradients top & bottom, matching the hero */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0d1117 0%, transparent 8%, transparent 92%, #0d1117 100%)",
            }}
          />
        </section>
      </main>

      {/* Footer in white wrapper so site CSS vars render correctly */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
