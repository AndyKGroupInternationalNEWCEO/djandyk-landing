import Link from "next/link";

export type AlbumPromoTrack = {
  num: string;
  title: string;
  releaseDate: string;
  date: string;
  accent: string;
};

type AlbumPromoSectionProps = {
  accent: string;
  kicker: string;
  title: string;
  tagline: string;
  description: string;
  ctaHref: string;
  coverSrc: string;
  coverAlt: string;
  tracks: AlbumPromoTrack[];
};

export default function AlbumPromoSection({
  accent,
  kicker,
  title,
  tagline,
  description,
  ctaHref,
  coverSrc,
  coverAlt,
  tracks,
}: AlbumPromoSectionProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0d1117" }}>
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr_1fr] gap-10 items-center">
          {/* Tracklist — left */}
          <div className="order-3 lg:order-1">
            <span
              className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4 block"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Tracklist
            </span>
            <ol className="space-y-2">
              {tracks.map((track) => {
                const isOut = new Date(track.releaseDate) <= new Date();
                return (
                  <li key={track.num} className="flex items-center gap-3">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: track.accent }}
                    />
                    <span
                      className="text-[11px] font-mono w-5 shrink-0"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      {track.num}
                    </span>
                    <span
                      className="text-sm truncate flex-1"
                      style={{ color: isOut ? "#ffffff" : "rgba(255,255,255,0.5)" }}
                    >
                      {track.title}
                    </span>
                    <span
                      className="text-[10px] font-mono shrink-0"
                      style={{ color: isOut ? track.accent : "rgba(255,255,255,0.25)" }}
                    >
                      {isOut ? "Out now" : track.date}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Title + CTA — center */}
          <div className="order-1 lg:order-2 text-center flex flex-col items-center">
            <span
              className="inline-flex items-center justify-center h-6 text-[10px] font-mono uppercase tracking-[0.2em] whitespace-nowrap mb-5 px-3 rounded-full"
              style={{
                background: `${accent}26`,
                border: `1px solid ${accent}66`,
                color: accent,
              }}
            >
              {kicker}
            </span>

            <h2
              className="w-full text-[clamp(1.8rem,1.4rem+1.5vw,2.75rem)] font-bold tracking-tight leading-[1.15] mb-2 min-h-[2.3em] flex items-center justify-center"
              style={{ color: "#ffffff" }}
            >
              {title}
            </h2>

            <p className="text-sm font-mono mb-2 uppercase tracking-[0.2em]" style={{ color: accent }}>
              {tagline}
            </p>

            <p className="text-sm font-mono mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
              {description}
            </p>

            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#ffffff", color: "#111111" }}
            >
              View Album →
            </Link>
          </div>

          {/* Album artwork — right */}
          <div className="order-2 lg:order-3">
            <div
              className="w-full aspect-square rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={coverSrc}
                alt={coverAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
