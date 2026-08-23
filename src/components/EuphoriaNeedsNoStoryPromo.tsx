import AlbumPromoSection from "./AlbumPromoSection";

const ACCENT = "#E8B020";
const FAR_FUTURE = "2099-01-01";

const TRACKS = [
  { num: "01", title: "Breathe Me Back to Life", releaseDate: FAR_FUTURE, date: "Coming Soon", accent: "#4AC8E0" },
  { num: "02", title: "Alive in the Afterglow", releaseDate: FAR_FUTURE, date: "Coming Soon", accent: "#E0A050" },
  { num: "03", title: "Even Silence Sounds Like You", releaseDate: FAR_FUTURE, date: "Coming Soon", accent: "#4A90D0" },
  { num: "04", title: "After You Left", releaseDate: FAR_FUTURE, date: "Coming Soon", accent: "#C87840" },
  { num: "05", title: "Temporary Immortals", releaseDate: FAR_FUTURE, date: "Coming Soon", accent: "#9060E0" },
  { num: "06", title: "The Distance Learned to Dance", releaseDate: FAR_FUTURE, date: "Coming Soon", accent: "#4070E0" },
  { num: "07", title: "We Were Future Once", releaseDate: FAR_FUTURE, date: "Coming Soon", accent: "#60D8E8" },
  { num: "08", title: "Euphoria Needs No Story", releaseDate: FAR_FUTURE, date: "Coming Soon", accent: "#E8B020" },
];

export default function EuphoriaNeedsNoStoryPromo() {
  return (
    <AlbumPromoSection
      accent={ACCENT}
      kicker="Album · Trance · 2026"
      title="EUPHORIA NEEDS NO STORY"
      tagline="Ten Tracks. Four Voices. One Continuous Trance Journey."
      description="Rebirth, memory, silence, distance and temporary immortality — before arriving at pure euphoria."
      ctaHref="/euphoria-needs-no-story"
      coverSrc="/releases/euphoria-needs-no-story-cover.png"
      coverAlt="Euphoria Needs No Story — Trance album by DJ Andy'K"
      tracks={TRACKS}
    />
  );
}
