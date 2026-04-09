# PYT Games

A Connections-style study game for APUSH (AP US History). Players group 16 terms into 4 categories of 4, with up to 4 mistakes allowed. Built to make test prep fun.

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui** (Radix primitives)
- **React Router v6** for navigation
- **Vitest** for unit tests, **Playwright** for e2e

## Project structure

```
src/
  data/gameSets.ts          # All game content — the only file to edit for new units
  components/
    ConnectionsGame.tsx     # Core game logic and UI
    GameTile.tsx            # Individual selectable term tile
    SolvedGroup.tsx         # Displays a completed group
  pages/
    Landing.tsx             # Unit selector grid (/ route)
    Index.tsx               # Game page (/unit/:unit route)
```

## Adding a new unit

Edit `src/data/gameSets.ts` — add a new `GameSet` object to the `gameSets` array:

```ts
{
  id: "unit-N",
  unit: N,
  title: "Unit Title",
  subject: "APUSH",
  groups: [
    { name: "Category Name", terms: ["term1", "term2", "term3", "term4"] },
    // 3 more groups...
  ],
}
```

Each group needs exactly 4 terms. The landing page auto-detects which unit numbers are active.

The landing page shows units 1–9; units without a corresponding `GameSet` show as "Coming Soon."

## Game rules

- 16 terms, 4 groups of 4
- Select 4 terms and submit — correct = group solved, wrong = mistake
- Max 4 mistakes before game over
- Terms are shuffled on load

## Dev commands

```bash
npm run dev        # start dev server
npm run build      # production build
npm run test       # run vitest tests
npm run lint       # eslint
```
