"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AlbumTracks from "@/components/coverflow/AlbumTracks";
import { silenceForCrazyBitchesAlbum } from "@/data/silence-for-crazy-bitches-tracks";

const COVER = "/releases/silence-for-crazy-bitches-cover.jpg";
const ACCENT = "#E3B94F";
const BG = "#0d0b10";
const PINK = "#E0559A";

export default function SilenceForCrazyBitchesClient({ initialSlug }: { initialSlug?: string } = {}) {
  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: BG }}>
        {/* Hero — full-width cover */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <img
            src={COVER}
            alt="Silence for Crazy Bitches"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${BG} 5%, rgba(13,11,16,0.55) 40%, rgba(13,11,16,0.15) 65%, transparent 100%)` }}
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
              New Single · 2026
            </span>

            <h1
              className="text-[clamp(2rem,5.5vw,4.2rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              SILENCE FOR CRAZY BITCHES
            </h1>

            <p className="text-base sm:text-lg font-light font-mono uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>
              feat. Max Liem
            </p>

            <p className="text-sm sm:text-base leading-relaxed italic font-serif max-w-[560px] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              Original Tribal &middot; Trance &middot; Techno Versions
            </p>

            <a
              href="/downloads/silence-for-crazy-bitches-booklet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded border transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: `${ACCENT}55`, color: ACCENT, background: "rgba(0,0,0,0.4)" }}
            >
              Download Digital Booklet (PDF)
            </a>
          </div>
        </section>

        {/* Cover Flow — three versions, one story */}
        <AlbumTracks album={silenceForCrazyBitchesAlbum} initialSlug={initialSlug} background={BG} id="track" />

        {/* The Versions */}
        <section className="max-w-[640px] mx-auto px-6 py-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Versions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-sans uppercase" style={{ color: "#ffffff" }}>
              One song.
              <br />
              Three versions.
              <br />
              <span style={{ color: ACCENT }}>One clear message.</span>
            </h2>
            <div className="space-y-5 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                <em style={{ color: ACCENT }}>Silence for Crazy Bitches</em> turns relationship drama into
                dancefloor energy, featuring vocals by Max Liem.
              </p>
              <p>
                This release brings together three different takes on the same story: the
                percussion-driven Original Tribal Version, the melodic Trance Version, and the darker
                Techno Version.
              </p>
            </div>
            <p className="mt-8 text-lg font-bold uppercase tracking-wide font-sans" style={{ color: ACCENT }}>
              Less drama.
              <br />
              More drums.
            </p>
          </ScrollReveal>
        </section>

        {/* The Story */}
        <section className="max-w-[640px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Story
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-sans uppercase" style={{ color: "#ffffff" }}>
              A Long Time Coming.
            </h2>
            <div className="space-y-4 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>This song has been a long time coming.</p>
              <p>
                The idea and lyrics existed long before the music, waiting for the right moment to come
                alive.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Tracklist — Three Versions */}
        <section className="max-w-[760px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              Three Versions + Bonus
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 font-sans uppercase" style={{ color: "#ffffff" }}>
              Tracklist
            </h2>
            <ol className="divide-y" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              {silenceForCrazyBitchesAlbum.tracks.map((track) => (
                <li key={track.slug} className="flex items-center gap-5 py-5" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <img
                    src={track.coverUrl}
                    alt={track.title}
                    className="w-20 h-20 sm:w-28 sm:h-28 rounded-md object-cover shrink-0"
                    style={{ boxShadow: "0 10px 30px -10px rgba(0,0,0,0.8)" }}
                  />
                  <div className="min-w-0">
                    <p className="text-base sm:text-lg font-bold font-sans uppercase" style={{ color: "#ffffff" }}>
                      {String(track.n).padStart(2, "0")}. Silence for Crazy Bitches
                    </p>
                    <p className="text-sm font-semibold font-sans uppercase mb-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                      ({track.title.replace(/^.*\((.*)\)$/, "$1")})
                    </p>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] mb-1" style={{ color: track.accent }}>
                      {[track.n === 4 && "Bonus Track", track.genre, track.subgenre].filter(Boolean).join(" · ")}
                    </p>
                    <p className="text-sm italic font-serif" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {track.story}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-lg font-bold uppercase tracking-wide font-sans" style={{ color: ACCENT }}>
              Find your favourite version.
            </p>
          </ScrollReveal>
        </section>

        {/* Bonus Track — Special Piano Version */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: PINK }}>
                Bonus Track
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-sans uppercase" style={{ color: "#ffffff" }}>
                Special
                <br />
                Piano Version
              </h2>
              <div className="space-y-4 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
                <p>
                  The Special Piano Version reveals the quieter side of{" "}
                  <em style={{ color: ACCENT }}>Silence for Crazy Bitches</em>. With piano and vocals at its
                  heart, the lyrics become an intimate reflection on love, disappointment and choosing peace
                  over drama.
                </p>
                <p>
                  The dancefloor energy gives way to space, vulnerability and emotion &mdash; a different way
                  to hear the same story.
                </p>
                <p>Featuring vocals by Max Liem.</p>
              </div>
              <p className="mt-4 text-sm italic font-serif" style={{ color: "rgba(255,255,255,0.4)" }}>
                A special bonus track from <em>Silence for Crazy Bitches (The Versions)</em>.
              </p>
              <p className="mt-8 text-lg font-bold uppercase tracking-wide font-sans" style={{ color: ACCENT }}>
                Less drama.
                <br />
                More music.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["/releases/silence-for-crazy-bitches-special-piano-version.jpg", "Silence for Crazy Bitches (Special Piano Version) — cover"],
                ["/releases/silence-for-crazy-bitches-special-piano-version-2.jpg", "Silence for Crazy Bitches (Special Piano Version) — DJ Andy'K at the piano with Max Liem"],
              ].map(([src, alt]) => (
                <div key={src} className="rounded-xl overflow-hidden aspect-square" style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 50px -20px rgba(0,0,0,0.8)" }}>
                  <img src={src} alt={alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Behind the Song — In the Studio */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              Behind the Song
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-center font-sans uppercase" style={{ color: "#ffffff" }}>
              In the Studio
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              "/releases/sfcb-studio-1.jpg",
              "/releases/sfcb-studio-2.jpg",
              "/releases/sfcb-studio-3.jpg",
            ].map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden aspect-[3/2]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={src} alt="DJ Andy'K and Max Liem in the studio" className="w-full h-full object-cover" />
              </div>
            ))}
          </ScrollReveal>
        </section>

        {/* Off Duty — Poolside */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              Off Duty
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-center font-sans uppercase" style={{ color: "#ffffff" }}>
              Poolside
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {["/releases/sfcb-poolside-1.jpg", "/releases/sfcb-poolside-2.jpg"].map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden aspect-[3/2]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={src} alt="DJ Andy'K and Max Liem poolside" className="w-full h-full object-cover" />
              </div>
            ))}
          </ScrollReveal>
        </section>

        {/* Credits */}
        <section className="max-w-[640px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              Official Single Booklet
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              Credits
            </h2>
            <dl className="divide-y" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              {[
                ["Artist", "DJ Andy'K"],
                ["Music & Lyrics", "DJ Andy'K"],
                ["Vocals", "Max Liem"],
                ["Versions", "Original Tribal · Trance · Techno · Special Piano (Bonus)"],
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

        {/* Closing */}
        <section className="max-w-[560px] mx-auto px-6 pb-24 text-center">
          <ScrollReveal>
            <p className="text-base leading-relaxed font-serif mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Shhh&hellip; Silence.
            </p>
            <p className="text-xl font-bold uppercase tracking-wide font-sans" style={{ color: ACCENT }}>
              Turn it up &mdash; let&rsquo;s go!
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
