import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ConnectionsGame from "@/components/ConnectionsGame";
import { getGamesByUnit, gameSets } from "@/data/gameSets";
import { markPuzzleComplete } from "@/lib/progress";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { unit, puzzle } = useParams<{ unit: string; puzzle: string }>();
  const unitNum = Number(unit);
  const puzzleNum = Number(puzzle) || 1;
  const [resetKey, setResetKey] = useState(0);

  const isPhilosophy = location.pathname.startsWith("/philosophy");
  const isEnvSci = location.pathname.startsWith("/envsci");
  const isAPWorld = location.pathname.startsWith("/apworld");
  const isAPGov = location.pathname.startsWith("/apgov");
  const isAPPsych = location.pathname.startsWith("/appsych");
  const isAPBio = location.pathname.startsWith("/apbio");
  const isAPEuro = location.pathname.startsWith("/apeuro");
  const subject = isPhilosophy ? "IB Philosophy" : isEnvSci ? "Env Science" : isAPWorld ? "AP World" : isAPGov ? "AP Gov" : isAPPsych ? "AP Psych" : isAPBio ? "AP Biology" : isAPEuro ? "AP Euro" : "APUSH";
  const subjectBase = isPhilosophy ? "/philosophy" : isEnvSci ? "/envsci" : isAPWorld ? "/apworld" : isAPGov ? "/apgov" : isAPPsych ? "/appsych" : isAPBio ? "/apbio" : isAPEuro ? "/apeuro" : "/apush";
  const unitBase = isPhilosophy ? "/philosophy/unit" : isEnvSci ? "/envsci/unit" : isAPWorld ? "/apworld/unit" : isAPGov ? "/apgov/unit" : isAPPsych ? "/appsych/unit" : isAPBio ? "/apbio/unit" : isAPEuro ? "/apeuro/unit" : "/unit";

  const puzzles = getGamesByUnit(unitNum, subject);
  const currentGame = puzzles.find((p) => (p.puzzle ?? 1) === puzzleNum);
  const nextPuzzle = puzzles.find((p) => (p.puzzle ?? 1) === puzzleNum + 1);
  const nextUnit = gameSets.find(
    (g) => g.subject === subject && g.unit > unitNum && (g.puzzle ?? 1) === 1
  );

  if (!currentGame) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg font-medium text-foreground">Game not found</p>
          <Button variant="ghost" size="sm" className="mt-4" onClick={() => navigate(subjectBase)}>
            ← Back
          </Button>
        </div>
      </main>
    );
  }

  const handleWin = () => {
    markPuzzleComplete(unitNum, puzzleNum, subject);
  };

  const backTarget = puzzles.length > 1 ? `${unitBase}/${unitNum}` : subjectBase;

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
          {currentGame.subject} — {isPhilosophy ? "Theme" : "Unit"} {unitNum}
        </p>
        {currentGame.theme ? (
          <p className="mt-1 text-sm font-semibold text-foreground">
            <span className="text-xs font-bold text-muted-foreground mr-1.5">{currentGame.theme.code}</span>
            {currentGame.theme.name}
          </p>
        ) : (
          puzzles.length > 1 && (
            <p className="mt-1 text-xs text-muted-foreground">
              Puzzle {puzzleNum} of {puzzles.length}
            </p>
          )
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
            ? () => navigate(`${unitBase}/${unitNum}/${nextPuzzle.puzzle ?? 1}`)
            : nextUnit
              ? () => navigate(`${unitBase}/${nextUnit.unit}`)
              : undefined
        }
        onNextUnitLabel={nextPuzzle ? "Next Puzzle →" : undefined}
        onTryAgain={() => setResetKey((k) => k + 1)}
        onBackToUnits={() => navigate(subjectBase)}
      />
    </main>
  );
};

export default Index;
