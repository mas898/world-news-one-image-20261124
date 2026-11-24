// Screenshot helper: renders poster/poster.html to entry.png (1024x1024)
// with the Chrome for Testing binary that lives beside the token-radar work.
// Run: node tools/capture.mjs [output-path]
// The old headless mode is used on purpose: the new one crops about 87 px
// off the bottom of a 1024x1024 capture.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..');
const target = resolve(process.argv[2] ?? join(repo, 'entry.png'));
const html = 'file://' + join(repo, 'poster', 'poster.html');

const searchPaths = [
  process.env.CHROME_PATH,
  '/home/hatch/workspace/makefun/token-radar-work/chrome-linux64/chrome',
  join(repo, '..', 'token-radar-work', 'chrome-linux64', 'chrome'),
].filter((p) => p && existsSync(p));

if (searchPaths.length === 0) {
  console.error('Chrome for Testing not found; set CHROME_PATH.');
  process.exit(1);
}

try {
  execFileSync(searchPaths[0], [
    '--headless=old',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    '--window-size=1024,1024',
    `--screenshot=${target}`,
    html,
  ], { stdio: 'inherit' });
  console.log('wrote', target);
} catch (err) {
  console.error('capture failed:', err.message);
  process.exit(1);
}
