"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CoverFlow from "@/components/coverflow/CoverFlow";
import { thisIsTranceHearTheCallAlbum } from "@/data/this-is-trance-hear-the-call-tracks";

const COVER = "/releases/this-is-trance-hear-the-call-cover.png";
const ACCENT = "#39D98A";

export default function ThisIsTranceHearTheCallClient({ initialSlug }: { initialSlug?: string } = {}) {
  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero — full-width cover */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <img
            src={COVER}
            alt="This Is Trance, Hear the Call"
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
              New Single · 2026
            </span>

            <h1
              className="text-[clamp(2rem,5.5vw,4.2rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              THIS IS TRANCE, HEAR THE CALL
            </h1>

            <p className="text-base sm:text-lg font-light font-mono uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>
              feat. Aria Noir
            </p>

            <p className="text-sm sm:text-base leading-relaxed italic font-serif max-w-[560px] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              &ldquo;...sorry &mdash; okay. Now for real.&rdquo;
            </p>

            <a
              href="/downloads/this-is-trance-hear-the-call-booklet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded border transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: `${ACCENT}55`, color: ACCENT, background: "rgba(0,0,0,0.4)" }}
            >
              Download Digital Booklet (PDF)
            </a>
          </div>
        </section>

        {/* Cover Flow — three interpretations of one call */}
        <div id="track" style={{ background: "#0d1117" }}>
          <CoverFlow album={thisIsTranceHearTheCallAlbum} initialSlug={initialSlug} />
        </div>

        {/* Opening Introduction */}
        <section className="max-w-[640px] mx-auto px-6 py-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              Opening Introduction
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              The Take That Was Never Meant to Stay.
            </h2>
            <div className="space-y-5 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                It starts the way most things do that never get released &mdash; a rehearsal, a false
                start, a quiet laugh caught by the mic. A voice stumbles over the first line, stops,
                apologizes, and begins again. Nobody was supposed to hear that moment. But the take
                that followed carried something the polished versions never could.
              </p>
              <p>
                <em>This Is Trance, Hear the Call</em> keeps that imperfection at its center &mdash;
                not a highlight reel of a finished record, but the exact second a private rehearsal
                turned into a call meant for the floor.
              </p>
            </div>
            <p
              className="mt-8 pl-5 text-lg italic font-serif"
              style={{ color: "#ffffff", borderLeft: `2px solid ${ACCENT}` }}
            >
              &ldquo;Okay. Now for real.&rdquo;
            </p>
          </ScrollReveal>
        </section>

        {/* One Take. Three Rooms. */}
        <section className="max-w-[640px] mx-auto px-6 pb-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Story Behind the Song
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              One Take. Three Rooms.
            </h2>
            <div className="space-y-5 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                <em>This Is Trance, Hear the Call</em> began as a single idea from DJ Andy&apos;K
                &mdash; the sound of trance refusing to be declared dead, built around one insistent
                hook: &ldquo;This is trance, hear the call.&rdquo;
              </p>
              <p>
                Aria Noir&apos;s voice gave the idea its rehearsal-room honesty &mdash; low, direct,
                unpolished by design. Rather than smoothing over the first take, DJ Andy&apos;K built
                an entire version around keeping it exactly as it happened: one mic, one grand piano,
                one imperfect beginning.
              </p>
              <p>
                The single expands through three interpretations. The Official Trance Version carries
                the full call to the floor. The Live Rehearsal Room Version exposes the fragile,
                unedited moment underneath it. The Techno Meets Trance Version pushes the same call
                deeper underground.
              </p>
            </div>
            <p
              className="mt-8 pl-5 text-lg italic font-serif"
              style={{ color: "#ffffff", borderLeft: `2px solid ${ACCENT}` }}
            >
              Three versions. One rehearsal. One call that refused to stay private.
            </p>
          </ScrollReveal>
        </section>

        {/* Two Voices, One Take */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
                The Voices
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-sans" style={{ color: "#ffffff" }}>
                Two Voices, One Take.
              </h2>
              <p className="text-sm sm:text-base italic font-serif mb-4" style={{ color: ACCENT }}>
                Aria Noir &mdash; a voice that doesn&apos;t hide the take.
              </p>
              <p className="text-base leading-relaxed font-serif mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                Belgian vocalist Aria Noir returns for her second collaboration with DJ Andy&apos;K,
                bringing a low, conversational alto to <em>This Is Trance, Hear the Call</em> &mdash;
                close, direct, and deliberately unpolished. Rather than performing a finished vocal,
                she leaves the rehearsal-room honesty intact: the hesitation, the laugh, the restart.
              </p>
              <p className="text-base leading-relaxed font-serif mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                At 32, Aria is a trance and techno vocalist through and through &mdash; this is exactly
                where she belongs, and it shows in every take.
              </p>
              <p
                className="pl-5 text-lg italic font-serif"
                style={{ color: "#ffffff", borderLeft: `2px solid ${ACCENT}` }}
              >
                &ldquo;...sorry &mdash; okay. Now for real.&rdquo;
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <img
                src="/releases/this-is-trance-studio-4.png"
                alt="DJ Andy'K and Aria Noir"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* Behind the Song — studio & rehearsal */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              Behind the Song
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 font-sans text-center" style={{ color: "#ffffff" }}>
              Studio &amp; Rehearsal
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              "/releases/this-is-trance-studio-1.png",
              "/releases/this-is-trance-studio-2.png",
              "/releases/this-is-trance-studio-3.png",
              "/releases/this-is-trance-studio-4.png",
            ].map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden flex items-center" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={src} alt="DJ Andy'K and Aria Noir — studio & rehearsal" className="w-full h-auto block" />
              </div>
            ))}
          </ScrollReveal>
        </section>

        {/* On the Floor — live & peak-time */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              On the Floor
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 font-sans text-center" style={{ color: "#ffffff" }}>
              Live &amp; Peak-Time
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              "/releases/this-is-trance-live-1.png",
              "/releases/this-is-trance-live-2.png",
              "/releases/this-is-trance-live-3.png",
              "/releases/this-is-trance-live-4.png",
            ].map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden flex items-center" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={src} alt="DJ Andy'K and Aria Noir — live & peak-time" className="w-full h-auto block" />
              </div>
            ))}
          </ScrollReveal>
        </section>

        {/* Credits */}
        <section className="max-w-[640px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              Credits
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              Credits
            </h2>
            <dl className="divide-y" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              {[
                ["Title", "This Is Trance, Hear the Call"],
                ["Primary Artist", "DJ Andy'K"],
                ["Featured Artist", "Aria Noir"],
                ["Written & Produced By", "DJ Andy'K"],
                ["Songwriter", "Andrej Kneisl (Music and Lyrics)"],
                ["Genre", "Electronic / Dance — Trance / Tech Trance"],
                ["Versions", "Official Trance · Live Rehearsal Room · Techno Meets Trance"],
                ["Label", "ANDY'K GROUP INTERNATIONAL LTD"],
                ["© /", "2026 ANDY'K GROUP INTERNATIONAL LTD. All rights reserved."],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[auto_1fr] sm:grid-cols-[220px_1fr] gap-4 py-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
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
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              Closing
            </p>
            <p className="text-base leading-relaxed font-serif mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Some takes get erased. Others get released. This one made the cut.
            </p>
            <p className="text-xl italic font-serif" style={{ color: ACCENT }}>
              This is trance. Hear the call.
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
