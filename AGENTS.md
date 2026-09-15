# AGENTS.md

## Scope

Public Right Hire marketing website repo:

- `Tools/Products/right-hire-website`

## Read First

1. `CLAUDE.md`
2. `README.md`

(`VERCEL-DEPLOYMENT.md` was archived 2026-09-15 to `archive/completed/` — it was the original May 2026 delivery-package doc, describing a homepage section list and contact info that no longer match the live site. `README.md`'s Build/Deploy section has the current, accurate deploy steps.)

## Current Stack

- React 18
- Vite
- TypeScript entrypoint via `src/main.tsx`
- website composition in `src/app/App.tsx`

## Source of Truth

Use the Vite app as canonical:

- `src/app/App.tsx`
- `src/main.tsx`
- `src/styles/`

Do not assume the legacy root static files are the primary editable source.

## Build / Deploy Rules

- Vercel uses the Vite build
- `npm run build`
- output directory: `dist`
- direct routes require the SPA rewrite in `vercel.json`

## Editing Rules

- prefer updating the Vite app, not the old static root shell
- keep the site aligned with the approved published screenshots
- maintain clean mobile nav and anchor behavior
- preserve lightweight marketing-site performance

