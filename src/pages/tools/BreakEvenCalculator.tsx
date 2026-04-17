import { CalculatorPage } from "@/components/tools/CalculatorPage";

const BreakEvenCalculator = () => (
  <CalculatorPage
    title="Break-even Calculator"
    description="Find the exact CPA (cost per acquisition) at which your ads stop losing money — and start making it."
    leadIn="If your CPA is higher than your margin per sale, every conversion is a loss. Use this to set the ceiling."
    howToUse={[
      "Enter what one customer pays you, and what they cost you to serve.",
      "Add your average cost per click and your typical landing page conversion rate.",
      "Compare 'CPA' to 'Break-even CPA' — staying below it is the only path to profit.",
    ]}
    resultsNote="If your current CPA exceeds break-even CPA, either lower CPC (better creative/targeting) or lift conversion rate (better landing page/offer)."
    inputs={[
      { label: "Average Revenue per Sale", placeholder: "5000", key: "revenuePerSale", prefix: "₹", hint: "What one customer pays you on average." },
      { label: "Cost of Goods/Service", placeholder: "2000", key: "cogs", prefix: "₹", hint: "Direct cost to fulfil one sale (product, fulfilment, fees)." },
      { label: "Cost per Click (CPC)", placeholder: "25", key: "cpc", prefix: "₹", hint: "Average ad cost for one click — from Ads Manager." },
      { label: "Conversion Rate", placeholder: "3", key: "convRate", suffix: "%", hint: "Of 100 visitors landing on your page, how many buy? 1–5% typical." },
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
        { label: "Break-even CPA", value: `₹${breakEvenCPA.toFixed(0)}`, highlight: true },
        { label: "Profit per Sale", value: `₹${profitPerSale.toFixed(0)}`, highlight: true },
        { label: "Profitable?", value: profitPerSale > 0 ? "Yes ✓" : "No ✗" },
        { label: "Break-even Conversion Rate", value: `${breakEvenConvRate.toFixed(2)}%` },
        { label: "Margin per Sale", value: `₹${margin.toFixed(0)} (${marginPercent.toFixed(1)}%)` },
        { label: "Clicks Needed per Sale", value: v.convRate > 0 ? Math.ceil(100 / v.convRate).toString() : "N/A" },
      ];
    }}
  />
);
export default BreakEvenCalculator;
