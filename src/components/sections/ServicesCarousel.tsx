import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";

/**
 * Horizontal snap carousel of all services with auto-advance.
 * Pauses on hover/touch, resumes after 4s of idle.
 */
export const ServicesCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const idxRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      const cards = track.querySelectorAll<HTMLElement>("[data-service-card]");
      if (!cards.length) return;
      idxRef.current = (idxRef.current + 1) % cards.length;
      const target = cards[idxRef.current];
      track.scrollTo({ left: target.offsetLeft - 16, behavior: "smooth" });
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
      onTouchEnd={() => {
        // resume after 4s
        window.setTimeout(() => (pausedRef.current = false), 4000);
      }}
    >
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {servicesData.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            data-service-card
            className="group relative flex-shrink-0 snap-start w-[260px] md:w-[300px] bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {s.name}
            </h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
              {s.short}
            </p>
            <p className="text-sm text-muted-foreground flex-1 line-clamp-3">
              {s.tagline}
            </p>
            {s.metric && (
              <div className="mt-4 pt-3 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">{s.metric.value}</span>{" "}
                  {s.metric.label}
                </p>
              </div>
            )}
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Explore <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-2">
        ← Drag or hover to pause · auto-rotates →
      </p>
    </div>
  );
};
