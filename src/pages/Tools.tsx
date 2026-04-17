import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, BarChart3, Target, MessageSquare, TrendingUp, Zap, ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DarkHero } from "@/components/layout/DarkHero";

const tools = [
  { icon: Calculator, title: "Lead Cost Calculator", desc: "Calculate your true cost per lead across all channels. Compare performance and find where you're overspending.", href: "/tools/lead-cost-calculator", output: "Cost per lead breakdown" },
  { icon: BarChart3, title: "Ads Budget Planner", desc: "Plan optimal ad spend across Google and Meta based on your goals, industry benchmarks, and target ROAS.", href: "/tools/ads-budget-planner", output: "Budget allocation plan" },
  { icon: Target, title: "Funnel Health Checker", desc: "Input your funnel metrics and get a diagnosis of where leads are dropping off and what to fix first.", href: "/tools/funnel-health-checker", output: "Funnel diagnosis report" },
  { icon: MessageSquare, title: "WhatsApp ROI Calculator", desc: "Measure the revenue impact of WhatsApp automation on your lead nurturing and conversion pipeline.", href: "/tools/whatsapp-roi-calculator", output: "WhatsApp revenue estimate" },
  { icon: TrendingUp, title: "ROAS Calculator", desc: "Instantly calculate your return on ad spend and benchmark against industry averages.", href: "/tools/roas-calculator", output: "ROAS analysis" },
  { icon: Zap, title: "Break-even Calculator", desc: "Find the exact point where your ad campaigns become profitable based on margins and conversion rates.", href: "/tools/break-even-calculator", output: "Break-even analysis" },
];

const Tools = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <DarkHero>
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-background/10 border border-background/10 rounded-full px-4 py-1.5 text-sm font-medium">
            <Calculator className="h-3.5 w-3.5" /> Free Growth Tools
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Benchmark. Plan. <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">Optimize.</span>
          </h1>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            Free calculators and diagnostic tools to help you understand your marketing performance and find growth opportunities.
          </p>
        </div>
      </DarkHero>

      <section className="section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link key={tool.title} to={tool.href} className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/20 flex flex-col">
                <tool.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{tool.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">Output: {tool.output}</span>
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    Open <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Want a deeper analysis?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our free growth audit goes beyond calculators — we'll analyze your entire marketing setup and give you a custom action plan.
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

export default Tools;
