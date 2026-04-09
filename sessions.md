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

**Next:** Add Units 1–4 content, consider score/streak tracking, add subject pages for AP Bio / AP Lang
