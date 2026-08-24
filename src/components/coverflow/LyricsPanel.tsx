"use client";

import type { Track } from "@/types/album";

export default function LyricsPanel({ track }: { track: Track }) {
  return (
    <div className="h-full flex flex-col" style={{ ["--scroll-thumb" as string]: track.accent }}>
      <h2 className="flex-shrink-0 text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: track.accent }}>
        Lyrics
      </h2>
      <div
        className="coverflow-scroll flex-1 min-h-0 overflow-y-auto pr-2 rounded-xl p-5"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        {track.lyrics.length > 0 ? (
          track.lyrics.map((stanza, si) => (
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
          ))
        ) : (
          <p className="text-sm font-serif italic" style={{ color: "rgba(255,255,255,0.35)" }}>
            Lyrics coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
