"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play, X } from "lucide-react";
import type { Album } from "@/types/album";
import type { AudioPlayerControls } from "./AudioPlayer";
import CoverFlowSlide from "./CoverFlowSlide";
import ExpandedHeader from "./ExpandedHeader";
import ExpandedTrackOverlay from "./ExpandedTrackOverlay";
import SongInfoPanel from "./SongInfoPanel";
import LyricsPanel from "./LyricsPanel";

const SPACING_DESKTOP = 200;
const SPACING_MOBILE = 110;
const SIZE_DESKTOP = 300;
const SIZE_MOBILE = 190;
const DEPTH = 260;
const ANGLE = 52;
const TRANSITION_MS = 900;

const PARTICLES = [
  { left: "8%", top: "22%", size: 3, opacity: 0.5, delay: "0s" },
  { left: "18%", top: "62%", size: 2, opacity: 0.35, delay: "1.4s" },
  { left: "30%", top: "14%", size: 2, opacity: 0.4, delay: "2.6s" },
  { left: "72%", top: "26%", size: 3, opacity: 0.45, delay: "0.8s" },
  { left: "85%", top: "58%", size: 2, opacity: 0.3, delay: "2s" },
  { left: "92%", top: "18%", size: 2, opacity: 0.35, delay: "3.2s" },
  { left: "12%", top: "82%", size: 2, opacity: 0.3, delay: "2.2s" },
  { left: "60%", top: "80%", size: 3, opacity: 0.4, delay: "1s" },
];

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function slugFromPath(pathname: string, albumSlug: string): string | null {
  const prefix = `/${albumSlug}/`;
  if (!pathname.startsWith(prefix)) return null;
  const rest = pathname.slice(prefix.length).replace(/\/$/, "");
  return rest || null;
}

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function CoverFlow({ album, initialSlug }: { album: Album; initialSlug?: string }) {
  const tracks = album.tracks;
  const [activeIndex, setActiveIndex] = useState(() => {
    if (initialSlug) {
      const idx = tracks.findIndex((t) => t.slug === initialSlug);
      if (idx >= 0) return idx;
    }
    return 0;
  });
  const [isExpanded, setIsExpanded] = useState(Boolean(initialSlug));
  const [isExpanding, setIsExpanding] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const isAnimatingRef = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const collapseTimerRef = useRef<number | null>(null);

  // --- Shared audio player. Lives here (not inside a panel) so playback
  // keeps going — as a mini player — when the user closes the expanded
  // view or browses to another track, instead of stopping.
  const [playerIndex, setPlayerIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const shouldPlayRef = useRef(false);
  const playerTrack = playerIndex !== null ? tracks[playerIndex] : null;

  // --- Bootstrap: direct deep link into a track opens the album page with
  // Cover Flow already expanded on that track. We rewrite history so the
  // base album URL sits one entry back — Close / Escape / browser Back
  // always has somewhere valid inside the app to land on.
  useEffect(() => {
    if (initialSlug) {
      const idx = tracks.findIndex((t) => t.slug === initialSlug);
      if (idx >= 0) {
        window.history.replaceState(null, "", `/${album.slug}`);
        window.history.pushState(null, "", `/${album.slug}/${tracks[idx].slug}`);
        requestAnimationFrame(() => setIsExpanding(true));
        sectionRef.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
        return;
      }
    }
    try {
      const saved = sessionStorage.getItem(`${album.slug}:lastTrack`);
      if (saved) {
        const idx = tracks.findIndex((t) => t.slug === saved);
        if (idx >= 0) setActiveIndex(idx);
      }
    } catch {
      /* sessionStorage unavailable — default to the first track */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const mqNarrow = window.matchMedia("(max-width: 1023px)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateNarrow = () => setIsNarrow(mqNarrow.matches);
    const updateMotion = () => setReducedMotion(mqMotion.matches);
    updateNarrow();
    updateMotion();
    mqNarrow.addEventListener("change", updateNarrow);
    mqMotion.addEventListener("change", updateMotion);
    return () => {
      mqNarrow.removeEventListener("change", updateNarrow);
      mqMotion.removeEventListener("change", updateMotion);
    };
  }, []);

  // When the loaded track changes, (re)load the new source and, if the
  // switch was triggered by pressing Play, start it once ready.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || playerIndex === null) return;
    audio.load();
    if (shouldPlayRef.current) {
      audio.play().catch(() => {
        /* playback was interrupted — ignore */
      });
      shouldPlayRef.current = false;
    }
  }, [playerIndex]);

  const beginCollapse = useCallback(() => {
    setIsExpanding(false);
    if (collapseTimerRef.current) window.clearTimeout(collapseTimerRef.current);
    collapseTimerRef.current = window.setTimeout(
      () => setIsExpanded(false),
      reducedMotion ? 150 : TRANSITION_MS
    );
  }, [reducedMotion]);

  // --- popstate is the single source of truth for browser Back/Forward.
  // Every close (button, Escape, real back button) funnels through here.
  useEffect(() => {
    const onPopState = () => {
      const slug = slugFromPath(window.location.pathname, album.slug);
      if (!slug) {
        beginCollapse();
        return;
      }
      const idx = tracks.findIndex((t) => t.slug === slug);
      if (idx >= 0) {
        setActiveIndex(idx);
        setIsExpanded(true);
        if (collapseTimerRef.current) window.clearTimeout(collapseTimerRef.current);
        requestAnimationFrame(() => setIsExpanding(true));
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [tracks, album.slug, beginCollapse]);

  useEffect(() => {
    if (!isExpanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        window.history.back();
      } else if (e.key === "ArrowRight") {
        stepExpanded(1);
      } else if (e.key === "ArrowLeft") {
        stepExpanded(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded, activeIndex]);

  useEffect(() => {
    if (isExpanded) return; // collapsed browsing keyboard handled below
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
      else if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isExpanded]);

  // Native (non-passive) wheel listener so we can capture wheel/trackpad
  // input to browse tracks while hovering the collapsed carousel. While a
  // track is expanded we deliberately do nothing here, so the wheel keeps
  // its normal job of scrolling the lyrics panel / the page.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || isExpanded) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta > 12) goTo(activeIndex + 1);
      else if (delta < -12) goTo(activeIndex - 1);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isExpanded]);

  const setActive = (index: number) => {
    if (isAnimatingRef.current) return;
    setActiveIndex((current) => {
      if (index === current) return current;
      isAnimatingRef.current = true;
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, reducedMotion ? 150 : TRANSITION_MS);
      return index;
    });
  };

  const goTo = (index: number) => {
    setActive(Math.max(0, Math.min(tracks.length - 1, index)));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isExpanded) return;
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isExpanded || touchStartX.current === null) return;
    const delta = (e.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    if (delta < -40) goTo(activeIndex + 1);
    else if (delta > 40) goTo(activeIndex - 1);
    touchStartX.current = null;
  };

  const openTrack = (index: number) => {
    if (isAnimatingRef.current) return;
    const track = tracks[index];
    try {
      sessionStorage.setItem(`${album.slug}:lastTrack`, track.slug);
    } catch {
      /* ignore */
    }
    window.history.pushState(null, "", `/${album.slug}/${track.slug}`);
    setActiveIndex(index);
    setIsExpanded(true);
    requestAnimationFrame(() => setIsExpanding(true));
  };

  // Previous/Next while expanded: wraps at both ends, keeps a single
  // history entry per track (replace, not push) so Back always exits
  // straight to the collapsed Cover Flow rather than stepping back through
  // every track visited along the way. Note this only changes which track
  // is being *viewed* — playback (if any) keeps going undisturbed.
  const stepExpanded = (dir: 1 | -1) => {
    const nextIndex = (activeIndex + dir + tracks.length) % tracks.length;
    setActiveIndex(nextIndex);
    window.history.replaceState(null, "", `/${album.slug}/${tracks[nextIndex].slug}`);
    try {
      sessionStorage.setItem(`${album.slug}:lastTrack`, tracks[nextIndex].slug);
    } catch {
      /* ignore */
    }
  };

  const closeExpanded = () => {
    window.history.back();
  };

  // --- Shared player controls, bound to a specific track index. Passed
  // into whichever SongInfoPanel is currently rendered (desktop or mobile).
  const handleTogglePlay = (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playerIndex === index) {
      if (isPlaying) audio.pause();
      else audio.play().catch(() => {});
    } else {
      setCurrentTime(0);
      setDuration(tracks[index].durationSeconds ?? 0);
      shouldPlayRef.current = true;
      setPlayerIndex(index);
    }
  };

  const buildPlayerControls = (index: number): AudioPlayerControls => {
    const isActive = playerIndex === index;
    return {
      isActive,
      isPlaying: isActive && isPlaying,
      currentTime: isActive ? currentTime : 0,
      duration: isActive && duration ? duration : tracks[index].durationSeconds ?? 0,
      volume,
      onTogglePlay: () => handleTogglePlay(index),
      onSeek: (t: number) => {
        if (playerIndex !== index) return;
        const audio = audioRef.current;
        if (audio) audio.currentTime = t;
        setCurrentTime(t);
      },
      onVolumeChange: (v: number) => {
        setVolume(v);
        if (audioRef.current) audioRef.current.volume = v;
      },
    };
  };

  const stopPlayer = () => {
    audioRef.current?.pause();
    setPlayerIndex(null);
    setCurrentTime(0);
  };

  const active = tracks[activeIndex];
  const spacing = isNarrow ? SPACING_MOBILE : SPACING_DESKTOP;
  const size = isNarrow ? SIZE_MOBILE : SIZE_DESKTOP;
  const progressPct = playerTrack && duration ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <section
      ref={sectionRef}
      className="relative w-full select-none"
      style={{
        background: "linear-gradient(180deg, #060606 0%, #0e0e0e 55%, #060606 100%)",
        overflow: isExpanded && !isNarrow ? "visible" : "hidden",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-label="Interactive album track carousel — use arrow keys, scroll, or swipe to browse"
      aria-roledescription="carousel"
    >
      {/* Shared audio element — persists across expand/collapse and track
          navigation so playback works as a mini player, not a hard stop. */}
      <audio
        ref={audioRef}
        src={playerTrack?.audioSrc ?? undefined}
        preload="metadata"
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{ display: "none" }}
      />

      {/* Ambient fog — tinted with the currently viewed track's own accent color */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 40%, ${hexToRgba(active.accent, 0.1)}, transparent 70%)`,
          transition: `background ${reducedMotion ? 150 : TRANSITION_MS}ms ease`,
        }}
      />

      {/* Minimal floating particles, same accent */}
      {!reducedMotion &&
        PARTICLES.map((p, i) => (
          <span
            key={i}
            className="coverflow-particle absolute rounded-full pointer-events-none"
            style={
              {
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                background: active.accent,
                opacity: p.opacity,
                animationDelay: p.delay,
                transition: "background 900ms ease",
                "--particle-opacity": p.opacity,
              } as React.CSSProperties
            }
          />
        ))}

      {!isExpanded ? (
        <div className="relative z-10 text-center pt-14 pb-4 px-6">
          <span
            className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] px-3 py-1 rounded-full border"
            style={{ color: album.accent, borderColor: `${album.accent}55`, background: "rgba(0,0,0,0.4)" }}
          >
            Cover Flow
          </span>
        </div>
      ) : (
        <ExpandedHeader
          track={active}
          isVisible={isExpanding}
          reducedMotion={reducedMotion}
          onClose={closeExpanded}
          onPrev={() => stepExpanded(-1)}
          onNext={() => stepExpanded(1)}
        />
      )}

      {/* Carousel band — the enlarged artwork and, on desktop, the Song
          Info / Lyrics panels all live in this same band so they read as
          one row: info — artwork — lyrics. */}
      <div
        className="relative"
        style={{
          height: isNarrow ? 340 : 520,
          marginTop: isExpanded ? (isNarrow ? 20 : 12) : 0,
          perspective: 1400,
          transition: `margin-top ${reducedMotion ? 120 : TRANSITION_MS}ms cubic-bezier(0.19,1,0.22,1)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {tracks.map((track, i) => (
            <CoverFlowSlide
              key={track.slug}
              track={track}
              offset={i - activeIndex}
              spacing={spacing}
              depth={DEPTH}
              angle={ANGLE}
              size={size}
              reducedMotion={reducedMotion}
              expandState={!isExpanded ? "none" : i === activeIndex ? "focus" : "background"}
              isExpanding={isExpanding}
              onSelect={() => (i === activeIndex ? openTrack(i) : goTo(i))}
            />
          ))}
        </div>

        {/* SONG INFO (left) / LYRICS (right) — desktop only, overlapping
            the artwork's own band so the artwork stays visually centred
            between them. */}
        {isExpanded && !isNarrow && (
          <div
            className="absolute inset-0 flex items-center justify-center px-6 z-30"
            style={{ pointerEvents: isExpanding ? "auto" : "none" }}
          >
            <div className="w-full max-w-[1500px] flex items-center justify-between gap-8">
              <div
                className="w-[320px] flex-shrink-0 max-h-[85vh] overflow-y-auto pr-1"
                style={{
                  opacity: isExpanding ? 1 : 0,
                  transform: isExpanding ? "translateX(0)" : "translateX(-48px)",
                  transition: `transform ${reducedMotion ? 120 : TRANSITION_MS}ms cubic-bezier(0.19,1,0.22,1), opacity ${reducedMotion ? 120 : TRANSITION_MS}ms cubic-bezier(0.19,1,0.22,1)`,
                }}
              >
                <SongInfoPanel key={active.slug} track={active} player={buildPlayerControls(activeIndex)} />
              </div>

              <div className="flex-1 min-w-[260px]" aria-hidden="true" />

              <div
                className="w-[320px] flex-shrink-0"
                style={{
                  opacity: isExpanding ? 1 : 0,
                  transform: isExpanding ? "translateX(0)" : "translateX(48px)",
                  transition: `transform ${reducedMotion ? 120 : TRANSITION_MS}ms cubic-bezier(0.19,1,0.22,1), opacity ${reducedMotion ? 120 : TRANSITION_MS}ms cubic-bezier(0.19,1,0.22,1)`,
                }}
              >
                <LyricsPanel key={`${active.slug}-lyrics`} track={active} />
              </div>
            </div>
          </div>
        )}
      </div>

      {!isExpanded ? (
        <div className="relative z-10 text-center pt-6 pb-16 px-6">
          <p className="text-xs font-mono uppercase tracking-[0.3em] mb-2" style={{ color: `${album.accent}CC` }}>
            {String(active.n).padStart(2, "0")} · {active.from}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6" style={{ color: "#ffffff" }}>
            {active.title}
          </h3>
          <button
            onClick={() => openTrack(activeIndex)}
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: album.accent, color: "#111111" }}
          >
            Open Track
          </button>
        </div>
      ) : (
        isNarrow && (
          <ExpandedTrackOverlay
            track={active}
            isVisible={isExpanding}
            reducedMotion={reducedMotion}
            player={buildPlayerControls(activeIndex)}
          />
        )
      )}

      {/* Mini player — shown whenever a track is loaded and you're not
          currently looking at its expanded view, so playback survives
          browsing instead of being cut off. */}
      {playerTrack && (!isExpanded || playerIndex !== activeIndex) && (
        <div
          className="fixed z-40 flex items-center gap-3 rounded-full pl-2 pr-3 py-2 cursor-pointer"
          style={{
            left: "50%",
            bottom: 20,
            transform: "translateX(-50%)",
            background: "rgba(8,8,8,0.94)",
            border: `1px solid ${playerTrack.accent}55`,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.55)",
            maxWidth: "calc(100vw - 32px)",
          }}
          onClick={() => openTrack(playerIndex as number)}
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
            <img src={playerTrack.coverUrl} alt="" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: `inset 0 0 0 2px ${playerTrack.accent}` }}
            />
          </div>
          <div className="min-w-0" style={{ maxWidth: 160 }}>
            <p className="text-xs font-semibold truncate" style={{ color: "#ffffff" }}>
              {playerTrack.title}
            </p>
            <p className="text-[10px] font-mono truncate" style={{ color: "rgba(255,255,255,0.4)" }}>
              {formatTime(currentTime)} / {formatTime(duration || playerTrack.durationSeconds || 0)}
            </p>
          </div>
          <div className="hidden sm:block w-16 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(255,255,255,0.15)" }}>
            <div
              className="h-full rounded-full"
              style={{ width: `${progressPct}%`, background: playerTrack.accent, transition: "width 200ms linear" }}
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleTogglePlay(playerIndex as number);
            }}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-transform hover:scale-105"
            style={{ background: playerTrack.accent, color: "#111111" }}
          >
            {isPlaying ? (
              <Pause size={13} fill="currentColor" />
            ) : (
              <Play size={13} fill="currentColor" style={{ marginLeft: 1 }} />
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              stopPlayer();
            }}
            aria-label="Stop"
            className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <X size={14} />
          </button>
        </div>
      )}
    </section>
  );
}
