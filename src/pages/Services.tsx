import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DarkHero } from "@/components/layout/DarkHero";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { ClientLogoMarquee } from "@/components/sections/ClientLogoMarquee";

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Marketing Services — Paid Ads, Lead Gen, WhatsApp | Floatin"
        description="Full-stack marketing services for Indian brands: performance marketing, social, WhatsApp, email, creative, AI automation, and influencer marketing."
        path="/services"
        keywords={["marketing services India", "performance marketing", "WhatsApp marketing", "creative production", "AI automation"]}
      />
      <Navbar />

      <DarkHero>
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-background/10 border border-background/10 rounded-full px-4 py-1.5 text-sm font-medium">
            <Sparkles className="h-3.5 w-3.5" /> What We Do
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Services that{" "}
            <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">
              compound growth
            </span>
          </h1>
          <p className="text-lg text-background/70">
            Eight tightly-integrated services. Plug in one, or stack them into a full growth system. Every engagement is built on our proprietary LIT framework — turning cold attention into trusted customers.
          </p>
        </div>
      </DarkHero>

      <section className="border-b border-border/50 bg-surface-warm py-10 md:py-12">
        <div className="container-wide">
          <ClientLogoMarquee />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/20 flex flex-col"
              >
                <s.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-1 group-hover:text-primary transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">
                  {s.short}
                </p>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{s.tagline}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  {s.metric ? (
                    <span className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">{s.metric.value}</span>{" "}
                      {s.metric.label}
                    </span>
                  ) : <span />}
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Not sure where to start?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Get a free growth audit. We'll review your funnel and recommend exactly which services will move the needle fastest.
          </p>
          <Link to="/audit">
            <Button variant="hero" size="xl">
              Get Growth Audit <ArrowRight className="ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
