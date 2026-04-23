import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DarkHero } from "@/components/layout/DarkHero";
import { Reveal } from "@/components/ui/reveal";
import { SectionCta } from "@/components/sections/SectionCta";
import { ClientLogoStrip } from "@/components/sections/ClientLogoStrip";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CaseStudyDialog } from "@/components/sections/CaseStudyDialog";
import { ArrowRight, Building2 } from "lucide-react";
import { allClientLogos } from "@/data/clientShowcase";
import {
  clientCases,
  industryLabels,
  serviceLabels,
  type ClientCase,
  type ServiceType,
} from "@/data/caseStudies";

// Platform logos (optimized WebP)
import googleAdLogo from "@/assets/platforms/google_ad.webp";
import metaAdLogo from "@/assets/platforms/meta_ad.webp";
import instaAdLogo from "@/assets/platforms/insta_ads.webp";
import linkedinAdLogo from "@/assets/platforms/linkedin_ad.png";
import youtubeAdLogo from "@/assets/platforms/youtube_ad.webp";
import pinterestAdLogo from "@/assets/platforms/pinterest_ad.webp";
import snapAdLogo from "@/assets/platforms/snap_ads.webp";
import taboolaLogo from "@/assets/platforms/taboola.webp";
import spotifyAdLogo from "@/assets/platforms/spotify-ads.png";

const platformLogos = [
  { src: googleAdLogo, alt: "Google Ads" },
  { src: metaAdLogo, alt: "Meta Ads" },
  { src: instaAdLogo, alt: "Instagram Ads" },
  { src: linkedinAdLogo, alt: "LinkedIn Ads" },
  { src: youtubeAdLogo, alt: "YouTube Ads" },
  { src: pinterestAdLogo, alt: "Pinterest Ads" },
  { src: snapAdLogo, alt: "Snapchat Ads" },
  { src: spotifyAdLogo, alt: "Spotify Advertising" },
  { src: taboolaLogo, alt: "Taboola" },
];

const Clients = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>("all");
  const [activeService, setActiveService] = useState<ServiceType | "all">("all");
  const [selectedCase, setSelectedCase] = useState<ClientCase | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSelect = (c: ClientCase) => {
    setSelectedCase(c);
    setDialogOpen(true);
  };


  const usedIndustries = useMemo(
    () => Array.from(new Set(clientCases.map((c) => c.industry))),
    [],
  );
  const usedServices = useMemo<ServiceType[]>(
    () => ["performance", "influencer", "seo", "social-media", "web-dev", "automation"],
    [],
  );

  const filtered = useMemo(() => {
    return clientCases.filter((c) => {
      const matchIndustry = activeIndustry === "all" || c.industry === activeIndustry;
      const matchService = activeService === "all" || c.services.includes(activeService);
      return matchIndustry && matchService;
    });
  }, [activeIndustry, activeService]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Case Studies — Indian Brands We've Scaled | Floatin"
        description="Real case studies from Floatin: D2C, real estate, hospitality, and B2B brands across India. Numbers, methodology, and outcomes — no fluff."
        path="/clients"
        keywords={["marketing case studies India", "performance marketing results", "D2C case studies", "lead generation case studies"]}
      />
      <Navbar />

      <DarkHero>
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-background/10 border border-background/10 rounded-full px-4 py-1.5 text-sm font-medium">
            <Building2 className="h-3.5 w-3.5" /> Our Work
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Brands We've{" "}
            <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">
              Helped Scale
            </span>
          </h1>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            From D2C startups to enterprise brands like dss+ (DuPont) and Starbucks — explore real
            results by industry or service.
          </p>
        </div>
      </DarkHero>

      {/* All client logos strip */}
      <section className="py-12 border-b border-border/50 bg-surface-warm">
        <div className="container-wide">
          <ClientLogoStrip
            logos={allClientLogos}
            title="Brands we've worked with"
            eagerCount={8}
          />
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-border/50 bg-background py-6 md:py-8">
        <div className="container-tight space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mr-2">
              Service:
            </span>
            <button
              onClick={() => setActiveService("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                activeService === "all"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/50 border-border/50 hover:bg-muted"
              }`}
            >
              All
            </button>
            {usedServices.map((s) => (
              <button
                key={s}
                onClick={() => setActiveService(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activeService === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/50 border-border/50 hover:bg-muted"
                }`}
              >
                {serviceLabels[s]}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mr-2">
              Industry:
            </span>
            <button
              onClick={() => setActiveIndustry("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                activeIndustry === "all"
                  ? "bg-foreground text-background border-foreground"
                  : "bg-muted/50 border-border/50 hover:bg-muted"
              }`}
            >
              All
            </button>
            {usedIndustries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activeIndustry === ind
                    ? "bg-foreground text-background border-foreground"
                    : "bg-muted/50 border-border/50 hover:bg-muted"
                }`}
              >
                {industryLabels[ind] || ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine-Hero case study grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {filtered.length} of {clientCases.length} case studies
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((client, i) => (
              <CaseStudyCard
                key={client.slug}
                client={client}
                eager={i < 3}
                onSelect={handleSelect}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg font-heading font-semibold">
                No case studies match your filters
              </p>
              <p className="text-sm mt-2">
                Try adjusting the service or industry filter above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 bg-surface-warm border-t border-border/50">
        <div className="container-tight">
          <Reveal>
            <div className="text-center space-y-6">
              <h3 className="text-xl font-heading font-bold">Platforms We Advertise On</h3>
              <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
                {platformLogos.map((platform) => (
                  <img
                    key={platform.alt}
                    src={platform.src}
                    alt={platform.alt}
                    className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <SectionCta
          title="Want Results Like These?"
          description="We build performance systems, not templates. Let's discuss what growth looks like for your brand."
          descriptionClassName="text-background/70"
          maxWidthClassName="max-w-xl"
          actions={[
            { label: "Book a Strategy Call", href: "/book-call" },
            { label: "Get a Growth Audit", href: "/audit", variant: "hero-outline", icon: null },
          ]}
        >
          <Reveal>
          </Reveal>
        </SectionCta>
      </section>

      <CaseStudyDialog
        client={selectedCase}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      <Footer />
    </div>
  );
};

export default Clients;
