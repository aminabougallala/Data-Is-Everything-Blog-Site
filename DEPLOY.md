# Data is Everything — deploy guide

Your WordPress site, rebuilt as a fast, secure **static site**. No server to maintain, no database, no plugins to update. Hosting is free.

Everything is plain HTML/CSS — you can open any file and edit text directly.

---

## What's in this folder

```
index.html                     Homepage
about.html                     About page
contact.html                   Contact page (with form)
posts/                         Your 3 blog posts
topics/                        The 4 topic/category pages
assets/                        Shared stylesheet, favicon, small script
_redirects                     Keeps your OLD WordPress links working (SEO)
sitemap.xml, robots.txt        For search engines
404.html                       Friendly "page not found" page
```

---

## Step 1 — Contact form ✅ DONE

The contact form is already wired to your Formspree endpoint (`https://formspree.io/f/xeeyvaka`) in **contact.html**. Nothing to do.

Note: the form only sends once the site is hosted at a real web address (Step 3). The **first** time the live form is submitted, Formspree emails you a one-time confirmation link — click it, and every submission after that lands in your inbox. Free tier covers 50 submissions/month.

## Step 2 — Newsletter ✅ DONE

Both signup forms (homepage + About) are already wired to your Buttondown account (`https://buttondown.com/api/emails/embed-subscribe/dataiseverything`). Signups register the moment the site is live.

You don't need to design anything to collect subscribers. When you're ready to send an issue, you write it in plain Markdown inside Buttondown — no template building required.

*(If you ever want to remove the newsletter, delete the `<section class="news">...</section>` block from index.html and about.html.)*

---

## Step 3 — Put it online for free (Cloudflare Pages)

**Easiest, no-command option (drag & drop):**

1. Sign up at **https://pages.cloudflare.com** (free).
2. Create a project → choose **"Upload assets"** (direct upload).
3. Drag this entire folder in. Cloudflare gives you a live URL like `dataiseverything.pages.dev` in ~30 seconds.

*(Netlify works identically — https://app.netlify.com/drop — just drag the folder onto the page. Both support the `_redirects` file automatically.)*

## Step 4 — Point your domain (dataiseverything.blog)

1. In Cloudflare Pages → your project → **Custom domains** → add `dataiseverything.blog`.
2. It will tell you which DNS records to set. If your domain's DNS is already at Cloudflare, it's one click. If it's elsewhere (e.g. your current registrar), copy the CNAME/records it shows into your registrar's DNS settings.
3. HTTPS is automatic and free.

**Important:** only switch the domain over *after* you've confirmed the `.pages.dev` preview looks right, so there's zero downtime. Your old WordPress can stay up until you flip DNS.

---

## Adding a new blog post later

1. Copy any file in `posts/` (e.g. `remote-execution.html`) to a new name.
2. Change the title, date, category pill, and body text.
3. Add a matching card to `index.html` (copy an existing `<article class="post">` block) and to the relevant `topics/` page.
4. Re-upload the folder (or connect a GitHub repo to Cloudflare for auto-deploys — optional).

If you'd like, I can set up a Git-based workflow so new posts publish automatically when you save them — just ask.

---

## Notes / things you may want to swap

- **Featured images:** right now each post uses a tasteful colored gradient as its header image. To use real images, drop them in `assets/` and replace the `<div class="art-hero art-...">` block with `<img src="/assets/yourimage.jpg" alt="...">`.
- **LinkedIn link:** the footer/about "LinkedIn" links point to `https://www.linkedin.com/` — replace with your actual profile URL.
- **Book-a-meeting link:** the contact page has a "Schedule directly on my calendar" link with a placeholder `#` — paste your Salesloft/calendar URL there.
- **Comments:** the old WordPress had a comment section. Static sites don't have built-in comments, but a free tool like **Giscus** (GitHub-based) or **Cusdis** can be dropped in if you want them back — ask and I'll wire it up.
