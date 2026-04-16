import { featuredClientLogos, type FeaturedClientLogo, type ClientLogoSize } from "@/data/clientShowcase";

const logoImageSizeClasses: Record<ClientLogoSize, string> = {
  wide: "max-h-8 md:max-h-9 max-w-[100px] md:max-w-[116px]",
  square: "max-h-9 md:max-h-10 max-w-9 md:max-w-10",
  standard: "max-h-8 md:max-h-9 max-w-[84px] md:max-w-[98px]",
};

interface ClientLogoStripProps {
  logos?: FeaturedClientLogo[];
  title?: string;
  eagerCount?: number;
}

export const ClientLogoStrip = ({
  logos = featuredClientLogos,
  title = "Brands we've worked with",
  eagerCount = 4,
}: ClientLogoStripProps) => {
  return (
    <div className="space-y-8">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-5">
        {logos.map((item, index) => (
          <div
            key={item.name}
            className="flex h-14 w-[120px] items-center justify-center rounded-2xl border border-border/50 bg-card/80 px-3 shadow-card transition-all duration-300 hover:border-primary/20 hover:opacity-100 opacity-80 md:h-16 md:w-[140px]"
          >
            <img
              src={item.logo}
              alt={item.name}
              className={`object-contain ${logoImageSizeClasses[item.size]}`}
              loading={index < eagerCount ? "eager" : "lazy"}
              fetchPriority={index < eagerCount ? "high" : "low"}
              decoding="async"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};