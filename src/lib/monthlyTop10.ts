// Editorial "DJ Andy'K Top 10" monthly selection — the ten tracks and
// their order are chosen and ranked by hand each month, never derived
// from invented streaming statistics.

export interface Top10Track {
  rank: number;
  title: string;
  featuredArtist?: string;
  artwork: string;
  audioPreview?: string;
  releaseLink?: string;
}

export interface MonthlyTop10Collection {
  /** Display label, e.g. "August 2026" */
  label: string;
  /** 1–12 */
  month: number;
  year: number;
  tracks: Top10Track[];
}

// Add a new collection here each month. The site automatically shows
// the one matching the current month, falling back to the most recent
// past collection that actually has tracks if nothing matches yet —
// so an empty, not-yet-populated month never renders a broken section.
export const MONTHLY_TOP10_COLLECTIONS: MonthlyTop10Collection[] = [
  {
    label: "August 2026",
    month: 8,
    year: 2026,
    tracks: [],
  },
];

export function getActiveMonthlyTop10(): MonthlyTop10Collection | null {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  const withTracks = MONTHLY_TOP10_COLLECTIONS.filter((c) => c.tracks.length > 0);
  if (withTracks.length === 0) return null;

  const sorted = [...withTracks].sort((a, b) =>
    a.year !== b.year ? b.year - a.year : b.month - a.month
  );

  const exact = sorted.find((c) => c.year === currentYear && c.month === currentMonth);
  if (exact) return exact;

  const mostRecentPast = sorted.find(
    (c) => c.year < currentYear || (c.year === currentYear && c.month <= currentMonth)
  );
  return mostRecentPast ?? sorted[0];
}
