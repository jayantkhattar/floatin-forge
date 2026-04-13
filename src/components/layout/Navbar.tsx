import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import floatinLogo from "@/assets/floatin-logo.png";

const navLinks = [
  { label: "Tools", href: "/tools" },
  { label: "Systems", href: "/systems" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Playbooks", href: "/playbooks" },
  { label: "About", href: "/about" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-wide mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <img src={floatinLogo} alt="Floatin" className="h-8" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/book-call">
            <Button variant="ghost" size="sm">
              Book Call
            </Button>
          </Link>
          <Link to="/audit">
            <Button variant="hero" size="default">
              Get Free Audit <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-muted/50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 rounded-md text-sm font-medium text-foreground hover:bg-muted/50"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <Link to="/book-call" onClick={() => setMobileOpen(false)}>
              <Button variant="hero-outline" className="w-full">Book Call</Button>
            </Link>
            <Link to="/audit" onClick={() => setMobileOpen(false)}>
              <Button variant="hero" className="w-full">
                Get Free Audit <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
