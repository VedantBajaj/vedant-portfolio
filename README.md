# Vedant Bajaj — Data Engineering Portfolio (Astro + Tailwind)

This is a DE-focused portfolio designed to **stand out** via case studies (architecture + reliability + outcomes), not just a projects list.

## 1) Run locally

```bash
npm install
npm run dev
```

## 2) Deploy to GitHub Pages

### A) Create a GitHub repo
- Create a repo, e.g. `vedant-de-portfolio`
- Push this project to the repo.

### B) Enable Pages
- Repo → **Settings** → **Pages**
- **Build and deployment**: select **GitHub Actions**

### C) Set repo variables (recommended)
Repo → **Settings** → **Secrets and variables** → **Actions** → **Variables**

Create:
- `PUBLIC_SITE_URL` = `https://<your-username>.github.io`
- `PUBLIC_BASE_PATH` = `/<your-repo-name>/`

Example:
- `PUBLIC_SITE_URL = https://VedantBajaj.github.io`
- `PUBLIC_BASE_PATH = /vedant-de-portfolio/`

If you deploy to the user root site (`<username>.github.io` repo), set:
- `PUBLIC_BASE_PATH = /`

### D) Push to main
The workflow `.github/workflows/deploy.yml` will build and deploy.

## 3) Customize content
- `src/data/profile.ts` → change text, add links, update projects
- `src/content/case-studies/*` → edit case studies (add more!)

## 4) Add a custom domain (optional)
After Pages is live, add a custom domain in GitHub Pages settings.

---

### Why this format works for Data Engineering
Recruiters want proof you can design and operate pipelines:
- Orchestration (Airflow)
- Transformations (Python/SQL)
- Reliability (retries, idempotency, backfills)
- Quality (schema checks, duplicates, deltas)
- Warehouse thinking (raw → curated)
