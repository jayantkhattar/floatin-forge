import { CalculatorPage } from "@/components/tools/CalculatorPage";

const FunnelHealthChecker = () => (
  <CalculatorPage
    title="Funnel Health Checker"
    description="Diagnose where leads are dropping off in your funnel. Input your metrics at each stage to find the biggest leak."
    inputs={[
      { label: "Monthly Ad Impressions", placeholder: "100000", key: "impressions" },
      { label: "Ad Clicks", placeholder: "3000", key: "clicks" },
      { label: "Landing Page Leads", placeholder: "200", key: "leads" },
      { label: "Qualified Leads (Calls/Meetings)", placeholder: "50", key: "qualified" },
      { label: "Closed Deals", placeholder: "10", key: "deals" },
    ]}
    calculate={(v) => {
      const ctr = v.impressions > 0 ? (v.clicks / v.impressions) * 100 : 0;
      const lpConv = v.clicks > 0 ? (v.leads / v.clicks) * 100 : 0;
      const qualRate = v.leads > 0 ? (v.qualified / v.leads) * 100 : 0;
      const closeRate = v.qualified > 0 ? (v.deals / v.qualified) * 100 : 0;
      const overallConv = v.impressions > 0 ? (v.deals / v.impressions) * 100 : 0;
      const weakest = Math.min(ctr, lpConv, qualRate, closeRate);
      let weakLabel = "CTR";
      if (weakest === lpConv) weakLabel = "Landing Page";
      else if (weakest === qualRate) weakLabel = "Lead Qualification";
      else if (weakest === closeRate) weakLabel = "Close Rate";
      return [
        { label: "Overall Funnel Conversion", value: `${overallConv.toFixed(3)}%`, highlight: true },
        { label: "Click-Through Rate (CTR)", value: `${ctr.toFixed(2)}%` },
        { label: "Landing Page Conversion", value: `${lpConv.toFixed(2)}%` },
        { label: "Lead → Qualified Rate", value: `${qualRate.toFixed(1)}%` },
        { label: "Close Rate", value: `${closeRate.toFixed(1)}%` },
        { label: "Biggest Leak", value: weakLabel, highlight: true },
        { label: "Funnel Health Score", value: overallConv > 0.05 ? "Healthy" : overallConv > 0.01 ? "Average" : "Needs Work" },
      ];
    }}
  />
);
export default FunnelHealthChecker;
