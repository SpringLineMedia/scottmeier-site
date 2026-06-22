// Tiny build step: render template.html using content.json -> dist/index.html,
// then copy the static files. Pure Node, no dependencies.
// Run locally:  node build.mjs
// Cloudflare Pages: build command "node build.mjs", output directory "dist".
import { readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';

process.chdir(import.meta.dirname); // always run relative to this file (the repo root)

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const escJson = (s) => JSON.stringify(String(s)).slice(1, -1);

const content = JSON.parse(await readFile('content.json', 'utf8'));
let html = await readFile('template.html', 'utf8');

const aboutParagraphs = content.about_paragraphs.map((p) => `          <p>${esc(p)}</p>`).join('\n');
const tags = content.tags.map((t) => `            <li>${esc(t)}</li>`).join('\n');

const replacements = {
  '{{name_json}}': escJson(content.name),
  '{{name}}': esc(content.name),
  '{{kicker}}': esc(content.kicker),
  '{{seo_description_json}}': escJson(content.seo_description),
  '{{seo_description}}': esc(content.seo_description),
  '{{hero_lede}}': esc(content.hero_lede),
  '{{hero_sub}}': esc(content.hero_sub),
  '{{about_lede}}': esc(content.about_lede),
  '{{about_paragraphs}}': aboutParagraphs,
  '{{tags}}': tags,
  '{{contact_heading}}': esc(content.contact_heading),
  '{{contact_sub}}': esc(content.contact_sub),
  '{{linkedin_url}}': esc(content.linkedin_url),
};

for (const [key, val] of Object.entries(replacements)) {
  html = html.split(key).join(val);
}

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await writeFile('dist/index.html', html);
for (const f of ['404.html', 'robots.txt', 'sitemap.xml']) {
  await cp(f, `dist/${f}`);
}
await cp('assets', 'dist/assets', { recursive: true });
console.log('Built dist/ (index.html + static assets).');
