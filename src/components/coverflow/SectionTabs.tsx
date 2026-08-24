"use client";

import { useEffect, useRef, useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  accent: string;
}

/**
 * Dark/gold-styled tab switcher for the track detail page (mobile
 * Lyrics/Song-Info toggle). Not the shared `TabSwitcher` component — that
 * one's classes are hardcoded to the site's light theme and would clash
 * with this album's dark obsidian/gold palette.
 */
export default function SectionTabs({ tabs, activeTab, onTabChange, accent }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const update = () => {
      const el = containerRef.current?.querySelector<HTMLElement>(`[data-tab-id="${activeTab}"]`);
      const container = containerRef.current;
      if (el && container) {
        const containerRect = container.getBoundingClientRect();
        const rect = el.getBoundingClientRect();
        setIndicator({ left: rect.left - containerRect.left, width: rect.width });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeTab, tabs]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex rounded-full p-1"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div
        className="absolute top-1 bottom-1 rounded-full transition-all duration-300"
        style={{ left: indicator.left, width: indicator.width, background: accent }}
      />
      {tabs.map((tab) => (
        <button
          key={tab.id}
          data-tab-id={tab.id}
          onClick={() => onTabChange(tab.id)}
          className="relative z-10 px-5 py-2 text-xs font-mono uppercase tracking-widest rounded-full transition-colors duration-300"
          style={{ color: activeTab === tab.id ? "#111111" : "rgba(255,255,255,0.6)" }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
