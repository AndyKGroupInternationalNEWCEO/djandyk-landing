import type { Album } from "@/types/album";
import { beforeIForgetAlbum } from "@/data/before-i-forget-tracks";
import { borrowedSunshineAlbum } from "@/data/borrowed-sunshine-tracks";
import { deepConnectionsAlbum } from "@/data/deep-connections-tracks";
import { euphoriaAlbum } from "@/data/euphoria-tracks";
import { fourElementsAlbum } from "@/data/four-elements-tracks";
import { littleBoyLittleGirlAlbum } from "@/data/little-boy-little-girl-tracks";
import { noTranslationAlbum } from "@/data/no-translation-tracks";
import { silenceForCrazyBitchesAlbum } from "@/data/silence-for-crazy-bitches-tracks";
import { sixTranceBalladsAlbum } from "@/data/six-trance-ballads-tracks";
import { thisIsTranceHearTheCallAlbum } from "@/data/this-is-trance-hear-the-call-tracks";
import { turnTheAttitudeIntoGratitudeAlbum } from "@/data/turn-the-attitude-into-gratitude-tracks";
import { untilTheLightsComeOnAlbum } from "@/data/until-the-lights-come-on-track";
import { wavelengthTracesAlbum } from "@/data/wavelength-traces-tracks";
import { whereTheWorldTurnsGoldAlbum } from "@/data/where-the-world-turns-gold-track";
import { zwischenlandungAlbum } from "@/data/zwischenlandung-tracks";

// Albums that get a downloadable song sheet (PDF) per track — every album
// rendered through <AlbumTracks>. When adding an album, add it here too, then
// run `node scripts/render-song-sheets.mjs` after a build.
export const SONG_SHEET_ALBUMS: Album[] = [
  beforeIForgetAlbum,
  borrowedSunshineAlbum,
  deepConnectionsAlbum,
  euphoriaAlbum,
  fourElementsAlbum,
  littleBoyLittleGirlAlbum,
  noTranslationAlbum,
  silenceForCrazyBitchesAlbum,
  sixTranceBalladsAlbum,
  thisIsTranceHearTheCallAlbum,
  turnTheAttitudeIntoGratitudeAlbum,
  untilTheLightsComeOnAlbum,
  wavelengthTracesAlbum,
  whereTheWorldTurnsGoldAlbum,
  zwischenlandungAlbum,
];
