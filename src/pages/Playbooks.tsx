import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, BarChart3, MessageSquare, TrendingUp, Search, Layout, Lock, Mail } from "lucide-react";

const categories = ["All", "Lead Gen", "E-commerce", "Ads", "Automation", "Funnels"];

const playbooks = [
  { title: "Lead Gen Funnel Blueprint", category: "Lead Gen", desc: "Complete framework for building a high-converting lead generation funnel from ads to close.", icon: Target },
  { title: "Meta Ads Creative Playbook", category: "Ads", desc: "How to structure, test, and scale winning creatives on Meta platforms.", icon: BarChart3 },
  { title: "WhatsApp Automation Guide", category: "Automation", desc: "Set up automated WhatsApp flows that nurture leads and drive conversions.", icon: MessageSquare },
  { title: "E-commerce ROAS Optimization", category: "E-commerce", desc: "Strategies to improve ROAS from catalog ads, retargeting, and LTV optimization.", icon: TrendingUp },
  { title: "Google Ads for Lead Gen", category: "Lead Gen", desc: "Step-by-step guide to running profitable Google Ads campaigns for lead generation.", icon: Search },
  { title: "Landing Page Conversion Kit", category: "Funnels", desc: "Templates and frameworks for building landing pages that convert at 10%+.", icon: Layout },
];

const Playbooks = () => {
  const [downloadModal, setDownloadModal] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState<string[]>([]);

  const handleDownload = (title: string) => {
    if (submitted.includes(title)) {
      // Already submitted, just show confirmation
      return;
    }
    setDownloadModal(title);
  };

  const handleSubmit = () => {
    if (name && email && downloadModal) {
      setSubmitted([...submitted, downloadModal]);
      setDownloadModal(null);
      setName("");
      setEmail("");
    }
  };

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
              <div key={pb.title} className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border/50 hover:border-primary/20 flex flex-col">
                <div className="aspect-[16/9] overflow-hidden bg-primary/5 flex items-center justify-center">
                  <pb.icon className="h-16 w-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full w-fit mb-3">{pb.category}</span>
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{pb.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{pb.desc}</p>
                  <button
                    onClick={() => handleDownload(pb.title)}
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    {submitted.includes(pb.title) ? (
                      <>✓ Access granted — check your email</>
                    ) : (
                      <>Download free <Lock className="h-3.5 w-3.5" /></>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Modal */}
      {downloadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setDownloadModal(null)}>
          <div className="bg-card rounded-2xl shadow-elevated border border-border/50 p-8 max-w-md w-full space-y-5" onClick={(e) => e.stopPropagation()}>
            <div className="text-center space-y-2">
              <BookOpen className="h-10 w-10 text-primary mx-auto" />
              <h3 className="font-heading font-bold text-xl">Get Your Free Playbook</h3>
              <p className="text-sm text-muted-foreground">{downloadModal}</p>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="rahul@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 rounded-lg border border-input bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
            </div>
            <Button variant="hero" className="w-full" onClick={handleSubmit} disabled={!name || !email}>
              Send Me the Playbook <ArrowRight className="ml-1" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">No spam. We'll send you the guide and occasional growth tips.</p>
          </div>
        </div>
      )}

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
