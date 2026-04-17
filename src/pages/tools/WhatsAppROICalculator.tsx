import { CalculatorPage } from "@/components/tools/CalculatorPage";

/**
 * Reframed: shows the user how much revenue they're LEAVING on the table
 * by NOT having WhatsApp automation + nurturing in place.
 *
 * Logic:
 *   - Most leads ghost after 1st contact (industry avg: ~70% drop-off pre-WhatsApp)
 *   - Automated WhatsApp nurturing recovers a portion of cold/lost leads
 *   - Even active leads convert better with timely WA follow-ups
 *
 * Defaults are conservative, India market norms.
 */

const WhatsAppROICalculator = () => (
  <CalculatorPage
    title="WhatsApp ROI Calculator"
    description="See how much revenue you're losing every month by not nurturing leads on WhatsApp — and what you'd gain with automation."
    leadIn="If you're generating leads but not nurturing them on WhatsApp, you're letting 60–80% of your pipeline go cold. Here's what that costs you."
    howToUse={[
      "Enter how many leads you generate every month (paid + organic).",
      "Estimate your current conversion rate today, before any WhatsApp nurture.",
      "Add your average deal value — what one paying customer is worth.",
      "Tweak the assumptions (drop-off, recovery rate) only if you have stronger data.",
      "Compare 'Without WhatsApp' vs 'With WhatsApp Nurture' — that gap is your missed revenue.",
    ]}
    resultsNote="Recovery rate assumes a multi-touch sequence: instant reply → 24h follow-up → drop-off recovery → re-engagement. Conservative benchmarks: 25–40% lift in conversions, 30–50% recovery of dropped leads."
    inputs={[
      {
        label: "Monthly Leads Generated",
        placeholder: "300",
        key: "leads",
        hint: "All leads you get every month — ads, website, referrals, walk-ins.",
      },
      {
        label: "Current Conversion Rate (without nurture)",
        placeholder: "5",
        key: "currentConv",
        suffix: "%",
        hint: "Of every 100 leads, how many become paying customers today?",
      },
      {
        label: "Average Deal Value",
        placeholder: "10000",
        key: "dealValue",
        prefix: "₹",
        hint: "Revenue from a single converted customer (one-time or first order).",
      },
      {
        label: "Lead Drop-off Rate (no follow-up)",
        placeholder: "70",
        key: "dropOff",
        suffix: "%",
        defaultValue: "70",
        hint: "Of leads that don't convert, how many simply ghost after first contact? Most businesses see 60–80%.",
      },
      {
        label: "Estimated WhatsApp Cost / Month",
        placeholder: "5000",
        key: "waCost",
        prefix: "₹",
        defaultValue: "5000",
        hint: "Tool + setup + content. ₹3K–10K covers most SMBs on platforms like AiSensy / Wati.",
      },
    ]}
    calculate={(v) => {
      // Baseline (no WhatsApp)
      const currentCustomers = v.leads * (v.currentConv / 100);
      const currentRevenue = currentCustomers * v.dealValue;

      // Lost / dropped leads (the ones you never followed up with)
      const nonConverting = v.leads - currentCustomers;
      const droppedLeads = nonConverting * (v.dropOff / 100);

      // What WhatsApp nurture recovers (conservative 30%)
      const recoveryRate = 0.30;
      const recoveredCustomers = droppedLeads * recoveryRate * (v.currentConv / 100);

      // Conversion lift on existing pipeline (+30% from timely WA)
      const liftedCustomers = currentCustomers * 0.30;

      const additionalCustomers = recoveredCustomers + liftedCustomers;
      const additionalRevenue = additionalCustomers * v.dealValue;
      const netGain = additionalRevenue - v.waCost;
      const roi = v.waCost > 0 ? ((additionalRevenue - v.waCost) / v.waCost) * 100 : 0;

      const newTotalCustomers = currentCustomers + additionalCustomers;
      const newTotalRevenue = newTotalCustomers * v.dealValue;
      const newConvRate = v.leads > 0 ? (newTotalCustomers / v.leads) * 100 : 0;

      return [
        {
          label: "Revenue You're Missing / Month",
          value: `₹${additionalRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`,
          highlight: true,
        },
        {
          label: "Leads Going Cold Every Month",
          value: Math.round(droppedLeads).toString(),
          highlight: true,
        },
        {
          label: "Net Monthly Gain (after WA cost)",
          value: `₹${netGain.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`,
          highlight: true,
        },
        // ---- gated detail below ----
        { label: "Current Monthly Revenue (no WA)", value: `₹${currentRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Projected Revenue (with WA)", value: `₹${newTotalRevenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "Current Conversion Rate", value: `${v.currentConv.toFixed(1)}%` },
        { label: "Projected Conversion Rate", value: `${newConvRate.toFixed(1)}%` },
        { label: "Customers Recovered from Drop-off", value: Math.round(recoveredCustomers).toString() },
        { label: "Extra Customers from Faster Follow-up", value: Math.round(liftedCustomers).toString() },
        { label: "Annual Missed Revenue", value: `₹${(additionalRevenue * 12).toLocaleString("en-IN", { maximumFractionDigits: 0 })}` },
        { label: "WhatsApp ROI", value: `${roi.toFixed(0)}%`, highlight: true },
      ];
    }}
  />
);
export default WhatsAppROICalculator;
