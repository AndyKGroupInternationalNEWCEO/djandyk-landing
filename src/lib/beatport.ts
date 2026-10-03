import { STREAMING_PLATFORMS } from "@/lib/data";

export const BEATPORT_PROFILE_URL =
  STREAMING_PLATFORMS.find((p) => p.icon === "beatport")?.href ??
  "https://www.beatport.com/artist/dj-andyk/2441664";

// Official Beatport brand colour (simple-icons). Only used on the logo itself.
export const BEATPORT_GREEN = "#01FF95";

export interface BeatportRelease {
  year: string;
  title: string;
  /** Public Beatport URL, e.g. https://www.beatport.com/release/name/1234567 (or /track/...) */
  url: string;
}

// Releases shown with a Beatport player in the homepage Beatport section.
// Add an entry here to show a new player — no component changes needed.
export const BEATPORT_RELEASES: BeatportRelease[] = [];

/** Turns a public Beatport release/track URL into its embeddable player URL. */
export function beatportEmbedUrl(url: string): string | null {
  const match = url.match(/beatport\.com\/(release|track)\/[^/]+\/(\d+)/);
  if (!match) return null;
  const [, type, id] = match;
  return `https://embed.beatport.com/?id=${id}&type=${type}`;
}
