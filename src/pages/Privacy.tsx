import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ACCENT = "#0F4D92";

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-card shadow-sm p-6">
    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">{label}</p>
    <div className="text-sm text-foreground leading-relaxed space-y-2">{children}</div>
  </div>
);

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-md">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

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
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: May 1, 2026</p>
        </header>

        <div className="animate-fade-in space-y-4">
          <Section label="The short version">
            <p>
              PYT Games does not collect your name, email, or any account information. We use Google Analytics
              to understand how students use the site — things like which puzzles are popular and how long
              games take. That's it.
            </p>
          </Section>

          <Section label="What we collect">
            <p>When you visit pytgames.com, Google Analytics automatically collects:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
              <li>Pages visited and time spent</li>
              <li>General location (city/region, derived from IP address)</li>
              <li>Device type and browser</li>
              <li>How you arrived (direct, Google, a teacher's link, etc.)</li>
              <li>In-game events: which puzzles you started, completed, or abandoned</li>
            </ul>
            <p className="mt-2">
              We do not collect your name, email address, student ID, or any information that identifies
              you personally.
            </p>
          </Section>

          <Section label="What we don't collect">
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>No accounts — you never sign up or log in</li>
              <li>No names or email addresses</li>
              <li>No payment information</li>
              <li>No precise GPS location</li>
              <li>No information shared with third parties for advertising</li>
            </ul>
          </Section>

          <Section label="Google Analytics">
            <p>
              We use Google Analytics 4 (GA4) to understand site usage. Google processes analytics data
              on our behalf under their own privacy policy. Data is retained for 26 months by default.
            </p>
            <p className="mt-2">
              To opt out of Google Analytics tracking across all sites, install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: ACCENT }}
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              . You can also disable analytics cookies in your browser settings.
            </p>
          </Section>

          <Section label="Students and children">
            <p>
              PYT Games is designed for high school students (ages 15 and up) preparing for AP exams.
              We do not knowingly collect personal information from children under 13. If you believe a
              child under 13 has used this site and you have concerns, please contact us.
            </p>
          </Section>

          <Section label="Data stored on your device">
            <p>
              Your puzzle progress (which units you've completed) is saved locally in your browser's
              localStorage. This data never leaves your device and is not sent to us. Clearing your
              browser data removes it.
            </p>
          </Section>

          <Section label="Contact">
            <p>
              Questions about this policy? Reach us through our{" "}
              <button
                onClick={() => navigate("/contact")}
                className="underline"
                style={{ color: ACCENT }}
              >
                Contact page
              </button>
              .
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
