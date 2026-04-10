import { useState, useMemo, useCallback } from "react";
import { GameSet, GameGroup } from "@/data/gameSets";
import GameTile from "./GameTile";
import SolvedGroup from "./SolvedGroup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ConnectionsGameProps {
  gameSet: GameSet;
  onWin?: () => void;
  onNextUnit?: () => void;
  onNextUnitLabel?: string;
  onTryAgain?: () => void;
  onBackToUnits?: () => void;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const MAX_MISTAKES = 4;


const ConnectionsGame = ({ gameSet, onWin, onNextUnit, onNextUnitLabel, onTryAgain, onBackToUnits }: ConnectionsGameProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [solvedGroups, setSolvedGroups] = useState<GameGroup[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [shaking, setShaking] = useState(false);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [message, setMessage] = useState("");

  // All terms as objects, shuffled once on load
  const shuffledTerms = useMemo<GameTerm[]>(() => {
    const allTerms = gameSet.groups.flatMap((g) => g.terms);
    return shuffle(allTerms);
  }, [gameSet]);

const solvedTermStrings = useMemo(
    () => new Set(solvedGroups.flatMap((g) => g.terms.map((t) => t.term))),
    [solvedGroups]
  );

  const remainingTerms = useMemo(
    () => shuffledTerms.filter((t) => !solvedTermStrings.has(t.term)),
    [shuffledTerms, solvedTermStrings]
  );

  const toggleSelect = useCallback(
    (term: string) => {
      if (won || lost) return;
      setMessage("");
      setSelected((prev) =>
        prev.includes(term)
          ? prev.filter((t) => t !== term)
          : prev.length < 4
            ? [...prev, term]
            : prev
      );
    },
    [won, lost]
  );

  const handleSubmit = () => {
    if (selected.length !== 4) return;

    const match = gameSet.groups.find(
      (g) =>
        !solvedGroups.includes(g) &&
        g.terms.every((t) => selected.includes(t.term))
    );

    if (match) {
      const newSolved = [...solvedGroups, match];
      setSolvedGroups(newSolved);
      setSelected([]);
      setMessage("");
      if (newSolved.length === gameSet.groups.length) {
        setWon(true);
        onWin?.();
      }
    } else {
      // Check if exactly 3 selected terms belong to any single unsolved group
      const oneAway = gameSet.groups.some(
        (g) =>
          !solvedGroups.includes(g) &&
          g.terms.filter((t) => selected.includes(t.term)).length === 3
      );

      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setShaking(true);
      setMessage(
        oneAway
          ? "One away!"
          : `Try again. ${MAX_MISTAKES - newMistakes} mistake${MAX_MISTAKES - newMistakes !== 1 ? "s" : ""} remaining.`
      );
      setTimeout(() => setShaking(false), 400);
      if (newMistakes >= MAX_MISTAKES) {
        setSelected([]);
        setLost(true);
      }
    }
  };

  const handleDeselectAll = () => {
    setSelected([]);
    setMessage("");
  };

  if (won) {
    return (
      <div className="mx-auto max-w-lg space-y-3">
        {gameSet.groups.map((g) => (
          <SolvedGroup key={g.name} name={g.name} terms={g.terms.map((t) => t.term)} />
        ))}
        <div className="animate-pop-in pt-6 text-center space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">You mastered this set!</h2>
            <p className="mt-1 text-muted-foreground">Great job connecting the dots.</p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Button variant="outline" size="sm" onClick={onBackToUnits}>
              All Units
            </Button>
            {onNextUnit && (
              <Button size="sm" onClick={onNextUnit}>
                {onNextUnitLabel ?? "Next Unit →"}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (lost) {
    const allTerms = gameSet.groups.flatMap((g) => g.terms);
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">Out of attempts</h2>
          <p className="mt-1 text-sm text-muted-foreground">Review all 16 terms before trying again.</p>
        </div>

        <div className="rounded-2xl border border-border bg-muted/40 p-4 space-y-3">
          {allTerms.map((t) => (
            <div key={t.term} className="space-y-0.5">
              <p className="text-sm font-semibold text-foreground">{t.term}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{t.definition}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Button variant="outline" size="sm" onClick={onBackToUnits}>
            All Units
          </Button>
          <Button size="sm" onClick={onTryAgain}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-3">
      {/* Solved groups */}
      {solvedGroups.map((g) => (
        <SolvedGroup key={g.name} name={g.name} terms={g.terms.map((t) => t.term)} />
      ))}

      {/* Grid */}
      <div
        className={cn(
          "grid grid-cols-4 gap-1.5 sm:gap-2",
          shaking && "animate-shake"
        )}
      >
        {remainingTerms.map((t) => (
          <GameTile
            key={t.term}
            term={t.term}
            selected={selected.includes(t.term)}
            solved={false}
            disabled={lost}
            onClick={() => toggleSelect(t.term)}
          />
        ))}
      </div>

      {/* Mistakes indicator */}
      <div className="flex items-center justify-center gap-1.5 pt-1">
        <span className="text-xs text-muted-foreground">Mistakes:</span>
        {Array.from({ length: MAX_MISTAKES }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-colors",
              i < mistakes ? "bg-destructive" : "bg-border"
            )}
          />
        ))}
      </div>

      {/* Message */}
      {message && (
        <p className="text-center text-sm font-medium text-destructive">{message}</p>
      )}

      {/* Actions */}
      <div className="flex items-center justify-center gap-3 pt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleDeselectAll}
          disabled={selected.length === 0}
        >
          Deselect All
        </Button>
        <Button
          size="sm"
          onClick={handleSubmit}
          disabled={selected.length !== 4}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ConnectionsGame;
