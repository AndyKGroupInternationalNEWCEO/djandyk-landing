// Single source of truth for every album shown on the homepage catalogue.
// Each album has exactly one `category`, so it can only ever render in one
// section — this is what prevents the duplicate-card problem for good.

export type AlbumCategory = "special" | "signature" | "concept" | "studio" | "legacy";

export interface CatalogueAlbum {
  title: string;
  category: AlbumCategory;
  kicker: string;
  genre?: string;
  description: string;
  cover?: string;
  href?: string;
  cta?: string;
  embedUrl?: string;
  completionDate?: string;
  completeBadge?: boolean;
  availableNow?: boolean;
  archived?: boolean;
  note?: string;
}

// Fallback player for albums without their own Spotify album yet.
export const ARTIST_EMBED_URL =
  "https://open.spotify.com/embed/artist/3JhFGt6jRQvnYgvhWMQHUU?utm_source=generator&theme=0";

export const ALBUM_CATALOGUE: CatalogueAlbum[] = [
  // ---- Special Releases & Collaborations ----
  {
    title: "Little Boy & Little Girl",
    category: "special",
    kicker: "Single · 2026",
    genre: "feat. Thymoty Lorrens",
    description: "Two trance songs — Little Boy, Let the Signal In (ADHD) and Little Girl, Breathe Endlessly (Autism).",
    availableNow: true,
    href: "/little-boy-little-girl",
    cta: "Listen Now",
    cover: "/releases/little-boy-little-girl-cover.png",
  },
  {
    title: "Turn the Attitude Into Gratitude",
    category: "special",
    kicker: "Single · 2026",
    genre: "feat. Lia Bonson",
    description: "A modern tech-house record built around attitude, humour and a vocal that never apologises — in three versions: Original Mix, Retro Rock Crossover Mix and Melodic Club Mix.",
    availableNow: true,
    href: "/turn-the-attitude-into-gratitude",
    cta: "Listen Now",
    cover: "/releases/turn-the-attitude-into-gratitude-cover.jpg",
  },
  {
    title: "This Is Trance, Hear the Call",
    category: "special",
    kicker: "Single · 2026",
    genre: "feat. Aria Noir",
    description: "A trance anthem built around one unpolished rehearsal take, in three interpretations — Official Trance, Live Rehearsal Room and Techno Meets Trance.",
    availableNow: true,
    href: "/this-is-trance-hear-the-call",
    cta: "Listen Now",
    cover: "/releases/this-is-trance-hear-the-call-cover.png",
    embedUrl: "https://open.spotify.com/embed/album/3h15cVuRDPKQhhF2Vzvkur?utm_source=generator&theme=0",
  },
  {
    title: "Zwischenlandung",
    category: "special",
    kicker: "Deluxe Edition Single · 2026",
    genre: "feat. Robert Zigller",
    description: "A German-language trance single about a brief airport encounter, in four interpretations — Official, Piano, Progressive Trance and Melodic Techno & Afro Beats.",
    href: "/zwischenlandung",
    cover: "/releases/zwischenlandung-official.png",
    embedUrl: "https://open.spotify.com/embed/album/0kZKVPE4kugZ3Xd7GSO3sr?utm_source=generator&theme=0",
  },
  {
    title: "Until the Lights Come On",
    category: "special",
    kicker: "Single · 2026",
    genre: "ft. Livia Benttner",
    description: "This song has been part of my repertoire for a long time — a track about letting someone close again without asking one night to answer every question.",
    availableNow: true,
    href: "/until-the-lights-come-on",
    cta: "Listen Now",
    cover: "/releases/until-the-lights-come-on.png",
  },
  {
    title: "Where the World Turns Gold",
    category: "special",
    kicker: "Special Release · 2026",
    genre: "ft. Margirt “Ritta” Fellner",
    description: "A special release for my fans — a song about taking the long way, letting tomorrow wait, and finding a moment worth staying in.",
    availableNow: true,
    href: "/where-the-world-turns-gold",
    cta: "Listen Now",
    cover: "/releases/where-the-world-turns-gold.png",
  },

  // ---- Signature Albums ----
  {
    title: "Wavelength Traces",
    category: "signature",
    kicker: "Album · 2027",
    genre: "Trance",
    description: "Some connections fade. Their traces stay.",
    completionDate: "2027-02-20",
    href: "/wavelength-traces",
    cover: "/releases/wavelength-traces-cover.png",
  },
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
    completionDate: "2026-12-18",
    href: "/euphoria-needs-no-story",
    cover: "/releases/euphoria-needs-no-story-cover.png",
  },
  {
    title: "No Translation",
    category: "signature",
    kicker: "Album · 2026",
    genre: "Melodic Progressive Tech House",
    description: "Six Languages. One Night. Nothing Needs Explaining.",
    completionDate: "2026-12-01",
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
    embedUrl: "https://open.spotify.com/embed/album/2WEPktWiqbt7wWzA75MQ7V?utm_source=generator&theme=0",
  },
  {
    title: "Do Not Disturb",
    category: "concept",
    kicker: "Album · 2026",
    genre: "Groovy House / Funky Tech House",
    description: "A Concept Album — one unforgettable night, first drink to last confession, told in groovy house and funky tech house.",
    completionDate: "2026-08-23",
    href: "/do-not-disturb",
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
    embedUrl: "https://open.spotify.com/embed/album/1ezdr7EOZWuLBiw7Rpqis6?utm_source=generator&theme=0",
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
    embedUrl: "https://open.spotify.com/embed/album/6qWISevnIY1Bm4FB8hUhVC?utm_source=generator&theme=0",
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
    embedUrl: "https://open.spotify.com/embed/album/39Zb0euYMqdqg658wqKVGU?utm_source=generator&theme=0",
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
    embedUrl: "https://open.spotify.com/embed/album/18OaI45bkpYwJtzL59BoUw?utm_source=generator&theme=0",
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
