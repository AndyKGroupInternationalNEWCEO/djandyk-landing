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
    <section id="top10" className="relative pt-10 pb-20 px-8 section-with-glass">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            Monthly Selection
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            DJ Andy&apos;K Top 10{" "}
            <span className="font-serif italic font-light">· {collection.label}</span>
          </h2>
          <p className="text-base text-muted font-light">Ten tracks defining this month.</p>
        </div>

        <div
          className="glass-card rounded-xl p-6 sm:p-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-muted-2 tracking-widest">
              {String(track.rank).padStart(2, "0")} / {String(tracks.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => goTo(index - 1)}
                aria-label="Previous track"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-grid-500 text-muted-2 hover:text-highlight hover:border-highlight transition-colors"
              >
                <PrevIcon />
              </button>
              <button
                onClick={() => goTo(index + 1)}
                aria-label="Next track"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-grid-500 text-muted-2 hover:text-highlight hover:border-highlight transition-colors"
              >
                <NextIcon />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <img
              src={track.artwork}
              alt={track.title}
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl object-cover shrink-0"
            />

            <div className="flex-1 min-w-0 w-full text-center sm:text-left">
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-1 leading-snug">
                {track.title}
              </h3>
              {track.featuredArtist && (
                <p className="text-sm text-muted-2 mb-4">feat. {track.featuredArtist}</p>
              )}
              {!track.featuredArtist && <div className="mb-4" />}

              {track.audioPreview ? (
                <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                  <button
                    onClick={handleTogglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-highlight text-white flex-shrink-0 transition-transform hover:scale-105"
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </button>

                  <span className="text-[11px] font-mono w-9 text-right text-muted-2">
                    {formatTime(currentTime)}
                  </span>

                  <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    step={0.1}
                    value={currentTime}
                    onChange={(e) => {
                      const t = Number(e.target.value);
                      if (audioRef.current) audioRef.current.currentTime = t;
                      setCurrentTime(t);
                    }}
                    onPointerDown={pauseRotationBriefly}
                    aria-label="Seek"
                    className="flex-1 h-1 rounded-full appearance-none cursor-pointer min-w-[100px]"
                    style={{ accentColor: "var(--color-highlight)" }}
                  />

                  <span className="text-[11px] font-mono w-9 text-muted-2">
                    {formatTime(duration)}
                  </span>
                </div>
              ) : (
                <p className="text-xs text-muted-2 italic">Preview coming soon</p>
              )}

              {track.releaseLink && (
                <a
                  href={track.releaseLink}
                  {...(track.releaseLink.startsWith("/")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-highlight hover:text-deep-teal transition-colors mt-4"
                >
                  {track.releaseLink.startsWith("/") ? "View Track" : "Listen Now"}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                    <path d="M6 4l4 4-4 4" />
                  </svg>
                </a>
              )}
            </div>
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
        </div>

        {/* Track indicators */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {tracks.map((t, i) => (
            <button
              key={t.rank}
              onClick={() => goTo(i)}
              aria-label={`Go to track ${i + 1}`}
              style={{
                height: "8px",
                width: i === index ? "20px" : "8px",
                borderRadius: "4px",
                backgroundColor: i === index ? "#111111" : "#e5e5e5",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleTogglePlay}
            disabled={!track.audioPreview}
            className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-highlight hover:bg-deep-teal transition-colors rounded disabled:opacity-40 disabled:cursor-default"
          >
            Listen to this month&apos;s Top 10
          </button>
        </div>
      </div>
    </section>
  );
}
