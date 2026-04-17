import { CalculatorPage } from "@/components/tools/CalculatorPage";

const AdsBudgetPlanner = () => (
  <CalculatorPage
    title="Ads Budget Planner"
    description="Plan your optimal monthly ad spend across Google and Meta — based on your revenue goal, deal size, and target ROAS."
    leadIn="Work backwards from the revenue you want. We'll tell you the budget, lead volume, and CPL ceiling required to hit it."
    howToUse={[
      "Set the monthly revenue you want to generate from ads.",
      "Enter your average order or deal value — we use this to back-calculate sales needed.",
      "Add your current (or expected) lead → sale conversion rate.",
      "Pick a realistic target ROAS — 3x is a common starting point, 4–5x is great.",
      "Use the result to set Google/Meta budgets, daily caps, and a ceiling for your CPL.",
    ]}
    resultsNote="The 60/40 Google/Meta split is a healthy default for high-intent categories. Shift toward Meta for top-of-funnel / discovery brands."
    inputs={[
      { label: "Monthly Revenue Target", placeholder: "500000", key: "revenueTarget", prefix: "₹", hint: "Revenue you want to generate from ads each month." },
      { label: "Average Order Value / Deal Size", placeholder: "5000", key: "aov", prefix: "₹", hint: "Typical revenue from one customer / order." },
      { label: "Current Conversion Rate", placeholder: "3", key: "convRate", suffix: "%", hint: "Of every 100 leads, how many become customers? 3–10% is typical." },
      { label: "Target ROAS", placeholder: "4", key: "targetRoas", suffix: "x", hint: "Return on ad spend — how many ₹ in revenue per ₹1 spent. 3x is a healthy start." },
    ]}
    calculate={(v) => {
      const dealsNeeded = v.aov > 0 ? v.revenueTarget / v.aov : 0;
      const budget = v.targetRoas > 0 ? v.revenueTarget / v.targetRoas : 0;
      const leadsNeeded = v.convRate > 0 ? dealsNeeded / (v.convRate / 100) : 0;
      const cpl = leadsNeeded > 0 ? budget / leadsNeeded : 0;
      return [
        { label: "Recommended Monthly Budget", value: `₹${budget.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, highlight: true },
        { label: "Deals/Sales Needed", value: Math.ceil(dealsNeeded).toString() },
        { label: "Leads Needed", value: Math.ceil(leadsNeeded).toString() },
        { label: "Max Allowable CPL", value: `₹${cpl.toFixed(0)}` },
        { label: "Google Ads (60%)", value: `₹${(budget * 0.6).toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Meta Ads (40%)", value: `₹${(budget * 0.4).toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Daily Budget", value: `₹${(budget / 30).toFixed(0)}/day`, highlight: true },
      ];
    }}
  />
);
export default AdsBudgetPlanner;
