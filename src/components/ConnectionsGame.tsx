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

const GROUP_COLORS = [
  { bg: "#e8f0fb", border: "#0F4D92", text: "#0F4D92" },  // Yale Blue
  { bg: "#e8e8e8", border: "#222222", text: "#222222" },  // near black
  { bg: "#f2f2f2", border: "#888888", text: "#555555" },  // mid gray
  { bg: "#dde8f7", border: "#4a7abb", text: "#2d5a9e" },  // steel blue
];

const ConnectionsGame = ({ gameSet, onWin, onNextUnit, onTryAgain, onBackToUnits }: ConnectionsGameProps) => {
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
        onWin?.();
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
        <div className="animate-pop-in pt-6 text-center space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">🎉 You mastered this set!</h2>
            <p className="mt-1 text-muted-foreground">Great job connecting the dots.</p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Button variant="outline" size="sm" onClick={onBackToUnits}>
              All Units
            </Button>
            {onNextUnit && (
              <Button size="sm" onClick={onNextUnit}>
                Next Unit →
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (lost) {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">😔 Out of attempts</h2>
          <p className="mt-1 text-sm text-muted-foreground">Here's what each term belonged to:</p>
        </div>

        {gameSet.groups.map((g, i) => {
          const color = GROUP_COLORS[i % GROUP_COLORS.length];
          return (
            <div
              key={g.name}
              className="animate-fade-in rounded-2xl border p-4"
              style={{ backgroundColor: color.bg, borderColor: color.border + "55" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: color.text }}>
                {g.name}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {g.terms.map((term) => (
                  <div
                    key={term}
                    className="rounded-lg px-3 py-2 text-xs font-semibold text-center"
                    style={{ backgroundColor: color.border + "22", color: color.text }}
                  >
                    {term}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

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
        <SolvedGroup key={g.name} name={g.name} terms={g.terms} />
      ))}

      {/* Grid */}
      <div
        className={cn(
          "grid grid-cols-4 gap-1.5 sm:gap-2",
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
