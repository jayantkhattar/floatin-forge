import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollToHash = (hash: string) => {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const handleHashClick =
  (href: string, currentPath: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;
    const path = href.slice(0, hashIndex) || currentPath;
    const hash = href.slice(hashIndex);
    if (path === currentPath) {
      e.preventDefault();
      scrollToHash(hash);
    }
  };

interface InlineCtaBarProps {
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "light" | "dark";
}

/**
 * Slim, repeatable CTA strip to remind visitors of the next action
 * across long landing pages. Use between content sections.
 */
export const InlineCtaBar = ({
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "light",
}: InlineCtaBarProps) => {
  const isDark = variant === "dark";
  return (
    <section className={`py-8 ${isDark ? "bg-foreground text-background" : "bg-primary/5 border-y border-primary/10"}`}>
      <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className={`font-heading font-semibold text-base md:text-lg ${isDark ? "text-background" : ""}`}>
          {text}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to={primaryHref}>
            <Button variant="hero" size="lg">
              {primaryLabel} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link to={secondaryHref}>
              <Button
                variant={isDark ? "hero-outline" : "outline"}
                size="lg"
                className={isDark ? "border-background/30 text-background hover:bg-background/10" : ""}
              >
                {secondaryLabel}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
