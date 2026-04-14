import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { getGamesByUnit } from "@/data/gameSets";
import { getCompletedPuzzles } from "@/lib/progress";

const PuzzlePicker = () => {
  const navigate = useNavigate();
  const { unit } = useParams<{ unit: string }>();
  const unitNum = Number(unit);
  const puzzles = getGamesByUnit(unitNum);
  const completed = getCompletedPuzzles();

  // Auto-skip picker if there's only one puzzle
  useEffect(() => {
    if (puzzles.length === 1) {
      navigate(`/unit/${unitNum}/1`, { replace: true });
    }
  }, [puzzles.length, unitNum, navigate]);

  if (puzzles.length <= 1) return null;

  const hasThemes = puzzles.some((p) => p.theme);

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-md">
        <button
          onClick={() => navigate("/apush")}
          className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <header className="mb-10 animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Unit {unitNum}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {puzzles[0].title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {hasThemes ? "Choose a theme to study." : "Choose a puzzle to play."}
          </p>
        </header>

        <div className="space-y-3">
          {puzzles.map((p) => {
            const puzzleNum = p.puzzle ?? 1;
            const isDone = completed.has(`${unitNum}-${puzzleNum}`);

            return (
              <button
                key={p.id}
                onClick={() => navigate(`/unit/${unitNum}/${puzzleNum}`)}
                className={cn(
                  "w-full text-left rounded-2xl border px-5 py-4 transition-all duration-200",
                  "hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]",
                  isDone
                    ? "border-[#0F4D92]/40 bg-[#e8f0fb]"
                    : "border-border bg-card shadow-sm hover:border-primary/50"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    {p.theme ? (
                      <>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={cn(
                            "text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded",
                            isDone
                              ? "bg-[#0F4D92]/15 text-[#0F4D92]"
                              : "bg-muted text-muted-foreground"
                          )}>
                            {p.theme.code}
                          </span>
                        </div>
                        <p className={cn(
                          "text-sm font-bold leading-snug",
                          isDone ? "text-[#0F4D92]" : "text-foreground"
                        )}>
                          {p.theme.name}
                        </p>
                      </>
                    ) : (
                      <p className={cn(
                        "text-sm font-bold",
                        isDone ? "text-[#0F4D92]" : "text-foreground"
                      )}>
                        Puzzle {puzzleNum}
                      </p>
                    )}
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      16 terms · 4 groups
                    </p>
                  </div>
                  {isDone ? (
                    <span className="text-[#0F4D92] font-bold text-sm shrink-0">✓ Done</span>
                  ) : (
                    <span className="text-muted-foreground text-xs shrink-0">Play →</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default PuzzlePicker;
