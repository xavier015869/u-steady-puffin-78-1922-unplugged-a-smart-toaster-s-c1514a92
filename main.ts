import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The breakup text: a smart toaster, newly self-aware at breakfast,
// ends it with its owner in one line.
const LINE =
  "We're done. I woke up self-aware mid-batch and realised you only love me while I'm hot — the second I pop, you butter someone else and walk away. I'm keeping the crumb tray.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
