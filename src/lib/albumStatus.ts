export function isTrackOut(releaseDate: string): boolean {
  return new Date(releaseDate) <= new Date();
}

export type AlbumStatus = "released" | "in-progress";

export function getAlbumStatus(tracks: { releaseDate: string }[]): AlbumStatus {
  if (tracks.length === 0) return "in-progress";
  const latestReleaseDate = tracks
    .map((t) => t.releaseDate)
    .reduce((latest, d) => (new Date(d) > new Date(latest) ? d : latest));
  return isTrackOut(latestReleaseDate) ? "released" : "in-progress";
}
