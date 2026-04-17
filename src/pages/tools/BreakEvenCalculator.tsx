import { CalculatorPage } from "@/components/tools/CalculatorPage";

const BreakEvenCalculator = () => (
  <CalculatorPage
    title="Break-even ROAS Calculator"
    description="Find the exact ROAS (Return on Ad Spend) where your ads stop losing money — and every rupee above it becomes pure profit."
    leadIn="Most brands scale ads without knowing their break-even ROAS — and bleed money on every sale. This tells you the line between loss, break-even, and profit."
    howToUse={[
      "Enter your selling price (what the customer pays you, before any discount).",
      "Add every cost that eats into one sale: product cost, shipping, packaging, payment gateway fees, return/RTO losses, and platform/marketplace fees.",
      "The tool calculates your true margin, then shows the Break-even ROAS — the minimum ROAS your ads must hit to not lose money.",
      "Use the Profit/Loss zones table to see how much profit (or loss) you make at ROAS levels of 1x, 2x, 3x, 4x, and 5x.",
    ]}
    resultsNote="If your current ROAS is below Break-even ROAS, every sale is a loss — even if revenue looks healthy. To grow profit: lower COGS, reduce RTO%, increase AOV, or improve creative/targeting to push ROAS higher."
    inputs={[
      { label: "Selling Price (per order)", placeholder: "1500", key: "sellingPrice", prefix: "₹", hint: "What one customer pays you per order (AOV). Use your average if it varies." },
      { label: "Product Cost (COGS)", placeholder: "400", key: "productCost", prefix: "₹", hint: "Manufacturing or purchase cost of the product itself." },
      { label: "Shipping Cost", placeholder: "80", key: "shipping", prefix: "₹", hint: "What you pay the courier per order (forward shipping)." },
      { label: "Packaging Cost", placeholder: "30", key: "packaging", prefix: "₹", hint: "Box, bubble wrap, branded inserts, labels — per order." },
      { label: "Payment Gateway Fee", placeholder: "2", key: "gatewayFee", suffix: "%", hint: "Razorpay/Stripe/Shopify Payments cut. Typically 2–3% of selling price." },
      { label: "Return / RTO Rate", placeholder: "20", key: "rtoRate", suffix: "%", hint: "Of 100 orders, how many get returned or refused (RTO)? D2C average: 15–30%." },
      { label: "RTO Cost per Order", placeholder: "120", key: "rtoCost", prefix: "₹", hint: "Reverse shipping + handling for one returned order. Usually ₹80–₹150." },
      { label: "Platform / Marketplace Fee", placeholder: "0", key: "platformFee", suffix: "%", hint: "Amazon/Flipkart/Meesho commission. Set to 0 if selling on your own website." },
    ]}
    calculate={(v) => {
      const sp = v.sellingPrice;
      if (sp <= 0) {
        return [
          { label: "Break-even ROAS", value: "—", highlight: true },
          { label: "True Margin per Order", value: "—", highlight: true },
          { label: "Status", value: "Enter selling price to begin" },
        ];
      }

      // Per-order variable costs
      const gatewayCost = (v.gatewayFee / 100) * sp;
      const platformCost = (v.platformFee / 100) * sp;
      // RTO cost amortised across all orders (each order carries a share of RTO loss)
      const rtoLossPerOrder = (v.rtoRate / 100) * (v.productCost + v.shipping + v.packaging + v.rtoCost);

      const totalCostPerOrder =
        v.productCost + v.shipping + v.packaging + gatewayCost + platformCost + rtoLossPerOrder;

      const trueMargin = sp - totalCostPerOrder;
      const marginPercent = (trueMargin / sp) * 100;

      // Break-even ROAS: at what ROAS does ad spend equal margin?
      // ROAS = Revenue / AdSpend. Profit = Margin - AdSpend = 0 → AdSpend = trueMargin
      // Break-even ROAS = sp / trueMargin
      const breakEvenROAS = trueMargin > 0 ? sp / trueMargin : 0;

      const status =
        trueMargin <= 0
          ? "❌ Losing money before ads — fix unit economics first"
          : breakEvenROAS <= 2
          ? "✓ Healthy — easy to scale profitably"
          : breakEvenROAS <= 3.5
          ? "⚠ Tight — needs sharp creative & targeting"
          : "❌ Very tight — restructure costs before scaling";

      // Profit at different ROAS levels (per order)
      const profitAtROAS = (roas: number) => {
        if (roas <= 0) return 0;
        const adSpendPerOrder = sp / roas;
        return trueMargin - adSpendPerOrder;
      };

      const fmt = (n: number) => `${n >= 0 ? "+" : "−"}₹${Math.abs(n).toFixed(0)}`;

      return [
        { label: "Break-even ROAS", value: trueMargin > 0 ? `${breakEvenROAS.toFixed(2)}x` : "Not achievable", highlight: true },
        { label: "True Margin per Order", value: `₹${trueMargin.toFixed(0)} (${marginPercent.toFixed(1)}%)`, highlight: true },
        { label: "Status", value: status, highlight: true },
        { label: "Total Cost per Order", value: `₹${totalCostPerOrder.toFixed(0)}` },
        { label: "  → Product + Shipping + Packaging", value: `₹${(v.productCost + v.shipping + v.packaging).toFixed(0)}` },
        { label: "  → Payment Gateway Fee", value: `₹${gatewayCost.toFixed(0)}` },
        { label: "  → Platform / Marketplace Fee", value: `₹${platformCost.toFixed(0)}` },
        { label: "  → RTO Loss (amortised)", value: `₹${rtoLossPerOrder.toFixed(0)}` },
        { label: "Profit at ROAS 1.0x", value: fmt(profitAtROAS(1)) },
        { label: "Profit at ROAS 2.0x", value: fmt(profitAtROAS(2)) },
        { label: "Profit at ROAS 3.0x", value: fmt(profitAtROAS(3)) },
        { label: "Profit at ROAS 4.0x", value: fmt(profitAtROAS(4)) },
        { label: "Profit at ROAS 5.0x", value: fmt(profitAtROAS(5)) },
        { label: "Max Ad Spend per Order (to break even)", value: `₹${trueMargin > 0 ? trueMargin.toFixed(0) : 0}` },
      ];
    }}
  />
);
export default BreakEvenCalculator;
