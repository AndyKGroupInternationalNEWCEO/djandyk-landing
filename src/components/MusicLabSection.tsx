"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CURRENCIES = [
  { code: "GBP", symbol: "£",  rate: 1 },
  { code: "EUR", symbol: "€",  rate: 1.20 },
  { code: "USD", symbol: "$",  rate: 1.27 },
  { code: "BRL", symbol: "R$", rate: 6.50 },
  { code: "PYG", symbol: "₲",  rate: 950 },
] as const;

type CurrencyCode = typeof CURRENCIES[number]["code"];

const BASE_GBP: Record<string, number> = { studio: 49, pro: 199, single: 79 };

function fmt(gbp: number, symbol: string, rate: number): string {
  const amount = Math.round(gbp * rate);
  return symbol + (amount >= 1000 ? amount.toLocaleString("en-GB") : String(amount));
}

const WAVE_HEIGHTS = [
  16, 24, 36, 52, 65, 72, 60, 78, 70, 55, 80, 72, 64, 76, 58, 82, 74, 66,
  88, 78, 90, 82, 76, 92, 88, 80, 92, 84, 78, 88, 82, 72, 86, 76, 66, 80,
  70, 60, 74, 62, 52, 68, 56, 44, 58, 40, 28, 18,
];

function LabWaveform() {
  return (
    <div className="lab-waveform" aria-hidden="true">
      {WAVE_HEIGHTS.map((h, i) => (
        <div
          key={i}
          className="lab-wave-bar"
          style={{
            height: `${h}px`,
            animationDelay: `${((i * 0.075) % 1.8).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}

const PLANS = [
  {
    id: "studio",
    name: "Studio Pass",
    price: "£49",
    period: "/ month",
    badge: "COMING SOON",
    tag: null,
    highlighted: false,
    features: [
      "Mastering — 3x per month",
      "BPM + Key Detector — unlimited",
      "DJ Set Planner — unlimited",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro Pass",
    price: "£199",
    period: "/ year",
    badge: "BEST VALUE · COMING SOON",
    tag: "Most Popular",
    highlighted: true,
    features: [
      "Everything in Studio Pass",
      "Mastering — unlimited",
      "1x personal Mix Feedback from DJ Andy'K per month",
      "Early access to new tools",
      "Priority support",
    ],
  },
  {
    id: "single",
    name: "Single Session",
    price: "£79",
    period: "/ one-time",
    badge: "COMING SOON",
    tag: null,
    highlighted: false,
    features: [
      "1x Mastering",
      "1x Mix Feedback",
      "BPM + Key — 5x",
    ],
  },
] as const;

const WAITLIST = "mailto:ceo@andykgroup.com?subject=Andy'K Music Lab Waitlist";

const CHECK_ICON = (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#111111" }}>
    <path d="M3 8l3.5 3.5 6.5-6.5" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface SpotsData { spots_left: number; total: number; closed: boolean; }

export default function MusicLabSection() {
  const [spots, setSpots] = useState<SpotsData | null>(null);
  const [currency, setCurrency] = useState<CurrencyCode>("GBP");
  const cur = CURRENCIES.find((c) => c.code === currency)!;

  useEffect(() => {
    fetch("https://lab.djandykofficial.com/api/spots")
      .then(r => r.json())
      .then((d: SpotsData) => setSpots(d))
      .catch(() => {});
  }, []);

  const [demoPlaying, setDemoPlaying] = useState<"before" | "after" | null>(null);
  const [demoProgress, setDemoProgress] = useState(0);
  const beforeAudioRef = useRef<HTMLAudioElement | null>(null);
  const afterAudioRef  = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const before = new Audio("https://lab.djandykofficial.com/audio/before.mp3");
    const after  = new Audio("https://lab.djandykofficial.com/audio/after.mp3");
    const onUpdate = (e: Event) => {
      const el = e.target as HTMLAudioElement;
      if (el.duration > 0) setDemoProgress(el.currentTime / el.duration);
    };
    const onEnd = () => { setDemoPlaying(null); setDemoProgress(0); };
    before.addEventListener("timeupdate", onUpdate);
    after.addEventListener("timeupdate", onUpdate);
    before.addEventListener("ended", onEnd);
    after.addEventListener("ended", onEnd);
    beforeAudioRef.current = before;
    afterAudioRef.current  = after;
    return () => { before.pause(); after.pause(); };
  }, []);

  const playDemo = (track: "before" | "after") => {
    const ref   = track === "before" ? beforeAudioRef : afterAudioRef;
    const other = track === "before" ? afterAudioRef  : beforeAudioRef;
    other.current?.pause();
    if (demoPlaying === track) {
      ref.current?.pause();
      setDemoPlaying(null);
    } else {
      if (ref.current) { ref.current.currentTime = 0; ref.current.play().catch(() => {}); }
      setDemoProgress(0);
      setDemoPlaying(track);
    }
  };

  return (
    <section id="lab" className="relative pt-10 pb-0 px-8 overflow-hidden" style={{ background: "#F5F5F5" }}>
      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-[#111111] leading-[1.2] mb-4">
            <span className="font-serif italic font-light">Andy&apos;K</span>{" "}
            Music{" "}
            <span className="font-serif italic font-light">Lab</span>
          </h2>
          <p className="text-base text-[rgba(0,0,0,0.6)] font-light">
            Professional music tools for producers and DJs — built by DJ Andy&apos;K.
          </p>
        </div>

        {/* Early access banner */}
        <div style={{ background: "#111111", padding: "14px 24px", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px 16px" }}>
          <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff" }}>
            Early Access — First 40 Members Get 40% Off
          </span>
          <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: spots?.closed || spots?.spots_left === 0 ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.75)", whiteSpace: "nowrap" }}>
            {spots ? (spots.closed || spots.spots_left === 0 ? "Early Access Closed" : `${spots.spots_left} Spots Remaining`) : "— Spots Remaining"}
          </span>
        </div>
        <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "#a3a3a3", marginBottom: 20 }}>
          <Link href="/#waitlist" style={{ color: "#a3a3a3", textDecoration: "underline" }}>
            Join the waitlist to lock in your discount →
          </Link>
        </p>

        {/* Currency selector */}
        <div className="flex justify-end mb-2 gap-1.5">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              onClick={() => setCurrency(c.code)}
              className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest transition-colors"
              style={
                currency === c.code
                  ? { background: "#111111", color: "#ffffff" }
                  : { background: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.5)", border: "1px solid rgba(0,0,0,0.1)" }
              }
            >
              {c.code}
            </button>
          ))}
        </div>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#a3a3a3", textAlign: "right", marginTop: "8px", display: "block" }}>
          Prices shown in GBP. Other currencies are approximate. Final amount charged in GBP by{" "}
          <a href="https://www.revolut.com/business/" target="_blank" rel="noopener noreferrer" style={{ color: "#a3a3a3", textDecoration: "underline" }}>Revolut Business</a>.
        </p>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`lab-pricing-card rounded-xl flex flex-col${plan.highlighted ? " lab-pricing-card--pro md:-mt-5" : ""}`}
              style={
                plan.highlighted
                  ? {
                      background: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.25)",
                      boxShadow: "0 0 48px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.1)",
                    }
                  : {
                      background: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.1)",
                    }
              }
            >
              {/* Most Popular badge row */}
              {plan.tag ? (
                <div className="px-6 pt-5 pb-0">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest"
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.15)",
                      color: "#111111",
                    }}
                  >
                    ⭐ Most Popular
                  </span>
                </div>
              ) : null}

              <div className={`p-6 flex flex-col flex-1${plan.tag ? " pt-4" : ""}`}>
                {/* Plan name */}
                <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[rgba(0,0,0,0.45)] mb-3">
                  {plan.name}
                </h3>

                {/* Price — always show normal price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className={`font-bold text-[#111111]${plan.highlighted ? " text-4xl" : " text-3xl"}`}>
                      {fmt(BASE_GBP[plan.id], cur.symbol, cur.rate)}
                    </span>
                    <span className="text-sm text-[rgba(0,0,0,0.35)]">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[rgba(0,0,0,0.65)]">
                      {CHECK_ICON}
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WAITLIST}
                  className="block w-full text-center py-2.5 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
                  style={
                    plan.highlighted
                      ? {
                          background: "#111111",
                          border: "1px solid transparent",
                          color: "#ffffff",
                        }
                      : {
                          background: "transparent",
                          border: "1px solid rgba(0,0,0,0.18)",
                          color: "#111111",
                        }
                  }
                >
                  Join Waitlist →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mastering demo */}
        <div className="mt-14 mb-4 text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[rgba(0,0,0,0.38)] mb-3">
            Mastering Demo
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-[#111111] mb-6">
            Hear the <em className="font-serif font-light not-italic" style={{ fontStyle: "italic" }}>difference</em>
          </h3>
          <div className="flex gap-3 justify-center mb-4 flex-wrap">
            {(["before", "after"] as const).map(track => (
              <button
                key={track}
                onClick={() => playDemo(track)}
                className="flex items-center gap-2.5 transition-all duration-150"
                style={{
                  padding: "12px 28px", borderRadius: 10,
                  fontFamily: "monospace", fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  background: demoPlaying === track ? "#111111" : "transparent",
                  color: demoPlaying === track ? "#ffffff" : "#111111",
                  border: "1.5px solid #111111",
                  cursor: "pointer", minWidth: 120,
                }}
              >
                <span>{demoPlaying === track ? "■" : "▶"}</span>
                {track === "before" ? "Before" : "After"}
              </button>
            ))}
          </div>
          <div style={{ height: 2, background: "rgba(0,0,0,0.1)", borderRadius: 2, maxWidth: 340, margin: "0 auto 10px" }}>
            <div style={{ height: "100%", background: "#111111", borderRadius: 2, width: `${demoProgress * 100}%`, transition: "width 0.15s linear" }} />
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[rgba(0,0,0,0.3)]" style={{ minHeight: 14 }}>
            {demoPlaying === "before" ? "Playing: Unmastered" : demoPlaying === "after" ? "Playing: Mastered — −14 LUFS" : ""}
          </p>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-[rgba(0,0,0,0.3)] mt-8 mb-4 font-light">
          Launching on lab.djandykofficial.com — be first in line.
        </p>
        <p className="text-center mb-16" style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "#a3a3a3" }}>
          Have an early access code? Use it at checkout for 40% off.
        </p>
      </div>

      {/* Waveform pinned to bottom of Lab section */}
      <LabWaveform />

      <style>{`
        .lab-pricing-card {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .lab-pricing-card:hover {
          transform: translateY(-4px);
          background: #f8f8f8 !important;
          border-color: rgba(0,0,0,0.2) !important;
        }
        .lab-pricing-card--pro:hover {
          background: #f5f5f5 !important;
          box-shadow: 0 0 48px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.15), 0 12px 48px rgba(0,0,0,0.12) !important;
          border-color: rgba(0,0,0,0.3) !important;
        }
      `}</style>
    </section>
  );
}
