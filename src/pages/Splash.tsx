import { useNavigate } from "react-router-dom";

const subjects = [
  {
    label: "APUSH",
    description: "AP US History",
    path: "/apush",
    active: true,
    units: 9,
    accent: "#0F4D92",
    accentLight: "#e8f0fb",
    accentDark: "#0a3a6e",
  },
  {
    label: "IB Phil",
    description: "IB Philosophy",
    path: "/philosophy",
    active: true,
    units: 8,
    accent: "#6B3FA0",
    accentLight: "#f0ebf8",
    accentDark: "#4a2d7a",
  },
  {
    label: "Env Sci",
    description: "AP / IB Environmental Science",
    path: "/envsci",
    active: true,
    units: 9,
    accent: "#2D7A4F",
    accentLight: "#e8f5ee",
    accentDark: "#1a5235",
  },
];

const HOW_TO_PLAY = [
  { title: "Pick a Class", desc: "Choose the class you're studying" },
  { title: "Group the Terms", desc: "Find 4 terms that share a connection" },
  { title: "Master It", desc: "Solve all 4 groups to level up" },
];

const LogoMark = () => (
  <div
    className="flex flex-col items-center justify-center rounded-full border-2 border-[#0F4D92]/30 bg-[#e8f0fb] shrink-0"
    style={{ width: 56, height: 56 }}
  >
    <span className="text-[17px] font-black leading-none tracking-tight text-[#0F4D92]">PYT</span>
    <span className="text-[6px] font-bold tracking-[0.2em] text-[#0F4D92]/60 mt-0.5">GAMES</span>
  </div>
);

const Splash = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="animate-fade-in flex flex-col items-center text-center px-10 pt-8 pb-6 mb-10 border-b border-border">
        <LogoMark />
        <h1
          className="mt-4 text-4xl sm:text-5xl text-foreground whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}
        >
          Pass Your Tests.
        </h1>
        <p className="mt-1 text-sm text-muted-foreground font-medium tracking-wide">
          Study smarter. Score higher.
        </p>
      </section>

      <div className="px-8 pb-12 max-w-4xl mx-auto">

      {/* ── INFO STRIP ───────────────────────────── */}
      <section className="grid grid-cols-2 gap-6 animate-fade-in mb-12">

        {/* What is PYT */}
        <div className="rounded-2xl border border-primary/20 bg-card shadow-sm p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0F4D92] mb-2">
            What is PYT Games?
          </p>
          <p className="text-base text-foreground leading-relaxed">
            PYT Games is a <span className="font-semibold">study game</span> built to help you
            crush your AP exams. Group vocab terms, find the connections, and actually remember
            what you studied — one puzzle at a time.
          </p>
        </div>

        {/* How to play */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            How to Play
          </p>
          {HOW_TO_PLAY.map(({ title, desc }, i) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary">
                <span className="text-sm font-black text-primary">{i + 1}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── SUBJECT PICKER ───────────────────────── */}
      <section className="animate-fade-in mb-10">
        <div className="border-t border-border pt-8 mb-6">
          <p className="text-4xl font-black uppercase tracking-widest text-foreground">
            Pick Your Class
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {subjects.map(({ label, description, path, active, units, accent, accentLight, accentDark }, i) => (
            <button
              key={label}
              onClick={() => active && navigate(path)}
              disabled={!active}
              style={{
                animationDelay: `${i * 80}ms`,
                backgroundColor: active ? accentLight : "#f5f5f5",
                borderColor: active ? accent + "55" : "#e0e0e0",
                aspectRatio: "1 / 1",
              }}
              className={[
                "animate-fade-in flex flex-col items-center justify-center gap-3 rounded-2xl border p-6 text-center transition-all duration-200 w-full",
                active
                  ? "cursor-pointer hover:shadow-2xl hover:-translate-y-2 active:scale-[0.97]"
                  : "cursor-not-allowed opacity-50",
              ].join(" ")}
            >
              <p
                className="text-3xl font-black leading-none"
                style={{ color: active ? accentDark : "#999" }}
              >
                {label}
              </p>
              <p className="text-sm text-muted-foreground">{description}</p>
              {active ? (
                <span
                  className="rounded-full px-5 py-2 text-sm font-bold"
                  style={{ backgroundColor: accent, color: "#fff" }}
                >
                  {units} Units →
                </span>
              ) : (
                <span className="rounded-full bg-muted px-4 py-2 text-xs font-semibold text-muted-foreground">
                  Coming Soon
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── SOCIAL ───────────────────────────────── */}
      <div className="animate-fade-in flex items-center gap-6 border-t border-border pt-6">
        {["Instagram", "Twitter / X", "TikTok"].map((label) => (
          <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">@PYTGames</span>
            <span>· {label}</span>
          </div>
        ))}
      </div>

      </div>{/* end content wrapper */}
    </main>
  );
};

export default Splash;
