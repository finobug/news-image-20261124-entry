// News-image entry for 24 November 2026 (Node 22, standard library only).
//
// The entry image, "The World Today", is a one-page newspaper summing up
// Tuesday 24 November 2026. Lead story: the US puts Megaspeed International
// and six affiliates on its Entity List over alleged diversion of Nvidia AI
// chips to China. Also today: Zelensky's call for four-way talks as soon as
// possible, the Pentagon rebuking Canada over defence shortfalls, NATO's
// warning of a Russian nuclear-armed satellite launch, and 24 dead in an
// Indonesia factory fire.
//
// The program copies the image held in this repository to /output/entry.png.
// A plain file copy is deterministic: every run writes the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
