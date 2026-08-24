"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/coverflow/AudioPlayer";
import SectionTabs from "@/components/coverflow/SectionTabs";
import type { Album, Track } from "@/types/album";

function formatDuration(seconds?: number) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function TrackDetailClient({
  album,
  track,
  prevTrack,
  nextTrack,
}: {
  album: Album;
  track: Track;
  prevTrack: Track;
  nextTrack: Track;
}) {
  const [tab, setTab] = useState<"lyrics" | "info">("lyrics");

  useEffect(() => {
    try {
      sessionStorage.setItem(`${album.slug}:lastTrack`, track.slug);
    } catch {
      /* ignore */
    }
  }, [album.slug, track.slug]);

  const infoRows: { label: string; value: string }[] = [];
  if (track.bpm) infoRows.push({ label: "BPM", value: String(track.bpm) });
  if (track.key) infoRows.push({ label: "Key", value: track.key });
  const dur = formatDuration(track.durationSeconds);
  if (dur) infoRows.push({ label: "Duration", value: dur });
  if (track.genre) {
    infoRows.push({
      label: "Genre",
      value: track.subgenre ? `${track.genre} · ${track.subgenre}` : track.genre,
    });
  }
  if (track.releaseDate) infoRows.push({ label: "Release Date", value: track.releaseDate });
  if (track.vocal) infoRows.push({ label: "Vocal", value: track.vocal });
  if (track.instruments?.length) infoRows.push({ label: "Instruments", value: track.instruments.join(", ") });
  if (track.mood) infoRows.push({ label: "Mood", value: track.mood });

  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Header strip */}
        <div className="px-6 pt-8 pb-4 max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <Link
            href={`/${album.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{ color: track.accent }}
          >
            ← Back to Album
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href={`/${album.slug}/${prevTrack.slug}`}
              className="text-xs font-mono uppercase tracking-widest transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              ← Previous Track
            </Link>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>/</span>
            <Link
              href={`/${album.slug}/${nextTrack.slug}`}
              className="text-xs font-mono uppercase tracking-widest transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Next Track →
            </Link>
          </div>
        </div>

        {/* Track title block */}
        <div className="px-6 pb-8 max-w-[1200px] mx-auto text-center sm:text-left">
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: track.accent }}>
            {String(track.n).padStart(2, "0")} · {track.from}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1" style={{ color: "#ffffff" }}>
            {track.title}
          </h1>
        </div>

        {/* Mobile Lyrics/Song-Info tabs */}
        <div className="px-6 mb-6 md:hidden flex justify-center">
          <SectionTabs
            accent={track.accent}
            activeTab={tab}
            onTabChange={(id) => setTab(id as "lyrics" | "info")}
            tabs={[
              { id: "lyrics", label: "Lyrics" },
              { id: "info", label: "Song Info" },
            ]}
          />
        </div>

        {/* Content grid — side by side on desktop, tab-gated on mobile */}
        <div className="px-6 pb-20 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10">
          {/* LYRICS */}
          <div className={tab === "lyrics" ? "block" : "hidden md:block"}>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: track.accent }}>
              Lyrics
            </h2>
            <div
              className="max-h-[70vh] overflow-y-auto pr-2 rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {track.lyrics.map((stanza, si) => (
                <div key={si} style={{ marginBottom: si < track.lyrics.length - 1 ? "1.1rem" : 0 }}>
                  {stanza.map((line, li) => {
                    const isTag = li === 0 && /^\[.*\]$/.test(line);
                    return (
                      <p
                        key={li}
                        className={
                          isTag
                            ? "text-xs font-mono font-semibold uppercase tracking-wide mb-1"
                            : "text-sm leading-relaxed font-serif"
                        }
                        style={{ color: isTag ? track.accent : "rgba(255,255,255,0.65)" }}
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* SONG INFORMATION */}
          <div className={tab === "info" ? "block" : "hidden md:block"}>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: track.accent }}>
              Song Information
            </h2>

            <div
              className="rounded-xl overflow-hidden mb-5 aspect-square max-w-[220px]"
              style={{ border: `1px solid ${track.accent}40` }}
            >
              <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
            </div>

            {track.audioSrc && (
              <div className="mb-5">
                <AudioPlayer track={track} />
              </div>
            )}

            {track.story && (
              <p
                className="text-sm leading-relaxed italic font-serif mb-5"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {track.story}
              </p>
            )}

            <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Producer
                </dt>
                <dd className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  DJ Andy&apos;K
                </dd>
              </div>
              {infoRows.map((row) => (
                <div key={row.label}>
                  <dt className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {row.label}
                  </dt>
                  <dd className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
