"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CoverFlow from "./CoverFlow";
import SectionTabs from "./SectionTabs";
import type { Album, Track } from "@/types/album";

// The standard album tracks section (first built for Wavelength Traces):
// Cover Flow / Track Overview toggle, glow effects, song sheet downloads and
// tilt + glow track cards. Colors always come from the album and its tracks,
// so every album keeps its own look.

export type TrackLink = { label: string; href: string };

function TrackCard({
  albumSlug,
  track,
  links,
}: {
  albumSlug: string;
  track: Track;
  links: TrackLink[];
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const isOut = track.releaseDate
    ? new Date(track.releaseDate) <= new Date()
    : false;
  const href = `/${albumSlug}/${track.slug}`;

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = innerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${((px + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${((py + 0.5) * 100).toFixed(1)}%`);
  };

  const resetTilt = () => {
    const el = innerRef.current;
    if (el) el.style.transform = "";
  };

  return (
    <div className="card-glow w-full h-full" style={{ color: track.accent }}>
      <div
        ref={innerRef}
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
        className="card-glow-inner glow-spot rounded-2xl overflow-hidden h-full"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderTop: `2px solid ${track.accent}`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <Link
          href={href}
          className="aspect-square w-full relative overflow-hidden block"
        >
          <img
            src={track.coverUrl}
            alt={track.title}
            className="glow-zoom w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-start justify-start p-3">
            <span
              className="text-[9px] font-mono uppercase tracking-[0.3em] px-2.5 py-1 rounded-full border"
              style={{
                color: isOut ? track.accent : "rgba(255,255,255,0.4)",
                borderColor: isOut
                  ? `${track.accent}66`
                  : "rgba(255,255,255,0.15)",
                background: "rgba(0,0,0,0.6)",
              }}
            >
              {isOut ? "Out Now" : "Coming Soon"}
            </span>
          </div>
        </Link>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-mono font-semibold"
              style={{ color: track.accent }}
            >
              {String(track.n).padStart(2, "0")}
            </span>
            <span
              className="text-xs font-mono"
              style={{ color: "rgba(255,255,255,0.12)" }}
            >
              /
            </span>
            <span
              className="text-xs font-mono uppercase tracking-widest min-w-0 truncate"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {track.from}
            </span>
          </div>

          <h3
            className="text-lg font-bold tracking-tight mb-1 leading-snug font-sans"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {track.title}
          </h3>

          <p
            className="text-[11px] font-mono uppercase tracking-widest mb-2"
            style={{ color: isOut ? track.accent : "rgba(255,255,255,0.25)" }}
          >
            {isOut
              ? "Released"
              : track.releaseDate
                ? `Release · ${track.releaseDate}`
                : "Release · TBA"}
          </p>

          {track.story && (
            <p
              className="story-glow text-sm leading-relaxed mb-3 font-serif italic line-clamp-4"
              style={
                {
                  color: "rgba(255,255,255,0.5)",
                  "--accent": track.accent,
                } as React.CSSProperties
              }
            >
              {track.story}
            </p>
          )}

          <Link
            href={href}
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest mb-3 py-1.5 transition-opacity hover:opacity-70 w-fit"
            style={{ color: track.accent }}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-3 h-3"
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
            Open Track
          </Link>

          <div className="flex gap-2 flex-wrap">
            {links.length > 0 ? (
              links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cf-chip text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-colors"
                  style={{
                    color: track.accent,
                    borderColor: `${track.accent}55`,
                    ["--accent" as string]: track.accent,
                  }}
                >
                  {l.label}
                </a>
              ))
            ) : (
              <span
                className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
                style={{
                  color: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
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

export default function AlbumTracks({
  album,
  initialSlug,
  background,
  trackLinks,
  columns = 4,
  id = "tracks",
}: {
  album: Album;
  initialSlug?: string;
  /** Section background — use the album page's own background color. */
  background: string;
  /** Optional per-track streaming links (e.g. SoundCloud, Spotify) for the overview cards. */
  trackLinks?: (track: Track) => TrackLink[];
  /** Cards per row on desktop. */
  columns?: 4 | 5;
  /** Anchor id for in-page links (e.g. the hero's "Listen" button). */
  id?: string;
}) {
  const [viewMode, setViewMode] = useState<"coverflow" | "overview">(
    "coverflow",
  );
  // A single-track release has nothing to overview — Cover Flow only.
  const hasOverview = album.tracks.length > 1;

  return (
    <div id={id} className="cf-glow" style={{ background }}>
      {hasOverview && (
        <div className="flex justify-center pt-14 pb-8 px-6">
          <SectionTabs
            accent={album.accent}
            activeTab={viewMode}
            onTabChange={(id) => setViewMode(id as "coverflow" | "overview")}
            tabs={[
              { id: "coverflow", label: "Cover Flow" },
              { id: "overview", label: "Track Overview" },
            ]}
          />
        </div>
      )}

      {viewMode === "coverflow" || !hasOverview ? (
        <CoverFlow album={album} initialSlug={initialSlug} glow songSheets />
      ) : (
        <section className="pt-0 pb-12 px-6 max-w-[1400px] mx-auto">
          <ScrollReveal stagger className="flex flex-wrap justify-center gap-6">
            {album.tracks.map((track) => (
              <div
                key={track.slug}
                className={`w-full sm:w-[calc(50%-12px)] ${columns === 5 ? "lg:w-[calc(20%-19.2px)]" : "lg:w-[calc(25%-18px)]"}`}
              >
                <TrackCard
                  albumSlug={album.slug}
                  track={track}
                  links={trackLinks?.(track) ?? []}
                />
              </div>
            ))}
          </ScrollReveal>
        </section>
      )}
    </div>
  );
}

/** SoundCloud / Spotify links from an album page's own track list, when present. */
export function streamingLinks(src?: {
  soundcloudUrl?: string | null;
  spotifyUrl?: string | null;
}): TrackLink[] {
  const links: TrackLink[] = [];
  if (src?.soundcloudUrl)
    links.push({ label: "SoundCloud", href: src.soundcloudUrl });
  if (src?.spotifyUrl) links.push({ label: "Spotify", href: src.spotifyUrl });
  return links;
}
