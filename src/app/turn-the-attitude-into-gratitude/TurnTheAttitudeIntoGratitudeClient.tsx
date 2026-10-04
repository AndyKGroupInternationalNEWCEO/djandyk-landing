"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CoverFlow from "@/components/coverflow/CoverFlow";
import { turnTheAttitudeIntoGratitudeAlbum } from "@/data/turn-the-attitude-into-gratitude-tracks";

const COVER = "/releases/turn-the-attitude-into-gratitude-cover.jpg";
const ACCENT = "#E8668A";
const BG = "#150f0e";

const COLLABORATION = [
  {
    n: "01",
    title: "Own It",
    tag: "The Beginning",
    text: "Their first recording together — and Andy’s first vocal collaboration. Lia remained outside the public featuring credit.",
  },
  {
    n: "02",
    title: "Almost Home",
    tag: "The Return",
    text: "They found their way back into the studio. This time Lia appeared officially as a featured artist.",
  },
  {
    n: "03",
    title: "Turn the Attitude Into Gratitude",
    tag: "Full Circle",
    text: "Years of friendship, music and shared history finally became a record built around Lia’s personality, voice, humour and attitude.",
  },
];

export default function TurnTheAttitudeIntoGratitudeClient({ initialSlug }: { initialSlug?: string } = {}) {
  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: BG }}>
        {/* Hero — full-width cover */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <img
            src={COVER}
            alt="Turn the Attitude Into Gratitude"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${BG} 5%, rgba(21,15,14,0.55) 40%, rgba(21,15,14,0.15) 65%, transparent 100%)` }}
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
              TURN THE ATTITUDE INTO GRATITUDE
            </h1>

            <p className="text-base sm:text-lg font-light font-mono uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>
              feat. Lia Bonson
            </p>

            <p className="text-sm sm:text-base leading-relaxed italic font-serif max-w-[560px] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              &ldquo;Some mornings start with gratitude. This one doesn&rsquo;t.&rdquo;
            </p>

            <a
              href="/downloads/turn-the-attitude-into-gratitude-booklet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded border transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: `${ACCENT}55`, color: ACCENT, background: "rgba(0,0,0,0.4)" }}
            >
              Download Digital Booklet (PDF)
            </a>
          </div>
        </section>

        {/* Cover Flow — three versions, one attitude */}
        <div id="track" style={{ background: BG }}>
          <CoverFlow album={turnTheAttitudeIntoGratitudeAlbum} initialSlug={initialSlug} />
        </div>

        {/* The Single */}
        <section className="max-w-[640px] mx-auto px-6 py-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Single
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              Not Again.
            </h2>
            <div className="space-y-5 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                Some mornings begin with gratitude. This one begins with: &ldquo;Oh, fuck. Not again.&rdquo;
              </p>
              <p>
                Coffee gets cold. The train is late. The boss keeps calling. Everybody wants a smile
                before the day has earned one.
              </p>
              <p>
                <em>Turn the Attitude Into Gratitude</em> follows one woman through exactly that kind of
                morning: mascara in a taxi, fake positivity, office pressure and the increasingly
                impossible task of pretending everything is fine.
              </p>
              <p>The phrase sounds like wellness advice. The record turns it into sarcasm.</p>
              <p>
                She breathes. She fixes her face. She tries to change the mood. And when all of that
                fails, the song does what it was always going to do: drops the polite version and says
                what everyone else was thinking.
              </p>
              <p>
                A modern tech-house record built around attitude, humour and a vocal that never
                apologises for taking up space.
              </p>
            </div>
            <p
              className="mt-8 pl-5 text-lg italic font-serif"
              style={{ color: "#ffffff", borderLeft: `2px solid ${ACCENT}` }}
            >
              &ldquo;Some mornings start with gratitude. This one doesn&rsquo;t.&rdquo;
            </p>
          </ScrollReveal>
        </section>

        {/* Full Circle */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
                DJ Andy&apos;K &times; Lia Bonson
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-sans" style={{ color: "#ffffff" }}>
                Full Circle
              </h2>
              <div className="space-y-4 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
                <p>Lia Bonson is not a new name in DJ Andy&apos;K&apos;s story.</p>
                <p>
                  A longtime friend, connected through music, nightlife and memories stretching from
                  Ibiza to Amsterdam, Lia was also there at the beginning: she became Andy&apos;s
                  first-ever vocal collaboration.
                </p>
                <p>It started with &ldquo;Own It.&rdquo;</p>
                <p>
                  The collaboration was real, but the finished record never became something Andy felt
                  represented the sound he wanted the two of them to be known for. Lia allowed the song
                  to remain without being publicly presented as its featured artist.
                </p>
                <p>
                  It could have ended there.
                  <br />
                  It didn&rsquo;t.
                </p>
              </div>
              <p className="mt-6 text-lg font-bold uppercase tracking-wide font-sans" style={{ color: ACCENT }}>
                The beginning wasn&rsquo;t the end.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <img
                src="/releases/atog-full-circle.jpg"
                alt="DJ Andy'K and Lia Bonson in the studio"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* The Collaboration */}
        <section className="max-w-[640px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Collaboration
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              Own It &rarr; Almost Home &rarr; Attitude to Gratitude
            </h2>
            <ol className="divide-y" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              {COLLABORATION.map((step) => (
                <li key={step.n} className="py-5" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <span className="text-lg font-bold font-sans" style={{ color: "#ffffff" }}>
                      {step.n} &middot; {step.title}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm font-mono uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.8)" }}>
              Not a new collaboration.
            </p>
            <p className="text-lg italic font-serif" style={{ color: ACCENT }}>
              A collaboration that finally found its attitude.
            </p>
          </ScrollReveal>
        </section>

        {/* Three Versions */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[3/2]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <img
                src="/releases/atog-the-release.jpg"
                alt="DJ Andy'K and Lia Bonson at the mixing desk"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
                The Release
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-sans" style={{ color: "#ffffff" }}>
                Three Versions. One Attitude.
              </h2>
              <ul className="space-y-4">
                {turnTheAttitudeIntoGratitudeAlbum.tracks.map((track) => (
                  <li key={track.slug}>
                    <p className="text-base font-bold font-sans" style={{ color: "#ffffff" }}>
                      {String(track.n).padStart(2, "0")} / {track.title.replace(/^.*\((.*)\)$/, "$1")}
                    </p>
                    <p className="text-sm leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {track.story}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </section>

        {/* Making Of */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <img src="/releases/atog-making-of.jpg" alt="DJ Andy'K and Lia Bonson — making of" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <img src="/releases/atog-vocal-booth.jpg" alt="Lia Bonson recording vocals" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <img src="/releases/atog-working-on-the-mix.jpg" alt="DJ Andy'K and Lia Bonson working on the mix" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <img src="/releases/atog-reviewing-lyrics.jpg" alt="DJ Andy'K and Lia Bonson reviewing lyrics" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="text-center mt-10">
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
                Making Of
              </p>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight font-sans" style={{ color: "#ffffff" }}>
                &ldquo;This was supposed to be serious.&rdquo;
              </p>
              <p className="mt-2 text-lg italic font-serif" style={{ color: ACCENT }}>
                It lasted about five minutes.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Studio */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              In the Studio
            </p>
            <h2 className="text-2xl sm:text-3xl italic font-serif mb-10 text-center" style={{ color: "#ffffff" }}>
              Good music. Good people. Questionable behaviour.
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              "/releases/atog-studio-1.jpg",
              "/releases/atog-studio-2.jpg",
              "/releases/atog-studio-3.jpg",
            ].map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden flex items-center" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={src} alt="DJ Andy'K and Lia Bonson in the studio" className="w-full h-auto block" />
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
                ["Title", "Turn the Attitude Into Gratitude"],
                ["Primary Artist", "DJ Andy'K"],
                ["Featured Artist", "Lia Bonson"],
                ["Concept, Production & Release", "DJ Andy'K"],
                ["Featured Vocal / Performance", "Lia Bonson"],
                ["Creative Direction", "DJ Andy'K"],
                ["Release Editions", "Original Mix · Retro Rock Crossover Mix · Melodic Club Mix"],
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
              Anyway&hellip; Have a beautiful day, babe.
            </p>
            <p className="text-xl italic font-serif" style={{ color: ACCENT }}>
              I won&rsquo;t.
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
