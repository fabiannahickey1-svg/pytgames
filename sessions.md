# Sessions

## 2026-04-08 — Session 1

- Scaffolded project from vite_react_shadcn_ts template
- Set up NYT Connections-style design system (Tailwind + shadcn/ui)
- Built core game components: `ConnectionsGame`, `GameTile`, `SolvedGroup`
- Added landing page with unit selector grid
- Added game data for Units 5–7 (APUSH: Civil War, Gilded Age, WWI/Progressive Era)
- Units 8–9 show as "Coming Soon"

## 2026-04-08 — Session 2

- Added splash/home page (`Splash.tsx`) at `/` with subject picker
  - APUSH active, AP Bio and AP Lang listed as Coming Soon
- Moved unit selector grid to `/apush` (`Landing.tsx`)
- Updated routing: `/` → Splash, `/apush` → Landing, `/unit/:unit` → Game
- Updated all back navigation to respect the new route hierarchy
- Created `CLAUDE.md`, `sessions.md`, and `HANDOFF.md` project docs
- Installed `ui-ux-pro-max` globally to `~/.claude/skills/ui-ux-pro-max/`

## 2026-04-08 — Session 3

- Added content for all Units 1–9 (APUSH)
- Added win state: "Next Unit →" and "All Units" buttons
- Added lose state: full color-coded answer key reveal + "Try Again" / "All Units"
- Added mastery bar on APUSH landing page (level system: Rookie → Master, progress bar, localStorage persistence)
- Completed unit tiles show teal checkmark and highlight
- Overhauled splash page: Apple-style centered header, logo mark, about box, how to play, subject cards as squares, social handles
- Removed all emojis from UI for cleaner look
- Rewrote color palette to grayscale + Yale Blue (#0F4D92) as sole accent
- Added Playfair Display serif font for hero title
- Set up `.env` for GitHub token storage, added `.env` to `.gitignore`
- Pushed to GitHub: github.com/fabiannahickey1-svg/pytgames

**Next:** AP Bio / AP Lang subject pages, shuffle button, hint system, mobile polish

## 2026-04-09 — Session 4

- Refactored `GameGroup.terms` from `string[]` to `GameTerm[]` (`term` + `definition`) across all 9 units
- Game-over screen now shows all 16 vocab terms with definitions as a study list instead of the grouped answer key
- Removed mid-game definition panel (was showing definitions on each wrong guess); study feedback now only appears at game over
- Added "One away!" message when 3 of 4 selected terms belong to the same unsolved group
- Added Puzzle 2 for all 9 APUSH units (144 new terms, 36 new categories)
- Added `PuzzlePicker.tsx` page at `/unit/:unit` — shows selectable puzzle cards, auto-skips if only 1 puzzle exists
- Completed puzzle cards turn Yale Blue with a checkmark; unit marked complete on the mastery bar only after all puzzles are done
- Added `src/lib/progress.ts` to centralize localStorage read/write for puzzle and unit completion
- Routing updated: `/unit/:unit` → PuzzlePicker, `/unit/:unit/:puzzle` → game
- Changed "Pick Your Subject" → "Pick Your Class" on splash page

**Next:** AP Bio / AP Lang subject pages, shuffle button, mobile polish

## 2026-04-13 — Session 5

- Added hint system to `ConnectionsGame.tsx`: 2 hints per puzzle, each reveals one unsolved category name; button shows hints remaining and disables when exhausted
- Game-over study list now shuffles term order so the answer groupings aren't visible from position
- Converted Units 3, 4, 5, 6, and 9 from 2 generic puzzles to 8 AP-themed puzzles each (NAT → SOC), covering all AP History themes
- Key terms intentionally repeated across themed puzzles within a unit when central to multiple themes (e.g., Manifest Destiny in Unit 4 appears in NAT, GEO, MIG, WOR)
- Merged Unit 2 (Colonial America) into Unit 1 — rewrote all 8 Unit 1 puzzles to blend pre-contact Native / exploration content (1491–1607) with colonial America content (1607–1754) under each AP theme; Unit 2 now shows as Coming Soon
- Unit 1 title updated to "Native Peoples, Contact & Colonial America"
- All 9 active APUSH units (1, 3–9) now have 8 AP-themed puzzles — 64 puzzles, 1024 terms total

**Next:** AP Bio / AP Lang subject pages; shuffle button; mobile polish; difficulty coloring

## 2026-04-15 — Session 6

- Unit 1 landing card updated: big label now reads "1 & 2"; sublabel reads "Units 1 & 2"
- Unit 2 button removed from the landing grid entirely (content is in Unit 1)
- Attempted content audit to reduce from 1024 → ~512 terms (4 puzzles/unit instead of 8); not yet completed

**Next:** Complete content audit and reduce to 4 focused puzzles per unit; AP Bio / AP Lang subject pages; shuffle button; mobile polish
