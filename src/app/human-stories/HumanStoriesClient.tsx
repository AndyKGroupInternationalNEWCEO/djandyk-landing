"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RepeatButton, { nextRepeatMode, type RepeatMode } from "@/components/RepeatButton";
import { humanStoriesAlbum } from "@/data/human-stories-tracks";

const ACCENT = "#C7B896";
const PLATFORMS = ["Spotify", "Apple Music", "TIDAL", "YouTube", "Beatport"];
const RAIL_SPACING = 92;
const AUTO_ROLL_INTERVAL = 4500;
const INTERACTION_COOLDOWN = 6000;

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function HumanStoriesClient({ initialSlug }: { initialSlug?: string } = {}) {
  const tracks = humanStoriesAlbum.tracks;

  const [index, setIndex] = useState(() => {
    if (initialSlug) {
      const i = tracks.findIndex((t) => t.slug === initialSlug);
      if (i >= 0) return i;
    }
    return 1; // "Human Stories (House)" — the title track, a natural default
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [enterKey, setEnterKey] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [railHovered, setRailHovered] = useState(false);
  const [repeatMode, setRepeatMode] = useState<RepeatMode>("off");

  const audioRef = useRef<HTMLAudioElement>(null);
  const touchStartY = useRef(0);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const shouldAutoPlayRef = useRef(false);

  const track = tracks[index];

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setEnterKey((k) => k + 1);
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      if (shouldAutoPlayRef.current) {
        shouldAutoPlayRef.current = false;
        audio.load();
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  }, [index]);

  // Auto-roll the rail on its own — paused while a track is playing or
  // right after the user manually navigates, then resumes.
  useEffect(() => {
    if (isPlaying || interacting || railHovered) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % tracks.length);
    }, AUTO_ROLL_INTERVAL);
    return () => clearInterval(t);
  }, [isPlaying, interacting, railHovered, tracks.length]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  function pauseAutoRollBriefly() {
    setInteracting(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setInteracting(false), INTERACTION_COOLDOWN);
  }

  function goTo(i: number, manual = true) {
    setIndex(((i % tracks.length) + tracks.length) % tracks.length);
    if (manual) pauseAutoRollBriefly();
  }

  // Mouse wheel / trackpad scroll over the rail browses tracks, same
  // interaction as the standard Cover Flow carousel.
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    let locked = false;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (locked) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 12) return;
      locked = true;
      goTo(index + (delta > 0 ? 1 : -1));
      window.setTimeout(() => {
        locked = false;
      }, 260);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function handleTogglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartY.current = e.touches[0].clientY;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(delta) > 40) goTo(index + (delta > 0 ? 1 : -1));
  }

  // When the track finishes: repeat-one loops it in place; otherwise
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

  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "86vh" }}>
          <img
            src={humanStoriesAlbum.heroCoverSrc}
            alt="Human Stories"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 12%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #0d1117 5%, rgba(13,17,23,0.55) 40%, rgba(13,17,23,0.15) 65%, transparent 100%)" }}
          />
          <div className="absolute top-6 left-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.35em]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Album
            </span>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-end text-center h-full px-6 pb-14" style={{ minHeight: "86vh" }}>
            <span
              className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-6 px-3 py-1 rounded-full border"
              style={{ color: ACCENT, borderColor: `${ACCENT}55`, background: "rgba(0,0,0,0.4)" }}
            >
              Album · House / Progressive House · 2026
            </span>
            <h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              HUMAN STORIES
            </h1>
            <p className="text-base sm:text-lg font-light font-mono uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>
              13 Tracks. House / Progressive House.
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed italic font-serif max-w-[560px]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Every life carries a story. Some are spoken. Some are only felt.
            </p>
          </div>
        </section>

        {/* Interactive rail + stage */}
        <section
          className="relative w-full select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="max-w-[1000px] mx-auto px-6 py-16 sm:py-20">
            <div className="grid grid-cols-1 md:grid-cols-[168px_1fr_168px] gap-8 md:gap-10 items-start">
              {/* Rail */}
              <div className="flex md:flex-col items-center gap-5 order-2 md:order-1">
                <div
                  ref={railRef}
                  onMouseEnter={() => setRailHovered(true)}
                  onMouseLeave={() => {
                    setRailHovered(false);
                    setHoveredIndex(null);
                  }}
                  className="relative w-full md:h-[420px] h-[120px] flex md:block overflow-visible"
                  style={{ perspective: 1000 }}
                >
                  <div className="hidden md:block absolute inset-0">
                    {tracks.map((t, i) => {
                      const offset = i - index;
                      const abs = Math.abs(offset);
                      const isHovered = hoveredIndex === i;
                      const baseScale = offset === 0 ? 1.25 : Math.max(0.55, 1 - abs * 0.22);
                      const scale = isHovered ? baseScale * 1.06 : baseScale;
                      const opacity = abs > 3 ? 0 : offset === 0 ? 1 : Math.max(0.2, 1 - abs * 0.28);
                      return (
                        <button
                          key={t.slug}
                          onClick={() => (i === index ? handleTogglePlay() : goTo(i))}
                          onMouseEnter={() => setHoveredIndex(i)}
                          onMouseLeave={() => setHoveredIndex((h) => (h === i ? null : h))}
                          aria-label={`${i === index ? "Toggle play" : "Go to"} ${t.title}`}
                          className="absolute top-1/2 left-1/2 rounded-lg overflow-hidden bg-black"
                          style={{
                            width: 96,
                            height: 96,
                            margin: "-48px 0 0 -48px",
                            transform: `translateY(${offset * RAIL_SPACING}px) scale(${scale})`,
                            opacity,
                            zIndex: isHovered ? 150 : 100 - abs,
                            filter: isHovered ? "brightness(1.2)" : "brightness(1)",
                            pointerEvents: abs > 3 ? "none" : "auto",
                            boxShadow:
                              offset === 0
                                ? `0 24px 50px -14px rgba(0,0,0,0.75), 0 0 0 2px ${ACCENT}88`
                                : isHovered
                                ? `0 18px 36px -12px rgba(0,0,0,0.7), 0 0 0 1px ${ACCENT}55`
                                : "0 14px 30px -12px rgba(0,0,0,0.65)",
                            transition: "transform 620ms cubic-bezier(.19,1,.22,1), opacity 620ms cubic-bezier(.19,1,.22,1), box-shadow 320ms ease, filter 320ms ease",
                          }}
                        >
                          <img src={t.coverUrl} alt={t.title} className="w-full h-full object-cover" draggable={false} />
                        </button>
                      );
                    })}
                  </div>

                  {/* Mobile: simple horizontal strip */}
                  <div className="md:hidden flex items-center gap-2 overflow-x-auto w-full pb-1">
                    {tracks.map((t, i) => (
                      <button
                        key={t.slug}
                        onClick={() => goTo(i)}
                        className="shrink-0 rounded-lg overflow-hidden"
                        style={{
                          width: i === index ? 76 : 56,
                          height: i === index ? 76 : 56,
                          boxShadow: i === index ? `0 0 0 2px ${ACCENT}` : "none",
                          transition: "width 300ms cubic-bezier(.19,1,.22,1), height 300ms cubic-bezier(.19,1,.22,1)",
                        }}
                        aria-label={`Go to ${t.title}`}
                      >
                        <img src={t.coverUrl} alt={t.title} className="w-full h-full object-cover" draggable={false} />
                      </button>
                    ))}
                  </div>
                </div>

                <span className="hidden md:block text-[10px] font-mono tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {String(track.n).padStart(2, "0")} / {String(tracks.length).padStart(2, "0")}
                </span>
              </div>

              {/* Stage */}
              <div className="order-1 md:order-2 text-center stage-fade-in" key={enterKey}>
                <div
                  className="mx-auto rounded-xl overflow-hidden bg-black"
                  style={{
                    width: 220,
                    height: 220,
                    boxShadow: `0 40px 80px -20px rgba(0,0,0,0.75), 0 0 50px ${ACCENT}18`,
                  }}
                >
                  <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-8 mb-1" style={{ color: "#ffffff" }}>
                  {track.title}
                </h2>
                <p className="text-[11px] font-mono tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {String(track.n).padStart(2, "0")} / {String(tracks.length).padStart(2, "0")} · DJ Andy&apos;K
                </p>
                {track.vocal && (
                  <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {track.vocal}
                  </p>
                )}
                {!track.vocal && <div className="mb-6" />}

                {track.story && (
                  <p
                    className="text-sm leading-relaxed italic font-serif mb-6 max-w-[460px] mx-auto"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {track.story}
                  </p>
                )}

                {/* Streaming platforms — links go live once each track is released */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {PLATFORMS.map((name) => (
                    <span
                      key={name}
                      className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border"
                      style={{ color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      {name}
                    </span>
                  ))}
                </div>

                <dl className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-[360px] mx-auto mb-10 text-left">
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Producer
                    </dt>
                    <dd className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                      DJ Andy&apos;K
                    </dd>
                  </div>
                  {track.bpm && (
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                        BPM
                      </dt>
                      <dd className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                        {track.bpm}
                      </dd>
                    </div>
                  )}
                  {track.key && (
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Key
                      </dt>
                      <dd className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                        {track.key}
                      </dd>
                    </div>
                  )}
                  {track.chords && (
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Chord Progression
                      </dt>
                      <dd className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                        {track.chords}
                      </dd>
                    </div>
                  )}
                  {track.durationSeconds && (
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Duration
                      </dt>
                      <dd className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                        {formatTime(track.durationSeconds)}
                      </dd>
                    </div>
                  )}
                  {track.releaseDate && (
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Release Date
                      </dt>
                      <dd className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                        {track.releaseDate}
                      </dd>
                    </div>
                  )}
                </dl>

                {/* Player */}
                {track.audioSrc && (
                  <div className="flex items-center gap-3 w-full max-w-[380px] mx-auto mb-10">
                    <button
                      onClick={handleTogglePlay}
                      aria-label={isPlaying ? "Pause" : "Play"}
                      className="flex items-center justify-center w-11 h-11 rounded-full flex-shrink-0 transition-transform hover:scale-105"
                      style={{ background: "#ffffff", color: "#111111" }}
                    >
                      {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" style={{ marginLeft: 2 }} />}
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
                      }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${duration ? Math.min(100, (currentTime / duration) * 100) : 0}%`,
                          background: ACCENT,
                          transition: "width 150ms linear",
                        }}
                      />
                    </div>

                    <span className="text-[11px] font-mono w-9 shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {formatTime(duration)}
                    </span>

                    <RepeatButton mode={repeatMode} onCycle={() => setRepeatMode(nextRepeatMode)} accent={ACCENT} />
                  </div>
                )}

                {/* Official video — piano versions */}
                {track.youtubeUrl && (
                  <div
                    className="max-w-[420px] mx-auto mb-10 rounded-xl overflow-hidden"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <iframe
                      src={track.youtubeUrl}
                      width="100%"
                      height="220"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      style={{ display: "block" }}
                      title={`${track.title} — official video`}
                    />
                  </div>
                )}

                {/* Lyrics */}
                {track.lyrics.length > 0 && (
                  <div
                    className="text-left max-w-[520px] mx-auto rounded-xl p-6"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <h3 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
                      Lyrics
                    </h3>
                    <div
                      className="coverflow-scroll overflow-y-auto pr-2"
                      style={
                        {
                          maxHeight: 380,
                          ["--scroll-thumb" as string]: ACCENT,
                          maskImage: "linear-gradient(to bottom, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)",
                        } as React.CSSProperties
                      }
                    >
                      <div className="flex flex-col gap-4">
                        {track.lyrics.map((stanza, si) => (
                          <div key={si}>
                            {stanza.map((line, li) => {
                              const isTag = li === 0 && /^\[.*\]$/.test(line);
                              return (
                                <p
                                  key={li}
                                  className={isTag ? "text-xs font-mono font-semibold uppercase tracking-wide mb-1" : "text-sm leading-relaxed font-serif"}
                                  style={{ color: isTag ? ACCENT : "rgba(255,255,255,0.65)" }}
                                >
                                  {line}
                                </p>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Spacer column — mirrors the rail's width so the stage sits
                  truly centered on the page, not just within its own track. */}
              <div className="hidden md:block md:order-3" aria-hidden="true" />
            </div>
          </div>

          <audio
            ref={audioRef}
            src={track.audioSrc ?? undefined}
            preload="none"
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onEnded={handleTrackEnded}
          />
        </section>
      </main>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
