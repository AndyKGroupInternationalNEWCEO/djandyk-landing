"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { isTrackOut } from "@/lib/albumStatus";
import AlbumTracks, { streamingLinks } from "@/components/coverflow/AlbumTracks";
import { borrowedSunshineAlbum } from "@/data/borrowed-sunshine-tracks";

const COVER = "/releases/borrowed-sunshine-cover.png";

const TRACKS = [
  {
    n: 1,
    title: "Too Hot To Go Home (feat. Ben Wheeler)",
    from: "feat. Ben Wheeler",
    story: "The city was already asleep, but neither of us wanted the night to end. Some goodbyes only happen when the sun comes up.",
    releaseDate: "2026-08-28",
    date: "28.8.2026",
    accent: "#E8A020",
    coverUrl: "/releases/too-hot-to-go-home.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/too-hot-to-go-home.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 2,
    title: "The Way You Smile",
    from: "DJ Andy'K",
    story: "You smiled for only a second, but the moment stayed forever. Some people never know how much one smile can change.",
    releaseDate: "2026-08-21",
    date: "21.8.2026",
    accent: "#F0C060",
    coverUrl: "/releases/the-way-you-smile.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/the-way-you-smile.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 3,
    title: "Take It Off Slowly (feat. Nicolas Beech)",
    from: "feat. Nicolas Beech",
    story: "Some nights are remembered because nothing was rushed. Every touch felt like it had all the time in the world.",
    releaseDate: "2026-08-14",
    date: "14.8.2026",
    accent: "#D4956A",
    coverUrl: "/releases/take-it-off-slowly.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/take-it-off-slowly.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 4,
    title: "Stay A Little Longer (feat. Ben Wheeler)",
    from: "feat. Ben Wheeler",
    story: "Morning was already waiting outside the window. We just weren't ready to let it in.",
    releaseDate: "2026-08-07",
    date: "7.8.2026",
    accent: "#C4845A",
    coverUrl: "/releases/stay-a-little-longer.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/stay-a-little-longer.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 5,
    title: "Borrowed Sunshine",
    from: "DJ Andy'K",
    story: "Not every beautiful moment belongs to us forever. Sometimes happiness is only borrowed.",
    releaseDate: "2026-07-31",
    date: "31.7.2026",
    accent: "#E8A020",
    coverUrl: "/releases/borrowed-sunshine.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/borrowed-sunshine.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 6,
    title: "One More Bad Idea (feat. Mark Lutscher)",
    from: "feat. Mark Lutscher",
    story: "We both knew exactly where this would end. That never stopped us from beginning.",
    releaseDate: "2026-09-04",
    date: "4.9.2026",
    accent: "#B87040",
    coverUrl: "/releases/one-more-bad-idea.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/one-more-bad-idea.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 7,
    title: "We Outran Tomorrow (feat. Max Liem)",
    from: "feat. Max Liem",
    story: "For one night, tomorrow couldn't find us. We lived as if sunrise had forgotten our names.",
    releaseDate: "2026-09-11",
    date: "11.9.2026",
    accent: "#A06030",
    coverUrl: "/releases/we-outran-tomorrow.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/we-outran-tomorrow.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 8,
    title: "Hands All Over Me",
    from: "DJ Andy'K",
    story: "The distance disappeared before the words did. Some moments ask for surrender, not permission.",
    releaseDate: "2026-09-18",
    date: "18.9.2026",
    accent: "#906050",
    coverUrl: "/releases/hands-all-over-me.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/hands-all-over-me.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 9,
    title: "Half Past Summer",
    from: "DJ Andy'K",
    story: "You can feel summer leaving long before it says goodbye. Some sunsets never stop following you.",
    releaseDate: "2026-09-25",
    date: "25.9.2026",
    accent: "#C09060",
    coverUrl: "/releases/half-past-summer.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/half-past-summer.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
  {
    n: 10,
    title: "Nothing Asked To Stay",
    from: "DJ Andy'K",
    story: "No promises were broken because none were ever made. Sometimes silence is the only goodbye people leave behind.",
    releaseDate: "2026-10-03",
    date: "3.10.2026",
    accent: "#8A7060",
    coverUrl: "/releases/nothing-asked-to-stay.png",
    videoUrl: null as string | null,
    audioSrc: "/audio/nothing-asked-to-stay.mp3",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [] as string[][],
  },
];


const GOLD = "#E8A020";
const FULL_ALBUM_RELEASE_DATE = "2026-10-09";

export default function BorrowedSunshineClient({ initialSlug }: { initialSlug?: string } = {}) {
  // Badge follows the full-album date (9.10.2026), not the last single.
  const albumStatus = isTrackOut(FULL_ALBUM_RELEASE_DATE) ? "released" : "in-progress";

  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero — full-width cover (swap to a video like no-translation-hero.mp4 once one exists) */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78dvh" }}>
          <video
            src="/videos/borrowed-sunshine-hero.mp4"
            poster={COVER}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 0%" }}
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
              style={{ color: GOLD, borderColor: `${GOLD}55`, background: "rgba(0,0,0,0.4)" }}
            >
              {albumStatus === "released" ? "Released" : "Album · Trance · 2026"}
            </span>

            <h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              BORROWED SUNSHINE
            </h1>

            <p
              className="text-lg font-light mb-4 font-mono uppercase tracking-[0.2em]"
              style={{ color: GOLD }}
            >
              Trance / Progressive Trance
            </p>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              10 Stories. 10 Moments You&apos;ll Never Forget.
              <br />
              Full album: 9.10.2026
            </p>

            <a
              href="/downloads/borrowed-sunshine-album-booklet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded border transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: `${GOLD}55`, color: GOLD, background: "rgba(0,0,0,0.4)" }}
            >
              Download Album Booklet (PDF)
            </a>
          </div>
        </section>

        <AlbumTracks album={borrowedSunshineAlbum} initialSlug={initialSlug} background="#0d1117" trackLinks={(t) => streamingLinks(TRACKS.find((x) => x.n === t.n))} />

        {/* Full tracklist artwork — full-bleed, same treatment as the hero */}
        <section className="relative w-full overflow-hidden">
          <video
            src="/videos/borrowed-sunshine-tracklist.mp4"
            poster="/releases/borrowed-sunshine-tracklist.png"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />

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
