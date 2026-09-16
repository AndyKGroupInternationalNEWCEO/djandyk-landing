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
              Some Encounters Are Not Meant to Stay.
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

        {/* The Featured Voice */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
                The Featured Voice
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-sans" style={{ color: "#ffffff" }}>
                Robert Zigller
              </h2>
              <p className="text-sm sm:text-base italic font-serif mb-4" style={{ color: ACCENT }}>
                A familiar voice. A new language.
              </p>
              <p className="text-base leading-relaxed font-serif mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                Robert Zigller has worked with DJ Andy&apos;K across several songs, singles and
                album projects. German-born and driven by a personal love of singing rather than a
                conventional professional career, Robert brings a natural and recognisable voice to
                every collaboration.
              </p>
              <p className="text-base leading-relaxed font-serif mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                For <em>Zwischenlandung</em>, Robert&apos;s German background became part of the
                creative foundation — an opportunity to explore his native language inside an
                emotional progressive trance production. What began as an experiment became
                something personal: a familiar collaboration discovering an entirely new voice.
              </p>
              <p
                className="pl-5 text-lg italic font-serif"
                style={{ color: "#ffffff", borderLeft: `2px solid ${ACCENT}` }}
              >
                Only a stopover —
                <br />
                yet it carries more weight than everything else.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <img
                src="/releases/zwischenlandung-robert-portrait.png"
                alt="Robert Zigller in the studio"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* Behind the Song — studio & airport */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              Behind the Song
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 font-sans text-center" style={{ color: "#ffffff" }}>
              Studio &amp; Airport
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              "/releases/zwischenlandung-studio-1.png",
              "/releases/zwischenlandung-studio-2.png",
              "/releases/zwischenlandung-studio-3.png",
              "/releases/zwischenlandung-airport-1.png",
              "/releases/zwischenlandung-airport-2.png",
              "/releases/zwischenlandung-andy-portrait.png",
            ].map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden flex items-center" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={src} alt="DJ Andy'K and Robert Zigller — studio & airport" className="w-full h-auto block" />
              </div>
            ))}
          </ScrollReveal>
        </section>

        {/* Closing */}
        <section className="max-w-[560px] mx-auto px-6 pb-24 text-center">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              Closing
            </p>
            <p className="text-base leading-relaxed font-serif mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Some encounters become relationships. Others become memories.
            </p>
            <p className="text-base leading-relaxed font-serif mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              And some remain suspended between the two — like a light beyond the terminal glass,
              still visible long after the aircraft has disappeared.
            </p>
            <p className="text-xl italic font-serif" style={{ color: ACCENT }}>
              Vielleicht reicht auch nur das eine Mal.
            </p>
          </ScrollReveal>
        </section>

        {/* Official tracklist artwork — full-bleed, same treatment as the hero */}
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
      </main>

      {/* Footer in white wrapper so site CSS vars render correctly */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
