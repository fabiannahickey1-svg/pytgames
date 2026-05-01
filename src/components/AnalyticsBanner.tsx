import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "pyt-analytics-notice-dismissed";

const AnalyticsBanner = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm px-4 py-3 shadow-lg">
      <div className="mx-auto max-w-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground leading-relaxed">
          We use Google Analytics to understand how students use PYT Games. No personal data is collected.{" "}
          <button
            onClick={() => navigate("/privacy")}
            className="underline hover:text-foreground transition-colors"
          >
            Privacy Policy
          </button>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 rounded-lg bg-foreground px-4 py-1.5 text-xs font-semibold text-background hover:opacity-80 transition-opacity"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default AnalyticsBanner;
