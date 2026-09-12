# Fly Voyages Algérie — Concept Site

Premium, conversion-focused travel website concept for **Fly Voyages Algérie**,
agence de voyages à **Béjaïa** (Rue Frères Tabet, Béjaïa 06000, Algérie — 0550 06 06 20).

> **Status:** client-acquisition DEMO. All offers/destinations are flagged
> `isDemo: true` internally and carry a subtle **Concept** indicator publicly.
> No prices, no availability, no partnerships, no hours are fabricated —
> everything unverified is displayed as *« à confirmer »* or hidden.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm run start -- -H 0.0.0.0 -p 3000
```

No API keys required. The site is fully functional offline except OpenStreetMap
map tiles, which load in the visitor's browser (graceful address fallback if
unavailable).

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (design tokens in `app/globals.css` → `@theme`)
- **Leaflet + OpenStreetMap** for the city-level Béjaïa map
- Fonts bundled via `@fontsource` (Fraunces display serif, Inter, Noto Sans Arabic)
- Imagery: local assets in `public/images` (no external CDNs)
- Leads: structured local store (`lib/leads.ts` → `data/leads.json`, gitignored)

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero + tabbed search (Voyage / Vol / Hôtel / Séjour), featured destinations & offers, why-us, flight/hotel CTA band, inspiration, WhatsApp CTA, location + map |
| `/destinations` | Filterable destination discovery (Europe, Turquie, Moyen-Orient, Afrique) |
| `/destinations/[slug]` | Destination detail: why visit, periods, things to discover, styles, CTAs + related |
| `/offres` | Offer catalogue — always **« Prix sur demande »**, hotels/departure « à confirmer » |
| `/demande` | **Travel request engine** (destination, dates, travelers, type incl. Omra, budget, prefs, contact) → `TRAVEL_REQUEST` lead |
| `/billets` | Flight request form → `FLIGHT_REQUEST` lead (explicitly NOT a booking engine) |
| `/hotels` | Hotel request form → `HOTEL_REQUEST` lead |
| `/contact` | Address, phone, WhatsApp, hours (à confirmer), message form → `CONTACT_REQUEST` lead, map |
| `/a-propos` | Factual positioning, how it works, concept note |

## Lead engine (brief §18–19)

- `POST /api/leads` — validates and stores structured leads
  (`TRAVEL_REQUEST | FLIGHT_REQUEST | HOTEL_REQUEST | OFFER_REQUEST | CONTACT_REQUEST`)
  with name, phone, WhatsApp, destination, dates, travelers, budget, message, meta, createdAt.
- `GET /api/leads` — newest-first list: the hook for a future agency dashboard.
- Swap `lib/leads.ts` for Prisma/SQLite later without touching the UI.

## Configuration (`data/config.ts`)

- `AGENCY` — name, address, phone/WhatsApp, city-level map center
  (exact pin intentionally **not** drawn — coordinates unverified).
- `SOCIALS` — registry; empty = icon hidden (no invented URLs).
- `SERVICES` — switches; `visa`, `carRental`, `transfer` default **off**
  (configurable service modules per brief §13).
- `SITE_URL` — override via `NEXT_PUBLIC_SITE_URL` env (used in metadata/sitemap).

## Internationalisation

- French (default) + Arabic with full **RTL** (logical CSS properties,
  `dir="rtl"`, Noto Sans Arabic, mirrored icons).
- Language switch persisted in the `fv-lang` cookie (`POST /api/lang`),
  server-rendered on first paint.

## SEO

- Local-SEO titles/descriptions per page, Open Graph + Twitter cards,
  `sitemap.xml`, `robots.txt`, semantic HTML, JSON-LD-free LocalBusiness
  metadata via OpenGraph (`Fly Voyages Algérie — Agence de voyages à Béjaïa`).

## Design system

- Palette: **ink** (deep blue-black) / **cream** (warm paper) / **brass** (gold)
  with a restrained **ocean** teal for chips; WhatsApp green reserved for
  WhatsApp actions only.
- Typography: Fraunces (display) + Inter (UI), Noto Sans Arabic for AR.
- Motion: subtle scroll reveals + hover lifts, `prefers-reduced-motion` respected.

## Demo integrity (brief §26–31, §30)

- Every demo offer/destination: `isDemo: true` + subtle **Concept** chip.
- Prices never shown — always **Prix sur demande**.
- Hours: **À confirmer**. No fake reviews, awards, IATA, client counts,
  urgency, countdowns or availability. No lorem ipsum. No broken links.
