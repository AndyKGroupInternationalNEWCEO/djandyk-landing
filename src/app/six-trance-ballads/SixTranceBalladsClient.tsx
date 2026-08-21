"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAlbumStatus } from "@/lib/albumStatus";

const TRACKS = [
  {
    n: 1,
    title: "I Arrived As Someone Else",
    from: "From me, to me.",
    line: "I did not come back. I arrived as someone else.",
    releaseDate: "2026-06-12",
    date: "17.6.2026",
    accent: "#D2691E",
    coverUrl: "/releases/i-arrived-as-someone-else.png",
    audioSrc: "/audio/i-arrived-as-someone-else.mp3",
    soundcloudUrl: "https://soundcloud.com/djandyk_2024/i-arrived-as-someone-else?in=djandyk_2024/sets/i-arrived-as-someone-else&si=b6dd920a9cc9444597975e4772ff84e2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      [
        "I knew this air before.",
        "But not with these lungs.",
        "I knew these lights before.",
        "But not with these eyes.",
      ],
      [
        "I did not come back.",
        "I arrived as someone else.",
      ],
      [
        "The floor remembers footsteps",
        "that no longer belong to me.",
        "The glass reflects a face",
        "I had to become carefully.",
      ],
      [
        "There were names in the distance,",
        "old doors in the rain.",
        "I carried no answers,",
        "only proof I survived the change.",
      ],
      [
        "Do not ask where I was.",
        "Some places never explain.",
        "Do not call me by yesterday.",
        "I do not turn to that name.",
      ],
      [
        "I arrived as someone else,",
        "under lights that knew me before.",
        "The streets kept all my shadows,",
        "but I don't live there anymore.",
      ],
      [
        "I arrived as someone else,",
        "with the silence I carried through.",
        "I did not come back broken.",
        "I came back passing through.",
      ],
      [
        "I arrived…",
        "as someone else…",
      ],
      [
        "Not back…",
        "just through…",
      ],
      [
        "The map was still open,",
        "but it could not read my hands.",
        "Every road looked familiar,",
        "every corner changed its plans.",
      ],
      [
        "I saw the old windows,",
        "cold with borrowed light.",
        "They showed me who I had been,",
        "then disappeared into the night.",
      ],
      [
        "Do not ask what I lost.",
        "Some ghosts are not for display.",
        "Do not wait for the old me.",
        "He could not survive the way.",
      ],
      [
        "I arrived as someone else,",
        "under lights that knew me before.",
        "The streets kept all my shadows,",
        "but I don't live there anymore.",
      ],
      [
        "I arrived as someone else,",
        "with the silence I carried through.",
        "I did not come back broken.",
        "I came back passing through.",
      ],
      [
        "Somewhere between the gate and the ground,",
        "I stopped looking for home.",
        "Somewhere between the past and the sound,",
        "I learned to stand alone.",
      ],
      [
        "And if the old world calls me,",
        "let it call into the rain.",
        "I am not the man who left.",
        "I am not the man in pain.",
      ],
      [
        "I arrived as someone else,",
        "under lights that knew me before.",
        "The streets kept all my shadows,",
        "but I don't live there anymore.",
      ],
      [
        "I arrived as someone else,",
        "with the silence I carried through.",
        "I did not come back broken.",
        "I came back passing through.",
      ],
      [
        "I did not come back.",
        "I arrived as someone else.",
      ],
      [
        "Not back.",
        "Just through.",
      ],
    ],
  },
  {
    n: 2,
    title: "A Letter With No Address",
    from: "From me, to someone I couldn't name.",
    line: "A letter unsent. A feeling without a name.",
    releaseDate: "2026-06-19",
    date: "24.6.2026",
    accent: "#8B7355",
    coverUrl: "/releases/a-letter-with-no-address.png",
    audioSrc: "/audio/a-letter-with-no-address.mp3",
    soundcloudUrl: "https://soundcloud.com/djandyk_2024/a-letter-with-no-address/s-hZWE6ZPP0n8?in=djandyk_2024/sets/i-arrived-as-someone-else&si=9cbe7c1273c2489daabbde09981d2e61&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["I wrote your name in silence.", "But silence gave it back."],
      ["I folded every question", "and left the answer blank."],
      ["This was never sent.", "It had nowhere to go."],
      [
        "There is a page inside me",
        "I never learned to close.",
        "Not because I wanted you,",
        "but because nobody knows",
      ],
      [
        "what to call the feeling",
        "when it stays without a face,",
        "when it sits inside the chest",
        "like an unfinished place.",
      ],
      [
        "I did not know your number.",
        "I did not know your name.",
        "But something in the empty line",
        "kept writing you the same.",
      ],
      [
        "I wrote a letter with no address,",
        "to someone I could never name.",
        "I left it open on the table,",
        "but the silence never came.",
      ],
      [
        "I wrote a letter with no address,",
        "with every word I could not say.",
        "Maybe it was meant for someone.",
        "Maybe it was meant to stay.",
      ],
      ["No address…", "no name…"],
      ["I wrote it…", "anyway…"],
      [
        "The ink was never certain.",
        "The paper never lied.",
        "It held the shape of something",
        "I could not keep inside.",
      ],
      [
        "I kept it in a drawer",
        "where the small things disappear,",
        "not hidden from the world,",
        "just too honest to be near.",
      ],
      [
        "I did not call it longing.",
        "I did not call it loss.",
        "Some feelings have no language",
        "until they cost too much.",
      ],
      [
        "I wrote a letter with no address,",
        "to someone I could never name.",
        "I left it open on the table,",
        "but the silence never came.",
      ],
      [
        "I wrote a letter with no address,",
        "with every word I could not say.",
        "Maybe it was meant for someone.",
        "Maybe it was meant to stay.",
      ],
      [
        "If you were real, forgive me",
        "for never finding where.",
        "If you were only memory,",
        "thank you for being there.",
      ],
      [
        "If you were just the part of me",
        "that needed to be heard,",
        "then let this be the envelope",
        "around the final word.",
      ],
      [
        "I wrote a letter with no address,",
        "to someone I could never name.",
        "I left it open on the table,",
        "but the silence never came.",
      ],
      [
        "I wrote a letter with no address,",
        "with every word I could not say.",
        "Maybe it was meant for someone.",
        "Maybe it was meant to stay.",
      ],
      ["I wrote your name in silence.", "But silence gave it back."],
      ["So I left the letter open.", "No address.", "No name."],
    ],
  },
  {
    n: 3,
    title: "If This Finds You",
    from: "From me, to you.",
    line: "A message for the one who needed to hear it today.",
    releaseDate: "2026-06-26",
    date: "1.7.2026",
    accent: "#7EB8D4",
    coverUrl: "/releases/if-this-finds-you.png",
    audioSrc: "/audio/if-this-finds-you.mp3",
    soundcloudUrl: "https://soundcloud.com/djandyk_2024/if-this-finds-you/s-8xXlzZyJwko?in=djandyk_2024/sets/i-arrived-as-someone-else&si=0aad7416c19a4cbfb1dfe82031e12763&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["If this finds you tired,", "you don't have to explain."],
      ["Let the room stay quiet.", "Let the night keep your name."],
      ["You made it this far.", "That is enough for now."],
      ["I don't know where you are", "when this reaches your hands.", "Maybe on the floor,", "maybe trying to stand."],
      ["Maybe in the middle", "of a day that asked too much.", "Maybe holding yourself together", "with silence and touch."],
      ["I won't tell you to be stronger.", "I won't tell you what to do.", "I only made a little space", "and left it here for you."],
      ["If this finds you,", "let it stay beside you.", "You don't have to become light", "just to make it through."],
      ["If this finds you,", "when the world feels far away,", "take one breath inside the sound.", "You are still here today."],
      ["If this finds you…", "stay…"],
      ["One breath…", "today…"],
      ["There are doors you never opened", "because you had no hands left.", "There are words you never answered", "because the weight took your breath."],
      ["And maybe nobody noticed", "how much you had to carry.", "But I hope this sound arrives", "where your own voice got buried."],
      ["I won't ask you for a story.", "I won't ask you to be fine.", "Some roads are only crossed", "one quiet step at a time."],
      ["If this finds you,", "let it stay beside you.", "You don't have to become light", "just to make it through."],
      ["If this finds you,", "when the world feels far away,", "take one breath inside the sound.", "You are still here today."],
      ["If you cannot move yet,", "let the minutes move instead.", "If you cannot hope yet,", "let the music hold the thread."],
      ["Not every ending shouts.", "Not every healing shows.", "Some mornings come quietly", "before anybody knows."],
      ["If this finds you,", "let it stay beside you.", "You don't have to become light", "just to make it through."],
      ["If this finds you,", "when the world feels far away,", "take one breath inside the sound.", "You are still here today."],
      ["If this finds you tired,", "you don't have to explain."],
      ["Stay with the sound.", "One breath.", "Today."],
    ],
  },
  {
    n: 4,
    title: "Whatever You Believe",
    from: "From me, to God.",
    line: "I call it God. But whatever you believe, I hope it hears you too.",
    releaseDate: "2026-07-03",
    date: "8.7.2026",
    accent: "#C9A84C",
    coverUrl: "/releases/whatever-you-believe.png",
    audioSrc: "/audio/whatever-you-believe.mp3",
    soundcloudUrl: "https://soundcloud.com/djandyk_2024/whatever-you-believe/s-sTXJyDOO0Q2?in=djandyk_2024/sets/i-arrived-as-someone-else&si=811b52822de84c25bab18316abb3e1d6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["I don't know what you call it", "when the night stops answering."],
      ["God.", "Mercy.", "Light.", "Nothing."],
      ["I only know", "I was still speaking."],
      ["I have asked the ceiling", "questions it could never keep.", "I have put my hands together", "without knowing what it means."],
      ["Not for heaven.", "Not for proof.", "Not for someone to explain me."],
      ["Just for one quiet second", "where I did not have to carry", "everything alone."],
      ["I won't tell you what is holy.", "I won't tell you what is true.", "Some people kneel in silence.", "Some just break in two."],
      ["Whatever you believe,", "I hope it finds you there.", "When your voice has left your body", "and your name feels hard to wear."],
      ["Whatever you believe,", "let it hold what you can't show.", "When you run out of words,", "let the sound become the prayer."],
      ["Whatever you believe…", "finds you there…"],
      ["No words left…", "becomes the prayer…"],
      ["Some find it in a candle.", "Some find it in the rain.", "Some call a mother's picture", "just to make it through the day."],
      ["Some whisper to a statue.", "Some read the sky for signs.", "Some draw a little circle", "and step inside the line."],
      ["I don't laugh at any of them.", "I know what fear can do.", "When the floor leaves your body,", "you will reach for something too."],
      ["I won't ask you to believe me.", "I won't ask you to agree.", "But if something ever held you", "when nobody could see—"],
      ["then you know."],
      ["Whatever you believe,", "I hope it finds you there.", "When your voice has left your body", "and your name feels hard to wear."],
      ["Whatever you believe,", "let it hold what you can't show.", "When you run out of words,", "let the sound become the prayer."],
      ["Call it God", "when you need a Father."],
      ["Call it Mary", "when you need a Mother."],
      ["Call it Buddha", "when you need the stillness."],
      ["Call it spirit", "when you need the room to listen."],
      ["Call it energy.", "Call it mercy.", "Call it nothing", "if the name hurts too much."],
      ["I don't need to know your language", "to understand the reach."],
      ["Every human has a moment", "where the mouth becomes a bridge."],
      ["Whatever you believe,", "I hope it finds you there.", "When your voice has left your body", "and your name feels hard to wear."],
      ["Whatever you believe,", "let it hold what you can't show.", "When you run out of words,", "let the sound become the prayer."],
      ["I don't know what you call it", "when the night stops answering."],
      ["I call it God."],
      ["But whatever you believe,", "I hope it hears you too."],
      ["From me,", "to God."],
    ],
  },
  {
    n: 5,
    title: "The Past Still Had My Voice",
    from: "From me, to the past.",
    line: "A voice I left behind, still calling through the dark.",
    releaseDate: "2026-07-10",
    date: "15.7.2026",
    accent: "#C0392B",
    coverUrl: "/releases/the-past-still-had-my-voice.png",
    audioSrc: "/audio/the-past-still-had-my-voice.mp3",
    soundcloudUrl: "https://soundcloud.com/djandyk_2024/the-past-still-had-my-voice/s-RaSyy9yYRUD?in=djandyk_2024/sets/i-arrived-as-someone-else&si=bab1537d0b034df8911fb85ead8c5a02&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["I did not open the door", "to go back inside."],
      ["I only came to listen", "to what I left behind."],
      ["The past still had my voice.", "I came to take it back."],
      ["There were years I never answered,", "stacked like boxes in the dark.", "I kept walking past the places", "where my name had left a mark."],
      ["Not because I forgot them.", "Not because I was free.", "But some rooms keep speaking", "with a younger sound of me."],
      ["I won't ask the past for mercy.", "I won't ask it to explain.", "I only need the part of me", "that learned to speak through pain."],
      ["The past still had my voice,", "so I came to take it back.", "Not the years, not the reason,", "not the road that turned to black."],
      ["The past still had my voice,", "but it does not own me now.", "I can hear the boy I was,", "without becoming him somehow."],
      ["Still had my voice…", "take it back…"],
      ["I can hear him…", "not become him…"],
      ["I found words under the silence", "that I never got to say.", "They were not asking for forever.", "They were only asking for a day."],
      ["Some apologies were empty.", "Some goodbyes arrived too late.", "Some memories kept knocking", "after I stopped calling it fate."],
      ["I won't rewrite what happened.", "I won't clean the damage white.", "But I can take my voice back", "from the mouth of that night."],
      ["The past still had my voice,", "so I came to take it back.", "Not the years, not the reason,", "not the road that turned to black."],
      ["The past still had my voice,", "but it does not own me now.", "I can hear the boy I was,", "without becoming him somehow."],
      ["I am not here to forgive it", "just because time moved on.", "I am not here to bless the place", "where I once disappeared from."],
      ["But if the past still speaks with me,", "let it speak one final time.", "Then I will leave with my own voice", "and no longer call it mine."],
      ["The past still had my voice,", "so I came to take it back.", "Not the years, not the reason,", "not the road that turned to black."],
      ["The past still had my voice,", "but it does not own me now.", "I can hear the boy I was,", "without becoming him somehow."],
      ["I did not open the door", "to go back inside."],
      ["The past still had my voice.", "Now it doesn't."],
    ],
  },
  {
    n: 6,
    title: "If Tomorrow Lets Me In",
    from: "From me, to tomorrow.",
    line: "A door of light, waiting after the dark.",
    releaseDate: "2026-07-17",
    date: "22.7.2026",
    accent: "#C9A0DC",
    coverUrl: "/releases/if-tomorrow-lets-me-in.png",
    audioSrc: "/audio/if-tomorrow-lets-me-in.mp3",
    soundcloudUrl: "https://soundcloud.com/djandyk_2024/if-tomorrow-lets-me-in/s-IdZMWJlDp3z?in=djandyk_2024/sets/i-arrived-as-someone-else&si=345caae084354dc5b5b9b84b285d2022&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      ["I don't know your face yet.", "I don't know your name."],
      ["But I have walked through enough night", "to know I am not the same."],
      ["If tomorrow lets me in,", "I won't arrive empty."],
      ["There are mornings I have not met,", "waiting somewhere out of view.", "There are versions of my life", "I have not made it to."],
      ["I am not asking for a promise.", "I am not asking for a sign.", "I only ask the next door", "not to close before its time."],
      ["I have carried what was heavy.", "I have buried what was gone.", "Now I stand before the hours", "that have not yet done me wrong."],
      ["If tomorrow lets me in,", "I will not arrive empty.", "I will bring the nights I crossed", "and the voice they couldn't end in me."],
      ["If tomorrow lets me in,", "I won't ask to be the same.", "I have lost enough of yesterday", "to walk in with my name."],
      ["If tomorrow…", "lets me in…"],
      ["Not empty…", "not the same…"],
      ["I have seen the kind of silence", "that makes people disappear.", "I have learned to keep on breathing", "when the road refused to clear."],
      ["So if there is a morning", "that has kept a place for me,", "I won't enter like a stranger.", "I will enter honestly."],
      ["I don't need a perfect future.", "I don't need a golden door.", "Just a little room to stand in", "and become a little more."],
      ["If tomorrow lets me in,", "I will not arrive empty.", "I will bring the nights I crossed", "and the voice they couldn't end in me."],
      ["If tomorrow lets me in,", "I won't ask to be the same.", "I have lost enough of yesterday", "to walk in with my name."],
      ["Maybe I will still be learning.", "Maybe I will still be late.", "Maybe every open doorway", "comes with something else to face."],
      ["But I am done waiting", "to become someone allowed.", "If tomorrow wants a witness,", "I am still here now."],
      ["If tomorrow lets me in,", "I will not arrive empty.", "I will bring the nights I crossed", "and the voice they couldn't end in me."],
      ["If tomorrow lets me in,", "I won't ask to be the same.", "I have lost enough of yesterday", "to walk in with my name."],
      ["I don't know your face yet.", "I don't know your name."],
      ["But if tomorrow lets me in,", "I won't arrive empty."],
      ["From me,", "to tomorrow."],
    ],
  },
];

type Track = (typeof TRACKS)[number];

const GREEN = "#63B39A";


function TrackCard({ track }: { track: Track }) {
  const [lyricsOpen, setLyricsOpen] = useState(false);
  const isOut = new Date(track.releaseDate) <= new Date();

  return (
    <div
      className="card-breathe rounded-2xl overflow-hidden w-[260px] sm:w-[280px] shrink-0 snap-start"
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
        <div className="card-breathe-cover-wrap w-full h-full">
          <img
            src={track.coverUrl}
            alt={track.title}
            className="card-breathe-cover w-full h-full object-cover"
            style={{
              filter: !isOut ? "brightness(0.85) saturate(0.9)" : "none",
            }}
          />
        </div>
        <div
          className="absolute inset-0 flex items-end p-3"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 20%, transparent)" }}
        >
          <span
            className="text-[9px] font-mono uppercase tracking-[0.3em] px-2.5 py-1 rounded-full border"
            style={{
              color: isOut ? track.accent : "rgba(255,255,255,0.4)",
              borderColor: isOut ? `${track.accent}66` : "rgba(255,255,255,0.15)",
              background: "rgba(0,0,0,0.6)",
            }}
          >
            {isOut ? "Out Now" : track.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Number + address line */}
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
          style={{ color: isOut ? "#f0f6fc" : "rgba(255,255,255,0.55)" }}
        >
          {track.title}
        </h3>

        {/* Release date */}
        <p className="text-[11px] font-mono uppercase tracking-widest mb-2" style={{ color: isOut ? track.accent : "rgba(255,255,255,0.25)" }}>
          {isOut ? "Released" : `Release · ${track.date}`}
        </p>

        {/* Core line */}
        <p
          className="text-sm leading-relaxed mb-3 font-serif italic"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          "{track.line}"
        </p>

        {/* Audio player */}
        <div className="mb-3">
          <audio
            controls
            preload="none"
            className="w-full"
            style={{
              accentColor: track.accent,
              colorScheme: "dark",
              borderRadius: "6px",
            }}
          >
            <source src={track.audioSrc} type="audio/mpeg" />
          </audio>
        </div>

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
          {track.soundcloudUrl ? (
            <a
              href={track.soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-opacity hover:opacity-70"
              style={{ color: "#ff5500", borderColor: "rgba(255,85,0,0.35)" }}
            >
              SoundCloud
            </a>
          ) : (
            <span
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
              style={{ color: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              SoundCloud — soon
            </span>
          )}
          {track.spotifyUrl ? (
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-opacity hover:opacity-70"
              style={{ color: "#1db954", borderColor: "rgba(29,185,84,0.35)" }}
            >
              Spotify
            </a>
          ) : (
            <span
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
              style={{ color: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              Streaming — soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SixTranceBalladsClient() {
  const albumStatus = getAlbumStatus(TRACKS);

  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#000000" }}>
        {/* Hero */}
        <section className="px-6 pt-20 pb-12 max-w-[680px] mx-auto text-center">
          <span
            className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-6 px-3 py-1 rounded-full border"
            style={{ color: GREEN, borderColor: `${GREEN}33`, background: `${GREEN}0d` }}
          >
            {albumStatus === "released" ? "Released" : "Album · Trance Ballads · 2026"}
          </span>

          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-3 font-sans"
            style={{ color: "#f0f6fc" }}
          >
            THE ALBUM
          </h1>

          <p
            className="text-lg font-light mb-1 font-mono uppercase tracking-[0.2em]"
            style={{ color: GREEN }}
          >
            Six Trance Ballads
          </p>

          <p
            className="text-base italic font-light mb-4 font-serif"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            From Me, To...
          </p>

          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.28)" }}>
            All 6 tracks out now. Full album available on all platforms.
          </p>
        </section>

        {/* SoundCloud early access */}
        <div className="px-6 pb-12 max-w-[680px] mx-auto">
          <div
            className="flex items-start gap-3 px-4 py-3 rounded-xl"
            style={{ background: "rgba(255,85,0,0.06)", border: "1px solid rgba(255,85,0,0.22)" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 mt-0.5" fill="#ff5500">
              <path d="M11.56 8.87V17h8.76c.96 0 1.68-.8 1.68-1.84 0-.76-.4-1.44-1.04-1.76l-.08-.04-.04-.08a2.87 2.87 0 0 0-2.8-3.52c-.12 0-.24 0-.36.04a4.63 4.63 0 0 0-4.56-3.92c-.64 0-1.28.12-1.56.99zM0 15.24C0 16.2.84 17 1.88 17H9V9.72c-.4-.48-.96-.76-1.56-.76-.92 0-1.72.64-1.92 1.52a2.4 2.4 0 0 0-1.24-.32C2.8 10.16 1.6 11.2 1.6 12.48c0 .2 0 .36.04.52C.68 13.24 0 14.16 0 15.24z" />
            </svg>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest mb-0.5" style={{ color: "#ff5500" }}>
                SoundCloud Early Access
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                Every release arrives on SoundCloud 5–7 days early. Because I still believe in it.{" "}
                <a
                  href="https://soundcloud.com/djandyk_2024/sets/i-arrived-as-someone-else?si=a66090b6c7c74df4bd263da8ef5b6659&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ff5500", textDecoration: "underline" }}
                >
                  Listen on SoundCloud →
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Track list — horizontal swipeable row */}
        <section className="pb-12 max-w-[1100px] mx-auto">
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
