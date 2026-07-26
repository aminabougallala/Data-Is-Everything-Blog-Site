# Data is Everything

Personal blog of Amin Abou-Gallala — a static site (plain HTML/CSS), no build step, no framework.

Hosted on **Cloudflare Pages**, auto-deploys from this GitHub repo on every push to `main`.

## Structure

- `index.html` — homepage
- `about.html`, `contact.html`
- `posts/` — blog posts
- `topics/` — category pages
- `assets/` — stylesheet, favicon, script
- `_redirects` — forwards old WordPress URLs
- `sitemap.xml`, `robots.txt`, `404.html`

## Cloudflare Pages build settings

- Framework preset: **None**
- Build command: **(leave blank)**
- Build output directory: **/** (root)

Nothing to compile — Cloudflare just serves these files as-is.

## Editing

Open any `.html` file and edit the text directly. Push to `main` and the live site updates automatically. See `DEPLOY.md` for the full guide (adding posts, swapping images, etc.).
