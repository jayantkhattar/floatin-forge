import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { ArrowRight, ArrowDown, Target, BarChart3, Zap, TrendingUp, Layers, Film, Search, Mail, MousePointerClick, Smartphone } from "lucide-react";

const systems = [
  {
    title: "Lead Generation System",
    icon: Target,
    desc: "A complete end-to-end system that turns ad spend into qualified leads and booked calls.",
    steps: ["Targeted Ads (Google + Meta)", "High-Converting Landing Pages", "Lead Capture + CRM Integration", "WhatsApp + Email Nurturing", "Qualification + Call Booking"],
    output: "Qualified leads on autopilot",
  },
  {
    title: "Creative Testing System",
    icon: BarChart3,
    desc: "Data-backed creative iteration that finds winning ads faster and scales them profitably. We deliver 100+ ads every month in 4 different languages.",
    steps: ["Creative Brief + Hypothesis", "Structured A/B Testing", "Performance Analysis", "Winner Scaling", "New Iteration Cycle"],
    output: "Consistently winning creatives",
  },
  {
    title: "Automation System",
    icon: Zap,
    desc: "WhatsApp, email, and CRM automation using CleverTap, Encharge, and HubSpot that nurtures leads and handles follow-ups 24/7.",
    steps: ["Lead Trigger Events", "WhatsApp Auto-Responses", "Email Drip Sequences", "CRM Status Updates", "Sales Team Alerts"],
    output: "20+ hrs/week saved",
  },
  {
    title: "E-commerce Growth System",
    icon: TrendingUp,
    desc: "Full-funnel e-commerce strategy with a 130-point CRO checklist covering acquisition, retention, and LTV optimization.",
    steps: ["Catalog + Dynamic Ads", "Retargeting Sequences", "130-Point CRO Audit", "Post-Purchase Flows", "Revenue Attribution"],
    output: "Profitable, scalable growth",
  },
  {
    title: "Creative Studio System",
    icon: Film,
    desc: "End-to-end creative production — from concept to delivery — optimized for ad performance.",
    steps: ["Creative Brief + Research", "Concept & Storyboarding", "Design / Video Production", "Performance Review", "Iteration & Scaling"],
    output: "High-performing creatives on demand",
  },
  {
    title: "SEO & Organic Growth System",
    icon: Search,
    desc: "Comprehensive SEO strategy that's driven 172 first-page rankings and ₹5.43 Cr in organic revenue with 92% client retention.",
    steps: ["Technical SEO Audit", "On-Page Optimization", "Content Strategy", "Link Building", "Rank Tracking + Iteration"],
    output: "Sustainable organic traffic",
  },
  {
    title: "Email Marketing System",
    icon: Mail,
    desc: "Email marketing that can contribute up to 40% of total revenue. Full automation, sequences, and workflows to maximize ROI.",
    steps: ["List Segmentation", "Automation Setup", "Drip Sequences", "A/B Testing", "Revenue Attribution"],
    output: "Up to 40% revenue contribution",
  },
  {
    title: "Magic Lantern Technique",
    icon: MousePointerClick,
    desc: "Our proprietary lead nurturing method that targets the 97% of prospects who aren't ready to buy yet — moving them up the value ladder through content-led funnels.",
    steps: ["Awareness Content", "Problem Education", "Solution Showcase", "Trust Building", "Conversion"],
    output: "10x ROAS achieved for clients",
  },
];

const Systems = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding bg-surface-warm">
        <Reveal>
          <div className="container-tight text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
              <Layers className="h-3.5 w-3.5" /> Our Systems
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Systems That Scale</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't run campaigns. We build repeatable growth systems with clear inputs, processes, and outputs.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-padding">
        <div className="container-tight space-y-16">
          {systems.map((sys, i) => (
            <Reveal key={sys.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="h-14 w-14 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <sys.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold">{sys.title}</h2>
                      <p className="text-muted-foreground mt-1">{sys.desc}</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-stretch gap-3">
                    {sys.steps.map((step, j) => (
                      <div key={j} className="flex-1 flex flex-col items-center">
                        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center w-full">
                          <div className="text-xs font-medium text-primary mb-1">Step {j + 1}</div>
                          <div className="text-sm font-medium">{step}</div>
                        </div>
                        {j < sys.steps.length - 1 && (
                          <div className="hidden md:block text-primary my-auto px-2">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        )}
                        {j < sys.steps.length - 1 && (
                          <div className="md:hidden py-1">
                            <ArrowDown className="h-4 w-4 text-primary mx-auto" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/10 text-center">
                    <span className="text-sm font-medium text-accent">Output: </span>
                    <span className="text-sm font-semibold">{sys.output}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <Reveal>
          <div className="container-tight text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to install a growth system?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Let's audit your current setup and design a system that fits your business.
            </p>
            <Link to="/audit">
              <Button variant="hero" size="xl">Get Free Growth Audit <ArrowRight className="ml-1" /></Button>
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Systems;
