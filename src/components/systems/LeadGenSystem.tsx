import { useState } from "react";
import { Target, ChevronDown, Check, ArrowRight, Sparkles } from "lucide-react";

const stages = [
  {
    step: "Step 1",
    title: "Targeted ads — Google + Meta",
    pills: ["Google Search", "Meta Ads", "Audience Manager", "Creative Studio"],
    checks: [
      "Audience segmentation by intent, behaviour & demographics",
      "Separate campaigns for awareness, consideration & retargeting",
      "Ad creative A/B testing (3–5 variants per ad set)",
      "Budget allocation optimised by campaign objective",
      "Conversion tracking pixel installed on all pages",
    ],
    output: "Qualified clicks landing on your page",
  },
  {
    step: "Step 2",
    title: "High-converting landing pages",
    pills: ["Webflow / WordPress", "Hotjar", "Google Optimize", "GTM"],
    checks: [
      "Headline-to-offer alignment with the ad that brought the visitor",
      "Single, clear CTA above the fold — no competing actions",
      "Mobile-first design with sub-3s load time",
      "Trust signals: testimonials, logos, guarantees",
      "A/B tested copy, layout and CTA button variants",
    ],
    output: "Form fills and inbound lead captures",
  },
  {
    step: "Step 3",
    title: "Lead capture + CRM integration",
    pills: ["HubSpot / Zoho", "Zapier", "Lead scoring", "Segment"],
    checks: [
      "Instant lead record creation in CRM on form submit",
      "Auto-tagging by source, campaign, ad set and keyword",
      "Lead scoring based on intent signals and form data",
      "Deduplication to prevent double-counting",
      "Real-time notification to sales team via Slack / email",
    ],
    output: "Clean, scored lead record ready for nurturing",
  },
  {
    step: "Step 4",
    title: "WhatsApp + email nurturing",
    pills: ["WhatsApp Business API", "Mailchimp / Klaviyo", "Drip sequences", "Segments"],
    checks: [
      "Instant WhatsApp acknowledgement within 60 seconds of opt-in",
      "3–5 email drip sequence tailored to lead segment",
      "Re-engagement trigger if lead goes cold after 3 days",
      "Personalised content based on industry, intent and page visited",
      "Soft CTA in every touchpoint moving lead toward booking",
    ],
    output: "Warmed, engaged lead with high booking intent",
  },
  {
    step: "Step 5",
    title: "Qualification + call booking",
    pills: ["Typeform / Tally", "Calendly", "CRM automation", "Confirmation flows"],
    checks: [
      "Automated qualifier questions: budget, timeline, decision authority",
      "Only qualified leads reach the booking calendar",
      "Calendar integration with instant confirmation email + SMS",
      "24h and 1h reminder sequence to reduce no-shows",
      "Lead brief sent to sales rep before every call",
    ],
    output: "Booked, briefed sales call — ready to close",
  },
];

function StageCard({ stage, isOpen, onToggle }: { stage: typeof stages[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden bg-card ${
        isOpen ? "border-primary shadow-elevated" : "border-border/50 hover:border-primary/30"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-muted/30"
      >
        <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20 whitespace-nowrap font-body">
          {stage.step}
        </span>
        <span className="flex-1 text-sm font-semibold text-foreground font-heading">
          {stage.title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 border-t border-border/50">
            {/* Tool pills */}
            <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
              {stage.pills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1 rounded-full border border-border bg-muted/50 text-muted-foreground font-body"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Checklist */}
            <ul className="space-y-0">
              {stage.checks.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2.5 py-2 text-sm text-foreground/85 font-body ${
                    i < stage.checks.length - 1 ? "border-b border-border/30" : ""
                  }`}
                >
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" strokeWidth={2.5} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Output row */}
            <div className="flex items-center gap-2.5 mt-4 px-4 py-3 bg-primary/5 border border-primary/10 rounded-lg">
              <ArrowRight className="h-3.5 w-3.5 text-primary flex-shrink-0" />
              <span className="text-xs font-semibold text-primary font-heading">Output:</span>
              <span className="text-xs text-foreground/80 font-body">{stage.output}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LeadGenSystem() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
      <div className="p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="h-14 w-14 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
            <Target className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Lead Generation System</h2>
            <p className="text-muted-foreground mt-1 font-body">
              A complete end-to-end system that turns ad spend into qualified leads and booked calls. Click each stage to see the full process breakdown.
            </p>
          </div>
        </div>

        {/* Accordion stages */}
        <div className="space-y-0">
          {stages.map((stage, i) => (
            <div key={i}>
              <StageCard
                stage={stage}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
              {i < stages.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <div className="w-0.5 h-5 bg-primary/20 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final output banner */}
        <div className="mt-4 bg-primary rounded-xl px-6 py-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-primary-foreground/15 rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary-foreground font-heading">
              Output: Qualified leads on autopilot
            </p>
            <p className="text-xs text-primary-foreground/70 mt-0.5 font-body">
              Every lead scored, nurtured, and booked — without manual effort
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
