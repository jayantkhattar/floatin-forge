import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Target, BarChart3, Zap, TrendingUp, Layers } from "lucide-react";

import systemLeadgen from "@/assets/system-leadgen.jpg";
import systemCreative from "@/assets/system-creative.jpg";
import systemAutomation from "@/assets/system-automation.jpg";
import systemEcommerce from "@/assets/system-ecommerce.jpg";

const systems = [
  {
    title: "Lead Generation System",
    icon: Target,
    image: systemLeadgen,
    desc: "A complete end-to-end system that turns ad spend into qualified leads and booked calls.",
    steps: ["Targeted Ads (Google + Meta)", "High-Converting Landing Pages", "Lead Capture + CRM Integration", "WhatsApp + Email Nurturing", "Qualification + Call Booking"],
    output: "Qualified leads on autopilot",
  },
  {
    title: "Creative Testing System",
    icon: BarChart3,
    image: systemCreative,
    desc: "Data-backed creative iteration that finds winning ads faster and scales them profitably.",
    steps: ["Creative Brief + Hypothesis", "Structured A/B Testing", "Performance Analysis", "Winner Scaling", "New Iteration Cycle"],
    output: "Consistently winning creatives",
  },
  {
    title: "Automation System",
    icon: Zap,
    image: systemAutomation,
    desc: "WhatsApp, email, and CRM automation that nurtures leads and handles follow-ups 24/7.",
    steps: ["Lead Trigger Events", "WhatsApp Auto-Responses", "Email Drip Sequences", "CRM Status Updates", "Sales Team Alerts"],
    output: "20+ hrs/week saved",
  },
  {
    title: "E-commerce Growth System",
    icon: TrendingUp,
    image: systemEcommerce,
    desc: "Full-funnel e-commerce strategy covering acquisition, retention, and LTV optimization.",
    steps: ["Catalog + Dynamic Ads", "Retargeting Sequences", "Post-Purchase Flows", "LTV Optimization", "Revenue Attribution"],
    output: "Profitable, scalable growth",
  },
];

const Systems = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
            <Layers className="h-3.5 w-3.5" /> Our Systems
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Systems That Scale</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't run campaigns. We build repeatable growth systems with clear inputs, processes, and outputs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight space-y-16">
          {systems.map((sys, i) => (
            <div key={sys.title} className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
              {/* System Diagram */}
              <div className="aspect-[3/2] md:aspect-[3/1] overflow-hidden bg-muted">
                <img src={sys.image} alt={sys.title} loading="lazy" className="w-full h-full object-cover" />
              </div>

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

                {/* Process Flow */}
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
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to install a growth system?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Let's audit your current setup and design a system that fits your business.
          </p>
          <Link to="/audit">
            <Button variant="hero" size="xl">Get Free Growth Audit <ArrowRight className="ml-1" /></Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Systems;
