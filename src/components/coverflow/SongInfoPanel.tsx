"use client";

import AudioPlayer, { type AudioPlayerControls } from "./AudioPlayer";
import type { Track } from "@/types/album";
import GlowWords from "./GlowWords";

function formatDuration(seconds?: number) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const PLATFORMS = ["Spotify", "Apple Music", "TIDAL", "YouTube", "Beatport"];

export default function SongInfoPanel({
  track,
  player,
  sheetPdf,
}: {
  track: Track;
  player: AudioPlayerControls;
  /** Downloadable song sheet (info, chords, lyrics) — shown as a button when set. */
  sheetPdf?: string;
}) {
  const infoRows: { label: string; value: string }[] = [];
  if (track.bpm) infoRows.push({ label: "BPM", value: String(track.bpm) });
  if (track.key) infoRows.push({ label: "Key", value: track.key });
  if (track.chords) infoRows.push({ label: "Chord Progression", value: track.chords });
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
    <div style={{ ["--accent" as string]: track.accent }}>
      <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: track.accent }}>
        Song Information
      </h2>

      {track.audioSrc && (
        <div className="mb-5">
          <AudioPlayer track={track} {...player} />
        </div>
      )}

      {track.youtubeUrl && (
        <div className="mb-1 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <iframe
            src={track.youtubeUrl}
            width="100%"
            height="200"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            style={{ display: "block" }}
            title={`${track.title} — official video`}
          />
        </div>
      )}
      {track.youtubeUrl && track.videoCredit && (
        <p className="text-[11px] font-mono mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
          {track.videoCredit}
        </p>
      )}

      {track.story && (
        <p className="cf-line text-sm leading-relaxed italic font-serif mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
          <GlowWords text={track.story} />
        </p>
      )}

      {sheetPdf && (
        <a
          href={sheetPdf}
          download
          className="cf-download group mb-6 flex items-center gap-3 rounded-xl px-4 py-3 transition-all"
          style={{ background: `${track.accent}12`, border: `1px solid ${track.accent}44` }}
        >
          <span
            className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-transform group-hover:-translate-y-0.5"
            style={{ background: track.accent, color: "#111111" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold" style={{ color: "#ffffff" }}>
              Download Song Sheet
            </span>
            <span className="block text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
              PDF · Info · Chords · Lyrics
            </span>
          </span>
        </a>
      )}

      {/* Streaming platforms — links go live once each track is released */}
      <div className="flex flex-wrap gap-2 mb-6">
        {PLATFORMS.map((name) => (
          <span
            key={name}
            className="cf-chip text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors"
            style={{ color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.15)" }}
          >
            {name}
          </span>
        ))}
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
        <div className="cf-info">
          <dt className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
            Producer
          </dt>
          <dd className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
            DJ Andy&apos;K
          </dd>
        </div>
        {infoRows.map((row) => (
          <div key={row.label} className="cf-info">
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
  );
}
