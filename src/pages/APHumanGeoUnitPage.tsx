import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { gameSets } from "@/data/gameSets";
import { getCompletedPuzzles } from "@/lib/progress";

const SUBJECT = "AP Human Geo";
const ACCENT = "#0891B2";
const ACCENT_LIGHT = "#e0f2fe";

const UNIT_DATA: Record<number, { title: string; description: string }> = {
  1: { title: "Thinking Geographically",                    description: "Maps, scale, diffusion, and geospatial tools" },
  2: { title: "Population and Migration Patterns",           description: "Demographics, migration models, and population policy" },
  3: { title: "Cultural Patterns and Processes",             description: "Culture, language, religion, and identity" },
  4: { title: "Political Patterns and Processes",            description: "States, borders, geopolitics, and sovereignty" },
  5: { title: "Agriculture and Rural Land Use",              description: "Farming systems, land use models, and food security" },
  6: { title: "Cities and Urban Land-Use Patterns",          description: "Urbanization, urban models, and sustainability" },
  7: { title: "Industrial and Economic Development",         description: "Development theories, industry, and globalization" },
};

const APHumanGeoUnitPage = () => {
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
          onClick={() => navigate("/aphumangeo")}
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
            Unit {unitNum} · AP Human Geo
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground leading-snug">
            {unitData.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose a puzzle to study.
          </p>
        </header>

        <div className="space-y-3">
          {puzzles.map((p) => {
            const puzzleNum = p.puzzle ?? 1;
            const isDone = completed.has(`${unitNum}-${puzzleNum}`);

            return (
              <button
                key={p.id}
                onClick={() => navigate(`/aphumangeo/unit/${unitNum}/${puzzleNum}`)}
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

export default APHumanGeoUnitPage;
