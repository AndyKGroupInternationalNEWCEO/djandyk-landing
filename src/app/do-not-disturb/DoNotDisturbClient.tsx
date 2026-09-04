"use client";

import { doNotDisturbAlbum } from "@/data/do-not-disturb-tracks";
import { STREAMING_PLATFORMS } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SOUNDCLOUD_PLAYLIST_URL =
  "https://soundcloud.com/djandyk_2024/sets/do-not-disturb?si=58acd55f3e454217b5d57763b09a9515&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

export default function DoNotDisturbClient() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#08080a" }}>
        <section className="px-6 pt-14 pb-20 max-w-[560px] mx-auto text-center">
          <span
            className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-4 px-3 py-1 rounded-full border"
            style={{
              color: doNotDisturbAlbum.accent,
              borderColor: `${doNotDisturbAlbum.accent}33`,
              background: `${doNotDisturbAlbum.accent}0d`,
            }}
          >
            {doNotDisturbAlbum.subtitle} · {doNotDisturbAlbum.genre}
          </span>

          <h1
            className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight leading-[1.1] mb-6"
            style={{ color: "#f0f6fc" }}
          >
            DO NOT DISTURB
          </h1>

          <div
            className="relative w-full max-w-[280px] aspect-square mx-auto mb-8 rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(201,162,39,0.3)", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}
          >
            <img
              src={doNotDisturbAlbum.heroCoverSrc}
              alt="Do Not Disturb — DJ Andy'K"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-base leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.75)" }}>
            {doNotDisturbAlbum.description}
          </p>

          <p
            className="jukebox-blink inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] mt-4 mb-10 px-3 py-1.5 rounded-full border"
            style={{
              color: "#D6608F",
              borderColor: "rgba(214,96,143,0.4)",
              background: "rgba(214,96,143,0.08)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#D6608F", boxShadow: "0 0 6px rgba(214,96,143,0.8)" }}
            />
            Web player &amp; full info coming soon
          </p>

          {/* Listen now — real playlist link */}
          <a
            href={SOUNDCLOUD_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold mb-4 transition-transform hover:-translate-y-0.5"
            style={{ background: "#ff5500", color: "#0d0d0f" }}
          >
            ▶ Listen on SoundCloud
          </a>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {STREAMING_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-colors"
                style={{ color: "rgba(255,255,255,0.55)", borderColor: "rgba(255,255,255,0.15)" }}
              >
                {platform.name}
              </a>
            ))}
          </div>
        </section>
      </main>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
