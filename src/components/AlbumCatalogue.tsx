"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRACKLISTS } from "@/lib/data";
import { ALBUM_CATALOGUE, type AlbumCategory, type CatalogueAlbum } from "@/lib/albumCatalogue";
import ScrollReveal from "@/components/ScrollReveal";

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

function ArchivedBadge() {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium mb-3 self-start"
      style={{
        background: "rgba(0,0,0,0.04)",
        border: "1px solid rgba(0,0,0,0.12)",
        color: "rgba(0,0,0,0.5)",
      }}
    >
      <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgba(0,0,0,0.3)" }} />
      ARCHIVED RELEASE
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

function AlbumCard({ release }: { release: CatalogueAlbum }) {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [tracklistOpen, setTracklistOpen] = useState(false);
  const tracks = TRACKLISTS[release.title] ?? null;

  return (
    <div className="glass-card rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-highlight/30">
      <style>{TRACK_DOT_STYLES}</style>
      {release.archived ? (
        <ArchivedBadge />
      ) : (
        <>
          {release.completionDate && (
            new Date(release.completionDate) <= new Date()
              ? <CompleteBadge />
              : <InProgressBadge />
          )}
          {release.completeBadge && <CompleteBadge />}
          {release.availableNow && (
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
        </>
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
      {release.genre && <p className="text-sm font-light italic text-muted-2 mb-3">{release.genre}</p>}

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed flex-1">{release.description}</p>

      {/* Note */}
      {release.note && (
        <p className="text-[11px] font-mono text-muted-2 mt-2 italic whitespace-pre-line">{release.note}</p>
      )}

      {/* Action row — omitted entirely for archived releases (no link to show) */}
      {!release.archived && release.href && (
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
            {release.embedUrl && (
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
      )}

      {/* Spotify embed — lazy: only mounts when playerOpen */}
      {release.embedUrl && playerOpen && (
        <div className="mt-4 rounded-xl overflow-hidden">
          <iframe
            src={release.embedUrl}
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

function CategorySection({
  category,
  label,
  heading,
  headingItalic,
  description,
}: {
  category: AlbumCategory;
  label: string;
  heading: string;
  headingItalic: string;
  description: string;
}) {
  const albums = ALBUM_CATALOGUE.filter((a) => a.category === category);

  return (
    <div className="mb-16 last:mb-0">
      <div className="text-center max-w-[700px] mx-auto mb-12">
        <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
          {label}
        </span>
        <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
          {heading}{" "}
          <span className="font-serif font-light italic text-[1.2em]">
            {headingItalic}
          </span>
        </h2>
        <p className="text-base text-muted font-light">{description}</p>
      </div>

      <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {albums.map((release) => (
          <AlbumCard key={release.title} release={release} />
        ))}
      </ScrollReveal>
    </div>
  );
}

export default function AlbumCatalogue() {
  const { t } = useLanguage();

  return (
    <section id="featured" className="relative pt-10 pb-20 px-8 section-with-glass">
      <div className="max-w-[1200px] mx-auto">
        <CategorySection
          category="signature"
          label={t.catalogue.signature.label}
          heading={t.catalogue.signature.heading}
          headingItalic={t.catalogue.signature.headingItalic}
          description={t.catalogue.signature.description}
        />
        <CategorySection
          category="concept"
          label={t.catalogue.concept.label}
          heading={t.catalogue.concept.heading}
          headingItalic={t.catalogue.concept.headingItalic}
          description={t.catalogue.concept.description}
        />
        <CategorySection
          category="studio"
          label={t.catalogue.studio.label}
          heading={t.catalogue.studio.heading}
          headingItalic={t.catalogue.studio.headingItalic}
          description={t.catalogue.studio.description}
        />
        <CategorySection
          category="legacy"
          label={t.catalogue.legacy.label}
          heading={t.catalogue.legacy.heading}
          headingItalic={t.catalogue.legacy.headingItalic}
          description={t.catalogue.legacy.description}
        />
      </div>
    </section>
  );
}
