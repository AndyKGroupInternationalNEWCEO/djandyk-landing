import Link from "next/link";

const ACCENT = "#E84C3C";

const TRACKS = [
  { num: "01", title: "Don't Look Away (Bana Öyle Bakma)", releaseDate: "2026-10-30", date: "30.10.2026", accent: "#E84C3C" },
  { num: "02", title: "No Explanation (Bala Kalam)", releaseDate: "2026-11-06", date: "6.11.2026", accent: "#F0A020" },
  { num: "03", title: "Read My Face (Pa Fjalë)", releaseDate: "2026-11-13", date: "13.11.2026", accent: "#4A90D9" },
  { num: "04", title: "Read It in My Eyes (Pročitaj Mi u Očima)", releaseDate: "2026-11-20", date: "20.11.2026", accent: "#D9432E" },
  { num: "05", title: "Before Dawn (Преди Зори)", releaseDate: "2026-11-27", date: "27.11.2026", accent: "#40E0C0" },
  { num: "06", title: "Under Your Skin (Sub Pielea Ta)", releaseDate: "2026-12-04", date: "4.12.2026", accent: "#E8B020" },
];

export default function NoTranslationPromo() {
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
              {TRACKS.map((track) => {
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
          <div className="order-1 lg:order-2 text-center">
            <span
              className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-5 px-3 py-1 rounded-full"
              style={{
                background: `${ACCENT}26`,
                border: `1px solid ${ACCENT}66`,
                color: ACCENT,
              }}
            >
              Album · Melodic Progressive Tech House · 2026
            </span>

            <h2
              className="text-[clamp(1.8rem,1.4rem+1.5vw,2.75rem)] font-bold tracking-tight leading-[1.15] mb-2"
              style={{ color: "#ffffff" }}
            >
              NO TRANSLATION
            </h2>

            <p className="text-sm font-mono mb-2 uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
              Six Languages. One Night. Nothing Needs Explaining.
            </p>

            <p className="text-sm font-mono mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
              Words change. The night does not.
            </p>

            <Link
              href="/no-translation"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#ffffff", color: "#111111" }}
            >
              View Album →
            </Link>
          </div>

          {/* Album artwork — right */}
          <div className="order-2 lg:order-3">
            <img
              src="/releases/no-translation-cover.png"
              alt="No Translation — Melodic Progressive Tech House album by DJ Andy'K"
              className="w-full aspect-square object-cover rounded-2xl"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
