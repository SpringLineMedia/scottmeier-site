# ScottMeier.com

A fast, single-page personal site with a clean **art-gallery** aesthetic — elegant serif,
warm white, lots of space. Plain HTML/CSS/JS, **no build step, no dependencies**. Open
`index.html` to edit; whatever you see is what ships.

- **Primary domain:** scottmeier.com
- **Secondary:** scottgmeier.com → 301-redirects to scottmeier.com
- **Hosting:** Cloudflare Pages (free) · DNS already on Cloudflare · free HTTPS
- **Net cost:** $0 (both domains already owned)
- **Goal:** earn a Google Knowledge Panel — see [`KNOWLEDGE_PANEL.md`](KNOWLEDGE_PANEL.md)

## Files
| File | What it is |
|------|------------|
| `index.html` | The whole site. CSS + JS inlined — edit text, links, colors, and the structured data here. |
| `404.html` | Friendly "page not found" page. |
| `assets/favicon.svg` | Browser-tab icon (the "SM" monogram). |
| `assets/og-image.png` | Preview image shown when the link is shared (1200×630). |
| `assets/og.html` | Source for `og-image.png` — re-render with headless Chrome if you change it (instructions in the file). |
| `assets/headshot.jpg` | *(optional)* Your photo — see "Add a photo" below. |
| `robots.txt`, `sitemap.xml` | Basic SEO. |
| `KNOWLEDGE_PANEL.md` | Step-by-step plan to earn a Google Knowledge Panel. |

## Edit the content
Open `index.html`. Right after `<main id="main">` there is an **EDIT YOUR COPY HERE** comment marking where the text lives. Change the words between the tags:
- **Hero:** the kicker (`CEO · Budsies, Petsies & Stuffed Animal Pros`), your name (`<h1>`), the serif `lede` line, and the `sub` paragraph.
- **About:** the `lede` sentence, three paragraphs, and the `tags` list.
- **Contact:** the call-to-action line.
- **LinkedIn link:** search for `linkedin.com/in/scottgmeier` to change it (it appears a few times). The site has **no email by design** — LinkedIn is the contact channel.

### Swap the photo
Your photo is already in place (`assets/headshot.jpg`, shown full in a square frame). To
replace it, overwrite `assets/headshot.jpg` with a new image (square crops best) and re-deploy.

### Change colors & fonts
At the top of the `<style>` block in `index.html`, edit the design tokens:
`--paper` (background), `--ink` (text/buttons), `--serif` (display font), `--sans` (body font).
Everything follows them. The look is intentionally near-monochrome; a real photo adds the color.

## Update & republish (changing the site after it's live)
The site is live on Cloudflare. To push a change:
1. **Edit** the text in `index.html` (see "Edit the content" above) and save.
2. **Re-upload to Cloudflare:** dashboard → **Workers & Pages** → the **`scottmeier`** project → **Create deployment** / **Upload version** → drag this folder's files in again (`index.html` at the root) → **Deploy**. The live site updates within seconds.

Easiest of all: just tell Claude what to reword. Claude edits the files; you re-upload this one folder.

## Preview locally
From this folder:
```
python3 -m http.server 8088
```
Then open http://localhost:8088 . (Any static file server works.)

## Deploy — Cloudflare Pages
Both domains are already on Cloudflare DNS, so there's **no registrar/nameserver work.**

1. **Cloudflare dashboard → Workers & Pages → Create → Pages.**
   - Easiest: **"Upload assets"** and drag this whole folder in. (Re-upload to update.)
   - Or connect a Git repo for auto-deploys on push.
2. **Custom domains** (Pages project → Custom domains): add `scottmeier.com` **and**
   `www.scottmeier.com`. Cloudflare adds the DNS records and issues HTTPS automatically.

## Redirect scottgmeier.com → scottmeier.com
On the **scottgmeier.com** zone in Cloudflare:
1. **DNS:** make sure `@` (root) and `www` each have a record that is **Proxied**
   (orange cloud) — e.g. an `A @ 192.0.2.1` placeholder and `CNAME www scottgmeier.com`,
   both proxied. (Traffic must hit Cloudflare's edge for the redirect to fire.)
2. **Rules → Redirect Rules → Create rule:**
   - **When:** Hostname equals `scottgmeier.com` OR `www.scottgmeier.com`
   - **Then:** Static redirect → `https://scottmeier.com` · Status **301** ·
     **Preserve query string** on · **Preserve path suffix / subpath** on
3. Save. Test: visiting `scottgmeier.com/anything` should land on `scottmeier.com/anything`.

## Verify after deploy
- `https://scottmeier.com` loads with a green padlock.
- `https://scottgmeier.com` redirects (301) to `https://scottmeier.com`.
- Share the link in iMessage/Slack and confirm the preview card (og-image) shows.
- Add the site to **Google Search Console** and submit `sitemap.xml` (first step in `KNOWLEDGE_PANEL.md`).
