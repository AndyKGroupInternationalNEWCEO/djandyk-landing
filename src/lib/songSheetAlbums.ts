import type { Album } from "@/types/album";
import { wavelengthTracesAlbum } from "@/data/wavelength-traces-tracks";

// Albums that get a downloadable song sheet (PDF) per track.
// Rolling out album by album — add an album here, pass `songSheets` to its
// <CoverFlow>, then run `node scripts/render-song-sheets.mjs` after a build.
export const SONG_SHEET_ALBUMS: Album[] = [wavelengthTracesAlbum];

