# Fly Voyages Algérie

Premium, conversion-focused travel website for **Fly Voyages Algérie** —
agence de voyages et de billetterie aérienne à **Béjaïa, Algérie**.

Built as a professional client-facing concept: the agency's future digital
presence, ready to become the official website after approval.

> **Status:** professional demo / concept. All offers and destinations are
> sample content, clearly flagged **Concept** on-screen and `isDemo: true`
> in code. No prices, availability, partnerships, reviews or hours are
> fabricated — unverified details display *« à confirmer »* or are hidden.

## Overview

A local travel agency in Béjaïa turned into a digital sales assistant.
Visitors from Google, social media or word of mouth can:

- discover destinations (Europe, Turkey, Middle East, Africa)
- browse stay formats (**« Prix sur demande »** — never fake prices)
- submit a **travel request** (the primary conversion: a qualified lead)
- request a **flight ticket** or a **hotel**
- reach the agency instantly by **WhatsApp** (contextual pre-filled
  messages), **phone** or the contact form

Every request is stored as a structured lead ready for a future dashboard.

## Features

- Homepage with cinematic hero and tabbed search (Voyage / Vol / Hôtel / Séjour)
- Destination discovery with region filters + rich detail pages
- Travel request engine with validation, success state and WhatsApp follow-up
- Flight & hotel request pages (request flows — not a fake booking engine)
- WhatsApp-first conversion: contextual `wa.me` deep links on every page,
  floating button, sticky mobile CTA bar (WhatsApp / Appeler / Offre)
- Structured lead API (`POST/GET /api/leads`) — CRM-swappable local store
- **French + Arabic with full RTL**, cookie-persisted switch, server-rendered
- City-level Béjaïa map (Leaflet + OpenStreetMap, graceful fallback)
- Local SEO: per-page titles/descriptions, Open Graph, Twitter cards,
  `sitemap.xml`, `robots.txt`, semantic HTML, accessible forms
- Configurable registries: social links and services (visa, transfers…)
  stay hidden until the agency confirms them — one toggle in `data/config.ts`
- Premium visual identity: ink/cream/brass palette, Fraunces + Inter +
  Noto Sans Arabic, local imagery, subtle motion (reduced-motion aware)

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router, RSC) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first theme tokens) |
| Database | None required — structured local lead store (swap for Prisma/SQLite) |
| Maps | Leaflet + OpenStreetMap (tiles load in the visitor's browser) |
| Fonts | `@fontsource` (bundled, no runtime CDN) |
| Images | Local assets in `public/images` (no external CDNs) |
| Deployment | Any Node host; zero API keys required |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build
npm run start -- -H 0.0.0.0 -p 3000
```

Typecheck: `npm run typecheck`.

## Environment Variables

No secrets are required — the site works out of the box without API keys.
See [.env.example](.env.example):

```bash
NEXT_PUBLIC_SITE_URL=   # your real domain, for OG/sitemap/robots URLs
```

Set it when deploying to a real domain (e.g. `https://www.flyvoyages.dz`).

## Demo

- **Live:** https://3000-ifgawp5sl1cg1l92gizz6.e2b.app (demo server)
- **This repository:** https://github.com/habibo-dev/fly-voyage
- One-click Vercel deploy (recommended for a permanent client-facing URL):
  [vercel.com/new](https://vercel.com/new) → import `habibo-dev/fly-voyage`
  → branch `main` or `arena/01a09620-fly-voyage` → **Deploy** (no env vars
  needed, or set `NEXT_PUBLIC_SITE_URL`).

## Project Structure

```
app/            # routes: pages, API (/api/leads, /api/lang), sitemap, robots
  demandes/     # travel request engine        /billets  # flight requests
  hotels/       # hotel requests               /offres   # offer catalogue
  destinations/ # listing + [slug] details
components/     # UI: header, footer, cards, forms, map, WhatsApp, mobile CTA
data/           # agency config + demo content (destinations, offers)
lib/            # i18n dictionaries (FR/AR), lead store, WhatsApp helpers
public/images/  # local imagery (photos + vector art)
```

## Integrity

- No API keys, tokens or credentials in the repository (audited)
- `.gitignore` excludes all `.env*` variants; `.env.example` holds placeholders only
- No private client information beyond the agency's own public business
  details (name, address, phone — already public on Google)
- No fake offers, reviews, certifications, urgency or availability
