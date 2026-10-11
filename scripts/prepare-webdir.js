// Copies the Curio web app into www/ for Capacitor packaging.
// Run: npm run build:web   (requires Node.js only — no Android SDK needed)
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'www');
const COPY = ['index.html', 'manifest.json', 'sw.js', 'netlify.toml'];

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
for (const f of COPY) fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
copyDir(path.join(ROOT, 'icons'), path.join(OUT, 'icons'));
copyDir(path.join(ROOT, 'assets'), path.join(OUT, 'assets'));
console.log('www/ ready:', fs.readdirSync(OUT).join(', '));
