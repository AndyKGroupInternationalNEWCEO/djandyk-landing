"use client";

import { useEffect, useRef, useState } from "react";
import { getActiveMonthlyTop10 } from "@/lib/monthlyTop10";

const ROTATE_INTERVAL = 6000;
const INTERACTION_COOLDOWN = 6000;

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M5.25 3.75a.75.75 0 00-1.25.56v7.38a.75.75 0 001.25.56l5.5-3.69a.75.75 0 000-1.12L5.25 3.75z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <rect x="3.5" y="3" width="3" height="10" rx="0.75" />
      <rect x="9.5" y="3" width="3" height="10" rx="0.75" />
    </svg>
  );
}

function PrevIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4">
      <path d="M10 4L6 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4">
      <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MonthlyTop10Section() {
  const collection = getActiveMonthlyTop10();
  const tracks = collection?.tracks ?? [];

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);

  const track = tracks[index];

  // Auto-rotate — paused while a preview is playing or the user just interacted.
  useEffect(() => {
    if (tracks.length <= 1 || isPlaying || interacting) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % tracks.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(t);
  }, [isPlaying, interacting, tracks.length]);

  // Reset playback state whenever the featured track changes.
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [index]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  function pauseRotationBriefly() {
    setInteracting(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setInteracting(false), INTERACTION_COOLDOWN);
  }

  function goTo(i: number) {
    if (tracks.length === 0) return;
    setIndex(((i % tracks.length) + tracks.length) % tracks.length);
    pauseRotationBriefly();
  }

  function handleTogglePlay() {
    const audio = audioRef.current;
    if (!audio || !track?.audioPreview) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      goTo(index + (delta > 0 ? 1 : -1));
    }
  }

  // No collection with tracks yet — render nothing rather than a
  // broken placeholder section.
  if (!collection || tracks.length === 0 || !track) return null;

  return (
    <section
      id="top10"
      className="relative w-full overflow-hidden select-none"
      style={{ background: "linear-gradient(180deg, #060606 0%, #0e0e0e 55%, #060606 100%)" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 py-16 sm:py-20">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span
            className="text-[10px] uppercase tracking-[0.3em] font-mono block mb-3"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Monthly Selection
          </span>
          <h2
            className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] mb-4"
            style={{ color: "#ffffff" }}
          >
            DJ Andy&apos;K Top 10{" "}
            <span className="font-serif italic font-light" style={{ color: "rgba(255,255,255,0.7)" }}>
              · {collection.label}
            </span>
          </h2>
          <p className="text-base font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
            My ten essential tracks this month.
          </p>
        </div>

        {/* Rank + prev/next */}
        <div className="flex items-center justify-between max-w-[280px] mx-auto mb-6">
          <span
            className="text-xs font-mono tracking-widest"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {String(track.rank).padStart(2, "0")} / {String(tracks.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => goTo(index - 1)}
              aria-label="Previous track"
              className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.55)" }}
            >
              <PrevIcon />
            </button>
            <button
              onClick={() => goTo(index + 1)}
              aria-label="Next track"
              className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.55)" }}
            >
              <NextIcon />
            </button>
          </div>
        </div>

        {/* Big centered artwork with reflection — same visual language as Cover Flow */}
        <div className="flex flex-col items-center">
          <div className="relative" style={{ width: 240, height: 240 }}>
            <div
              className="relative w-full h-full rounded-lg overflow-hidden bg-black"
              style={{ boxShadow: "0 30px 60px -15px rgba(0,0,0,0.7), 0 0 40px rgba(255,255,255,0.06)" }}
            >
              <img
                src={track.artwork}
                alt={track.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
            <div
              className="absolute left-0 w-full overflow-hidden rounded-lg bg-black"
              aria-hidden="true"
              style={{
                top: "100%",
                height: "45%",
                transform: "scaleY(-1)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent 75%)",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent 75%)",
                opacity: 0.35,
              }}
            >
              <img src={track.artwork} alt="" className="w-full h-full object-cover" draggable={false} />
            </div>
          </div>

          <h3
            className="text-2xl sm:text-3xl font-bold tracking-tight mt-10 mb-1 text-center"
            style={{ color: "#ffffff" }}
          >
            {track.title}
          </h3>
          {track.featuredArtist && (
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              feat. {track.featuredArtist}
            </p>
          )}
          {!track.featuredArtist && <div className="mb-8" />}

          {track.audioPreview ? (
            <div className="flex items-center gap-3 w-full max-w-[380px] justify-center mb-8">
              <button
                onClick={handleTogglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="flex items-center justify-center w-11 h-11 rounded-full flex-shrink-0 transition-transform hover:scale-105"
                style={{ background: "#ffffff", color: "#111111" }}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>

              <span className="text-[11px] font-mono w-9 text-right shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>
                {formatTime(currentTime)}
              </span>

              <div
                role="slider"
                aria-label="Seek"
                aria-valuemin={0}
                aria-valuemax={duration || 0}
                aria-valuenow={currentTime}
                className="flex-1 h-1.5 rounded-full cursor-pointer min-w-[80px]"
                style={{ background: "rgba(255,255,255,0.15)" }}
                onClick={(e) => {
                  if (!duration) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
                  const t = pct * duration;
                  if (audioRef.current) audioRef.current.currentTime = t;
                  setCurrentTime(t);
                  pauseRotationBriefly();
                }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${duration ? Math.min(100, (currentTime / duration) * 100) : 0}%`,
                    background: "#ffffff",
                    transition: "width 150ms linear",
                  }}
                />
              </div>

              <span className="text-[11px] font-mono w-9 shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>
                {formatTime(duration)}
              </span>
            </div>
          ) : (
            <p className="text-xs italic mb-8" style={{ color: "rgba(255,255,255,0.35)" }}>
              Preview coming soon
            </p>
          )}

          {track.releaseLink && (
            <a
              href={track.releaseLink}
              {...(track.releaseLink.startsWith("/")
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "#ffffff", color: "#111111" }}
            >
              Open Track
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                <path d="M6 4l4 4-4 4" />
              </svg>
            </a>
          )}
        </div>

        <audio
          ref={audioRef}
          src={track.audioPreview}
          preload="none"
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onEnded={() => {
            setIsPlaying(false);
            goTo(index + 1);
          }}
        />

        {/* Track indicators */}
        <div className="flex justify-center gap-2 mt-12 flex-wrap">
          {tracks.map((t, i) => (
            <button
              key={t.rank}
              onClick={() => goTo(i)}
              aria-label={`Go to track ${i + 1}`}
              style={{
                height: "8px",
                width: i === index ? "20px" : "8px",
                borderRadius: "4px",
                backgroundColor: i === index ? "#ffffff" : "rgba(255,255,255,0.2)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={handleTogglePlay}
            disabled={!track.audioPreview}
            className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium rounded transition-colors disabled:opacity-40 disabled:cursor-default"
            style={{ background: "#ffffff", color: "#111111" }}
          >
            Listen to this month&apos;s Top 10
          </button>
        </div>
      </div>
    </section>
  );
}
