# Developer Handoff — PYT Games

**Last updated:** 2026-04-22  
**Status:** Active development — APUSH (Units 1, 3–9, 8 themed puzzles each) + IB Philosophy (20 puzzles across 8 themes) + Environmental Science (all 9 units, 29 puzzles) + AP World History (Units 7–9, 9 puzzles) + AP Gov (all 5 units, 25 puzzles) + AP Psychology (all 5 units, 15 puzzles) + AP Biology (all 8 units, 20 puzzles) + AP European History (all 9 units, 45 puzzles) all live; AP Lang coming soon

---

## What this is

PYT Games is a web-based study game where students group 16 vocab terms into 4 categories. Built for AP exam test prep. Active subjects: APUSH, IB Philosophy, Environmental Science, AP World History, AP Gov, AP Psychology, AP Biology, AP European History. AP Lang is planned next.

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
    gameSets.ts                   # All game content (APUSH + IB Philosophy + Env Science + AP World + AP Gov + AP Psych + AP Bio + AP Euro)
  lib/
    progress.ts                   # Per-subject localStorage helpers
    analytics.ts                  # GA4 event tracking helper (trackEvent wrapper)
  components/
    ConnectionsGame.tsx           # Game state machine + UI
    GameTile.tsx                  # Selectable term tile
    SolvedGroup.tsx               # Completed group display
    NavMenu.tsx                   # Hamburger menu (fixed top-right, all pages)
    ui/                           # shadcn/ui primitives (don't edit)
  pages/
    Splash.tsx                    # / — class picker (home page)
    Landing.tsx                   # /apush — APUSH unit grid with mastery bar
    PhilosophyLanding.tsx         # /philosophy — IB Philosophy theme grid
    EnvSciLanding.tsx             # /envsci — Env Science unit grid with mastery bar
    EnvSciUnitPage.tsx            # /envsci/unit/:unit — subtopic picker
    APWorldLanding.tsx            # /apworld — AP World History unit grid
    APWorldUnitPage.tsx           # /apworld/unit/:unit — puzzle picker
    APGovLanding.tsx              # /apgov — AP Gov unit grid with mastery bar
    APGovUnitPage.tsx             # /apgov/unit/:unit — Big Idea puzzle picker
    APPsychLanding.tsx            # /appsych — AP Psychology unit grid with mastery bar
    APPsychUnitPage.tsx           # /appsych/unit/:unit — topic puzzle picker
    APBioLanding.tsx              # /apbio — AP Biology unit grid with mastery bar
    APBioUnitPage.tsx             # /apbio/unit/:unit — Big Idea puzzle picker
    APEuroLanding.tsx             # /apeuro — AP European History unit grid with mastery bar
    APEuroUnitPage.tsx            # /apeuro/unit/:unit — theme puzzle picker
    PuzzlePicker.tsx              # puzzle selector (APUSH + Philosophy)
    Index.tsx                     # game page (subject-aware via URL)
    About.tsx                     # /about — team and mission
    Contact.tsx                   # /contact — email + Instagram + TikTok
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
| `/apworld` | `APWorldLanding.tsx` | AP World History unit grid |
| `/apworld/unit/:unit` | `APWorldUnitPage.tsx` | AP World puzzle picker |
| `/apworld/unit/:unit/:puzzle` | `Index.tsx` | AP World game |
| `/apgov` | `APGovLanding.tsx` | AP Gov unit grid |
| `/apgov/unit/:unit` | `APGovUnitPage.tsx` | AP Gov Big Idea puzzle picker |
| `/apgov/unit/:unit/:puzzle` | `Index.tsx` | AP Gov game |
| `/appsych` | `APPsychLanding.tsx` | AP Psychology unit grid |
| `/appsych/unit/:unit` | `APPsychUnitPage.tsx` | AP Psych topic puzzle picker |
| `/appsych/unit/:unit/:puzzle` | `Index.tsx` | AP Psych game |
| `/apbio` | `APBioLanding.tsx` | AP Biology unit grid |
| `/apbio/unit/:unit` | `APBioUnitPage.tsx` | AP Bio Big Idea puzzle picker |
| `/apbio/unit/:unit/:puzzle` | `Index.tsx` | AP Bio game |
| `/apeuro` | `APEuroLanding.tsx` | AP European History unit grid |
| `/apeuro/unit/:unit` | `APEuroUnitPage.tsx` | AP Euro theme puzzle picker |
| `/apeuro/unit/:unit/:puzzle` | `Index.tsx` | AP Euro game |
| `/about` | `About.tsx` | About page |
| `/contact` | `Contact.tsx` | Contact page |

**3-level navigation subjects** (subject → unit → puzzle): Env Science, AP World, AP Gov, AP Psychology, AP Biology, AP Euro. **2-level navigation subjects** (subject → puzzle): APUSH, IB Philosophy. To add a new subject: create a landing page + unit page, add routes in `App.tsx`, activate the card in `Splash.tsx`, add content to `gameSets.ts` with the correct `subject` field, update subject detection in `Index.tsx`.

**State:** All game state is local to `ConnectionsGame` — no global store, no persistence between sessions.

**Progress tracking:** `progress.ts` uses separate localStorage keys per subject (`pyt-apush-puzzles`, `pyt-ib-philosophy-puzzles`, `pyt-env-science-puzzles`). All functions accept an optional `subject` param defaulting to `"APUSH"`.

**Analytics:** GA4 (G-M1MTBZCT7T) via `src/lib/analytics.ts`. Four custom events fire from `ConnectionsGame.tsx`: `puzzle_start`, `group_solved`, `puzzle_complete` (includes `mistakes` + `hints_used`), `puzzle_fail`. All events include `subject`, `unit`, `puzzle`, and `puzzle_id` params.

**Styling:** Tailwind CSS + shadcn/ui. APUSH accent: Yale Blue `#0F4D92`. IB Philosophy accent: purple `#6B3FA0`. Env Science accent: forest green `#2D7A4F`. AP Psych accent: violet `#7C3AED`. AP Biology accent: green `#16A34A`. AP Euro accent: amber `#B45309`. Fonts: Quicksand (UI) + Playfair Display (hero title).

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

### AP Psychology content

5-unit redesigned AP Psychology curriculum (2024–25). 3 puzzles per unit = 15 puzzles, 240 terms total. Subject field: `"AP Psych"`. Accent: violet `#7C3AED`.

| Unit | Title | Puzzles | Topics |
|------|-------|---------|--------|
| 1 | Biological Bases of Behavior | 3 | The Neuron & Neural Firing (1.3) · The Brain (1.4) · Nervous System & Heredity (1.1–1.2) |
| 2 | Cognition | 3 | The Visual System (2.1) · Memory (2.3–2.7) · Thinking & Problem Solving (2.2) |
| 3 | Development and Learning | 3 | Classical Conditioning (3.7) · Operant Conditioning (3.8) · Cognitive & Observational Learning (3.9) |
| 4 | Social Psychology and Personality | 3 | Social Psychology (4.1–4.3) · Personality Theories (4.4–4.5) · Motivation & Emotion (4.6–4.7) |
| 5 | Mental and Physical Health | 3 | Psychological Disorders (5.3–5.4) · Treatment (5.5) · Health & Positive Psychology (5.1–5.2) |

**Note:** Unit data for AP Psych is built in modular const arrays (`apPsychGameSets`, `apPsychUnit2GameSets`, etc.) then assembled with unit/id overrides before being pushed into the main `gameSets` array. Unit 3 puzzles are remapped from the unit-4 source data with theme codes corrected to 3.7–3.9.

### AP Biology content

8-unit AP Biology curriculum. 20 puzzles total organized by 4 Big Ideas. Subject field: `"AP Biology"`. Accent: green `#16A34A`.

**Big Ideas**: ENE (Energetics) · IST (Information Storage & Transmission) · EVO (Evolution) · SYI (Systems Interactions)

| Unit | Title | Puzzles | Big Ideas |
|------|-------|---------|-----------|
| 1 | Chemistry of Life | 3 | ENE · IST · SYI |
| 2 | Cells | 3 | EVO · ENE · SYI |
| 3 | Cellular Energetics | 1 | ENE |
| 4 | Cell Communication and Cell Cycle | 3 | ENE · IST · SYI |
| 5 | Heredity | 3 | EVO · IST · SYI |
| 6 | Gene Expression and Regulation | 1 | IST |
| 7 | Natural Selection | 2 | EVO · SYI |
| 8 | Ecology | 4 | EVO · ENE · IST · SYI |

### AP European History content

9-unit AP European History curriculum. 45 puzzles total organized by 7 AP Euro themes. Subject field: `"AP Euro"`. Accent: amber `#B45309`.

**AP Euro Themes**: INT (Interaction of Europe and the World) · ECD (Economic and Commercial Development) · CID (Cultural and Intellectual Development) · SOP (States and Other Institutions of Power) · SCD (Social Organization and Development) · NEI (National and European Identity) · TSI (Technology, Science, and Innovation)

| Unit | Title | Puzzles | Themes |
|------|-------|---------|--------|
| 1 | Renaissance and Exploration | 6 | INT · ECD · CID · SOP · SCD · NEI |
| 2 | Age of Reformation | 3 | CID · SOP · NEI |
| 3 | Absolutism and Constitutionalism | 3 | ECD · SOP · NEI |
| 4 | Scientific, Philosophical, and Political Developments | 5 | INT · ECD · CID · SOP · TSI |
| 5 | Conflict, Crisis, and Reaction in the Late 18th Century | 5 | INT · ECD · CID · SOP · NEI |
| 6 | Industrialization and Its Effects | 5 | ECD · CID · SOP · SCD · TSI |
| 7 | 19th-Century Perspectives and Political Developments | 5 | INT · ECD · CID · SOP · NEI |
| 8 | 20th-Century Global Conflicts | 6 | INT · ECD · CID · SOP · NEI · TSI |
| 9 | Cold War and Contemporary Europe | 7 | INT · ECD · CID · SOP · SCD · NEI · TSI |

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
- **AP Psych Units 4–5 need more content** — currently 3 puzzles each; developmental psych (3.1–3.6), language (3.5), and intelligence (2.8) aren't yet covered
- **AP Bio Unit 3 and Unit 6** have only 1 puzzle each (ENE and IST respectively) — could expand if more Big Ideas apply
- **AP Lang** subject page doesn't exist yet — splash shows it as Coming Soon
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
