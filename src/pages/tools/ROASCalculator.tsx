import { CalculatorPage } from "@/components/tools/CalculatorPage";

const ROASCalculator = () => (
  <CalculatorPage
    title="ROAS Calculator"
    description="Calculate your return on ad spend — and find the minimum ROAS you need to actually be profitable."
    leadIn="A 4x ROAS sounds great, but on a 20% margin product you're still losing money. Use this to find your real break-even line."
    howToUse={[
      "Pull total ad spend and revenue from your last 30 days.",
      "Enter your blended product/service margin (after COGS, before fixed costs).",
      "Compare 'Your ROAS' to 'Break-even ROAS' — anything above the break-even is profit.",
    ]}
    resultsNote="Break-even ROAS = 100 ÷ margin %. A 25% margin product needs 4x ROAS just to not lose money on ads."
    inputs={[
      { label: "Total Ad Spend", placeholder: "100000", key: "spend", prefix: "₹", hint: "Total spent on Google + Meta + other paid channels for the period." },
      { label: "Revenue from Ads", placeholder: "400000", key: "revenue", prefix: "₹", hint: "Revenue tracked back to those ads (use platform attribution + GA4)." },
      { label: "Product/Service Margin", placeholder: "40", key: "margin", suffix: "%", hint: "Gross margin: (Revenue − COGS) ÷ Revenue. Excludes overheads." },
    ]}
    calculate={(v) => {
      const roas = v.spend > 0 ? v.revenue / v.spend : 0;
      const profit = v.revenue * (v.margin / 100) - v.spend;
      const profitableRoas = v.margin > 0 ? 100 / v.margin : 0;
      return [
        { label: "Your ROAS", value: `${roas.toFixed(2)}x`, highlight: true },
        { label: "Net Profit from Ads", value: `₹${profit.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, highlight: true },
        { label: "Break-even ROAS", value: `${profitableRoas.toFixed(2)}x`, highlight: true },
        { label: "Status", value: profit > 0 ? "Profitable ✓" : "Unprofitable ✗" },
        { label: "Revenue per ₹1 Spent", value: `₹${roas.toFixed(2)}` },
        { label: "Ad Spend as % of Revenue", value: `${v.revenue > 0 ? ((v.spend / v.revenue) * 100).toFixed(1) : 0}%` },
        { label: "Recommendation", value: roas >= 3 ? "Scale aggressively" : roas >= 2 ? "Optimize and test" : "Restructure campaigns" },
      ];
    }}
  />
);
export default ROASCalculator;
