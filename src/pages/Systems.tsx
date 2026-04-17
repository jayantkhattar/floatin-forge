import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DarkHero } from "@/components/layout/DarkHero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Layers } from "lucide-react";
import { systemsData } from "@/data/systemsData";
import SystemDetail from "@/components/systems/SystemDetail";

const Systems = () => {
  const [activeId, setActiveId] = useState(systemsData[0].id);
  const active = systemsData.find((s) => s.id === activeId) ?? systemsData[0];

  return (
    <div className="min-h-screen">
      <Navbar />

      <DarkHero>
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-background/10 border border-background/10 rounded-full px-4 py-1.5 text-sm font-medium">
            <Layers className="h-3.5 w-3.5" /> Our Systems
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Four systems.{" "}
            <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">
              One growth engine.
            </span>
          </h1>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            We don't run campaigns. We install repeatable systems with clear
            inputs, SOPs and outputs. Pick a system to walk through how we run it.
          </p>
        </div>
      </DarkHero>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[340px_1fr] gap-6 lg:gap-8">
            {/* Left: system selector */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-2">
                Choose a system
              </p>
              {systemsData.map((sys) => {
                const Icon = sys.icon;
                const isActive = sys.id === activeId;
                return (
                  <button
                    key={sys.id}
                    type="button"
                    onClick={() => setActiveId(sys.id)}
                    className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all ${
                      isActive
                        ? `bg-card ${sys.accent.ring} shadow-elevated`
                        : "bg-card border-border/50 hover:border-border"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div
                        className={`h-9 w-9 rounded-lg ${sys.accent.bg} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`h-5 w-5 ${sys.accent.text}`} />
                      </div>
                      <div
                        className={`font-bold font-heading ${
                          isActive ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {sys.name.replace(" System", "")}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground ml-12 font-body">
                      {sys.short}
                    </p>
                  </button>
                );
              })}
            </aside>

            {/* Right: system detail */}
            <div>
              <Reveal key={active.id}>
                <SystemDetail system={active} />
              </Reveal>
              <p className="text-sm text-muted-foreground mt-4 px-2 font-body">
                {active.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <Reveal>
          <div className="container-tight text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Ready to deploy a growth system that works?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Let's audit your current setup and design a system that fits your business.
            </p>
            <Link to="/audit">
              <Button variant="hero" size="xl">
                Get Growth Audit <ArrowRight className="ml-1" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Systems;
