"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COVER = "/releases/euphoria-needs-no-story-cover.png";
const ACCENT = "#E8B020";

const TRACKS = [
  {
    n: 1,
    title: "Breathe Me Back to Life",
    from: "feat. Mattew Brexon",
    story:
      "A breath becomes the dividing line between fading away and returning. The opening track turns vulnerability into motion: one spark, one heartbeat, and the will to remain.",
    accent: "#4AC8E0",
    coverUrl: "/releases/breathe-me-back-to-life.png",
    audioSrc: null as string | null,
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["[Verse 1]", "I'm on the edge again", "Cold hands, empty room", "Your name in my chest", "Like a beat that wants you"],
      ["I taste the night air", "I count every crack", "One step from the dark", "If you want me, come back"],
      ["[Pre-Chorus]", "Pull me closer now", "Don't let me fade out", "Hear me in the silence", "Say it through the doubt"],
      ["[Chorus]", "Breathe me back to life", "Breathe me back to life", "Hold me in your light", "Breathe me back to life"],
      ["Breathe me back to life", "Breathe me back to life", "I'm still here for you", "Breathe me back to life"],
      ["[Verse 2]", "Glass on the floor", "Moon on the tile", "I've been holding my breath", "For a long, long while"],
      ["Your touch in my mind", "Your voice in my skin", "Open the door", "Let the heartbeat begin"],
      ["[Pre-Chorus]", "Pull me closer now", "Don't let me fade out", "Hear me in the silence", "Say it through the doubt"],
      ["[Chorus]", "Breathe me back to life", "Breathe me back to life", "Hold me in your light", "Breathe me back to life"],
      ["Breathe me back to life", "Breathe me back to life", "I'm still here for you", "Breathe me back to life"],
      ["[Bridge]", "If I drift too far", "Call me by my name", "One spark, one breath", "And I'm awake again"],
      ["[Final Chorus]", "Breathe me back to life", "Breathe me back to life", "Hold me in your light", "Breathe me back to life"],
      ["Breathe me back to life", "Breathe me back to life", "I'm still here for you", "Breathe me back to life"],
    ] as string[][],
  },
  {
    n: 2,
    title: "Alive in the Afterglow",
    from: "feat. Jullian Recherr",
    story:
      "Survival is not shown as an escape, but as light remaining inside every scar. The afterglow becomes proof that the darkness did not win.",
    accent: "#E0A050",
    coverUrl: "/releases/alive-in-the-afterglow.png",
    audioSrc: null as string | null,
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["[Intro]", "Hands on the glass", "I'm still here", "Gold on my skin", "I'm still here", "Heart in my throat", "Turned to a beacon", "One more step", "And I'm beyond the ceiling"],
      ["[Verse 1]", "Morning hit slow", "But I woke up shining", "Scars on my arms", "Look like map lines", "You said I'd fade", "I said watch me glow", "I kept that spark", "Where the dark can't go"],
      ["[Pre-Chorus]", "Now the air is thinner", "I can feel it pull", "Every wound gets brighter", "When I let it burn"],
      ["[Chorus]", "Alive in the afterglow", "Alive in the afterglow", "Hold me close", "Watch me grow", "Alive in the afterglow", "Alive in the afterglow", "I was lost", "Now I know"],
      ["[Verse 2]", "Rain on the roof", "And it sounds like mercy", "I left that room", "But it never left me"],
      ["[Pre-Chorus]", "Now the air is thinner", "I can feel it pull", "Every wound gets brighter", "When I let it burn"],
      ["[Chorus]", "Alive in the afterglow", "Alive in the afterglow", "Hold me close", "Watch me grow", "Alive in the afterglow", "Alive in the afterglow", "I was lost", "Now I know"],
      ["[Bridge]", "Take me higher", "Take me through", "If I break apart", "I break into truth"],
      ["[Final Chorus]", "Alive in the afterglow", "Alive in the afterglow", "Hold me close", "Watch me grow", "Alive in the afterglow", "Alive in the afterglow", "I was lost", "Now I know"],
    ] as string[][],
  },
  {
    n: 3,
    title: "Even Silence Sounds Like You",
    from: "feat. Robert Zigller",
    story:
      "An empty room keeps speaking through objects, memory and echo. Even without a voice, silence carries the shape of someone who remains present.",
    accent: "#4A90D0",
    coverUrl: "/releases/even-silence-sounds-like-you.png",
    audioSrc: null as string | null,
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["[Verse 1]", "Your coat on my chair", "Rain on the glass", "You left your key", "But I still hear your laugh", "The room stays warm", "Then turns to blue", "I turn around", "And find you"],
      ["[Pre-Chorus]", "In the dark", "In the hush", "Your name moves first", "Then it rushes", "I close my eyes", "You come through"],
      ["[Chorus]", "Even silence sounds like you", "Even silence sounds like you", "Say my name and pull me under", "Even silence sounds like you", "Even silence sounds like you", "I keep falling back to thunder"],
      ["[Verse 2]", "Half a cup", "By the sink", "Your perfume hangs", "On the brink", "The clock ticks slow", "Then disappears", "I hear your touch", "In my ears"],
      ["[Pre-Chorus]", "In the dark", "In the hush", "Your name moves first", "Then it rushes", "I close my eyes", "You come through"],
      ["[Chorus]", "Even silence sounds like you", "Even silence sounds like you", "Say my name and pull me under", "Even silence sounds like you", "Even silence sounds like you", "I keep falling back to thunder"],
      ["[Bridge]", "If you're a ghost", "Stay close tonight", "Spin me once", "In folded light", "I'll follow where", "The echoes go", "Until the floor", "Lets go"],
      ["[Chorus]", "Even silence sounds like you", "Even silence sounds like you", "Say my name and pull me under", "Even silence sounds like you", "Even silence sounds like you", "I keep falling back to thunder"],
    ] as string[][],
  },
  {
    n: 4,
    title: "After You Left",
    from: "feat. Robert Zigller",
    story:
      "Departure becomes the impossible place where two people finally meet. Timing is cruel, but the space left behind reveals what was always real.",
    accent: "#C87840",
    coverUrl: "/releases/after-you-left.png",
    audioSrc: null as string | null,
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["[Verse 1]", "I met you after you left", "Still had rain on your sleeve", "You said my name like a dare", "Like you knew what it did to me", "I was two steps too late", "You were already gone", "Then you turned back around", "And the whole room came undone"],
      ["[Pre-Chorus]", "I should've known better", "Than to let that moment pass", "Your eyes hit mine and I", "Fell straight through the glass"],
      ["[Chorus]", "After you left, I found you", "After you left, you found me", "After you left, we were closer", "Than we ever got to be", "After you left, I held on", "To the space between your hands", "After you left, I knew it", "I was never just a chance"],
      ["[Verse 2]", "There was a chair by the door", "And your coat on the back", "I kept watching your mouth", "For the words that I lack", "You laughed like a red light", "I ran through anyway", "One second I was alone", "Then you blew that dark away"],
      ["[Pre-Chorus]", "I should've known better", "Than to let that moment pass", "Your eyes hit mine and I", "Fell straight through the glass"],
      ["[Chorus]", "After you left, I found you", "After you left, you found me", "After you left, we were closer", "Than we ever got to be", "After you left, I held on", "To the space between your hands", "After you left, I knew it", "I was never just a chance"],
      ["[Bridge]", "Maybe timing was cruel", "Maybe fate was just slow", "All I know is your silence", "Made my whole body glow"],
      ["[Final Chorus]", "After you left, I found you", "After you left, you found me", "After you left, we were closer", "Than we ever got to be", "After you left, I held on", "To the space between your hands", "After you left, I knew it", "I was never just a chance"],
    ] as string[][],
  },
  {
    n: 5,
    title: "Temporary Immortals",
    from: "feat. Thymoty Lorrens",
    story:
      "Forever is not required for something to matter. Two people burn brightly inside borrowed time, knowing that what ends can still leave a permanent mark.",
    accent: "#9060E0",
    coverUrl: "/releases/temporary-immortals.png",
    audioSrc: null as string | null,
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["[Verse 1]", "You pulled me from the frost", "With your hand on my skin", "We were two small sparks", "Learning how to begin", "Glass in the blood moon", "Silver on your tongue", "We stayed too close to heaven", "For the years we were given"],
      ["[Pre-Chorus]", "Hold me while the world turns", "Hold me while it burns", "If this is only borrowed", "I'll spend it on you"],
      ["[Chorus]", "Temporary immortals", "We burn, we burn", "Temporary immortals", "Then return, return", "Say my name, say my name", "Let it ring through the dark", "Temporary immortals", "We leave a mark"],
      ["[Verse 2]", "Your boots by the doorway", "My coat on the chair", "Rain on the window", "Like a code in the air", "We knew what would happen", "Still we reached for the flame", "If forever was a rumor", "We were still here today"],
      ["[Pre-Chorus]", "Hold me while the world turns", "Hold me while it burns", "If this is only borrowed", "I'll spend it on you"],
      ["[Chorus]", "Temporary immortals", "We burn, we burn", "Temporary immortals", "Then return, return", "Say my name, say my name", "Let it ring through the dark", "Temporary immortals", "We leave a mark"],
      ["[Bridge]", "When the hours fold in", "And the sky goes thin", "I still feel your pulse", "Under my skin", "If the dawn takes us back", "To the same old dust", "We were never meant to last", "But we were enough"],
      ["[Final Chorus]", "Temporary immortals", "We burn, we burn", "Temporary immortals", "Then return, return", "Say my name, say my name", "Let it ring through the dark", "Temporary immortals", "We leave a mark", "Temporary immortals", "We leave a mark"],
    ] as string[][],
  },
  {
    n: 6,
    title: "The Distance Learned to Dance",
    from: "feat. Thymoty Lorrens",
    story:
      "Distance does not disappear; it changes rhythm. Fear loses time, two tired hearts find the same pulse, and the space between them begins to dance.",
    accent: "#4070E0",
    coverUrl: "/releases/the-distance-learned-to-dance.png",
    audioSrc: null as string | null,
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["[Verse 1]", "You met me at the edge of dawn", "Where every step felt way too long", "I kept my guard in a paper ring", "You said, \"Just move, let the floor do its thing\"", "The room went soft, then it turned to gold", "Your name on my tongue felt brave and cold", "I watched the fear start losing time", "Like a tide that forgot its line"],
      ["[Pre-Chorus]", "Hold on", "We're almost there", "Hands up", "Forget the stair", "Take my pulse", "Take my pace", "If I fall", "Meet me in space"],
      ["[Chorus]", "The distance learned to dance", "The distance learned to dance", "We came alive in one hard glance", "The distance learned to dance", "The distance learned to dance", "The distance learned to dance", "Pull me close, don't let it pass", "The distance learned to dance"],
      ["[Verse 2]", "Now every mile is a bright-blue spark", "Every old regret cuts less in the dark", "I wore your laughter like a key", "And it opened the locked-up part of me", "We were all nerves, then we were air", "Two tired hearts with nowhere to care", "Then that slow ache got a pulse and spin", "And I swear the whole world leaned us in"],
      ["[Pre-Chorus]", "Hold on", "We're almost there", "Hands up", "Forget the stair", "Take my pulse", "Take my pace", "If I fall", "Meet me in space"],
      ["[Chorus]", "The distance learned to dance", "The distance learned to dance", "We came alive in one hard glance", "The distance learned to dance", "The distance learned to dance", "The distance learned to dance", "Pull me close, don't let it pass", "The distance learned to dance"],
      ["[Bridge / Breakdown]", "In the hush before the light", "I heard your voice cut through the night", "Not a promise, not a prayer", "Just your hand saying, \"Come here\""],
      ["[Final Chorus]", "The distance learned to dance", "The distance learned to dance", "We came alive in one hard glance", "The distance learned to dance", "The distance learned to dance", "The distance learned to dance", "Pull me close, don't let it pass", "The distance learned to dance (dance)"],
    ] as string[][],
  },
  {
    n: 7,
    title: "We Were Future Once",
    from: "feat. Robert Zigller",
    story:
      "Youth once felt like a guaranteed destination. The future faded, but its pulse remains alive in the people who carried it together.",
    accent: "#60D8E8",
    coverUrl: "/releases/we-were-future-once.png",
    audioSrc: null as string | null,
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["[Verse 1]", "We had a name in the dark", "Tagged in white on the side of a night bus", "Cheap shoes, hard laughs", "Moving like nothing could touch us", "We lived in the blue hour", "With our plans zipped up in a paper bag", "You said, \"one day, one day\"", "And I held that word like a flag"],
      ["[Pre-Chorus]", "Now the kick drums fade", "And the crowd moves on", "But I still hear you say", "\"We're not gone\""],
      ["[Chorus]", "We were future once", "We were future once", "Pull me back in the pulse", "Pull me back in the pulse", "We were future once", "We were future once", "Don't let it drop to dust", "Don't let it drop to dust"],
      ["[Verse 2]", "There was static on the glass", "And a train carving through the late bend", "You laughed through the noise", "Like the whole thing might restart again", "Now the edges are worn", "But that spark still kicks in me", "If I reach for your hand", "Will you still know me?"],
      ["[Pre-Chorus]", "Now the kick drums fade", "And the crowd moves on", "But I still hear you say", "\"We're not gone\""],
      ["[Chorus]", "We were future once", "We were future once", "Pull me back in the pulse", "Pull me back in the pulse", "We were future once", "We were future once", "Don't let it drop to dust", "Don't let it drop to dust"],
      ["[Bridge / Half-time breakdown]", "If the bassline cuts out", "I'll keep your name in the drop", "If the road slips away", "Meet me where the lights stop"],
      ["[Chorus]", "We were future once", "We were future once", "Pull me back in the pulse", "Pull me back in the pulse", "We were future once", "We were future once", "Still alive in us", "Still alive in us"],
    ] as string[][],
  },
  {
    n: 8,
    title: "Euphoria Needs No Story",
    from: "feat. Mattew Brexon",
    story:
      "The album arrives at a feeling that requires no explanation, memory or future. Nothing needs to happen first. Euphoria exists as pulse, frequency and pure presence.",
    accent: "#E8B020",
    coverUrl: "/releases/euphoria-needs-no-story.png",
    audioSrc: null as string | null,
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["[Intro]", "No reason.", "No warning.", "No beginning.", "Just this."],
      ["[Verse 1]", "A pulse beneath the surface,", "a signal in my blood.", "Nothing had to happen.", "I knew what it was."],
      ["No memory awakened.", "No future in my sight.", "Only every part of me", "becoming amplified."],
      ["[Pre-Chorus]", "I don't need to name it.", "I don't need to know.", "When the feeling finds me,", "I let everything go."],
      ["[Chorus]", "Euphoria needs no story.", "Let it move,", "let it move through me.", "Euphoria needs no story.", "No words -", "only frequency."],
      ["[Trance Drop]", "Euphoria…", "No story.", "Euphoria…", "Only frequency."],
      ["[Verse 2]", "No hero and no ending.", "No promise to believe.", "Nothing lost or missing.", "Nothing underneath."],
      ["Every sound surrounds me.", "Every rhythm multiplies.", "I am not becoming -", "I have never felt more alive."],
      ["[Pre-Chorus]", "I don't need to name it.", "I don't need to know.", "When the feeling finds me,", "I let everything go."],
      ["[Chorus]", "Euphoria needs no story.", "Let it move,", "let it move through me.", "Euphoria needs no story.", "No words -", "only frequency."],
      ["[Second Trance Drop]", "Euphoria…", "No story.", "Euphoria…", "Only frequency."],
      ["[Breakdown]", "No past.", "No future.", "No answer.", "No why.", "Just a feeling", "too alive to describe."],
      ["[Build]", "No reason.", "No warning.", "No story.", "Just -", "Euphoria."],
      ["[Final Chorus]", "Euphoria needs no story.", "Let it move,", "let it move through me.", "Euphoria needs no story.", "No words -", "only frequency.", "Euphoria needs no story.", "Nothing else needs to be said.", "Euphoria needs no story.", "Just the rhythm", "in my head."],
      ["[Final Trance Drop]", "Euphoria…", "No story.", "Euphoria…", "Only frequency."],
      ["[Outro]", "No story.", "Just this."],
    ] as string[][],
  },
];

type Track = (typeof TRACKS)[number];

function TrackCard({ track }: { track: Track }) {
  const [lyricsOpen, setLyricsOpen] = useState(false);

  return (
    <div
      className="card-glow w-[260px] sm:w-[280px] shrink-0 snap-start"
      style={{ color: track.accent }}
    >
      <div
        className="card-glow-inner rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderTop: `2px solid ${track.accent}`,
        }}
      >
        {/* Cover — full width square */}
        <div className="aspect-square w-full relative overflow-hidden">
          <img
            src={track.coverUrl}
            alt={track.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end p-3">
            <span
              className="text-[9px] font-mono uppercase tracking-[0.3em] px-2.5 py-1 rounded-full border"
              style={{
                color: "rgba(255,255,255,0.4)",
                borderColor: "rgba(255,255,255,0.15)",
                background: "rgba(0,0,0,0.6)",
              }}
            >
              Coming Soon
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Number + feature credit line */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold" style={{ color: track.accent }}>
              {String(track.n).padStart(2, "0")}
            </span>
            <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.12)" }}>/</span>
            <span className="text-xs font-mono uppercase tracking-widest min-w-0 truncate" style={{ color: "rgba(255,255,255,0.3)" }}>
              {track.from}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-lg font-bold tracking-tight mb-1 leading-snug font-sans"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {track.title}
          </h3>

          {/* Release status */}
          <p className="text-[11px] font-mono uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
            Release · TBA
          </p>

          {/* Story — pull-quote */}
          <p
            className="text-sm leading-relaxed mb-3 font-serif italic"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            {track.story}
          </p>

          {/* Lyrics toggle */}
          <button
            onClick={() => setLyricsOpen((o) => !o)}
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest mb-3 py-1.5 transition-opacity hover:opacity-70 w-fit"
            style={{ color: track.accent }}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-3 h-3 transition-transform duration-200"
              style={{ transform: lyricsOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
            {lyricsOpen ? "Hide lyrics" : "Read lyrics"}
          </button>

          {/* Lyrics block — stanza format */}
          {lyricsOpen && (
            <div
              className="rounded-xl p-4 mb-3"
              style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {track.lyrics.map((stanza, si) => (
                <div key={si} style={{ marginBottom: si < track.lyrics.length - 1 ? "1rem" : 0 }}>
                  {stanza.map((line, li) => (
                    <p
                      key={li}
                      className="text-sm leading-relaxed font-serif"
                      style={{ color: "rgba(255,255,255,0.62)" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Streaming links */}
          <div className="flex gap-2 flex-wrap">
            <span
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
              style={{ color: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              Preview — soon
            </span>
            <span
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
              style={{ color: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              Streaming — soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EuphoriaNeedsNoStoryClient() {
  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero — full-width animated cover */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: "78vh" }}>
          <img
            src={COVER}
            alt="Euphoria Needs No Story — DJ Andy'K"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gold light pulse through the cracks — subtle, slow */}
          <div
            className="euphoria-crack-glow absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 55% 40%, rgba(232,176,32,0.35), transparent 70%)",
              mixBlendMode: "screen",
            }}
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

          <div className="relative z-10 flex flex-col items-center justify-end text-center h-full px-6 pb-14" style={{ minHeight: "78vh" }}>
            <span
              className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-5 px-3 py-1 rounded-full border"
              style={{ color: ACCENT, borderColor: `${ACCENT}55`, background: "rgba(0,0,0,0.4)" }}
            >
              Album · Trance · 2026
            </span>

            <h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-3 font-sans max-w-[900px]"
              style={{ color: "#ffffff", textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
            >
              EUPHORIA NEEDS NO STORY
            </h1>

            <p
              className="text-base sm:text-lg font-light mb-5 font-mono uppercase tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              Eight Tracks. Four Voices. One Continuous Trance Journey.
            </p>

            <p className="text-sm leading-relaxed mb-5 max-w-[600px]" style={{ color: "rgba(255,255,255,0.55)" }}>
              Euphoria Needs No Story moves through rebirth, memory, silence, distance and
              temporary immortality before arriving at pure euphoria — without needing one
              final explanation.
            </p>

            <a
              href="#tracks"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5 mb-6"
              style={{ background: ACCENT, color: "#111111" }}
            >
              Explore the Album ↓
            </a>

            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
              Written, produced &amp; created by DJ Andy&apos;K
              <br />
              Featuring Mattew Brexon, Jullian Recherr, Robert Zigller &amp; Thymoty Lorrens
            </p>
          </div>
        </section>

        {/* Track list — horizontal swipeable row */}
        <section id="tracks" className="pt-12 pb-12 max-w-[1100px] mx-auto">
          <div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-2">
            {TRACKS.map((track) => (
              <TrackCard key={track.n} track={track} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer in white wrapper so site CSS vars render correctly */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
