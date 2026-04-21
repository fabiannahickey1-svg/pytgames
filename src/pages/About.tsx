import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-md">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* Header */}
        <header className="mb-10 animate-fade-in">
          <div
            className="inline-flex items-center justify-center rounded-full border-2 border-[#0F4D92]/30 bg-[#e8f0fb] mb-4"
            style={{ width: 56, height: 56 }}
          >
            <span className="text-[17px] font-black leading-none tracking-tight text-[#0F4D92]">PYT</span>
          </div>
          <h1
            className="text-4xl text-foreground"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            About Us
          </h1>
        </header>

        {/* Content */}
        <div className="animate-fade-in space-y-4">
          <div className="rounded-2xl border border-primary/20 bg-card shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0F4D92] mb-2">Our Mission</p>
            <p className="text-base text-foreground leading-relaxed">
              PYT Games was created to make studying actually fun. We're reimagining how students review for classes like APUSH by turning dense material into quick, addictive games inspired by the NYT Connections format, the kind of challenge that feels more like a puzzle than a study session.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">The Team</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-foreground">Fabianna Hickey</p>
                <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">
                  Fabianna Hickey is the developer, responsible for the full website. She handles everything from the front-end interface to the game logic and infrastructure.
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground">Lily Grodin</p>
                <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">
                  The concept started with Lily Grodin, whose idea sparked the entire project. She leads creative direction and social media, shaping the overall vision behind PYT Games.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Our Goal</p>
            <p className="text-base text-foreground leading-relaxed">
              Help students learn faster, remember more, and actually enjoy the process. Studying shouldn't feel like a chore, and with PYT Games, it doesn't have to.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
