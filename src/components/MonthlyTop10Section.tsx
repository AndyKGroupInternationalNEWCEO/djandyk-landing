"use client";

import { useEffect, useRef, useState } from "react";
import { getActiveMonthlyTop10 } from "@/lib/monthlyTop10";
import RepeatButton, { nextRepeatMode, type RepeatMode } from "@/components/RepeatButton";

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

// A tiny 3-band equalizer indicator (High / Bass / Mid) — bars bounce while
// playing, settle to a low resting height when paused or reduced-motion.
function EQBars({ animate }: { animate: boolean }) {
  const bars = [
    { duration: "0.62s", delay: "0s" },
    { duration: "0.78s", delay: "0.12s" },
    { duration: "0.54s", delay: "0.06s" },
  ];
  return (
    <span
      className="inline-flex items-end gap-[3px] h-4 w-[18px] shrink-0"
      role="img"
      aria-label="Equalizer: High, Bass, Mid"
    >
      {bars.map((bar, i) => (
        <span
          key={i}
          className="w-[4px] rounded-[1px] bg-highlight"
          style={{
            height: animate ? "45%" : "30%",
            animation: animate ? `top10-eq ${bar.duration} ease-in-out ${bar.delay} infinite` : "none",
          }}
        />
      ))}
    </span>
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
  const [repeatMode, setRepeatMode] = useState<RepeatMode>("off");
  const [reducedMotion, setReducedMotion] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);
  const shouldAutoPlayRef = useRef(false);

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
      if (shouldAutoPlayRef.current) {
        shouldAutoPlayRef.current = false;
        if (tracks[index]?.audioPreview) {
          audio.load();
          audio
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
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

  // When the preview finishes: repeat-one loops it in place; otherwise
  // advance to the next track, wrapping around forever only in repeat-all.
  function handleTrackEnded() {
    if (repeatMode === "one") {
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
      return;
    }
    const isLast = index === tracks.length - 1;
    if (isLast && repeatMode !== "all") {
      setIsPlaying(false);
      return;
    }
    shouldAutoPlayRef.current = true;
    goTo(index + 1);
  }

  // No collection with tracks yet — render nothing rather than a
  // broken placeholder section.
  if (!collection || tracks.length === 0 || !track) return null;

  return (
    <section id="top10" className="relative pt-10 pb-20 px-8 section-with-glass">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            Monthly Selection
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            DJ Andy&apos;K Top 10{" "}
            <span className="font-serif italic font-light">· {collection.label}</span>
          </h2>
          <p className="text-base text-muted font-light">My ten essential tracks this month.</p>
        </div>

        <div
          className="glass-card no-hover-lift relative overflow-hidden rounded-2xl p-5 sm:p-6"
          style={{
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(40px) saturate(200%)",
            WebkitBackdropFilter: "blur(40px) saturate(200%)",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="absolute inset-x-0 top-0 h-24 pointer-events-none z-0"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center justify-between mb-5">
            <span className="flex items-baseline gap-1 font-mono text-muted-2">
              <span className="text-2xl font-light tracking-tight text-foreground">
                {String(track.rank).padStart(2, "0")}
              </span>
              <span className="text-xs tracking-widest">/ {String(tracks.length).padStart(2, "0")}</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => goTo(index - 1)}
                aria-label="Previous track"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-grid-500 text-muted-2 hover:text-highlight hover:border-highlight hover:shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all"
              >
                <PrevIcon />
              </button>
              <button
                onClick={() => goTo(index + 1)}
                aria-label="Next track"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-grid-500 text-muted-2 hover:text-highlight hover:border-highlight hover:shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all"
              >
                <NextIcon />
              </button>
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
            <div className="relative shrink-0">
              <img
                src={track.artwork}
                alt={track.title}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-[0_12px_32px_-8px_rgba(0,0,0,0.28)] ring-1 ring-black/5"
              />
              {isPlaying && !reducedMotion && (
                <span
                  className="absolute -inset-1.5 rounded-2xl pointer-events-none"
                  style={{
                    border: "1px solid rgba(17,17,17,0.5)",
                    animation: "top10-pulse 1.8s ease-in-out infinite",
                  }}
                />
              )}
            </div>

            <div className="flex-1 min-w-0 w-full text-center sm:text-left">
              {isPlaying && (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-1.5">
                  <EQBars animate={!reducedMotion} />
                  Now Playing
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-1 leading-snug">
                {track.title}
              </h3>
              {track.featuredArtist && (
                <p className="text-sm text-muted-2 mb-4">feat. {track.featuredArtist}</p>
              )}
              {!track.featuredArtist && <div className="mb-4" />}

              {track.audioPreview ? (
                <div className="flex items-center gap-3 w-full justify-center sm:justify-start">
                  <button
                    onClick={handleTogglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-highlight text-white flex-shrink-0 shadow-[0_6px_20px_-4px_rgba(0,0,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5)]"
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </button>

                  <span className="text-[11px] font-mono w-9 text-right text-muted-2 shrink-0 tabular-nums">
                    {formatTime(currentTime)}
                  </span>

                  <div
                    role="slider"
                    aria-label="Seek"
                    aria-valuemin={0}
                    aria-valuemax={duration || 0}
                    aria-valuenow={currentTime}
                    className="group relative flex-1 h-1.5 rounded-full cursor-pointer min-w-[80px]"
                    style={{ background: "rgba(0,0,0,0.08)" }}
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
                      className="relative h-full rounded-full"
                      style={{
                        width: `${duration ? Math.min(100, (currentTime / duration) * 100) : 0}%`,
                        background: "linear-gradient(90deg, #444, var(--color-highlight))",
                        transition: "width 150ms linear",
                      }}
                    >
                      <span
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-highlight shadow-[0_1px_4px_rgba(0,0,0,0.4)] transition-opacity ${
                          isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono w-9 text-muted-2 shrink-0 tabular-nums">
                    {formatTime(duration)}
                  </span>

                  <span className="hidden sm:block w-px h-4 bg-grid-500 shrink-0" aria-hidden="true" />

                  <RepeatButton
                    mode={repeatMode}
                    onCycle={() => setRepeatMode(nextRepeatMode)}
                    accent="var(--color-highlight)"
                    inactiveColor="rgba(0,0,0,0.35)"
                  />
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
            onEnded={handleTrackEnded}
          />
        </div>

        {/* Track indicators */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {tracks.map((t, i) => (
            <button
              key={t.rank}
              onClick={() => goTo(i)}
              aria-label={`Go to track ${i + 1}`}
              className="hover:opacity-70"
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
            className="inline-flex items-center gap-2 justify-center h-11 px-7 text-sm font-medium text-white bg-highlight hover:bg-deep-teal shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.45)] rounded-full disabled:opacity-40 disabled:cursor-default disabled:transform-none disabled:shadow-none"
          >
            <PlayIcon />
            Listen to this month&apos;s Top 10
          </button>
        </div>
      </div>

      <style>{`
        @keyframes top10-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0; transform: scale(1.06); }
        }
        @keyframes top10-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        @keyframes top10-eq {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
      `}</style>
    </section>
  );
}
