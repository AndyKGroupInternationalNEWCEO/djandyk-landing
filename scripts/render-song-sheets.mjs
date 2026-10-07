#!/usr/bin/env node
// Renders every prerendered /song-sheet/{album}/{track} page to
// public/downloads/song-sheets/{album}-{track}.pdf with headless Chrome.
//
// Usage (after `npm run build`, with the app running, e.g. `npx next start -p 3123`):
//   node scripts/render-song-sheets.mjs [baseUrl] [albumSlug]
//
// baseUrl defaults to http://localhost:3123; pass an album slug to render only that album.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const base = process.argv[2] ?? "http://localhost:3123";
const only = process.argv[3];
const CHROME = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const built = ".next/server/app/song-sheet";
const out = "public/downloads/song-sheets";

if (!existsSync(built)) {
  console.error(`No ${built} — run \`npm run build\` first.`);
  process.exit(1);
}
mkdirSync(out, { recursive: true });

for (const album of readdirSync(built, { withFileTypes: true })) {
  if (!album.isDirectory() || (only && album.name !== only)) continue;
  for (const file of readdirSync(join(built, album.name))) {
    if (!file.endsWith(".html")) continue;
    const track = file.replace(/\.html$/, "");
    const pdf = join(out, `${album.name}-${track}.pdf`);
    execFileSync(CHROME, [
      "--headless",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--virtual-time-budget=8000",
      `--print-to-pdf=${pdf}`,
      `${base}/song-sheet/${album.name}/${track}`,
    ], { stdio: "ignore" });
    console.log(`✓ ${pdf}`);
  }
}
