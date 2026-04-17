import googlePartner from "@/assets/partners/google_partner.png";
import metaPartner from "@/assets/partners/meta_partner.png";
import shopifyPartner from "@/assets/partners/shopify_partner.png";

const badges = [
  { src: googlePartner, alt: "Google Partner" },
  { src: metaPartner, alt: "Meta Business Partner" },
  { src: shopifyPartner, alt: "Shopify Partner" },
];

const maskStyle = {
  WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
};

/** Small scrolling strip of certified partner / award badges. */
export const PartnerBadgesMarquee = () => {
  // duplicate enough times for a long, smooth strip
  const items = [...badges, ...badges, ...badges, ...badges, ...badges, ...badges];
  return (
    <div className="space-y-4">
      <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        Certified Partner of
      </p>
      <div className="overflow-hidden" style={maskStyle}>
        <div
          className="flex w-max items-center gap-12 py-1 will-change-transform animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ animationDuration: "26s" }}
        >
          {items.map((b, i) => (
            <img
              key={`${b.alt}-${i}`}
              src={b.src}
              alt={b.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
