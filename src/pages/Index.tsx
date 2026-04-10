import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ConnectionsGame from "@/components/ConnectionsGame";
import { getGamesByUnit, gameSets } from "@/data/gameSets";
import { markPuzzleComplete } from "@/lib/progress";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  const { unit, puzzle } = useParams<{ unit: string; puzzle: string }>();
  const unitNum = Number(unit);
  const puzzleNum = Number(puzzle) || 1;
  const [resetKey, setResetKey] = useState(0);

  const puzzles = getGamesByUnit(unitNum);
  const currentGame = puzzles.find((p) => (p.puzzle ?? 1) === puzzleNum);
  const nextPuzzle = puzzles.find((p) => (p.puzzle ?? 1) === puzzleNum + 1);
  const nextUnit = gameSets.find((g) => g.unit > unitNum && (g.puzzle ?? 1) === 1);

  if (!currentGame) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg font-medium text-foreground">Game not found</p>
          <Button variant="ghost" size="sm" className="mt-4" onClick={() => navigate("/apush")}>
            ← Back to Units
          </Button>
        </div>
      </main>
    );
  }

  const handleWin = () => {
    markPuzzleComplete(unitNum, puzzleNum);
  };

  const backTarget = puzzles.length > 1 ? `/unit/${unitNum}` : "/apush";

  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-lg">
        <Button
          variant="ghost"
          size="sm"
          className="mb-4 gap-1.5 text-muted-foreground"
          onClick={() => navigate(backTarget)}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">PYT Games</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Study for your test, but make it fun.
        </p>
      </header>

      <section className="mb-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {currentGame.subject} — {currentGame.title}
        </p>
        {puzzles.length > 1 && (
          <p className="mt-1 text-xs text-muted-foreground">
            Puzzle {puzzleNum} of {puzzles.length}
          </p>
        )}
        <p className="mt-1 text-xs text-muted-foreground">
          Find the 4 groups of 4 connected terms
        </p>
      </section>

      <ConnectionsGame
        key={`${currentGame.id}-${resetKey}`}
        gameSet={currentGame}
        onWin={handleWin}
        onNextUnit={
          nextPuzzle
            ? () => navigate(`/unit/${unitNum}/${nextPuzzle.puzzle ?? 1}`)
            : nextUnit
              ? () => navigate(`/unit/${nextUnit.unit}`)
              : undefined
        }
        onNextUnitLabel={nextPuzzle ? "Next Puzzle →" : undefined}
        onTryAgain={() => setResetKey((k) => k + 1)}
        onBackToUnits={() => navigate("/apush")}
      />
    </main>
  );
};

export default Index;
