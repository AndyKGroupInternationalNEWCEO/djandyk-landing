"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import type { Track } from "@/types/album";
import RepeatButton, { type RepeatMode } from "@/components/RepeatButton";

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export interface AudioPlayerControls {
  isActive: boolean;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  repeatMode: RepeatMode;
  onCycleRepeat: () => void;
}

/**
 * Purely presentational — playback itself lives in one shared <audio>
 * element owned by CoverFlow, so a track keeps playing (as a mini player)
 * when you navigate away instead of stopping. `isActive` tells this
 * instance whether it's the track currently loaded into that shared player.
 */
export default function AudioPlayer({
  track,
  isActive,
  isPlaying,
  currentTime,
  duration,
  volume,
  onTogglePlay,
  onSeek,
  onVolumeChange,
  repeatMode,
  onCycleRepeat,
}: { track: Track } & AudioPlayerControls) {
  if (!track.audioSrc) return null;

  const shownTime = isActive ? currentTime : 0;
  const shownDuration = isActive && duration ? duration : track.durationSeconds ?? 0;
  const shownPlaying = isActive && isPlaying;

  return (
    <div
      className="rounded-xl p-4"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex items-center gap-3 flex-wrap">
        <button
          onClick={onTogglePlay}
          aria-label={shownPlaying ? "Pause" : "Play"}
          className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 transition-transform hover:scale-105"
          style={{ background: track.accent, color: "#111111" }}
        >
          {shownPlaying ? (
            <Pause size={16} fill="currentColor" />
          ) : (
            <Play size={16} fill="currentColor" style={{ marginLeft: 2 }} />
          )}
        </button>

        <span className="text-[11px] font-mono w-9 text-right" style={{ color: "rgba(255,255,255,0.4)" }}>
          {formatTime(shownTime)}
        </span>

        <input
          type="range"
          min={0}
          max={shownDuration || 0}
          step={0.1}
          value={shownTime}
          onChange={(e) => onSeek(Number(e.target.value))}
          disabled={!isActive}
          aria-label="Seek"
          className="flex-1 h-1 rounded-full appearance-none cursor-pointer min-w-[80px] disabled:cursor-default disabled:opacity-50"
          style={{ accentColor: track.accent }}
        />

        <span className="text-[11px] font-mono w-9" style={{ color: "rgba(255,255,255,0.4)" }}>
          {formatTime(shownDuration)}
        </span>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          {volume === 0 ? (
            <VolumeX size={14} color="rgba(255,255,255,0.4)" />
          ) : (
            <Volume2 size={14} color="rgba(255,255,255,0.4)" />
          )}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            aria-label="Volume"
            className="w-16 h-1 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: track.accent }}
          />
        </div>

        <RepeatButton mode={repeatMode} onCycle={onCycleRepeat} accent={track.accent} />
      </div>
    </div>
  );
}
