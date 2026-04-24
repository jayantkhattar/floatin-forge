import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, ArrowRight, Sparkles, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const INDUSTRIES: Record<string, { label: string; mid: number; low: number; high: number }> = {
  "ecommerce":       { label: "E-commerce / D2C",          low: 80,   mid: 180,  high: 400 },
  "real-estate":     { label: "Real Estate",               low: 350,  mid: 700,  high: 1500 },
  "education":       { label: "Education / EdTech",        low: 200,  mid: 450,  high: 900 },
  "healthcare":      { label: "Healthcare / Clinics",      low: 250,  mid: 500,  high: 1200 },
  "b2b-services":    { label: "B2B Services / SaaS",       low: 600,  mid: 1500, high: 3500 },
  "automotive":      { label: "Automotive",                low: 300,  mid: 600,  high: 1000 },
  "beauty-wellness": { label: "Beauty / Wellness",         low: 120,  mid: 280,  high: 600 },
  "hospitality":     { label: "Hospitality / Travel",      low: 150,  mid: 350,  high: 800 },
  "other":           { label: "Other",                     low: 250,  mid: 500,  high: 1000 },
};

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

const LeadCostTab = () => {
  const [industry, setIndustry] = useState("ecommerce");
  const [leads, setLeads] = useState("100");

  const result = useMemo(() => {
    const bm = INDUSTRIES[industry];
    const n = Math.max(0, Number(leads) || 0);
    return {
      label: bm.label,
      cpl: bm.mid,
      budget: n * bm.mid,
      range: `₹${bm.low}–₹${bm.high}`,
    };
  }, [industry, leads]);

  return (
    <div className="grid md:grid-cols-2 gap-0">
      {/* Inputs */}
      <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-border/50">
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
              Your Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full h-11 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              {Object.entries(INDUSTRIES).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
              Leads Wanted / Month
            </label>
            <input
              type="number"
              inputMode="numeric"
              value={leads}
              onChange={(e) => setLeads(e.target.value)}
              placeholder="100"
              className="w-full h-11 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>
      </div>
      {/* Results */}
      <div className="p-6 md:p-10 bg-gradient-to-br from-primary/5 via-card to-accent/5">
        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 mb-4">
          <Sparkles className="h-3 w-3" /> Instant Estimate
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Estimated CPL — {result.label}</p>
            <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{inr(result.cpl)}</p>
            <p className="text-xs text-muted-foreground mt-1">Industry range: {result.range}</p>
          </div>
          <div className="pt-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-1">Recommended Monthly Budget</p>
            <p className="font-heading text-2xl font-bold">{inr(result.budget)}</p>
          </div>
          <Link to="/tools/lead-cost-calculator" className="block">
            <Button variant="hero" size="sm" className="w-full">
              Get full breakdown <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BudgetPlannerTab = () => {
  const [revenue, setRevenue] = useState("1000000");
  const [aov, setAov] = useState("2500");
  const [conv, setConv] = useState("3");
  const [roas, setRoas] = useState("3");

  const result = useMemo(() => {
    const R = Math.max(0, Number(revenue) || 0);
    const A = Math.max(1, Number(aov) || 1);
    const C = Math.max(0.01, Number(conv) || 0.01) / 100;
    const Ro = Math.max(0.1, Number(roas) || 0.1);
    const deals = R / A;
    const budget = R / Ro;
    const leads = deals / C;
    const cpl = budget / Math.max(1, leads);
    return { deals, budget, leads, cpl, daily: budget / 30 };
  }, [revenue, aov, conv, roas]);

  return (
    <div className="grid md:grid-cols-2 gap-0">
      <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-border/50">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Revenue Target / Month", v: revenue, set: setRevenue, prefix: "₹" },
            { label: "Avg Order Value", v: aov, set: setAov, prefix: "₹" },
            { label: "Conversion Rate", v: conv, set: setConv, suffix: "%" },
            { label: "Target ROAS", v: roas, set: setRoas, suffix: "x" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                {f.label}
              </label>
              <div className="relative">
                {f.prefix && (
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{f.prefix}</span>
                )}
                <input
                  type="number"
                  value={f.v}
                  onChange={(e) => f.set(e.target.value)}
                  className={`w-full h-11 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 ${f.prefix ? "pl-7" : ""} ${f.suffix ? "pr-8" : ""}`}
                />
                {f.suffix && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{f.suffix}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 md:p-10 bg-gradient-to-br from-primary/5 via-card to-accent/5">
        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 mb-4">
          <Sparkles className="h-3 w-3" /> Instant Estimate
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Recommended Monthly Ad Budget</p>
            <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{inr(result.budget)}</p>
            <p className="text-xs text-muted-foreground mt-1">~{inr(result.daily)} / day</p>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/50">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Leads needed</p>
              <p className="font-heading text-xl font-bold">{Math.round(result.leads).toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Max CPL</p>
              <p className="font-heading text-xl font-bold">{inr(result.cpl)}</p>
            </div>
          </div>
          <Link to="/tools/ads-budget-planner" className="block">
            <Button variant="hero" size="sm" className="w-full">
              Get full breakdown <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface CalculatorShowcaseProps {
  /** Optional eyebrow + heading override */
  eyebrow?: string;
  title?: string;
  description?: string;
}

/**
 * Full-width, tabbed calculator section for landing pages.
 * Tabs: Lead Cost Calculator (industry CPL) and Ads Budget Planner.
 * Designed to take the entire row for better aesthetics + visual weight.
 */
export const CalculatorShowcase = ({
  eyebrow = "Free Tools",
  title = "Get instant clarity on your numbers",
  description = "Two of our most-used calculators — try them right here, no sign-up needed.",
}: CalculatorShowcaseProps) => {
  const [tab, setTab] = useState<"cpl" | "budget">("cpl");

  return (
    <section className="section-padding bg-surface-warm">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
            <Calculator className="h-3 w-3" /> {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 bg-card border border-border/60 rounded-full shadow-card">
            <button
              type="button"
              onClick={() => setTab("cpl")}
              className={`inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                tab === "cpl" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Target className="h-3.5 w-3.5" /> Lead Cost
            </button>
            <button
              type="button"
              onClick={() => setTab("budget")}
              className={`inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                tab === "budget" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BarChart3 className="h-3.5 w-3.5" /> Budget Planner
            </button>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden max-w-5xl mx-auto">
          {tab === "cpl" ? <LeadCostTab /> : <BudgetPlannerTab />}
        </div>
      </div>
    </section>
  );
};
