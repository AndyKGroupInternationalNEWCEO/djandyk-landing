import AlbumPromoSection from "./AlbumPromoSection";

const GOLD = "#E8A020";

const TRACKS = [
  { num: "01", title: "Too Hot To Go Home (feat. Ben Wheeler)", releaseDate: "2026-08-28", date: "28.8.2026", accent: "#E8A020" },
  { num: "02", title: "The Way You Smile", releaseDate: "2026-08-21", date: "21.8.2026", accent: "#F0C060" },
  { num: "03", title: "Take It Off Slowly (feat. Nicolas Beech)", releaseDate: "2026-08-14", date: "14.8.2026", accent: "#D4956A" },
  { num: "04", title: "Stay A Little Longer (feat. Ben Wheeler)", releaseDate: "2026-08-07", date: "7.8.2026", accent: "#C4845A" },
  { num: "05", title: "Borrowed Sunshine", releaseDate: "2026-07-31", date: "31.7.2026", accent: "#E8A020" },
  { num: "06", title: "One More Bad Idea (feat. Mark Lutscher)", releaseDate: "2026-09-04", date: "4.9.2026", accent: "#B87040" },
  { num: "07", title: "We Outran Tomorrow (feat. Max Liem)", releaseDate: "2026-09-11", date: "11.9.2026", accent: "#A06030" },
  { num: "08", title: "Hands All Over Me", releaseDate: "2026-09-18", date: "18.9.2026", accent: "#906050" },
  { num: "09", title: "Half Past Summer", releaseDate: "2026-09-25", date: "25.9.2026", accent: "#C09060" },
  { num: "10", title: "Nothing Asked To Stay", releaseDate: "2026-10-09", date: "9.10.2026", accent: "#8A7060" },
];

export default function BorrowedSunshinePromo() {
  return (
    <AlbumPromoSection
      accent={GOLD}
      kicker="Album · Trance · 2026"
      title="BORROWED SUNSHINE"
      tagline="Trance / Progressive Trance"
      description="10 Tracks. 10 Stories. 10 Moments You'll Never Forget."
      ctaHref="/borrowed-sunshine"
      coverSrc="/releases/borrowed-sunshine-promo.png"
      coverAlt="Borrowed Sunshine — Trance / Progressive Trance album by DJ Andy'K"
      tracks={TRACKS}
    />
  );
}
