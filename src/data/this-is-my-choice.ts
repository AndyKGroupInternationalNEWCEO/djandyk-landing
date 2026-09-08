// "This Is My Choice" — single source of truth for the competition's
// dates, entry rules, prize and media assets. Edit this file only —
// the page and rules text both read from here.

export const COMPETITION = {
  slug: "this-is-my-choice",
  title: "This Is My Choice",
  presentedBy: "Andy'K Music Lab",
  byLine: "by DJ Andy'K",
  hashtag: "#ThisIsMyChoiceByDJAndyK",
  instagram: {
    artist: { handle: "@djandykofficial", url: "https://www.instagram.com/djandykofficial" },
    lab: { handle: "@andykmusiclab", url: "https://www.instagram.com/andykmusiclab/" },
  },
  // All times are wall-clock Europe/Vienna (CEST for the whole window —
  // DST doesn't end until 2026-10-25). Matches the times already set in
  // the prior draft on the Lab site.
  dates: {
    timezone: "Europe/Vienna",
    startsAt: "2026-09-09T00:00:00+02:00",
    closesAt: "2026-10-09T18:00:00+02:00",
    winnersAnnouncedAt: "2026-10-09T21:00:00+02:00",
    startsLabel: "09.09.2026",
    closesLabel: "09.10.2026",
    winnersAnnouncedLabel: "09.10.2026",
  },
  winnerCount: 5,
  steps: [
    {
      n: "01",
      title: "Choose a track",
      description: "Choose any official song by DJ Andy'K.",
    },
    {
      n: "02",
      title: "Post a 20-second Reel",
      description: "Create and publish a 20-second Instagram Reel using the selected track.",
    },
    {
      n: "03",
      title: "Follow both accounts",
      description: "Follow @djandykofficial and @andykmusiclab on Instagram.",
    },
    {
      n: "04",
      title: "Tag both accounts",
      description: "Tag both accounts directly inside the published Reel.",
    },
    {
      n: "05",
      title: "Comment the hashtag",
      description: "Comment under the official competition post using #ThisIsMyChoiceByDJAndyK.",
    },
  ],
  eligibilityNote:
    "Your Instagram account and Reel must remain public until the winners are announced.",
  prohibited: [
    "Purchased likes",
    "Bots",
    "Fake accounts",
    "Engagement manipulation",
    "Paid promotion or boosted competition Reels",
    "Private or deleted Reels",
    "Entries that do not follow and tag both accounts",
    "Entries without the official hashtag comment",
  ],
  prize: {
    headline: "Lifetime Unlimited Access",
    subheadline: "+ 3 exclusive features",
    bullets: [
      "Lifetime Unlimited Access to Andy'K Music Lab",
      "Access to all tools included in the unlimited plan",
      "Priority access to future Lab tools",
      "Three exclusive feature requests of your own choice",
      "Founding Lab Ambassador status",
    ],
    lifetimeNote:
      "“Lifetime Access” means access for the operational lifetime of Andy'K Music Lab.",
    nonTransferableNote:
      "The prize is personal, non-transferable, cannot be resold and cannot be exchanged for cash.",
    featureRequestNote:
      "Feature requests must be technically possible, legal, safe and reasonably connected to Andy'K Music Lab.",
  },
  labUrl: "https://lab.djandykofficial.com",
  officialSiteUrl: "https://www.djandykofficial.com/this-is-my-choice",
} as const;

export const COMPETITION_MEDIA = [
  // main-flyer, dates-flyer, how-to-enter-flyer, story, reel-cover and
  // square were shown as real assets for a while but were actually
  // unrendered "REPLACE THIS FILE" placeholder stubs — src is null until
  // real static artwork is supplied. Animated video versions of the
  // Dates, How-To-Enter and Prize flyers exist — see COMPETITION_VIDEOS.
  { key: "main-flyer", label: "Main Competition Flyer", format: "4:5", src: null },
  { key: "dates-flyer", label: "Official Dates Flyer", format: "4:5", src: null },
  { key: "how-to-enter-flyer", label: "How To Enter Flyer", format: "4:5", src: null },
  { key: "prize-flyer", label: "Prize Flyer", format: "4:5", src: "/this-is-my-choice/prize-flyer-4x5.png" },
  { key: "story", label: "Instagram Story Artwork", format: "9:16", src: null },
  { key: "reel-cover", label: "Instagram Reel Cover", format: "9:16", src: null },
  { key: "square", label: "1:1 Square Artwork", format: "1:1", src: null },
  { key: "reel-video", label: "9:16 Reel Video", format: "9:16", src: null },
] as const;

export const COMPETITION_VIDEOS = [
  { key: "how-to-enter-video", label: "How To Enter — Video", src: "/this-is-my-choice/how-to-enter-video-4x5.mp4" },
  { key: "dates-video", label: "Official Dates — Video", src: "/this-is-my-choice/dates-video-4x5.mp4" },
  { key: "prize-video", label: "Prize — Video", src: "/this-is-my-choice/prize-video-4x5.mp4" },
] as const;

export const COMPETITION_AUDIO = [
  { key: "radio-jingle", label: "Radio Jingle", src: "/this-is-my-choice/radio-jingle.mp3" },
  { key: "competition-track-1", label: "Competition Music — Track 1", src: "/this-is-my-choice/competition-track-01.wav" },
  { key: "competition-track-2", label: "Competition Music — Track 2", src: "/this-is-my-choice/competition-track-02.wav" },
] as const;
