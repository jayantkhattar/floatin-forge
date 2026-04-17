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
  // 4. GOOGLE ADS NOT CONVERTING — full article
  // ============================================================
  {
    slug: "google-ads-not-converting-fix",
    title: "Why Your Google Ads Aren't Converting (And How to Fix It)",
    metaTitle: "Why Google Ads Aren't Converting & How to Fix | Floatin",
    metaDescription: "Common Google Ads mistakes that drain budgets — match types, landing page misalignment, conversion tracking — and the fixes that work.",
    excerpt: "Common Google Ads mistakes that drain budgets — from poor keyword match types to landing page misalignment. Plus, the fixes that actually work.",
    category: "Google Ads",
    keywords: ["Google Ads not converting", "Google Ads optimization", "fix Google Ads", "search campaign tips", "Performance Max"],
    readTime: "9 min read",
    date: "2026-02-20",
    dateModified: "2026-04-15",
    author: "Jayant Khattar",
    keyTakeaways: [
      "90% of underperforming Google Ads accounts have one of five fixable issues, not a 'budget problem'.",
      "Broad match without negative keyword discipline is the #1 budget leak in 2026.",
      "Conversion tracking misconfiguration silently kills smart bidding inside 2 weeks.",
      "Landing page mismatch (ad promise ≠ page reality) tanks Quality Score and CPC.",
    ],
    content: [
      { type: "p", text: "If your Google Ads are spending but not converting, the issue is rarely 'Google's algorithm got worse'. In 50+ account audits we've done in the last year, the cause almost always sits in one of five places — all fixable inside 2 weeks." },
      { type: "p", text: "This is the diagnostic order we run, top to bottom." },

      { type: "h2", id: "issue-1-tracking", text: "Issue 1: Conversion tracking is broken or shallow" },
      { type: "p", text: "Smart Bidding (Maximize Conversions, tCPA, tROAS) is only as smart as the signal you feed it. If conversions are missing, double-counted, or counting the wrong action, the algorithm will optimize toward garbage." },
      { type: "ul", items: [
        "Are you counting form submissions or page-views-as-conversions? Page-view conversions break Smart Bidding.",
        "Are you using Google Tag (gtag) or GTM with proper Enhanced Conversions? Without Enhanced Conversions you lose 15–30% of signal.",
        "Are offline conversions being uploaded weekly? For high-AOV B2B, this is non-negotiable.",
        "Are you deduplicating across GA4 and Google Ads? Double-counting inflates ROAS and confuses bidding.",
      ]},
      { type: "callout", tone: "warn", title: "The 14-day rule", text: "After any tracking change, Smart Bidding needs 7–14 days to re-learn. If you change tracking and don't pause budget changes for two weeks, you'll see CPL spike and assume Google 'broke'." },

      { type: "h2", id: "issue-2-match-types", text: "Issue 2: Broad match without discipline" },
      { type: "p", text: "Google has aggressively pushed broad match since 2023. It works — but only when paired with strong negative keyword lists, conversion data, and a clean landing page. Without those, broad match becomes a budget incinerator." },
      { type: "ol", items: [
        "Pull the search terms report for the last 30 days. Sort by spend.",
        "Anything with spend but zero conversions in the top 30 rows → add as a negative keyword (exact or phrase).",
        "Build category-level negative lists: 'free', 'jobs', 'salary', 'pdf', 'login' for most B2B/B2C accounts.",
        "Repeat weekly for the first 60 days, then bi-weekly.",
      ]},
      { type: "callout", tone: "tip", title: "When broad match wins", text: "Broad match works best with tCPA bidding, 50+ conversions/month per campaign, and aggressive negatives. With <30 conversions/month, stick to phrase + exact." },

      { type: "h2", id: "issue-3-pmax", text: "Issue 3: Performance Max is a black box you didn't tame" },
      { type: "p", text: "Performance Max is powerful and dangerous. Default settings let it cannibalize your branded search and waste budget on Display/Discovery. Lock it down:" },
      { type: "ul", items: [
        "Add brand exclusions (the brand-list feature) to prevent PMax from eating your branded clicks.",
        "Use account-level negative keywords (now supported) to block obvious junk queries.",
        "Run a separate Search-only Brand campaign in parallel — never let PMax own your brand traffic.",
        "Pull asset-group-level performance via the API or scripts (the UI hides most of it).",
      ]},

      { type: "h2", id: "issue-4-landing-page", text: "Issue 4: Landing page doesn't match the ad" },
      { type: "p", text: "If your ad says 'Free 30-min Demo' and your landing page leads with 'About Us', Quality Score tanks, CPCs rise, and conversion rate dies. The fix:" },
      { type: "ol", items: [
        "Match the ad headline to the page H1 — same words, same promise.",
        "Lead with the offer in the first 80px of the page. No nav, no carousel, no fluff.",
        "Reduce the form to 3 fields max — name, phone, one qualifier.",
        "Add a WhatsApp option as a secondary CTA. Indian users convert 2–3× higher there.",
        "Page load <2.5s on mobile (Core Web Vitals). Slow pages directly raise CPC.",
      ]},

      { type: "cta", title: "Audit your funnel end-to-end", text: "Plug your numbers into our Funnel Health Checker — it'll show you the exact stage where leads are leaking.", href: "/tools/funnel-health-checker", label: "Open Funnel Health Checker" },

      { type: "h2", id: "issue-5-bidding", text: "Issue 5: Wrong bidding strategy for your maturity" },
      { type: "p", text: "tCPA on a campaign with 8 conversions/month will not work. The algorithm needs ~30 conversions/month minimum to bid intelligently. Below that, you're better off on Maximize Clicks with manual oversight." },
      { type: "ul", items: [
        "<30 conversions/month → Maximize Clicks + manual CPC ceilings, build conversion volume first.",
        "30–100/month → Maximize Conversions (no target).",
        "100+/month → tCPA, with target set 10% above current CPL.",
        "300+/month with revenue tracking → tROAS for ecom, tCPA for lead gen.",
      ]},

      { type: "h2", id: "common-mistakes", text: "Common mistakes that keep CPL high" },
      { type: "ul", items: [
        "Adding tCPA targets that are too aggressive — algorithm goes into low-volume mode and stops spending.",
        "Mixing Search and Display in one campaign — never do this; performance metrics become unreadable.",
        "Ignoring branded search competitors — they're bidding on your name; if you don't, they take the click.",
        "Setting and forgetting — Google Ads needs weekly attention, not monthly.",
      ]},

      consultationCta("Google Ads accounts"),
    ],
    faq: [
      { q: "Why are my Google Ads getting clicks but no conversions?", a: "Most likely one of three issues: (1) conversion tracking is misfiring or counting the wrong event, (2) your landing page doesn't match what the ad promised, or (3) you're getting low-intent broad-match traffic. Pull the search terms report and check tracking in Google Tag Assistant first." },
      { q: "Should I use Performance Max for lead generation?", a: "Cautiously. PMax for lead gen needs strong conversion signals (50+ conversions/month minimum), brand exclusions enabled, and a separate Search Brand campaign running in parallel. Without those guardrails, it cannibalizes branded traffic and bleeds budget into low-quality placements." },
      { q: "How long should I wait before judging a Google Ads campaign?", a: "Give a new campaign 14 days minimum and 30 conversions before judging performance. Smart Bidding has a learning phase, and any judgment before that is statistical noise. After 14 days with consistent budget, the data is reliable." },
      { q: "What's a good Google Ads conversion rate in India?", a: "Search ads: 3–7% for B2C lead gen, 1–3% for B2B. Display: 0.3–0.7%. PMax: 2–5% blended. If you're below those, the issue is usually landing page or offer, not the ad itself." },
      { q: "Should I run Google Ads or Meta Ads first?", a: "Run Google for high-intent demand capture (people already searching for your solution) and Meta for demand generation (creating awareness). Most brands need both — Google first if you have an existing search demand, Meta first if you're a new category or D2C product." },
    ],
    relatedSlugs: ["meta-ads-creative-testing-framework", "reduce-cost-per-lead-50-percent-90-days", "lead-funnel-blueprint"],
    relatedServices: ["performance-marketing"],
    relatedTools: ["/tools/ads-budget-planner", "/tools/funnel-health-checker"],
  },

  // ============================================================
  // 5. SYSTEMS VS CAMPAIGNS — full article
  // ============================================================
  {
    slug: "performance-marketing-systems-vs-campaigns",
    title: "Building a Performance Marketing System vs. Running Campaigns",
    metaTitle: "Performance Marketing Systems vs Campaigns | Floatin",
    metaDescription: "Why systems thinking outperforms campaign-based marketing — and how to build a growth engine instead of a campaign calendar.",
    excerpt: "The difference between agencies that deliver short-term spikes and those that build lasting growth. Systems thinking applied to digital marketing.",
    category: "Strategy",
    keywords: ["performance marketing system", "marketing systems", "growth engine", "marketing strategy India", "marketing operations"],
    readTime: "8 min read",
    date: "2026-02-08",
    dateModified: "2026-04-12",
    author: "Jayant Khattar",
    keyTakeaways: [
      "Campaigns deliver spikes. Systems compound. The difference shows up in month 6, not month 1.",
      "A system has 4 pillars: data, creative, funnel, nurture — each with documented SOPs and owners.",
      "Most brands hire agencies for 'campaigns' and wonder why growth flatlines after 3 months.",
      "Migrating from campaigns to systems takes 90 days but pays back for years.",
    ],
    content: [
      { type: "p", text: "There's a simple test for whether you have a marketing system or a marketing calendar: if your best-performing person quit tomorrow, would your growth continue? If the answer is 'no', you have campaigns. If the answer is 'yes, because the playbook runs without them', you have a system." },
      { type: "p", text: "Most Indian brands operate at the campaign level — and it's exactly why their growth flatlines after the first 3–6 months." },

      { type: "h2", id: "campaigns-vs-systems", text: "What's the actual difference?" },
      { type: "p", text: "A campaign is a one-off push: 'Run a Diwali sale on Meta'. A system is a repeatable engine: 'Every quarter, here's how we structure a sale — from creative briefs, to ad-account setup, to WhatsApp re-engagement, to post-mortem reporting'." },
      { type: "ul", items: [
        "Campaign output = spikes. System output = compounding.",
        "Campaign knowledge = in someone's head. System knowledge = in documented SOPs.",
        "Campaign cost = scales linearly with output. System cost = scales sub-linearly (you reuse infrastructure).",
        "Campaign risk = fragile (one person leaves, it breaks). System risk = robust.",
      ]},
      { type: "callout", tone: "info", title: "Why this matters now", text: "With Meta and Google moving to AI-driven bidding, the human edge has shifted from 'who can manage campaigns better' to 'who has the better system feeding the algorithm'. Systems literally beat manual labour now." },

      { type: "h2", id: "four-pillars", text: "The 4 pillars of a marketing system" },

      { type: "h3", id: "pillar-1-data", text: "Pillar 1 — Data infrastructure" },
      { type: "p", text: "Every system runs on a clean data layer. Without it, every decision is a guess." },
      { type: "ul", items: [
        "Server-side tracking (CAPI on Meta, Enhanced Conversions on Google) — 15–30% more signal.",
        "Single source of truth for revenue (CRM > ad platform), refreshed daily.",
        "Lead-quality scoring (1–5) tagged at the qualification stage.",
        "Cohort and channel-level attribution dashboards (we use Looker / Metabase).",
      ]},

      { type: "h3", id: "pillar-2-creative", text: "Pillar 2 — Creative production engine" },
      { type: "p", text: "If you can't ship 10–20 creatives a month against documented angles, you're starving the algorithm. The engine has roles, briefs, review loops, and a versioned asset library." },

      { type: "h3", id: "pillar-3-funnel", text: "Pillar 3 — Funnel and conversion infrastructure" },
      { type: "p", text: "Landing pages, forms, qualification flows, CRM stages — all owned by one person, tested monthly. Most brands let funnels rot after launch." },

      { type: "h3", id: "pillar-4-nurture", text: "Pillar 4 — Nurture and retention" },
      { type: "p", text: "Where the LIT Framework (our proprietary nurture ladder) lives. WhatsApp + email + retargeting + sales follow-up, sequenced by intent stage. This is where most CPL gains actually come from." },

      { type: "cta", title: "Map your system gaps", text: "Use our Funnel Health Checker to see which of the 4 pillars is your weakest link.", href: "/tools/funnel-health-checker", label: "Open Funnel Health Checker" },

      { type: "h2", id: "migration", text: "Migrating from campaigns to systems in 90 days" },
      { type: "ol", items: [
        "Days 1–30: Document everything currently happening. Brutally honest audit. SOP every recurring task.",
        "Days 31–60: Build the missing infrastructure (tracking, dashboards, content calendar, briefs library).",
        "Days 61–90: Run one full cycle through the new system, debug, and assign owners. Stop calling things 'campaigns'.",
      ]},

      { type: "h2", id: "what-good-looks-like", text: "What good looks like" },
      { type: "p", text: "When the system is working, you'll notice: weekly metrics review takes 30 minutes (not 3 hours). New team members ramp in 2 weeks (not 2 months). New ad accounts can be launched in 7 days. Founders stop being the bottleneck." },

      { type: "h2", id: "common-mistakes", text: "Common mistakes" },
      { type: "ul", items: [
        "Treating SOPs as overhead instead of leverage — the SOP IS the system.",
        "Building the system around one star performer — fragile by design.",
        "Skipping data infrastructure because 'we'll do it later' — later never comes.",
        "Hiring an agency to 'run campaigns' instead of 'install a system' — different brief, different price, different outcome.",
      ]},

      consultationCta("your marketing system"),
    ],
    faq: [
      { q: "What's the difference between a marketing campaign and a marketing system?", a: "A campaign is a single, time-bound push (e.g., a Diwali sale). A system is a repeatable, documented engine that runs continuously and produces compounding results. Campaigns die when budget stops; systems keep generating leads, retention, and revenue because the infrastructure persists." },
      { q: "How long does it take to build a performance marketing system?", a: "About 90 days for a basic version: 30 days to document and audit, 30 to build infrastructure, 30 to run one full cycle. A mature system that survives team changes and scales 3–10× takes 9–12 months of iteration." },
      { q: "Can a small brand build a marketing system or is it only for large companies?", a: "Small brands benefit more from systems because they have less headcount slack. Even a one-person team can have an SOP-based content calendar, a tracked funnel, and a documented nurture flow. Start small — one pillar at a time." },
      { q: "What tools do I need to build a marketing system?", a: "Minimum stack: a CRM (HubSpot/Zoho), a server-side tracker (Stape or similar), a dashboard tool (Looker Studio or Metabase), a content/brief tool (Notion/Airtable), and a WhatsApp BSP. Tools matter less than the SOPs that govern them." },
      { q: "Should I hire an agency or build the system in-house?", a: "Build the system blueprint in-house (so you own the IP), but hire specialists to operate the heavy parts (paid media, creative production). The system becomes your moat; the operators are interchangeable." },
    ],
    relatedSlugs: ["lead-funnel-blueprint", "reduce-cost-per-lead-50-percent-90-days", "whatsapp-marketing-guide-indian-brands"],
    relatedServices: ["performance-marketing", "ai-automation"],
    relatedTools: ["/tools/funnel-health-checker"],
  },

  // ============================================================
  // 6. ECOMMERCE ROAS — full article
  // ============================================================
  {
    slug: "ecommerce-roas-optimization",
    title: "E-commerce ROAS Optimization: From 2× to 4× in 60 Days",
    metaTitle: "E-commerce ROAS Optimization: 2× to 4× in 60 Days | Floatin",
    metaDescription: "How Indian D2C brands double ROAS through catalog optimization, audience segmentation, and creative iteration — a 60-day playbook.",
    excerpt: "A case-study-driven guide to improving your e-commerce ROAS through catalog optimization, audience segmentation, and creative iteration.",
    category: "E-commerce",
    keywords: ["ecommerce ROAS", "improve ROAS", "D2C performance marketing", "Meta shopping ads", "Advantage Plus shopping", "Shopify ads"],
    readTime: "10 min read",
    date: "2026-01-22",
    dateModified: "2026-04-10",
    author: "Jayant Khattar",
    keyTakeaways: [
      "Most ROAS problems are unit-economics problems disguised as ad problems — fix the margin first.",
      "Catalog hygiene (titles, GTINs, images) drives 20–30% of ROAS in dynamic product ads.",
      "Segment ROAS by SKU and customer cohort, not blended — blended ROAS hides everything.",
      "Creative refresh cadence matters more than budget size for sustainable ROAS.",
    ],
    content: [
      { type: "p", text: "If you're a D2C brand stuck at 2× ROAS, doubling it in 60 days is genuinely possible — but not by 'optimizing campaigns' in Ads Manager. The biggest ROAS gains live in three places ad managers ignore: the catalog, the unit economics, and the offer architecture." },
      { type: "p", text: "Here's the 60-day playbook we run for D2C clients." },

      { type: "h2", id: "step-0-economics", text: "Step 0: Know your true break-even ROAS" },
      { type: "p", text: "Before optimizing ROAS, you need to know what 'profitable' actually means for your brand. Break-even ROAS depends on your contribution margin — not your gross margin." },
      { type: "ul", items: [
        "Subtract: COGS, shipping (forward + RTO), payment gateway, packaging, returns, platform fees.",
        "Whatever's left is your contribution margin %.",
        "Break-even ROAS = 1 ÷ contribution margin %.",
        "A brand with 30% contribution margin breaks even at 3.33× ROAS — not 2×.",
      ]},
      { type: "cta", title: "Calculate your break-even ROAS", text: "Use our Break-even Calculator to see your true profitability line — then optimize above it.", href: "/tools/break-even-calculator", label: "Open Break-even Calculator" },

      { type: "h2", id: "days-1-15", text: "Days 1–15: Catalog hygiene" },
      { type: "p", text: "Dynamic Product Ads (DPA / Advantage+ Catalog) drive most of the ROAS in mature D2C accounts. Their performance is gated by catalog quality." },
      { type: "ol", items: [
        "Audit feed: every SKU needs unique title, GTIN, brand, primary image, price, availability.",
        "Title formula: '[Brand] [Product Name] [Key Attribute] [Size/Variant]' — Meta uses this for matching.",
        "Add 3–5 lifestyle images per SKU (not just packshots) — Meta's Catalog uses them for placements.",
        "Map products into product sets by margin tier, not category. You'll bid differently on high-margin SKUs.",
        "Set up custom_label fields for: bestseller, new arrival, low stock, high margin. Use them for audience splits.",
      ]},
      { type: "callout", tone: "tip", title: "The hidden ROAS lever", text: "Brands with clean catalogs see 20–30% higher ROAS in DPA campaigns vs brands with messy feeds. It's the single highest-leverage 2-week project in D2C." },

      { type: "h2", id: "days-16-30", text: "Days 16–30: Audience segmentation by intent stage" },
      { type: "p", text: "Stop running one big retargeting campaign. Segment by intent depth and bid differently for each:" },
      { type: "ul", items: [
        "Cold (prospecting): Advantage+ Shopping with broad targeting, daily creative refresh.",
        "Warm (page viewers, video 50%+): standard retargeting with social-proof creative.",
        "Hot (cart abandoners, ATC): aggressive retargeting with offer-led creative + dynamic product feed.",
        "Customers (existing): excluded from prospecting; cross-sell campaigns only.",
      ]},

      { type: "h2", id: "days-31-45", text: "Days 31–45: Creative refresh cadence" },
      { type: "p", text: "A Meta D2C account decays predictably without fresh creative. The math: every cohort fatigues on a creative after roughly 8–12 days of cold-audience exposure. If you're not shipping new ads every week, you're losing ROAS." },
      { type: "ul", items: [
        "Ship 6–10 new creatives per week per ad account.",
        "Mix formats: 60% UGC video, 25% static, 15% motion graphics.",
        "Test by hook angle (problem, solution, social proof, comparison) — same as paid lead gen.",
        "Refresh top creative variants every 2 weeks — small tweaks (new hook, new music) extend life 3–4 weeks.",
      ]},

      { type: "h2", id: "days-46-60", text: "Days 46–60: Offer architecture" },
      { type: "p", text: "ROAS isn't just about ad efficiency — it's also about AOV. Three offer mechanics that move ROAS without lowering CPM:" },
      { type: "ol", items: [
        "Threshold free shipping ('Free shipping over ₹999') — typical 8–15% AOV lift.",
        "Bundles ('Buy 2, get 1 free') — typical 20–35% AOV lift, lower per-unit margin but higher absolute profit.",
        "Tiered discounts ('10% off ₹1000, 15% off ₹1500') — 12–20% AOV lift.",
        "Post-purchase upsell on the thank-you page — adds 5–10% to revenue at zero additional CAC.",
      ]},

      { type: "h2", id: "case-study", text: "What this looks like in real numbers" },
      { type: "p", text: "A jewellery client came in at 1.9× blended ROAS and breakeven of 2.7×. After 60 days following this playbook: 4.1× ROAS, AOV up 28% (from a bundle offer + free-shipping threshold), and a 22% reduction in RTO%. Same monthly ad spend, ~3× more profit." },

      { type: "h2", id: "common-mistakes", text: "Common mistakes that cap ROAS" },
      { type: "ul", items: [
        "Optimizing for ROAS instead of contribution profit — high-ROAS, low-volume campaigns starve growth.",
        "Letting catalog rot — new SKUs added without titles, GTINs, or images.",
        "Running one creative for 30 days — ROAS will drop ~10% per week from week 2.",
        "Ignoring RTO% — for COD-heavy categories, a 5-point RTO improvement = 20% effective ROAS gain.",
      ]},

      consultationCta("your D2C account"),
    ],
    faq: [
      { q: "What is a good ROAS for D2C ecommerce in India?", a: "Depends entirely on your contribution margin. A brand with 30% margin needs 3.33× to break even. 'Good' is ROAS that's at least 1.5× your break-even — so for a 30% margin brand, 5× is healthy. Always benchmark against your own break-even, not industry averages." },
      { q: "How do I improve ROAS on Meta Ads for ecommerce?", a: "Three highest-leverage moves: (1) clean your product catalog (titles, GTINs, lifestyle images), (2) segment audiences by intent depth and bid differently, (3) ship 6–10 fresh creatives weekly. Most accounts see 30–50% ROAS lift inside 60 days from these alone." },
      { q: "Should I use Advantage+ Shopping or manual campaigns for ecommerce?", a: "Use Advantage+ Shopping as your primary scaling vehicle once you have 50+ purchases/week. Keep one manual prospecting campaign running for control and learning. Brands with <30 purchases/week should stick to manual until volume scales." },
      { q: "Why is my ROAS dropping despite the same ads and budget?", a: "Three usual suspects in order of likelihood: creative fatigue (frequency >3 in cold audiences), audience saturation (you've reached most of your addressable market), or attribution decay (iOS 17+ is reducing attribution windows). Refresh creative first — it solves 70% of cases." },
      { q: "How does WhatsApp affect my ecommerce ROAS?", a: "WhatsApp post-purchase flows (order confirmation, shipping updates, review requests, repeat-purchase nudges) typically lift LTV by 20–40%. Better LTV → you can sustain higher CAC → higher allowable spend → higher ROAS at scale. Treat WhatsApp as a CAC multiplier, not a separate channel." },
    ],
    relatedSlugs: ["meta-ads-creative-testing-framework", "retargeting-that-actually-works", "reduce-cost-per-lead-50-percent-90-days"],
    relatedServices: ["performance-marketing", "creative-support"],
    relatedTools: ["/tools/break-even-calculator", "/tools/ads-budget-planner"],
  },

  // ============================================================
  // 7. LEAD FUNNEL BLUEPRINT — full article
  // ============================================================
  {
    slug: "lead-funnel-blueprint",
    title: "The Lead Funnel Blueprint: Ads → Landing Page → CRM → Close",
    metaTitle: "Lead Funnel Blueprint: Ads to Close | Floatin",
    metaDescription: "An end-to-end framework for building lead generation funnels that don't just generate leads — they generate revenue.",
    excerpt: "An end-to-end framework for building lead generation funnels that don't just generate leads — they generate revenue.",
    category: "Lead Generation",
    keywords: ["lead funnel", "lead generation system", "funnel optimization", "CRM funnel", "lead nurturing India"],
    readTime: "12 min read",
    date: "2026-01-10",
    dateModified: "2026-04-08",
    author: "Jayant Khattar",
    keyTakeaways: [
      "A funnel is only as strong as its weakest stage — and the weakest stage is almost always the CRM/follow-up, not the ad.",
      "The 5-minute response rule is the single highest-leverage lead-gen lever in existence.",
      "Every funnel stage should have a numerical conversion target, an owner, and a weekly review.",
      "WhatsApp at the CRM stage typically doubles closes-per-lead in Indian markets.",
    ],
    content: [
      { type: "p", text: "Most brands obsess over the top of the funnel — ad creative, audience, bidding — and ignore the bottom, where 80% of revenue is actually lost. This guide walks through the full lead-to-revenue funnel and shows where the real leverage lives." },

      { type: "h2", id: "the-four-stages", text: "The 4 stages of every lead funnel" },
      { type: "ol", items: [
        "Ads — generating clicks/impressions from cold audiences.",
        "Landing Page — converting clicks into form fills.",
        "CRM / Qualification — converting form fills into qualified, contactable opportunities.",
        "Close — converting qualified opportunities into paying customers.",
      ]},
      { type: "callout", tone: "info", title: "The leak math", text: "If each stage converts at 30%, your end-to-end funnel converts at 0.81%. Improve any stage by 10 points and the absolute revenue impact is enormous because the gains compound." },

      { type: "h2", id: "stage-1-ads", text: "Stage 1 — Ads: drive intent, not impressions" },
      { type: "ul", items: [
        "Optimize for the conversion event closest to revenue (a custom 'qualified lead' event, not raw 'lead').",
        "Test by hook angle (problem, solution, proof, comparison) — same framework as our Meta creative testing playbook.",
        "Cap frequency at 2.5 cold / 4 retargeting.",
        "Track CPM, CTR, CPL — but only judge by CPQL (cost per qualified lead).",
      ]},

      { type: "h2", id: "stage-2-landing", text: "Stage 2 — Landing Page: 3-field forms beat 8-field forms" },
      { type: "p", text: "The single highest-leverage page change is reducing form length. Every field beyond 3 cuts completion by ~7%." },
      { type: "ol", items: [
        "Hero matches the ad — same words, same offer, same image.",
        "Form: name, phone, one qualifier (city, budget, or service type).",
        "WhatsApp button as primary mobile CTA — converts 2–3× higher than form on Indian mobile.",
        "Trust strip: 3 client logos + 1 testimonial above the fold.",
        "Page load <2.5s on 4G — anything slower kills conversion AND raises CPC.",
      ]},
      { type: "cta", title: "Diagnose your funnel leaks", text: "Run your numbers through the Funnel Health Checker — it'll show you which of the 4 stages is bleeding the most.", href: "/tools/funnel-health-checker", label: "Open Funnel Health Checker" },

      { type: "h2", id: "stage-3-crm", text: "Stage 3 — CRM: the 5-minute rule changes everything" },
      { type: "p", text: "MIT studied 1,000+ companies and found: a lead contacted within 5 minutes is 9× more likely to qualify than one contacted after 30 minutes. After 24 hours, the lead is essentially dead." },
      { type: "ul", items: [
        "Auto-WhatsApp message inside 30 seconds (BSP webhook on form submit).",
        "Human call inside 5 minutes during business hours.",
        "If outside business hours: send a WhatsApp template, log the lead, call at the start of next business hour.",
        "If no answer: 3 call attempts in the first 48 hours, then a WhatsApp nurture sequence.",
        "Log every touchpoint in the CRM — not the rep's head.",
      ]},
      { type: "callout", tone: "warn", title: "The biggest leak in Indian lead gen", text: "We've audited brands spending ₹10L/month on ads with leads sitting unanswered for 6+ hours. Every hour of delay costs you 10–20% of qualification rate." },

      { type: "h2", id: "stage-4-close", text: "Stage 4 — Close: nurture is sales" },
      { type: "p", text: "Most leads don't buy on first contact. The brands that win are the ones who run a structured nurture sequence — what we call the LIT Framework (Ladder of Intensive Trust)." },
      { type: "ul", items: [
        "Day 0: WhatsApp + call attempt + email.",
        "Day 1: Case study WhatsApp + 2nd call attempt.",
        "Day 3: Founder voice note (game-changer for Indian markets).",
        "Day 7: Educational content + soft ask.",
        "Day 14: Time-bound offer or scarcity message.",
        "Day 30+: Drip nurture (1 message/week) for cold leads — 15–25% reactivate over 90 days.",
      ]},

      { type: "h2", id: "measurement", text: "What to measure at every stage" },
      { type: "ul", items: [
        "Stage 1: CPM, CTR, CPL, CPQL.",
        "Stage 2: LP conversion rate, time on page, form completion %.",
        "Stage 3: Time-to-first-contact, contact rate, qualification rate.",
        "Stage 4: Qualified-to-close %, deal velocity, LTV.",
        "Pull all 4 into one weekly dashboard. Review every Monday.",
      ]},

      { type: "h2", id: "what-good-looks-like", text: "What a healthy funnel looks like" },
      { type: "p", text: "For a typical B2C service brand in India: 2.5% landing page conversion, 80% contact rate inside 5 minutes, 35% qualification rate, 22% close rate. End-to-end CPL → close = ~5–7%. If you're below half of any stage, that's where to focus next." },

      { type: "h2", id: "common-mistakes", text: "Common mistakes that break funnels" },
      { type: "ul", items: [
        "Optimizing ad CPL while ignoring CRM response time — cheap leads + slow follow-up = no revenue.",
        "Long forms because 'we want better quality leads' — quality comes from qualification, not friction.",
        "Sales team owns nurture — they don't have time. Marketing owns nurture, sales owns closing.",
        "No weekly funnel review — the funnel decays silently if no one watches.",
      ]},

      consultationCta("your lead funnel end-to-end"),
    ],
    faq: [
      { q: "How quickly should I respond to a new lead?", a: "Inside 5 minutes during business hours. MIT research shows leads contacted within 5 minutes are 9× more likely to qualify than those contacted after 30. After 24 hours, the lead is largely dead. Use WhatsApp auto-replies + human callbacks to hit this consistently." },
      { q: "What's a good lead-to-customer conversion rate?", a: "For B2C services in India: 5–10% from form fill to paying customer is healthy. For B2B: 2–5%. For high-AOV (real estate, B2B SaaS): 1–3%. If you're below half these benchmarks, the issue is usually CRM/follow-up speed, not ad quality." },
      { q: "Should I use long or short lead forms?", a: "Short. 3 fields max for cold traffic — name, phone, one qualifier. Every field beyond 3 cuts completion by roughly 7%. Use post-form qualification (a quick WhatsApp or call) to filter quality, not pre-form friction." },
      { q: "What's the best lead nurture sequence in India?", a: "WhatsApp-first, multi-touch over 14 days. Day 0: instant WhatsApp + call. Day 1–3: case study + founder voice note. Day 7: educational content. Day 14: time-bound offer. Then weekly drip for 90 days. Voice notes from the founder consistently double engagement vs text-only sequences." },
      { q: "How do I know if my funnel is leaking?", a: "Calculate stage-by-stage conversion. If any stage drops more than 50% from its industry benchmark, that's your leak. Most common: ad-to-LP (creative/page mismatch), LP-to-form (form length), form-to-contact (slow response), contact-to-close (weak nurture)." },
    ],
    relatedSlugs: ["reduce-cost-per-lead-50-percent-90-days", "whatsapp-marketing-guide-indian-brands", "performance-marketing-systems-vs-campaigns"],
    relatedServices: ["performance-marketing", "whatsapp-marketing", "ai-automation"],
    relatedTools: ["/tools/funnel-health-checker", "/tools/lead-cost-calculator"],
  },

  // ============================================================
  // 8. RETARGETING — full article
  // ============================================================
  {
    slug: "retargeting-that-actually-works",
    title: "How to Set Up Retargeting That Actually Works",
    metaTitle: "Retargeting That Actually Works: Intent Sequences | Floatin",
    metaDescription: "Most retargeting campaigns waste money. Build intent-based retargeting sequences that re-engage warm users without burning frequency.",
    excerpt: "Most retargeting campaigns waste money showing the same ad to uninterested users. Here's how to build intent-based retargeting sequences.",
    category: "Performance Marketing",
    keywords: ["retargeting", "Meta retargeting", "intent-based retargeting", "remarketing", "ecommerce retargeting"],
    readTime: "9 min read",
    date: "2025-12-15",
    dateModified: "2026-04-05",
    author: "Jayant Khattar",
    keyTakeaways: [
      "Bad retargeting is worse than no retargeting — it burns budget and brand goodwill.",
      "Segment by intent depth (not by 'website visitor'), and bid differently for each segment.",
      "Frequency cap or die — 4+ exposures/week of the same ad is a churn machine.",
      "Exclusion logic matters more than inclusion logic — most brands ignore it.",
    ],
    content: [
      { type: "p", text: "Retargeting in 2026 is harder than it was in 2019. iOS privacy changes shrunk audiences, attribution windows, and signal quality. The brands still getting strong retargeting ROAS are the ones who treat it as a precision instrument, not a spray-and-pray channel." },

      { type: "h2", id: "intent-segments", text: "Segment by intent depth, not by 'visitor'" },
      { type: "p", text: "A user who viewed your homepage is not the same as one who added to cart. Treat them differently:" },
      { type: "ol", items: [
        "Awareness — engaged with ad/post, watched video 25%+. Low intent. Cheap CPM, soft offer.",
        "Interest — visited site, viewed 2+ pages, watched video 75%+. Medium intent. Educational content, social proof.",
        "Consideration — viewed product/service page, started form, ATC. High intent. Specific offer, urgency.",
        "Action — abandoned cart/checkout, contacted but didn't close. Very high intent. Discount, scarcity, direct DM follow-up.",
      ]},

      { type: "h2", id: "segment-creative", text: "Match creative to segment" },
      { type: "ul", items: [
        "Awareness segment → social proof creative (testimonials, case studies, founder story).",
        "Interest segment → mechanism creative ('How it works', behind-the-scenes).",
        "Consideration segment → product/feature focused with strong CTA.",
        "Action segment → offer-led, time-bound, dynamic product feed for ecom.",
      ]},
      { type: "callout", tone: "tip", title: "The cardinal rule", text: "Never show the same ad to a cold prospect and a cart-abandoner. The ad that converted them in awareness is the wrong ad to convert them in action." },

      { type: "h2", id: "frequency", text: "Frequency caps: cap or die" },
      { type: "p", text: "The single biggest reason retargeting feels 'creepy' (and stops working) is uncapped frequency. Strict caps:" },
      { type: "ul", items: [
        "Awareness segment: max 3 impressions/week per user.",
        "Interest: max 4/week.",
        "Consideration: max 5/week.",
        "Action: max 7/week — but only for 14 days, then they exit the segment.",
      ]},

      { type: "h2", id: "exclusions", text: "Exclusion logic — the part everyone skips" },
      { type: "p", text: "Strong retargeting depends as much on who you don't target as who you do." },
      { type: "ul", items: [
        "Always exclude existing customers from acquisition retargeting (use a customer-list custom audience).",
        "Exclude converters from each downstream segment (cart abandoners → exclude purchasers).",
        "Time-bound the audience: a 180-day visitor who didn't engage isn't 'warm', they're cold. Retarget windows of 7/14/30/90 days, not 180.",
        "Exclude high-bounce traffic (sub-10s sessions) — they're not really 'site visitors'.",
      ]},

      { type: "cta", title: "Plan your retargeting budget", text: "Use our Ads Budget Planner to allocate budget between prospecting and retargeting based on your funnel stage data.", href: "/tools/ads-budget-planner", label: "Open Ads Budget Planner" },

      { type: "h2", id: "channels", text: "Multi-channel retargeting (without overlap)" },
      { type: "p", text: "Modern retargeting works best when sequenced across channels — but only if you avoid double-exposure." },
      { type: "ol", items: [
        "Day 0–3 after visit: Meta + Google retargeting active.",
        "Day 1+ if email captured: lifecycle email begins, exclude from heavy ad retargeting.",
        "Day 1+ if WhatsApp opt-in: WhatsApp sequence begins, exclude from ad retargeting entirely.",
        "Day 14–30: drop frequency to maintenance level (1–2 exposures/week, social proof creative only).",
      ]},

      { type: "h2", id: "ecommerce", text: "Ecom-specific retargeting setup" },
      { type: "ul", items: [
        "Dynamic Product Ads with the exact item viewed/added — not generic catalog.",
        "Cart abandoners get 24-hour offer (free shipping, 5% off) → 7-day social proof → 14-day final offer.",
        "Customers excluded from prospecting; cross-sell to them with related products only.",
        "VIP customers (3+ purchases): exclude from all paid ads — message via WhatsApp/email instead.",
      ]},

      { type: "h2", id: "common-mistakes", text: "Common mistakes that kill retargeting ROAS" },
      { type: "ul", items: [
        "One giant 'all visitors' audience — no segmentation = no relevance.",
        "Same ad creative for every segment — boring, fatiguing, ineffective.",
        "No frequency cap — users see the same ad 15 times and tune out (or block your brand).",
        "Forgetting to exclude purchasers — paying to advertise to people who already bought.",
        "Not refreshing creative — retargeting creative fatigues 2× faster than prospecting.",
      ]},

      consultationCta("retargeting setup"),
    ],
    faq: [
      { q: "What is the best retargeting strategy for Meta Ads?", a: "Segment retargeting audiences by intent depth (awareness, interest, consideration, action), match creative to each segment, cap frequency at 3–7 exposures/week depending on intent, and exclude existing customers and recent purchasers. Most brands see 30–50% retargeting ROAS lift just from segmentation alone." },
      { q: "What's the ideal retargeting window for ecommerce?", a: "Use overlapping windows: 7-day for hot retargeting (cart, checkout abandoners) with offer-led creative; 30-day for warm (product viewers) with social proof; 90-day for awareness retention with brand-led creative. Avoid single 180-day windows — they include too much cold traffic." },
      { q: "How often should I show retargeting ads to the same user?", a: "Cap at 3–7 weekly impressions depending on intent. Awareness segment: 3/week max. Cart abandoners: up to 7/week but only for 14 days. Anything more than that is the threshold where retargeting starts feeling intrusive and quality rating drops." },
      { q: "Should I use Google Ads or Meta for retargeting?", a: "Both, sequenced. Meta is stronger for visual/social retargeting (cart abandoners, product retargeting). Google Display covers users across the broader web. Google Search retargeting (RLSA) lets you bid more aggressively when past visitors search. Use all three but enforce frequency caps cross-channel." },
      { q: "Is retargeting still effective after iOS 14/17 changes?", a: "Yes, but smaller and more expensive. Audience sizes shrunk 30–50%, attribution windows compressed. Counter with: server-side tracking (Meta CAPI, Google Enhanced Conversions), broader retargeting windows (30-day instead of 7), and first-party data (email/phone customer lists). Done right, retargeting still delivers 3–6× ROAS." },
    ],
    relatedSlugs: ["meta-ads-creative-testing-framework", "ecommerce-roas-optimization", "google-ads-not-converting-fix"],
    relatedServices: ["performance-marketing"],
    relatedTools: ["/tools/ads-budget-planner", "/tools/break-even-calculator"],
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
