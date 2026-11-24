// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes the entry line to entry.txt in the output directory.
// Output directory resolution: MAKEFUN_OUTPUT_DIR env var first,
// then the --output command-line flag, then /output as the default.
// The program is deterministic: the same single line, byte for byte,
// on every run, with no input read and no network access.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smoke alarm only ever goes off when I cook, so I now treat takeout as a fire-safety measure.";

function resolveOutputDir(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) {
    return process.env.MAKEFUN_OUTPUT_DIR;
  }
  const flagIndex = process.argv.indexOf("--output");
  if (flagIndex !== -1 && process.argv[flagIndex + 1]) {
    return process.argv[flagIndex + 1];
  }
  return "/output";
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
