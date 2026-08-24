"use client";

import { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import type { Track } from "@/types/album";

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// Mounted fresh per track (a new page route), so state only ever needs to
// initialize once — no effect required to reset it on track change.
export default function AudioPlayer({ track }: { track: Track }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(track.durationSeconds ?? 0);
  const [volume, setVolume] = useState(1);

  if (!track.audioSrc) return null;

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        /* playback was interrupted (e.g. navigated away) — ignore */
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const t = Number(e.target.value);
    if (audio) audio.currentTime = t;
    setCurrentTime(t);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div
      className="rounded-xl p-4"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <audio
        ref={audioRef}
        src={track.audioSrc}
        preload="metadata"
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="flex items-center gap-3 flex-wrap">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 transition-transform hover:scale-105"
          style={{ background: track.accent, color: "#111111" }}
        >
          {isPlaying ? (
            <Pause size={16} fill="currentColor" />
          ) : (
            <Play size={16} fill="currentColor" style={{ marginLeft: 2 }} />
          )}
        </button>

        <span className="text-[11px] font-mono w-9 text-right" style={{ color: "rgba(255,255,255,0.4)" }}>
          {formatTime(currentTime)}
        </span>

        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={handleSeek}
          aria-label="Seek"
          className="flex-1 h-1 rounded-full appearance-none cursor-pointer min-w-[80px]"
          style={{ accentColor: track.accent }}
        />

        <span className="text-[11px] font-mono w-9" style={{ color: "rgba(255,255,255,0.4)" }}>
          {formatTime(duration)}
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
            onChange={handleVolume}
            aria-label="Volume"
            className="w-16 h-1 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: track.accent }}
          />
        </div>
      </div>
    </div>
  );
}
