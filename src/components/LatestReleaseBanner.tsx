"use client";

import { useState, useEffect } from "react";
import { LATEST_RELEASES } from "@/lib/data";

export default function LatestReleaseBanner() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % LATEST_RELEASES.length);
        setVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const release = LATEST_RELEASES[idx];

  function getReleaseLabel(): string {
    return "Out Now";
  }

  return (
    <div className="w-full bg-highlight px-4 py-2.5">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
        <div
          className="flex items-center gap-3 min-w-0 transition-opacity duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <div className="w-8 h-8 rounded overflow-hidden shrink-0">
            <img
              src={release.coverUrl}
              alt={release.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-mono block leading-tight">
              {release.type} · {getReleaseLabel()}
            </span>
            <span className="text-sm font-semibold text-white truncate block leading-tight">
              {release.title}
            </span>
          </div>
        </div>

        <a
          href={release.spotifyUrl}
          {...(release.spotifyUrl.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors px-3 py-1.5 rounded"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 300ms" }}
        >
          {release.spotifyUrl.startsWith("/") ? "View Album" : "Listen Now"}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </div>
  );
}
