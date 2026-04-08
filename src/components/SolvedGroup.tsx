interface SolvedGroupProps {
  name: string;
  terms: string[];
}

const SolvedGroup = ({ name, terms }: SolvedGroupProps) => {
  return (
    <div className="animate-pop-in rounded-lg bg-game-correct p-4 text-center">
      <p className="text-sm font-bold uppercase tracking-wide text-game-correct-foreground">
        {name}
      </p>
      <p className="mt-1 text-xs text-game-correct-foreground/80">
        {terms.join(", ")}
      </p>
    </div>
  );
};

export default SolvedGroup;
