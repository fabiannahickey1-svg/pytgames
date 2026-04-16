import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { gameSets } from "@/data/gameSets";
import { getCompletedUnits } from "@/lib/progress";

const SUBJECT = "IB Philosophy";
const ACCENT = "#6B3FA0";
const ACCENT_LIGHT = "#f0ebf8";
const ACCENT_BORDER = "#6B3FA0";

const TOTAL_UNITS = 8;
const activeUnits = new Set(
  gameSets.filter((g) => g.subject === SUBJECT).map((g) => g.unit)
);

const units = Array.from({ length: TOTAL_UNITS }, (_, i) => ({
  number: i + 1,
  active: activeUnits.has(i + 1),
}));

const UNIT_LABELS: Record<number, string> = {
  1: "Being Human",
  2: "Epistemology",
  3: "Ethics",
  4: "Philosophy of Religion",
  5: "Philosophy of Science",
  6: "Political Philosophy",
  7: "Social Philosophy",
  8: "Aesthetics",
};

const LEVELS = [
  { min: 0, label: "Curious",    marker: "?" },
  { min: 1, label: "Inquirer",   marker: "I" },
  { min: 3, label: "Dialectician", marker: "D" },
  { min: 5, label: "Logician",   marker: "L" },
  { min: 7, label: "Sophist",    marker: "S" },
  { min: 8, label: "Philosopher", marker: "Φ" },
];

function getLevel(completed: number) {
  return [...LEVELS].reverse().find((l) => completed >= l.min) ?? LEVELS[0];
}

const PhilosophyLanding = () => {
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
          IB Philosophy
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Theory of Knowledge for the IB Diploma
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
              {LEVELS.find((l) => l.min > completed.length)?.label ?? "Philosopher"}
            </p>
          )}
        </div>
      </section>

      {/* Unit grid */}
      <section className="mx-auto max-w-md">
        <h2 className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Choose a Theme
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {units.map(({ number, active }) => {
            const done = completed.includes(number);
            const label = UNIT_LABELS[number] ?? `Unit ${number}`;
            const isCoreTheme = number === 1;
            return (
              <button
                key={number}
                onClick={() => active && navigate(`/philosophy/unit/${number}`)}
                disabled={!active}
                className={cn(
                  "relative flex flex-col items-start rounded-2xl border px-4 py-5 text-left transition-all duration-200",
                  done
                    ? "cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                    : active
                      ? "border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer active:scale-95"
                      : "border-border bg-muted/40 cursor-not-allowed opacity-60"
                )}
                style={done ? { borderColor: `${ACCENT}66`, backgroundColor: ACCENT_LIGHT } : {}}
              >
                {done && (
                  <span className="absolute top-2 right-2 text-xs" style={{ color: ACCENT }}>✓</span>
                )}
                {isCoreTheme && (
                  <span
                    className="mb-1.5 text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: `${ACCENT}18`, color: ACCENT }}
                  >
                    Core
                  </span>
                )}
                <span
                  className="text-xl font-bold leading-none"
                  style={{ color: done ? ACCENT : active ? undefined : undefined }}
                >
                  {number}
                </span>
                <span
                  className={cn(
                    "mt-1.5 text-xs font-medium leading-snug",
                    done ? "" : active ? "text-muted-foreground" : "text-muted-foreground/70"
                  )}
                  style={done ? { color: ACCENT } : {}}
                >
                  {label}
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

export default PhilosophyLanding;
