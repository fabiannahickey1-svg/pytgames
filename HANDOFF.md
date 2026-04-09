# Developer Handoff — PYT Games

**Last updated:** 2026-04-08  
**Status:** Active development — Units 5–8 playable, Units 1–4 and 9 pending content

---

## What this is

PYT Games is a web-based study game modeled after the NYT Connections puzzle. Students select 4 terms at a time and try to group all 16 into their correct categories. Built for APUSH (AP US History) test prep.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
npm run test       # vitest unit tests
npm run lint       # eslint
```

No environment variables. No backend. Fully static.

---

## Architecture

```
src/
  App.tsx                         # Router setup, providers
  data/
    gameSets.ts                   # All game content lives here
  components/
    ConnectionsGame.tsx           # Game state machine + UI
    GameTile.tsx                  # Selectable term tile
    SolvedGroup.tsx               # Completed group display
    ui/                           # shadcn/ui primitives (don't edit)
  pages/
    Splash.tsx                    # / — subject picker (home page)
    Landing.tsx                   # /apush — unit selector grid
    Index.tsx                     # /unit/:unit — game page
```

**Routing:** React Router v6. Three real routes:

| Path | Page | Purpose |
|------|------|---------|
| `/` | `Splash.tsx` | Home — "Pick Your Subject" |
| `/apush` | `Landing.tsx` | APUSH unit grid |
| `/unit/:unit` | `Index.tsx` | Game for a specific unit |

To add a new subject (e.g. AP Bio), add a route in `App.tsx` and a new landing page, then set `active: true` for that subject in `Splash.tsx`.

**State:** All game state is local to `ConnectionsGame` — no global store, no persistence between sessions.

**Styling:** Tailwind CSS with custom design tokens (`game-tile`, `game-tile-selected`, `game-correct`) defined in `tailwind.config.ts`. shadcn/ui handles base components.

---

## Game content

All content is in [`src/data/gameSets.ts`](src/data/gameSets.ts) as a typed array of `GameSet` objects.

```ts
interface GameSet {
  id: string;       // unique, e.g. "unit-5"
  unit: number;     // maps to URL /unit/:unit and landing grid position
  title: string;    // e.g. "Civil War & Reconstruction"
  subject: string;  // e.g. "APUSH"
  groups: GameGroup[];  // exactly 4 groups
}

interface GameGroup {
  name: string;     // category label shown on solve
  terms: string[];  // exactly 4 terms
}
```

The landing page renders a 3-column grid of units 1–9. Any unit number present in `gameSets` is automatically marked active and clickable.

### Current content

| Unit | Title | Status |
|------|-------|--------|
| 1 | — | No content yet |
| 2 | — | No content yet |
| 3 | — | No content yet |
| 4 | — | No content yet |
| 5 | Civil War & Reconstruction | Playable |
| 6 | Gilded Age & Progressive Era | Playable |
| 7 | WWI, Roaring 20s & Great Depression | Playable |
| 8 | Cold War & Civil Rights | Playable |
| 9 | — | No content yet |

---

## Game rules (implemented)

- 16 terms shuffled on load
- Select exactly 4, then submit
- Correct → group is solved and removed from board
- Wrong → mistake counter increments (max 4)
- Win: all 4 groups solved
- Loss: 4 mistakes reached

---

## Known gaps / next steps

- **Units 1–4 and 9** need game content added to `gameSets.ts`
- **AP Bio / AP Lang** subject pages don't exist yet — splash shows them as Coming Soon
- **No score tracking** — each game session is stateless; there's no streak, history, or local storage persistence
- **No hint system** — NYT Connections has a "one away" indicator; this doesn't yet
- **No shuffle button** — terms are shuffled once on load; players can't reshuffle
- **Mobile layout** — tile text can overflow on very small screens for long terms; `text-[11px]` is a workaround
- **No difficulty coloring** — NYT uses yellow/green/blue/purple by difficulty; groups here have no color coding

---

## How to add a new unit

1. Open `src/data/gameSets.ts`
2. Add a new object to the `gameSets` array following the existing pattern
3. Use the correct `unit` number (1–9) — the landing page will auto-activate it
4. Each group must have exactly 4 terms

---

## Dependencies worth knowing

| Package | Purpose |
|---------|---------|
| `react-router-dom` | Client-side routing |
| `@tanstack/react-query` | Installed but not yet used for game data |
| `tailwindcss` + shadcn/ui | All styling |
| `lucide-react` | Icons (only ArrowLeft used currently) |
| `vitest` + `@testing-library/react` | Unit testing |
| `@playwright/test` | E2E testing (no tests written yet) |
