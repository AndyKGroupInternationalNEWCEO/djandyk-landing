import AlbumPromoSection from "./AlbumPromoSection";

const ACCENT = "#E84C3C";

const TRACKS = [
  { num: "01", title: "Don't Look Away (Bana Öyle Bakma)", releaseDate: "2026-10-30", date: "30.10.2026", accent: "#E84C3C" },
  { num: "02", title: "No Explanation (Bala Kalam)", releaseDate: "2026-11-06", date: "6.11.2026", accent: "#F0A020" },
  { num: "03", title: "Read My Face (Pa Fjalë)", releaseDate: "2026-11-13", date: "13.11.2026", accent: "#4A90D9" },
  { num: "04", title: "Read It in My Eyes (Pročitaj Mi u Očima)", releaseDate: "2026-11-20", date: "20.11.2026", accent: "#D9432E" },
  { num: "05", title: "Before Dawn (Преди Зори)", releaseDate: "2026-11-27", date: "27.11.2026", accent: "#40E0C0" },
  { num: "06", title: "Under Your Skin (Sub Pielea Ta)", releaseDate: "2026-12-04", date: "4.12.2026", accent: "#E8B020" },
];

export default function NoTranslationPromo() {
  return (
    <AlbumPromoSection
      accent={ACCENT}
      kicker="Album · Melodic Progressive Tech House · 2026"
      title="NO TRANSLATION"
      tagline="Six Languages. One Night. Nothing Needs Explaining."
      description="Words change. The night does not."
      ctaHref="/no-translation"
      coverSrc="/releases/no-translation-promo.png"
      coverAlt="No Translation — Melodic Progressive Tech House album by DJ Andy'K"
      tracks={TRACKS}
    />
  );
}
