"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "beforeIForgetDismissed";
const DISMISS_MS = 24 * 60 * 60 * 1000;

const PLATFORMS = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/gb/artist/dj-andyk/1835064975",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    ),
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/djandyk_2024",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M1.175 12.225c-.041 0-.082.035-.082.082l-.418 2.385.418 2.349c0 .047.041.082.082.082.042 0 .083-.035.083-.082l.473-2.349-.473-2.385c0-.047-.041-.082-.083-.082zm1.156-.371c-.044 0-.082.038-.082.083l-.363 2.755.363 2.63c0 .045.038.083.082.083.045 0 .082-.038.082-.083l.413-2.63-.413-2.755c0-.045-.037-.083-.082-.083zm1.188-.371c-.051 0-.098.047-.098.099l-.301 3.126.301 2.823c0 .052.047.099.098.099.052 0 .099-.047.099-.099l.341-2.823-.341-3.126c0-.052-.047-.099-.099-.099zm1.204-.148c-.06 0-.109.049-.109.11l-.245 3.274.245 2.956c0 .061.049.11.109.11.061 0 .11-.049.11-.11l.277-2.956-.277-3.274c0-.061-.049-.11-.11-.11zM24 10.234c-.413-3.128-3.048-5.551-6.246-5.551-1.063 0-2.067.269-2.933.733-.394-4.512-4.182-8.03-8.817-8.03-1.226 0-2.395.261-3.439.72C1.048-.285.315.758.191 1.972L.001 12.45l.001.062.001.065c.001.118.097.213.215.213h23.567c.119 0 .215-.096.215-.215v-.002c0-1.173-.001-2.339-.001-2.339z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@djandykofficial",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "TIDAL",
    href: "https://tidal.com/browse/artist/65848653",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996l4.004 4.004 4.004-4.004 4.004 4.004 4.004-4.004L20.02 11.999l3.98-4.003L20.02 3.992l-4.004 4.004zM4.004 12.004L0 16.008l4.004 4.004 4.004-4.004L4.004 12.004zm8.008 0l-4.004 4.004 4.004 4.004 4.004-4.004-4.004-4.004z" />
      </svg>
    ),
  },
  {
    name: "Hyperfollow",
    href: "https://hyperfollow.com/djandyk",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AlbumAnnouncementPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && Date.now() - parseInt(raw, 10) < DISMISS_MS) return;
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setClosing(true);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 320);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <style>{`
        @keyframes bif-slide-up {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes bif-slide-down {
          from { opacity: 1; transform: translateY(0)    scale(1); }
          to   { opacity: 0; transform: translateY(40px) scale(0.96); }
        }
        .bif-enter { animation: bif-slide-up   0.4s cubic-bezier(0.25,0.46,0.45,0.94) forwards; }
        .bif-exit  { animation: bif-slide-down 0.32s cubic-bezier(0.25,0.46,0.45,0.94) forwards; }

        .bif-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.12);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06);
        }
        .dark .bif-card {
          background: rgba(5, 5, 25, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.04);
        }

        .bif-title { color: #111111; }
        .dark .bif-title { color: #ffffff; }

        .bif-genre { color: #333333; }
        .dark .bif-genre { color: rgba(255,255,255,0.65); }

        .bif-quote { color: #333333; }
        .dark .bif-quote { color: rgba(255,255,255,0.55); }

        .bif-close { color: #888888; transition: color 0.2s; }
        .bif-close:hover { color: #222222; }
        .dark .bif-close { color: rgba(255,255,255,0.4); }
        .dark .bif-close:hover { color: #ffffff; }

        .bif-icon { color: #1a1a1a; transition: color 0.2s; }
        .bif-icon:hover { color: #111111; }
        .dark .bif-icon { color: #ffffff; }
        .dark .bif-icon:hover { color: #D9D9D9; }

        .bif-btn {
          background: #111111;
          color: #ffffff;
          border: none;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .bif-btn:hover {
          background: #333333;
          box-shadow: 0 0 24px rgba(0,0,0,0.25);
        }
      `}</style>

      <div
        className={`bif-card rounded-2xl w-full relative ${closing ? "bif-exit" : "bif-enter"}`}
        style={{ maxWidth: "520px", padding: "40px" }}
      >
        {/* Close */}
        <button onClick={dismiss} aria-label="Close" className="bif-close absolute top-5 right-5 p-1">
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M1 1l12 12M13 1L1 13" strokeLinecap="round" />
          </svg>
        </button>

        {/* Kicker */}
        <span
          className="text-[11px] uppercase font-mono block mb-4"
          style={{ color: "#111111", letterSpacing: "0.35em" }}
        >
          🎵 New Album In Progress
        </span>

        {/* Artist */}
        <p
          className="text-[11px] uppercase font-mono mb-2"
          style={{ color: "#111111", letterSpacing: "0.35em" }}
        >
          DJ Andy&apos;K
        </p>

        {/* Album title */}
        <h2
          className="bif-title font-serif italic font-light leading-none mb-4"
          style={{ fontSize: "3rem" }}
        >
          Before I Forget
        </h2>

        {/* Genre & year */}
        <div className="flex items-center gap-3 mb-5">
          <span className="bif-genre text-sm">Trance &amp; Progressive</span>
          <span className="w-px h-3 inline-block" style={{ background: "rgba(0,0,0,0.2)" }} />
          <span className="text-sm font-semibold" style={{ color: "#111111" }}>Summer 2026</span>
        </div>

        {/* Quote */}
        <div className="bif-quote text-sm font-light leading-relaxed mb-7 space-y-2">
          <p>&ldquo;On my way back home, building something special.&rdquo;</p>
          <p>Preparing for Europe — music, energy, and the road ahead.</p>
          <p>Ready for the stage. Stay with love. ♥</p>
        </div>

        {/* Platform icons */}
        <div className="flex items-center gap-5 mb-7">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              className="bif-icon"
            >
              {p.icon}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://hyperfollow.com/djandyk"
          target="_blank"
          rel="noopener noreferrer"
          className="bif-btn block w-full text-center text-sm font-semibold rounded-xl py-3 px-4"
        >
          Stay Tuned — All Platforms
        </a>
      </div>
    </div>
  );
}
