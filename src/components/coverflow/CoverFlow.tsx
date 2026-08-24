"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Album, Track } from "@/types/album";
import CoverFlowSlide from "./CoverFlowSlide";

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

export default function CoverFlow({ album }: { album: Album }) {
  const router = useRouter();
  const tracks = album.tracks;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNarrow, setIsNarrow] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const isAnimatingRef = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Restore the last-viewed track when returning from a detail page
  useEffect(() => {
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
    const mqNarrow = window.matchMedia("(max-width: 640px)");
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

  const goTo = useCallback(
    (index: number) => {
      if (isAnimatingRef.current) return;
      const clamped = Math.max(0, Math.min(tracks.length - 1, index));
      setActiveIndex((current) => {
        if (clamped === current) return current;
        isAnimatingRef.current = true;
        window.setTimeout(() => {
          isAnimatingRef.current = false;
        }, reducedMotion ? 150 : TRANSITION_MS);
        return clamped;
      });
    },
    [tracks.length, reducedMotion]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
      else if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, goTo]);

  // Native (non-passive) wheel listener so we can capture wheel/trackpad input
  // to browse tracks while hovering the carousel.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta > 12) goTo(activeIndex + 1);
      else if (delta < -12) goTo(activeIndex - 1);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [activeIndex, goTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = (e.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    if (delta < -40) goTo(activeIndex + 1);
    else if (delta > 40) goTo(activeIndex - 1);
    touchStartX.current = null;
  };

  const openTrack = (track: Track) => {
    try {
      sessionStorage.setItem(`${album.slug}:lastTrack`, track.slug);
    } catch {
      /* ignore */
    }
    router.push(`/${album.slug}/${track.slug}`);
  };

  const active = tracks[activeIndex];
  const spacing = isNarrow ? SPACING_MOBILE : SPACING_DESKTOP;
  const size = isNarrow ? SIZE_MOBILE : SIZE_DESKTOP;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden select-none"
      style={{ background: "linear-gradient(180deg, #0a0806 0%, #1c1208 55%, #0a0806 100%)" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-label="Interactive album track carousel — use arrow keys, scroll, or swipe to browse"
      aria-roledescription="carousel"
    >
      {/* Gold fog */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(232,176,32,0.09), transparent 70%)" }}
      />

      {/* Minimal gold particles */}
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
                background: "#E8B020",
                opacity: p.opacity,
                animationDelay: p.delay,
                "--particle-opacity": p.opacity,
              } as React.CSSProperties
            }
          />
        ))}

      <div className="relative z-10 text-center pt-14 pb-4 px-6">
        <span
          className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] px-3 py-1 rounded-full border"
          style={{ color: album.accent, borderColor: `${album.accent}55`, background: "rgba(0,0,0,0.4)" }}
        >
          Cover Flow
        </span>
      </div>

      <div
        className="relative flex items-center justify-center"
        style={{ height: isNarrow ? 340 : 520, perspective: 1400 }}
      >
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
            onSelect={() => (i === activeIndex ? openTrack(track) : goTo(i))}
          />
        ))}
      </div>

      <div className="relative z-10 text-center pt-6 pb-16 px-6">
        <p className="text-xs font-mono uppercase tracking-[0.3em] mb-2" style={{ color: `${album.accent}CC` }}>
          {String(active.n).padStart(2, "0")} · {active.from}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6" style={{ color: "#ffffff" }}>
          {active.title}
        </h3>
        <button
          onClick={() => openTrack(active)}
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: album.accent, color: "#111111" }}
        >
          Open Track
        </button>
      </div>
    </section>
  );
}
