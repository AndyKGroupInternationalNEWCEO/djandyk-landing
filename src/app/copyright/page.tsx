import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Copyright",
  description:
    "Copyright information for DJ Andy'K music and content. \u2117 & \u00a9 ANDY'K GROUP INTERNATIONAL LTD.",
  alternates: { canonical: "/copyright" },
};

export default function CopyrightPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[60px]">
      <div className="max-w-[760px] mx-auto px-6 py-12 md:py-16">

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-2 hover:text-muted transition-colors mb-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to djandykofficial.com
        </Link>

        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
          Copyright Notice
        </h1>
        <div className="mt-3 mb-10">
          <p className="text-sm text-muted-2 font-mono">DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD</p>
          <p className="text-sm text-muted-2 font-mono">Last updated: 2026</p>
        </div>

        <article className="space-y-10 text-[15px] leading-relaxed text-muted">

          {/* Music */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Music &amp; Sound Recordings</h2>
            <div className="border border-grid-300 rounded-xl p-5 bg-white space-y-2">
              <p className="font-mono text-sm text-foreground">
                ℗ &amp; © 2026 ANDY&apos;K GROUP INTERNATIONAL LTD
              </p>
              <p>
                All sound recordings, master recordings, and music productions released under the name DJ Andy&apos;K
                are the exclusive property of ANDY&apos;K GROUP INTERNATIONAL LTD. All rights reserved.
              </p>
            </div>
          </section>

          {/* Lyrics & Artwork */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Lyrics, Artwork &amp; Visual Content</h2>
            <div className="border border-grid-300 rounded-xl p-5 bg-white space-y-2">
              <p className="font-mono text-sm text-foreground">
                © 2026 DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD
              </p>
              <p>
                All lyrics, album artwork, cover designs, artist photographs, logos, and visual materials
                associated with DJ Andy&apos;K are protected by copyright and owned by or exclusively
                licensed to ANDY&apos;K GROUP INTERNATIONAL LTD.
              </p>
            </div>
          </section>

          {/* Website */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Website Content</h2>
            <p>
              © 2026 DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD. All text, code, design,
              and multimedia content published on djandykofficial.com is protected by applicable
              intellectual property laws.
            </p>
          </section>

          {/* Prohibited */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Prohibited Uses</h2>
            <p>Without prior written permission, you may not:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Copy, reproduce, or distribute any music, recordings, or artwork</li>
              <li>Use DJ Andy&apos;K music in videos, films, broadcasts, or commercial projects</li>
              <li>Re-upload or redistribute tracks on any platform</li>
              <li>Create derivative works based on the music or visual identity</li>
              <li>Use the DJ Andy&apos;K name, logo, or likeness for promotional purposes</li>
            </ul>
          </section>

          {/* Licensing */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Licensing &amp; Sync</h2>
            <p>
              For licensing enquiries — including sync licensing, broadcast use, playlist
              placement, cover permissions, or any commercial use of DJ Andy&apos;K music — please contact:
            </p>
            <div className="border border-grid-300 rounded-xl p-5 bg-white space-y-1.5">
              <p className="font-semibold text-foreground">ANDY&apos;K GROUP INTERNATIONAL LTD</p>
              <p>
                Email:{" "}
                <a href="mailto:ceo@andykgroup.com" className="text-highlight hover:text-deep-teal transition-colors">
                  ceo@andykgroup.com
                </a>
              </p>
              <p>Registered office: 86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom</p>
              <p>Company No.: 16453500</p>
            </div>
          </section>

          {/* Streaming note */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Streaming &amp; Personal Use</h2>
            <p>
              Listening to DJ Andy&apos;K music through licensed streaming platforms (Spotify, Apple Music,
              TIDAL, SoundCloud, YouTube) is permitted and encouraged within the terms of those platforms.
              Such use does not grant any ownership rights over the content.
            </p>
          </section>

          {/* Footer */}
          <div className="border-t border-grid-300 pt-8 text-sm text-muted-2 font-mono space-y-1">
            <p>℗ &amp; © 2026 ANDY&apos;K GROUP INTERNATIONAL LTD · All rights reserved</p>
            <p>UK Company No. 16453500 · 86&ndash;90 Paul Street, London, EC2A 4NE</p>
          </div>

        </article>
      </div>
    </main>
      <Footer />
    </>
  );
}
