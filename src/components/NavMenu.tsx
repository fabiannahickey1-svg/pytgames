import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Mail } from "lucide-react";

const LINKS = [
  { label: "Home",       path: "/",        icon: Home },
  { label: "About Us",   path: "/about",   icon: Info },
  { label: "Contact",    path: "/contact", icon: Mail },
];

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <div ref={ref} className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex items-center justify-center w-10 h-10 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-150 active:scale-95"
      >
        {open ? (
          <X className="h-5 w-5 text-foreground" />
        ) : (
          <Menu className="h-5 w-5 text-foreground" />
        )}
      </button>

      {open && (
        <div className="absolute top-12 right-0 w-48 rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-fade-in">
          {LINKS.map(({ label, path, icon: Icon }) => {
            const active = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted active:bg-muted/80 text-left"
                style={active ? { color: "#0F4D92", fontWeight: 700 } : {}}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavMenu;
