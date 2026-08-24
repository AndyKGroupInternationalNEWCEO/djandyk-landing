"use client";

import type { Track } from "@/types/album";

interface Props {
  track: Track;
  offset: number;
  spacing: number;
  depth: number;
  angle: number;
  size: number;
  reducedMotion: boolean;
  onSelect: () => void;
}

export default function CoverFlowSlide({
  track,
  offset,
  spacing,
  depth,
  angle,
  size,
  reducedMotion,
  onSelect,
}: Props) {
  const abs = Math.abs(offset);
  const isActive = offset === 0;
  const visible = abs <= 4;
  const sign = offset === 0 ? 0 : offset > 0 ? 1 : -1;

  const transform = `translate(-50%, -50%) translateX(${offset * spacing}px) translateZ(${-abs * depth}px) rotateY(${-sign * angle}deg) scale(${isActive ? 1 : 0.72})`;
  const duration = reducedMotion ? 120 : 900;
  const timing = reducedMotion ? "linear" : "cubic-bezier(0.19,1,0.22,1)";

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: size,
        height: size,
        transform,
        transition: `transform ${duration}ms ${timing}, opacity ${duration}ms ${timing}`,
        opacity: visible ? (isActive ? 1 : Math.max(0.22, 1 - abs * 0.22)) : 0,
        zIndex: 100 - abs,
        pointerEvents: visible ? "auto" : "none",
        transformStyle: "preserve-3d",
        cursor: "pointer",
      }}
      onClick={onSelect}
      role="button"
      aria-label={isActive ? `Open ${track.title}` : `View ${track.title}`}
    >
      <div
        className="relative w-full h-full rounded-lg overflow-hidden bg-black"
        style={{
          boxShadow: isActive
            ? `0 30px 60px -15px rgba(0,0,0,0.7), 0 0 40px ${track.accent}30`
            : "0 20px 40px -10px rgba(0,0,0,0.6)",
        }}
      >
        {isActive && track.videoUrl ? (
          <video
            src={track.videoUrl}
            poster={track.coverUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        ) : (
          <img src={track.coverUrl} alt={track.title} className="w-full h-full object-contain" draggable={false} />
        )}
      </div>

      {/* Reflection — pure CSS, no extra assets, doesn't touch the artwork itself */}
      {abs <= 2 && (
        <div
          className="absolute left-0 w-full overflow-hidden rounded-lg bg-black"
          aria-hidden="true"
          style={{
            top: "100%",
            height: "55%",
            transform: "scaleY(-1)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent 75%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent 75%)",
            opacity: 0.4,
          }}
        >
          <img src={track.coverUrl} alt="" className="w-full h-full object-contain" draggable={false} />
        </div>
      )}
    </div>
  );
}
