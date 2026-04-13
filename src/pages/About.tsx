import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { ArrowRight, Target, Users, Zap, Award, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import founderImg from "@/assets/founder-jayant.jpeg";

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

      <section className="section-padding bg-surface-warm">
        <Reveal>
          <div className="container-tight max-w-3xl mx-auto text-center space-y-5">
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              We Build Growth Systems for Ambitious Brands
            </h1>
            <p className="text-lg text-muted-foreground">
              Floatin is a systems-driven performance marketing agency. We combine data, automation, and execution to build marketing engines that scale — not just campaigns that run.
            </p>
          </div>
        </Reveal>
      </section>

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
                    With years of experience in performance marketing, I've helped 200+ brands build scalable growth systems. I believe marketing should be measurable, systematic, and ROI-driven — not guesswork. Floatin was built to bring that philosophy to every business we work with.
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
          </Reveal>
          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              "Performance Marketing (Google + Meta)",
              "Lead Generation Systems",
              "E-commerce Growth Systems",
              "Automation (WhatsApp, CRM, Email)",
              "Landing Page Design & Optimization",
              "Creative Strategy & Testing",
            ].map((service) => (
              <StaggerItem key={service}>
                <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                  <span className="text-sm font-medium">{service}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding">
        <Reveal>
          <div className="container-tight text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Let's Build Your Growth System</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/audit">
                <Button variant="hero" size="xl">Get Free Growth Audit <ArrowRight className="ml-1" /></Button>
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
