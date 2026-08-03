import Link from "next/link";

const GOLD = "#E8A020";

const TRACKS = [
  { num: "01", title: "Too Hot To Go Home (feat. Ben Wheeler)", releaseDate: "2026-08-28", date: "28.8.2026", accent: "#E8A020" },
  { num: "02", title: "The Way You Smile", releaseDate: "2026-08-21", date: "21.8.2026", accent: "#F0C060" },
  { num: "03", title: "Take It Off Slowly (feat. Nicolas Beech)", releaseDate: "2026-08-14", date: "14.8.2026", accent: "#D4956A" },
  { num: "04", title: "Stay A Little Longer (feat. Ben Wheeler)", releaseDate: "2026-08-07", date: "7.8.2026", accent: "#C4845A" },
  { num: "05", title: "Borrowed Sunshine", releaseDate: "2026-07-31", date: "31.7.2026", accent: "#E8A020" },
  { num: "06", title: "One More Bad Idea (feat. Mark Lutscher)", releaseDate: "2026-09-04", date: "4.9.2026", accent: "#B87040" },
  { num: "07", title: "We Outran Tomorrow (feat. Max Liem)", releaseDate: "2026-09-11", date: "11.9.2026", accent: "#A06030" },
  { num: "08", title: "Hands All Over Me", releaseDate: "2026-09-18", date: "18.9.2026", accent: "#906050" },
  { num: "09", title: "Half Past Summer", releaseDate: "2026-09-25", date: "25.9.2026", accent: "#C09060" },
  { num: "10", title: "Nothing Asked To Stay", releaseDate: "2026-10-02", date: "2.10.2026", accent: "#8A7060" },
];

export default function BorrowedSunshinePromo() {
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
                background: `${GOLD}26`,
                border: `1px solid ${GOLD}66`,
                color: GOLD,
              }}
            >
              Album · Trance · 2026
            </span>

            <h2
              className="text-[clamp(1.8rem,1.4rem+1.5vw,2.75rem)] font-bold tracking-tight leading-[1.15] mb-2"
              style={{ color: "#ffffff" }}
            >
              BORROWED SUNSHINE
            </h2>

            <p className="text-sm font-mono mb-2 uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Trance / Progressive Trance
            </p>

            <p className="text-sm font-mono mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
              10 Tracks. 10 Stories. 10 Moments You&apos;ll Never Forget.
            </p>

            <Link
              href="/borrowed-sunshine"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#ffffff", color: "#111111" }}
            >
              View Album →
            </Link>
          </div>

          {/* Album artwork — right */}
          <div className="order-2 lg:order-3">
            <img
              src="/releases/borrowed-sunshine-promo.png"
              alt="Borrowed Sunshine — Trance / Progressive Trance album by DJ Andy'K"
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
