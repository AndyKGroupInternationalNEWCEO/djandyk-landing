"use client";

import { useEffect, useRef, useState } from "react";
import { doNotDisturbAlbum, type DNDTrack } from "@/data/do-not-disturb-tracks";
import { STREAMING_PLATFORMS } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SOUNDCLOUD_PLAYLIST_URL =
  "https://soundcloud.com/djandyk_2024/sets/do-not-disturb?si=58acd55f3e454217b5d57763b09a9515&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function DoNotDisturbClient() {
  const tracks = doNotDisturbAlbum.tracks;
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [panel, setPanel] = useState<"story" | "lyrics">("story");
  const audioRef = useRef<HTMLAudioElement>(null);

  const track: DNDTrack = tracks[trackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(0);
    setDuration(0);
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }

  function selectTrack(index: number) {
    setTrackIndex(index);
    setPanel("story");
    setIsPlaying(true);
  }

  function goRelative(delta: number) {
    const next = (trackIndex + delta + tracks.length) % tracks.length;
    selectTrack(next);
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    audio.currentTime = value;
    setCurrentTime(value);
  }

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen font-sans" style={{ background: "#08080a" }}>
        <div
          className="fixed inset-0 bg-cover"
          style={{
            backgroundImage: `url(${doNotDisturbAlbum.backgroundSrc})`,
            backgroundPosition: "center 30%",
            filter: "saturate(1.2) contrast(1.08) brightness(1.05)",
          }}
        />
        <div
          className="fixed inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,6,8,0.15) 0%, rgba(6,6,8,0.1) 20%, rgba(6,6,8,0.35) 45%, rgba(6,6,8,0.7) 70%, #08080a 100%)",
          }}
        />

        <div className="relative pt-[100px] pb-20 px-6">
          <section className="max-w-[520px] mx-auto text-center mb-10">
            <span
              className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-4 px-3 py-1 rounded-full border"
              style={{
                color: doNotDisturbAlbum.accent,
                borderColor: `${doNotDisturbAlbum.accent}33`,
                background: `${doNotDisturbAlbum.accent}0d`,
              }}
            >
              {doNotDisturbAlbum.subtitle} &middot; {doNotDisturbAlbum.genre}
            </span>
            <h1
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight leading-[1.1]"
              style={{ color: "#f0f6fc", textShadow: "0 4px 24px rgba(0,0,0,0.85)" }}
            >
              DO NOT DISTURB
            </h1>
          </section>

          {/* Dock — hover to preview, click to jump to a track */}
          <section className="max-w-[560px] mx-auto mb-8">
            <div className="flex items-end justify-center gap-3 sm:gap-4 px-2">
              {tracks.map((t, i) => (
                <button
                  key={t.slug}
                  onClick={() => selectTrack(i)}
                  aria-label={`Play ${t.title}`}
                  title={t.title}
                  className="group relative shrink-0 rounded-xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-125 hover:z-10"
                  style={{
                    width: 52,
                    height: 52,
                    outline: i === trackIndex ? `2px solid ${t.accent}` : "2px solid transparent",
                    outlineOffset: 2,
                    transform: i === trackIndex ? "translateY(-4px) scale(1.1)" : undefined,
                    boxShadow: i === trackIndex ? `0 8px 20px ${t.accent}55` : "0 4px 12px rgba(0,0,0,0.4)",
                  }}
                >
                  <img src={t.coverUrl} alt={t.title} className="w-full h-full object-cover" />
                  <span
                    className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: t.accent }}
                  />
                </button>
              ))}
            </div>
          </section>

          {/* Player */}
          <section
            className="max-w-[420px] mx-auto rounded-2xl overflow-hidden mb-6"
            style={{
              background: "rgba(10,10,12,0.72)",
              border: "1px solid rgba(201,162,39,0.28)",
              boxShadow: "0 30px 70px rgba(0,0,0,0.65)",
              backdropFilter: "blur(6px)",
            }}
          >
            <div className="relative w-full aspect-square">
              <img
                src={track.coverUrl}
                alt={`${track.title} — DJ Andy'K`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <audio
                ref={audioRef}
                src={track.audioSrc}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                onEnded={() => goRelative(1)}
              />

              <p className="text-[11px] font-mono uppercase tracking-widest mb-1" style={{ color: track.accent }}>
                Track {String(track.n).padStart(2, "0")} of {tracks.length}
              </p>
              <h2 className="text-xl font-bold mb-1" style={{ color: "#f0f6fc" }}>
                {track.title}
              </h2>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                {track.feat} &middot; {track.tagline}
              </p>

              <input
                type="range"
                min={0}
                max={duration || track.durationSeconds}
                value={currentTime}
                onChange={handleSeek}
                className="w-full mb-2 accent-[#C9A227]"
                style={{ accentColor: track.accent }}
              />
              <div
                className="flex justify-between text-[11px] font-mono mb-4"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration || track.durationSeconds)}</span>
              </div>

              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={() => goRelative(-1)}
                  aria-label="Previous track"
                  className="text-2xl transition-transform hover:-translate-y-0.5"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  ⏮
                </button>
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl transition-transform hover:scale-105"
                  style={{ background: track.accent, color: "#0d0d0f" }}
                >
                  {isPlaying ? "❚❚" : "▶"}
                </button>
                <button
                  onClick={() => goRelative(1)}
                  aria-label="Next track"
                  className="text-2xl transition-transform hover:-translate-y-0.5"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  ⏭
                </button>
              </div>
            </div>
          </section>

          {/* Info / lyrics */}
          <section
            className="max-w-[560px] mx-auto rounded-2xl p-6 mb-10"
            style={{
              background: "rgba(10,10,12,0.72)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(6px)",
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              {(["story", "lyrics"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setPanel(tab)}
                  className="text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full border transition-colors"
                  style={
                    panel === tab
                      ? { background: track.accent, borderColor: track.accent, color: "#0d0d0f" }
                      : { background: "transparent", borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.55)" }
                  }
                >
                  {tab === "story" ? "Song Info" : "Lyrics"}
                </button>
              ))}
            </div>

            {panel === "story" ? (
              <div>
                <p
                  className="text-lg italic text-center mb-5"
                  style={{ color: track.accent }}
                >
                  &ldquo;{track.quote}&rdquo;
                </p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {track.story}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                  {[
                    ["Duration", formatTime(track.durationSeconds)],
                    ["BPM", String(track.bpm)],
                    ["Key", track.key],
                    ["Vocal", track.vocal],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {label}
                      </p>
                      <p className="text-sm" style={{ color: "#f0f6fc" }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mb-5">
                  <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Core Harmony
                  </p>
                  <p className="text-sm font-mono" style={{ color: "#f0f6fc" }}>
                    {track.coreHarmony}
                  </p>
                </div>
                <p
                  className="text-sm italic text-center pt-4 border-t"
                  style={{ color: track.accent, borderColor: "rgba(255,255,255,0.08)" }}
                >
                  {track.outcome}
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {track.lyrics.map((stanza, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {stanza.map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < stanza.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            )}
          </section>

          {/* Listen links */}
          <section className="max-w-[520px] mx-auto text-center">
            <a
              href={SOUNDCLOUD_PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold mb-4 transition-transform hover:-translate-y-0.5"
              style={{ background: "#ff5500", color: "#0d0d0f" }}
            >
              ▶ Listen on SoundCloud
            </a>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              {STREAMING_PLATFORMS.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)", borderColor: "rgba(255,255,255,0.15)" }}
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
