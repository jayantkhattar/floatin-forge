import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, BarChart3, Target, Zap, TrendingUp, MessageSquare, Star, CheckCircle2, ArrowUpRight, BookOpen, Film, Palette, PenTool, Play } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const metrics = [
  { value: "₹50Cr+", label: "Revenue Generated" },
  { value: "200+", label: "Brands Scaled" },
  { value: "3.8x", label: "Average ROAS" },
  { value: "40%", label: "Lower CPL" },
];

const tools = [
  { icon: Calculator, title: "Lead Cost Calculator", desc: "Know your true cost per lead across channels", href: "/tools/lead-cost-calculator" },
  { icon: BarChart3, title: "Ads Budget Planner", desc: "Plan your ad spend for maximum ROI", href: "/tools/ads-budget-planner" },
  { icon: Target, title: "Funnel Health Checker", desc: "Diagnose conversion leaks in your funnel", href: "/tools/funnel-health-checker" },
  { icon: MessageSquare, title: "WhatsApp ROI Calculator", desc: "Measure your WhatsApp marketing returns", href: "/tools/whatsapp-roi-calculator" },
  { icon: TrendingUp, title: "ROAS Calculator", desc: "Calculate return on ad spend instantly", href: "/tools/roas-calculator" },
  { icon: Zap, title: "Break-even Calculator", desc: "Find your break-even point for ad campaigns", href: "/tools/break-even-calculator" },
];

const systems = [
  { title: "Lead Generation System", desc: "End-to-end system: ads → landing page → CRM → follow-up → close.", icon: Target },
  { title: "Creative Testing System", desc: "Structured creative iteration with data-backed winners.", icon: BarChart3 },
  { title: "Automation System", desc: "WhatsApp, email, CRM flows that nurture and convert on autopilot.", icon: Zap },
  { title: "E-commerce Growth System", desc: "Catalog ads, retargeting, LTV optimization for online stores.", icon: TrendingUp },
];

const caseStudies = [
  { title: "3.2x ROAS for D2C Fashion Brand", metric: "₹2.4Cr Revenue", category: "E-commerce", desc: "Scaled from ₹3L to ₹25L monthly ad spend while maintaining profitable ROAS." },
  { title: "68% Drop in CPL for EdTech Startup", metric: "₹120 → ₹38 CPL", category: "Lead Gen", desc: "Rebuilt their entire lead funnel with landing pages, WhatsApp automation, and retargeting." },
  { title: "5x Lead Volume for Real Estate Firm", metric: "500+ Leads/Month", category: "Lead Gen", desc: "Systematized lead generation with Google + Meta + CRM integration." },
];

const testimonials = [
  { name: "Rahul S.", role: "CEO, D2C Brand", text: "Floatin didn't just run our ads — they built a system. Our ROAS went from 1.8x to 4.2x in 3 months." },
  { name: "Priya M.", role: "Founder, EdTech", text: "They reduced our CPL by 60% and set up automation that saved our team 20 hours a week." },
  { name: "Amit K.", role: "Director, Real Estate", text: "Finally an agency that thinks in systems, not campaigns. We're getting 5x more qualified leads." },
];

const clientLogos = ["Incenza", "TechCorp", "GrowthLabs", "ScaleUp", "LeadFirst", "ShopWise", "BrandX", "MarketPro"];

const playbooks = [
  { title: "Lead Gen Funnel Blueprint", icon: Target },
  { title: "Meta Ads Creative Playbook", icon: BarChart3 },
  { title: "WhatsApp Automation Guide", icon: MessageSquare },
];

const creativeWork = [
  { title: "Ad Films & Video Editing", icon: Film, desc: "Scroll-stopping video content that drives engagement and conversions." },
  { title: "Brand Identity Design", icon: Palette, desc: "Complete visual identities that make brands unforgettable." },
  { title: "Performance Ad Creatives", icon: PenTool, desc: "Static and motion ads designed to convert — backed by data." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
                <Zap className="h-3.5 w-3.5" /> Systems-Driven Performance Marketing
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1]">
                Stop Running Ads.
                <br />
                <span className="text-gradient-primary">Start Building Growth Systems.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                We build repeatable, measurable marketing systems that generate leads and revenue — not just impressions. Performance marketing powered by data, automation, and strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link to="/audit">
                  <Button variant="hero" size="xl">
                    Get Free Growth Audit <ArrowRight className="ml-1" />
                  </Button>
                </Link>
                <Link to="/tools">
                  <Button variant="hero-outline" size="xl">
                    Explore Free Tools
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Free audit report</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> No commitment</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> 24hr response</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust Strip */}
      <Reveal>
        <section className="py-10 border-b border-border/50">
          <div className="container-wide">
            <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
              Trusted by growing brands across India
            </p>
            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-50">
              {clientLogos.map((logo) => (
                <span key={logo} className="font-heading font-bold text-lg text-muted-foreground/60">{logo}</span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Metrics */}
      <section className="section-padding">
        <StaggerContainer className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <StaggerItem key={m.label}>
                <div className="text-center space-y-1">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{m.value}</div>
                  <div className="text-sm text-muted-foreground">{m.label}</div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Tools Preview */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight space-y-10">
          <Reveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Free Growth Tools</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Use our free calculators to benchmark your marketing performance and find growth opportunities.
              </p>
            </div>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {tools.slice(0, 3).map((tool) => (
              <StaggerItem key={tool.title}>
                <Link to={tool.href} className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/20 block">
                  <tool.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    Try it free <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Reveal>
            <div className="text-center">
              <Link to="/tools">
                <Button variant="outline" size="lg">View All Tools <ArrowRight className="ml-1" /></Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Systems Overview */}
      <section className="section-padding">
        <div className="container-tight space-y-10">
          <Reveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Growth Systems, Not Campaigns</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We don't just run ads. We build end-to-end systems that consistently generate results.
              </p>
            </div>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-5">
            {systems.map((s) => (
              <StaggerItem key={s.title}>
                <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 flex gap-4 h-full">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Reveal>
            <div className="text-center">
              <Link to="/systems">
                <Button variant="outline" size="lg">See How Our Systems Work <ArrowRight className="ml-1" /></Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight space-y-10">
          <Reveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Proof, Not Promises</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Real results from real businesses we've helped scale.
              </p>
            </div>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.title}>
                <Link to="/clients" className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border/50 hover:border-primary/20 block">
                  <div className="p-6 space-y-3">
                    <span className="inline-block text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full">{cs.category}</span>
                    <div className="text-2xl font-heading font-bold text-primary">{cs.metric}</div>
                    <h3 className="font-heading font-semibold">{cs.title}</h3>
                    <p className="text-sm text-muted-foreground">{cs.desc}</p>
                    <span className="text-sm font-medium text-primary flex items-center gap-1 pt-1">
                      See details <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Reveal>
            <div className="text-center">
              <Link to="/clients">
                <Button variant="outline" size="lg">View All Clients <ArrowRight className="ml-1" /></Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-tight space-y-10">
          <Reveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">What Clients Say</h2>
            </div>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 space-y-4 h-full">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">"{t.text}"</p>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Creative Studio Showcase */}
      <section className="section-padding relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/8 blur-3xl" />
        </div>
        <div className="container-tight relative z-10 space-y-10">
          <Reveal>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 bg-background/10 border border-background/10 rounded-full px-4 py-1.5 text-sm font-medium">
                <Play className="h-3.5 w-3.5" /> Creative Studio
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">We Don't Just Market. We Create.</h2>
              <p className="text-background/60 max-w-xl mx-auto">
                Full-service creative studio — video production, brand design, and ad creatives that perform.
              </p>
            </div>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {creativeWork.map((item) => (
              <StaggerItem key={item.title}>
                <Link to="/creative" className="group block bg-background/5 backdrop-blur-sm border border-background/10 rounded-xl p-6 hover:bg-background/10 transition-all duration-300 h-full">
                  <item.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-background/60 mb-4">{item.desc}</p>
                  <span className="text-sm font-medium text-accent flex items-center gap-1">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Reveal>
            <div className="text-center">
              <Link to="/creative">
                <Button variant="hero" size="lg">See Our Creative Work <ArrowRight className="ml-1" /></Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Playbooks Preview */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight space-y-10">
          <Reveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Growth Playbooks & Resources</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Frameworks, guides, and templates to accelerate your marketing.
              </p>
            </div>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {playbooks.map((pb) => (
              <StaggerItem key={pb.title}>
                <Link to="/playbooks" className="group bg-card rounded-xl overflow-hidden shadow-card border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all block">
                  <div className="aspect-[16/9] overflow-hidden bg-primary/5 flex items-center justify-center">
                    <pb.icon className="h-16 w-16 text-primary/30" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{pb.title}</h3>
                    <span className="text-sm font-medium text-primary flex items-center gap-1">
                      Download free <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
