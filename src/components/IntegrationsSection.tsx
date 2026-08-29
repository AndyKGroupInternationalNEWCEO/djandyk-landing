"use client";

import { useLanguage } from "@/context/LanguageContext";
import { STREAMING_PLATFORMS } from "@/lib/data";

const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  spotify: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  ),
  soundcloud: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M1.175 12.225c-.041 0-.082.035-.082.082l-.418 2.385.418 2.349c0 .047.041.082.082.082.042 0 .083-.035.083-.082l.473-2.349-.473-2.385c0-.047-.041-.082-.083-.082zm1.156-.371c-.044 0-.082.038-.082.083l-.363 2.755.363 2.63c0 .045.038.083.082.083.045 0 .082-.038.082-.083l.413-2.63-.413-2.755c0-.045-.037-.083-.082-.083zm1.188-.371c-.051 0-.098.047-.098.099l-.301 3.126.301 2.823c0 .052.047.099.098.099.052 0 .099-.047.099-.099l.341-2.823-.341-3.126c0-.052-.047-.099-.099-.099zm1.204-.148c-.06 0-.109.049-.109.11l-.245 3.274.245 2.956c0 .061.049.11.109.11.061 0 .11-.049.11-.11l.277-2.956-.277-3.274c0-.061-.049-.11-.11-.11zM24 10.234c-.413-3.128-3.048-5.551-6.246-5.551-1.063 0-2.067.269-2.933.733-.394-4.512-4.182-8.03-8.817-8.03-1.226 0-2.395.261-3.439.72C1.048-.285.315.758.191 1.972L.001 12.45l.001.062.001.065c.001.118.097.213.215.213h23.567c.119 0 .215-.096.215-.215v-.002c0-1.173-.001-2.339-.001-2.339z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  tidal: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996l4.004 4.004 4.004-4.004 4.004 4.004 4.004-4.004L20.02 11.999l3.98-4.003L20.02 3.992l-4.004 4.004zM4.004 12.004L0 16.008l4.004 4.004 4.004-4.004L4.004 12.004zm8.008 0l-4.004 4.004 4.004 4.004 4.004-4.004-4.004-4.004z" />
    </svg>
  ),
  hyperfollow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  beatport: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <rect x="3" y="14" width="4" height="7" rx="1" />
      <rect x="10" y="9" width="4" height="12" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  ),
};

// Each platform's own brand color — only ever shown on hover, so the grid
// stays black/white at rest and doesn't break the site's monochrome identity.
const PLATFORM_COLORS: Record<string, string> = {
  spotify: "#1DB954",
  apple: "#FA2D48",
  soundcloud: "#FF5500",
  youtube: "#FF0000",
  tidal: "#00FFFF",
  hyperfollow: "#7C3AED",
  beatport: "#01FF95",
};

export default function IntegrationsSection() {
  const { t } = useLanguage();

  return (
    <section id="platforms" className="relative pt-10 pb-20 px-8 section-with-glass">
      <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-14">
        <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
          {t.music.label}
        </span>
        <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-foreground mb-4">
          {(t.music.heading + " " + t.music.headingItalic).split(" ").map((word, i) => (
            <span key={i} className={i % 2 === 0 ? "font-serif italic font-light" : ""}>{i > 0 ? " " : ""}{word}</span>
          ))}
        </h2>
        <p className="text-lg text-muted font-light max-w-[520px] mx-auto">
          {t.music.description}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {STREAMING_PLATFORMS.map((platform, i) => (
          <div
            key={platform.name}
            className="platform-bob"
            style={
              {
                "--platform-bob-delay": `${i * 0.4}s`,
                "--platform-bob-duration": `${2.6 + (i % 4) * 0.35}s`,
              } as React.CSSProperties
            }
          >
            <a
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card glass-card group relative rounded-xl p-5 flex flex-col items-center justify-center gap-3"
              style={
                {
                  "--platform-color": PLATFORM_COLORS[platform.icon],
                  "--platform-flash-delay": `${i * 0.9}s`,
                  "--platform-flash-duration": `${4.4 + (i % 3) * 0.6}s`,
                } as React.CSSProperties
              }
            >
              <div className="platform-icon text-highlight transition-colors duration-300 group-hover:text-[var(--platform-color)]">
                {PLATFORM_ICONS[platform.icon]}
              </div>
              <span className="text-xs font-medium text-highlight transition-colors duration-300 text-center group-hover:text-[var(--platform-color)]">
                {platform.name}
              </span>
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
