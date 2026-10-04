"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CoverFlow from "@/components/coverflow/CoverFlow";
import { littleBoyLittleGirlAlbum } from "@/data/little-boy-little-girl-tracks";

const COVER = littleBoyLittleGirlAlbum.heroCoverSrc;
const ACCENT = littleBoyLittleGirlAlbum.accent;
const BG = "#101116";

// All copy below is taken verbatim from the official single booklet.
const CHAPTERS = [
  {
    chapter: "Chapter One · The Story",
    label: "Little Boy",
    heading: "Hearing Everything at Once.",
    paragraphs: [
      "Little Boy, Let the Signal In explores ADHD from childhood into adulthood — racing thoughts, sensory overload, unfinished ideas, hyperfocus, time distortion and the feeling of hearing everything at once.",
      "The “signal” represents a mind that was never empty or disconnected; it was receiving more than people around it could see.",
    ],
    quote: "You didn’t lose the signal. The signal was always there.",
    stat: {
      tag: "Little Boy · ADHD",
      figure: "14.7 Million",
      unit: "People Worldwide",
      text: "Adults aged 35–39 are estimated to live with persistent ADHD worldwide.",
      source: "Global estimate, 2020 · Journal of Global Health",
    },
  },
  {
    chapter: "Chapter Two · The Story",
    label: "Little Girl",
    heading: "A Different Sensory Rhythm.",
    paragraphs: [
      "Little Girl, Breathe Endlessly explores autism through a different sensory rhythm — sound, light, routine, emotion, communication and the need for space in a world that often expects everyone to experience life in the same way.",
      "The song is not about changing the girl. It is about allowing her to exist, breathe and remain connected to her own inner world.",
    ],
    quote: "The light still remembers you.",
    stat: {
      tag: "Little Girl · Autism",
      figure: "19.7 Million",
      unit: "Females Worldwide",
      text: "Estimated autistic females globally in 2021.",
      source: "Global estimate, 2021 · GBD 2021",
    },
  },
];

// Booklet pages 19–21: three photo groups with their captions.
const BEHIND_THE_SONG = [
  { title: "In the Studio", photos: [4, 9, 5] },
  { title: "Two Voices, One Session.", photos: [8, 7, 2] },
  { title: "Written by Hand.", photos: [1, 3, 6] },
].map((g) => ({ ...g, photos: g.photos.map((n) => `/releases/lblg-studio-${n}.jpg`) }));

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

            <p className="mt-5 text-sm sm:text-base leading-relaxed italic font-serif max-w-[560px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Different minds. Different signals. Still here.
            </p>

            <a
              href="/downloads/little-boy-little-girl-booklet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded border transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: `${ACCENT}55`, color: ACCENT, background: "rgba(0,0,0,0.4)" }}
            >
              Download Digital Booklet (PDF)
            </a>
          </div>
        </section>

        {/* Cover Flow — two songs */}
        <div id="track" style={{ background: BG }}>
          <CoverFlow album={littleBoyLittleGirlAlbum} initialSlug={initialSlug} />
        </div>

        {/* The Project */}
        <section className="max-w-[640px] mx-auto px-6 py-20">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              The Project
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 font-sans" style={{ color: "#ffffff" }}>
              Two Songs.
              <br />
              Two Different Signals.
              <br />
              One Shared World.
            </h2>
            <div className="space-y-5 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                <em>Little Boy &amp; Little Girl</em> is a two-track project about neurodiversity and the different
                ways a mind can experience the same world.
              </p>
              <p>
                Together, the songs are not intended to define every ADHD or autistic experience. They are musical
                interpretations of experiences that are often difficult to explain in ordinary words.
              </p>
              <p>
                The project is connected to October — ADHD Awareness Month, while <em>Little Girl</em> expands the
                conversation from ADHD into the wider subject of neurodiversity and autism.
              </p>
            </div>
            <p className="mt-8 pl-5 text-lg italic font-serif" style={{ color: "#ffffff", borderLeft: `2px solid ${ACCENT}` }}>
              Different minds. Different signals. Still here.
            </p>
          </ScrollReveal>
        </section>

        {/* Chapters — one per song */}
        {tracks.map((track, i) => {
          const c = CHAPTERS[i];
          return (
            <section key={track.slug} className="max-w-[1100px] mx-auto px-6 pb-24">
              <ScrollReveal className={`grid grid-cols-1 sm:grid-cols-2 gap-10 items-center ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}>
                <a
                  href={`/${littleBoyLittleGirlAlbum.slug}/${track.slug}#track`}
                  className="block rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <img src={track.coverUrl} alt={track.title} className="w-full aspect-square object-cover" />
                </a>
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: track.accent }}>
                    {c.chapter}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-sans" style={{ color: "#ffffff" }}>
                    {c.heading}
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {c.paragraphs.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                  <p className="mt-6 pl-5 text-lg italic font-serif" style={{ color: "#ffffff", borderLeft: `2px solid ${track.accent}` }}>
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <p className="mt-1 pl-5 text-xs font-mono uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {c.label}
                  </p>
                  <div className="mt-8 rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] mb-2" style={{ color: track.accent }}>
                      {c.stat.tag}
                    </p>
                    <p className="text-2xl font-bold tracking-tight font-sans" style={{ color: "#ffffff" }}>
                      {c.stat.figure}{" "}
                      <span className="text-sm font-mono uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {c.stat.unit}
                      </span>
                    </p>
                    <p className="mt-2 text-sm font-serif" style={{ color: "rgba(255,255,255,0.6)" }}>{c.stat.text}</p>
                    <p className="mt-1 text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>{c.stat.source}</p>
                  </div>
                </div>
              </ScrollReveal>
            </section>
          );
        })}

        {/* Behind the Song */}
        <section className="max-w-[1100px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4 text-center" style={{ color: ACCENT }}>
              Behind the Song
            </p>
            <h2 className="text-2xl sm:text-3xl italic font-serif mb-12 text-center" style={{ color: "#ffffff" }}>
              DJ Andy&apos;K &times; Thymoty Lorrens
            </h2>
          </ScrollReveal>
          <div className="space-y-14">
            {BEHIND_THE_SONG.map((group) => (
              <div key={group.title}>
                <ScrollReveal>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 font-sans" style={{ color: "#ffffff" }}>
                    {group.title}
                  </h3>
                </ScrollReveal>
                <ScrollReveal stagger className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                  {group.photos.map((src) => (
                    <div key={src} className="rounded-2xl overflow-hidden aspect-square" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                      <img src={src} alt={`${group.title} — DJ Andy'K and Thymoty Lorrens`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </ScrollReveal>
              </div>
            ))}
          </div>
        </section>

        {/* Music & Release */}
        <section className="max-w-[640px] mx-auto px-6 pb-24">
          <ScrollReveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: ACCENT }}>
              Music &amp; Release
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 font-sans" style={{ color: "#ffffff" }}>
              Production Notes
            </h2>
            <p className="text-base leading-relaxed font-serif" style={{ color: "rgba(255,255,255,0.65)" }}>
              Progressive Trance / Progressive House, 136 BPM, D minor. An intimate close-mic male vocal sits over
              progressive rolling bass, a glass/pluck motif, felt piano and chamber strings — controlled rather than
              festival-style uplift.
            </p>
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
                ["Artist / Producer", "DJ Andy'K"],
                ["Featured Artist", "Thymoty Lorrens"],
                ["Written / Created By", "DJ Andy'K"],
                ["Produced By", "DJ Andy'K"],
                ["Project", littleBoyLittleGirlAlbum.title],
                ["Tracks", tracks.map((t) => t.title).join(" · ")],
                ["Tempo / Key", "136 BPM · D minor"],
                ["Release", "3.10.2026"],
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
              Two songs. Two different signals. One shared world.
            </p>
            <p className="text-base leading-relaxed font-serif mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Not every mind was built to move the same way — and none of them needed fixing to begin with.
            </p>
            <p className="text-xl italic font-serif" style={{ color: ACCENT }}>
              Different minds. Different signals. Still here.
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
