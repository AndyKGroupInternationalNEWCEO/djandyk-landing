"use client";

import { useState } from "react";
import SongInfoPanel from "./SongInfoPanel";
import LyricsPanel from "./LyricsPanel";
import SectionTabs from "./SectionTabs";
import type { AudioPlayerControls } from "./AudioPlayer";
import type { Track } from "@/types/album";

// Mobile only: the enlarged artwork already renders above this, in the
// carousel band, so on mobile Song Info / Lyrics simply stack below it as
// two tabs (Song Info first, per spec).
export default function ExpandedTrackOverlay({
  track,
  isVisible,
  reducedMotion,
  player,
}: {
  track: Track;
  isVisible: boolean;
  reducedMotion: boolean;
  player: AudioPlayerControls;
}) {
  const [mobileTab, setMobileTab] = useState<"info" | "lyrics">("info");

  const duration = reducedMotion ? 120 : 900;

  return (
    <div
      className="max-w-[560px] mx-auto px-4 sm:px-6 pb-14"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `transform ${duration}ms cubic-bezier(0.19,1,0.22,1), opacity ${duration}ms cubic-bezier(0.19,1,0.22,1)`,
      }}
    >
      <div className="flex justify-center mb-6">
        <SectionTabs
          accent={track.accent}
          activeTab={mobileTab}
          onTabChange={(id) => setMobileTab(id as "info" | "lyrics")}
          tabs={[
            { id: "info", label: "Song Info" },
            { id: "lyrics", label: "Lyrics" },
          ]}
        />
      </div>
      {mobileTab === "info" ? (
        <SongInfoPanel key={`${track.slug}-info`} track={track} player={player} />
      ) : (
        <div style={{ height: "55dvh" }}>
          <LyricsPanel key={`${track.slug}-lyrics`} track={track} />
        </div>
      )}
    </div>
  );
}
