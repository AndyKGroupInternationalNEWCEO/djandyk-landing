/** Public path of a track's downloadable song sheet PDF (see scripts/render-song-sheets.mjs). */
export function songSheetPdfPath(albumSlug: string, trackSlug: string) {
  return `/downloads/song-sheets/${albumSlug}-${trackSlug}.pdf`;
}
