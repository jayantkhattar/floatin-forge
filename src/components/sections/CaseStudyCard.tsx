import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  type ClientCase,
  industryLabels,
  serviceLabels,
} from "@/data/caseStudies";

/**
 * Magazine-Hero case study card.
 * - Full-bleed hero image (or logo-on-gradient fallback) with dark gradient.
 * - Client logo + name overlaid top.
 * - Big metric overlaid bottom-left, services chips, short desc, CTA.
 */
interface CaseStudyCardProps {
  client: ClientCase;
  /** Treat above-the-fold cards as eager-load (e.g., first 3 on home). */
  eager?: boolean;
}

// Deterministic gradient palette per case so fallback hero feels branded
const gradientPalette = [
  "from-primary/85 via-primary/70 to-foreground",
  "from-accent/80 via-accent/60 to-foreground",
  "from-emerald-500/70 via-emerald-700/60 to-foreground",
  "from-violet-500/70 via-violet-700/60 to-foreground",
  "from-sky-500/70 via-sky-700/60 to-foreground",
  "from-amber-500/70 via-amber-700/60 to-foreground",
  "from-rose-500/70 via-rose-700/60 to-foreground",
];

const hashIndex = (s: string, mod: number) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h) % mod;
};

export const CaseStudyCard = ({ client, eager = false }: CaseStudyCardProps) => {
  const fallbackGradient =
    gradientPalette[hashIndex(client.slug, gradientPalette.length)];

  const loadingAttr = eager ? "eager" : "lazy";
  const fetchPriorityAttr = eager ? "high" : "low";

  return (
    <Link
      to="/clients"
      aria-label={`View ${client.name} case study`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-elevated transition-transform duration-500 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Hero image OR branded gradient fallback */}
      {client.heroImage ? (
        <img
          src={client.heroImage}
          alt={`${client.name} campaign`}
          loading={loadingAttr}
          fetchPriority={fetchPriorityAttr}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
      ) : (
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`}
        >
          {client.logo && (
            <div className="absolute inset-0 flex items-center justify-center p-12 opacity-25 transition-opacity duration-500 group-hover:opacity-40">
              <img
                src={client.logo}
                alt=""
                aria-hidden="true"
                loading={loadingAttr}
                decoding="async"
                className="max-h-40 w-auto object-contain brightness-0 invert"
                draggable={false}
              />
            </div>
          )}
        </div>
      )}

      {/* Dark gradient overlay for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-foreground/15"
      />

      {/* Top: logo chip + industry tag */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 p-5 md:p-6">
        {client.logo ? (
          <div className="flex h-11 w-auto min-w-[44px] max-w-[140px] items-center justify-center rounded-xl bg-background/95 px-2.5 py-1.5 shadow-card backdrop-blur-sm">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              loading={loadingAttr}
              decoding="async"
              className="max-h-7 w-auto max-w-[120px] object-contain"
              draggable={false}
            />
          </div>
        ) : (
          <div className="rounded-xl bg-background/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-foreground shadow-card backdrop-blur-sm">
            {client.name.split(" ")[0]}
          </div>
        )}
        <span className="rounded-full bg-background/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-background backdrop-blur-md">
          {industryLabels[client.industry] ?? client.industry}
        </span>
      </div>

      {/* Bottom: name, metric, services, CTA */}
      <div className="absolute inset-x-0 bottom-0 z-10 space-y-4 p-5 md:p-6">
        <div className="space-y-1">
          <h3 className="font-heading text-xl font-bold leading-tight text-background md:text-2xl">
            {client.name}
          </h3>
          <p className="line-clamp-2 text-sm text-background/75">
            {client.desc}
          </p>
        </div>

        {!client.comingSoon && client.metric && (
          <div className="flex items-baseline gap-2 border-t border-background/15 pt-3">
            <span className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              {client.metric}
            </span>
            <span className="text-xs font-medium text-background/80">
              {client.result}
            </span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {client.services.slice(0, 2).map((s) => (
              <span
                key={s}
                className="rounded-full border border-background/20 bg-background/10 px-2.5 py-0.5 text-[10px] font-semibold text-background backdrop-blur-md"
              >
                {serviceLabels[s]}
              </span>
            ))}
            {client.services.length > 2 && (
              <span className="rounded-full border border-background/20 bg-background/10 px-2.5 py-0.5 text-[10px] font-semibold text-background backdrop-blur-md">
                +{client.services.length - 2}
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-background transition-transform duration-300 group-hover:translate-x-0.5">
            View case study <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        {client.comingSoon && (
          <span className="inline-block rounded-full border border-background/25 bg-background/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-background/80 backdrop-blur-md">
            Case study coming soon
          </span>
        )}
      </div>
    </Link>
  );
};
