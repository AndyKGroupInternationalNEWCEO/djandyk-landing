"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CoverFlow from "@/components/coverflow/CoverFlow";
import { whereTheWorldTurnsGoldAlbum } from "@/data/where-the-world-turns-gold-track";

const COVER = "/releases/where-the-world-turns-gold.png";
const ACCENT = "#E8B65A";

export default function WhereTheWorldTurnsGoldClient({ initialSlug }: { initialSlug?: string } = {}) {
  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero — full-width cover */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <img
            src={COVER}
            alt="Where the World Turns Gold"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #0d1117 5%, rgba(13,17,23,0.55) 40%, rgba(13,17,23,0.15) 65%, transparent 100%)" }}
          />

          <div className="absolute top-6 left-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.35em]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Special Release
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-end text-center h-full px-6 pb-14" style={{ minHeight: "78dvh" }}>
            <span
              className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-6 px-3 py-1 rounded-full border"
              style={{ color: ACCENT, borderColor: `${ACCENT}55`, background: "rgba(0,0,0,0.4)" }}
            >
              Special Release · For My Fans · 2026
            </span>

            <h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              WHERE THE WORLD TURNS GOLD
            </h1>

            <p className="text-base sm:text-lg font-light font-mono uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>
              ft. Margirt &ldquo;Ritta&rdquo; Fellner
            </p>

            <p className="text-sm sm:text-base leading-relaxed italic font-serif max-w-[560px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              &ldquo;Somewhere beside you, I stopped feeling lost.&rdquo;
            </p>
          </div>
        </section>

        {/* Cover Flow — single-track player, artwork, song info & lyrics */}
        <div id="track" style={{ background: "#0d1117" }}>
          <CoverFlow album={whereTheWorldTurnsGoldAlbum} initialSlug={initialSlug} />
        </div>

        {/* The Story */}
        <section className="max-w-[640px] mx-auto px-6 py-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              When the Road Becomes Ours
            </h2>
            <div className="space-y-5 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                By the time the city disappears in the rain, neither of them has a destination left to
                name — only the night, the last familiar streets, and questions neither knows how to
                answer.
              </p>
              <p>
                Then the coastline opens. The clouds lift, the first light spreads across the water,
                and a hand reaches for his. The road ahead stops looking like something they have to
                solve.
              </p>
              <p>
                They still do not know what tomorrow will ask of them. But here, between the fading
                night and a world turning gold, getting lost feels like the beginning of finding their
                way.
              </p>
            </div>
            <p
              className="mt-8 pl-5 text-lg italic font-serif"
              style={{ color: "#ffffff", borderLeft: `2px solid ${ACCENT}` }}
            >
              &ldquo;Somewhere beside you, I stopped feeling lost.&rdquo;
            </p>
          </ScrollReveal>
        </section>

        {/* The Collaboration */}
        <section className="max-w-[1100px] mx-auto px-6 pb-20">
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <img
                src="/releases/where-the-world-turns-gold-rita.png"
                alt="Margirt “Ritta” Fellner recording vocals"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
                The Collaboration
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-sans" style={{ color: "#ffffff" }}>
                Margirt &ldquo;Ritta&rdquo; Fellner
              </h2>
              <p className="text-sm sm:text-base italic font-serif mb-4" style={{ color: ACCENT }}>
                A familiar voice. A personal connection.
              </p>
              <p className="text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
                Margirt &ldquo;Ritta&rdquo; Fellner is a 45-year-old singer from Bavaria and a good
                friend of DJ Andy&apos;K. This special release brings that personal connection into a
                song about the comfort of having someone beside you.
              </p>
              <p className="text-base leading-relaxed font-serif mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                Her featured vocal carries the words at the centre of the song: the roads may change,
                tomorrow can wait, and the person next to you can make an unfamiliar place feel like
                home.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Behind the Feeling — studio photos */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              Behind the Feeling
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 font-sans text-center" style={{ color: "#ffffff" }}>
              In the Studio
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              "/releases/where-the-world-turns-gold-studio-1.png",
              "/releases/where-the-world-turns-gold-studio-2.png",
              "/releases/where-the-world-turns-gold-studio-3.png",
            ].map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden aspect-[4/5]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={src} alt="DJ Andy'K and Margirt “Ritta” Fellner in the studio" className="w-full h-full object-cover" />
              </div>
            ))}
          </ScrollReveal>
          <p className="text-center text-[11px] font-mono uppercase tracking-widest mt-6" style={{ color: "rgba(255,255,255,0.3)" }}>
            Illustrative studio imagery
          </p>
        </section>

        {/* Closing note */}
        <section className="max-w-[560px] mx-auto px-6 pb-24 text-center">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              Special Release · For My Fans
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-sans" style={{ color: "#ffffff" }}>
              This One Is for You.
            </h2>
            <p className="text-base leading-relaxed font-serif mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Today, I wanted to share something a little different with you. A song about taking the
              long way, letting tomorrow wait, and finding a moment worth staying in.
            </p>
            <p className="text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              Thank you for making room for my music in your life.
            </p>
            <p className="text-xl italic font-serif mt-6" style={{ color: ACCENT }}>
              DJ Andy&apos;K
            </p>
          </ScrollReveal>
        </section>
      </main>

      {/* Footer in white wrapper so site CSS vars render correctly */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
