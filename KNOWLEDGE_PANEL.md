# Earning a Google Knowledge Panel for "Scott Meier"

**The honest version first.** You can't *create* a Knowledge Panel. Google generates one
automatically when its **Knowledge Graph** is confident an entity (you) exists and it has
enough **consistent, corroborating evidence** from sources it trusts. A great website is
**necessary but not sufficient** — the panel also needs independent signals off your site.
This is a multi-week-to-multi-month effort, and it's not guaranteed. The steps below are the
levers that actually move it, in priority order.

---

## ✅ Already done on this site (the on-site half)
- **Person structured data (JSON-LD)** in `index.html` — the single strongest on-site
  signal. Declares name, alternate name, URL, image, employer (Budsies), description,
  `knowsAbout`, and `sameAs` (your profiles).
- **`rel="me"`** link to LinkedIn (identity verification signal).
- Consistent **name + description** in the visible page, `<title>`, meta description, and
  Open Graph — so every reading of the page agrees on who you are.
- A clean, crawlable, fast site that Google can confidently treat as your **official site**.

### On-site half — status
Pulled from your LinkedIn and already set in the JSON-LD: **`jobTitle`** = `"Chief Executive
Officer"`, **`worksFor`** = Budsies + Petsies + Stuffed Animal Pros, **`homeLocation`** =
Puerto Rico, and **`image`** points at your real `assets/headshot.jpg`. One on-site item
remains:
- **`sameAs`** — currently just LinkedIn. Add every authoritative profile URL you have (see
  list below); send them to me and I'll wire them in. One link is weak; 5–8 consistent ones
  is strong.

---

## The off-site half (where the panel is actually won)

### 1. Be ruthlessly consistent (the #1 factor)
Use the **same name, title, employer, and bio** everywhere — site, LinkedIn, Crunchbase,
Budsies' team page, press. Decide now: are you "Scott Meier" or "Scott G. Meier"? Pick one
primary and stick to it. Inconsistency is the most common reason a panel never forms.

### 2. Build/complete authoritative profiles — each linking back to scottmeier.com
Google cross-references these. Create or polish, with a consistent bio + your headshot:
- **LinkedIn** — you have it; make sure the headline/title match the site, and add your
  website to the Contact info.
- **Crunchbase** — a person profile linked to the Budsies organization. High-trust source.
- **Budsies "About/Team" page** — name you, your title, and link to scottmeier.com. An
  official company page naming you is strong corroboration.
- **X/Twitter**, **Instagram**, **About.me**, **Gravatar**, **Wellfound (AngelList)** —
  each with the same bio + a link to your site.
- **Muck Rack** / **Contently** — if you have any press or bylines.

### 3. Create a Wikidata item (the most accessible Knowledge Graph lever)
Wikidata directly feeds Google's Knowledge Graph and is far more permissive than Wikipedia.
At **wikidata.org**, create an item "Scott Meier" with statements:
`instance of → human`, `occupation → entrepreneur/businessperson`, `employer → Budsies`,
`official website → https://scottmeier.com`, `described at URL → your LinkedIn`. Add a
**reference** (source URL) to each statement. Note: items need to be verifiable; cite your
site, LinkedIn, Budsies, and any press. (If it gets flagged for notability, that's a signal
you need step 4 first.)

### 4. Earn independent, third-party mentions
The Graph wants corroboration Google didn't get from you. Pursue a few:
- A **podcast interview** or **founder Q&A** (entrepreneurship / e-commerce / DTC shows).
- A **guest article** or a quote in a trade piece (plush, e-commerce, manufacturing).
- A **conference / panel bio**.
Each independent page that describes you as "Scott Meier, [title] of Budsies" is a strong vote.

### 5. Help Google find and trust the site
- Add scottmeier.com to **Google Search Console**, verify ownership, and submit `sitemap.xml`.
- Make sure scottgmeier.com redirects to it (one canonical entity, not two).

### 6. When a panel appears — claim it
Once a panel shows for your name, search yourself on Google, click **"Claim this knowledge
panel,"** and verify via one of your linked official profiles. Then you can suggest edits.

---

## Realistic expectations
- **Timeline:** weeks to several months after the corroborating signals are in place.
- **Not guaranteed:** entities with thin independent coverage may never get a panel. Steps
  1–3 are the foundation; **step 4 (independent coverage)** is usually the deciding factor.
- **What I can't do for you:** create accounts, publish to third-party sites, or submit to
  Wikidata/Search Console on your behalf — those need your logins. I've built and optimized
  everything on the site itself.

## Your checklist
- [x] Set real `jobTitle` in `index.html` JSON-LD (CEO)
- [ ] Add all profile URLs to `sameAs`
- [x] Add `headshot.jpg` and point `image` at it
- [ ] Make name/title/bio identical across LinkedIn, Crunchbase, Budsies team page
- [ ] Create Crunchbase person profile + Budsies team-page mention
- [ ] Create a Wikidata item with references
- [ ] Line up 1–2 independent mentions (podcast/article/bio)
- [ ] Verify site in Google Search Console + submit sitemap
- [ ] Claim the panel once it appears
