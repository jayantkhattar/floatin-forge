import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { DarkHero } from "@/components/layout/DarkHero";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { ArrowRight, Play, Palette, Film, PenTool, Image, Sparkles, Monitor, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Production & Editing",
    desc: "Ad films, reels, product videos, testimonial edits, and motion graphics that stop the scroll.",
    tags: ["Ad Films", "Reels", "Motion Graphics", "Product Videos"],
  },
  {
    icon: Palette,
    title: "Brand Identity Design",
    desc: "Logos, brand guidelines, color systems, and visual identity that makes your brand unforgettable.",
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
  {
    icon: PenTool,
    title: "Ad Creative Design",
    desc: "Static ads, carousels, stories, and banners designed to convert — not just look pretty.",
    tags: ["Static Ads", "Carousels", "Stories", "Banners"],
  },
  {
    icon: Monitor,
    title: "Landing Page & Web Design",
    desc: "Conversion-focused landing pages and web experiences that turn visitors into customers.",
    tags: ["Landing Pages", "UI/UX", "Web Design"],
  },
  {
    icon: Image,
    title: "Social Media Creatives",
    desc: "Scroll-stopping content for Instagram, LinkedIn, and beyond — designed for engagement.",
    tags: ["Instagram", "LinkedIn", "Content Design"],
  },
  {
    icon: Sparkles,
    title: "Packaging & Print Design",
    desc: "Product packaging, brochures, and print collateral that elevate your brand presence.",
    tags: ["Packaging", "Brochures", "Print"],
  },
];

const portfolioItems = [
  { title: "D2C Fashion Brand — Ad Campaign", category: "Video", type: "video" },
  { title: "EdTech Brand Refresh", category: "Brand Identity", type: "design" },
  { title: "Real Estate Lead Gen Creatives", category: "Ad Creatives", type: "design" },
  { title: "SaaS Product Explainer", category: "Video", type: "video" },
  { title: "Health & Wellness Packaging", category: "Packaging", type: "design" },
  { title: "E-commerce Social Campaign", category: "Social Media", type: "design" },
  { title: "Fintech App Launch Video", category: "Video", type: "video" },
  { title: "Restaurant Brand Identity", category: "Brand Identity", type: "design" },
];

const stats = [
  { value: "500+", label: "Creatives Delivered" },
  { value: "120+", label: "Videos Produced" },
  { value: "50+", label: "Brands Designed" },
  { value: "3x", label: "Avg. CTR Improvement" },
];

const Creative = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero — dark, cinematic */}
      <DarkHero>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-background/10 border border-background/10 rounded-full px-4 py-1.5 text-sm font-medium">
                <Sparkles className="h-3.5 w-3.5" /> Creative Studio
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1]">
                Performance Meets
                <br />
                <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">
                  Creative Excellence.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-background/70 max-w-2xl">
                We don't just make things look good — we design creatives that convert.
                From ad films to brand identity, every pixel is engineered for performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link to="/audit">
                  <Button variant="hero" size="xl">
                    Get a Creative Audit <ArrowRight className="ml-1" />
                  </Button>
                </Link>
                <a href="https://www.behance.net/floatin" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero-outline" size="xl" className="border-background/20 text-background hover:bg-background/10">
                    View Portfolio on Behance <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </a>
                <Link to="/book-call">
                  <Button variant="hero-outline" size="xl" className="border-background/20 text-background hover:bg-background/10">
                    Book a Call
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-background/50 pt-1">
                Note: Our Behance showcases select work — full portfolio available on request.
              </p>
            </div>
      </DarkHero>

      {/* Stats */}
      <section className="py-12 border-b border-border/50">
        <StaggerContainer className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center space-y-1">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-tight space-y-12">
          <Reveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">What We Create</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Full-spectrum creative services — from concept to delivery — all optimized for performance.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/5 text-primary/80 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight space-y-12">
          <Reveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Selected Work</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A glimpse into the creative work we've delivered for brands across industries.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioItems.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                  i === 0 || i === 5 ? "col-span-2 row-span-2" : ""
                }`}>
                  {/* Placeholder visual */}
                  <div className={`bg-gradient-to-br ${
                    item.type === "video"
                      ? "from-foreground/90 to-foreground/70"
                      : "from-primary/10 to-accent/10"
                  } ${i === 0 || i === 5 ? "aspect-square" : "aspect-[4/3]"} flex items-center justify-center`}>
                    {item.type === "video" ? (
                      <div className="h-14 w-14 rounded-full bg-background/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-background ml-0.5" />
                      </div>
                    ) : (
                      <Image className="h-10 w-10 text-primary/30" />
                    )}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                    <div>
                      <span className="text-xs font-medium text-accent">{item.category}</span>
                      <h4 className="text-sm font-semibold text-background">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal>
            <p className="text-center text-sm text-muted-foreground italic">
              Portfolio images are placeholders — upload your real work to showcase here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-tight space-y-12">
          <Reveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Our Creative Process</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every creative goes through a structured process to ensure it performs.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Brief & Research", desc: "Understand the brand, audience, and campaign goals inside out." },
              { step: "02", title: "Concept & Strategy", desc: "Develop creative concepts backed by performance data and market insights." },
              { step: "03", title: "Design & Produce", desc: "Craft visuals, edit videos, and build assets with precision and speed." },
              { step: "04", title: "Test & Optimize", desc: "A/B test creatives, analyze performance, iterate for better results." },
            ].map((p) => (
              <StaggerItem key={p.step}>
                <div className="text-center space-y-3">
                  <div className="text-4xl font-heading font-bold text-primary/20">{p.step}</div>
                  <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <Reveal>
          <div className="container-tight text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Ready to elevate your brand's creative?
            </h2>
            <p className="text-background/70 max-w-lg mx-auto">
              Let's talk about how our creative studio can transform your marketing assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/audit">
                <Button variant="hero" size="xl">
                  Get Free Creative Audit <ArrowRight className="ml-1" />
                </Button>
              </Link>
              <Link to="/book-call">
                <Button variant="hero-outline" size="xl" className="border-background/20 text-background hover:bg-background/10">
                  Book a Call <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Creative;
