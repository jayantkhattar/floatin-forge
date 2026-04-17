import { allClientLogos, type FeaturedClientLogo, type ClientLogoSize } from "@/data/clientShowcase";

const logoImageSizeClasses: Record<ClientLogoSize, string> = {
  wide: "max-h-9 md:max-h-10 max-w-[110px] md:max-w-[130px]",
  square: "max-h-10 md:max-h-12 max-w-10 md:max-w-12",
  standard: "max-h-9 md:max-h-10 max-w-[92px] md:max-w-[108px]",
};

const maskStyle = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
};

const LogoTile = ({ item }: { item: FeaturedClientLogo }) => (
  <div className="flex h-16 w-[150px] flex-shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-card/90 px-4 shadow-card md:h-20 md:w-[170px]">
    <img
      src={item.logo}
      alt={item.name}
      className={`object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 ${logoImageSizeClasses[item.size]}`}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  </div>
);

const Row = ({
  logos,
  duration,
  reverse = false,
}: {
  logos: FeaturedClientLogo[];
  duration: number;
  reverse?: boolean;
}) => {
  const doubled = [...logos, ...logos];
  return (
    <div className="overflow-hidden" style={maskStyle}>
      <div
        className="flex w-max gap-4 py-1 will-change-transform animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <LogoTile key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
};

interface ClientLogoMarqueeProps {
  title?: string;
}

/** 3-row infinite marquee with varied speeds — uses every logo we have. */
export const ClientLogoMarquee = ({
  title = "Trusted by 200+ brands across India & beyond",
}: ClientLogoMarqueeProps) => {
  const logos = allClientLogos;
  const third = Math.ceil(logos.length / 3);
  const row1 = logos.slice(0, third);
  const row2 = logos.slice(third, third * 2);
  const row3 = logos.slice(third * 2);

  return (
    <div className="space-y-6">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <div className="space-y-3">
        <Row logos={row1} duration={42} />
        <Row logos={row2} duration={32} reverse />
        <Row logos={row3} duration={50} />
      </div>
    </div>
  );
};
