import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Instagram } from "lucide-react";

const ACCENT = "#0F4D92";

// Simple TikTok icon (lucide doesn't include it)
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const CONTACTS = [
  {
    label: "Email",
    handle: "pytgames2026@gmail.com",
    sub: "Reach us anytime",
    icon: Mail,
    href: "mailto:pytgames2026@gmail.com",
  },
  {
    label: "Instagram",
    handle: "@PYTGames",
    sub: "Follow for updates and new puzzles",
    icon: Instagram,
    href: "https://instagram.com/PYTGames",
  },
  {
    label: "TikTok",
    handle: "@pyt.games",
    sub: "Study content and puzzle walkthroughs",
    icon: TikTokIcon,
    href: "https://tiktok.com/@pyt.games",
  },
];

const Contact = () => {
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
            Get in Touch
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Questions, feedback, or just want to say hi — we're here.
          </p>
        </header>

        {/* Contact cards */}
        <div className="space-y-3 animate-fade-in">
          {CONTACTS.map(({ label, handle, sub, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: "#e8f0fb", color: ACCENT }}
              >
                <Icon />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="text-sm font-bold text-foreground truncate">{handle}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
              <span className="ml-auto text-muted-foreground shrink-0">→</span>
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground animate-fade-in">
          We try to respond to all messages within 48 hours.
        </p>
      </div>
    </main>
  );
};

export default Contact;
