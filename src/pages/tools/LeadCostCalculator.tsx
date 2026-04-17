import { CalculatorPage } from "@/components/tools/CalculatorPage";

/**
 * Industry CPL benchmarks (₹) — blended Google + Meta averages we've observed
 * across Floatin's portfolio + public India market data. Conservative ranges.
 */
const INDUSTRY_BENCHMARKS: Record<string, { label: string; low: number; mid: number; high: number }> = {
  "real-estate":     { label: "Real Estate",                     low: 350,  mid: 700,  high: 1500 },
  "education":       { label: "Education / EdTech",              low: 200,  mid: 450,  high: 900 },
  "healthcare":      { label: "Healthcare / Clinics",            low: 250,  mid: 500,  high: 1200 },
  "b2b-services":    { label: "B2B Services / SaaS",             low: 600,  mid: 1500, high: 3500 },
  "ecommerce":       { label: "E-commerce / D2C",                low: 80,   mid: 180,  high: 400 },
  "automotive":      { label: "Automotive (Dealerships)",        low: 300,  mid: 600,  high: 1000 },
  "finance":         { label: "Finance / Insurance",             low: 400,  mid: 900,  high: 2000 },
  "hospitality":     { label: "Hospitality / Travel",            low: 150,  mid: 350,  high: 800 },
  "beauty-wellness": { label: "Beauty / Wellness / Salons",      low: 120,  mid: 280,  high: 600 },
  "manufacturing":   { label: "Manufacturing / Industrial B2B",  low: 500,  mid: 1200, high: 2800 },
  "home-services":   { label: "Home Services (Interiors, Renov.)", low: 250, mid: 550, high: 1100 },
  "fashion-jewelry": { label: "Fashion / Jewelry",               low: 100,  mid: 250,  high: 550 },
  "other":           { label: "Other / Not sure",                low: 250,  mid: 500,  high: 1000 },
};

const LeadCostCalculator = () => (
  <CalculatorPage
    title="Lead Cost Calculator"
    description="Estimate what a lead will likely cost you — based on your industry, your goals, and India market benchmarks. No ad history needed."
    leadIn="Haven't run ads yet? Pick your industry and we'll project your tentative cost per lead, monthly budget, and what to expect at each spend level."
    howToUse={[
      "Pick the industry that best matches what you sell.",
      "Enter how many leads you want every month and your target conversion rate (rough is fine).",
      "If you've run ads before, plug in your past CPL — we'll compare it to industry benchmarks.",
      "Use the result to plan budget, set ad-spend limits, and benchmark agency proposals.",
    ]}
    resultsNote="These are India market benchmarks for Google + Meta combined. Actual CPL depends on creative quality, targeting, landing page, and offer."
    inputs={[
      {
        label: "Your Industry",
        key: "industry",
        type: "select",
        hint: "Drives the benchmark CPL we compare against.",
        options: Object.entries(INDUSTRY_BENCHMARKS).map(([value, v]) => ({
          value,
          label: v.label,
        })),
      },
      {
        label: "Leads Wanted Per Month",
        placeholder: "100",
        key: "leadsWanted",
        hint: "How many qualified enquiries you'd ideally want every month.",
      },
      {
        label: "Target Lead → Customer Conversion",
        placeholder: "10",
        key: "convRate",
        suffix: "%",
        hint: "Out of 100 leads, how many typically become paying customers? 5–15% is normal.",
      },
      {
        label: "Average Deal / Order Value",
        placeholder: "10000",
        key: "aov",
        prefix: "₹",
        hint: "Roughly how much one customer pays you on average.",
      },
      {
        label: "Your Current CPL (optional)",
        placeholder: "0",
        key: "currentCpl",
        prefix: "₹",
        hint: "Leave at 0 if you haven't run ads yet. Otherwise, how much are you paying per lead today?",
      },
    ]}
    calculate={(v, raw) => {
      const industryKey = raw.industry || "other";
      const bm = INDUSTRY_BENCHMARKS[industryKey] ?? INDUSTRY_BENCHMARKS.other;

      const estimatedCpl = bm.mid;
      const monthlyBudgetLow = v.leadsWanted * bm.low;
      const monthlyBudgetMid = v.leadsWanted * bm.mid;
      const monthlyBudgetHigh = v.leadsWanted * bm.high;

      const customers = v.leadsWanted * (v.convRate / 100);
      const projectedRevenue = customers * v.aov;
      const projectedRoasMid = monthlyBudgetMid > 0 ? projectedRevenue / monthlyBudgetMid : 0;

      // Comparison vs current
      let benchmarkVerdict = "Enter your current CPL to compare";
      if (v.currentCpl > 0) {
        if (v.currentCpl < bm.low) benchmarkVerdict = "Excellent — below industry low";
        else if (v.currentCpl <= bm.mid) benchmarkVerdict = "Good — within healthy range";
        else if (v.currentCpl <= bm.high) benchmarkVerdict = "Above average — room to optimize";
        else benchmarkVerdict = "High — likely overspending vs. industry";
      }

      return [
        {
          label: `Estimated CPL (${bm.label})`,
          value: `₹${estimatedCpl.toLocaleString("en-IN")}`,
          highlight: true,
        },
        {
          label: "Recommended Monthly Budget",
          value: `₹${monthlyBudgetMid.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`,
          highlight: true,
        },
        {
          label: "Industry Benchmark Range",
          value: `₹${bm.low}–₹${bm.high} per lead`,
        },
        {
          label: "Lean Budget (low CPL scenario)",
          value: `₹${monthlyBudgetLow.toLocaleString("en-IN", { maximumFractionDigits: 0 })}/mo`,
        },
        {
          label: "Stretch Budget (high CPL scenario)",
          value: `₹${monthlyBudgetHigh.toLocaleString("en-IN", { maximumFractionDigits: 0 })}/mo`,
        },
        {
          label: "Expected Customers / Month",
          value: Math.round(customers).toString(),
        },
        {
          label: "Projected Monthly Revenue",
          value: `₹${projectedRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`,
        },
        {
          label: "Projected ROAS",
          value: `${projectedRoasMid.toFixed(2)}x`,
          highlight: true,
        },
        {
          label: "Your CPL vs Benchmark",
          value: benchmarkVerdict,
          highlight: v.currentCpl > 0,
        },
      ];
    }}
  />
);
export default LeadCostCalculator;
