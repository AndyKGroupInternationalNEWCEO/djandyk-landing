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
    tracks: [
      {
        rank: 1,
        title: "Opus No. 1: Vienna",
        artwork: "/releases/opus-no-1-vienna-cover.png",
        audioPreview: "/audio/opus-no-1-vienna-i-prologue.mp3",
        releaseLink: "/opus-no-1-vienna",
      },
      {
        rank: 2,
        title: "Breathe Me Back to Life",
        featuredArtist: "Mattew Brexon",
        artwork: "/releases/breathe-me-back-to-life.png",
        audioPreview: "/audio/breathe-me-back-to-life.mp3",
        releaseLink: "/euphoria-needs-no-story/breathe-me-back-to-life",
      },
      {
        rank: 3,
        title: "Before I Forget",
        artwork: "/releases/before-i-forget.png",
        audioPreview: "/audio/before-i-forget.mp3",
        releaseLink: "/before-i-forget/before-i-forget",
      },
      {
        rank: 4,
        title: "The Distance Learned to Dance",
        featuredArtist: "Thymoty Lorrens",
        artwork: "/releases/the-distance-learned-to-dance.png",
        audioPreview: "/audio/the-distance-learned-to-dance.mp3",
        releaseLink: "/euphoria-needs-no-story/the-distance-learned-to-dance",
      },
      {
        rank: 5,
        title: "Euphoria Needs No Story",
        featuredArtist: "Mattew Brexon",
        artwork: "/releases/euphoria-needs-no-story.png",
        audioPreview: "/audio/euphoria-needs-no-story.mp3",
        releaseLink: "/euphoria-needs-no-story/euphoria-needs-no-story",
      },
      {
        rank: 6,
        title: "Borrowed Sunshine",
        artwork: "/releases/borrowed-sunshine.png",
        audioPreview: "/audio/borrowed-sunshine.mp3",
        releaseLink: "/borrowed-sunshine/borrowed-sunshine",
      },
      {
        rank: 7,
        title: "Stay A Little Longer",
        featuredArtist: "Ben Wheeler",
        artwork: "/releases/stay-a-little-longer.png",
        audioPreview: "/audio/stay-a-little-longer.mp3",
        releaseLink: "/borrowed-sunshine/stay-a-little-longer",
      },
      {
        rank: 8,
        title: "I Arrived As Someone Else",
        artwork: "/releases/i-arrived-as-someone-else.png",
        audioPreview: "/audio/i-arrived-as-someone-else.mp3",
        releaseLink: "/six-trance-ballads/i-arrived-as-someone-else",
      },
      {
        rank: 9,
        title: "Blame The DJ",
        featuredArtist: "Juliana Ritter",
        artwork: "/releases/blame-the-dj.png",
        audioPreview: "/audio/blame-the-dj.mp3",
        releaseLink: "/do-not-disturb",
      },
      {
        rank: 10,
        title: "In My Veins",
        artwork: "/releases/in-my-veins.png",
        audioPreview: "/audio/in-my-veins.mp3",
        releaseLink: "/deep-connections/in-my-veins",
      },
    ],
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
