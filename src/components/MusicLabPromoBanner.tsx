"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "andy-k-music-lab-promo-dismissed";
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000;
const SHOW_DELAY_MS = 6000;

export default function MusicLabPromoBanner() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    let raw: string | null = null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* localStorage unavailable — just show it */
    }
    if (raw && Date.now() - parseInt(raw, 10) < DISMISS_MS) return;
    const t = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setClosing(true);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 280);
  }

  if (!visible) return null;

  return (
    <div className="fixed z-[65] left-3 right-3 top-[72px] md:left-6 md:right-auto md:top-auto md:bottom-6 md:w-[380px]">
      <style>{`
        @keyframes lab-promo-in { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes lab-promo-out { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-16px); } }
        @media (min-width: 768px) {
          @keyframes lab-promo-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes lab-promo-out { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(16px); } }
        }
        .lab-promo-enter { animation: lab-promo-in 0.36s cubic-bezier(0.19,1,0.22,1) forwards; }
        .lab-promo-exit { animation: lab-promo-out 0.28s cubic-bezier(0.19,1,0.22,1) forwards; }
      `}</style>

      <div
        className={`bg-white border border-grid-500 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.16)] rounded-xl p-4 flex items-start gap-3 ${closing ? "lab-promo-exit" : "lab-promo-enter"}`}
      >
        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#111111" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={1.75} className="w-4 h-4">
            <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-semibold text-foreground leading-snug">
            Mastered &amp; produced with DJ Andy&apos;K Music Lab
          </p>
          <p className="text-[12px] text-muted-2 mt-1 leading-relaxed">
            The same tool behind every release on this site — now open for your own tracks.
          </p>
          <a
            href="https://lab.djandykofficial.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gradient relative inline-flex items-center gap-1 text-[12px] font-medium text-foreground mt-2.5 px-3.5 py-2 cursor-pointer"
          >
            <span className="relative z-10">Try it out</span>
          </a>
        </div>

        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="flex-shrink-0 text-muted-2 hover:text-muted transition-colors p-1 -mt-1 -mr-1 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.75}>
            <path d="M1 1l12 12M13 1L1 13" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
