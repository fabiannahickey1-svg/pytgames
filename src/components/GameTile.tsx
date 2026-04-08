import { cn } from "@/lib/utils";

interface GameTileProps {
  term: string;
  selected: boolean;
  solved: boolean;
  disabled: boolean;
  onClick: () => void;
}

const GameTile = ({ term, selected, solved, disabled, onClick }: GameTileProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || solved}
      className={cn(
        "rounded-lg px-2 py-4 text-sm font-semibold transition-all duration-200 select-none",
        "min-h-[60px] flex items-center justify-center text-center leading-tight",
        solved
          ? "bg-game-correct text-game-correct-foreground cursor-default"
          : selected
            ? "bg-game-tile-selected text-game-tile-selected-foreground scale-[0.97]"
            : "bg-game-tile text-foreground hover:scale-[1.03] active:scale-[0.97] shadow-sm border border-border"
      )}
    >
      {term}
    </button>
  );
};

export default GameTile;
