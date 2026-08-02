import Link from "next/link";

const ACCENT = "#D040A0";

const TRACKS = [
  { num: "01", title: "Stay (feat. Eva & Mark Witman)", releaseDate: "2026-09-11", date: "11.9.2026", accent: "#C060D0" },
  { num: "02", title: "Fire Inside (feat. Ritta & J-Jack)", releaseDate: "2026-09-18", date: "18.9.2026", accent: "#D040A0" },
  { num: "03", title: "Back To You (feat. Jully Calleb & Spencer Marks)", releaseDate: "2026-09-25", date: "25.9.2026", accent: "#9060C0" },
  { num: "04", title: "No Control (feat. Ritta & J-Jack)", releaseDate: "2026-10-02", date: "2.10.2026", accent: "#E050B0" },
  { num: "05", title: "Too Late For Goodbye (feat. Nella & J'B Ray)", releaseDate: "2026-10-09", date: "9.10.2026", accent: "#A050D0" },
  { num: "06", title: "Feel My Body (feat. Iazabella Marieera & Paollo Rivaninni)", releaseDate: "2026-10-16", date: "16.10.2026", accent: "#C040C0" },
];

export default function BackToEurodancePromo() {
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
              Album · Eurodance · 2026
            </span>

            <h2
              className="text-[clamp(1.8rem,1.4rem+1.5vw,2.75rem)] font-bold tracking-tight leading-[1.15] mb-2"
              style={{ color: "#ffffff" }}
            >
              BACK TO EURODANCE
            </h2>

            <p className="text-sm font-mono mb-2 uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
              Authentic 90s Eurodance
            </p>

            <p className="text-sm font-mono mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
              6 Tracks. 6 Memories. One Return to the Dancefloor.
            </p>

            <Link
              href="/back-to-eurodance"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#ffffff", color: "#111111" }}
            >
              View Album →
            </Link>
          </div>

          {/* Album artwork — right */}
          <div className="order-2 lg:order-3">
            <img
              src="/releases/back-to-eurodance-cover.png"
              alt="Back to Eurodance — Authentic 90s Eurodance album by DJ Andy'K"
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
