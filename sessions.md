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
