import { CalculatorPage } from "@/components/tools/CalculatorPage";

const WhatsAppROICalculator = () => (
  <CalculatorPage
    title="WhatsApp ROI Calculator"
    description="Measure the revenue impact of adding WhatsApp automation to your lead nurturing and conversion pipeline."
    inputs={[
      { label: "Monthly Leads", placeholder: "300", key: "leads" },
      { label: "Current Conversion Rate (without WhatsApp)", placeholder: "5", key: "currentConv", suffix: "%" },
      { label: "Average Deal Value", placeholder: "10000", key: "dealValue", prefix: "₹" },
      { label: "Monthly WhatsApp Cost", placeholder: "5000", key: "waCost", prefix: "₹" },
    ]}
    calculate={(v) => {
      const currentDeals = v.leads * (v.currentConv / 100);
      const boostedConv = v.currentConv * 1.4;
      const newDeals = v.leads * (boostedConv / 100);
      const additionalDeals = newDeals - currentDeals;
      const additionalRevenue = additionalDeals * v.dealValue;
      const roi = v.waCost > 0 ? ((additionalRevenue - v.waCost) / v.waCost) * 100 : 0;
      return [
        { label: "Additional Monthly Revenue", value: `₹${additionalRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`, highlight: true },
        { label: "Boosted Conversion Rate", value: `${boostedConv.toFixed(1)}%` },
        { label: "Additional Deals/Month", value: Math.round(additionalDeals).toString() },
        { label: "WhatsApp ROI", value: `${roi.toFixed(0)}%`, highlight: true },
        { label: "Current Monthly Deals", value: Math.round(currentDeals).toString() },
        { label: "Projected Monthly Deals", value: Math.round(newDeals).toString() },
        { label: "Net Monthly Gain", value: `₹${(additionalRevenue - v.waCost).toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
      ];
    }}
  />
);
export default WhatsAppROICalculator;
