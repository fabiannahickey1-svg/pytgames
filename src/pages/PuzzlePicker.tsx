import { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { getGamesByUnit } from "@/data/gameSets";
import { getCompletedPuzzles } from "@/lib/progress";

const PuzzlePicker = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { unit } = useParams<{ unit: string }>();
  const unitNum = Number(unit);

  const isPhilosophy = location.pathname.startsWith("/philosophy");
  const subject = isPhilosophy ? "IB Philosophy" : "APUSH";
  const subjectBase = isPhilosophy ? "/philosophy" : "/apush";
  const unitBase = isPhilosophy ? "/philosophy/unit" : "/unit";

  const puzzles = getGamesByUnit(unitNum, subject);
  const completed = getCompletedPuzzles(subject);

  // Auto-skip picker if there's only one puzzle
  useEffect(() => {
    if (puzzles.length === 1) {
      navigate(`${unitBase}/${unitNum}/1`, { replace: true });
    }
  }, [puzzles.length, unitNum, navigate, unitBase]);

  if (puzzles.length <= 1) return null;

  const hasThemes = puzzles.some((p) => p.theme);

  const accent = isPhilosophy ? "#6B3FA0" : "#0F4D92";
  const accentLight = isPhilosophy ? "#f0ebf8" : "#e8f0fb";

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-md">
        <button
          onClick={() => navigate(subjectBase)}
          className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <header className="mb-10 animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            {isPhilosophy ? `Theme ${unitNum}` : `Unit ${unitNum}`}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {puzzles[0].title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {hasThemes ? "Choose a topic to study." : "Choose a puzzle to play."}
          </p>
        </header>

        <div className="space-y-3">
          {puzzles.map((p) => {
            const puzzleNum = p.puzzle ?? 1;
            const isDone = completed.has(`${unitNum}-${puzzleNum}`);

            return (
              <button
                key={p.id}
                onClick={() => navigate(`${unitBase}/${unitNum}/${puzzleNum}`)}
                className={cn(
                  "w-full text-left rounded-2xl border px-5 py-4 transition-all duration-200",
                  "hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]",
                  isDone
                    ? "border-opacity-40 bg-opacity-100"
                    : "border-border bg-card shadow-sm"
                )}
                style={isDone
                  ? { borderColor: `${accent}66`, backgroundColor: accentLight }
                  : {}
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    {p.theme ? (
                      <>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
                            style={isDone
                              ? { backgroundColor: `${accent}22`, color: accent }
                              : { backgroundColor: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }
                            }
                          >
                            {p.theme.code}
                          </span>
                        </div>
                        <p
                          className="text-sm font-bold leading-snug"
                          style={isDone ? { color: accent } : {}}
                        >
                          {p.theme.name}
                        </p>
                      </>
                    ) : (
                      <p
                        className={cn("text-sm font-bold")}
                        style={isDone ? { color: accent } : {}}
                      >
                        Puzzle {puzzleNum}
                      </p>
                    )}
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      16 terms · 4 groups
                    </p>
                  </div>
                  {isDone ? (
                    <span className="font-bold text-sm shrink-0" style={{ color: accent }}>✓ Done</span>
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
