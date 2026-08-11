export default function BeatportBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#000000", paddingTop: "40px", paddingBottom: "40px", paddingInline: "2rem" }}
    >
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <span
          className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] mb-3 px-3 py-1 rounded-full"
          style={{
            background: "rgba(0,255,102,0.1)",
            border: "1px solid rgba(0,255,102,0.35)",
            color: "#00FF66",
          }}
        >
          Now on Beatport
        </span>

        <h2
          className="text-[clamp(1.25rem,1rem+1vw,1.75rem)] font-bold tracking-tight leading-[1.2] mb-2"
          style={{ color: "#ffffff" }}
        >
          <span className="font-serif italic font-light">DJ Andy&apos;K</span>{" "}
          on Beatport
        </h2>

        <p className="text-sm font-light mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
          Stream and download on the world&apos;s leading platform for electronic music.
        </p>

        <a
          href="https://www.beatport.com/artist/dj-andyk/2441664"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "#00FF66",
            border: "1px solid transparent",
            color: "#000000",
          }}
        >
          Listen on Beatport →
        </a>
      </div>
    </section>
  );
}
