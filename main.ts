import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "They queue politely for coffee, then sprint for the last seat like it owes them rent. Charming chaos — 4/5 stars, would visit again after a nap.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR || "/output";
}

const outDir = resolveOutDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
