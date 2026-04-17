import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, ArrowRight, Sparkles } from "lucide-react";
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

/**
 * Inline mini CPL calculator on the home page.
 * Gives instant industry-benchmarked CPL + monthly budget estimate
 * without a route change. Routes to full tool for deeper analysis.
 */
export const MiniCplCalculator = () => {
  const [industry, setIndustry] = useState<string>("ecommerce");
  const [leads, setLeads] = useState<string>("100");

  const result = useMemo(() => {
    const bm = INDUSTRIES[industry];
    const n = Math.max(0, Number(leads) || 0);
    const cpl = bm.mid;
    const budget = n * bm.mid;
    return {
      label: bm.label,
      cpl,
      budget,
      range: `₹${bm.low}–₹${bm.high}`,
    };
  }, [industry, leads]);

  return (
    <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Inputs */}
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calculator className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base">Try it now — Lead Cost</h3>
              <p className="text-xs text-muted-foreground">Industry-benchmarked instant estimate</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                Your Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {Object.entries(INDUSTRIES).map(([k, v]) => (
                  <option key={k} value={k}>{v.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                Leads Wanted / Month
              </label>
              <input
                type="number"
                inputMode="numeric"
                value={leads}
                onChange={(e) => setLeads(e.target.value)}
                placeholder="100"
                className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 md:p-8 bg-gradient-to-br from-primary/5 via-card to-accent/5">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 mb-4">
            <Sparkles className="h-3 w-3" /> Instant Estimate
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Estimated CPL — {result.label}</p>
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                ₹{result.cpl.toLocaleString("en-IN")}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Industry range: {result.range}</p>
            </div>
            <div className="pt-3 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-1">Recommended Monthly Budget</p>
              <p className="font-heading text-2xl font-bold">
                ₹{result.budget.toLocaleString("en-IN")}
              </p>
            </div>
            <Link to="/tools/lead-cost-calculator" className="block">
              <Button variant="hero" size="sm" className="w-full">
                Get full breakdown <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
