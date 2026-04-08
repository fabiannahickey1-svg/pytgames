import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { gameSets } from "@/data/gameSets";

const activeUnits = new Set(gameSets.map((g) => g.unit));

const units = Array.from({ length: 9 }, (_, i) => ({
  number: i + 1,
  active: activeUnits.has(i + 1),
}));

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <header className="mb-10 text-center animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          SYT Games
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Study for your test, but make it fun.
        </p>
      </header>

      <section className="mx-auto max-w-md">
        <h2 className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Choose a Unit
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {units.map(({ number, active }) => (
            <button
              key={number}
              onClick={() => active && navigate(`/unit/${number}`)}
              disabled={!active}
              className={cn(
                "relative flex flex-col items-center justify-center rounded-2xl border px-4 py-6 text-center transition-all duration-200",
                active
                  ? "border-primary/30 bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/60 cursor-pointer active:scale-95"
                  : "border-border bg-muted/40 cursor-not-allowed opacity-60"
              )}
            >
              <span
                className={cn(
                  "text-2xl font-bold",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {number}
              </span>
              <span
                className={cn(
                  "mt-1 text-xs",
                  active ? "text-muted-foreground" : "text-muted-foreground/70"
                )}
              >
                Unit {number}
              </span>
              {!active && (
                <span className="mt-2 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  Coming Soon
                </span>
              )}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Landing;
