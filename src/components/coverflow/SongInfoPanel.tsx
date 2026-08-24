"use client";

import AudioPlayer, { type AudioPlayerControls } from "./AudioPlayer";
import type { Track } from "@/types/album";

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
  stickyHeading = false,
}: {
  track: Track;
  player: AudioPlayerControls;
  stickyHeading?: boolean;
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
    <div>
      <h2
        className={
          stickyHeading
            ? "sticky top-0 z-10 text-xs font-mono uppercase tracking-[0.3em] mb-4 py-2 -mt-2"
            : "text-xs font-mono uppercase tracking-[0.3em] mb-4"
        }
        style={{ color: track.accent, background: stickyHeading ? "#060606" : undefined }}
      >
        Song Information
      </h2>

      {track.audioSrc && (
        <div className="mb-5">
          <AudioPlayer track={track} {...player} />
        </div>
      )}

      {track.story && (
        <p className="text-sm leading-relaxed italic font-serif mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
          {track.story}
        </p>
      )}

      {/* Streaming platforms — links go live once each track is released */}
      <div className="flex flex-wrap gap-2 mb-6">
        {PLATFORMS.map((name) => (
          <span
            key={name}
            className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors"
            style={{ color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.15)" }}
          >
            {name}
          </span>
        ))}
      </div>

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
  );
}
