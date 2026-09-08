import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPETITION, COMPETITION_MEDIA } from "@/data/this-is-my-choice";

const METALLIC_GRADIENT = "linear-gradient(90deg, #C026D3 0%, #7C3AED 35%, #4F46E5 65%, #06B6D4 100%)";

export const metadata: Metadata = {
  title: "This Is My Choice Competition | DJ Andy'K",
  description:
    "Choose an official DJ Andy'K track, create a 20-second Instagram Reel and compete for Lifetime Unlimited Access to Andy'K Music Lab.",
  alternates: { canonical: "https://www.djandykofficial.com/this-is-my-choice" },
  openGraph: {
    type: "website",
    url: "https://www.djandykofficial.com/this-is-my-choice",
    title: "This Is My Choice Competition | DJ Andy'K",
    description:
      "Choose an official DJ Andy'K track, create a 20-second Instagram Reel and compete for Lifetime Unlimited Access to Andy'K Music Lab.",
    images: [
      {
        url: "/this-is-my-choice/main-flyer-4x5.png",
        width: 1080,
        height: 1350,
        alt: "This Is My Choice — competition by DJ Andy'K",
      },
    ],
  },
};

function MetallicText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        backgroundImage: METALLIC_GRADIENT,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}

function InstagramPostUrl() {
  // Entry hub — the official competition post lives on Instagram, not on
  // this site, so "Enter on Instagram" and the hashtag comment both point
  // to the artist's profile until the specific post is published.
  return COMPETITION.instagram.artist.url;
}

export default function ThisIsMyChoicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[60px]">
        {/* Hero */}
        <section className="relative py-16 md:py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[860px] mx-auto text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-2 font-mono block mb-5">
              Andy&apos;K Music Lab presents
            </span>

            <h1 className="text-[clamp(2.25rem,2rem+2vw,4rem)] font-bold tracking-tight leading-[1.05] text-foreground mb-2">
              THIS IS <MetallicText>MY CHOICE</MetallicText>
            </h1>
            <p className="text-base font-mono uppercase tracking-[0.25em] text-muted-2 mb-8">
              by DJ Andy&apos;K
            </p>

            <p className="text-lg text-muted leading-relaxed max-w-[600px] mx-auto mb-8 font-light">
              Choose one official DJ Andy&apos;K track, create a 20-second Instagram Reel and
              compete for Lifetime Unlimited Access to Andy&apos;K Music Lab.
            </p>

            <p className="text-sm font-mono text-foreground mb-10">
              {COMPETITION.dates.startsLabel} — {COMPETITION.dates.closesLabel}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight">
                <MetallicText>{COMPETITION.winnerCount} WINNERS</MetallicText>
              </span>
            </div>
            <p className="text-sm text-muted mb-12">
              {COMPETITION.prize.headline} — {COMPETITION.prize.subheadline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={InstagramPostUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-foreground btn-primary-gradient"
              >
                <span className="relative z-10">Enter on Instagram</span>
              </a>
              <a
                href="#how-to-enter"
                className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium btn-secondary text-foreground"
              >
                How to Enter
              </a>
              <Link
                href="/this-is-my-choice/rules"
                className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium btn-secondary text-foreground"
              >
                Official Rules
              </Link>
            </div>
          </div>
        </section>

        {/* How to enter */}
        <section id="how-to-enter" className="py-16 md:py-20 px-6 bg-bg-light">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center max-w-[600px] mx-auto mb-12">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-2 font-mono block mb-3">
                How to Enter
              </span>
              <h2 className="text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-bold tracking-tight text-foreground">
                Five steps to enter
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPETITION.steps.map((step) => (
                <div key={step.n} className="glass-card rounded-xl p-6">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-2">
                    Step {step.n}
                  </p>
                  <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-2 text-center mt-10 max-w-[500px] mx-auto">
              {COMPETITION.eligibilityNote}
            </p>
          </div>
        </section>

        {/* Official dates */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-[900px] mx-auto text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-2 font-mono block mb-3">
              Official Dates
            </span>
            <h2 className="text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-bold tracking-tight text-foreground mb-10">
              Mark your calendar
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="glass-card rounded-xl p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-2">Starts</p>
                <p className="text-xl font-bold text-foreground">{COMPETITION.dates.startsLabel}</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-2">Closes</p>
                <p className="text-xl font-bold text-foreground">{COMPETITION.dates.closesLabel}</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-2">
                  Winners Announced
                </p>
                <p className="text-xl font-bold text-foreground">{COMPETITION.dates.winnersAnnouncedLabel}</p>
              </div>
            </div>
            <p className="text-xs font-mono text-muted-2">
              All times are {COMPETITION.dates.timezone} (Vienna time).
            </p>
          </div>
        </section>

        {/* Winner selection */}
        <section className="py-16 md:py-20 px-6 bg-bg-light">
          <div className="max-w-[760px] mx-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-2 font-mono block mb-3 text-center">
              Winner Selection
            </span>
            <h2 className="text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-bold tracking-tight text-foreground mb-6 text-center">
              How winners are chosen
            </h2>
            <p className="text-base text-muted leading-relaxed text-center mb-10">
              The five eligible Instagram Reels with the highest number of genuine likes at the
              official closing time will win.
            </p>

            <div className="glass-card rounded-xl p-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-2 mb-4">
                Not allowed
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {COMPETITION.prohibited.map((item) => (
                  <li key={item} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-muted-2 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Prize */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-[760px] mx-auto text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-2 font-mono block mb-3">
              The Prize
            </span>
            <h2 className="text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-bold tracking-tight mb-2">
              <MetallicText>{COMPETITION.prize.headline}</MetallicText>
            </h2>
            <p className="text-lg text-muted font-light mb-10">{COMPETITION.prize.subheadline}</p>

            <div className="glass-card rounded-xl p-8 text-left mb-8">
              <ul className="space-y-3">
                {COMPETITION.prize.bullets.map((b) => (
                  <li key={b} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-muted-2 mt-0.5">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 text-xs text-muted-2 max-w-[560px] mx-auto">
              <p>{COMPETITION.prize.lifetimeNote}</p>
              <p>{COMPETITION.prize.nonTransferableNote}</p>
              <p>{COMPETITION.prize.featureRequestNote}</p>
            </div>
          </div>
        </section>

        {/* Campaign media */}
        <section className="py-16 md:py-20 px-6 bg-bg-light">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center max-w-[600px] mx-auto mb-12">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-2 font-mono block mb-3">
                Campaign Media
              </span>
              <h2 className="text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-bold tracking-tight text-foreground">
                Assets
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {COMPETITION_MEDIA.filter((m) => m.format !== "audio").map((asset) => (
                <div key={asset.key} className="glass-card rounded-xl overflow-hidden">
                  <div
                    className="relative w-full bg-black/5 flex items-center justify-center"
                    style={{ aspectRatio: asset.format === "9:16" ? "9/16" : asset.format === "1:1" ? "1/1" : "4/5" }}
                  >
                    {asset.src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={asset.src} alt={asset.label} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-2 px-3 text-center">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-foreground p-3">{asset.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {COMPETITION_MEDIA.filter((m) => m.format === "audio").map((asset) => (
                <div key={asset.key} className="glass-card rounded-xl p-4">
                  <p className="text-xs font-medium text-foreground mb-3">{asset.label}</p>
                  {asset.src ? (
                    <audio controls src={asset.src} className="w-full" />
                  ) : (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-2">
                      Coming soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lab promo card */}
        <section className="py-16 md:py-20 px-6">
          <div
            className="max-w-[760px] mx-auto rounded-2xl p-10 text-center"
            style={{ background: "#F5F5F5", border: "1px solid #e5e5e5" }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-2 font-mono block mb-4">
              The prize is powered by
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-3">
              Andy&apos;K Music Lab
            </h2>
            <p className="text-sm text-muted mb-8">
              Professional browser-based tools for DJs and producers.
            </p>
            <a
              href={COMPETITION.labUrl}
              className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium bg-foreground text-white hover:opacity-90 transition-opacity"
            >
              Explore Andy&apos;K Music Lab →
            </a>
          </div>
        </section>

        {/* Legal summary */}
        <section className="py-12 px-6 border-t border-grid-300">
          <div className="max-w-[600px] mx-auto text-center">
            <p className="text-xs text-muted-2 leading-relaxed mb-3">
              No purchase necessary. Organized by ANDY&apos;K GROUP INTERNATIONAL LTD. This
              competition is in no way sponsored, endorsed, administered by, or associated with
              Instagram or Meta.
            </p>
            <Link
              href="/this-is-my-choice/rules"
              className="text-xs font-medium text-foreground underline underline-offset-2"
            >
              Read the full Official Rules →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
