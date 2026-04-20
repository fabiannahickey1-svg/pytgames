# Developer Handoff — PYT Games

**Last updated:** 2026-04-16  
**Status:** Active development — APUSH (Units 1, 3–9, 8 themed puzzles each) + IB Philosophy (20 puzzles across 8 themes) + Environmental Science (all 9 units, 29 puzzles) all live; AP Bio / AP Lang coming soon

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
    gameSets.ts                   # All game content (APUSH + IB Philosophy + Env Science)
  lib/
    progress.ts                   # Per-subject localStorage helpers
  components/
    ConnectionsGame.tsx           # Game state machine + UI
    GameTile.tsx                  # Selectable term tile
    SolvedGroup.tsx               # Completed group display
    ui/                           # shadcn/ui primitives (don't edit)
  pages/
    Splash.tsx                    # / — class picker (home page)
    Landing.tsx                   # /apush — APUSH unit grid with mastery bar
    PhilosophyLanding.tsx         # /philosophy — IB Philosophy theme grid
    EnvSciLanding.tsx             # /envsci — Env Science unit grid with mastery bar
    EnvSciUnitPage.tsx            # /envsci/unit/:unit — subtopic picker (Env Sci only)
    PuzzlePicker.tsx              # puzzle selector (APUSH + Philosophy)
    Index.tsx                     # game page (subject-aware via URL)
```

**Routing:** React Router v6. Subject prefix determines which data is loaded — `PuzzlePicker` and `Index` detect subject from `location.pathname`.

| Path | Page | Purpose |
|------|------|---------|
| `/` | `Splash.tsx` | Home — "Pick Your Class" |
| `/apush` | `Landing.tsx` | APUSH unit grid |
| `/unit/:unit` | `PuzzlePicker.tsx` | APUSH puzzle selector |
| `/unit/:unit/:puzzle` | `Index.tsx` | APUSH game |
| `/philosophy` | `PhilosophyLanding.tsx` | IB Philosophy theme grid |
| `/philosophy/unit/:unit` | `PuzzlePicker.tsx` | Philosophy puzzle selector |
| `/philosophy/unit/:unit/:puzzle` | `Index.tsx` | Philosophy game |
| `/envsci` | `EnvSciLanding.tsx` | Env Science unit grid |
| `/envsci/unit/:unit` | `EnvSciUnitPage.tsx` | Env Sci subtopic picker (3-level nav) |
| `/envsci/unit/:unit/:puzzle` | `Index.tsx` | Env Science game |

**Env Science uses 3-level navigation** (subject → unit → subtopic) unlike APUSH/Philosophy which use 2 levels. `EnvSciUnitPage.tsx` handles the middle level. To add a new subject: create a landing page, add routes in `App.tsx`, activate the card in `Splash.tsx`, add content to `gameSets.ts` with the correct `subject` field.

**State:** All game state is local to `ConnectionsGame` — no global store, no persistence between sessions.

**Progress tracking:** `progress.ts` uses separate localStorage keys per subject (`pyt-apush-puzzles`, `pyt-ib-philosophy-puzzles`, `pyt-env-science-puzzles`). All functions accept an optional `subject` param defaulting to `"APUSH"`.

**Styling:** Tailwind CSS + shadcn/ui. APUSH accent: Yale Blue `#0F4D92`. IB Philosophy accent: purple `#6B3FA0`. Env Science accent: forest green `#2D7A4F`. Fonts: Quicksand (UI) + Playfair Display (hero title).

---

## Game content

All content is in [src/data/gameSets.ts](src/data/gameSets.ts) as a typed array of `GameSet` objects.

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

The APUSH landing page renders a 3-column grid of units 1–9 (Unit 2 hidden — merged into Unit 1). The Philosophy landing page renders a 2-column grid of 8 themes. The Env Science landing page renders a full-width list of 9 units; clicking a unit opens `EnvSciUnitPage` showing subtopic cards.

### APUSH content

| Unit | Title | Puzzles | Format |
|------|-------|---------|--------|
| 1 | Native Peoples, Contact & Colonial America | 8 | AP Themed (NAT–SOC) — covers 1491–1754 |
| 2 | *(merged into Unit 1)* | — | — |
| 3 | Revolution & Early Republic | 8 | AP Themed (NAT–SOC) |
| 4 | Jacksonian Era & Market Revolution | 8 | AP Themed (NAT–SOC) |
| 5 | Civil War & Reconstruction | 8 | AP Themed (NAT–SOC) |
| 6 | Gilded Age & Progressive Era | 8 | AP Themed (NAT–SOC) |
| 7 | WWI, Roaring 20s & Great Depression | 8 | AP Themed (NAT–SOC) |
| 8 | Cold War & Civil Rights | 8 | AP Themed (NAT–SOC) |
| 9 | Reagan Era to Present | 8 | AP Themed (NAT–SOC) |

**AP Themes**: NAT · WXT · GEO · MIG · PCE · WOR · ARC · SOC

### IB Philosophy content

| Unit | Theme | Puzzles |
|------|-------|---------|
| 1 | Being Human (core) | 6 — one per sub-theme: Identity, The Self and the Other, Consciousness, Personhood, Freedom, Human Nature |
| 2 | Epistemology | 1 |
| 3 | Ethics | 1 |
| 4 | Philosophy of Religion | 1 |
| 5 | Philosophy of Science | 1 |
| 6 | Political Philosophy | 1 |
| 7 | Social Philosophy | 1 |
| 8 | Aesthetics | 1 |

### Environmental Science content

For AP & IB Environmental Science. Uses N.X subtopic naming (e.g. 1.1, 1.2).

| Unit | Title | Subtopics | Puzzles |
|------|-------|-----------|---------|
| 1 | Living World: Ecosystems | 1.1–1.5 | 5 |
| 2 | Living World: Biodiversity | 2.1–2.5 | 5 |
| 3 | Populations | 3.1–3.4 | 4 |
| 4 | Earth Systems & Resources | 4.1–4.4 | 4 |
| 5 | Land & Water Use | 5.1–5.3 | 3 |
| 6 | Energy Resources & Consumption | 6.1–6.4 | 4 |
| 7 | Atmospheric Pollution | 7.1–7.3 | 3 |
| 8 | Aquatic & Terrestrial Pollution | 8.1–8.4 | 4 |
| 9 | Global Change | 9.1–9.4 | 4 |

**Total: 36 puzzles, 576 terms** across all 9 units.

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

- **All APUSH units themed** — All active units (1, 3–9) now have 8 AP-themed puzzles; Unit 2 is merged into Unit 1 and shows as Coming Soon
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
