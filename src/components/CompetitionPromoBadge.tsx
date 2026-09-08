"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "this-is-my-choice-promo-dismissed";
const DISMISS_MS = 3 * 24 * 60 * 60 * 1000;
const SHOW_DELAY_MS = 4000;
const METALLIC_GRADIENT = "linear-gradient(90deg, #C026D3 0%, #7C3AED 35%, #4F46E5 65%, #06B6D4 100%)";

export default function CompetitionPromoBadge() {
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
    <div className="fixed z-[65] left-3 right-3 bottom-3 md:left-auto md:right-6 md:bottom-6 md:w-[360px]">
      <style>{`
        @keyframes choice-promo-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes choice-promo-out { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(16px); } }
        .choice-promo-enter { animation: choice-promo-in 0.36s cubic-bezier(0.19,1,0.22,1) forwards; }
        .choice-promo-exit { animation: choice-promo-out 0.28s cubic-bezier(0.19,1,0.22,1) forwards; }
      `}</style>

      <div
        className={`relative bg-white border border-grid-500 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.2)] rounded-xl p-4 ${closing ? "choice-promo-exit" : "choice-promo-enter"}`}
      >
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute top-2.5 right-2.5 text-muted-2 hover:text-muted transition-colors p-1 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.75}>
            <path d="M1 1l12 12M13 1L1 13" strokeLinecap="round" />
          </svg>
        </button>

        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-2 mb-1.5">
          This Is My Choice · by DJ Andy&apos;K
        </p>

        <p
          className="text-2xl font-bold tracking-tight mb-1"
          style={{
            backgroundImage: METALLIC_GRADIENT,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          5 WINNERS
        </p>

        <p className="text-[13px] text-muted-2 mb-3 leading-snug">
          Post a Reel, win Lifetime Unlimited Access to Andy&apos;K Music Lab.
        </p>

        <a
          href="/this-is-my-choice"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-foreground bg-white border border-grid-500 rounded-lg px-3.5 py-2 hover:border-grid-700 transition-colors"
        >
          Enter now →
        </a>
      </div>
    </div>
  );
}
