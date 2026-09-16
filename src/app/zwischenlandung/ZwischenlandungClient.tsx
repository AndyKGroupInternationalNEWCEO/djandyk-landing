"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CoverFlow from "@/components/coverflow/CoverFlow";
import { zwischenlandungAlbum } from "@/data/zwischenlandung-tracks";

const COVER = "/releases/zwischenlandung-official.png";
const ACCENT = "#C9A227";

export default function ZwischenlandungClient({ initialSlug }: { initialSlug?: string } = {}) {
  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero — full-width cover */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <img
            src={COVER}
            alt="Zwischenlandung"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #0d1117 5%, rgba(13,17,23,0.55) 40%, rgba(13,17,23,0.15) 65%, transparent 100%)" }}
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
              Deluxe Edition · 2026
            </span>

            <h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              ZWISCHENLANDUNG
            </h1>

            <p className="text-base sm:text-lg font-light font-mono uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>
              feat. Robert Zigller
            </p>

            <p className="text-sm sm:text-base leading-relaxed italic font-serif max-w-[560px] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              &ldquo;Perhaps their paths will cross again. Perhaps one brief encounter was already
              enough.&rdquo;
            </p>

            <a
              href="/downloads/zwischenlandung-deluxe-edition-booklet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded border transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: `${ACCENT}55`, color: ACCENT, background: "rgba(0,0,0,0.4)" }}
            >
              Download Deluxe Edition Booklet (PDF)
            </a>
          </div>
        </section>

        {/* Cover Flow — four interpretations of one song */}
        <div id="track" style={{ background: "#0d1117" }}>
          <CoverFlow album={zwischenlandungAlbum} initialSlug={initialSlug} />
        </div>

        {/* The Story */}
        <section className="max-w-[640px] mx-auto px-6 py-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              Opening Introduction
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              Some Encounters Do Not Arrive to Stay.
            </h2>
            <div className="space-y-5 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                They exist between two departures — in the borrowed light of an airport terminal,
                beneath a board filled with cities that belong to somebody else. Two strangers meet
                while the world continues moving around them. For a few minutes, missed flights,
                unfamiliar places and everything waiting beyond the glass no longer matter.
              </p>
              <p>
                <em>Zwischenlandung</em> captures that fragile space between arrival and goodbye. A
                telephone number fades on the edge of a ticket, a final announcement echoes through
                the terminal, and one last look carries more weight than everything left unsaid.
              </p>
            </div>
            <p
              className="mt-8 pl-5 text-lg italic font-serif"
              style={{ color: "#ffffff", borderLeft: `2px solid ${ACCENT}` }}
            >
              &ldquo;Perhaps their paths will cross again. Perhaps one brief encounter was already
              enough.&rdquo;
            </p>
          </ScrollReveal>
        </section>

        {/* One Encounter. Four Interpretations. */}
        <section className="max-w-[640px] mx-auto px-6 pb-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Story Behind the Song
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              One Encounter. Four Interpretations.
            </h2>
            <div className="space-y-5 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                <em>Zwischenlandung</em> began as an English-language idea by DJ Andy&apos;K. The
                song was built around a brief airport encounter: two lives crossing in a place where
                everybody is already on the way somewhere else.
              </p>
              <p>
                Robert Zigller&apos;s German roots opened a different direction for the song.
                Instead of translating the original idea word for word, DJ Andy&apos;K and Robert
                allowed the story to find its own emotional language. German gave the lyrics a
                different weight — more intimate in the verses, more dramatic in the chorus and
                especially powerful against the euphoric trance production.
              </p>
              <p>
                The result became a standalone release outside the regular album cycle and an
                experiment in how naturally German lyrics could live inside progressive trance.
              </p>
              <p>
                The Deluxe Edition expands that experiment through four interpretations. The
                Official Version carries the full anthem. The Piano Version exposes the fragility
                beneath the production. The Progressive Trance Version pushes the emotional journey
                further into the dancefloor, while the Melodic Techno &amp; Afro Beats Remix rebuilds
                the song through darker textures and rhythm.
              </p>
            </div>
            <p
              className="mt-8 pl-5 text-lg italic font-serif"
              style={{ color: "#ffffff", borderLeft: `2px solid ${ACCENT}` }}
            >
              Four versions. One encounter. One moment suspended between arrival and departure.
            </p>
          </ScrollReveal>
        </section>

        {/* The Collaboration */}
        <section className="max-w-[640px] mx-auto px-6 pb-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Featured Voice
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-sans" style={{ color: "#ffffff" }}>
              Robert Zigller
            </h2>
            <p className="text-sm sm:text-base italic font-serif mb-4" style={{ color: ACCENT }}>
              A familiar voice. A new language.
            </p>
            <div className="space-y-4 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                Robert Zigller has worked with DJ Andy&apos;K across several songs, singles and
                album projects. German-born and driven by a personal love of singing rather than a
                conventional professional career, Robert brings a natural and recognisable voice to
                every collaboration.
              </p>
              <p>
                His voice has already become an important part of the musical world of DJ
                Andy&apos;K, including several songs from <em>Wavelength Traces</em>.
              </p>
              <p>
                For <em>Zwischenlandung</em>, Robert&apos;s German background became part of the
                creative foundation — an opportunity to explore his native language inside an
                emotional progressive trance production. What began as an experiment became
                something personal: a familiar collaboration discovering an entirely new voice.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Full tracklist artwork — full-bleed, same treatment as the hero */}
        <section className="relative w-full overflow-hidden">
          <img src="/releases/zwischenlandung-tracklist.png" alt="Zwischenlandung — Deluxe Edition tracklist" className="w-full h-auto" />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0d1117 0%, transparent 8%, transparent 92%, #0d1117 100%)",
            }}
          />
        </section>

        {/* Behind the Song — studio & airport */}
        <section className="relative w-full overflow-hidden">
          <img src="/releases/zwischenlandung-photography.png" alt="Zwischenlandung — behind the song, studio & airport" className="w-full h-auto" />

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
