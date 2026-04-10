import { getGamesByUnit, gameSets } from "@/data/gameSets";

const PUZZLES_KEY = "pyt-apush-puzzles";

/** Returns the set of completed puzzle keys, e.g. {"1-1", "1-2", "3-1"} */
export function getCompletedPuzzles(): Set<string> {
  const raw = JSON.parse(localStorage.getItem(PUZZLES_KEY) ?? "[]") as string[];
  return new Set(raw);
}

/** Marks a specific puzzle complete. */
export function markPuzzleComplete(unit: number, puzzle: number): void {
  const key = `${unit}-${puzzle}`;
  const completed = getCompletedPuzzles();
  completed.add(key);
  localStorage.setItem(PUZZLES_KEY, JSON.stringify([...completed]));
}

/** Returns unit numbers where every puzzle is complete. */
export function getCompletedUnits(): number[] {
  const completed = getCompletedPuzzles();
  const unitNums = [...new Set(gameSets.map((g) => g.unit))];
  return unitNums.filter((unit) => {
    const puzzles = getGamesByUnit(unit);
    return puzzles.every((p) => completed.has(`${unit}-${p.puzzle ?? 1}`));
  });
}
