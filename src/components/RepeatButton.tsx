"use client";

import { Repeat, Repeat1 } from "lucide-react";

export type RepeatMode = "off" | "all" | "one";

export function nextRepeatMode(mode: RepeatMode): RepeatMode {
  if (mode === "off") return "all";
  if (mode === "all") return "one";
  return "off";
}

const LABELS: Record<RepeatMode, string> = {
  off: "Repeat off — plays the next track once, then stops",
  all: "Repeat all — loops the whole album",
  one: "Repeat one — loops this track",
};

export default function RepeatButton({
  mode,
  onCycle,
  accent,
  inactiveColor = "rgba(255,255,255,0.35)",
  size = 14,
}: {
  mode: RepeatMode;
  onCycle: () => void;
  accent: string;
  inactiveColor?: string;
  size?: number;
}) {
  const active = mode !== "off";
  return (
    <button
      onClick={onCycle}
      aria-label={LABELS[mode]}
      title={LABELS[mode]}
      className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 transition-colors"
      style={{
        color: active ? accent : inactiveColor,
        background: active ? `color-mix(in srgb, ${accent} 14%, transparent)` : "transparent",
      }}
    >
      {mode === "one" ? <Repeat1 size={size} /> : <Repeat size={size} />}
    </button>
  );
}
