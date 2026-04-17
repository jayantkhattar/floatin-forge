// Blog post data — long-form content stored as structured blocks so the
// BlogPost renderer can build TOC, FAQs, and JSON-LD without parsing markdown.

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; tone?: "info" | "tip" | "warn"; title?: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "cta"; title: string; text: string; href: string; label: string };

export interface FAQItem {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;            // ≤60 chars
  metaDescription: string;      // ≤160 chars
  excerpt: string;
  category: string;
  keywords: string[];
  readTime: string;
  date: string;                  // ISO
  dateModified?: string;
  author: string;
  featured?: boolean;
  keyTakeaways?: string[];
  content: ContentBlock[];       // empty array = outline-only stub
  faq?: FAQItem[];
  relatedSlugs?: string[];       // other blog slugs
  relatedServices?: string[];    // service slugs
  relatedTools?: string[];       // tool paths
  relatedCaseSlug?: string;      // single case study reference
  isOutline?: boolean;
}

const consultationCta = (topic: string): ContentBlock => ({
  type: "cta",
  title: "Want this audited for your brand?",
  text: `Jayant personally reviews ${topic} for a handful of brands every month — no pitch, just a 30-min strategy call.`,
  href: "/book-call",
  label: "Book a free strategy call",
});

export const blogPosts: BlogPost[] = [
  // ============================================================
  // 1. CPL REDUCTION — full article
  // ============================================================
  {
    slug: "reduce-cost-per-lead-50-percent-90-days",
    title: "How to Reduce Your Cost Per Lead by 50% in 90 Days",
    metaTitle: "Reduce Cost Per Lead by 50% in 90 Days | Floatin",
    metaDescription: "A practical 90-day framework to cut your cost per lead in half — used by Indian D2C, real estate, and service brands. Real numbers, real steps.",
    excerpt: "Most brands overspend on lead generation because they optimize for volume instead of quality. Here's a systematic approach to cutting your CPL in half.",
    category: "Lead Generation",
    keywords: ["cost per lead", "reduce CPL", "lead generation India", "performance marketing", "Meta Ads CPL", "Google Ads CPL"],
    readTime: "9 min read",
    date: "2026-04-02",
    dateModified: "2026-04-15",
    author: "Jayant Khattar",
    featured: true,
    keyTakeaways: [
      "Most CPL problems are funnel problems, not ad problems — fix the leak before raising the budget.",
      "Audience-creative-offer fit drives 80% of CPL movement; bidding tweaks drive maybe 10%.",
      "A 30-day diagnostic + 60-day execution loop reliably cuts CPL by 40–60% for our clients.",
      "Track lead quality, not just lead count — a ₹100 junk lead is more expensive than a ₹400 qualified one.",
    ],
    content: [
      { type: "p", text: "If your cost per lead has been climbing for the last six months, you're not alone. CPMs on Meta in India have risen roughly 20–30% year-on-year, and Google's broad-match defaults are quietly bleeding budget. But the brands we work with consistently cut CPL by 40–60% inside 90 days — not by finding a 'hack', but by following a boring, repeatable process." },
      { type: "p", text: "This guide is that process. No fluff, no screenshots of someone else's dashboard." },

      { type: "h2", id: "why-cpl-rises", text: "Why your CPL is rising in the first place" },
      { type: "p", text: "Before you can fix CPL, you need to know which of the four leaks is causing it. In our audits across 50+ Indian brands, the cause is almost always one of these:" },
      { type: "ul", items: [
        "Audience fatigue — you've been showing the same ad to the same people for 60+ days.",
        "Creative fatigue — your top ad has been running unchanged for 30+ days and frequency is past 3.5.",
        "Funnel friction — the landing page, form, or thank-you flow is leaking 30–60% of intent.",
        "Lead-quality blindness — you're optimizing for cheap leads, not closeable leads.",
      ]},
      { type: "callout", tone: "tip", title: "Quick diagnostic", text: "Pull your last 90 days. If frequency >3.5 and CTR is dropping while CPM stays flat, it's creative fatigue. If CTR is healthy but lead form completion is <40%, it's funnel friction." },

      { type: "h2", id: "the-90-day-framework", text: "The 90-day CPL reduction framework" },
      { type: "p", text: "We break the 90 days into three 30-day blocks. Each has one clear outcome." },

      { type: "h3", id: "days-1-30", text: "Days 1–30: Diagnose and instrument" },
      { type: "ol", items: [
        "Audit the last 90 days of spend by campaign, ad set, and creative. Tag each by 'audience type' and 'offer'.",
        "Install proper conversion tracking — server-side via the Conversions API on Meta, enhanced conversions on Google. Most accounts lose 15–25% signal without this.",
        "Set up a lead-quality scoring system. We use a simple 1–5 scale tagged in the CRM at the qualification stage.",
        "Identify your bottom 30% of campaigns by qualified-lead cost, not raw CPL. Pause or restructure them.",
      ]},
      { type: "callout", tone: "info", title: "Use the calculator", text: "Plug your numbers into our free CPL calculator to see what a 'good' CPL looks like for your funnel and AOV." },
      { type: "cta", title: "Try the Lead Cost Calculator", text: "See your blended CPL across paid channels and the CPL you should be targeting based on your close rate.", href: "/tools/lead-cost-calculator", label: "Open calculator" },

      { type: "h3", id: "days-31-60", text: "Days 31–60: Rebuild creative and offer" },
      { type: "p", text: "Most CPL drops happen here. The mechanism is simple: a fresh, sharper creative against a tighter audience, with a clearer offer, will always beat a tired one — regardless of bidding strategy." },
      { type: "ul", items: [
        "Ship 8–12 new creatives per ad set per month, organized by hook angle (problem-aware, solution-aware, social proof, etc.).",
        "Tighten the offer — 'Get a free quote' loses to 'Get your custom quote in 24 hours, or we send you a ₹500 voucher'.",
        "Run a Conversions campaign optimized for 'qualified lead' (a custom event), not 'lead'.",
        "Cap frequency at 2.5 for cold audiences, 4 for retargeting.",
      ]},

      { type: "h3", id: "days-61-90", text: "Days 61–90: Optimize the funnel, not the ads" },
      { type: "p", text: "By day 60, ad-side wins are largely captured. The next 30% of CPL improvement lives in the funnel — and most teams ignore it." },
      { type: "ol", items: [
        "Reduce form fields to 3 (name, phone, one qualifier). Every field beyond 3 cuts completion by ~7%.",
        "Add a WhatsApp option as a primary CTA — Indian users convert 2–3× higher on WhatsApp than on email.",
        "Build a 24-hour automated nurture sequence. A lead contacted within 5 minutes is 9× more likely to close.",
        "Move thank-you-page tracking server-side. Most brands lose 10–20% of lead events to ad blockers.",
      ]},
      { type: "callout", tone: "warn", title: "Don't skip this", text: "We've seen brands cut ad spend in half just by fixing the funnel — same lead volume, half the cost. The funnel is the highest-leverage lever in the system." },

      { type: "h2", id: "real-numbers", text: "What this looks like in real numbers" },
      { type: "p", text: "One of our real estate clients came in at ₹1,840 CPL and a 4% qualification rate. After the 90-day cycle: ₹780 CPL, 11% qualification rate. Same monthly budget, 3.2× more closed deals. The framework didn't change anything magical — it just removed the leaks one by one." },

      { type: "h2", id: "common-mistakes", text: "Common mistakes that keep CPL high" },
      { type: "ul", items: [
        "Chasing vanity CPL — a ₹50 lead from a giveaway audience is worse than a ₹500 lead from a high-intent search query.",
        "Switching agencies every 4 months — most CPL improvement compounds after month 3.",
        "Ignoring offline conversion uploads — Meta and Google can't optimize for outcomes they can't see.",
        "Running Advantage+ without a control campaign — you can't tell if it's working.",
      ]},

      consultationCta("lead generation funnels"),
    ],
    faq: [
      { q: "What is a good cost per lead in India?", a: "It depends entirely on your AOV and close rate. For a B2C service with a ₹15,000 AOV and 15% close rate, CPLs of ₹400–₹800 are healthy. For a D2C product with ₹2,000 AOV, you typically need CPL under ₹150. Use our Lead Cost Calculator to find your specific target." },
      { q: "How long does it take to reduce CPL?", a: "You can usually see a 15–25% improvement inside 30 days from tracking and audience cleanup alone. The full 40–60% reduction typically takes 60–90 days because creative testing and funnel rebuilds compound over time." },
      { q: "Should I use Meta Advantage+ or manual campaigns to lower CPL?", a: "Both — but always run them as separate campaigns so you can compare. Advantage+ wins on scale; manual wins on control and audience exclusion. We typically split 60/40 once a brand has enough conversion volume." },
      { q: "Does WhatsApp lead generation lower CPL?", a: "Yes, significantly. WhatsApp Click-to-Chat ads typically deliver CPLs 30–50% lower than form lead ads in India, and the leads are usually higher intent. The trade-off is you need a real human or automation to respond inside 5 minutes." },
      { q: "Why is my CPL low but my sales aren't growing?", a: "You're optimizing for the wrong metric. Cheap leads from broad audiences or giveaways rarely close. Switch your campaign objective to a qualified-lead custom event and start tracking lead quality at the CRM level. The CPL might rise but revenue will follow." },
    ],
    relatedSlugs: ["whatsapp-marketing-guide-indian-brands", "lead-funnel-blueprint", "retargeting-that-actually-works"],
    relatedServices: ["performance-marketing", "whatsapp-marketing"],
    relatedTools: ["/tools/lead-cost-calculator", "/tools/funnel-health-checker"],
  },

  // ============================================================
  // 2. WHATSAPP — full article
  // ============================================================
  {
    slug: "whatsapp-marketing-guide-indian-brands",
    title: "The Complete Guide to WhatsApp Marketing for Indian Brands",
    metaTitle: "WhatsApp Marketing Guide for Indian Brands 2026 | Floatin",
    metaDescription: "How Indian brands use WhatsApp to convert leads 3× better than email. Setup, automation, templates, and compliance — the complete guide.",
    excerpt: "WhatsApp has 500M+ users in India. Learn how to build automated flows that convert leads into customers at 3× the rate of email.",
    category: "WhatsApp Marketing",
    keywords: ["WhatsApp marketing", "WhatsApp Business API", "WhatsApp automation India", "WhatsApp lead nurturing", "click to chat ads"],
    readTime: "13 min read",
    date: "2026-03-18",
    dateModified: "2026-04-10",
    author: "Jayant Khattar",
    featured: true,
    keyTakeaways: [
      "WhatsApp open rates in India hover around 90% vs 18% for email — but only if you respect the medium.",
      "The Business API (not the regular Business app) is required for any real automation, broadcast, or CRM integration.",
      "Conversation-led flows convert 2–3× better than blast-style broadcasts.",
      "Compliance matters: opt-ins, template approvals, and 24-hour service windows are non-negotiable.",
    ],
    content: [
      { type: "p", text: "Email open rates in India have collapsed below 18%. SMS is mostly OTPs. WhatsApp is the one channel where your message will actually be read — usually within 3 minutes. But most brands still treat it like email, blast generic offers, and wonder why their numbers don't improve." },
      { type: "p", text: "This guide walks through how to set up WhatsApp marketing the right way: from picking the right tool, to writing flows that convert, to staying compliant with Meta's policies." },

      { type: "h2", id: "business-app-vs-api", text: "WhatsApp Business App vs. Business API" },
      { type: "p", text: "If you're running anything beyond a one-person shop, you need the API — not the app." },
      { type: "ul", items: [
        "Business App: Free, single device, manual replies. Fine for a freelancer or local store.",
        "Business API: Paid (per-conversation pricing), unlimited devices, full automation, CRM integration, broadcast templates. Required for any brand doing 100+ conversations/month.",
      ]},
      { type: "callout", tone: "info", title: "API access", text: "You don't get the API directly from Meta — you go through a Business Solution Provider (BSP) like AiSensy, Interakt, Wati, or Gupshup. Pricing varies but Meta charges per 24-hour conversation window in three tiers (utility, marketing, authentication)." },

      { type: "h2", id: "the-three-flows", text: "The three flows every brand should run" },

      { type: "h3", id: "flow-1-acquisition", text: "1. Acquisition: Click-to-WhatsApp ads" },
      { type: "p", text: "Run Meta ads with a 'Send WhatsApp Message' CTA. The user lands directly in your WhatsApp inbox with a pre-filled message. No form, no friction, no abandoned landing page." },
      { type: "ul", items: [
        "Use a clear hook in the ad: 'DM us to get a free quote in 60 seconds' beats 'Learn more'.",
        "Pre-fill a specific message ('I want a quote for the Mumbai 2BHK') so you know intent before you reply.",
        "Auto-respond inside 30 seconds with a qualifier — even if a human takes over later.",
      ]},

      { type: "h3", id: "flow-2-nurture", text: "2. Nurture: 24-hour conversation windows" },
      { type: "p", text: "Once a user messages you, you have a 24-hour 'service window' to send free-form messages. After that, you can only send pre-approved template messages (and pay per template)." },
      { type: "ol", items: [
        "Within 30 seconds: auto-reply confirming receipt + asking one qualifier.",
        "Within 5 minutes: human or bot reply with a personalized response.",
        "Within 24 hours: send relevant info, social proof, or a soft CTA.",
        "Day 2 onward: switch to approved utility/marketing templates for re-engagement.",
      ]},
      { type: "cta", title: "Estimate your WhatsApp ROI", text: "See what WhatsApp could be worth for your brand based on your current lead volume and close rate.", href: "/tools/whatsapp-roi-calculator", label: "Open WhatsApp ROI calculator" },

      { type: "h3", id: "flow-3-retention", text: "3. Retention: Broadcasts and re-engagement" },
      { type: "p", text: "This is where most brands mess up. WhatsApp broadcasts work — but only if your list is opted-in and your message is genuinely useful." },
      { type: "ul", items: [
        "Always get explicit opt-in (a checkbox on your form, or a reply 'YES' confirmation).",
        "Segment ruthlessly — never broadcast the same message to your entire list.",
        "Use marketing templates for promos, utility templates for order/service updates.",
        "Cap broadcasts at 2/month per segment. Anything more and unsubscribes spike.",
      ]},

      { type: "h2", id: "compliance", text: "Compliance: don't get banned" },
      { type: "callout", tone: "warn", title: "Meta will ban you", text: "Sending unsolicited promotional messages, using non-approved templates, or having a low quality rating will get your number rate-limited or banned. We've seen brands lose entire WhatsApp programs overnight." },
      { type: "ul", items: [
        "Get explicit opt-in before any marketing message.",
        "Use the right template category — utility for transactional, marketing for promos.",
        "Monitor your quality rating in WhatsApp Manager weekly.",
        "Never copy-paste promo content into the regular Business App for 'cheaper' broadcasts — it's the fastest way to get banned.",
      ]},

      { type: "h2", id: "tooling", text: "Recommended tooling stack for India" },
      { type: "ul", items: [
        "BSP: AiSensy, Interakt, or Wati for SMBs; Gupshup or DoubleTick for enterprise.",
        "CRM: Zoho or HubSpot with WhatsApp integration via the BSP.",
        "Automation: Use the BSP's flow builder for simple journeys; n8n or Make for advanced.",
        "Analytics: Track conversation-to-conversion in your CRM, not in the BSP dashboard.",
      ]},

      { type: "h2", id: "real-results", text: "What good looks like" },
      { type: "p", text: "Across our clients running WhatsApp programs at scale, the typical metrics look like: 90%+ message open rate, 35–55% reply rate within 24 hours, 12–18% conversation-to-qualified-lead rate, and a CPL roughly 30–50% lower than form lead ads. Those numbers compound — by month 3, WhatsApp usually becomes the highest-ROAS channel in the mix." },

      consultationCta("WhatsApp flows and automation"),
    ],
    faq: [
      { q: "Is WhatsApp marketing legal in India?", a: "Yes, when done through the official Business API with proper opt-ins. India follows Meta's global WhatsApp Business policies plus the DPDP Act for data handling. Sending bulk promotional messages from a personal or non-API number violates Meta's terms and can get the number banned." },
      { q: "How much does WhatsApp Business API cost in India?", a: "BSP platform fees range from ₹999/month (entry) to ₹15,000+/month (enterprise). On top of that, Meta charges per 24-hour conversation: roughly ₹0.30–₹0.80 for utility, ₹0.80–₹1.20 for marketing, and ₹0.10–₹0.20 for authentication conversations as of 2026." },
      { q: "Which BSP should I choose — AiSensy, Wati, Interakt, or Gupshup?", a: "AiSensy and Interakt are the most cost-effective for D2C/SMB brands. Wati has the best UI for non-technical teams. Gupshup is better for high-volume enterprise use cases. Always run a 30-day pilot before committing — switching BSPs later is painful." },
      { q: "How do I get more leads on WhatsApp?", a: "The fastest way is Click-to-WhatsApp ads on Meta. They typically deliver 30–50% lower CPL than lead form ads in India because there's zero friction. Pair them with a sub-30-second auto-responder and a qualifier message to filter intent." },
      { q: "Can I broadcast offers on WhatsApp?", a: "Yes, using approved marketing template messages, but only to opted-in users. Cap at 2 broadcasts per month per segment, segment by past behaviour, and always include an opt-out option. Broadcasting too aggressively will tank your quality rating." },
    ],
    relatedSlugs: ["reduce-cost-per-lead-50-percent-90-days", "lead-funnel-blueprint", "retargeting-that-actually-works"],
    relatedServices: ["whatsapp-marketing", "performance-marketing"],
    relatedTools: ["/tools/whatsapp-roi-calculator", "/tools/lead-cost-calculator"],
  },

  // ============================================================
  // 3. META ADS CREATIVE TESTING — full article
  // ============================================================
  {
    slug: "meta-ads-creative-testing-framework",
    title: "Meta Ads Creative Testing Framework: A Step-by-Step System",
    metaTitle: "Meta Ads Creative Testing Framework 2026 | Floatin",
    metaDescription: "Stop guessing which Meta ads work. A structured creative testing framework to find winners consistently and scale them profitably.",
    excerpt: "Stop guessing which creatives work. Use this structured testing framework to find winners consistently and scale them profitably.",
    category: "Meta Ads",
    keywords: ["Meta ads creative testing", "Facebook ads testing framework", "ad creative iteration", "performance creative", "creative strategy"],
    readTime: "10 min read",
    date: "2026-03-05",
    dateModified: "2026-04-10",
    author: "Jayant Khattar",
    featured: false,
    keyTakeaways: [
      "Creative is now ~70% of Meta ad performance — bidding and audiences are largely automated.",
      "Test by hook angle, not by 'random new creative' — angles compound, randomness doesn't.",
      "Run a dedicated Testing campaign separate from Scaling — don't pollute your winners.",
      "Kill at 3 days, scale at 7 — most brands wait too long on losers and too short on winners.",
    ],
    content: [
      { type: "p", text: "Meta's algorithm has eaten most of the levers we used to pull. Detailed targeting? Mostly broad now. Bidding strategy? Mostly auto. Placements? Advantage+. The one lever still firmly in your hands is creative — and it's now responsible for the majority of performance variance." },
      { type: "p", text: "This is the testing framework we use across 30+ accounts to find winning creatives consistently." },

      { type: "h2", id: "structure", text: "Account structure: Testing vs Scaling" },
      { type: "p", text: "Run two separate campaigns at the account level:" },
      { type: "ul", items: [
        "Testing campaign — low budget (₹500–₹2,000/day), CBO off, broad audience, optimized for the same conversion event as scaling.",
        "Scaling campaign — higher budget, holds only proven winners, optimized aggressively.",
      ]},
      { type: "callout", tone: "tip", title: "Why two campaigns", text: "Mixing tests into scaling campaigns confuses the algorithm and drags down learning. Keep them physically separate." },

      { type: "h2", id: "angle-framework", text: "The 4-angle creative framework" },
      { type: "p", text: "Don't test 'random new creative'. Test by angle. We work with four core angles:" },
      { type: "ol", items: [
        "Problem-aware — the user knows the problem, you make it visceral. ('Tired of lukewarm leads?')",
        "Solution-aware — the user knows solutions exist, you position yours as the right one.",
        "Social proof — testimonials, case studies, founder stories.",
        "Comparison / mechanism — 'Why X works better than Y' or 'How our system works'.",
      ]},
      { type: "p", text: "Each month, ship 3–4 creatives per angle. That's 12–16 fresh assets/month per ad set." },

      { type: "h2", id: "rules", text: "Kill and scale rules" },
      { type: "ul", items: [
        "Kill rule: After 3 days at 3× CPA target with no conversions, kill it. Don't 'give it more time'.",
        "Watch rule: 1.5–2× CPA target — keep but don't add budget.",
        "Scale rule: At target CPA with 7+ days of stability, duplicate into the Scaling campaign at 2–3× budget.",
        "Refresh rule: Once a winner hits frequency 3.5+ in cold audiences, build 2 variants of it (new hook, same offer) before it dies.",
      ]},
      { type: "callout", tone: "info", title: "Track angle, not just creative", text: "Tag every ad with its angle in the naming convention. After 60 days, you'll see which angle drives the most winners — and you can lean into it." },

      { type: "h2", id: "production", text: "Production: speed beats polish" },
      { type: "p", text: "A 4K shot with poor messaging will lose to a phone-shot UGC ad with a sharp hook. Production budget should follow proof, not precede it." },
      { type: "ul", items: [
        "Ship 80% of new tests as static + UGC video — quick to produce, easy to iterate.",
        "Reserve high-production for proven angles only.",
        "Build a hook library — first 3 seconds is 70% of performance.",
      ]},

      { type: "cta", title: "Plan your ad budget around testing", text: "Use our Ads Budget Planner to allocate testing vs scaling spend based on your CPA target.", href: "/tools/ads-budget-planner", label: "Open budget planner" },

      { type: "h2", id: "common-mistakes", text: "Common mistakes" },
      { type: "ul", items: [
        "Testing one creative at a time — you need 3–5 in flight to learn.",
        "Killing winners by over-optimizing — once you find a winner, change as little as possible.",
        "Confusing creative fatigue with audience fatigue — check frequency before you blame the audience.",
        "Not documenting losers — losers teach you angles to avoid; track them.",
      ]},

      consultationCta("Meta ads accounts"),
    ],
    faq: [
      { q: "How many creatives should I test per week on Meta?", a: "For a brand spending ₹1L–₹5L/month, aim for 8–12 fresh creatives in test per week, organized by 4 hook angles. Anything less and you won't find winners fast enough; anything more and you'll spread budget too thin to learn." },
      { q: "How long should I let a Meta ad run before killing it?", a: "Use a 3-day rule at 3× your CPA target. If a creative spends 3× your target CPA with zero conversions in 3 days, kill it. Don't fall for 'give the algorithm time' — at that spend level, the verdict is in." },
      { q: "Should I use Advantage+ Shopping campaigns for creative testing?", a: "No — use Advantage+ for scaling proven winners only. Use a manual Conversions campaign for testing because it gives you cleaner attribution at the creative level. Once a creative wins, move it into Advantage+ to scale." },
      { q: "What's the best ad format for Meta in India in 2026?", a: "Short-form vertical video (9:16, 15–25 seconds) with strong text overlay still outperforms most other formats for cold audiences. Static image ads work surprisingly well for retargeting and offer-led promos." },
      { q: "How do I know if my creative is fatigued?", a: "Watch three signals: frequency above 3.5 on cold audiences, CTR dropping by more than 25% week-over-week, and CPA rising by more than 40% with no other account changes. When two of three trigger, build variants." },
    ],
    relatedSlugs: ["reduce-cost-per-lead-50-percent-90-days", "google-ads-not-converting-fix", "retargeting-that-actually-works"],
    relatedServices: ["performance-marketing", "creative-support"],
    relatedTools: ["/tools/ads-budget-planner", "/tools/lead-cost-calculator"],
  },

  // ============================================================
  // OUTLINES — to be expanded
  // ============================================================
  {
    slug: "google-ads-not-converting-fix",
    title: "Why Your Google Ads Aren't Converting (And How to Fix It)",
    metaTitle: "Why Google Ads Aren't Converting & How to Fix | Floatin",
    metaDescription: "Common Google Ads mistakes that drain budgets — match types, landing page misalignment, conversion tracking — and the fixes that work.",
    excerpt: "Common Google Ads mistakes that drain budgets — from poor keyword match types to landing page misalignment. Plus, the fixes that actually work.",
    category: "Google Ads",
    keywords: ["Google Ads not converting", "Google Ads optimization", "fix Google Ads", "search campaign tips"],
    readTime: "8 min read",
    date: "2026-02-20",
    author: "Jayant Khattar",
    isOutline: true,
    content: [
      { type: "p", text: "Full article coming soon. Outline: broad-match misuse, missing negative keywords, landing page mismatch, broken conversion tracking, and Performance Max black-box pitfalls." },
      consultationCta("Google Ads accounts"),
    ],
    relatedSlugs: ["meta-ads-creative-testing-framework", "reduce-cost-per-lead-50-percent-90-days"],
    relatedServices: ["performance-marketing"],
    relatedTools: ["/tools/ads-budget-planner"],
  },
  {
    slug: "performance-marketing-systems-vs-campaigns",
    title: "Building a Performance Marketing System vs. Running Campaigns",
    metaTitle: "Performance Marketing Systems vs Campaigns | Floatin",
    metaDescription: "Why systems thinking outperforms campaign-based marketing — and how to build a growth engine instead of a campaign calendar.",
    excerpt: "The difference between agencies that deliver short-term spikes and those that build lasting growth. Systems thinking applied to digital marketing.",
    category: "Strategy",
    keywords: ["performance marketing system", "marketing systems", "growth engine"],
    readTime: "7 min read",
    date: "2026-02-08",
    author: "Jayant Khattar",
    isOutline: true,
    content: [
      { type: "p", text: "Full article coming soon. Outline: campaign vs system mindset, the 4 pillars of a marketing system (data, creative, funnel, nurture), and how to migrate from one-off campaigns to compounding systems." },
      consultationCta("your marketing system"),
    ],
    relatedSlugs: ["lead-funnel-blueprint", "reduce-cost-per-lead-50-percent-90-days"],
    relatedServices: ["performance-marketing", "ai-automation"],
  },
  {
    slug: "ecommerce-roas-optimization",
    title: "E-commerce ROAS Optimization: From 2× to 4× in 60 Days",
    metaTitle: "E-commerce ROAS Optimization: 2× to 4× in 60 Days | Floatin",
    metaDescription: "How Indian D2C brands double ROAS through catalog optimization, audience segmentation, and creative iteration — a 60-day playbook.",
    excerpt: "A case-study-driven guide to improving your e-commerce ROAS through catalog optimization, audience segmentation, and creative iteration.",
    category: "E-commerce",
    keywords: ["ecommerce ROAS", "improve ROAS", "D2C performance marketing", "Meta shopping ads"],
    readTime: "9 min read",
    date: "2026-01-22",
    author: "Jayant Khattar",
    isOutline: true,
    content: [
      { type: "p", text: "Full article coming soon. Outline: catalog hygiene, dynamic creative for product ads, segment-led ROAS analysis, and the offer architecture that compounds AOV." },
      consultationCta("your D2C account"),
    ],
    relatedSlugs: ["meta-ads-creative-testing-framework", "retargeting-that-actually-works"],
    relatedServices: ["performance-marketing", "creative-support"],
    relatedTools: ["/tools/break-even-calculator"],
  },
  {
    slug: "lead-funnel-blueprint",
    title: "The Lead Funnel Blueprint: Ads → Landing Page → CRM → Close",
    metaTitle: "Lead Funnel Blueprint: Ads to Close | Floatin",
    metaDescription: "An end-to-end framework for building lead generation funnels that don't just generate leads — they generate revenue.",
    excerpt: "An end-to-end framework for building lead generation funnels that don't just generate leads — they generate revenue.",
    category: "Lead Generation",
    keywords: ["lead funnel", "lead generation system", "funnel optimization", "CRM funnel"],
    readTime: "11 min read",
    date: "2026-01-10",
    author: "Jayant Khattar",
    isOutline: true,
    content: [
      { type: "p", text: "Full article coming soon. Outline: the 4-stage funnel (ads, page, CRM, close), measurement at every stage, the 5-minute response rule, and what good closes-per-lead looks like by industry." },
      consultationCta("your lead funnel end-to-end"),
    ],
    relatedSlugs: ["reduce-cost-per-lead-50-percent-90-days", "whatsapp-marketing-guide-indian-brands"],
    relatedServices: ["performance-marketing", "whatsapp-marketing", "ai-automation"],
    relatedTools: ["/tools/funnel-health-checker", "/tools/lead-cost-calculator"],
  },
  {
    slug: "retargeting-that-actually-works",
    title: "How to Set Up Retargeting That Actually Works",
    metaTitle: "Retargeting That Actually Works: Intent-Based Sequences | Floatin",
    metaDescription: "Most retargeting campaigns waste money. Build intent-based retargeting sequences that re-engage warm users without burning frequency.",
    excerpt: "Most retargeting campaigns waste money showing the same ad to uninterested users. Here's how to build intent-based retargeting sequences.",
    category: "Performance Marketing",
    keywords: ["retargeting", "Meta retargeting", "intent-based retargeting", "remarketing"],
    readTime: "8 min read",
    date: "2025-12-15",
    author: "Jayant Khattar",
    isOutline: true,
    content: [
      { type: "p", text: "Full article coming soon. Outline: segment by intent depth (page view → cart → checkout), creative per segment, frequency caps, and exclusion logic that prevents wasted spend." },
      consultationCta("retargeting setup"),
    ],
    relatedSlugs: ["meta-ads-creative-testing-framework", "ecommerce-roas-optimization"],
    relatedServices: ["performance-marketing"],
    relatedTools: ["/tools/ads-budget-planner"],
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);

export const getRelatedPosts = (slug: string, limit = 3) => {
  const post = getPostBySlug(slug);
  if (!post) return [];
  const explicit = (post.relatedSlugs ?? [])
    .map(s => getPostBySlug(s))
    .filter((p): p is BlogPost => Boolean(p));
  if (explicit.length >= limit) return explicit.slice(0, limit);
  // fallback: same category
  const fillers = blogPosts.filter(
    p => p.slug !== slug && p.category === post.category && !explicit.includes(p),
  );
  return [...explicit, ...fillers].slice(0, limit);
};

export const allCategories = Array.from(new Set(blogPosts.map(p => p.category)));
