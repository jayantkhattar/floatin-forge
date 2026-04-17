import {
  Megaphone,
  Target,
  Camera,
  MessageCircle,
  Mail,
  Sparkles,
  Users,
  Bot,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDef {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  icon: LucideIcon;
  description: string;
  whatYouGet: string[];
  process: { step: string; title: string; desc: string }[];
  idealFor: string[];
  metric?: { value: string; label: string };
}

export const servicesData: ServiceDef[] = [
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    short: "SMM",
    tagline: "Organic + paid social that builds brand and pipeline.",
    icon: Megaphone,
    description:
      "End-to-end social media management across Instagram, LinkedIn, YouTube, and X — content calendars, community management, paid amplification, and reporting that ties posts to pipeline.",
    whatYouGet: [
      "Monthly content calendar (15–25 posts/month)",
      "Reels, carousels, statics, and long-form videos",
      "Community management & DM responses",
      "Paid boosting strategy + ad creatives",
      "Monthly analytics report with growth insights",
    ],
    process: [
      { step: "01", title: "Brand audit", desc: "Voice, visual identity, content gaps, competitor analysis." },
      { step: "02", title: "Content engine", desc: "Pillars, formats, hooks library, monthly calendar." },
      { step: "03", title: "Production", desc: "Shoot + design + copy + scheduling, all in-house." },
      { step: "04", title: "Optimize", desc: "Double down on winning formats, kill the rest." },
    ],
    idealFor: ["D2C brands", "Personal brands", "B2B founders", "Hospitality & lifestyle"],
    metric: { value: "100+", label: "ads/month produced in 4 languages" },
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    short: "PM",
    tagline: "Paid media that compounds — Meta, Google, YouTube, Spotify.",
    icon: Target,
    description:
      "Full-funnel paid media management focused on profit, not vanity ROAS. We build the account structure, write the creative briefs, and manage the daily optimization to scale spend without breaking unit economics.",
    whatYouGet: [
      "Account structure & campaign architecture",
      "Daily bid, budget & creative optimization",
      "Creative briefs tied to funnel stages",
      "Pixel + GA4 + server-side tracking setup",
      "Weekly performance reports & strategy calls",
    ],
    process: [
      { step: "01", title: "Audit & forecast", desc: "Tear down current accounts, build a realistic CAC/ROAS model." },
      { step: "02", title: "Launch", desc: "Account setup, tracking, creative, first 30-day test plan." },
      { step: "03", title: "Scale", desc: "Find winners, scale spend, expand to new platforms." },
      { step: "04", title: "Defend", desc: "Creative refresh cadence, fatigue tracking, MMM checks." },
    ],
    idealFor: ["E-commerce ₹1Cr–₹100Cr/yr", "Lead-gen B2B", "App installs", "Local service brands"],
    metric: { value: "₹25 Cr+", label: "ad spend managed profitably" },
  },
  {
    slug: "creative-support",
    name: "Creative Support — Shoot + Design",
    short: "Creative",
    tagline: "Performance-driven creative: shoots, edits, statics, motion.",
    icon: Camera,
    description:
      "An in-house creative studio that produces everything paid media needs to scale — UGC-style shoots, product photography, ad statics, motion graphics, and landing-page design — all briefed against funnel intent.",
    whatYouGet: [
      "Monthly shoot day (product, UGC, founder content)",
      "Static ad creatives (5–20 variants/month)",
      "Motion ads, reels, hook-cut edits",
      "Landing page & email design",
      "Brand guidelines & creative testing framework",
    ],
    process: [
      { step: "01", title: "Brief", desc: "Funnel-stage hypotheses → shot list & creative angles." },
      { step: "02", title: "Shoot", desc: "Half/full day production at studio or location." },
      { step: "03", title: "Edit", desc: "Multi-format outputs with hook + body + CTA variants." },
      { step: "04", title: "Test & iterate", desc: "Read paid data, double down on winning angles." },
    ],
    idealFor: ["D2C brands needing volume", "Founder-led personal brands", "Service businesses"],
    metric: { value: "100+", label: "creatives shipped monthly" },
  },
  {
    slug: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    short: "WhatsApp",
    tagline: "Recover lost leads. Nurture buyers. Close on chat.",
    icon: MessageCircle,
    description:
      "WhatsApp Business API setup with broadcast campaigns, abandoned-cart recovery, lead nurturing flows, and chat automation — powered by our proprietary LIT (Ladder of Intensive Trust) framework that turns cold leads into buyers.",
    whatYouGet: [
      "WhatsApp Business API setup & green tick",
      "LIT nurturing sequences (6–12 messages)",
      "Abandoned cart & browse-recovery flows",
      "Broadcast campaigns with template approval",
      "Chatbot + human-handover workflows",
    ],
    process: [
      { step: "01", title: "Map drop-offs", desc: "Find where leads go cold across the funnel." },
      { step: "02", title: "Build LIT sequences", desc: "Trust-ladder messages from awareness → close." },
      { step: "03", title: "Automate", desc: "Trigger flows on cart, lead, view, time-delay." },
      { step: "04", title: "Optimize", desc: "A/B test message, timing, offers, CTAs." },
    ],
    idealFor: ["E-commerce stores", "High-ticket service brands", "Coaches & clinics", "Real estate"],
    metric: { value: "3–5x", label: "lift in lead-to-customer conversion" },
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    short: "Email",
    tagline: "Automated lifecycle email that prints revenue while you sleep.",
    icon: Mail,
    description:
      "Klaviyo, Mailchimp, HubSpot setups with welcome flows, abandoned-cart, post-purchase, win-back, and weekly campaigns — built on the LIT framework so every email earns trust and drives action.",
    whatYouGet: [
      "ESP setup & deliverability (SPF/DKIM/DMARC)",
      "8–12 lifecycle automations",
      "Weekly campaign calendar & copy",
      "Segmentation & list hygiene",
      "Revenue attribution dashboard",
    ],
    process: [
      { step: "01", title: "Audit list & flows", desc: "Deliverability, segments, gaps in lifecycle." },
      { step: "02", title: "Build flows", desc: "Welcome, browse, cart, post-purchase, win-back." },
      { step: "03", title: "Campaigns", desc: "Weekly broadcasts mapped to product launches." },
      { step: "04", title: "Optimize", desc: "Subject lines, send times, offers, segments." },
    ],
    idealFor: ["E-commerce", "SaaS", "Course creators", "B2B with long sales cycles"],
    metric: { value: "20–35%", label: "of revenue from email when done right" },
  },
  {
    slug: "ai-apps",
    name: "AI Apps",
    short: "AI Apps",
    tagline: "Custom AI tools that solve a real business problem.",
    icon: Sparkles,
    description:
      "We design and ship lightweight AI-powered web apps — internal tools, customer-facing calculators, content generators, agent workflows — built fast on Lovable / Next.js with OpenAI, Anthropic, and your data.",
    whatYouGet: [
      "Discovery & solution scoping",
      "Working prototype in 2–4 weeks",
      "Integration with your CRM / data sources",
      "Hosting, monitoring & iteration",
      "Source code ownership",
    ],
    process: [
      { step: "01", title: "Problem framing", desc: "Pin down the workflow worth automating." },
      { step: "02", title: "Prototype", desc: "Ship a working v1 to test with real users." },
      { step: "03", title: "Integrate", desc: "Connect to your stack — CRM, DB, Slack, etc." },
      { step: "04", title: "Scale", desc: "Harden, monitor, expand based on usage." },
    ],
    idealFor: ["Agencies", "Operators automating ops", "Founders shipping AI features", "SMB tooling"],
    metric: { value: "2–4 wks", label: "from idea to live app" },
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    short: "Influencer",
    tagline: "Vetted creators, AI-matched to your brand. Live in 48 hours.",
    icon: Users,
    description:
      "Powered by ALA Global Media — 1,00,000+ vetted creators across nano, micro, macro, and celebrity tiers. AI-driven creator matching on 40+ data points, brief-to-live in 48 hours, with 4.8% avg engagement (vs 2.1% industry).",
    whatYouGet: [
      "Brand-fit creator shortlist (10–50 options)",
      "Negotiation, contracts & briefs",
      "Content approval workflow",
      "Posting, tracking & UTM management",
      "Performance + sentiment report",
    ],
    process: [
      { step: "01", title: "Strategy", desc: "Tier mix, content angles, KPIs, budget split." },
      { step: "02", title: "Match", desc: "AI matches creators on audience + content fit." },
      { step: "03", title: "Activate", desc: "Brief → shoot → approve → publish in 48 hrs." },
      { step: "04", title: "Measure", desc: "Engagement, reach, sales lift, sentiment." },
    ],
    idealFor: ["D2C launches", "Apps & gaming", "Beauty, food, fashion", "B2C tech"],
    metric: { value: "1L+", label: "vetted creators (via ALA Global Media)" },
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    short: "AI Automation",
    tagline: "Replace manual ops with agents that work 24/7.",
    icon: Bot,
    description:
      "n8n, Make, Zapier, custom Python — we automate marketing ops, lead routing, reporting, content production, and customer support workflows so your team stops doing $5/hr work.",
    whatYouGet: [
      "Workflow audit & automation roadmap",
      "5–15 automations live in 30 days",
      "AI agents for content, support, ops",
      "Monitoring & error alerting",
      "Documentation & team training",
    ],
    process: [
      { step: "01", title: "Audit", desc: "Map every manual workflow eating hours/week." },
      { step: "02", title: "Prioritize", desc: "Rank by hours saved × ease of automation." },
      { step: "03", title: "Build", desc: "Ship workflows in n8n / Make / custom code." },
      { step: "04", title: "Maintain", desc: "Monitor, fix, improve, expand monthly." },
    ],
    idealFor: ["Agencies", "Ops-heavy businesses", "Solo founders", "Sales & support teams"],
    metric: { value: "20–40 hrs", label: "saved per week per role" },
  },
];

export const getServiceBySlug = (slug: string) =>
  servicesData.find((s) => s.slug === slug);
