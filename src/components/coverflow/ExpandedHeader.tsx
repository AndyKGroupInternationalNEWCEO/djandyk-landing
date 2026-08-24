"use client";

import { X } from "lucide-react";
import type { Track } from "@/types/album";

export default function ExpandedHeader({
  track,
  isVisible,
  reducedMotion,
  onClose,
  onPrev,
  onNext,
}: {
  track: Track;
  isVisible: boolean;
  reducedMotion: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const duration = reducedMotion ? 120 : 900;

  return (
    <div
      className="relative z-30 px-4 sm:px-6 pt-8 transition-opacity"
      style={{ opacity: isVisible ? 1 : 0, transitionDuration: `${duration}ms` }}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto mb-4">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-opacity hover:opacity-70"
          style={{ color: "rgba(255,255,255,0.6)" }}
          aria-label="Close and back to Cover Flow"
        >
          <X size={14} />
          Back to Cover Flow
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onPrev}
            className="text-xs font-mono uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            ← Previous
          </button>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>/</span>
          <button
            onClick={onNext}
            className="text-xs font-mono uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Next →
          </button>
        </div>
      </div>

      <div className="text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: `${track.accent}CC` }}>
          {String(track.n).padStart(2, "0")} · {track.from}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1" style={{ color: "#ffffff" }}>
          {track.title}
        </h3>
      </div>
    </div>
  );
}
