"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CoverFlow from "@/components/coverflow/CoverFlow";
import SectionTabs from "@/components/coverflow/SectionTabs";
import { wavelengthTracesAlbum } from "@/data/wavelength-traces-tracks";
import type { Track } from "@/types/album";

const COVER = "/releases/wavelength-traces-cover.png";
const ACCENT = "#8EDBE5";

function TrackCard({ track }: { track: Track }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const isOut = track.releaseDate ? new Date(track.releaseDate) <= new Date() : false;

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = innerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-4px)`;
  };

  const resetTilt = () => {
    const el = innerRef.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div className="card-glow w-full" style={{ color: track.accent }}>
      <div
        ref={innerRef}
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
        className="card-glow-inner rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderTop: `2px solid ${track.accent}`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <Link href={`/wavelength-traces/${track.slug}`} className="aspect-square w-full relative overflow-hidden block">
          <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-start justify-start p-3">
            <span
              className="text-[9px] font-mono uppercase tracking-[0.3em] px-2.5 py-1 rounded-full border"
              style={{
                color: isOut ? track.accent : "rgba(255,255,255,0.4)",
                borderColor: isOut ? `${track.accent}66` : "rgba(255,255,255,0.15)",
                background: "rgba(0,0,0,0.6)",
              }}
            >
              {isOut ? "Out Now" : "Coming Soon"}
            </span>
          </div>
        </Link>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold" style={{ color: track.accent }}>
              {String(track.n).padStart(2, "0")}
            </span>
            <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.12)" }}>/</span>
            <span className="text-xs font-mono uppercase tracking-widest min-w-0 truncate" style={{ color: "rgba(255,255,255,0.3)" }}>
              {track.from}
            </span>
          </div>

          <h3
            className="text-lg font-bold tracking-tight mb-1 leading-snug font-sans"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {track.title}
          </h3>

          <p className="text-[11px] font-mono uppercase tracking-widest mb-2" style={{ color: isOut ? track.accent : "rgba(255,255,255,0.25)" }}>
            {isOut ? "Released" : "Release · TBA"}
          </p>

          {track.story && (
            <p
              className="story-glow text-sm leading-relaxed mb-3 font-serif italic line-clamp-4"
              style={{ color: "rgba(255,255,255,0.5)", "--accent": track.accent } as React.CSSProperties}
            >
              {track.story}
            </p>
          )}

          <Link
            href={`/wavelength-traces/${track.slug}`}
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest mb-3 py-1.5 transition-opacity hover:opacity-70 w-fit"
            style={{ color: track.accent }}
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
              <path d="M6 4l4 4-4 4" />
            </svg>
            Open Track
          </Link>

          <div className="flex gap-2 flex-wrap">
            <span
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
              style={{ color: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              Streaming — soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WavelengthTracesClient({ initialSlug }: { initialSlug?: string } = {}) {
  const [viewMode, setViewMode] = useState<"coverflow" | "overview">("coverflow");

  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero — full-width cover */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <img
            src={COVER}
            alt="Wavelength Traces"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #0d1117 5%, rgba(13,17,23,0.55) 40%, rgba(13,17,23,0.15) 65%, transparent 100%)" }}
          />

          <div className="absolute top-6 left-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.35em]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Album
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-end text-center h-full px-6 pb-14" style={{ minHeight: "78dvh" }}>
            <span
              className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-6 px-3 py-1 rounded-full border"
              style={{ color: ACCENT, borderColor: `${ACCENT}55`, background: "rgba(0,0,0,0.4)" }}
            >
              Album · Trance · 2026
            </span>

            <h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              WAVELENGTH TRACES
            </h1>

            <p
              className="text-sm sm:text-base font-bold mb-4 font-mono uppercase tracking-[0.25em]"
              style={{ color: "#ffffff" }}
            >
              Some Connections Fade. Their Traces Stay.
            </p>

            <p className="text-sm leading-relaxed mb-5 max-w-[600px]" style={{ color: "rgba(255,255,255,0.55)" }}>
              A voice saved on an old phone. A jacket that still belongs in the hallway. A plant
              reaching toward the light long after the person who left it has gone. Our lives hold
              quiet evidence of one another, often in places we forget to look.
            </p>

            <p
              className="text-base sm:text-lg font-light mb-5 font-mono uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              Thirteen Traces. One Album.
            </p>

            <p className="text-sm leading-relaxed mb-5 max-w-[600px]" style={{ color: "rgba(255,255,255,0.55)" }}>
              Across thirteen trance songs, DJ Andy&apos;K explores the distance between a passing
              moment and everything it leaves behind. Desire finds the courage to move closer.
              Familiar strangers begin to expect each other. Unspoken words wait years to be
              released. Even an ordinary act of care becomes a way of continuing. There is room
              here for the missed goodbye, but also for the unexpected beginning — for laughter,
              hesitation, and the small decision to stay. WAVELENGTH TRACES invites you to move
              with the music and listen for what remains when the rush settles.
            </p>

            <p className="text-sm sm:text-base leading-relaxed italic font-serif max-w-[560px] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              What if the things we carry are also the things that carry us?
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <a
                href="#tracks"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: ACCENT, color: "#111111" }}
              >
                Explore the Album ↓
              </a>

              <a
                href="/downloads/wavelength-traces-album-booklet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded border transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: `${ACCENT}55`, color: ACCENT, background: "rgba(0,0,0,0.4)" }}
              >
                Download Album Booklet (PDF)
              </a>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
              Written, produced &amp; created by DJ Andy&apos;K
              <br />
              Featuring Robert Zigller, Jullian Recherr, Thymoty Lorrens &amp; Mattew Brexon
            </p>
          </div>
        </section>

        {/* Cover Flow vs. Track Overview — one view at a time, Cover Flow by default */}
        <div id="tracks" style={{ background: "#0d1117" }}>
          <div className="flex justify-center pt-14 pb-8 px-6">
            <SectionTabs
              accent={ACCENT}
              activeTab={viewMode}
              onTabChange={(id) => setViewMode(id as "coverflow" | "overview")}
              tabs={[
                { id: "coverflow", label: "Cover Flow" },
                { id: "overview", label: "Track Overview" },
              ]}
            />
          </div>

          {viewMode === "coverflow" ? (
            <CoverFlow album={wavelengthTracesAlbum} initialSlug={initialSlug} />
          ) : (
            <section className="pt-0 pb-12 px-6 max-w-[1400px] mx-auto">
              <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wavelengthTracesAlbum.tracks.map((track) => (
                  <TrackCard key={track.n} track={track} />
                ))}
              </ScrollReveal>
            </section>
          )}
        </div>

        {/* Full tracklist artwork — full-bleed, same treatment as the hero */}
        <section className="relative w-full overflow-hidden">
          <img src="/releases/wavelength-traces-tracklist.png" alt="Wavelength Traces — official tracklist" className="w-full h-auto" />

          {/* Legibility gradients top & bottom, matching the hero */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0d1117 0%, transparent 8%, transparent 92%, #0d1117 100%)",
            }}
          />
        </section>
      </main>

      {/* Footer in white wrapper so site CSS vars render correctly */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
