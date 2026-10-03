import BeatportLogo from "@/components/BeatportLogo";
import {
  BEATPORT_GREEN,
  BEATPORT_PROFILE_URL,
  BEATPORT_RELEASES,
  beatportEmbedUrl,
} from "@/lib/beatport";

export default function BeatportSection() {
  const releases = BEATPORT_RELEASES.flatMap((r) => {
    const src = beatportEmbedUrl(r.url);
    return src ? [{ ...r, src }] : [];
  });

  return (
    <section id="beatport" className="relative pt-10 pb-20 px-8 section-with-glass">
      <div className="max-w-[1200px] mx-auto">
        {/* Header — same structure as Live Sets */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            Beatport
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            <span className="font-serif italic font-light">Now</span>{" "}on Beatport
          </h2>
          <p className="text-base text-muted font-light">
            DJ-ready releases — buy, download and play them in your own sets.
          </p>
        </div>

        {/* Release players */}
        {releases.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {releases.map((r) => (
              <div key={r.url} className="glass-card rounded-xl flex flex-col gap-4" style={{ padding: "20px" }}>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono block mb-2">
                    {r.year}
                  </span>
                  <h3 className="text-base font-bold text-foreground leading-snug">{r.title}</h3>
                </div>
                <iframe
                  src={r.src}
                  width="100%"
                  height="162"
                  frameBorder="0"
                  loading="lazy"
                  title={`${r.title} on Beatport`}
                  style={{ borderRadius: "8px", display: "block" }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Profile card */}
        <a
          href={BEATPORT_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card rounded-xl flex flex-col sm:flex-row items-center gap-6 max-w-[760px] mx-auto text-center sm:text-left"
          style={{ padding: "28px" }}
        >
          <span
            className="flex items-center justify-center w-16 h-16 rounded-full shrink-0"
            style={{ backgroundColor: "#111111", color: BEATPORT_GREEN }}
          >
            <BeatportLogo className="w-8 h-8" />
          </span>
          <span className="flex-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono block mb-2">
              Artist Profile
            </span>
            <span className="text-lg font-bold text-foreground leading-snug block">
              DJ Andy&apos;K on Beatport
            </span>
          </span>
          <span className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-highlight hover:bg-deep-teal transition-colors rounded shrink-0">
            Open on Beatport
          </span>
        </a>
      </div>
    </section>
  );
}
