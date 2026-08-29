// Single source of truth for every album shown on the homepage catalogue.
// Each album has exactly one `category`, so it can only ever render in one
// section — this is what prevents the duplicate-card problem for good.

export type AlbumCategory = "signature" | "concept" | "studio" | "legacy";

export interface CatalogueAlbum {
  title: string;
  category: AlbumCategory;
  kicker: string;
  genre?: string;
  description: string;
  cover?: string;
  href?: string;
  embedUrl?: string;
  completionDate?: string;
  completeBadge?: boolean;
  availableNow?: boolean;
  archived?: boolean;
  note?: string;
}

export const ALBUM_CATALOGUE: CatalogueAlbum[] = [
  // ---- Signature Albums ----
  {
    title: "THE ALBUM — From Me, To...",
    category: "signature",
    kicker: "Album · 2026",
    genre: "Six Trance Ballads",
    description: "Six personal letters transformed into trance. The complete album is available now.",
    availableNow: true,
    href: "/six-trance-ballads",
    embedUrl: "https://open.spotify.com/embed/album/6tXnXiMbG1n9Tt3NnVij3n?utm_source=generator&theme=0",
    cover: "/releases/six-trance-ballads-the-album.png",
  },
  {
    title: "Before I Forget",
    category: "signature",
    kicker: "Album · 2026",
    genre: "Trance / Progressive Trance",
    description: "Eight tracks of progressive trance — a journey through memory, emotion, and release.",
    completionDate: "2026-07-03",
    href: "/before-i-forget",
    embedUrl: "https://open.spotify.com/embed/album/5pRDNwagYj2SS5CgYdhC5a?utm_source=generator&theme=0",
    cover: "/releases/before-i-forget-hero.png",
  },
  {
    title: "Borrowed Sunshine",
    category: "signature",
    kicker: "Album · 2026",
    genre: "Trance / Progressive Trance",
    description: "10 Tracks. 10 Stories. 10 Moments You'll Never Forget.",
    completionDate: "2026-10-09",
    href: "/borrowed-sunshine",
    cover: "/releases/borrowed-sunshine-cover.png",
  },
  {
    title: "Euphoria Needs No Story",
    category: "signature",
    kicker: "Album · 2026",
    genre: "Trance",
    description: "Ten tracks. Four voices. One continuous trance journey — rebirth, memory, silence, distance and temporary immortality before arriving at pure euphoria.",
    completionDate: "2099-01-01",
    href: "/euphoria-needs-no-story",
    cover: "/releases/euphoria-needs-no-story-cover.png",
  },
  {
    title: "No Translation",
    category: "signature",
    kicker: "Album · 2026",
    genre: "Melodic Progressive Tech House",
    description: "Six Languages. One Night. Nothing Needs Explaining.",
    completionDate: "2026-12-04",
    href: "/no-translation",
    cover: "/releases/no-translation-cover.png",
  },

  // ---- Concept Albums ----
  {
    title: "Opus No. 1: Vienna",
    category: "concept",
    kicker: "Album · 2026",
    genre: "Fortepiano · Orchestra · Progressive Trance",
    description: "A continuous work in four movements — fortepiano and orchestra transformed into progressive trance, composed in Vienna.",
    completionDate: "2026-08-22",
    href: "/opus-no-1-vienna",
    cover: "/releases/opus-no-1-vienna-cover.png",
  },
  {
    title: "Do Not Disturb",
    category: "concept",
    kicker: "Album · 2026",
    genre: "Groovy House / Funky Tech House",
    description: "A Concept Album — one unforgettable night, first drink to last confession, told in groovy house and funky tech house.",
    completionDate: "2026-08-23",
    href: "https://soundcloud.com/djandyk_2024/sets/do-not-disturb?si=58acd55f3e454217b5d57763b09a9515&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    cover: "/releases/do-not-disturb-album-cover.png",
  },
  {
    title: "Back to Eurodance",
    category: "concept",
    kicker: "Album · 2027",
    genre: "Authentic 90s Eurodance",
    description: "6 Tracks. 6 Memories. One Return to the Dancefloor.",
    completionDate: "2027-01-03",
    href: "/back-to-eurodance",
    cover: "/releases/back-to-eurodance-cover.png",
  },

  // ---- Studio Albums ----
  {
    title: "When Later Becomes Never",
    category: "studio",
    kicker: "Album · 2026",
    genre: "Progressive House / House",
    description: "A journey through emotion, memory, and release. Eleven tracks, one story.",
    availableNow: true,
    href: "/when-later-becomes-never",
    cover: "/releases/wlbn-album.png",
  },
  {
    title: "Human Stories",
    category: "studio",
    kicker: "Album · 2026",
    genre: "House / Progressive House",
    description: "A house album with emotional depth — four tracks also released in piano versions.",
    completeBadge: true,
    href: "/human-stories",
    cover: "/releases/hs-album.png",
  },

  // ---- Legacy Collection ----
  {
    title: "Deep Connections",
    category: "legacy",
    kicker: "Album · 2026",
    genre: "House / Progressive House",
    description: "Connection is the core. Every track a bridge between two worlds.",
    note: "Recorded 2025 · Released as album 2026",
    availableNow: true,
    href: "/deep-connections",
    cover: "/albums/deep-connections.jpg",
  },
  {
    title: "Four Elements",
    category: "legacy",
    kicker: "Album · 2026",
    genre: "Deep Melodic / Progressive",
    description: "Four tracks. Four feelings. One direction.",
    availableNow: true,
    href: "/four-elements",
    cover: "/albums/four-elements.jpg",
  },
  {
    title: "Music Is Your Passion",
    category: "legacy",
    kicker: "Archived Release",
    description: "Withdrawn and replaced by Euphoria Needs No Story because the original release no longer represented the artistic direction and quality standards of DJ Andy'K.",
    archived: true,
    cover: "/albums/music-is-your-passion.jpg",
  },
];
