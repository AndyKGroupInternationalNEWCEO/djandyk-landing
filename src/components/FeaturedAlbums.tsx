"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRACKLISTS } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

const FEATURED_RELEASES = [
  {
    kicker: "Album · 2026",
    title: "No Translation",
    genre: "Melodic Progressive Tech House",
    description: "Six Languages. One Night. Nothing Needs Explaining.",
    completionDate: "2026-12-04",
    href: "/no-translation",
    cover: "/releases/no-translation-cover.png",
  },
  {
    kicker: "Album · 2026",
    title: "Back to Eurodance",
    genre: "Authentic 90s Eurodance",
    description: "6 Tracks. 6 Memories. One Return to the Dancefloor.",
    completionDate: "2026-10-23",
    href: "/back-to-eurodance",
    cover: "/releases/back-to-eurodance-cover.png",
  },
  {
    kicker: "Album · 2026",
    title: "Borrowed Sunshine",
    genre: "Trance / Progressive Trance",
    description: "10 Tracks. 10 Stories. 10 Moments You'll Never Forget.",
    completionDate: "2026-10-09",
    href: "/borrowed-sunshine",
    cover: "/releases/borrowed-sunshine-cover.png",
  },
  {
    kicker: "Album · 2026",
    title: "THE ALBUM — From Me, To...",
    genre: "Six Trance Ballads",
    description: "Six personal letters in trance. New track every Wednesday. Full album 22.7.2026.",
    availableNow: true,
    href: "/six-trance-ballads",
    embedUrl: "https://open.spotify.com/embed/album/6tXnXiMbG1n9Tt3NnVij3n?utm_source=generator&theme=0",
    cover: "/releases/six-trance-ballads-the-album.png",
  },
  {
    kicker: "Album · 2026",
    title: "Do Not Disturb",
    genre: "Groovy House / Funky Tech House",
    description: "A Concept Album — one unforgettable night, first drink to last confession, told in groovy house and funky tech house.",
    completionDate: "2026-08-23",
    href: "https://soundcloud.com/djandyk_2024/sets/do-not-disturb?si=58acd55f3e454217b5d57763b09a9515&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    cover: "/releases/do-not-disturb-album-cover.png",
  },
  {
    kicker: "Album · 2026",
    title: "Before I Forget",
    genre: "Trance / Progressive Trance",
    description: "Eight tracks of progressive trance — a journey through memory, emotion, and release.",
    completionDate: "2026-07-03",
    href: "https://open.spotify.com/album/5pRDNwagYj2SS5CgYdhC5a",
    embedUrl: "https://open.spotify.com/embed/album/5pRDNwagYj2SS5CgYdhC5a?utm_source=generator&theme=0",
    cover: "/releases/before-i-forget.png",
  },
  {
    kicker: "Album · 2026",
    title: "When Later Becomes Never",
    genre: "Progressive House / House",
    description: "A journey through emotion, memory, and release. Eleven tracks, one story.",
    availableNow: true,
    href: "https://open.spotify.com/album/1ezdr7EOZWuLBiw7Rpqis6",
    embedUrl: "https://open.spotify.com/embed/album/1ezdr7EOZWuLBiw7Rpqis6?utm_source=generator&theme=0",
    cover: "/albums/when-later-becomes-never.jpg",
  },
  {
    kicker: "Album · 2026",
    title: "Human Stories",
    genre: "House / Progressive House",
    description: "A house album with emotional depth — four tracks also released in piano versions.",
    completeBadge: true,
    href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    embedUrl: "https://open.spotify.com/embed/album/6qWISevnIY1Bm4FB8hUhVC?utm_source=generator&theme=0",
    cover: "/albums/human-stories.jpg",
  },
  {
    kicker: "Album · 2026",
    title: "Deep Connections",
    genre: "House / Progressive House",
    description: "Connection is the core. Every track a bridge between two worlds.",
    note: "Recorded 2025 \u00B7 Released as album 2026",
    availableNow: true,
    href: "https://open.spotify.com/album/39Zb0euYMqdqg658wqKVGU",
    embedUrl: "https://open.spotify.com/embed/album/39Zb0euYMqdqg658wqKVGU?utm_source=generator&theme=0",
    cover: "/albums/deep-connections.jpg",
  },
  {
    kicker: "Album · 2026",
    title: "Music Is Your Passion",
    genre: "Trance",
    description: "Where it all began. The sound that defines everything that followed.",
    note: "Recorded 2025 \u00B7 Released as album 2026",
    availableNow: true,
    href: "https://open.spotify.com/album/2en5D8nLMSTpRE6fhS1BJY",
    embedUrl: "https://open.spotify.com/embed/album/2en5D8nLMSTpRE6fhS1BJY?utm_source=generator&theme=0",
    cover: "/albums/music-is-your-passion.jpg",
  },
  {
    kicker: "Album · 2026",
    title: "Four Elements",
    genre: "Deep Melodic / Progressive",
    description: "Four tracks. Four feelings. One direction.",
    availableNow: true,
    href: "https://open.spotify.com/album/18OaI45bkpYwJtzL59BoUw",
    embedUrl: "https://open.spotify.com/embed/album/18OaI45bkpYwJtzL59BoUw?utm_source=generator&theme=0",
    cover: "/albums/four-elements.jpg",
  },
];

const TRACK_DOT_STYLES = `
  @keyframes hs-green-dot { 0%,100% { opacity:1; transform:scale(1) } 50% { opacity:0.45; transform:scale(0.7) } }
  .hs-green-dot { animation: hs-green-dot 2s ease-in-out infinite; }
`;

function InProgressBadge() {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium mb-3 self-start"
      style={{
        background: "rgba(239,68,68,0.1)",
        border: "1px solid rgba(239,68,68,0.3)",
        color: "#ef4444",
      }}
    >
      <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#ef4444" }} />
      IN PROGRESS
    </div>
  );
}

function CompleteBadge() {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium mb-3 self-start"
      style={{
        background: "rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.15)",
        color: "#111111",
      }}
    >
      <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#111111" }} />
      ✅ COMPLETE
    </div>
  );
}

function CoverPlaceholder({ title }: { title: string }) {
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div
      className="w-full aspect-square rounded-xl flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 100%)",
      }}
    >
      <span className="text-3xl font-bold font-serif tracking-widest" style={{ color: "rgba(0,0,0,0.25)" }}>
        {initials}
      </span>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M5.25 3.75a.75.75 0 00-1.25.56v7.38a.75.75 0 001.25.56l5.5-3.69a.75.75 0 000-1.12L5.25 3.75z" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
      <path d="M2.5 4h11M2.5 8h11M2.5 12h7" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type TrackEntry = { num: string; title: string; released?: boolean; comingSoon?: boolean; spotifyUrl?: string; label?: string; isIntro?: boolean; releaseDate?: string };

function isTrackReleased(track: TrackEntry): boolean {
  if (track.releaseDate) return new Date(track.releaseDate) <= new Date();
  return !!track.released;
}

function AlbumCard({ release }: { release: typeof FEATURED_RELEASES[0] }) {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [tracklistOpen, setTracklistOpen] = useState(false);
  const tracks = TRACKLISTS[release.title] ?? null;

  return (
    <div className="glass-card rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-highlight/30">
      <style>{TRACK_DOT_STYLES}</style>
      {/* In Progress / Complete badge — date-driven */}
      {"completionDate" in release && release.completionDate && (
        new Date(release.completionDate as string) <= new Date()
          ? <CompleteBadge />
          : <InProgressBadge />
      )}

      {/* Complete badge — static (Human Stories etc.) */}
      {"completeBadge" in release && release.completeBadge && <CompleteBadge />}

      {/* Available Now badge */}
      {"availableNow" in release && release.availableNow && (
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium mb-3 self-start"
          style={{
            background: "rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.15)",
            color: "#111111",
          }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#111111" }} />
          Available Now
        </div>
      )}

      {/* Cover art */}
      <div className="mb-5 rounded-xl overflow-hidden">
        {release.cover ? (
          <img
            src={release.cover}
            alt={`${release.title} — album cover by DJ Andy'K`}
            className="w-full aspect-square object-cover"
          />
        ) : (
          <CoverPlaceholder title={release.title} />
        )}
      </div>

      {/* Kicker */}
      <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono mb-2 block">
        {release.kicker}
      </span>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground tracking-tight mb-1 leading-snug">
        {release.title}
      </h3>

      {/* Genre */}
      <p className="text-sm font-light italic text-muted-2 mb-3">{release.genre}</p>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed flex-1">{release.description}</p>

      {/* Note */}
      {"note" in release && release.note && (
        <p className="text-[11px] font-mono text-muted-2 mt-2 italic whitespace-pre-line">{release.note as string}</p>
      )}

      {/* Action row */}
      <div className="mt-5 flex items-center gap-2 flex-wrap">
        <a
          href={release.href}
          {...(release.href.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-highlight hover:text-deep-teal transition-colors"
        >
          {release.href.startsWith("/") ? "View Album" : "Listen Now"}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </a>

        <div className="flex items-center gap-1 ml-auto">
          {"embedUrl" in release && release.embedUrl && (
            <button
              onClick={() => { setPlayerOpen(!playerOpen); setTracklistOpen(false); }}
              className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded border transition-colors ${
                playerOpen
                  ? "bg-highlight text-white border-highlight"
                  : "text-muted-2 border-grid-500 hover:border-highlight hover:text-highlight"
              }`}
              title="Toggle player"
            >
              <PlayIcon />
              Player
            </button>
          )}
          <button
            onClick={() => { setTracklistOpen(!tracklistOpen); setPlayerOpen(false); }}
            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded border transition-colors ${
              tracklistOpen
                ? "bg-highlight text-white border-highlight"
                : "text-muted-2 border-grid-500 hover:border-highlight hover:text-highlight"
            }`}
            title="Toggle tracklist"
          >
            <ListIcon />
            Tracks
            <ChevronIcon open={tracklistOpen} />
          </button>
        </div>
      </div>

      {/* Spotify embed — lazy: only mounts when playerOpen */}
      {"embedUrl" in release && release.embedUrl && playerOpen && (
        <div className="mt-4 rounded-xl overflow-hidden">
          <iframe
            src={release.embedUrl as string}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: "12px" }}
          />
        </div>
      )}

      {/* Tracklist accordion */}
      {tracklistOpen && (
        <div className="mt-4 border-t border-grid-300 pt-4">
          {tracks ? (
            <ol className="space-y-1.5">
              {(tracks as TrackEntry[]).map((track, i) =>
                track.isIntro ? (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-muted-2 w-7 shrink-0 text-right" />
                    <span className="inline-block w-1.5 h-1.5 shrink-0" />
                    <span className="text-xs italic text-muted-2">{track.title}</span>
                  </li>
                ) : (
                  <li key={track.num} className="flex items-center gap-3 group/track">
                    <span className="text-[10px] font-mono text-muted-2 w-7 shrink-0 text-right">
                      {track.num}
                    </span>
                    {isTrackReleased(track) ? (
                      <span
                        className="hs-green-dot inline-block w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#111111" }}
                        title="Out now"
                      />
                    ) : track.comingSoon || track.releaseDate ? (
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#F59E0B", opacity: 0.7 }}
                        title="Coming soon"
                      />
                    ) : (
                      <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0 bg-transparent" />
                    )}
                    <span className={`text-sm leading-snug ${isTrackReleased(track) ? "text-foreground font-medium" : (track.comingSoon || track.releaseDate) ? "text-muted" : "text-muted-2"}`}>
                      {track.title}
                    </span>
                    {isTrackReleased(track) && (
                      track.spotifyUrl ? (
                        <a href={track.spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-highlight ml-auto shrink-0 hover:underline">Out now</a>
                      ) : (
                        <span className="text-[10px] font-mono text-highlight ml-auto shrink-0">Out now</span>
                      )
                    )}
                    {(track.comingSoon || track.releaseDate) && !isTrackReleased(track) && (
                      <span className="text-[10px] font-mono ml-auto shrink-0" style={{ color: "#F59E0B", opacity: 0.8 }}>{track.label}</span>
                    )}
                  </li>
                )
              )}
            </ol>
          ) : (
            <p className="text-xs italic text-muted-2">Tracklist coming soon</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function FeaturedAlbums() {
  const { t } = useLanguage();

  return (
    <section id="featured" className="relative pt-10 pb-20 px-8 section-with-glass">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            {t.featured.label}
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            {t.featured.heading}{" "}
            <span className="font-serif font-light italic text-[1.2em]">
              {t.featured.headingItalic}
            </span>
          </h2>
          <p className="text-base text-muted font-light">{t.featured.description}</p>
        </div>

        {/* Row 1: 3 cards */}
        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {FEATURED_RELEASES.slice(0, 3).map((release) => (
            <AlbumCard key={release.title} release={release} />
          ))}
        </ScrollReveal>

        {/* Row 2: 3 cards */}
        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURED_RELEASES.slice(3).map((release) => (
            <AlbumCard key={release.title} release={release} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
