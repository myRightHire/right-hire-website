# Right Hire Website — Claude Project Memory

## What This Is

This repo is the public Right Hire marketing website.

Repo root:

- `Tools/Products/right-hire-website`

Primary production domains:

- `https://www.myrighthire.com`
- `https://myrighthire.com` → redirects to `https://www.myrighthire.com`

## Current Status (as of 2026-09-15)

- The website was moved off the old static-root deployment path and is now deployed as a **Vite app** from this repo.
- Vercel build settings now use:
  - Framework Preset: `Vite`
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Install Command: `npm install`
- The live source of truth is the React/Vite app, not the old manually maintained static root files.
- Latest **pushed** commit as of this writing: `c7f6fd7` ("Open Roles: show only Field Manager and Compliance & Safety Specialist") on `main`, remote `https://github.com/myRightHire/right-hire-website.git`.
- `vercel.json` is required so direct visits to `/privacy` and `/terms` route back through the SPA instead of returning Vercel 404s.

**Important — working tree is ahead of the last commit, mid-redesign, as of 2026-09-15:** `src/app/App.tsx`, `index.html`, `Header.tsx`, and `Footer.tsx` all have uncommitted local changes (`git status`), and the live file on disk is a substantially different "v2" homepage structure than either the last commit or anything described below — sections are now `v2-hero` / `v2-proof` (a recent-engagement metrics strip) / Engagement Models / Who This Is For / Difference / How We Work / About the Founder (Chris Dempsey) / Contact. The Open Roles section and the Meridian/Vector product-showcase section (both real, committed features per git log) are **not present in the current uncommitted file** — whether that's an intentional cut or a work-in-progress state, don't assume either without asking, and don't treat this doc's older "Recent Website Work" list below as an accurate description of what's live today. New stylesheet in use: `src/styles/website-v2.css` (imported in `main.tsx` alongside `fonts.css`/`globals.css`) — the root-level `styles.css` etc. remain genuinely unused legacy, confirmed by checking `main.tsx`'s imports directly.

## Canonical Source of Truth

Use these files first:

- `src/app/App.tsx`
- `src/main.tsx`
- `src/styles/`

Do not assume the root static files are the primary editable source anymore.

Legacy root files still exist and may be stale or reference-only:

- `styles.css`
- `fonts.css`
- `script.js`
- `App.tsx.txt`
- `styles-1.css`
- `theme.css`

Treat those carefully unless there is an explicit reason to keep the old static path in sync.

## Recent Website Work

### Deployment / Infrastructure

- switched the website to Vite-based Vercel deployment
- confirmed production domain setup in Vercel
- `www.myrighthire.com` is the primary public site
- apex `myrighthire.com` redirects to `www.myrighthire.com`

### UX / Content

- header/logo/nav refined toward the approved published look
- mobile menu made functional in the Vite app
- hero copy spacing and CTA placement adjusted
- contact email updated to alias `c@myrighthire.com`

### Legal / Trust

- added real `/privacy` and `/terms` pages in the Vite app
- those pages are intended to support Microsoft Entra custom-branding footer links and general website legitimacy

## Files to Know

- `src/app/App.tsx` — current page composition, sections, CTAs, hero, footer, policy routes
- `vercel.json` — SPA rewrite for direct route support on Vercel
- `README.md` — current build/deploy steps (canonical; supersedes the archived deployment doc below)
- `archive/completed/VERCEL-DEPLOYMENT.md` — archived 2026-09-15; original May 2026 delivery-package doc. Its homepage section list, brand-color values, and contact info (`chris.dempsey@myrighthire.com` / 443-255-5856) are all superseded — the live site's public contact link is `c@myrighthire.com`, not `chris.dempsey@`. Historical only.
- `archive/completed/LATEST-VERSION-README.md` — package/reference note from the delivered design files (archived, historical only — predates the current Vite deployment)

## Working Rules

- prefer updating the Vite app, not the old root static shell
- keep the site visually aligned with the approved screenshots, not stale Figma versions
- maintain clean mobile behavior, especially sticky header + anchor-link interactions
- keep the site lightweight and marketing-focused
