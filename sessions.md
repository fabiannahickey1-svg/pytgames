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

## 2026-04-16 — Session 7

- Added IB Philosophy as a fully active subject with purple accent (#6B3FA0)
- Unit 1 (Being Human / core theme): 6 puzzles, one per sub-theme — Identity, The Self and the Other, Consciousness, Personhood, Freedom, Human Nature; each puzzle uses the theme code system (e.g. IDENTITY, OTHER, CONSCIOUSNESS)
- Units 2–8: 1 puzzle each — Epistemology, Ethics, Philosophy of Religion, Philosophy of Science, Political Philosophy, Social Philosophy, Aesthetics
- New `PhilosophyLanding.tsx` at `/philosophy` — 2-column theme grid, mastery levels (Curious → Inquirer → Dialectician → Logician → Sophist → Philosopher)
- `PuzzlePicker.tsx` and `Index.tsx` made subject-aware via URL path detection (`/philosophy` prefix)
- `progress.ts` updated with per-subject localStorage keys (`pyt-ib-philosophy-puzzles` vs `pyt-apush-puzzles`)
- `getGamesByUnit` updated to accept optional subject param — prevents unit number collisions between subjects
- IB Phil card activated on the splash page (3rd slot, previously AP Bio Coming Soon)
- App.tsx: added `/philosophy`, `/philosophy/unit/:unit`, `/philosophy/unit/:unit/:puzzle` routes

**Next:** AP Bio / AP Lang subject pages; shuffle button; mobile polish; APUSH content audit

## 2026-04-20 — Session 9

- Added AP Psychology as a fully active subject with violet accent (#7C3AED)
- 5-unit structure matching the redesigned AP Psych curriculum (College Board 2024–25): Biological Bases of Behavior, Cognition, Development and Learning, Social Psychology and Personality, Mental and Physical Health
- 3 puzzles per unit = 15 puzzles total, 240 terms with definitions
- New `APPsychLanding.tsx` at `/appsych` — mastery levels Observer → Researcher → Analyst → Therapist → Psychologist → AP Scholar
- New `APPsychUnitPage.tsx` at `/appsych/unit/:unit` — topic puzzle picker showing theme codes (e.g. 1.3, 2.1–2.7)
- `Index.tsx` updated to detect `/appsych` prefix; AP Psych card added to Splash (6th subject, "5 Units →")
- Data architecture: modular const arrays per unit assembled with spread overrides into main `gameSets` — unit 3 puzzles remapped from unit-4 source data with theme codes corrected to 3.7–3.9
- Added GA4 custom events via `src/lib/analytics.ts`: `puzzle_start`, `group_solved`, `puzzle_complete` (with mistakes + hints_used), `puzzle_fail` — all fire from `ConnectionsGame.tsx` with subject/unit/puzzle context
- Added global `NavMenu.tsx` component — hamburger (≡) fixed top-right on every page, opens dropdown with Home / About Us / Contact links; closes on outside click and route change
- Added `/about` page (`About.tsx`) — mission statement, team bios for Fabianna Hickey and Lily Grodin, goal card
- Added `/contact` page (`Contact.tsx`) — cards for email (pytgames2026@gmail.com), Instagram (@PYTGames), TikTok (@pyt.games)

**Next:** Developmental psych content for Unit 3 (3.1–3.6); language/intelligence puzzles for Unit 2; AP Bio / AP Lang subject pages

## 2026-04-19 — Session 8

- Completed AP World History (Units 7–9) — 9 puzzles total, 3 per unit using GOV/CDI/SIO+ECN themes covering Global Conflict, Cold War & Decolonization, and Globalization
- Added AP Government & Politics as a fully active subject with dark teal accent (#0D5C63)
- All 5 AP Gov units, 5 puzzles each = 25 puzzles total; each puzzle maps to a Big Idea (CON, LO, PRD, PMI, MPA)
- New `APGovLanding.tsx` at `/apgov` — mastery levels Citizen → Delegate → Legislator → Senator → Justice → Chief Justice
- New `APGovUnitPage.tsx` at `/apgov/unit/:unit` — 3-level nav matching the EnvSci pattern, lists puzzles by Big Idea code + name
- New `APWorldLanding.tsx` at `/apworld` and `APWorldUnitPage.tsx` at `/apworld/unit/:unit`
- `Index.tsx` updated to detect `/apgov` and `/apworld` prefixes for subject-aware routing
- Splash page updated: switched to `grid-cols-3` layout (3×2 grid) to accommodate 5 subjects cleanly; subject cards resized (p-5, text-2xl, square aspect ratio); AP Gov card added
- App.tsx: added routes for `/apgov`, `/apgov/unit/:unit`, `/apgov/unit/:unit/:puzzle`, `/apworld`, `/apworld/unit/:unit`, `/apworld/unit/:unit/:puzzle`

**Next:** AP Bio / AP Lang subject pages; shuffle button; mobile polish
