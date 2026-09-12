"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CoverFlow from "@/components/coverflow/CoverFlow";
import { untilTheLightsComeOnAlbum } from "@/data/until-the-lights-come-on-track";

const COVER = "/releases/until-the-lights-come-on.png";
const ACCENT = "#D99C7A";

export default function UntilTheLightsComeOnClient({ initialSlug }: { initialSlug?: string } = {}) {
  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero — full-width cover */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <img
            src={COVER}
            alt="Until the Lights Come On"
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
              Official Release · 2026
            </span>

            <h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              UNTIL THE LIGHTS COME ON
            </h1>

            <p className="text-base sm:text-lg font-light font-mono uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>
              ft. Livia Benttner
            </p>

            <p className="text-sm sm:text-base leading-relaxed italic font-serif max-w-[560px] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              &ldquo;When the lights come on, let me be the last to know.&rdquo;
            </p>

            <a
              href="/downloads/until-the-lights-come-on-booklet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded border transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: `${ACCENT}55`, color: ACCENT, background: "rgba(0,0,0,0.4)" }}
            >
              Download Release Booklet (PDF)
            </a>
          </div>
        </section>

        {/* Cover Flow — single-track player, artwork, song info & lyrics */}
        <div id="track" style={{ background: "#0d1117" }}>
          <CoverFlow album={untilTheLightsComeOnAlbum} initialSlug={initialSlug} />
        </div>

        {/* The Story */}
        <section className="max-w-[640px] mx-auto px-6 py-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              Before Morning Asks Too Much
            </h2>
            <div className="space-y-5 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                There was a time when a call meant someone had made it home safely. Now, the same
                name appearing on a screen brings back more than either of them knows how to say.
              </p>
              <p>
                On a night neither expected to share, the distance between them disappears. A head
                against a chest. Fingers finding the familiar seam of a sleeve. Small things the
                body remembers after the mind has learned to leave.
              </p>
              <p>
                They could ask what this means. They could make another promise. Instead, they let
                the music keep the morning outside a little longer. Nothing has been solved. But
                for this one night, neither has to be alone.
              </p>
            </div>
            <p
              className="mt-8 pl-5 text-lg italic font-serif"
              style={{ color: "#ffffff", borderLeft: `2px solid ${ACCENT}` }}
            >
              &ldquo;When the lights come on, let me be the last to know.&rdquo;
            </p>
          </ScrollReveal>
        </section>

        {/* Behind the Feeling — studio photos */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              Behind the Feeling
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 font-sans text-center" style={{ color: "#ffffff" }}>
              Between Takes
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              "/releases/until-the-lights-come-on-livia.png",
              "/releases/until-the-lights-come-on-studio-1.png",
              "/releases/until-the-lights-come-on-studio-2.png",
              "/releases/until-the-lights-come-on-studio-3.png",
              "/releases/until-the-lights-come-on-studio-4.png",
              "/releases/until-the-lights-come-on-studio-5.png",
            ].map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden flex items-center" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={src} alt="DJ Andy'K and Livia Benttner in the studio" className="w-full h-auto block" />
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
              A Note From Andy
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-sans" style={{ color: "#ffffff" }}>
              Some Songs Stay. This One Did.
            </h2>
            <p className="text-base leading-relaxed font-serif mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              This song has been part of my repertoire for a long time. I have carried it with me,
              and now it finally has its official release date: 12 September 2026.
            </p>
            <p className="text-base leading-relaxed font-serif mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Until the Lights Come On, featuring Livia Benttner, is about letting someone close
              again without asking one night to answer every question. Sometimes there is still
              something worth feeling, even when you cannot promise what comes next.
            </p>
            <p className="text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              To everyone who makes room for my music: this is the moment I get to share it with
              you.
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
