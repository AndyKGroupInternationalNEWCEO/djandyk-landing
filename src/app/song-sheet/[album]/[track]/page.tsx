import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SONG_SHEET_ALBUMS } from "@/lib/songSheetAlbums";
import { parseProgression, type ChordNotes } from "@/lib/chords";

// Print-ready song sheet (A4). Rendered to PDF by scripts/render-song-sheets.mjs;
// the PDFs are what visitors download — this page itself is not indexed.

export const metadata: Metadata = { robots: { index: false, follow: false } };

export function generateStaticParams() {
  return SONG_SHEET_ALBUMS.flatMap((a) => a.tracks.map((t) => ({ album: a.slug, track: t.slug })));
}

const BG = "#0b0d10";

// Downscaled via Next's image optimizer so the PDFs stay small.
const img = (src: string, w: number) => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=75`;
const SITE = "djandykofficial.com";

function formatDuration(seconds?: number) {
  if (!seconds) return null;
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}

function formatDate(iso?: string) {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

const WHITE_PCS = [0, 2, 4, 5, 7, 9, 11];
const BLACK_AFTER_WHITE: Record<number, number> = { 0: 1, 1: 3, 3: 6, 4: 8, 5: 10 };

/** Two-octave keyboard with the chord tones (root position) highlighted. */
function Keyboard({ chord, accent }: { chord: ChordNotes; accent: string }) {
  const [root] = chord.pitchClasses;
  const lit = new Set(chord.pitchClasses.map((pc) => (pc < root ? pc + 12 : pc)));
  const W = 9;
  const H = 34;
  const whites = Array.from({ length: 14 }, (_, i) => Math.floor(i / 7) * 12 + WHITE_PCS[i % 7]);
  const blacks: { x: number; note: number }[] = [];
  for (let i = 0; i < 14; i++) {
    const pc = BLACK_AFTER_WHITE[i % 7];
    if (pc !== undefined) blacks.push({ x: (i + 1) * W - 3, note: Math.floor(i / 7) * 12 + pc });
  }
  return (
    <svg viewBox={`0 0 ${14 * W} ${H}`} width="100%" style={{ display: "block" }} aria-hidden="true">
      {whites.map((note, i) => (
        <rect
          key={note}
          x={i * W + 0.4}
          y={0}
          width={W - 0.8}
          height={H}
          rx={1.2}
          fill={lit.has(note) ? accent : "#e9e9ec"}
        />
      ))}
      {blacks.map(({ x, note }) => (
        <rect key={note} x={x} y={0} width={6} height={H * 0.6} rx={1} fill={lit.has(note) ? accent : "#17191d"} stroke={BG} strokeWidth={0.6} />
      ))}
      {[...lit].map((note) => {
        const wi = whites.indexOf(note);
        if (wi >= 0) return <circle key={`d${note}`} cx={wi * W + W / 2} cy={H - 4.5} r={1.6} fill={BG} />;
        const b = blacks.find((k) => k.note === note)!;
        return <circle key={`d${note}`} cx={b.x + 3} cy={H * 0.6 - 4} r={1.4} fill={BG} />;
      })}
    </svg>
  );
}

export default async function SongSheetPage({ params }: { params: Promise<{ album: string; track: string }> }) {
  const { album: albumSlug, track: trackSlug } = await params;
  const album = SONG_SHEET_ALBUMS.find((a) => a.slug === albumSlug);
  const track = album?.tracks.find((t) => t.slug === trackSlug);
  if (!album || !track) notFound();

  const accent = track.accent;
  const progression = track.chords ? parseProgression(track.chords) : [];
  const info: [string, string][] = [];
  if (track.bpm) info.push(["BPM", String(track.bpm)]);
  if (track.key) info.push(["Key", track.key]);
  const dur = formatDuration(track.durationSeconds);
  if (dur) info.push(["Duration", dur]);
  if (track.genre) info.push(["Genre", track.subgenre ? `${track.genre} · ${track.subgenre}` : track.genre]);
  const date = formatDate(track.releaseDate);
  if (date) info.push(["Release", date]);
  if (track.vocal) info.push(["Vocal", track.vocal]);
  info.push(["Producer", "DJ Andy'K"]);
  if (track.mood) info.push(["Mood", track.mood]);
  if (track.instruments?.length) info.push(["Instruments", track.instruments.join(", ")]);

  const structure = track.lyrics
    .map((st) => st[0])
    .filter((l) => /^\[.*\]$/.test(l))
    .map((l) => l.slice(1, -1).replace(/\s*[—–-]\s.*$/, ""));
  const lyricsLayout = fitLyrics(track.lyrics);
  const trackNo = String(track.n).padStart(2, "0");
  const url = `${SITE}/${album.slug}/${track.slug}`;

  const label = "text-[7.5pt] font-mono uppercase tracking-[0.28em]";

  return (
    <div className="song-sheet font-sans" style={{ background: BG, color: "#fff", ["--accent" as string]: accent }}>
      <style>{`
        @page { size: A4; margin: 0; }
        html, body { background: ${BG} !important; margin: 0; }
        * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        @media print {
          body * { visibility: hidden; }
          .song-sheet, .song-sheet * { visibility: visible; }
          .song-sheet { position: absolute; inset: 0 auto auto 0; }
        }
        .song-sheet .sheet-page { width: 210mm; min-height: 297mm; box-sizing: border-box; position: relative; overflow: hidden; break-after: page; }
        .song-sheet .sheet-page:last-child { break-after: auto; }
        .song-sheet .stanza { break-inside: avoid; }
      `}</style>

      {/* ── Page 1 — cover, details, chords ───────────────────────── */}
      <section className="sheet-page" style={{ padding: "0 0 16mm" }}>
        {/* Blurred artwork backdrop */}
        <div className="absolute inset-x-0 top-0" style={{ height: "112mm", overflow: "hidden" }} aria-hidden="true">
          <img src={img(track.coverUrl, 256)} alt="" className="w-full h-full object-cover" style={{ filter: "blur(28px) saturate(1.2)", transform: "scale(1.25)", opacity: 0.45 }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(11,13,16,0.25) 0%, ${BG} 96%)` }} />
        </div>

        {/* Top rule */}
        <div className="relative flex items-center justify-between" style={{ padding: "11mm 16mm 0" }}>
          <span className={label} style={{ color: "rgba(255,255,255,0.75)" }}>DJ Andy&apos;K · Song Sheet</span>
          <span className={label} style={{ color: accent }}>{album.title} · Track {trackNo}</span>
        </div>

        {/* Hero */}
        <div className="relative flex items-end" style={{ gap: "9mm", padding: "12mm 16mm 0" }}>
          <div style={{ width: "66mm", flexShrink: 0, borderRadius: "3mm", overflow: "hidden", boxShadow: `0 18px 40px -10px rgba(0,0,0,0.8), 0 0 0 0.3mm ${accent}66, 0 0 32px ${accent}33` }}>
            <img src={img(track.coverUrl, 750)} alt={track.title} style={{ display: "block", width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }} />
          </div>
          <div className="min-w-0" style={{ paddingBottom: "2mm" }}>
            <div className="font-mono font-semibold" style={{ fontSize: "34pt", lineHeight: 1, color: accent, opacity: 0.9 }}>{trackNo}</div>
            <h1 className="font-bold tracking-tight" style={{ fontSize: track.title.length > 26 ? "24pt" : "30pt", lineHeight: 1.08, margin: "3mm 0 2.5mm" }}>
              {track.title}
            </h1>
            <p className="font-serif italic" style={{ fontSize: "12pt", color: "rgba(255,255,255,0.7)" }}>
              DJ Andy&apos;K {track.from}
            </p>
            <div style={{ width: "18mm", height: "0.6mm", background: accent, marginTop: "5mm", borderRadius: 2 }} />
          </div>
        </div>

        {/* Details grid */}
        <div className="relative grid grid-cols-4" style={{ gap: "5mm 6mm", padding: "11mm 16mm 0" }}>
          {info.map(([k, v]) => (
            <div key={k} style={{ borderTop: "0.25mm solid rgba(255,255,255,0.12)", paddingTop: "2.5mm" }}>
              <div className={label} style={{ color: "rgba(255,255,255,0.42)", fontSize: "6.5pt" }}>{k}</div>
              <div style={{ fontSize: "10.5pt", marginTop: "1mm", color: "rgba(255,255,255,0.92)" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        {track.story && (
          <div className="relative" style={{ padding: "10mm 16mm 0" }}>
            <div className={label} style={{ color: accent, marginBottom: "3mm" }}>The Story</div>
            <p className="font-serif italic" style={{ fontSize: "11.5pt", lineHeight: 1.6, color: "rgba(255,255,255,0.8)", borderLeft: `0.6mm solid ${accent}`, paddingLeft: "5mm" }}>
              {track.story}
            </p>
          </div>
        )}

        {/* Chord chart */}
        {progression.length > 0 && (
          <div className="relative" style={{ padding: "10mm 16mm 0" }}>
            <div className="flex items-baseline justify-between" style={{ marginBottom: "4mm" }}>
              <span className={label} style={{ color: accent }}>Chord Progression</span>
              <span className={label} style={{ color: "rgba(255,255,255,0.4)", fontSize: "6.5pt" }}>
                {[track.key, track.bpm && `${track.bpm} BPM`].filter(Boolean).join(" · ")}
              </span>
            </div>
            <div className="grid" style={{ gridTemplateColumns: `repeat(${progression.length}, 1fr)`, gap: "4mm" }}>
              {progression.map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "0.25mm solid rgba(255,255,255,0.1)",
                    borderTop: `0.7mm solid ${accent}`,
                    borderRadius: "2.5mm",
                    padding: "3.5mm 3.5mm 4mm",
                  }}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold" style={{ fontSize: "20pt", lineHeight: 1 }}>{c.name}</span>
                    <span className="font-mono" style={{ fontSize: "6.5pt", color: "rgba(255,255,255,0.35)" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  {c.notes.length > 0 && (
                    <>
                      <div className="font-mono" style={{ fontSize: "8pt", color: accent, margin: "2mm 0 3mm", letterSpacing: "0.12em" }}>
                        {c.notes.join(" · ")}
                      </div>
                      <Keyboard chord={c} accent={accent} />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Song structure — from the lyric section tags */}
        {structure.length > 1 && (
          <div className="relative" style={{ padding: "10mm 16mm 0" }}>
            <div className={label} style={{ color: accent, marginBottom: "4mm" }}>Song Structure</div>
            <div className="flex flex-wrap items-center" style={{ gap: "2.5mm 0" }}>
              {structure.map((part, i) => (
                <span key={i} className="flex items-center">
                  <span
                    className="font-mono uppercase"
                    style={{
                      fontSize: "7pt",
                      letterSpacing: "0.14em",
                      padding: "1.6mm 3mm",
                      borderRadius: "999px",
                      border: `0.25mm solid ${/chorus|drop|hook/i.test(part) && !/pre/i.test(part) ? accent : "rgba(255,255,255,0.18)"}`,
                      background: /chorus|drop|hook/i.test(part) && !/pre/i.test(part) ? `${accent}22` : "transparent",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {part}
                  </span>
                  {i < structure.length - 1 && <span style={{ width: "4mm", height: "0.25mm", background: "rgba(255,255,255,0.2)" }} />}
                </span>
              ))}
            </div>
          </div>
        )}

        <Footer url={url} accent={accent} page={1} />
      </section>

      {/* ── Page 2 — lyrics ───────────────────────────────────────── */}
      {track.lyrics.length > 0 && (
        <section className="sheet-page" style={{ padding: "14mm 16mm 22mm" }}>
          <div className="flex items-end justify-between" style={{ borderBottom: "0.25mm solid rgba(255,255,255,0.12)", paddingBottom: "4mm", marginBottom: "7mm" }}>
            <div>
              <div className={label} style={{ color: accent }}>Lyrics</div>
              <div className="font-bold tracking-tight" style={{ fontSize: "18pt", marginTop: "2mm" }}>{track.title}</div>
            </div>
            <img src={img(track.coverUrl, 128)} alt="" style={{ width: "14mm", height: "14mm", objectFit: "cover", borderRadius: "1.5mm", boxShadow: `0 0 0 0.3mm ${accent}66` }} />
          </div>
          <div style={{ columnCount: lyricsLayout.cols, columnGap: "9mm", columnFill: "balance" }}>
            {track.lyrics.map((stanza, si) => (
              <div key={si} className="stanza" style={{ marginBottom: `${lyricsLayout.gap}mm` }}>
                {stanza.map((line, li) =>
                  li === 0 && /^\[.*\]$/.test(line) ? (
                    <div key={li} className="font-mono font-semibold uppercase" style={{ fontSize: "7pt", letterSpacing: "0.18em", color: accent, marginBottom: "1.2mm" }}>
                      {line.slice(1, -1)}
                    </div>
                  ) : (
                    <p key={li} className="font-serif" style={{ fontSize: `${lyricsLayout.size}pt`, lineHeight: 1.5, color: "rgba(255,255,255,0.86)", margin: 0 }}>
                      {line}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "6mm", paddingTop: "4mm", borderTop: "0.25mm solid rgba(255,255,255,0.1)" }}>
            <div className={label} style={{ color: "rgba(255,255,255,0.4)", fontSize: "6.5pt", marginBottom: "1.5mm" }}>Credits</div>
            <p style={{ fontSize: "8.5pt", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              Music, lyrics &amp; production: DJ Andy&apos;K{track.vocal ? ` · Vocals: ${track.vocal}` : ""} · From the album{" "}
              <span style={{ color: "#fff" }}>{album.title}</span>
            </p>
          </div>

          <Footer url={url} accent={accent} page={2} />
        </section>
      )}
    </div>
  );
}

// Picks column count and font size so the lyrics fit on one A4 page.
// Rough height estimate in mm, including wrapping of long lines.
const LYRICS_COLUMN_MM = 205;
function fitLyrics(lyrics: string[][]) {
  for (const cols of [2, 3]) {
    for (const size of [10.5, 10, 9.5, 9, 8.5, 8]) {
      const gap = size >= 9.5 ? 5 : 3.5;
      const width = (178 - 9 * (cols - 1)) / cols;
      const charsPerLine = width / (size * 0.3528 * 0.47);
      const lineMm = size * 1.5 * 0.3528;
      let total = 0;
      for (const stanza of lyrics) {
        total += gap;
        stanza.forEach((line, i) => {
          if (i === 0 && /^\[.*\]$/.test(line)) total += 4;
          else total += Math.max(1, Math.ceil(line.length / charsPerLine)) * lineMm;
        });
      }
      // Stanzas don't split across columns, so leave slack for uneven balancing.
      if (total / cols <= LYRICS_COLUMN_MM * 0.88) return { cols, size, gap };
    }
  }
  return { cols: 3, size: 7.5, gap: 3 };
}

function Footer({ url, accent, page }: { url: string; accent: string; page: number }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between whitespace-nowrap" style={{ padding: "0 16mm 8mm", fontSize: "6.5pt" }}>
      <span className="font-mono uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.35)" }}>
        © {new Date().getFullYear()} DJ Andy&apos;K
      </span>
      <span className="font-mono tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.45)" }}>
        <span style={{ color: accent }}>●</span> {url} · {page}
      </span>
    </div>
  );
}
