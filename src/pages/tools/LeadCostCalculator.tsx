import { CalculatorPage } from "@/components/tools/CalculatorPage";

const LeadCostCalculator = () => (
  <CalculatorPage
    title="Lead Cost Calculator"
    description="Calculate your true cost per lead across Google Ads, Meta Ads, and organic channels. Understand where you're overspending."
    inputs={[
      { label: "Monthly Google Ads Spend", placeholder: "50000", key: "googleSpend", prefix: "₹" },
      { label: "Google Ads Leads", placeholder: "100", key: "googleLeads" },
      { label: "Monthly Meta Ads Spend", placeholder: "30000", key: "metaSpend", prefix: "₹" },
      { label: "Meta Ads Leads", placeholder: "80", key: "metaLeads" },
      { label: "Monthly Organic Leads", placeholder: "20", key: "organicLeads" },
    ]}
    calculate={(v) => {
      const googleCPL = v.googleLeads > 0 ? v.googleSpend / v.googleLeads : 0;
      const metaCPL = v.metaLeads > 0 ? v.metaSpend / v.metaLeads : 0;
      const totalSpend = v.googleSpend + v.metaSpend;
      const totalLeads = v.googleLeads + v.metaLeads + v.organicLeads;
      const blendedCPL = totalLeads > 0 ? totalSpend / totalLeads : 0;
      return [
        { label: "Blended CPL", value: `₹${blendedCPL.toFixed(0)}`, highlight: true },
        { label: "Google Ads CPL", value: `₹${googleCPL.toFixed(0)}` },
        { label: "Meta Ads CPL", value: `₹${metaCPL.toFixed(0)}` },
        { label: "Total Monthly Leads", value: totalLeads.toString() },
        { label: "Total Monthly Spend", value: `₹${totalSpend.toLocaleString()}` },
        { label: "Organic Lead %", value: `${totalLeads > 0 ? ((v.organicLeads / totalLeads) * 100).toFixed(1) : 0}%` },
        { label: "Cost Efficiency Rating", value: blendedCPL < 200 ? "Excellent" : blendedCPL < 500 ? "Good" : "Needs Optimization", highlight: true },
      ];
    }}
  />
);
export default LeadCostCalculator;
