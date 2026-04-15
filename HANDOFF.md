# Developer Handoff — PYT Games

**Last updated:** 2026-04-13  
**Status:** Active development — Units 1, 3–9 have 8 AP-themed puzzles each; Unit 2 removed (merged into Unit 1); AP Bio / AP Lang coming soon

---

## What this is

PYT Games is a web-based study game where students group 16 vocab terms into 4 categories. Built for AP exam test prep, starting with APUSH. AP Bio and AP Lang are planned next.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
npm run test       # vitest unit tests
npm run lint       # eslint
```

No backend. Fully static. One environment variable used locally for git pushing:

```
GITHUB_TOKEN=your_token   # stored in .env, never committed
```

---

## Architecture

```
src/
  App.tsx                         # Router setup, providers
  data/
    gameSets.ts                   # All game content lives here
  lib/
    progress.ts                   # localStorage helpers for puzzle/unit completion
  components/
    ConnectionsGame.tsx           # Game state machine + UI
    GameTile.tsx                  # Selectable term tile
    SolvedGroup.tsx               # Completed group display
    ui/                           # shadcn/ui primitives (don't edit)
  pages/
    Splash.tsx                    # / — class picker (home page)
    Landing.tsx                   # /apush — unit selector grid with mastery bar
    PuzzlePicker.tsx              # /unit/:unit — puzzle selector per unit
    Index.tsx                     # /unit/:unit/:puzzle — game page
```

**Routing:** React Router v6. Four real routes:

| Path | Page | Purpose |
|------|------|---------|
| `/` | `Splash.tsx` | Home — "Pick Your Class" |
| `/apush` | `Landing.tsx` | APUSH unit grid |
| `/unit/:unit` | `PuzzlePicker.tsx` | Puzzle selector for a unit (auto-skips if only 1 puzzle) |
| `/unit/:unit/:puzzle` | `Index.tsx` | Game for a specific puzzle |

To add a new subject (e.g. AP Bio), add a route in `App.tsx` and a new landing page, then set `active: true` for that subject in `Splash.tsx`.

**State:** All game state is local to `ConnectionsGame` — no global store, no persistence between sessions.

**Styling:** Tailwind CSS with custom design tokens (`game-tile`, `game-tile-selected`, `game-correct`) defined in `tailwind.config.ts`. shadcn/ui handles base components. Color palette is grayscale + Yale Blue (`#0F4D92`) as the sole accent. Fonts: Quicksand (UI) + Playfair Display (hero title).

---

## Game content

All content is in [`src/data/gameSets.ts`](src/data/gameSets.ts) as a typed array of `GameSet` objects.

```ts
interface GameTerm {
  term: string;       // the term displayed on the tile
  definition: string; // shown in the game-over study list
}

interface GameGroup {
  name: string;       // category label shown on solve
  terms: GameTerm[];  // exactly 4 terms
}

interface GameTheme {
  code: string;       // AP theme code, e.g. "NAT"
  name: string;       // full name, e.g. "American and National Identity"
}

interface GameSet {
  id: string;         // unique, e.g. "unit-7-nat"
  unit: number;       // maps to /unit/:unit and landing grid position
  puzzle?: number;    // 1-indexed within a unit; defaults to 1 if omitted
  theme?: GameTheme;  // AP theme metadata; omit for generic numbered puzzles
  title: string;      // e.g. "Civil War & Reconstruction"
  subject: string;    // e.g. "APUSH"
  groups: GameGroup[];  // exactly 4 groups
}
```

The landing page renders a 3-column grid of units 1–9. Any unit number present in `gameSets` is automatically marked active and clickable.

**Progress tracking** lives in `src/lib/progress.ts` and uses two localStorage helpers:
- `pyt-apush-puzzles` — array of `"unit-puzzle"` strings (e.g. `"1-2"`) for individually completed puzzles
- `getCompletedUnits()` — derives which unit numbers have every puzzle finished (used by the mastery bar)

### Current content

| Unit | Title | Puzzles | Format |
|------|-------|---------|--------|
| 1 | Native Peoples, Contact & Colonial America | 8 | AP Themed (NAT–SOC) — covers 1491–1754 |
| 2 | *(Coming Soon — merged into Unit 1)* | — | — |
| 3 | Revolution & Early Republic | 8 | AP Themed (NAT–SOC) |
| 4 | Jacksonian Era & Market Revolution | 8 | AP Themed (NAT–SOC) |
| 5 | Civil War & Reconstruction | 8 | AP Themed (NAT–SOC) |
| 6 | Gilded Age & Progressive Era | 8 | AP Themed (NAT–SOC) |
| 7 | WWI, Roaring 20s & Great Depression | 8 | AP Themed (NAT–SOC) |
| 8 | Cold War & Civil Rights | 8 | AP Themed (NAT–SOC) |
| 9 | Reagan Era to Present | 8 | AP Themed (NAT–SOC) |

**AP Themes** (used in themed units): NAT · WXT · GEO · MIG · PCE · WOR · ARC · SOC

---

## Game rules (implemented)

- 16 terms shuffled on load
- Select exactly 4, then submit
- Correct → group is solved and removed from board
- Wrong → mistake counter increments (max 4)
- "One away!" message when 3 of 4 selected terms are in the same group
- **Hint system:** 2 hints per puzzle; each reveals one unsolved category name
- Win: all 4 groups solved
- Loss: 4 mistakes reached → study list of all 16 terms with definitions (shuffled order)

---

## Known gaps / next steps

- **All units themed** — All active units (1, 3–9) now have 8 AP-themed puzzles; Unit 2 is merged into Unit 1 and shows as Coming Soon
- **AP Bio / AP Lang** subject pages don't exist yet — splash shows them as Coming Soon
- **No shuffle button** — terms are shuffled once on load; players can't reshuffle mid-game
- **No streak/history** — win/loss per session isn't tracked beyond puzzle completion in localStorage
- **Mobile layout** — tile text can overflow on very small screens for long terms
- **No difficulty coloring** — groups have no color-coded difficulty tiers
- **GitHub repo:** github.com/fabiannahickey1-svg/pytgames

---

## How to add content

### Add a new puzzle to an existing unit
1. Open `src/data/gameSets.ts`
2. Add a new `GameSet` object with the correct `unit` number and `puzzle: N` (next in sequence)
3. Each group must have exactly 4 `GameTerm` objects (`term` + `definition`)
4. The puzzle picker page auto-detects and displays new puzzles

### Add a new unit
1. Open `src/data/gameSets.ts`
2. Add a `GameSet` with a new `unit` number (1–9) — the landing page auto-activates it
3. No routing changes needed

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
