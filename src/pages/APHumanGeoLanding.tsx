import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { gameSets } from "@/data/gameSets";
import { getCompletedUnits } from "@/lib/progress";

const SUBJECT = "AP Human Geo";
const ACCENT = "#0891B2";
const ACCENT_LIGHT = "#e0f2fe";
const ACCENT_BORDER = "#0891B2";

const TOTAL_UNITS = 7;
const activeUnits = new Set(
  gameSets.filter((g) => g.subject === SUBJECT).map((g) => g.unit)
);

const UNIT_DATA: { number: number; title: string; description: string }[] = [
  { number: 1, title: "Thinking Geographically",                    description: "Maps, scale, diffusion, and geospatial tools" },
  { number: 2, title: "Population and Migration Patterns",           description: "Demographics, migration models, and population policy" },
  { number: 3, title: "Cultural Patterns and Processes",             description: "Culture, language, religion, and identity" },
  { number: 4, title: "Political Patterns and Processes",            description: "States, borders, geopolitics, and sovereignty" },
  { number: 5, title: "Agriculture and Rural Land Use",              description: "Farming systems, land use models, and food security" },
  { number: 6, title: "Cities and Urban Land-Use Patterns",          description: "Urbanization, urban models, and sustainability" },
  { number: 7, title: "Industrial and Economic Development",         description: "Development theories, industry, and globalization" },
];

const LEVELS = [
  { min: 0, label: "Novice Geographer",  marker: "🌱" },
  { min: 1, label: "Map Reader",         marker: "🗺️" },
  { min: 2, label: "Cartographer",       marker: "📐" },
  { min: 4, label: "Field Researcher",   marker: "🔭" },
  { min: 6, label: "GIS Analyst",        marker: "🌐" },
  { min: 7, label: "AP Scholar",         marker: "🏆" },
];

function getLevel(completed: number) {
  return [...LEVELS].reverse().find((l) => completed >= l.min) ?? LEVELS[0];
}

const APHumanGeoLanding = () => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    setCompleted(getCompletedUnits(SUBJECT));
  }, []);

  const level = getLevel(completed.length);
  const pct = Math.round((completed.length / TOTAL_UNITS) * 100);

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-md">
        <button
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      </div>

      <header className="mb-10 text-center animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          AP Human Geo
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          AP Human Geography · 7 Units
        </p>
      </header>

      <section className="mx-auto max-w-md mb-8 animate-fade-in">
        <div
          className="rounded-2xl border px-5 py-4 shadow-sm bg-card"
          style={{ borderColor: `${ACCENT_BORDER}33` }}
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Mastery</p>
              <p className="text-lg font-bold text-foreground mt-0.5">
                {level.marker} {level.label}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-foreground">
                {completed.length}
                <span className="text-base font-normal text-muted-foreground">/{TOTAL_UNITS}</span>
              </p>
              <p className="text-xs text-muted-foreground">units completed</p>
            </div>
          </div>
          <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, backgroundColor: ACCENT }}
            />
          </div>
          {completed.length < TOTAL_UNITS && (
            <p className="mt-2 text-[11px] text-muted-foreground">
              {TOTAL_UNITS - completed.length} more to reach{" "}
              {LEVELS.find((l) => l.min > completed.length)?.label ?? "AP Scholar"}!
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-md space-y-3">
        <h2 className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Choose a Unit
        </h2>

        {UNIT_DATA.map(({ number, title, description }) => {
          const active = activeUnits.has(number);
          const done = completed.includes(number);

          return (
            <button
              key={number}
              onClick={() => active && navigate(`/aphumangeo/unit/${number}`)}
              disabled={!active}
              className={cn(
                "w-full text-left rounded-2xl border px-5 py-4 transition-all duration-200",
                active
                  ? "bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]"
                  : "bg-muted/40 cursor-not-allowed opacity-60"
              )}
              style={done ? { borderColor: `${ACCENT}66`, backgroundColor: ACCENT_LIGHT } : {}}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
                      style={
                        done
                          ? { backgroundColor: `${ACCENT}22`, color: ACCENT }
                          : { backgroundColor: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }
                      }
                    >
                      Unit {number}
                    </span>
                    {done && (
                      <span className="text-xs font-bold" style={{ color: ACCENT }}>✓</span>
                    )}
                  </div>
                  <p
                    className="text-sm font-bold leading-snug"
                    style={done ? { color: ACCENT } : {}}
                  >
                    {title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
                </div>
                {!active ? (
                  <span className="rounded-full bg-muted px-3 py-1 text-[10px] font-semibold text-muted-foreground shrink-0">
                    Coming Soon
                  </span>
                ) : (
                  <span className="text-muted-foreground text-lg shrink-0">→</span>
                )}
              </div>
            </button>
          );
        })}
      </section>
    </main>
  );
};

export default APHumanGeoLanding;
