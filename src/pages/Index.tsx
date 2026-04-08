import ConnectionsGame from "@/components/ConnectionsGame";
import { gameSets } from "@/data/gameSets";

const Index = () => {
  const currentGame = gameSets[0];

  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">SYT Games</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Study for your test, but make it fun.
        </p>
      </header>

      <section className="mb-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {currentGame.subject} — {currentGame.title}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Find the 4 groups of 4 connected terms
        </p>
      </section>

      <ConnectionsGame gameSet={currentGame} />
    </main>
  );
};

export default Index;
