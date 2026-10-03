"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CoverFlow from "@/components/coverflow/CoverFlow";
import { littleBoyLittleGirlAlbum } from "@/data/little-boy-little-girl-tracks";

const COVER = littleBoyLittleGirlAlbum.heroCoverSrc;
const ACCENT = littleBoyLittleGirlAlbum.accent;
const BG = "#101116";

// Words taken from the two single covers.
const SIDES = [
  {
    label: "Little Boy",
    tag: "ADHD",
    words: ["Too fast.", "Too loud.", "Everywhere.", "But still here."],
  },
  {
    label: "Little Girl",
    tag: "Autism",
    words: ["Different.", "Sensory.", "Another way.", "Still here.", "Still light."],
  },
];

const STUDIO_PHOTOS = Array.from({ length: 9 }, (_, i) => `/releases/lblg-studio-${i + 1}.jpg`);

export default function LittleBoyLittleGirlClient({ initialSlug }: { initialSlug?: string } = {}) {
  const tracks = littleBoyLittleGirlAlbum.tracks;

  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: BG }}>
        {/* Hero — full-width cover */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <img
            src={COVER}
            alt="Little Boy & Little Girl — DJ Andy'K feat. Thymoty Lorrens"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${BG} 5%, rgba(16,17,22,0.55) 40%, rgba(16,17,22,0.15) 65%, transparent 100%)` }}
          />

          <div className="absolute top-6 left-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.35em]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Single
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-end text-center h-full px-6 pb-14" style={{ minHeight: "78dvh" }}>
            <span
              className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-6 px-3 py-1 rounded-full border"
              style={{ color: ACCENT, borderColor: `${ACCENT}55`, background: "rgba(0,0,0,0.4)" }}
            >
              New Single · Trance · 2026
            </span>

            <h1
              className="text-[clamp(2rem,5.5vw,4.2rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              LITTLE BOY &amp; LITTLE GIRL
            </h1>

            <p className="text-base sm:text-lg font-light font-mono uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
              feat. Thymoty Lorrens
            </p>
          </div>
        </section>

        {/* Cover Flow — two songs */}
        <div id="track" style={{ background: BG }}>
          <CoverFlow album={littleBoyLittleGirlAlbum} initialSlug={initialSlug} />
        </div>

        {/* Two Songs */}
        <section className="max-w-[1100px] mx-auto px-6 py-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              The Single
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 font-sans text-center" style={{ color: "#ffffff" }}>
              Two Songs. Still Here.
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {tracks.map((track, i) => {
              const side = SIDES[i];
              return (
                <a
                  key={track.slug}
                  href={`/${littleBoyLittleGirlAlbum.slug}/${track.slug}#track`}
                  className="group rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                >
                  <img src={track.coverUrl} alt={track.title} className="w-full aspect-square object-cover" />
                  <div className="p-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs font-mono uppercase tracking-[0.25em]" style={{ color: track.accent }}>
                        {String(track.n).padStart(2, "0")} · {side.label}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {side.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-4 font-sans" style={{ color: "#ffffff" }}>
                      {track.title}
                    </h3>
                    <p className="text-base leading-relaxed italic font-serif" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {side.words.join(" ")}
                    </p>
                  </div>
                </a>
              );
            })}
          </ScrollReveal>
        </section>

        {/* Studio */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              In the Studio
            </p>
            <h2 className="text-2xl sm:text-3xl italic font-serif mb-10 text-center" style={{ color: "#ffffff" }}>
              DJ Andy&apos;K &times; Thymoty Lorrens
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {STUDIO_PHOTOS.map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden aspect-square" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={src} alt="DJ Andy'K and Thymoty Lorrens in the studio" className="w-full h-full object-cover" />
              </div>
            ))}
          </ScrollReveal>
        </section>

        {/* Credits */}
        <section className="max-w-[640px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Release
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              Credits
            </h2>
            <dl className="divide-y" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              {[
                ["Title", littleBoyLittleGirlAlbum.title],
                ["Primary Artist", "DJ Andy'K"],
                ["Featured Artist", "Thymoty Lorrens"],
                ["Tracks", tracks.map((t) => t.title).join(" · ")],
                ["Genre", "Trance"],
                ["Release Date", "3.10.2026"],
                ["©", "2026 DJ Andy'K. All rights reserved."],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[auto_1fr] sm:grid-cols-[240px_1fr] gap-4 py-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <dt className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                    {label}
                  </dt>
                  <dd className="text-sm sm:text-base font-serif" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
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
