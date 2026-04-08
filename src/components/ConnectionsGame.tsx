import { useState, useMemo, useCallback } from "react";
import { GameSet, GameGroup } from "@/data/gameSets";
import GameTile from "./GameTile";
import SolvedGroup from "./SolvedGroup";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ConnectionsGameProps {
  gameSet: GameSet;
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

const ConnectionsGame = ({ gameSet }: ConnectionsGameProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [solvedGroups, setSolvedGroups] = useState<GameGroup[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState("");
  const [shaking, setShaking] = useState(false);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  const shuffledTerms = useMemo(() => {
    const allTerms = gameSet.groups.flatMap((g) => g.terms);
    return shuffle(allTerms);
  }, [gameSet]);

  const solvedTerms = useMemo(
    () => new Set(solvedGroups.flatMap((g) => g.terms)),
    [solvedGroups]
  );

  const remainingTerms = useMemo(
    () => shuffledTerms.filter((t) => !solvedTerms.has(t)),
    [shuffledTerms, solvedTerms]
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
        g.terms.every((t) => selected.includes(t))
    );

    if (match) {
      const newSolved = [...solvedGroups, match];
      setSolvedGroups(newSolved);
      setSelected([]);
      setMessage("");
      if (newSolved.length === gameSet.groups.length) {
        setWon(true);
      }
    } else {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setShaking(true);
      setMessage(`Try again. ${MAX_MISTAKES - newMistakes} mistake${MAX_MISTAKES - newMistakes !== 1 ? "s" : ""} remaining.`);
      setTimeout(() => setShaking(false), 400);
      if (newMistakes >= MAX_MISTAKES) {
        setLost(true);
        setMessage("No more attempts! Better luck next time.");
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
          <SolvedGroup key={g.name} name={g.name} terms={g.terms} />
        ))}
        <div className="animate-pop-in pt-6 text-center">
          <h2 className="text-2xl font-bold text-foreground">🎉 You mastered this set!</h2>
          <p className="mt-2 text-muted-foreground">Great job connecting the dots.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-3">
      {/* Solved groups */}
      {solvedGroups.map((g) => (
        <SolvedGroup key={g.name} name={g.name} terms={g.terms} />
      ))}

      {/* Grid */}
      <div
        className={cn(
          "grid grid-cols-4 gap-2",
          shaking && "animate-shake"
        )}
      >
        {remainingTerms.map((term) => (
          <GameTile
            key={term}
            term={term}
            selected={selected.includes(term)}
            solved={false}
            disabled={lost}
            onClick={() => toggleSelect(term)}
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
      {!lost && (
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
      )}
    </div>
  );
};

export default ConnectionsGame;
