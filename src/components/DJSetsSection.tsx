"use client";

import { useRef, useState } from "react";
import { COMPANY } from "@/lib/data";

type DJSet = {
  year: string;
  title: string;
  url: string;
  /** Private (unlisted) SoundCloud tracks need the secret token in the embed. */
  secretToken?: string;
};

const DJ_SETS: DJSet[] = [
  {
    year: "2026",
    title: "Silence for Crazy Bitches – Tribal Mix 2026",
    url: "https://soundcloud.com/djandyk_2024/dj-andyk-silence-for-crazy",
  },
  {
    year: "2026",
    title: "Borrowed Sunshine – A State of Summer 2026",
    url: "https://soundcloud.com/djandyk_2024/dj-andy_k-borrowed-sunshine-a",
  },
  {
    year: "2026",
    title: "A State of Summer – Frequency Exclusive",
    url: "https://api.soundcloud.com/tracks/2414181120",
    secretToken: "s-z7rGpDL4B3L",
  },
  {
    year: "2026",
    title: "The European Summer 2026",
    url: "https://soundcloud.com/djandyk_2024/the-european-summer-2026",
  },
  {
    year: "2026",
    title: "New Year House Signals (2026 Mix)",
    url: "https://soundcloud.com/djandyk_2024/new-year-house-signals-2026-mix",
  },
  {
    year: "2025",
    title: "MAMBA – House Session 2025",
    url: "https://soundcloud.com/djandyk_2024/house-session-2025",
  },
  {
    year: "2024",
    title: "New Era 2024",
    url: "https://soundcloud.com/djandyk_2024/sets/new-era-2024-by-dj-andyk",
  },
  {
    year: "2024",
    title: "House 2024",
    url: "https://soundcloud.com/djandykofficial/dj-andyk-house-2024",
  },
  {
    year: "2024",
    title: "Trance 2024",
    url: "https://soundcloud.com/djandykofficial/dj-andyk-trance-2024",
  },
  {
    year: "2023",
    title: "Sky 2023",
    url: "https://soundcloud.com/djandyk_2024/sets/sky-2023",
  },
];

const BAR_HEIGHTS = [12, 20, 24, 16, 10];
const BAR_DELAYS = ["0s", "0.1s", "0.2s", "0.3s", "0.4s"];

function Waveform({ fast }: { fast: boolean }) {
  return (
    <div className="flex items-end gap-[3px] h-6 mt-2">
      {BAR_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="waveform-bar inline-block rounded-sm"
          style={{
            width: "3px",
            height: `${h}px`,
            backgroundColor: "#111111",
            animationDelay: BAR_DELAYS[i],
            transformOrigin: "bottom",
            animationDuration: fast ? "0.5s" : "1.2s",
          }}
        />
      ))}
    </div>
  );
}

function embedUrl(set: DJSet) {
  const secret = set.secretToken ? `&secret_token=${set.secretToken}` : "";
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(set.url)}${secret}&color=%23111111&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=true`;
}

/** Returns inline styles for a card in the 3D fan effect */
function fanStyle(
  i: number,
  hoveredIndex: number | null
): React.CSSProperties {
  if (hoveredIndex === null) return { position: "relative" };

  if (i === hoveredIndex) {
    return {
      position: "relative",
      zIndex: 10,
      transform: "scale(1.08) translateY(-12px)",
      boxShadow:
        "0 0 30px rgba(0,0,0,0.25), 0 0 60px rgba(0,0,0,0.1), 0 20px 50px rgba(0,0,0,0.1)",
    };
  }

  // Push cards in the same row to the sides
  const hovRow = Math.floor(hoveredIndex / 3);
  const hovCol = hoveredIndex % 3;
  const myRow = Math.floor(i / 3);
  const myCol = i % 3;
  const tx = myRow === hovRow ? (myCol > hovCol ? 16 : -16) : 0;

  return {
    position: "relative",
    transform: `scale(0.93) translateX(${tx}px)`,
    opacity: 0.6,
  };
}

export default function DJSetsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentCard, setCurrentCard] = useState(0);
  const touchStartX = useRef(0);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      setCurrentCard((prev) =>
        delta > 0
          ? Math.min(prev + 1, DJ_SETS.length - 1)
          : Math.max(prev - 1, 0)
      );
    }
  }

  return (
    <section id="sets" className="relative pt-10 pb-20 px-8 section-with-glass">
      <style>{`
        @keyframes waveform {
          0%, 100% { transform: scaleY(0.4); }
          50%       { transform: scaleY(1); }
        }
        .waveform-bar {
          animation: waveform 1.2s ease-in-out infinite;
        }
        /* Smooth fan transition */
        .dj-fan-card-inner {
          transition:
            transform  0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            opacity    0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        /* Disable global glass-card CSS hover — React controls transform */
        .dj-fan-card-inner.glass-card:hover {
          transform: none;
        }
        /* Desktop fan grid */
        .dj-fan-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          align-items: flex-start;
          padding: 28px 0; /* room for scale overflow */
        }
        .dj-fan-slot {
          flex: 0 0 calc(33.333% - 12px);
          max-width: 360px;
          min-width: 240px;
        }
        /* Mobile slider */
        .dj-mobile-track {
          display: flex;
          width: 100%;
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .dj-mobile-slide {
          flex: 0 0 100%;
          width: 100%;
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            Live Sets
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            <span className="font-serif italic font-light">The</span>{" "}sets
          </h2>
          <p className="text-base text-muted font-light">
            Progressive house, trance, and EDM — live from the booth.
          </p>
        </div>

        {/* ── DESKTOP: 3D fan grid (2 rows × 3 cards) ── */}
        <div className="hidden md:block">
          <div className="dj-fan-grid">
            {DJ_SETS.map((set, i) => (
              <div key={set.title} className="dj-fan-slot">
                <div
                  className="dj-fan-card-inner glass-card rounded-xl flex flex-col gap-4"
                  style={{ padding: "20px", ...fanStyle(i, hoveredIndex) }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono block mb-2">
                      {set.year}
                    </span>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      {set.title}
                    </h3>
                    <Waveform fast={hoveredIndex === i} />
                  </div>
                  <iframe
                    src={embedUrl(set)}
                    width="100%"
                    height="120"
                    frameBorder="0"
                    allow="autoplay"
                    loading="lazy"
                    title={set.title}
                    style={{ borderRadius: "8px", display: "block" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE: single-card slider + dots ── */}
        <div className="md:hidden">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="dj-mobile-track"
              style={{ transform: `translateX(calc(-${currentCard} * 100%))` }}
            >
              {DJ_SETS.map((set) => (
                <div key={set.title} className="dj-mobile-slide px-1">
                  <div
                    className="glass-card rounded-xl flex flex-col gap-4"
                    style={{ padding: "20px" }}
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono block mb-2">
                        {set.year}
                      </span>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        {set.title}
                      </h3>
                      <Waveform fast={false} />
                    </div>
                    <iframe
                      src={embedUrl(set)}
                      width="100%"
                      height="120"
                      frameBorder="0"
                      allow="autoplay"
                      loading="lazy"
                      title={set.title}
                      style={{ borderRadius: "8px", display: "block" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-5">
            {DJ_SETS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentCard(i)}
                aria-label={`Go to set ${i + 1}`}
                style={{
                  height: "8px",
                  width: i === currentCard ? "20px" : "8px",
                  borderRadius: "4px",
                  backgroundColor:
                    i === currentCard ? "#111111" : "#e5e5e5",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted font-light mb-4">
            Available for bookings — clubs, events, and private sessions.
          </p>
          <a
            href={`mailto:${COMPANY.email}?subject=DJ%20Booking%20Inquiry`}
            className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-highlight hover:bg-deep-teal transition-colors rounded"
          >
            Book DJ Andy&apos;K
          </a>
        </div>
      </div>
    </section>
  );
}
