import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { DarkHero } from "@/components/layout/DarkHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { ArrowRight, Target, Users, Zap, Award, Linkedin, Search, Mail, MousePointerClick, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import founderImg from "@/assets/founder-jayant.jpeg";
import clientRecognitionImg from "@/assets/client-recognition.png";

const values = [
  { icon: Target, title: "Systems Over Campaigns", desc: "We build repeatable growth engines, not one-off campaigns that die when you stop spending." },
  { icon: Zap, title: "Speed of Execution", desc: "From strategy to live campaigns in days, not weeks. We move fast because growth doesn't wait." },
  { icon: Users, title: "Transparent Partnership", desc: "Real-time dashboards, weekly reports, direct access. No black boxes, no vanity metrics." },
  { icon: Award, title: "ROI Obsession", desc: "Every rupee you spend should generate measurable returns. If it doesn't, we fix it or cut it." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <DarkHero>
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            We Build Growth Systems for <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">Ambitious Brands</span>
          </h1>
          <p className="text-lg text-background/70">
            Floatin is a systems-driven performance marketing agency, one of the first creative-focused performance agencies in India since 2016. We combine data, automation, and execution to build marketing engines that scale — having managed over ₹25 Cr in ad spend and generated ₹185 Cr+ in revenue for our clients.
          </p>
        </div>
      </DarkHero>

      {/* About the Founder */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <div className="bg-card rounded-2xl shadow-card border border-border/50 p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <img
                  src={founderImg}
                  alt="Jayant Khattar — Founder of Floatin"
                  className="h-40 w-40 rounded-2xl object-cover flex-shrink-0"
                />
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h2 className="text-2xl font-heading font-bold">Jayant Khattar</h2>
                    <p className="text-primary font-medium">Founder, Floatin</p>
                  </div>
                   <p className="text-muted-foreground">
                     A techie and marketing automation geek at heart, I co-founded Chindi Safar and scaled it from 0 to 7 figures handling all marketing for 3 years. That journey led me to build Floatin in 2016 — one of India's first creative-focused performance marketing agencies. Since then, I've helped 200+ brands build scalable growth systems, managing over ₹25 Cr in ad spend and generating ₹185 Cr+ in sales. I believe marketing should be measurable, systematic, and ROI-driven — not guesswork.
                   </p>
                  <a
                    href="https://in.linkedin.com/in/jayantkhattar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button variant="outline" size="lg">
                      <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Client Recognition */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight max-w-3xl mx-auto">
          <Reveal delay={0.15}>
            <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden">
              <img
                src={clientRecognitionImg}
                alt="Floatin team recognized at DSS+ India corporate summit by DuPont Sustainable Solutions"
                className="w-full h-auto object-cover"
              />
              <div className="p-6 md:p-8 text-center space-y-2">
                <h3 className="font-heading font-semibold text-lg">Recognized at DSS+ Corporate Summit</h3>
                <p className="text-sm text-muted-foreground">
                  Our team was publicly recognized by DuPont Sustainable Solutions (dss+) at their India conference for the digital marketing impact we delivered — a testament to the partnerships we build.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="container-tight space-y-10">
          <Reveal>
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-heading font-bold">What We Believe</h2>
            </div>
          </Reveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 flex gap-4 h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* LIT Framework */}
      <section className="section-padding">
        <div className="container-tight max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-8 md:p-12 shadow-elevated">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold mb-5">
                Proprietary Framework
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                The LIT Framework — <span className="text-primary">Ladder of Intensive Trust</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Only ~3% of your audience is ready to buy today. The other 97% need to <em>trust</em> you first. The LIT framework is the system we run inside every WhatsApp + email nurturing engine we build — a deliberate ladder of value-led touchpoints that compounds reciprocity, demonstrates authority, and makes the brand the default choice when the lead is finally ready.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-card rounded-xl p-5 border border-border/50">
                  <div className="text-2xl font-heading font-bold text-primary mb-1">L</div>
                  <h3 className="font-semibold text-sm mb-1">Lead with value</h3>
                  <p className="text-xs text-muted-foreground">Insights, audits, micro-tools — proof you understand their world before you sell.</p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border/50">
                  <div className="text-2xl font-heading font-bold text-primary mb-1">I</div>
                  <h3 className="font-semibold text-sm mb-1">Intensify reciprocity</h3>
                  <p className="text-xs text-muted-foreground">Personalised follow-ups, case stories, and behind-the-scenes — earning a reply, not demanding one.</p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border/50">
                  <div className="text-2xl font-heading font-bold text-primary mb-1">T</div>
                  <h3 className="font-semibold text-sm mb-1">Trigger the ask</h3>
                  <p className="text-xs text-muted-foreground">Once trust is built, the conversion ask feels welcome — not interruptive.</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                Used across every WhatsApp, email, and CRM nurturing workflow we deploy — it's the reason our clients see 3–5x lift in lead-to-customer conversion.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <Reveal>
          <div className="container-tight max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-heading font-bold">Our Focus</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                <h3 className="font-heading font-semibold text-lg mb-2">Lead Generation Businesses</h3>
                <p className="text-sm text-muted-foreground">Services, B2B, real estate, education, healthcare — any business that needs qualified leads.</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                <h3 className="font-heading font-semibold text-lg mb-2">E-commerce Brands</h3>
                <p className="text-sm text-muted-foreground">D2C brands, online stores, and marketplace sellers looking for profitable, scalable growth.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-6">
          <Reveal>
            <h2 className="text-3xl font-heading font-bold">Services We Offer</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Eight services. Plug in one — or stack them into a full growth engine.
            </p>
          </Reveal>
          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { name: "Social Media Marketing", detail: "100+ posts/month across channels", slug: "social-media-marketing" },
              { name: "Performance Marketing", detail: "₹25Cr+ ad spend managed", slug: "performance-marketing" },
              { name: "Creative Support — Shoot + Design", detail: "100+ ads/month in 4 languages", slug: "creative-support" },
              { name: "WhatsApp Marketing", detail: "Powered by LIT framework", slug: "whatsapp-marketing" },
              { name: "Email Marketing", detail: "Up to 40% revenue contribution", slug: "email-marketing" },
              { name: "AI Apps", detail: "Custom AI tools, 2–4 wk builds", slug: "ai-apps" },
              { name: "Influencer Marketing", detail: "1L+ creators via ALA Global", slug: "influencer-marketing" },
              { name: "AI Automation", detail: "20–40 hrs/week saved per role", slug: "ai-automation" },
            ].map((service) => (
              <StaggerItem key={service.name}>
                <Link
                  to={`/services/${service.slug}`}
                  className="block p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all group"
                >
                  <span className="text-sm font-medium block group-hover:text-primary transition-colors">{service.name}</span>
                  <span className="text-xs text-muted-foreground">{service.detail}</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div>
            <Link to="/services" className="inline-block">
              <Button variant="outline" size="lg">View all services <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <Reveal>
          <div className="container-tight text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Let's Build Your Growth System</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/audit">
                <Button variant="hero" size="xl">Get Growth Audit <ArrowRight className="ml-1" /></Button>
              </Link>
              <Link to="/book-call">
                <Button variant="hero-outline" size="xl">Book Strategy Call</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default About;
