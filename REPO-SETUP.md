# GitHub → Cloudflare auto-publish setup

Goal: your site lives in a GitHub repo, and Cloudflare Pages redeploys automatically every time you change it. One-time setup, ~10 minutes, best done on a computer.

The folder is already a git repository with your first commit made — so you're partway there.

---

## Part A — Put the code on GitHub

### Option 1 — From a computer with Git (cleanest)

1. Create a new **empty** repo at https://github.com/new
   - Name it e.g. `dataiseverything`
   - **Private or Public** — either works with Cloudflare
   - **Do NOT** check "Add a README" (this repo already has one)
2. GitHub then shows you a repo URL like `https://github.com/YOURNAME/dataiseverything.git`. In a terminal, inside this folder, run:
   ```bash
   git remote add origin https://github.com/YOURNAME/dataiseverything.git
   git push -u origin main
   ```
   (This folder already has the commit — you're just pushing it up.)

### Option 2 — No command line (GitHub website)

1. Create the repo as above, but **this time DO check "Add a README"** so the repo isn't empty.
2. On the repo page, click **Add file → Upload files**.
3. Drag in **all the files and folders** from this project (index.html, about.html, contact.html, the `assets`, `posts`, and `topics` folders, `_redirects`, etc.). A desktop browser preserves the folder structure; this is hard to do from a phone, so use a computer.
4. Click **Commit changes**.

---

## Part B — Connect Cloudflare Pages

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize GitHub and pick your `dataiseverything` repo.
3. Build settings — **important, keep these exact**:
   - Framework preset: **None**
   - Build command: **(leave blank)**
   - Build output directory: **/**  (a single forward slash — the root)
4. Click **Save and Deploy**. In ~30 seconds you get a live URL like `dataiseverything.pages.dev`. Open it and check everything looks right.

From now on, any change you push to GitHub (or upload via the website) auto-deploys in under a minute.

---

## Part C — Point your domain (dataiseverything.blog)

1. In your Pages project → **Custom domains** → **Set up a custom domain** → enter `dataiseverything.blog`.
2. Cloudflare shows the DNS record(s) to add.
   - If your domain's DNS is already managed at Cloudflare: it's basically one click.
   - If it's at another registrar: copy the CNAME record Cloudflare gives you into that registrar's DNS settings.
3. HTTPS is automatic and free.

**Tip:** confirm the `.pages.dev` preview looks correct *before* pointing the domain, so there's zero downtime. Your old WordPress site can stay up until you flip the domain over.

---

## After it's live — test these

- Submit the contact form once → click the Formspree confirmation email → future submissions hit your inbox.
- Enter an email in the newsletter box → confirm it shows up in your Buttondown subscribers.
- Visit an old link like `dataiseverything.blog/about/` → it should forward to the new About page.

## Editing later

Change any `.html` file, then push (Option 1) or upload the changed file on GitHub (Option 2). Cloudflare redeploys automatically. See `DEPLOY.md` for how to add a new blog post.
