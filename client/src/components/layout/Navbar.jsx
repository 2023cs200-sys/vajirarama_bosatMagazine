import { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import BosatMark from "@/components/common/BosatMark";
import Container from "@/components/common/Container";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Archive", path: "/archive" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <BosatMark />
          <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
            BOSAT
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="text-sm font-medium text-foreground/70 transition hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:bg-primary md:inline-flex">
            Subscribe
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>
      {menuOpen && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <button className="mt-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground">
              Subscribe
            </button>
          </Container>
        </div>
      )}
    </header>
  );
}
