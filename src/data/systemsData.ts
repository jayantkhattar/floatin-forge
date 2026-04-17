// Data for the 4 marketing systems showcased on /systems.
// Each system follows the same shape: stages with title, tools, SOP checklist, output.
// Edit copy here without touching the components.

import {
  Target,
  ShoppingBag,
  Camera,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export interface SystemStage {
  step: string;
  title: string;
  pills: string[];
  checks: string[];
  output: string;
}

export interface SystemDef {
  id: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  /** Tailwind color tokens for accent (uses semantic tokens where possible). */
  accent: {
    bg: string; // e.g. bg-primary/5
    text: string; // e.g. text-primary
    ring: string; // e.g. border-primary
    chip: string; // e.g. bg-primary text-primary-foreground
  };
  finalOutput: {
    title: string;
    sub: string;
  };
  stages: SystemStage[];
}

export const systemsData: SystemDef[] = [
  // ── 1. LEAD GENERATION ──
  {
    id: "lead-gen",
    name: "Lead Generation System",
    short: "Ads → CRM → booked sales calls",
    tagline: "Turn ad spend into qualified, booked sales calls.",
    description:
      "An end-to-end system that takes a cold prospect from a Google or Meta ad all the way to a booked sales call — complete with research, creative testing, nurture and qualification.",
    icon: Target,
    accent: {
      bg: "bg-primary/5",
      text: "text-primary",
      ring: "border-primary",
      chip: "bg-primary text-primary-foreground",
    },
    finalOutput: {
      title: "Output: Qualified leads on autopilot",
      sub: "Every lead scored, nurtured and booked — without manual effort.",
    },
    stages: [
      {
        step: "Step 1",
        title: "Briefs, research & creative testing",
        pills: ["Notion briefs", "Meta Ad Library", "Figma", "Competitor teardowns"],
        checks: [
          "ICP + competitor research deck (5–10 brands benchmarked)",
          "Creative brief with angles, hooks, proof points and CTAs",
          "3–5 ad variants designed per ad set for structured testing",
          "Weekly creative refresh cadence to fight ad fatigue",
          "All creatives tagged in a central asset library for re-use",
        ],
        output: "Validated angles + ready-to-launch creative variants",
      },
      {
        step: "Step 2",
        title: "Targeted ads — Google + Meta",
        pills: ["Google Search", "Meta Ads", "Audience Manager", "GTM"],
        checks: [
          "Audience segmentation by intent, behaviour & demographics",
          "Separate campaigns for awareness, consideration & retargeting",
          "Budget allocation optimised by campaign objective",
          "Conversion tracking pixel installed and validated on all pages",
          "Daily pacing + weekly performance review cadence",
        ],
        output: "Qualified clicks landing on your page",
      },
      {
        step: "Step 3",
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
        step: "Step 4",
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
        step: "Step 5",
        title: "WhatsApp + email nurturing",
        pills: ["WhatsApp Business API", "Klaviyo / Mailchimp", "Drip sequences"],
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
        step: "Step 6",
        title: "Qualification + call booking",
        pills: ["Typeform / Tally", "Calendly / Cal.com", "CRM automation"],
        checks: [
          "Automated qualifier questions: budget, timeline, decision authority",
          "Only qualified leads reach the booking calendar",
          "Calendar integration with instant confirmation email + SMS",
          "24h and 1h reminder sequence to reduce no-shows",
          "Lead brief sent to sales rep before every call",
        ],
        output: "Booked, briefed sales call — ready to close",
      },
    ],
  },

  // ── 2. E-COMMERCE ──
  {
    id: "ecommerce",
    name: "E-commerce System",
    short: "D2C scale + retention engine",
    tagline: "Profitable D2C scale across Meta, Google and retention channels.",
    description:
      "A full-funnel system for D2C brands — from research and creative testing to performance ads, store CRO and lifecycle retention. Built for sustained, profitable scale.",
    icon: ShoppingBag,
    accent: {
      bg: "bg-emerald-500/5",
      text: "text-emerald-600 dark:text-emerald-400",
      ring: "border-emerald-500",
      chip: "bg-emerald-600 text-white",
    },
    finalOutput: {
      title: "Output: Profitable, predictable D2C growth",
      sub: "ROAS-positive acquisition with a retention engine compounding LTV.",
    },
    stages: [
      {
        step: "Step 1",
        title: "Briefs, research & creative testing",
        pills: ["Notion", "Competitor teardowns", "Customer interviews", "Meta Ad Library"],
        checks: [
          "Category + competitor research with 10+ brand teardowns",
          "Customer voice mining from reviews, DMs and support tickets",
          "Creative brief covering 5+ angles per product/category",
          "Static + UGC + motion variants designed for each angle",
          "Structured CBO testing matrix with clear win criteria",
        ],
        output: "A library of validated, on-brand winning creatives",
      },
      {
        step: "Step 2",
        title: "Performance ads — Meta + Google",
        pills: ["Meta Advantage+", "Google Performance Max", "Shopping", "GA4"],
        checks: [
          "Account structure: prospecting, retargeting, brand campaigns",
          "Catalog + dynamic product ads with proper feed hygiene",
          "Creative refresh cadence to fight fatigue (weekly)",
          "Daily budget pacing and bid-strategy reviews",
          "Cross-channel attribution view in GA4 + Triple Whale style report",
        ],
        output: "Profitable acquisition at target blended ROAS",
      },
      {
        step: "Step 3",
        title: "Store + PDP CRO",
        pills: ["Shopify", "Hotjar", "Loox / Judge.me", "Replo / GemPages"],
        checks: [
          "130-point CRO audit covering PLP, PDP, cart and checkout",
          "PDPs with bundles, social proof, cross-sell and trust badges",
          "Mobile-first speed optimisation (sub-3s LCP)",
          "Cart + checkout abandonment recovery flows live",
          "A/B testing roadmap with weekly experiments",
        ],
        output: "Higher conversion rate + AOV per session",
      },
      {
        step: "Step 4",
        title: "Lifecycle: Email, WhatsApp, SMS",
        pills: ["Klaviyo", "WhatsApp Business API", "Wati / Interakt"],
        checks: [
          "Welcome, browse-abandon, cart-abandon and post-purchase flows",
          "WhatsApp broadcasts for launches with opt-in compliance",
          "RFM-based segmentation: VIP, loyal, at-risk, dormant",
          "Win-back sequences and replenishment reminders",
          "Weekly campaign calendar tied to product/marketing themes",
        ],
        output: "30–40% revenue from owned channels",
      },
      {
        step: "Step 5",
        title: "Reporting + iteration",
        pills: ["Looker Studio", "GA4", "Triple Whale–style dashboards"],
        checks: [
          "Single source-of-truth dashboard refreshed daily",
          "Blended ROAS, MER, CAC, LTV tracked weekly",
          "Cohort + retention reporting by acquisition source",
          "Creative + audience post-mortems every 2 weeks",
          "Quarterly growth model + budget reallocation review",
        ],
        output: "Clear visibility + a system that compounds",
      },
    ],
  },

  // ── 3. CREATIVE SHOOT ──
  {
    id: "creative-shoot",
    name: "Creative Shoot System",
    short: "Brief → shoot → asset library",
    tagline: "From brief to on-brand assets ready for ads, organic and PDPs.",
    description:
      "Our end-to-end shoot system — covering pre-production, shoot day SOPs, post and final asset packaging — so every shoot delivers months of usable content, not just one campaign.",
    icon: Camera,
    accent: {
      bg: "bg-violet-500/5",
      text: "text-violet-600 dark:text-violet-400",
      ring: "border-violet-500",
      chip: "bg-violet-600 text-white",
    },
    finalOutput: {
      title: "Output: A months-long library of branded assets",
      sub: "Static, motion and UGC variants — production-ready and tagged for re-use.",
    },
    stages: [
      {
        step: "Step 1",
        title: "Brand & product brief",
        pills: ["Notion brief", "Brand book", "Reference decks"],
        checks: [
          "Discovery call with founder/marketing lead",
          "Audit of existing brand assets, tone and prior shoots",
          "Objectives mapped: ads, PDPs, organic, PR — per asset",
          "Creative angles + hooks aligned with performance learnings",
          "Sign-off on shoot brief before pre-production starts",
        ],
        output: "Locked creative brief with shot priorities",
      },
      {
        step: "Step 2",
        title: "Pre-production",
        pills: ["Mood boards", "Shot list", "Casting", "Location scouting"],
        checks: [
          "Mood board approved by client (look, lighting, palette)",
          "Detailed shot list mapped to ad/PDP requirements",
          "Casting: models, hands, talent — with backup options",
          "Location/studio booked with permits where needed",
          "Production schedule + call sheet circulated 48h before shoot",
        ],
        output: "Shoot-ready pre-pro pack signed off",
      },
      {
        step: "Step 3",
        title: "Shoot day SOPs",
        pills: ["Call sheet", "On-set monitor review", "Backup shots"],
        checks: [
          "Pre-shoot setup check: lights, lenses, props, wardrobe",
          "Live monitor review with client/producer per setup",
          "Every shot list item ticked off before wrap",
          "Behind-the-scenes captured for organic/social use",
          "Files backed up on-set to two drives + cloud upload",
        ],
        output: "Raw footage + stills delivered same day",
      },
      {
        step: "Step 4",
        title: "Post-production",
        pills: ["Photoshop", "Premiere / DaVinci", "After Effects", "Capcut"],
        checks: [
          "Selects shared with client within 48h of wrap",
          "Retouching, colour and audio per brand guidelines",
          "Cut-downs: 9:16, 1:1, 16:9 for every motion piece",
          "Static variants with hooks/headline overlays for ads",
          "Two rounds of revision included before final delivery",
        ],
        output: "Final, on-brand assets in every required format",
      },
      {
        step: "Step 5",
        title: "Asset library + handoff",
        pills: ["Google Drive / Frame.io", "Notion index", "Naming convention"],
        checks: [
          "All assets tagged: angle, hook, format, product, channel",
          "Searchable Notion/Drive index handed over to team",
          "Performance feedback loop set with media buying team",
          "Top performers flagged for sequel/iteration shoots",
          "Quarterly content audit to plan the next shoot",
        ],
        output: "A reusable asset library that fuels months of campaigns",
      },
    ],
  },

  // ── 4. INFLUENCER ──
  {
    id: "influencer",
    name: "Influencer System",
    short: "Sourcing → posting → reporting",
    tagline: "End-to-end influencer campaigns from a 1L+ vetted creator network.",
    description:
      "A repeatable system for running influencer campaigns at scale — from brief and AI-matched creator sourcing to posting, whitelisting and ROI reporting.",
    icon: Megaphone,
    accent: {
      bg: "bg-pink-500/5",
      text: "text-pink-600 dark:text-pink-400",
      ring: "border-pink-500",
      chip: "bg-pink-600 text-white",
    },
    finalOutput: {
      title: "Output: Measurable influencer-led growth",
      sub: "From brief to live in 48h — with creators that actually convert.",
    },
    stages: [
      {
        step: "Step 1",
        title: "Brief & objectives",
        pills: ["Notion brief", "Campaign goals", "KPI matrix"],
        checks: [
          "Discovery call to lock objectives: awareness, conversion, UGC",
          "Target audience persona + content angles defined",
          "Budget split across mega/macro/micro/nano tiers",
          "Deliverables locked: reels, posts, stories, whitelisted ads",
          "Success metrics + reporting cadence agreed upfront",
        ],
        output: "Approved campaign brief with KPIs",
      },
      {
        step: "Step 2",
        title: "Creator sourcing & vetting",
        pills: ["1L+ creator network", "AI matching", "Audience analyser"],
        checks: [
          "AI-matched shortlist from a 1L+ vetted creator network",
          "Audience quality check: geo, age, gender, fake-follower %",
          "Past content + brand-safety review for every shortlist",
          "Engagement rate benchmarked vs category average",
          "Final shortlist shared with client for sign-off",
        ],
        output: "Shortlist of on-brand, high-converting creators",
      },
      {
        step: "Step 3",
        title: "Negotiation & contracts",
        pills: ["Rate cards", "Usage rights", "Whitelisting clauses"],
        checks: [
          "Transparent negotiation with rate-card benchmarks",
          "Contract covering deliverables, timelines and exclusivity",
          "Usage rights + whitelisting/spark-ad rights secured",
          "Payment milestones tied to deliverables",
          "Centralised tracker for all live creator deals",
        ],
        output: "Locked creators with watertight contracts",
      },
      {
        step: "Step 4",
        title: "Brief, content & approvals",
        pills: ["Creator brief", "Reference decks", "Frame.io review"],
        checks: [
          "Creator brief with do's, don'ts, hooks and CTAs",
          "Product seeding + briefing call with each creator",
          "Two rounds of revision built into the timeline",
          "Brand-safe approval workflow before anything goes live",
          "Caption + hashtag toolkit shared per creator",
        ],
        output: "On-brand content approved and ready to post",
      },
      {
        step: "Step 5",
        title: "Posting + whitelisting / spark ads",
        pills: ["Meta Spark Ads", "TikTok Spark", "Story takeovers"],
        checks: [
          "Coordinated posting calendar across creators",
          "Top-performing organic posts boosted as spark/whitelisted ads",
          "UTM links + promo codes per creator for attribution",
          "Real-time monitoring of comments, DMs and engagement",
          "Always-on UGC pipeline feeding paid media library",
        ],
        output: "Amplified reach + paid-grade UGC at scale",
      },
      {
        step: "Step 6",
        title: "Performance reporting",
        pills: ["Looker Studio", "Creator-level ROI report", "Post-mortem"],
        checks: [
          "Creator-level dashboard: reach, engagement, conversions",
          "Blended campaign ROAS with attribution methodology",
          "Top + bottom performers flagged for next campaign",
          "Learnings doc to inform briefs and creator picks",
          "Ongoing roster of repeat-winning creators built over time",
        ],
        output: "Clear ROI + a smarter campaign every cycle",
      },
    ],
  },
];
