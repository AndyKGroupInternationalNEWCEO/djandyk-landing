"use client";

import type { Track } from "@/types/album";

export type ExpandState = "none" | "focus" | "background";

interface Props {
  track: Track;
  offset: number;
  spacing: number;
  depth: number;
  angle: number;
  size: number;
  reducedMotion: boolean;
  isNarrow: boolean;
  expandState: ExpandState;
  isExpanding: boolean;
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
  isNarrow,
  expandState,
  isExpanding,
  onSelect,
}: Props) {
  const abs = Math.abs(offset);
  const isActive = offset === 0;
  // Fewer background covers stay painted once a track is expanded — keeps
  // the receded stack tight and avoids any stray 3D-transformed cover
  // rendering out past its intended band. On narrow (touch) viewports we
  // also cap how many neighboring covers stay mounted at all: each one is a
  // 3D-transformed, animating layer, and swiping was visibly janky on phones
  // with the full 9-wide stack — fewer simultaneous layers keeps the swipe
  // transition smooth without changing how it looks on desktop.
  const maxAbs = isNarrow ? 2 : 4;
  const visible = expandState === "background" && isExpanding ? abs <= Math.min(2, maxAbs) : abs <= maxAbs;
  const sign = offset === 0 ? 0 : offset > 0 ? 1 : -1;

  // "focus" = this is the artwork being pulled forward toward the viewer.
  // "background" = every other artwork, receding further and dimming while
  // a track is expanded. Both only take effect once `isExpanding` has
  // flipped true, so the expand/collapse itself still animates through the
  // same base offset transform first.
  const isFocusBoosted = expandState === "focus" && isExpanding;
  const isReceded = expandState === "background" && isExpanding;

  const extraTranslateX = isReceded ? offset * spacing * 0.6 : 0;
  const extraDepth = isReceded ? 220 : 0;
  const focusTranslateZ = isFocusBoosted ? 260 : 0;
  const scale = isFocusBoosted ? 1.45 : isActive ? 1 : isReceded ? 0.6 : 0.72;

  const transform = `translate(-50%, -50%) translateX(${(offset * spacing + extraTranslateX).toFixed(1)}px) translateZ(${(focusTranslateZ - abs * depth - extraDepth).toFixed(1)}px) rotateY(${(-sign * angle).toFixed(1)}deg) scale(${scale})`;

  const duration = reducedMotion ? 120 : 900;
  const timing = reducedMotion ? "linear" : "cubic-bezier(0.19,1,0.22,1)";

  let opacity = visible ? (isActive ? 1 : Math.max(0.22, 1 - abs * 0.22)) : 0;
  if (isReceded) opacity *= 0.3;
  if (isFocusBoosted) opacity = 1;

  // Only the focused artwork (or, when nothing is expanded, any visible
  // slide) responds to clicks — receded background covers step out of the
  // way while a track is open.
  const interactive = expandState === "none" ? visible : expandState === "focus";

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: size,
        height: size,
        transform,
        transition: `transform ${duration}ms ${timing}, opacity ${duration}ms ${timing}, filter ${duration}ms ${timing}`,
        opacity,
        filter: isReceded ? "blur(1.5px) brightness(0.45)" : "none",
        zIndex: isFocusBoosted ? 200 : 100 - abs,
        pointerEvents: interactive ? "auto" : "none",
        transformStyle: "preserve-3d",
        cursor: expandState === "focus" ? "default" : "pointer",
      }}
      onClick={interactive ? onSelect : undefined}
      role="button"
      aria-label={isActive ? `Open ${track.title}` : `View ${track.title}`}
    >
      <div
        className="relative w-full h-full rounded-lg overflow-hidden bg-black"
        style={{
          boxShadow: isFocusBoosted
            ? `0 50px 100px -20px rgba(0,0,0,0.8), 0 0 70px ${track.accent}40`
            : isActive
            ? `0 30px 60px -15px rgba(0,0,0,0.7), 0 0 40px ${track.accent}30`
            : "0 20px 40px -10px rgba(0,0,0,0.6)",
        }}
      >
        {(isActive || isFocusBoosted) && track.videoUrl ? (
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

      {/* Reflection — pure CSS, no extra assets, doesn't touch the artwork itself.
          Skipped on narrow/touch viewports: it's decorative only, and doubles
          the number of animating image layers during a swipe. */}
      {!isNarrow && abs <= 2 && !isFocusBoosted && (
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
