import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { gameSets } from "@/data/gameSets";
import { getCompletedPuzzles } from "@/lib/progress";

const SUBJECT = "AP Gov";
const ACCENT = "#0D5C63";
const ACCENT_LIGHT = "#e6f4f5";

const UNIT_DATA: Record<number, { title: string; description: string }> = {
  1: { title: "Foundations of American Democracy", description: "Constitutionalism, liberty, and civic participation" },
  2: { title: "Interactions Among Branches",        description: "Checks, balances, and separation of powers" },
  3: { title: "Civil Liberties and Civil Rights",   description: "Constitutional protections and landmark cases" },
  4: { title: "Political Ideologies and Beliefs",   description: "Public opinion, socialization, and ideology" },
  5: { title: "Political Participation",            description: "Elections, voting, parties, and interest groups" },
};

const APGovUnitPage = () => {
  const navigate = useNavigate();
  const { unit } = useParams<{ unit: string }>();
  const unitNum = Number(unit);

  const unitData = UNIT_DATA[unitNum];
  const completed = getCompletedPuzzles(SUBJECT);

  const puzzles = gameSets
    .filter((g) => g.subject === SUBJECT && g.unit === unitNum)
    .sort((a, b) => (a.puzzle ?? 1) - (b.puzzle ?? 1));

  if (!unitData) {
    return (
      <main className="min-h-screen bg-background px-4 py-12 flex items-center justify-center">
        <p className="text-muted-foreground">Unit not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-md">
        <button
          onClick={() => navigate("/apgov")}
          className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <header className="mb-8 animate-fade-in">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: ACCENT }}
          >
            Unit {unitNum} · AP Government
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground leading-snug">
            {unitData.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose a Big Idea to study.
          </p>
        </header>

        <div className="space-y-3">
          {puzzles.map((p) => {
            const puzzleNum = p.puzzle ?? 1;
            const isDone = completed.has(`${unitNum}-${puzzleNum}`);

            return (
              <button
                key={p.id}
                onClick={() => navigate(`/apgov/unit/${unitNum}/${puzzleNum}`)}
                className={cn(
                  "w-full text-left rounded-2xl border px-5 py-4 transition-all duration-200",
                  "hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
                )}
                style={
                  isDone
                    ? { borderColor: `${ACCENT}66`, backgroundColor: ACCENT_LIGHT }
                    : {}
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    {p.theme && (
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded inline-block"
                          style={
                            isDone
                              ? { backgroundColor: `${ACCENT}22`, color: ACCENT }
                              : { backgroundColor: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }
                          }
                        >
                          {p.theme.code}
                        </span>
                      </div>
                    )}
                    <p
                      className="text-sm font-bold leading-snug"
                      style={isDone ? { color: ACCENT } : {}}
                    >
                      {p.theme?.name ?? `Puzzle ${puzzleNum}`}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      16 terms · 4 groups
                    </p>
                  </div>
                  {isDone ? (
                    <span className="font-bold text-sm shrink-0" style={{ color: ACCENT }}>✓ Done</span>
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

export default APGovUnitPage;
