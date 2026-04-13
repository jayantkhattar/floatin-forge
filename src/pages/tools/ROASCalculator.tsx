import { CalculatorPage } from "@/components/tools/CalculatorPage";

const ROASCalculator = () => (
  <CalculatorPage
    title="ROAS Calculator"
    description="Calculate your return on ad spend and benchmark against industry averages."
    inputs={[
      { label: "Total Ad Spend", placeholder: "100000", key: "spend", prefix: "₹" },
      { label: "Revenue from Ads", placeholder: "400000", key: "revenue", prefix: "₹" },
      { label: "Product/Service Margin", placeholder: "40", key: "margin", suffix: "%" },
    ]}
    calculate={(v) => {
      const roas = v.spend > 0 ? v.revenue / v.spend : 0;
      const profit = v.revenue * (v.margin / 100) - v.spend;
      const profitableRoas = v.margin > 0 ? 100 / v.margin : 0;
      return [
        { label: "Your ROAS", value: `${roas.toFixed(2)}x`, highlight: true },
        { label: "Net Profit from Ads", value: `₹${profit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Status", value: profit > 0 ? "Profitable ✓" : "Unprofitable ✗" },
        { label: "Break-even ROAS", value: `${profitableRoas.toFixed(2)}x`, highlight: true },
        { label: "Revenue per ₹1 Spent", value: `₹${roas.toFixed(2)}` },
        { label: "Ad Spend as % of Revenue", value: `${v.revenue > 0 ? ((v.spend / v.revenue) * 100).toFixed(1) : 0}%` },
        { label: "Recommendation", value: roas >= 3 ? "Scale aggressively" : roas >= 2 ? "Optimize and test" : "Restructure campaigns" },
      ];
    }}
  />
);
export default ROASCalculator;
