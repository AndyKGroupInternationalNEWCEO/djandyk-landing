export const COMPANY = {
  name: "DJ Andy\u2019K",
  realName: "Andrej Kneisl",
  tagline: "Music is your passion.",
  subtitle:
    "Producer of Trance, Progressive House, and EDM.",
  description:
    "DJ Andy\u2019K is a UK-based music producer creating Trance, Progressive House, and EDM that blend emotion, energy, and storytelling.",
  descriptionExtra:
    "Every track is built as a journey \u2014 from the first chord to the final beat, designed to move both body and soul.",
  label: "ANDY\u2019K GROUP INTERNATIONAL LTD",
  basedIn: "United Kingdom",
  genre: "Trance \u00B7 Progressive Trance \u00B7 Groovy House \u00B7 Funky Tech House \u00B7 90s Eurodance",
  email: "ceo@andykgroup.com",
  website: "djandykofficial.com",
  labelWebsite: "https://www.andykgroup.com",
  socials: {
    instagram: "https://www.instagram.com/djandykofficial",
    tiktok: "https://www.tiktok.com/@djandykofficial",
    spotify: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    youtube: "https://www.youtube.com/@djandykofficial",
  },
  hyperfollow: "https://hyperfollow.com/djandyk",
  quote:
    "\u201CI don\u2019t know anymore if music lives for me, or if I live for it. But I accept both.\u201D",
  quoteSubtitle: "\u2014 DJ Andy\u2019K",
};

export const LATEST_RELEASES = [
  {
    title: "Opus No. 1: Vienna",
    type: "New Album · Fortepiano · Orchestra · Trance",
    coverUrl: "/releases/opus-no-1-vienna-cover.png",
    spotifyUrl: "/opus-no-1-vienna",
  },
  {
    title: "THE ALBUM — From Me, To...",
    type: "Six Trance Ballads · New Every Wednesday",
    coverUrl: "/releases/six-trance-ballads-the-album.png",
    spotifyUrl: "/six-trance-ballads",
    weeklyReleases: [
      { date: "2026-06-17", label: "17.6.2026" },
      { date: "2026-06-24", label: "24.6.2026" },
      { date: "2026-07-01", label: "1.7.2026" },
      { date: "2026-07-08", label: "8.7.2026" },
      { date: "2026-07-15", label: "15.7.2026" },
      { date: "2026-07-22", label: "22.7.2026" },
    ],
  },
  {
    title: "Before I Forget",
    type: "New Single \u00b7 Trance",
    coverUrl: "/releases/before-i-forget.png",
    spotifyUrl: "https://open.spotify.com/album/5pRDNwagYj2SS5CgYdhC5a",
  },
  {
    title: "Someone I Used To Be",
    type: "New Release \u00b7 Human Stories",
    coverUrl: "/albums/someone-i-used-to-be.jpg",
    spotifyUrl: "https://open.spotify.com/album/7bwDl4olECxWFhlPqGzKfA",
  },
  {
    title: "When Home Is Nowhere",
    type: "New Release \u00b7 Human Stories",
    coverUrl: "/albums/when-home-is-nowhere.jpg",
    spotifyUrl: "https://open.spotify.com/album/4ksawSjAnCnbVT6xXVRrSZ",
  },
];

export const STREAMING_PLATFORMS = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    icon: "spotify",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/gb/artist/dj-andyk/1835064975",
    icon: "apple",
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/djandykofficial",
    icon: "soundcloud",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@djandykofficial",
    icon: "youtube",
  },
  {
    name: "TIDAL",
    href: "https://tidal.com/browse/artist/65848653",
    icon: "tidal",
  },
  {
    name: "Hyperfollow",
    href: "https://hyperfollow.com/djandyk",
    icon: "hyperfollow",
  },
];

// Sound philosophy pillars — maps to FaqSection ("Crafting the Sound")
export const SERVICES = [
  {
    title: "Progressive House",
    description:
      "Layered builds, melodic drops, and hypnotic progressions that carry listeners through evolving emotional landscapes.",
  },
  {
    title: "Trance",
    description:
      "Euphoric synth lines and driving rhythms that create states of pure immersion and transcendence.",
  },
  {
    title: "Deep Melodic",
    description:
      "Introspective textures and warm harmonics \u2014 music that speaks directly to the subconscious.",
  },
  {
    title: "Cinematic EDM",
    description:
      "Orchestral elements fused with electronic production \u2014 tracks built like film scores for the dancefloor.",
  },
  {
    title: "Emotional Storytelling",
    description:
      "Every release follows a narrative arc. From tension to release, the journey is always intentional.",
  },
  {
    title: "Studio Craft",
    description:
      "From composition to mastering, each detail is considered. Sound design, mix balance, and sonic identity refined to the last millisecond.",
  },
];

// Artist profile — maps to LovedBySection / TestimonialPair
export const FOUNDERS: {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email?: string;
  website?: string;
  websiteLabel?: string;
  bio: string;
  quote?: string;
  location?: string;
}[] = [
  {
    name: "DJ Andy\u2019K",
    role: "Music Producer \u00B7 DJ \u00B7 Artist",
    image: "/photos/artist-main.jpg",
    linkedin: "",
    email: "ceo@andykgroup.com",
    website: "https://djandykofficial.com",
    websiteLabel: "djandykofficial.com",
    bio: "UK-based music producer Andrej Kneisl crafts progressive house, trance, and deep melodic soundscapes under the name DJ Andy\u2019K. With releases spanning albums, EPs, and singles, his music bridges the emotional and the euphoric.",
    quote:
      "\u201CI don\u2019t know anymore if music lives for me, or if I live for it. But I accept both.\u201D",
    location: "United Kingdom",
  },
];

export const STATS = [
  { value: "4", label: "Albums in 2026" },
  { value: "10+", label: "Singles & EPs released" },
  { value: "6", label: "Streaming platforms" },
];

// Featured releases — maps to CaseStudyCards
export const CASE_STUDIES = [
  {
    slug: "when-later-becomes-never",
    titleKey: "whenLater",
    link: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    slug: "human-stories",
    titleKey: "humanStories",
    link: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    slug: "four-elements",
    titleKey: "fourElements",
    link: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
];

// Discography — Albums 2026 (maps to DiscographySection tab 1)
export const ALBUMS_2026 = [
  {
    title: "Euphoria Needs No Story",
    genre: "Trance",
    year: 2026,
    status: "in-progress",
    coverUrl: "/releases/euphoria-needs-no-story-cover.png",
    description: "Ten tracks. Four voices. One continuous trance journey.",
  },
  {
    title: "Back to Eurodance",
    genre: "Authentic 90s Eurodance",
    year: 2027,
    status: "in-progress",
    coverUrl: "/releases/back-to-eurodance-cover.png",
    description: "6 Tracks. 6 Memories. One Return to the Dancefloor.",
  },
  {
    title: "Borrowed Sunshine",
    genre: "Trance / Progressive Trance",
    year: 2026,
    status: "in-progress",
    coverUrl: "/releases/borrowed-sunshine-cover.png",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Do Not Disturb",
    genre: "Groovy House / Funky Tech House",
    year: 2026,
    status: "in-progress",
    coverUrl: "/releases/do-not-disturb-album-cover.png",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Before I Forget",
    genre: "Trance / Progressive Trance",
    year: "2026",
    status: "in-progress",
    coverUrl: "/releases/before-i-forget.png",
    spotifyUrl: "https://open.spotify.com/album/5pRDNwagYj2SS5CgYdhC5a",
    soundcloudUrl: "https://soundcloud.com/djandykofficial",
  },
  {
    title: "When Later Becomes Never",
    genre: "Progressive House / House",
    bpm: "120\u2013124 BPM",
    year: 2026,
    coverUrl: "/albums/when-later-becomes-never.jpg",
    spotifyUrl: "https://open.spotify.com/album/1ezdr7EOZWuLBiw7Rpqis6",
    highlighted: true,
  },
  {
    title: "Human Stories",
    genre: "House / Progressive House",
    year: 2026,
    coverUrl: "/albums/human-stories.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Deep Connections",
    genre: "House / Progressive House",
    year: 2026,
    note: "Recorded 2025 \u00B7 Released as album 2026",
    coverUrl: "/albums/deep-connections.jpg",
    spotifyUrl: "https://open.spotify.com/album/39Zb0euYMqdqg658wqKVGU",
  },
  {
    title: "Four Elements",
    genre: "Deep Melodic / Progressive",
    year: 2026,
    coverUrl: "/albums/four-elements.jpg",
    spotifyUrl: "https://open.spotify.com/album/18OaI45bkpYwJtzL59BoUw",
  },
];

// Discography — EPs & Singles 2026 (maps to DiscographySection tab 2)
export const EPS_SINGLES_2026 = [
  {
    title: "Someone I Used To Be",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/someone-i-used-to-be.jpg",
    spotifyUrl: "https://open.spotify.com/album/7bwDl4olECxWFhlPqGzKfA",
  },
  {
    title: "When Home Is Nowhere",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/when-home-is-nowhere.jpg",
    spotifyUrl: "https://open.spotify.com/album/4ksawSjAnCnbVT6xXVRrSZ",
  },
  {
    title: "Parallel Stories",
    type: "Single",
    year: 2026,
    highlighted: true,
    note: "Latest release \u00B7 April 2026",
    coverUrl: "/albums/paraller-stories.jpg",
    spotifyUrl: "https://open.spotify.com/search/Parallel%20Stories%20DJ%20AndyK",
  },
  {
    title: "Feel My Spirit Wake",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/feel-my-spirit-wake.jpg",
    spotifyUrl: "https://open.spotify.com/search/Feel%20My%20Spirit%20Wake%20DJ%20AndyK",
  },
  {
    title: "Love Will Find Us Once Again",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/love-will-find-us-once-again.jpg",
    spotifyUrl: "https://open.spotify.com/search/Love%20Will%20Find%20Us%20Once%20Again%20DJ%20AndyK",
  },
  {
    title: "Holding On Through All",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/holding-on-through-all.jpg",
    spotifyUrl: "https://open.spotify.com/search/Holding%20On%20Through%20All%20DJ%20AndyK",
  },
  {
    title: "Hiding From It All",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/hiding-from-it-all.jpg",
    spotifyUrl: "https://open.spotify.com/search/Hiding%20From%20It%20All%20DJ%20AndyK",
  },
  {
    title: "Pull Me Through",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/pull-me-through.jpg",
    spotifyUrl: "https://open.spotify.com/search/Pull%20Me%20Through%20DJ%20AndyK",
  },
  {
    title: "Almost",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/almost.jpg",
    spotifyUrl: "https://open.spotify.com/search/Almost%20DJ%20AndyK",
  },
  {
    title: "After Midnight",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/after-midnight.jpg",
    spotifyUrl: "https://open.spotify.com/search/After%20Midnight%20DJ%20AndyK",
  },
  {
    title: "The Last Signal",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/the-last-signal.jpg",
    spotifyUrl: "https://open.spotify.com/search/The%20Last%20Signal%20DJ%20AndyK",
  },
  {
    title: "Between Us",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/between-us.jpg",
    spotifyUrl: "https://open.spotify.com/search/Between%20Us%20DJ%20AndyK",
  },
];

// Discography — Standalone Singles 2025 (maps to DiscographySection tab 4)
export const STANDALONE_SINGLES = [
  {
    title: "Own It",
    type: "Single",
    year: 2025,
    coverUrl: "/albums/own-it.jpg",
    spotifyUrl: "https://open.spotify.com/album/1q7J22EnbE9Iye1hsuES7E",
  },
  {
    title: "Che Rohayhu (Noches de Asuncion)",
    type: "Single",
    year: 2025,
    coverUrl: "/albums/che-rohayhu.jpg",
    spotifyUrl: "https://open.spotify.com/track/5olTrwldhk5e87uUw25gwr",
  },
  {
    title: "Lipstick Lies",
    type: "Single",
    year: 2025,
    coverUrl: "/albums/lipstick-lies.jpg",
    spotifyUrl: "https://open.spotify.com/album/3IIKeyPM7fGnBVizriypqE",
  },
  {
    title: "Plastic Hearts Don't Break",
    type: "Single",
    year: 2025,
    coverUrl: "/albums/plastic-hearts-dont-break.jpg",
    spotifyUrl: "https://open.spotify.com/album/3Vak7mxhOyH8uelBENmJmx",
  },
];

// Discography — Piano Series 2026 (maps to DiscographySection tab 3)
export const PIANO_SERIES_2026 = [
  {
    title: "Human Stories (Piano)",
    year: 2026,
    coverUrl: "/albums/human-stories-piano.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    youtubeUrl: "https://www.youtube.com/embed/UheJ-zGRwj0",
  },
  {
    title: "Letters Never Sent (Piano)",
    year: 2026,
    coverUrl: "/albums/letters-never-sent-piano.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    youtubeUrl: "https://www.youtube.com/embed/TSsDHdT65-Y",
  },
  {
    title: "Only Rivers Know (Piano)",
    year: 2026,
    coverUrl: "/albums/only-rivers-know-piano.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    youtubeUrl: "https://www.youtube.com/embed/qW9JqVoUfTo",
  },
  {
    title: "Running From Yesterday (Piano)",
    year: 2026,
    coverUrl: "/albums/running-from-yesterday-piano.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    youtubeUrl: "https://www.youtube.com/embed/KqJ-rNhN6gE",
  },
];

// Album creation journey — maps to RoadmapSection (AlbumJourney)
export const ADAM_ROADMAP = [
  {
    step: 1,
    title: "Inspiration",
    description:
      "A feeling, a memory, or a moment captured \u2014 the seed of every track starts with something real.",
  },
  {
    step: 2,
    title: "Composition",
    description:
      "Melodies and harmonies take shape. Chord progressions laid down, the emotional arc defined.",
  },
  {
    step: 3,
    title: "Production",
    description:
      "Layers built in the studio \u2014 synths, drums, basslines, textures. The track comes alive.",
  },
  {
    step: 4,
    title: "Mastering",
    description:
      "Final polish and loudness optimised. The track prepared for every streaming platform.",
  },
  {
    step: 5,
    title: "Release",
    description:
      "Published across Spotify, Apple Music, TIDAL, SoundCloud, YouTube and more.",
  },
  {
    step: 6,
    title: "Connection",
    description:
      "The music reaches listeners. The journey completes \u2014 until the next one begins.",
  },
];

export const ADAM_SHOWCASE = ADAM_ROADMAP;

export type TracklistEntry = { num: string; title: string; released?: boolean; comingSoon?: boolean; spotifyUrl?: string; label?: string; isIntro?: boolean; releaseDate?: string };

export const TRACKLISTS: Record<string, TracklistEntry[]> = {
  "Euphoria Needs No Story": [
    { num: "01", title: "Breathe Me Back to Life (feat. Mattew Brexon)", label: "Coming Soon" },
    { num: "02", title: "Alive in the Afterglow (feat. Jullian Recherr)", label: "Coming Soon" },
    { num: "03", title: "Even Silence Sounds Like You (feat. Robert Zigller)", label: "Coming Soon" },
    { num: "04", title: "After You Left (feat. Robert Zigller)", label: "Coming Soon" },
    { num: "05", title: "Temporary Immortals (feat. Thymoty Lorrens)", label: "Coming Soon" },
    { num: "06", title: "The Distance Learned to Dance (feat. Thymoty Lorrens)", label: "Coming Soon" },
    { num: "07", title: "We Were Future Once (feat. Robert Zigller)", label: "Coming Soon" },
    { num: "08", title: "Invisible North (feat. Mattew Brexon)", label: "Coming Soon" },
    { num: "09", title: "I Kept the Storm (feat. Jullian Recherr)", label: "Coming Soon" },
    { num: "10", title: "Euphoria Needs No Story (feat. Mattew Brexon)", label: "Coming Soon" },
  ],
  "No Translation": [
    { num: "01", title: "Don't Look Away (Bana Öyle Bakma) feat. Emir Cem Karahan", releaseDate: "2026-10-30", label: "30.10.2026" },
    { num: "02", title: "No Explanation (Bala Kalam) feat. Rania Al-Masri", releaseDate: "2026-11-06", label: "6.11.2026" },
    { num: "03", title: "Read My Face (Pa Fjalë) feat. Arta Gashi", releaseDate: "2026-11-13", label: "13.11.2026" },
    { num: "04", title: "Read It in My Eyes (Pročitaj Mi u Očima) feat. Luka Vuković", releaseDate: "2026-11-20", label: "20.11.2026" },
    { num: "05", title: "Before Dawn (Преди Зори) feat. Mira Velinova", releaseDate: "2026-11-27", label: "27.11.2026" },
    { num: "06", title: "Under Your Skin (Sub Pielea Ta) feat. Andreea Dumitrescu", releaseDate: "2026-12-04", label: "4.12.2026" },
  ],
  "Back to Eurodance": [
    { num: "01", title: "Stay (feat. Eva & Mark Witman)", releaseDate: "2027-01-03", label: "3.1.2027" },
    { num: "02", title: "Fire Inside (feat. Ritta & J-Jack)", releaseDate: "2027-01-03", label: "3.1.2027" },
    { num: "03", title: "Back To You (feat. Jully Calleb & Spencer Marks)", releaseDate: "2027-01-03", label: "3.1.2027" },
    { num: "04", title: "No Control (feat. Ritta & J-Jack)", releaseDate: "2027-01-03", label: "3.1.2027" },
    { num: "05", title: "Too Late For Goodbye (feat. Nella & J'B Ray)", releaseDate: "2027-01-03", label: "3.1.2027" },
    { num: "06", title: "Feel My Body (feat. Iazabella Marieera & Paollo Rivaninni)", releaseDate: "2027-01-03", label: "3.1.2027" },
  ],
  "Borrowed Sunshine": [
    { num: "01", title: "Too Hot To Go Home (feat. Ben Wheeler)", releaseDate: "2026-08-28", label: "28.8.2026" },
    { num: "02", title: "The Way You Smile", releaseDate: "2026-08-21", label: "21.8.2026" },
    { num: "03", title: "Take It Off Slowly (feat. Nicolas Beech)", releaseDate: "2026-08-14", label: "14.8.2026" },
    { num: "04", title: "Stay A Little Longer (feat. Ben Wheeler)", releaseDate: "2026-08-07", label: "7.8.2026" },
    { num: "05", title: "Borrowed Sunshine", releaseDate: "2026-07-31", label: "Out Now" },
    { num: "06", title: "One More Bad Idea (feat. Mark Lutscher)", releaseDate: "2026-09-04", label: "4.9.2026" },
    { num: "07", title: "We Outran Tomorrow (feat. Max Liem)", releaseDate: "2026-09-11", label: "11.9.2026" },
    { num: "08", title: "Hands All Over Me", releaseDate: "2026-09-18", label: "18.9.2026" },
    { num: "09", title: "Half Past Summer", releaseDate: "2026-09-25", label: "25.9.2026" },
    { num: "10", title: "Nothing Asked To Stay", releaseDate: "2026-10-09", label: "9.10.2026" },
  ],
  "Do Not Disturb": [
    { num: "01", title: "Blame The DJ (feat. Juliana Ritter)", releaseDate: "2026-07-12", label: "Out Now" },
    { num: "02", title: "Put It On My Tab (feat. Adam Rooth)", releaseDate: "2026-07-19", label: "19.7.2026" },
    { num: "03", title: "No Receipts (feat. Adam Rooth)", releaseDate: "2026-07-12", label: "Out Now" },
    { num: "04", title: "Wrong Floor (feat. Lisa Manfled & Adam Rooth)", releaseDate: "2026-08-02", label: "2.8.2026" },
    { num: "05", title: "Late Check-Out (feat. Lisa Manfled)", releaseDate: "2026-08-09", label: "9.8.2026" },
    { num: "06", title: "I Left My Halo At The Bar (feat. Lisa Manfled)", releaseDate: "2026-08-16", label: "16.8.2026" },
    { num: "07", title: "Too Pretty To Explain (feat. Juliana Ritter)", releaseDate: "2026-08-23", label: "23.8.2026" },
  ],
  "THE ALBUM — From Me, To...": [
    { num: "01", title: "I Arrived As Someone Else", releaseDate: "2026-06-12", label: "Out Now" },
    { num: "02", title: "A Letter With No Address", releaseDate: "2026-06-19", label: "24.6.2026" },
    { num: "03", title: "If This Finds You", releaseDate: "2026-06-26", label: "1.7.2026" },
    { num: "04", title: "Whatever You Believe", releaseDate: "2026-07-03", label: "8.7.2026" },
    { num: "05", title: "The Past Still Had My Voice", releaseDate: "2026-07-10", label: "15.7.2026" },
    { num: "06", title: "If Tomorrow Lets Me In", releaseDate: "2026-07-17", label: "22.7.2026" },
  ],
  "Before I Forget": [
    { num: "", title: "Intro", isIntro: true },
    { num: "01", title: "Before I Forget", released: true, label: "Out Now" },
    { num: "02", title: "Sunset Over Us", released: true, label: "Out Now" },
    { num: "03", title: "Letting Go Feels Like Falling", releaseDate: "2026-06-26", label: "26.6.2026" },
    { num: "04", title: "What I Remember", releaseDate: "2026-06-12", label: "12.6.2026" },
    { num: "05", title: "Further Than Forever ft. Aria Noir", released: true, label: "Out Now" },
    { num: "06", title: "Between Me and You", released: true, label: "Out Now" },
    { num: "07", title: "The Door We Found ft. Kaelis", releaseDate: "2026-07-03", label: "3.7.2026" },
    { num: "08", title: "Almost Home ft. Lia Bonson", releaseDate: "2026-06-19", label: "19.6.2026" },
    { num: "", title: "Outro", isIntro: true },
  ],
  "When Later Becomes Never": [
    { num: "01", title: "Intro \u2013 When Later Becomes Never" },
    { num: "02", title: "Before We Knew" },
    { num: "03", title: "Stay For A While" },
    { num: "04", title: "Between Us" },
    { num: "05", title: "When Later Becomes Never" },
    { num: "06", title: "Almost" },
    { num: "07", title: "After Midnight" },
    { num: "08", title: "Hotel Without Words" },
    { num: "09", title: "One More Moment" },
    { num: "10", title: "The Last Signal" },
    { num: "11", title: "Outro \u2013 The Last Signal" },
  ],
  "Human Stories": [
    { num: "01", title: "Human Stories \u2013 Intro", released: true },
    { num: "02", title: "Human Stories (House)", released: true },
    { num: "03", title: "When Home Is Nowhere", released: true, spotifyUrl: "https://open.spotify.com/album/4ksawSjAnCnbVT6xXVRrSZ" },
    { num: "04", title: "Letters Never Sent", released: true },
    { num: "05", title: "Letters Never Sent (Piano)", released: true },
    { num: "06", title: "Running From Yesterday", released: true },
    { num: "07", title: "Running From Yesterday (Piano)", released: true },
    { num: "08", title: "Only Rivers Know", released: true },
    { num: "09", title: "Only Rivers Know (Piano)", released: true },
    { num: "10", title: "Parallel Stories", released: true },
    { num: "11", title: "Someone I Used To Be", released: true, spotifyUrl: "https://open.spotify.com/album/7bwDl4olECxWFhlPqGzKfA" },
    { num: "12", title: "Human Stories (Piano)", released: true },
    { num: "13", title: "Human Stories \u2013 Outro", released: true },
  ],
  "Deep Connections": [
    { num: "01", title: "Deep Connection (Intro)" },
    { num: "02", title: "In My Veins" },
    { num: "03", title: "Game" },
    { num: "04", title: "Perfume" },
    { num: "05", title: "Midnight Drive" },
    { num: "06", title: "Mask" },
    { num: "07", title: "Stone" },
  ],
  "Four Elements": [
    { num: "01", title: "Pull Me Through" },
    { num: "02", title: "Hiding From It All" },
    { num: "03", title: "Holding On Through All" },
    { num: "04", title: "Feel My Spirit Wake" },
  ],
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Albums", href: "#discography" },
  { label: "Contact", href: "#contact" },
];

export const NAV_SERVICES = [
  {
    group: "Latest Release",
    items: [
      {
        label: "Parallel Stories",
        description: "Single \u00B7 April 2026",
        href: "https://hyperfollow.com/djandyk",
      },
      {
        label: "When Later Becomes Never",
        description: "Album \u00B7 Progressive House / House",
        href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
      },
    ],
  },
  {
    group: "Streaming",
    items: [
      {
        label: "Spotify",
        description: "Follow on Spotify",
        href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
      },
      {
        label: "Apple Music",
        description: "Listen on Apple Music",
        href: "https://music.apple.com/gb/artist/dj-andyk/1835064975",
      },
      {
        label: "SoundCloud",
        description: "Follow on SoundCloud",
        href: "https://soundcloud.com/djandykofficial",
      },
      {
        label: "YouTube",
        description: "Subscribe on YouTube",
        href: "https://www.youtube.com/@djandykofficial",
      },
    ],
  },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Music", href: "#music" },
  { label: "Albums", href: "#discography" },
  { label: "Contact", href: "#contact" },
  { label: "Press / EPK", href: "/press" },
  { label: "Copyright", href: "/copyright" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
];
