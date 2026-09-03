"use client";

import { useEffect, useRef, useState } from "react";
import { Info, Pause, Play, ScrollText, SkipBack, SkipForward } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { doNotDisturbAlbum, type DNDTrack } from "@/data/do-not-disturb-tracks";
import JukeboxDrawer, { DRAWER_SLIDE_MS } from "./JukeboxDrawer";

const TRACKS: DNDTrack[] = doNotDisturbAlbum.tracks;
const N = TRACKS.length;

const REEL_REPEATS = 15;
const REEL_ITEMS = Array.from({ length: N * REEL_REPEATS }, (_, i) => TRACKS[i % N]);
const HOME = Math.floor(REEL_REPEATS / 2) * N;

const ITEM_H = 40;
const VISIBLE = 5;
const REEL_MS = 640;

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function shortestDiff(from: number, to: number) {
  let d = to - from;
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
}

export default function DoNotDisturbClient() {
  const [reelPos, setReelPos] = useState(HOME);
  const [targetIndex, setTargetIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [fineHover, setFineHover] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [wideDrawers, setWideDrawers] = useState(false);
  const [songInfoOpen, setSongInfoOpen] = useState(false);
  const [lyricsOpen, setLyricsOpen] = useState(false);
  const [coverState, setCoverState] = useState<{ slotTrack: [number, number]; front: 0 | 1 }>({
    slotTrack: [0, 0],
    front: 0,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const landTimeoutRef = useRef<number | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const reopenTimeoutRef = useRef<number | null>(null);
  const mountedOnce = useRef(false);

  // Multi-layer mouse parallax — body/brass rotate as one rigid unit, the
  // glass screen and the cover artwork drift by different amounts on top of
  // that, so the cabinet actually reads as layered depth instead of a flat
  // card tilting. Written directly to refs on each mousemove (no React
  // state/re-render per tick) with the smoothing done by a CSS transition
  // on each layer rather than a requestAnimationFrame loop — rAF gets
  // throttled/paused entirely in backgrounded or non-focused tabs, which
  // would silently kill this effect for anyone with the tab in the
  // background; a transition retargets smoothly on every event regardless.
  const cabinetRef = useRef<HTMLDivElement | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const artRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mqHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Side-sliding drawers need real room either side of the 620px cabinet
    // (420px panel + rail each side) — below this, drawers become a
    // bottom sheet instead so nothing gets clipped.
    const mqWide = window.matchMedia("(min-width: 1400px)");
    const updateHover = () => setFineHover(mqHover.matches);
    const updateMotion = () => setReducedMotion(mqMotion.matches);
    const updateWide = () => setWideDrawers(mqWide.matches);
    updateHover();
    updateMotion();
    updateWide();
    mqHover.addEventListener("change", updateHover);
    mqMotion.addEventListener("change", updateMotion);
    mqWide.addEventListener("change", updateWide);
    return () => {
      mqHover.removeEventListener("change", updateHover);
      mqMotion.removeEventListener("change", updateMotion);
      mqWide.removeEventListener("change", updateWide);
    };
  }, []);

  function applyParallax(x: number, y: number) {
    const tiltX = Math.max(-3, Math.min(3, y * -6));
    const tiltY = Math.max(-3, Math.min(3, x * 6));
    if (cabinetRef.current) {
      cabinetRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }
    if (screenRef.current) {
      screenRef.current.style.transform = `translate3d(${x * 5}px, ${y * 5}px, 20px)`;
    }
    if (artRef.current) {
      artRef.current.style.transform = `translate3d(${x * 14}px, ${y * 14}px, 40px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
    }
  }

  const front = TRACKS[activeIndex];

  // Swap audio + crossfade cover whenever the mechanism lands on a new track.
  useEffect(() => {
    const swapCoverSlot = () =>
      setCoverState((prev) => {
        const back: 0 | 1 = prev.front === 0 ? 1 : 0;
        const slotTrack: [number, number] = [...prev.slotTrack];
        slotTrack[back] = activeIndex;
        return { slotTrack, front: back };
      });
    swapCoverSlot();

    const audio = audioRef.current;
    if (!audio) return;
    const resetClock = () => {
      setCurrentTime(0);
      setDuration(0);
    };
    resetClock();
    audio.pause();
    audio.currentTime = 0;
    audio.load();
    if (mountedOnce.current) {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
    mountedOnce.current = true;
  }, [activeIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    return () => {
      if (landTimeoutRef.current) window.clearTimeout(landTimeoutRef.current);
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
      if (reopenTimeoutRef.current) window.clearTimeout(reopenTimeoutRef.current);
    };
  }, []);

  // Reloading the record: if either drawer is open when a *different* track
  // is picked, both slide shut first, the mechanism swaps the record while
  // hidden, then whichever drawers were open slide back out with the new
  // track's content. Re-picking the already-active track is a no-op — no
  // close/reopen flicker for that. Every stage is cancelable so rapid
  // re-selection mid-sequence can't leave a stale spin/reopen in flight.
  function requestSelect(target: number) {
    if (target === targetIndex) return;

    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    if (landTimeoutRef.current) window.clearTimeout(landTimeoutRef.current);
    if (reopenTimeoutRef.current) window.clearTimeout(reopenTimeoutRef.current);

    const hadSongInfoOpen = songInfoOpen;
    const hadLyricsOpen = lyricsOpen;
    const anyOpen = hadSongInfoOpen || hadLyricsOpen;

    const spin = () => {
      const diff = shortestDiff(targetIndex, target);
      if (diff !== 0) setReelPos((p) => p + diff);
      setTargetIndex(target);
      landTimeoutRef.current = window.setTimeout(() => {
        setActiveIndex(target);
        if (anyOpen) {
          reopenTimeoutRef.current = window.setTimeout(() => {
            if (hadSongInfoOpen) setSongInfoOpen(true);
            if (hadLyricsOpen) setLyricsOpen(true);
          }, reducedMotion ? 40 : 180);
        }
      }, reducedMotion ? 60 : REEL_MS);
    };

    if (anyOpen) {
      setSongInfoOpen(false);
      setLyricsOpen(false);
      closeTimeoutRef.current = window.setTimeout(spin, reducedMotion ? 80 : DRAWER_SLIDE_MS);
    } else {
      spin();
    }
  }

  function next() {
    requestSelect((targetIndex + 1) % N);
  }
  function prev() {
    requestSelect((targetIndex - 1 + N) % N);
  }

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
    setCurrentTime(audio.currentTime);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!fineHover || reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    applyParallax(
      (e.clientX - rect.left) / rect.width - 0.5,
      (e.clientY - rect.top) / rect.height - 0.5
    );
  }

  function handleMouseLeave() {
    applyParallax(0, 0);
  }

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;
  const released = new Date(front.releaseDate) <= new Date();

  // Content shared verbatim between the desktop side-drawer and the mobile
  // bottom-sheet shell — only the surrounding JukeboxDrawer chrome differs.
  // Play/pause + seek here are the SAME state/handlers as the jukebox's own
  // transport, not a second player. Any field without real data yet
  // (story/bpm/key/chords/lyrics) is simply omitted, never invented.
  const songInfoContent = (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-90"
          style={{
            background: "radial-gradient(circle at 35% 30%, #f5dd9a, #C9A227 65%, #7a5e18)",
            color: "#0d0d0f",
          }}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <div
            onClick={seek}
            className="relative h-1.5 rounded-full cursor-pointer overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ width: `${progressPct}%`, background: "linear-gradient(90deg, #C9A227, #D6608F)" }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
              {formatTime(currentTime)}
            </span>
            <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
              {formatTime(duration || front.durationSeconds)}
            </span>
          </div>
        </div>
      </div>

      {front.story && (
        <p
          className="text-sm sm:text-base font-serif italic leading-relaxed mb-6"
          style={{ color: "rgba(255,255,255,0.68)" }}
        >
          {front.story}
        </p>
      )}

      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {front.bpm !== undefined && (
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(201,162,39,0.6)" }}>
              BPM
            </p>
            <p className="text-sm sm:text-base" style={{ color: "#f5ede0" }}>{front.bpm}</p>
          </div>
        )}
        {front.chords && (
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(201,162,39,0.6)" }}>
              Chords
            </p>
            <p className="text-sm sm:text-base" style={{ color: "#f5ede0" }}>{front.chords}</p>
          </div>
        )}
        {front.key && (
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(201,162,39,0.6)" }}>
              Key
            </p>
            <p className="text-sm sm:text-base" style={{ color: "#f5ede0" }}>{front.key}</p>
          </div>
        )}
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(201,162,39,0.6)" }}>
            Feat.
          </p>
          <p className="text-sm sm:text-base" style={{ color: "#f5ede0" }}>
            {front.feat.replace(/^feat\.\s*/i, "")}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(201,162,39,0.6)" }}>
            Duration
          </p>
          <p className="text-sm sm:text-base" style={{ color: "#f5ede0" }}>{formatTime(front.durationSeconds)}</p>
        </div>
      </div>
    </div>
  );

  const lyrics = front.lyrics;
  const lyricsContent = (
    <div
      className="coverflow-scroll overflow-y-auto pr-1"
      style={{ maxHeight: 360, ["--scroll-thumb" as string]: front.accent } as React.CSSProperties}
    >
      {lyrics && lyrics.length > 0 ? (
        lyrics.map((stanza, si) => (
          <div key={si} style={{ marginBottom: si < lyrics.length - 1 ? "1.1rem" : 0 }}>
            {stanza.map((line, li) => (
              <p
                key={li}
                className="text-sm sm:text-base leading-relaxed font-serif"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {line}
              </p>
            ))}
          </div>
        ))
      ) : (
        <p className="text-sm sm:text-base font-serif italic" style={{ color: "rgba(255,255,255,0.35)" }}>
          Lyrics coming soon.
        </p>
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen font-sans overflow-x-hidden" style={{ background: "#08080a" }}>
        {/* Hero kicker */}
        <section className="px-6 pt-14 pb-6 max-w-[680px] mx-auto text-center">
          <span
            className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-4 px-3 py-1 rounded-full border"
            style={{
              color: doNotDisturbAlbum.accent,
              borderColor: `${doNotDisturbAlbum.accent}33`,
              background: `${doNotDisturbAlbum.accent}0d`,
            }}
          >
            {doNotDisturbAlbum.subtitle} · {doNotDisturbAlbum.genre}
          </span>
          <h1
            className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight leading-[1.1]"
            style={{ color: "#f0f6fc" }}
          >
            DO NOT DISTURB
          </h1>
        </section>

        {/* Jukebox */}
        <section className="px-6 pb-24">
          <div
            className="relative mx-auto"
            style={
              wideDrawers
                ? { maxWidth: 1600, display: "grid", gridTemplateColumns: "1fr 620px 1fr", alignItems: "center" }
                : undefined
            }
          >
            {wideDrawers && (
              <div className="relative h-full" style={{ zIndex: 1 }}>
                <JukeboxDrawer
                  side="left"
                  label="Song Information"
                  open={songInfoOpen}
                  mode="desktop"
                  reducedMotion={reducedMotion}
                  accent={doNotDisturbAlbum.accent}
                  onClose={() => setSongInfoOpen(false)}
                >
                  {songInfoContent}
                </JukeboxDrawer>
              </div>
            )}

            <div
              className="relative mx-auto"
              // z-index here (not just on the inner cabinetRef div) because
              // this is the actual grid item/cell — z-index on a plain
              // descendant doesn't affect its own cell's stacking order
              // relative to the drawer cells on either side.
              style={{ maxWidth: 620, perspective: "1800px", zIndex: 10 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Ground shadow */}
              <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[-24px] w-[78%] h-10 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0,0,0,0.55), transparent 70%)",
                filter: "blur(6px)",
              }}
            />

            {/* Cabinet — transform is written directly by the rAF parallax
                loop above (ref-driven, no re-render), so no inline
                transform/transition here beyond the 3D context itself. */}
            <div
              ref={cabinetRef}
              className="relative"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 350ms cubic-bezier(0.16,1,0.3,1)",
                zIndex: 10,
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "50% 50% 18px 18px / 15% 15% 3% 3%",
                  padding: "3px",
                  background:
                    "linear-gradient(160deg, #f0d27a 0%, #C9A227 22%, #6b5215 50%, #C9A227 78%, #7a5e18 100%)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 12px 30px rgba(0,0,0,0.5)",
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: "50% 50% 16px 16px / 15% 15% 3% 3%",
                    background:
                      "radial-gradient(120% 90% at 50% -10%, #1c1c20 0%, #0c0c0e 45%, #050506 100%), repeating-linear-gradient(115deg, rgba(201,162,39,0.05) 0px, rgba(201,162,39,0.05) 1px, transparent 1px, transparent 90px), repeating-linear-gradient(25deg, rgba(214,96,143,0.03) 0px, rgba(214,96,143,0.03) 1px, transparent 1px, transparent 140px)",
                  }}
                >
                  {/* Light sweep across the glass/brass */}
                  <div
                    className="jukebox-sweep pointer-events-none absolute"
                    style={{
                      top: "-10%",
                      left: "-10%",
                      width: "60%",
                      height: "60%",
                      background: "radial-gradient(circle, rgba(255,238,200,0.35), transparent 60%)",
                    }}
                  />

                  {/* Header */}
                  <div className="relative text-center pt-8 px-8 pb-2">
                    <p
                      className="text-[9px] font-mono uppercase tracking-[0.4em] mb-1.5"
                      style={{ color: "rgba(240,210,122,0.6)" }}
                    >
                      After Hours Jukebox
                    </p>
                    <h2
                      className="text-[clamp(1.4rem,3.2vw,2rem)] font-bold tracking-[0.08em]"
                      style={{
                        fontFamily: "var(--font-serif)",
                        backgroundImage: "linear-gradient(180deg, #f5dd9a, #C9A227 60%, #8a6a1a)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Do Not Disturb
                    </h2>
                  </div>

                  {/* Glass screen */}
                  <div className="relative px-5 sm:px-10 pt-4">
                    <div className="flex items-start gap-3 sm:gap-6">
                      <div
                        ref={screenRef}
                        className={`relative flex-1 min-w-0 rounded-2xl p-4 sm:p-6 ${
                          isPlaying && !reducedMotion ? "jukebox-glow-playing" : ""
                        }`}
                        style={{
                          // Nearly-opaque dark rather than translucent white —
                          // keeps the frosted-glass look but actually occludes
                          // the closed drawers sitting behind the cabinet at
                          // this z-level (a mostly-transparent panel would let
                          // them show through faintly regardless of z-index).
                          background: "rgba(6,6,7,0.94)",
                          backdropFilter: "blur(8px) saturate(140%)",
                          WebkitBackdropFilter: "blur(8px) saturate(140%)",
                          border: "1px solid rgba(201,162,39,0.22)",
                          boxShadow: "inset 0 2px 20px rgba(0,0,0,0.5)",
                          transition: "transform 350ms cubic-bezier(0.16,1,0.3,1)",
                        }}
                      >
                        {/* Cover crossfade — two stable slots swap "front" role */}
                        <div
                          ref={artRef}
                          className="relative w-full max-w-[220px] aspect-square mx-auto mb-4"
                          style={{ perspective: "900px", transition: "transform 350ms cubic-bezier(0.16,1,0.3,1)" }}
                        >
                          {([0, 1] as const).map((slot) => {
                            const isFront = coverState.front === slot;
                            const t = TRACKS[coverState.slotTrack[slot]];
                            return (
                              <img
                                key={`slot-${slot}`}
                                src={t.coverUrl}
                                alt={`${t.title} — Do Not Disturb`}
                                draggable={false}
                                className="absolute inset-0 w-full h-full object-cover rounded-lg pointer-events-none"
                                style={{
                                  border: "1px solid rgba(201,162,39,0.35)",
                                  boxShadow: "0 14px 34px rgba(0,0,0,0.5)",
                                  opacity: isFront ? 1 : 0,
                                  transform: isFront
                                    ? "translateZ(0) scale(1) rotateY(0deg)"
                                    : "translateZ(-60px) scale(0.9) rotateY(-8deg)",
                                  transition: reducedMotion
                                    ? "opacity 200ms ease"
                                    : "transform 520ms cubic-bezier(0.22,1,0.36,1), opacity 420ms ease",
                                }}
                              />
                            );
                          })}
                        </div>

                        <div className="text-center mb-4">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <span
                              className="text-xs font-mono font-semibold"
                              style={{ color: doNotDisturbAlbum.accent }}
                            >
                              {String(front.n).padStart(2, "0")}
                            </span>
                            <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.15)" }}>
                              /
                            </span>
                            <span
                              className="text-xs font-mono uppercase tracking-widest truncate"
                              style={{ color: "rgba(255,255,255,0.35)" }}
                            >
                              {front.feat}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold tracking-tight" style={{ color: "#f5ede0" }}>
                            {front.title}
                          </h3>
                          <p
                            className="text-[11px] font-mono uppercase tracking-widest mt-1"
                            style={{ color: released ? front.accent : "rgba(255,255,255,0.3)" }}
                          >
                            {released ? "Out Now" : new Date(front.releaseDate).toLocaleDateString("en-GB")}
                          </p>
                        </div>

                        {/* Progress */}
                        <div
                          onClick={seek}
                          className="relative h-1.5 rounded-full cursor-pointer overflow-hidden mb-1.5"
                          style={{ background: "rgba(255,255,255,0.1)" }}
                        >
                          <div
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{ width: `${progressPct}%`, background: "linear-gradient(90deg, #C9A227, #D6608F)" }}
                          />
                        </div>
                        <div className="flex justify-between mb-4">
                          <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                            {formatTime(currentTime)}
                          </span>
                          <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                            {formatTime(duration || front.durationSeconds)}
                          </span>
                        </div>

                        {/* Transport */}
                        <div className="flex items-center justify-center gap-5">
                          <button
                            onClick={prev}
                            aria-label="Previous track"
                            className="w-11 h-11 rounded-full flex items-center justify-center border transition-transform active:scale-90"
                            style={{ borderColor: "rgba(201,162,39,0.4)", color: "rgba(240,210,122,0.85)" }}
                          >
                            <SkipBack className="w-4 h-4" />
                          </button>
                          <button
                            onClick={togglePlay}
                            aria-label={isPlaying ? "Pause" : "Play"}
                            className="w-14 h-14 rounded-full flex items-center justify-center transition-transform active:scale-90"
                            style={{
                              background: "radial-gradient(circle at 35% 30%, #f5dd9a, #C9A227 65%, #7a5e18)",
                              color: "#0d0d0f",
                              boxShadow: "0 6px 18px rgba(201,162,39,0.4)",
                            }}
                          >
                            {isPlaying ? (
                              <Pause className="w-5 h-5 fill-current" />
                            ) : (
                              <Play className="w-5 h-5 fill-current ml-0.5" />
                            )}
                          </button>
                          <button
                            onClick={next}
                            aria-label="Next track"
                            className="w-11 h-11 rounded-full flex items-center justify-center border transition-transform active:scale-90"
                            style={{ borderColor: "rgba(201,162,39,0.4)", color: "rgba(240,210,122,0.85)" }}
                          >
                            <SkipForward className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Drawer triggers — open the mechanical Song Info /
                            Lyrics panels that slide out from behind the cabinet. */}
                        <div className="flex items-center justify-center gap-3 mt-5">
                          <button
                            onClick={() => setSongInfoOpen((o) => !o)}
                            aria-pressed={songInfoOpen}
                            className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border transition-colors"
                            style={{
                              color: songInfoOpen ? "#1a1206" : "rgba(240,210,122,0.75)",
                              background: songInfoOpen ? "linear-gradient(180deg, #f5dd9a, #C9A227)" : "transparent",
                              borderColor: "rgba(201,162,39,0.4)",
                            }}
                          >
                            <Info className="w-3 h-3" /> Info
                          </button>
                          <button
                            onClick={() => setLyricsOpen((o) => !o)}
                            aria-pressed={lyricsOpen}
                            className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border transition-colors"
                            style={{
                              color: lyricsOpen ? "#1a1206" : "rgba(240,210,122,0.75)",
                              background: lyricsOpen ? "linear-gradient(180deg, #f5dd9a, #C9A227)" : "transparent",
                              borderColor: "rgba(201,162,39,0.4)",
                            }}
                          >
                            <ScrollText className="w-3 h-3" /> Lyrics
                          </button>
                        </div>

                        <audio
                          ref={audioRef}
                          preload="metadata"
                          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                          onEnded={next}
                        >
                          <source src={front.audioSrc} type="audio/mpeg" />
                        </audio>
                      </div>

                      {/* Vertical volume */}
                      <div className="flex flex-col items-center gap-2 pt-6 pb-2 shrink-0">
                        <span className="text-[9px] font-mono" style={{ color: "rgba(201,162,39,0.7)" }}>
                          +
                        </span>
                        <div style={{ height: 110, width: 24, position: "relative" }}>
                          <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            aria-label="Volume"
                            className="jukebox-volume"
                            style={{
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              width: 110,
                              height: 24,
                              transform: "translate(-50%, -50%) rotate(-90deg)",
                            }}
                          />
                        </div>
                        <span className="text-[9px] font-mono" style={{ color: "rgba(201,162,39,0.7)" }}>
                          −
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mechanical selector */}
                  <div className="relative px-5 sm:px-10 pt-6 pb-8">
                    <div
                      className="flex gap-2 sm:gap-3 rounded-xl p-3"
                      style={{ background: "rgba(3,3,4,0.95)", border: "1px solid rgba(201,162,39,0.18)" }}
                    >
                      {/* Number buttons */}
                      <div className="flex flex-col gap-1 shrink-0">
                        {TRACKS.map((t) => {
                          const isTarget = targetIndex === t.n - 1;
                          return (
                            <button
                              key={t.slug}
                              onClick={() => requestSelect(t.n - 1)}
                              aria-label={`Play track ${t.n}: ${t.title}`}
                              aria-pressed={isTarget}
                              className="font-mono text-[11px] font-bold rounded-md transition-transform active:translate-y-[1px] active:scale-[0.96]"
                              style={{
                                height: ITEM_H,
                                width: 40,
                                color: isTarget ? "#1a1206" : "rgba(240,210,122,0.75)",
                                background: isTarget
                                  ? "linear-gradient(180deg, #f5dd9a, #C9A227 60%, #9c7a20)"
                                  : "linear-gradient(180deg, #2a2a2e, #17171a)",
                                border: isTarget ? "1px solid rgba(214,96,143,0.55)" : "1px solid rgba(201,162,39,0.25)",
                                boxShadow: isTarget
                                  ? "0 0 12px rgba(214,96,143,0.45), inset 0 1px 0 rgba(255,255,255,0.3)"
                                  : "inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.4)",
                                transition: "background 300ms ease, box-shadow 300ms ease, color 300ms ease",
                              }}
                            >
                              {String(t.n).padStart(2, "0")}
                            </button>
                          );
                        })}
                      </div>

                      {/* Reel viewport */}
                      <div
                        className="relative flex-1 min-w-0 overflow-hidden rounded-md"
                        style={{
                          height: ITEM_H * VISIBLE,
                          background: "rgba(0,0,0,0.4)",
                          maskImage: "linear-gradient(to bottom, transparent, black 22%, black 78%, transparent)",
                          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 22%, black 78%, transparent)",
                        }}
                      >
                        {/* Center landing frame */}
                        <div
                          className="absolute left-1.5 right-1.5 pointer-events-none rounded"
                          style={{
                            top: Math.floor(VISIBLE / 2) * ITEM_H,
                            height: ITEM_H,
                            border: "1px solid rgba(214,96,143,0.5)",
                            boxShadow: "0 0 10px rgba(214,96,143,0.25) inset",
                            background: "rgba(201,162,39,0.06)",
                          }}
                        />

                        <div
                          style={{
                            transform: `translateY(${-(reelPos * ITEM_H) + Math.floor(VISIBLE / 2) * ITEM_H}px)`,
                            transition: reducedMotion
                              ? `transform ${Math.round(REEL_MS * 0.4)}ms ease`
                              : `transform ${REEL_MS}ms cubic-bezier(0.34,1.56,0.64,1)`,
                          }}
                        >
                          {REEL_ITEMS.map((t, i) => {
                            const dist = Math.abs(i - reelPos);
                            const lit = dist === 0;
                            return (
                              <div
                                key={i}
                                className="flex items-center px-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.12em] whitespace-nowrap overflow-hidden text-ellipsis"
                                style={{
                                  height: ITEM_H,
                                  color: lit ? "#f5dd9a" : "rgba(255,255,255,0.28)",
                                  opacity: dist > 2 ? 0 : 1,
                                  transition: "color 400ms ease, opacity 400ms ease",
                                  textShadow: lit ? "0 0 14px rgba(240,210,122,0.5)" : "none",
                                }}
                              >
                                {String(t.n).padStart(2, "0")} — {t.title}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {wideDrawers && (
              <div className="relative h-full" style={{ zIndex: 1 }}>
                <JukeboxDrawer
                  side="right"
                  label="Lyrics"
                  open={lyricsOpen}
                  mode="desktop"
                  reducedMotion={reducedMotion}
                  accent={doNotDisturbAlbum.accent}
                  onClose={() => setLyricsOpen(false)}
                >
                  {lyricsContent}
                </JukeboxDrawer>
              </div>
            )}
          </div>

          {!wideDrawers && (
            <div className="max-w-[620px] mx-auto mt-5 flex flex-col gap-4">
              <JukeboxDrawer
                side="left"
                label="Song Information"
                open={songInfoOpen}
                mode="mobile"
                reducedMotion={reducedMotion}
                accent={doNotDisturbAlbum.accent}
                onClose={() => setSongInfoOpen(false)}
              >
                {songInfoContent}
              </JukeboxDrawer>
              <JukeboxDrawer
                side="right"
                label="Lyrics"
                open={lyricsOpen}
                mode="mobile"
                reducedMotion={reducedMotion}
                accent={doNotDisturbAlbum.accent}
                onClose={() => setLyricsOpen(false)}
              >
                {lyricsContent}
              </JukeboxDrawer>
            </div>
          )}

          <p
            className="text-center text-sm leading-relaxed mt-8 max-w-[500px] mx-auto"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {doNotDisturbAlbum.description}
          </p>
        </section>
      </main>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
