import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowUpRight, ArrowRight, BookOpen, Layers, Megaphone, Zap } from "lucide-react";

const categories = ["All", "Lead Gen", "E-commerce", "Ads", "Automation", "Funnels"];

const playbooks = [
  { title: "Lead Gen Funnel Blueprint", category: "Lead Gen", desc: "Complete framework for building a high-converting lead generation funnel from ads to close.", icon: Layers },
  { title: "Meta Ads Creative Playbook", category: "Ads", desc: "How to structure, test, and scale winning creatives on Meta platforms.", icon: Megaphone },
  { title: "WhatsApp Automation Guide", category: "Automation", desc: "Set up automated WhatsApp flows that nurture leads and drive conversions.", icon: Zap },
  { title: "E-commerce ROAS Optimization", category: "E-commerce", desc: "Strategies to improve ROAS from catalog ads, retargeting, and LTV optimization.", icon: BarChart3 },
  { title: "Google Ads for Lead Gen", category: "Lead Gen", desc: "Step-by-step guide to running profitable Google Ads campaigns for lead generation.", icon: BookOpen },
  { title: "Landing Page Conversion Kit", category: "Funnels", desc: "Templates and frameworks for building landing pages that convert at 10%+.", icon: Layers },
];

const Playbooks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
            <BookOpen className="h-3.5 w-3.5" /> Growth Playbooks
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Frameworks That Drive Results</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Actionable guides, templates, and strategies we use to grow our clients. Free to download.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight space-y-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === "All" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playbooks.map((pb) => (
              <div key={pb.title} className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all border border-border/50 hover:border-primary/20 flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <pb.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full w-fit mb-3">{pb.category}</span>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{pb.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{pb.desc}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1">
                  Download free <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Need a custom growth strategy?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Get a personalized audit of your marketing setup with actionable recommendations.
          </p>
          <Link to="/audit">
            <Button variant="hero" size="xl">
              Get Free Growth Audit <ArrowRight className="ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Playbooks;
