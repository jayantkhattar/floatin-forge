import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { SEO, breadcrumbJsonLd } from "@/components/SEO";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DarkHero } from "@/components/layout/DarkHero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getServiceBySlug, servicesData } from "@/data/servicesData";
import { ClientLogoMarquee } from "@/components/sections/ClientLogoMarquee";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CaseStudyDialog } from "@/components/sections/CaseStudyDialog";
import { clientCases, type ClientCase, type ServiceType } from "@/data/caseStudies";

const serviceCaseMap: Record<string, ServiceType[]> = {
  "social-media-marketing": ["social-media", "meta-ads"],
  "performance-marketing": ["performance", "meta-ads"],
  "creative-support": ["social-media", "performance", "meta-ads"],
  "whatsapp-marketing": ["automation", "performance"],
  "email-marketing": ["automation", "performance"],
  "ai-apps": ["web-dev", "automation"],
  "influencer-marketing": ["influencer"],
  "ai-automation": ["automation"],
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const [selectedCase, setSelectedCase] = useState<ClientCase | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const related = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);
  const matchingServiceTypes = serviceCaseMap[service.slug] ?? [];
  const relatedCases = clientCases
    .filter((c) => c.services.some((s) => matchingServiceTypes.includes(s)))
    .slice(0, 3);

  const handleSelectCase = (client: ClientCase) => {
    setSelectedCase(client);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={`${service.name} — ${service.short} | Floatin`}
        description={service.description.slice(0, 160)}
        path={`/services/${service.slug}`}
        keywords={[service.name.toLowerCase(), "performance marketing", "marketing agency India", ...service.idealFor.map(i => i.toLowerCase())]}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: { "@type": "Organization", name: "Floatin", url: "https://floatin.in" },
            areaServed: "IN",
            serviceType: service.short,
          },
        ]}
      />
      <Navbar />

      <DarkHero>
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-background/10 border border-background/10 rounded-full px-4 py-1.5 text-sm font-medium">
            <Icon className="h-3.5 w-3.5" /> {service.short}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            {service.name}
          </h1>
          <p className="text-lg text-background/70">{service.tagline}</p>
          {service.metric && (
            <div className="inline-flex items-baseline gap-2 pt-2">
              <span className="text-3xl font-heading font-bold bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">
                {service.metric.value}
              </span>
              <span className="text-sm text-background/60">{service.metric.label}</span>
            </div>
          )}
        </div>
      </DarkHero>

      <section className="border-b border-border/50 bg-surface-warm py-10 md:py-12">
        <div className="container-wide">
          <ClientLogoMarquee />
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl mx-auto">
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/80">
              {service.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What you get */}
      <section className="pb-16 md:pb-24">
        <div className="container-tight max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">What you get</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {service.whatYouGet.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-card border border-border/50 rounded-lg p-4">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/85">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10 text-center">
              How we deliver
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {service.process.map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-card h-full">
                  <div className="text-xs font-mono text-primary mb-2">{step.step}</div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Ideal for</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {service.idealFor.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-primary/5 border border-primary/15 rounded-full text-sm text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {relatedCases.length > 0 && (
        <section className="section-padding bg-surface-warm">
          <div className="container-wide">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">
                Relevant case studies
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
                Pulled from our live case study library, so this updates as new work is added.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
              {relatedCases.map((client, i) => (
                <CaseStudyCard
                  key={client.slug}
                  client={client}
                  eager={i === 0}
                  onSelect={handleSelectCase}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pb-20">
        <div className="container-tight max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to plug this in?
          </h2>
          <p className="text-muted-foreground">
            Book a 30-min strategy call or get a free audit — we'll tell you if this is the right next move.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/audit">
              <Button variant="hero" size="xl">
                Get Free Audit <ArrowRight className="ml-1" />
              </Button>
            </Link>
            <Link to="/book-call">
              <Button variant="outline" size="xl">Book Strategy Call</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
            Stack with
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-card rounded-xl p-5 border border-border/50 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all"
              >
                <s.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{s.tagline}</p>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
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

export default ServiceDetail;
