import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "3.2x ROAS for D2C Fashion Brand",
    metric: "₹2.4Cr Revenue",
    category: "E-commerce",
    challenge: "Low ROAS at 1.4x with unstructured campaigns and poor creative testing.",
    strategy: "Rebuilt campaign structure, launched creative testing system, optimized catalog ads.",
    results: ["ROAS improved from 1.4x to 3.2x", "Monthly revenue grew from ₹18L to ₹2.4Cr", "CAC reduced by 45%", "AOV increased by 22%"],
  },
  {
    title: "68% Drop in CPL for EdTech Startup",
    metric: "₹120 → ₹38 CPL",
    category: "Lead Gen",
    challenge: "High CPL of ₹120, poor lead quality, no follow-up automation.",
    strategy: "New landing pages, WhatsApp automation, lead scoring, and retargeting sequences.",
    results: ["CPL dropped from ₹120 to ₹38", "Lead quality score improved by 55%", "Sales team close rate up 40%", "WhatsApp automation handled 70% of nurturing"],
  },
  {
    title: "5x Lead Volume for Real Estate Firm",
    metric: "500+ Leads/Month",
    category: "Lead Gen",
    challenge: "Generating only 100 leads/month with inconsistent quality and no CRM integration.",
    strategy: "Google + Meta dual-channel strategy with CRM integration and automated qualification.",
    results: ["Lead volume increased from 100 to 500+/month", "CRM integration saved 15 hrs/week", "Qualified lead rate improved by 60%", "Cost per qualified lead reduced by 35%"],
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
            <TrendingUp className="h-3.5 w-3.5" /> Case Studies
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Proof, Not Promises</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed breakdowns of how we've helped businesses build growth systems that deliver measurable results.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight space-y-10">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
              <div className="p-8 md:p-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">{cs.category}</span>
                  <span className="text-3xl md:text-4xl font-heading font-bold text-primary">{cs.metric}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold">{cs.title}</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Challenge</h4>
                      <p className="text-sm">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Strategy</h4>
                      <p className="text-sm">{cs.strategy}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Results</h4>
                    <div className="space-y-2">
                      {cs.results.map((r, j) => (
                        <div key={j} className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                          <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Want results like these?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Let us audit your marketing setup and show you exactly what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/audit">
              <Button variant="hero" size="xl">Get Free Growth Audit <ArrowRight className="ml-1" /></Button>
            </Link>
            <Link to="/book-call">
              <Button variant="hero-outline" size="xl">Book Strategy Call</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
