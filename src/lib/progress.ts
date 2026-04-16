import { getGamesByUnit, gameSets } from "@/data/gameSets";

function getPuzzlesKey(subject: string): string {
  return `pyt-${subject.toLowerCase().replace(/\s+/g, "-")}-puzzles`;
}

/** Returns the set of completed puzzle keys, e.g. {"1-1", "1-2"} for a subject. */
export function getCompletedPuzzles(subject = "APUSH"): Set<string> {
  const raw = JSON.parse(localStorage.getItem(getPuzzlesKey(subject)) ?? "[]") as string[];
  return new Set(raw);
}

/** Marks a specific puzzle complete for a subject. */
export function markPuzzleComplete(unit: number, puzzle: number, subject = "APUSH"): void {
  const key = `${unit}-${puzzle}`;
  const completed = getCompletedPuzzles(subject);
  completed.add(key);
  localStorage.setItem(getPuzzlesKey(subject), JSON.stringify([...completed]));
}

/** Returns unit numbers where every puzzle is complete for a subject. */
export function getCompletedUnits(subject = "APUSH"): number[] {
  const completed = getCompletedPuzzles(subject);
  const unitNums = [...new Set(
    gameSets.filter((g) => g.subject === subject).map((g) => g.unit)
  )];
  return unitNums.filter((unit) => {
    const puzzles = getGamesByUnit(unit, subject);
    return puzzles.every((p) => completed.has(`${unit}-${p.puzzle ?? 1}`));
  });
}
