import { CalculatorPage } from "@/components/tools/CalculatorPage";

const BreakEvenCalculator = () => (
  <CalculatorPage
    title="Break-even Calculator"
    description="Find the exact point where your ad campaigns become profitable based on your margins, conversion rates, and costs."
    inputs={[
      { label: "Average Revenue per Sale", placeholder: "5000", key: "revenuePerSale", prefix: "₹" },
      { label: "Cost of Goods/Service", placeholder: "2000", key: "cogs", prefix: "₹" },
      { label: "Cost per Click (CPC)", placeholder: "25", key: "cpc", prefix: "₹" },
      { label: "Conversion Rate", placeholder: "3", key: "convRate", suffix: "%" },
    ]}
    calculate={(v) => {
      const margin = v.revenuePerSale - v.cogs;
      const marginPercent = v.revenuePerSale > 0 ? (margin / v.revenuePerSale) * 100 : 0;
      const cpa = v.convRate > 0 ? v.cpc / (v.convRate / 100) : 0;
      const profitPerSale = margin - cpa;
      const breakEvenCPA = margin;
      const breakEvenConvRate = v.cpc > 0 && margin > 0 ? (v.cpc / margin) * 100 : 0;
      return [
        { label: "Cost per Acquisition (CPA)", value: `₹${cpa.toFixed(0)}`, highlight: true },
        { label: "Profit per Sale", value: `₹${profitPerSale.toFixed(0)}` },
        { label: "Profitable?", value: profitPerSale > 0 ? "Yes ✓" : "No ✗" },
        { label: "Break-even CPA", value: `₹${breakEvenCPA.toFixed(0)}`, highlight: true },
        { label: "Break-even Conversion Rate", value: `${breakEvenConvRate.toFixed(2)}%` },
        { label: "Margin per Sale", value: `₹${margin.toFixed(0)} (${marginPercent.toFixed(1)}%)` },
        { label: "Clicks Needed per Sale", value: v.convRate > 0 ? Math.ceil(100 / v.convRate).toString() : "N/A" },
      ];
    }}
  />
);
export default BreakEvenCalculator;
