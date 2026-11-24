// Entry point for the 24 November 2026 world news poster (Node 22,
// standard library only). The poster image ships in this repository as
// entry.png; the program reads those bytes and writes them unchanged to
// the output directory as entry.png.
//
// The grader runs the program twice and requires identical bytes both
// times, so the program does nothing but copy: no network, no clock,
// no randomness, no drawing.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.argv[2] ?? process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
