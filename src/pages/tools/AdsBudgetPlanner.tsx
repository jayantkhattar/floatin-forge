import { CalculatorPage } from "@/components/tools/CalculatorPage";

const AdsBudgetPlanner = () => (
  <CalculatorPage
    title="Ads Budget Planner"
    description="Plan your optimal ad spend across Google and Meta based on your goals, margins, and target performance."
    inputs={[
      { label: "Monthly Revenue Target", placeholder: "500000", key: "revenueTarget", prefix: "₹" },
      { label: "Average Order Value / Deal Size", placeholder: "5000", key: "aov", prefix: "₹" },
      { label: "Current Conversion Rate", placeholder: "3", key: "convRate", suffix: "%" },
      { label: "Target ROAS", placeholder: "4", key: "targetRoas", suffix: "x" },
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
