"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlbumTracks from "@/components/coverflow/AlbumTracks";
import { beforeIForgetAlbum } from "@/data/before-i-forget-tracks";

const COVER = "/releases/before-i-forget.png";
const ACCENT = "#E0899E";

export default function BeforeIForgetClient({ initialSlug }: { initialSlug?: string } = {}) {

  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero — full-width cover (swap to a video once one exists) */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <video
            src="/videos/before-i-forget-hero.mp4"
            poster={COVER}
            autoPlay
            loop
            muted
            playsInline
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
              Album · Trance / Progressive Trance · 2026
            </span>

            <h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              BEFORE I FORGET
            </h1>

            <p className="text-base sm:text-lg font-light font-mono uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>
              Trance / Progressive Trance.
            </p>

            <p className="text-sm sm:text-base leading-relaxed italic font-serif max-w-[560px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Before the memory fades, before it all slips away — a journey through what we hold onto, and what we finally let go.
            </p>
          </div>
        </section>

        <AlbumTracks album={beforeIForgetAlbum} initialSlug={initialSlug} background="#0d1117" />

        {/* Full tracklist artwork — full-bleed, same treatment as the hero */}
        <section className="relative w-full overflow-hidden">
          <video
            src="/videos/before-i-forget-tracklist.mp4"
            poster="/releases/before-i-forget-tracklist.png"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />

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
