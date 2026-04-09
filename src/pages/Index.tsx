import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ConnectionsGame from "@/components/ConnectionsGame";
import { getGameByUnit, gameSets } from "@/data/gameSets";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  const { unit } = useParams<{ unit: string }>();
  const currentGame = getGameByUnit(Number(unit));
  const [resetKey, setResetKey] = useState(0);

  const nextGame = currentGame
    ? gameSets.find((g) => g.unit > currentGame.unit)
    : undefined;

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

  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-lg">
        <Button
          variant="ghost"
          size="sm"
          className="mb-4 gap-1.5 text-muted-foreground"
          onClick={() => navigate("/apush")}
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
        <p className="mt-1 text-xs text-muted-foreground">
          Find the 4 groups of 4 connected terms
        </p>
      </section>

      <ConnectionsGame
        key={`${currentGame.id}-${resetKey}`}
        gameSet={currentGame}
        onWin={() => {
          const saved = JSON.parse(localStorage.getItem("pyt-apush-completed") ?? "[]") as number[];
          if (!saved.includes(currentGame.unit)) {
            localStorage.setItem("pyt-apush-completed", JSON.stringify([...saved, currentGame.unit]));
          }
        }}
        onNextUnit={nextGame ? () => navigate(`/unit/${nextGame.unit}`) : undefined}
        onTryAgain={() => setResetKey((k) => k + 1)}
        onBackToUnits={() => navigate("/apush")}
      />
    </main>
  );
};

export default Index;
