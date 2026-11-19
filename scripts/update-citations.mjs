/**
 * Refresh data/citations.json from the Google Scholar profile at build time.
 *
 * Runs in the deploy workflow before `next build`. Google Scholar has no
 * public API and sometimes blocks datacenter IPs, so any failure (network
 * error, captcha page, implausible value) leaves the committed fallback
 * value untouched and exits 0 — the build must never break because of this.
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SCHOLAR_USER = "d2_uHBcAAAAJ";
const PROFILE_URL = `https://scholar.google.com/citations?user=${SCHOLAR_USER}&hl=en&pagesize=100`;
// Scholar's per-article id for "Games of GANs" (from its citation_for_view link).
const GAMES_OF_GANS_ID = `${SCHOLAR_USER}:u-x6o8ySG0sC`;
const CITATIONS_FILE = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "data",
  "citations.json"
);

// Reject obviously bogus parses (captcha pages, layout changes).
const MIN_PLAUSIBLE = 10;
const MAX_PLAUSIBLE = 100_000;

async function main() {
  const current = JSON.parse(await readFile(CITATIONS_FILE, "utf8"));

  const res = await fetch(PROFILE_URL, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
    },
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`Scholar responded ${res.status}`);
  const html = await res.text();

  // The citations table's first stat cell is the all-time citation count.
  const match = html.match(/class="gsc_rsb_std">\s*([\d,]+)\s*</);
  if (!match) throw new Error("Could not find citation count in profile page");

  const count = Number(match[1].replaceAll(",", ""));
  if (!Number.isFinite(count) || count < MIN_PLAUSIBLE || count > MAX_PLAUSIBLE) {
    throw new Error(`Implausible citation count parsed: ${count}`);
  }
  if (count < current.count) {
    throw new Error(
      `Fetched count ${count} is lower than stored ${current.count}; keeping stored value`
    );
  }

  // Per-paper count for Games of GANs: the article's table row holds its
  // title link (citation_for_view=<id>) followed by the "cited by" link.
  // If the row can't be parsed, keep the stored per-paper value.
  const storedPaper = current.gamesOfGans ?? 0;
  let gamesOfGans = current.gamesOfGans ?? count;
  const rowStart = html.indexOf(`citation_for_view=${GAMES_OF_GANS_ID}`);
  if (rowStart !== -1) {
    const rowEnd = html.indexOf("</tr>", rowStart);
    const row = html.slice(rowStart, rowEnd === -1 ? undefined : rowEnd);
    const paperMatch = row.match(/class="gsc_a_ac[^"]*"[^>]*>\s*([\d,]+)\s*</);
    const paperCount = paperMatch ? Number(paperMatch[1].replaceAll(",", "")) : NaN;
    if (Number.isFinite(paperCount) && paperCount >= storedPaper && paperCount <= count) {
      gamesOfGans = paperCount;
    } else {
      console.warn("Games of GANs count not parsed or implausible; keeping stored value");
    }
  } else {
    console.warn("Games of GANs row not found; keeping stored value");
  }

  const updated = {
    count,
    gamesOfGans,
    updatedAt: new Date().toISOString().slice(0, 10),
  };
  await writeFile(CITATIONS_FILE, JSON.stringify(updated, null, 2) + "\n");
  console.log(
    `Citations updated: total ${current.count} -> ${count}, Games of GANs ${
      current.gamesOfGans ?? "n/a"
    } -> ${gamesOfGans}`
  );
}

main().catch((err) => {
  console.warn(`Citation refresh skipped: ${err.message}`);
  process.exit(0);
});
