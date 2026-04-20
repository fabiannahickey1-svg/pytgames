import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { gameSets } from "@/data/gameSets";
import { getCompletedUnits } from "@/lib/progress";

const SUBJECT = "AP World";
const ACCENT = "#8B1A1A";
const ACCENT_LIGHT = "#f9eded";
const ACCENT_BORDER = "#8B1A1A";

const TOTAL_UNITS = 9;
const activeUnits = new Set(
  gameSets.filter((g) => g.subject === SUBJECT).map((g) => g.unit)
);

const UNIT_DATA: { number: number; title: string; period: string }[] = [
  { number: 1, title: "The Global Tapestry",              period: "c. 1200–1450" },
  { number: 2, title: "Networks of Exchange",             period: "c. 1200–1450" },
  { number: 3, title: "Land-Based Empires",               period: "c. 1450–1750" },
  { number: 4, title: "Transoceanic Interconnections",    period: "c. 1450–1750" },
  { number: 5, title: "Revolutions",                      period: "c. 1750–1900" },
  { number: 6, title: "Consequences of Industrialization",period: "c. 1750–1900" },
  { number: 7, title: "Global Conflict",                  period: "c. 1900–Present" },
  { number: 8, title: "Cold War & Decolonization",        period: "c. 1900–Present" },
  { number: 9, title: "Globalization",                    period: "c. 1900–Present" },
];

const LEVELS = [
  { min: 0, label: "Apprentice",  marker: "📜" },
  { min: 1, label: "Explorer",    marker: "🧭" },
  { min: 3, label: "Chronicler",  marker: "📖" },
  { min: 5, label: "Scholar",     marker: "🎓" },
  { min: 7, label: "Diplomat",    marker: "🌍" },
  { min: 9, label: "Historian",   marker: "🏛️" },
];

function getLevel(completed: number) {
  return [...LEVELS].reverse().find((l) => completed >= l.min) ?? LEVELS[0];
}

const APWorldLanding = () => {
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
          AP World History
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Modern World History · 9 Units
        </p>
      </header>

      {/* Mastery bar */}
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
              {LEVELS.find((l) => l.min > completed.length)?.label ?? "Historian"}
            </p>
          )}
        </div>
      </section>

      {/* Unit list */}
      <section className="mx-auto max-w-md space-y-3">
        <h2 className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Choose a Unit
        </h2>

        {UNIT_DATA.map(({ number, title, period }) => {
          const active = activeUnits.has(number);
          const done = completed.includes(number);

          return (
            <button
              key={number}
              onClick={() => active && navigate(`/apworld/unit/${number}`)}
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
                  <p className="mt-0.5 text-xs text-muted-foreground">{period}</p>
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

export default APWorldLanding;
