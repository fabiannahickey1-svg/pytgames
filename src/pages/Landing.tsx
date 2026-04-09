import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { gameSets } from "@/data/gameSets";

const TOTAL_UNITS = 9;
const activeUnits = new Set(gameSets.map((g) => g.unit));

const units = Array.from({ length: TOTAL_UNITS }, (_, i) => ({
  number: i + 1,
  active: activeUnits.has(i + 1),
}));

const LEVELS = [
  { min: 0, label: "Rookie",     emoji: "🌱" },
  { min: 1, label: "Novice",     emoji: "📖" },
  { min: 3, label: "Apprentice", emoji: "🔍" },
  { min: 5, label: "Scholar",    emoji: "🎓" },
  { min: 7, label: "Historian",  emoji: "🏛️" },
  { min: 9, label: "Master",     emoji: "🏆" },
];

function getLevel(completed: number) {
  return [...LEVELS].reverse().find((l) => completed >= l.min) ?? LEVELS[0];
}

const Landing = () => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("pyt-apush-completed") ?? "[]") as number[];
    setCompleted(saved);
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
          APUSH
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          AP US History
        </p>
      </header>

      {/* Mastery bar */}
      <section className="mx-auto max-w-md mb-8 animate-fade-in">
        <div className="rounded-2xl border border-primary/20 bg-card px-5 py-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Mastery</p>
              <p className="text-lg font-bold text-foreground mt-0.5">
                {level.emoji} {level.label}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-foreground">{completed.length}<span className="text-base font-normal text-muted-foreground">/{TOTAL_UNITS}</span></p>
              <p className="text-xs text-muted-foreground">units completed</p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, backgroundColor: "#0F4D92" }}
            />
          </div>
          {completed.length < TOTAL_UNITS && (
            <p className="mt-2 text-[11px] text-muted-foreground">
              {TOTAL_UNITS - completed.length} more to reach {LEVELS.find(l => l.min > completed.length)?.label ?? "Master"} 🎯
            </p>
          )}
        </div>
      </section>

      {/* Unit grid */}
      <section className="mx-auto max-w-md">
        <h2 className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Choose a Unit
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {units.map(({ number, active }) => {
            const done = completed.includes(number);
            return (
              <button
                key={number}
                onClick={() => active && navigate(`/unit/${number}`)}
                disabled={!active}
                className={cn(
                  "relative flex flex-col items-center justify-center rounded-2xl border px-4 py-6 text-center transition-all duration-200",
                  done
                    ? "border-[#0F4D92]/40 bg-[#e8f0fb] cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                    : active
                      ? "border-primary/30 bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/60 cursor-pointer active:scale-95"
                      : "border-border bg-muted/40 cursor-not-allowed opacity-60"
                )}
              >
                {done && (
                  <span className="absolute top-2 right-2 text-[#0F4D92] text-xs">✓</span>
                )}
                <span className={cn("text-2xl font-bold", done ? "text-[#0F4D92]" : active ? "text-foreground" : "text-muted-foreground")}>
                  {number}
                </span>
                <span className={cn("mt-1 text-xs", active ? "text-muted-foreground" : "text-muted-foreground/70")}>
                  Unit {number}
                </span>
                {!active && (
                  <span className="mt-2 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    Coming Soon
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Landing;
