import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { gameSets } from "@/data/gameSets";
import { getCompletedPuzzles } from "@/lib/progress";

const SUBJECT = "Env Science";
const ACCENT = "#2D7A4F";
const ACCENT_LIGHT = "#e8f5ee";

const UNIT_DATA: Record<number, { title: string; subtopics: { number: number; label: string }[] }> = {
  1: {
    title: "Living World: Ecosystems",
    subtopics: [
      { number: 1, label: "Energy Flow & Biogeochemical Cycles" },
      { number: 2, label: "Aquatic Zones & Ecosystems" },
      { number: 3, label: "Species Interactions & Productivity" },
      { number: 4, label: "Biomes, Abiotic Factors & Lake Ecology" },
      { number: 5, label: "Water Cycle, Consumers & Tolerance" },
    ],
  },
  5: {
    title: "Land & Water Use",
    subtopics: [
      { number: 1, label: "Agriculture & Food Production" },
      { number: 2, label: "Fishing, Forestry & Mining" },
      { number: 3, label: "Sustainable Land Use" },
    ],
  },
  4: {
    title: "Earth Systems & Resources",
    subtopics: [
      { number: 1, label: "Plate Tectonics & Earth Structure" },
      { number: 2, label: "Atmosphere & Climate Systems" },
      { number: 3, label: "Soil Systems" },
      { number: 4, label: "Water & Groundwater Systems" },
    ],
  },
  3: {
    title: "Populations",
    subtopics: [
      { number: 1, label: "Population Growth Models" },
      { number: 2, label: "Population Regulation" },
      { number: 3, label: "Human Population Demographics" },
      { number: 4, label: "Development, Policy & Sustainability" },
    ],
  },
  2: {
    title: "Living World: Biodiversity",
    subtopics: [
      { number: 1, label: "Measuring Biodiversity" },
      { number: 2, label: "Species, Evolution & Genetics" },
      { number: 3, label: "Threats to Biodiversity" },
      { number: 4, label: "Conservation Strategies & Protected Lands" },
      { number: 5, label: "Conservation Laws, Policy & Economics" },
    ],
  },
  6: {
    title: "Energy Resources & Consumption",
    subtopics: [
      { number: 1, label: "Fossil Fuels" },
      { number: 2, label: "Nuclear Energy" },
      { number: 3, label: "Renewable Energy" },
      { number: 4, label: "Energy Efficiency & Conservation" },
    ],
  },
  7: {
    title: "Atmospheric Pollution",
    subtopics: [
      { number: 1, label: "Air Pollutants & Sources" },
      { number: 2, label: "Smog & Ozone" },
      { number: 3, label: "Acid Deposition & Indoor Air Pollution" },
    ],
  },
  8: {
    title: "Aquatic & Terrestrial Pollution",
    subtopics: [
      { number: 1, label: "Water Pollution Sources & Quality" },
      { number: 2, label: "Aquatic Pollution & Eutrophication" },
      { number: 3, label: "Solid & Hazardous Waste" },
      { number: 4, label: "Remediation & Pollution Law" },
    ],
  },
  9: {
    title: "Global Change",
    subtopics: [
      { number: 1, label: "Greenhouse Effect & Climate Drivers" },
      { number: 2, label: "Impacts of Climate Change" },
      { number: 3, label: "Feedback Loops & Tipping Points" },
      { number: 4, label: "Climate Change Solutions" },
    ],
  },
};

const EnvSciUnitPage = () => {
  const navigate = useNavigate();
  const { unit } = useParams<{ unit: string }>();
  const unitNum = Number(unit);

  const unitData = UNIT_DATA[unitNum];
  const completed = getCompletedPuzzles(SUBJECT);

  // Which subtopic numbers have actual game data
  const activeSubtopics = new Set(
    gameSets
      .filter((g) => g.subject === SUBJECT && g.unit === unitNum)
      .map((g) => g.puzzle ?? 1)
  );

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
          onClick={() => navigate("/envsci")}
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
            Unit {unitNum}
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground leading-snug">
            {unitData.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose a topic to study.
          </p>
        </header>

        <div className="space-y-3">
          {unitData.subtopics.map(({ number, label }) => {
            const active = activeSubtopics.has(number);
            const isDone = completed.has(`${unitNum}-${number}`);

            return (
              <button
                key={number}
                onClick={() => active && navigate(`/envsci/unit/${unitNum}/${number}`)}
                disabled={!active}
                className={cn(
                  "w-full text-left rounded-2xl border px-5 py-4 transition-all duration-200",
                  active
                    ? "hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
                    : "cursor-not-allowed opacity-60"
                )}
                style={
                  isDone
                    ? { borderColor: `${ACCENT}66`, backgroundColor: ACCENT_LIGHT }
                    : active
                    ? {}
                    : {}
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded inline-block mb-1"
                      style={
                        isDone
                          ? { backgroundColor: `${ACCENT}22`, color: ACCENT }
                          : { backgroundColor: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }
                      }
                    >
                      {unitNum}.{number}
                    </span>
                    <p
                      className="text-sm font-bold leading-snug"
                      style={isDone ? { color: ACCENT } : {}}
                    >
                      {label}
                    </p>
                    {active && (
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        16 terms · 4 groups
                      </p>
                    )}
                  </div>
                  {!active ? (
                    <span className="rounded-full bg-muted px-3 py-1 text-[10px] font-semibold text-muted-foreground shrink-0">
                      Coming Soon
                    </span>
                  ) : isDone ? (
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

export default EnvSciUnitPage;
