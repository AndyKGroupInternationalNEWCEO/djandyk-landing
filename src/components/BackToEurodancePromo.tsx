import AlbumPromoSection from "./AlbumPromoSection";

const ACCENT = "#D040A0";

const TRACKS = [
  { num: "01", title: "Stay (feat. Eva & Mark Witman)", releaseDate: "2026-09-11", date: "11.9.2026", accent: "#C060D0" },
  { num: "02", title: "Fire Inside (feat. Ritta & J-Jack)", releaseDate: "2026-09-18", date: "18.9.2026", accent: "#D040A0" },
  { num: "03", title: "Back To You (feat. Jully Calleb & Spencer Marks)", releaseDate: "2026-09-25", date: "25.9.2026", accent: "#9060C0" },
  { num: "04", title: "No Control (feat. Ritta & J-Jack)", releaseDate: "2026-10-02", date: "2.10.2026", accent: "#E050B0" },
  { num: "05", title: "Too Late For Goodbye (feat. Nella & J'B Ray)", releaseDate: "2026-10-09", date: "9.10.2026", accent: "#A050D0" },
  { num: "06", title: "Feel My Body (feat. Iazabella Marieera & Paollo Rivaninni)", releaseDate: "2026-10-16", date: "16.10.2026", accent: "#C040C0" },
];

export default function BackToEurodancePromo() {
  return (
    <AlbumPromoSection
      accent={ACCENT}
      kicker="Album · Eurodance · 2026"
      title="BACK TO EURODANCE"
      tagline="Authentic 90s Eurodance"
      description="6 Tracks. 6 Memories. One Return to the Dancefloor."
      ctaHref="/back-to-eurodance"
      coverSrc="/releases/back-to-eurodance-cover.png"
      coverAlt="Back to Eurodance — Authentic 90s Eurodance album by DJ Andy'K"
      tracks={TRACKS}
    />
  );
}
