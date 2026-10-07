"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAlbumStatus } from "@/lib/albumStatus";
import AlbumTracks, { streamingLinks } from "@/components/coverflow/AlbumTracks";
import { noTranslationAlbum } from "@/data/no-translation-tracks";

const COVER = "/releases/no-translation-cover.png";

const TRACKS = [
  {
    n: 1,
    title: "Don't Look Away (Bana Öyle Bakma)",
    from: "feat. Emir Cem Karahan",
    story: "Some looks ask questions. Others already know the answer.",
    releaseDate: "2026-10-20",
    date: "20.10.2026",
    accent: "#E84C3C",
    coverUrl: "/releases/dont-look-away.png",
    videoUrl: "/videos/dont-look-away.mp4",
    audioSrc: "/audio/dont-look-away.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 2,
    title: "No Explanation (Bala Kalam)",
    from: "feat. Rania Al-Masri",
    story: "Some truths arrive without language. Some disappear before they can be explained.",
    releaseDate: "2026-10-27",
    date: "27.10.2026",
    accent: "#F0A020",
    coverUrl: "/releases/no-explanation.png",
    videoUrl: "/videos/no-explanation.mp4",
    audioSrc: "/audio/no-explanation.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 3,
    title: "Read My Face (Pa Fjalë)",
    from: "feat. Arta Gashi",
    story: "The face speaks before the voice is ready. Before a confession becomes a sentence, it appears in the eyes, the breath and the smallest movement of the face.",
    releaseDate: "2026-11-03",
    date: "3.11.2026",
    accent: "#4A90D9",
    coverUrl: "/releases/read-my-face.png",
    videoUrl: "/videos/read-my-face.mp4",
    audioSrc: "/audio/read-my-face.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 4,
    title: "Read It in My Eyes (Pročitaj Mi u Očima)",
    from: "feat. Luka Vuković",
    story: "No confession. No disguise. The truth was visible all along.",
    releaseDate: "2026-11-10",
    date: "10.11.2026",
    accent: "#D9432E",
    coverUrl: "/releases/read-it-in-my-eyes.png",
    videoUrl: "/videos/read-it-in-my-eyes.mp4",
    audioSrc: "/audio/read-it-in-my-eyes.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 5,
    title: "Before Dawn (Predi Zori)",
    from: "feat. Mira Velinova",
    story: "The night doesn't end quietly — it builds until the light breaks through. Some nights don't fade — they rise, rhythm by rhythm, toward the first light.",
    releaseDate: "2026-11-17",
    date: "17.11.2026",
    accent: "#40E0C0",
    coverUrl: "/releases/before-dawn.png",
    videoUrl: "/videos/before-dawn.mp4",
    audioSrc: "/audio/before-dawn.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 6,
    title: "Under Your Skin (Sub Pielea Ta)",
    from: "feat. Andreea Dumitrescu",
    story: "You can change the story. You can erase every trace. But some people never completely leave.",
    releaseDate: "2026-11-24",
    date: "24.11.2026",
    accent: "#E8B020",
    coverUrl: "/releases/under-your-skin.png",
    videoUrl: "/videos/under-your-skin.mp4",
    audioSrc: "/audio/under-your-skin.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
];


const ACCENT = "#E84C3C";

export default function NoTranslationClient({ initialSlug }: { initialSlug?: string } = {}) {
  const albumStatus = getAlbumStatus(TRACKS);

  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero — full-width animated cover */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <video
            src="/videos/no-translation-hero.mp4"
            poster={COVER}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Legibility gradient */}
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
              {albumStatus === "released" ? "Released" : "Album · Melodic Progressive Tech House · 2026"}
            </span>

            <h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              NO TRANSLATION
            </h1>

            <p
              className="text-lg font-light mb-4 font-mono uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              Six Languages. One Night. Nothing Needs Explaining.
            </p>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Words change. The night does not.
              <br />
              Full album: 1.12.2026
            </p>

            <a
              href="/downloads/no-translation-album-booklet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded border transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: `${ACCENT}55`, color: ACCENT, background: "rgba(0,0,0,0.4)" }}
            >
              Download Album Booklet (PDF)
            </a>
          </div>
        </section>

        <AlbumTracks album={noTranslationAlbum} initialSlug={initialSlug} background="#0d1117" trackLinks={(t) => streamingLinks(TRACKS.find((x) => x.n === t.n))} />

        {/* Full tracklist artwork — full-bleed, same treatment as the hero */}
        <section className="relative w-full overflow-hidden">
          <img src="/releases/no-translation-tracklist.png" alt="No Translation — official tracklist" className="w-full h-auto" />

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
