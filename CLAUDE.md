# Right Hire Website — Claude Project Memory

## What This Is

This repo is the public Right Hire marketing website.

Repo root:

- `Tools/Products/right-hire-website`

Primary production domains:

- `https://www.myrighthire.com`
- `https://myrighthire.com` → redirects to `https://www.myrighthire.com`

## Current Status (as of May 8, 2026)

- The website was moved off the old static-root deployment path and is now deployed as a **Vite app** from this repo.
- Vercel build settings now use:
  - Framework Preset: `Vite`
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Install Command: `npm install`
- The live source of truth is the React/Vite app, not the old manually maintained static root files.
- Current latest known pushed commit for website policy-page work: `18f3adc`.

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
- `VERCEL-DEPLOYMENT.md` — deployment notes from the website package
- `LATEST-VERSION-README.md` — package/reference note from the delivered design files

## Working Rules

- prefer updating the Vite app, not the old root static shell
- keep the site visually aligned with the approved screenshots, not stale Figma versions
- maintain clean mobile behavior, especially sticky header + anchor-link interactions
- keep the site lightweight and marketing-focused

