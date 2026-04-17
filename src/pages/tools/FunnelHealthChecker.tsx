import { CalculatorPage } from "@/components/tools/CalculatorPage";

const FunnelHealthChecker = () => (
  <CalculatorPage
    title="Funnel Health Checker"
    description="Diagnose where leads are dropping off in your funnel and find the single biggest leak to fix first."
    leadIn="Don't optimise the wrong stage. Plug in your numbers from impressions to closed deals — we'll point to the leak."
    howToUse={[
      "Pull last month's numbers from Google/Meta Ads Manager + your CRM.",
      "Enter every stage from impressions through to closed deals — be honest with the gaps.",
      "Read the 'Biggest Leak' result — that's where to focus your next sprint.",
      "Re-run monthly to track if your fixes moved the needle.",
    ]}
    resultsNote="Healthy benchmarks (vary by industry): CTR > 1.5%, Landing Page Conv > 5%, Lead → Qualified > 30%, Close Rate > 20%."
    inputs={[
      { label: "Monthly Ad Impressions", placeholder: "100000", key: "impressions", hint: "From Google/Meta Ads Manager — total times your ads were seen." },
      { label: "Ad Clicks", placeholder: "3000", key: "clicks", hint: "Total clicks on your ads in the same period." },
      { label: "Landing Page Leads", placeholder: "200", key: "leads", hint: "Form fills / sign-ups generated from those clicks." },
      { label: "Qualified Leads (Calls/Meetings)", placeholder: "50", key: "qualified", hint: "Leads your sales team confirmed as worth pursuing." },
      { label: "Closed Deals", placeholder: "10", key: "deals", hint: "Customers who actually paid you." },
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
        { label: "Biggest Leak", value: weakLabel, highlight: true },
        { label: "Landing Page Conversion", value: `${lpConv.toFixed(2)}%` },
        { label: "Lead → Qualified Rate", value: `${qualRate.toFixed(1)}%` },
        { label: "Close Rate", value: `${closeRate.toFixed(1)}%` },
        { label: "Funnel Health Score", value: overallConv > 0.05 ? "Healthy" : overallConv > 0.01 ? "Average" : "Needs Work" },
      ];
    }}
  />
);
export default FunnelHealthChecker;
