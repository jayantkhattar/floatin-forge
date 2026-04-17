// Shared case studies data — used by both /clients and the home page.
// To add a real campaign hero image for a card, drop the file into
// src/assets/case-studies/ and import it below as `<client>HeroImg`,
// then set `heroImage: <client>HeroImg` on the corresponding entry.

import type { ClientLogoSize } from "@/data/clientShowcase";

// Client logos
import starbucksLogo from "@/assets/clients/starbucks.webp";
import mocemsaLogo from "@/assets/clients/mocemsa.webp";
import burgerKingLogo from "@/assets/clients/burger_king.webp";
import bareAnatomyLogo from "@/assets/clients/bare_anatomy.webp";
import indusValleyLogo from "@/assets/clients/indus_valley.webp";
import snapzoLogo from "@/assets/clients/snapzo.webp";
import pluckAndEatLogo from "@/assets/clients/pluck_and_eat.webp";
import pkMarketingLogo from "@/assets/clients/pk_marketing.webp";
import dssLogo from "@/assets/clients/dss.webp";
import uttamToyotaLogo from "@/assets/clients/uttam_toyota.webp";
import evolvedHairLogo from "@/assets/clients/evolved_hair.webp";
import chicCollezioneLogo from "@/assets/clients/chic_collezione.webp";
import nilofarLogo from "@/assets/clients/nilofar.webp";
import incenzaLogo from "@/assets/clients/incenza.webp";
import calitechLogo from "@/assets/clients/calitech.webp";
import innateLogo from "@/assets/clients/innate.webp";
import privaraLogo from "@/assets/clients/privara.webp";
import chindiSafarLogo from "@/assets/clients/chindi_safar.webp";
import flowlyfLogo from "@/assets/clients/flowlyf.webp";
import evermoreLogo from "@/assets/clients/evermore.webp";
import charmshilpLogo from "@/assets/clients/charmshilp.webp";
import farmNaturelleLogo from "@/assets/clients/farm_naturelle.webp";
import zenGolfLogo from "@/assets/clients/zen_golf.webp";
import mountTalentLogo from "@/assets/clients/mount_talent.png";
import goldenQueensLogo from "@/assets/clients/golden_queens.webp";
import gadootLogo from "@/assets/clients/gadoot.webp";
import vasarteLogo from "@/assets/clients/vasarte.webp";
import pansariLogo from "@/assets/clients/pansari.webp";
import stonelamLogo from "@/assets/clients/stonelam.webp";
import benzovilleLogo from "@/assets/clients/benzoville.webp";
import hosperLogo from "@/assets/clients/hosper.webp";
import triligEnergyLogo from "@/assets/clients/trilig_energy.webp";
import biutLogo from "@/assets/clients/biut.webp";
import utaazHolidayLogo from "@/assets/clients/utaaz_holiday.webp";
import khyaathLogo from "@/assets/clients/khyaath.webp";
import brokerInBlueLogo from "@/assets/broker-in-blue-logo.png";

// Case study hero images
import uttamToyotaHero from "@/assets/case-studies/uttam-toyota.jpg";
import evolvedHairHero from "@/assets/case-studies/evolved-hair.jpg";
import calitechHero from "@/assets/case-studies/calitech.jpg";
import goldenQueensHero from "@/assets/case-studies/golden-queens.jpg";
import hosperHero from "@/assets/case-studies/hosper.jpg";
import triligEnergyHero from "@/assets/case-studies/trilig-energy.jpg";
import flowlyfHero from "@/assets/case-studies/flowlyf.webp";
import innateHero from "@/assets/case-studies/innate.jpg";
import nilofarHero from "@/assets/case-studies/nilofar.jpeg";
import pluckAndEatHero from "@/assets/case-studies/pluck-and-eat.jpg";
import farmNaturelleHero from "@/assets/case-studies/farm-naturelle.webp";
import dssHero from "@/assets/case-studies/dss.webp";
import chicCollezioneHero from "@/assets/case-studies/chic-collezione.jpg";
import uneekHero from "@/assets/case-studies/uneek.webp";
import mocemsaHero from "@/assets/case-studies/mocemsa.jpg";
import incenzaHero from "@/assets/case-studies/incenza.webp";
import benzovilleHero from "@/assets/case-studies/benzoville.jpg";
import biutHero from "@/assets/case-studies/biut.jpeg";
import utazzoHero from "@/assets/case-studies/utazzo.jpg";
import khyaathHero from "@/assets/case-studies/khyaath.jpg";
import brokerInBlueHero from "@/assets/case-studies/broker-in-blue.jpg";
import sulitHero from "@/assets/case-studies/sulit.avif";
import sulitLogo from "@/assets/clients/sulit-logo.png";
import burgerKingHero from "@/assets/case-studies/burger-king.png";
import starbucksHero from "@/assets/case-studies/starbucks.avif";
import bareAnatomyHero from "@/assets/case-studies/bare-anatomy.jpg";
import snapzoHero from "@/assets/case-studies/snapzo.webp";
import indusValleyHero from "@/assets/case-studies/indus-valley.png";
import mountTalentHero from "@/assets/case-studies/mount-talent.jpg";
import gadottHero from "@/assets/case-studies/gadott.webp";
import pansariHero from "@/assets/case-studies/pansari.png";
import stonelamHero from "@/assets/case-studies/stonelam.jpeg";
import vasarteHero from "@/assets/case-studies/vasarte.jpeg";
import zenGolfHero from "@/assets/case-studies/zen-golf.jpeg";
import charmshilpHero from "@/assets/case-studies/charmshilp.jpeg";

// ── Types ──
export type ServiceType =
  | "performance"
  | "influencer"
  | "seo"
  | "social-media"
  | "web-dev"
  | "meta-ads"
  | "automation";

export type IndustryType = string;

export const serviceLabels: Record<ServiceType, string> = {
  performance: "Performance Ads",
  influencer: "Influencer / Creator",
  seo: "SEO",
  "social-media": "Social Media",
  "web-dev": "Web Development",
  "meta-ads": "Meta Ads",
  automation: "Automation",
};

export const serviceColors: Record<ServiceType, string> = {
  performance: "bg-primary/10 text-primary border-primary/20",
  influencer: "bg-accent/20 text-accent-foreground border-accent/30",
  seo: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  "social-media": "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20",
  "web-dev": "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
  "meta-ads": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  automation: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
};

export const industryLabels: Record<string, string> = {
  ecommerce: "E-commerce & D2C",
  automotive: "Automotive",
  international: "International",
  healthcare: "Healthcare & Biotech",
  enterprise: "Enterprise & Safety",
  agriculture: "Agriculture & Food",
  tech: "Apps & Tech",
  seo: "SEO & Organic",
  fmcg: "FMCG & Beauty",
  "food-beverage": "Food & Beverage",
  lifestyle: "Lifestyle & Luxury",
  travel: "Travel & Tourism",
  sports: "Sports & Leisure",
  hr: "HR & Recruitment",
  jewellery: "Jewellery",
  "home-decor": "Home & Decor",
  "real-estate": "Real Estate",
  energy: "Energy",
  "beauty-wellness": "Beauty & Wellness",
  manufacturing: "Manufacturing",
};

export type LogoSize = "square" | "tall" | "wide" | "standard";

export interface ClientCase {
  slug: string;
  name: string;
  industry: IndustryType;
  services: ServiceType[];
  metric: string;
  result: string;
  desc: string;
  challenge: string;
  strategy: string;
  results: string[];
  logo?: string;
  logoSize?: LogoSize;
  platforms?: string[];
  images?: string[];
  /** Hero image used on Magazine-Hero card. Falls back to logo on gradient. */
  heroImage?: string;
  /** Featured on the home page (top wins). */
  featured?: boolean;
  comingSoon?: boolean;
}

// Logo-style hint used by CaseStudyCard for the gradient theme of fallback hero
export type { ClientLogoSize };

// ── Client Cases ──
// `featured: true` on the top wins surfaces them on the homepage.
export const clientCases: ClientCase[] = [
  // Featured wins (homepage top 6)
  {
    slug: "uttam-toyota",
    name: "Uttam Toyota",
    industry: "automotive",
    services: ["performance"],
    metric: "₹10Cr+",
    result: "Revenue Generated",
    desc: "Google Ads lead generation for one of Delhi NCR's largest Toyota dealerships.",
    challenge:
      "Needed high-volume qualified leads across multiple locations in Delhi, Noida, Gurgaon.",
    strategy:
      "Google Search + Display campaigns, landing page optimization, CRM integration.",
    results: [
      "₹5.34L ad spend → ₹10Cr+ revenue",
      "4,942 qualified leads generated",
      "61,615 clicks at ₹8.68 CPC",
      "Conversion rate of 8.02%",
    ],
    logo: uttamToyotaLogo,
    logoSize: "wide",
    platforms: ["Google Ads"],
    heroImage: uttamToyotaHero,
    featured: true,
  },
  {
    slug: "evolved-hair",
    name: "Evolved Hair Restoration",
    industry: "international",
    services: ["performance", "seo", "social-media"],
    metric: "10x ROAS",
    result: "+45% Bookings",
    desc:
      "Full-funnel digital strategy for a Perth-based hair transplant clinic — performance marketing, SEO, and appointment booking funnels.",
    challenge:
      "Saturated market with high CPCs. Traditional marketing gave leads who often didn't show up or were low quality.",
    strategy:
      "Our proprietary LIT (Ladder of Intensive Trust) framework on HubSpot — WhatsApp + email nurturing sequences that build authority and trust pre-consult, paired with SEO + Google Ads, booking funnels, and CRM-driven follow-ups.",
    results: [
      "10x ROAS — 4K AUD spend → 40K AUD revenue/month",
      "+45% increase in appointment bookings",
      "Significant drop in cost per consultation",
      "Better lead-to-showup conversion",
      "25+ keywords ranking #1 on Google",
      "Hired another trichologist due to demand",
    ],
    logo: evolvedHairLogo,
    logoSize: "wide",
    platforms: ["Google Ads", "Meta Ads"],
    heroImage: evolvedHairHero,
    featured: true,
  },
  {
    slug: "calitech",
    name: "Calitech Biotechnologies",
    industry: "healthcare",
    services: ["performance", "social-media"],
    metric: "36x ROI",
    result: "₹40L+ Revenue",
    desc: "Lead generation for medical oxygen supply systems (MOSS) manufacturer.",
    challenge:
      "Niche B2B product, needed to reach hospital decision-makers cost-effectively.",
    strategy:
      "Google Ads + Facebook Lead Forms, targeted hospital/healthcare audiences, social media content.",
    results: [
      "₹1.1L invested → ₹40L+ revenue",
      "Onboarded a new distributor",
      "Strong brand awareness in healthcare sector",
      "Social media authority established",
    ],
    logo: calitechLogo,
    logoSize: "wide",
    platforms: ["Google Ads", "Meta Ads"],
    heroImage: calitechHero,
    featured: true,
  },
  {
    slug: "golden-queens",
    name: "Golden Queen's Ceramics",
    industry: "ecommerce",
    services: ["performance", "social-media"],
    metric: "9x ROAS",
    result: "3x D2C Sales Growth",
    desc:
      "Built a full D2C ecosystem for a family-run ceramics brand, shifting them off marketplace dependency.",
    challenge:
      "Over-reliant on marketplaces with rising commission fees cutting margins. Wanted to shift to independent e-commerce (D2C) while maintaining sales volumes.",
    strategy:
      "Built full-stack D2C ecosystem: Shopify store + conversion-optimized product pages. Created fresh targeting funnels + paid ad campaigns. Retargeting and lifecycle marketing to retain & repeat customers.",
    results: [
      "Direct website sales grew ~3x with 9x ROAS",
      "Marketplace dependency reduced 60-70%",
      "Improved profit per order",
      "Stronger control over brand identity",
    ],
    logo: goldenQueensLogo,
    logoSize: "tall",
    platforms: ["Meta Ads", "Instagram Ads"],
    heroImage: goldenQueensHero,
    featured: true,
  },
  {
    slug: "hosper",
    name: "Hosper India",
    industry: "manufacturing",
    services: ["performance", "social-media"],
    metric: "7,092",
    result: "Leads Generated",
    desc:
      "Full-funnel Meta Ads lead generation for an electrical switch and equipment manufacturer — running dedicated lead campaigns, traffic campaigns, webinar sales funnels, and geo-targeted South India expansion.",
    challenge:
      "Hosper needed a consistent and scalable pipeline of qualified leads for their electrical switches and equipment business across multiple cities in India, including expansion into South India.",
    strategy:
      "Built a multi-layered funnel across five simultaneous campaigns. Core lead gen + large-scale awareness traffic + webinar funnels + South India geo-expansion + WhatsApp connection campaigns.",
    results: [
      "7,092 leads generated — all time",
      "₹33.79 blended cost per lead across all campaigns",
      "Core lead campaign delivered ₹14.55 cost per lead",
      "73,19,801 total impressions generated",
      "25,43,727 unique users reached",
      "10,09,411 video views across all campaigns",
      "South India geo-expansion successfully launched",
    ],
    logo: hosperLogo,
    logoSize: "square",
    platforms: ["Meta Ads"],
    heroImage: hosperHero,
    featured: true,
  },
  {
    slug: "trilig-energy",
    name: "Trilig Energy",
    industry: "energy",
    services: ["performance"],
    metric: "1000+ Leads",
    result: "25 Solar Plants Installed",
    desc:
      "Precision-targeted lead funnels for a renewable energy brand — solar panels & CBG plant solutions.",
    challenge:
      "Relatively new brand in renewable energy, needed to position itself as credible and authoritative against established players.",
    strategy:
      "Precision-targeted Meta & Google lead funnels. Story-driven creative advertisements + proof-based retargeting.",
    results: [
      "1000+ high-quality leads in 4 months",
      "Lead costs as low as ₹70",
      "149 high-ticket leads (₹1Cr–₹10Cr range)",
      "25 solar plants installed",
      "3 CBG projects completed",
      "5% lead-to-installation conversion rate",
    ],
    logo: triligEnergyLogo,
    logoSize: "square",
    platforms: ["Meta Ads", "Google Ads"],
    heroImage: triligEnergyHero,
    featured: true,
  },

  // Remaining cases
  {
    slug: "incenza",
    name: "Incenza",
    industry: "ecommerce",
    services: ["performance"],
    metric: "2.1x ROAS",
    result: "Profitable Scale",
    desc: "Scaled a premium incense stick brand with Meta Ads and creative testing.",
    challenge:
      "New D2C brand with zero online presence, needed profitable customer acquisition.",
    strategy:
      "Dynamic product ads, audience segmentation, creative testing system.",
    results: [
      "Achieved 2.1x ROAS",
      "Consistent profitable growth",
      "Strong brand recall built through creative",
    ],
    logo: incenzaLogo,
    logoSize: "standard",
    platforms: ["Meta Ads", "Instagram Ads"],
    heroImage: incenzaHero,
  },
  {
    slug: "mocemsa",
    name: "Mocemsa",
    industry: "ecommerce",
    services: ["social-media"],
    metric: "5.3M Reach",
    result: "+736% Growth",
    desc: "Social media management for premium fragrance brand — massive organic growth.",
    challenge:
      "Low social media engagement and reach, no structured content strategy.",
    strategy:
      "Trend-based reels, structured content calendar, engagement-driven posting.",
    results: [
      "Accounts reached grew to 5.3M (+736%)",
      "Engagement up 1,116%",
      "Followers grew 35.7%",
      "Brand became a social-first fragrance name",
    ],
    logo: mocemsaLogo,
    logoSize: "wide",
    heroImage: mocemsaHero,
  },
  {
    slug: "uneek",
    name: "Uneek",
    industry: "ecommerce",
    services: ["social-media", "performance"],
    metric: "3.3M Reach",
    result: "29.8% Growth",
    desc: "Social media growth for fashion accessories brand with 29.7K followers.",
    challenge: "Plateau in social growth, needed fresh creative approach.",
    strategy: "Meme marketing, trend-jacking, community engagement.",
    results: [
      "3.3M accounts reached",
      "29.8% reach increase",
      "37K accounts engaged",
      "Strong community built",
    ],
    heroImage: uneekHero,
  },
  {
    slug: "chic-collezione",
    name: "Chic Collezione",
    industry: "ecommerce",
    services: ["performance", "social-media"],
    metric: "3x ROAS",
    result: "Canvas Art Sales",
    desc: "Performance marketing for canvas wall art e-commerce store.",
    challenge: "Needed profitable scaling for a niche product category.",
    strategy:
      "Creative-first approach with lifestyle imagery, targeted interest audiences.",
    results: [
      "Achieved 3x ROAS",
      "Scaled ad spend profitably",
      "Strong creative framework established",
    ],
    logo: chicCollezioneLogo,
    logoSize: "standard",
    platforms: ["Meta Ads", "Instagram Ads"],
    heroImage: chicCollezioneHero,
  },
  {
    slug: "dss",
    name: "DuPont Sustainable Solutions (dss+)",
    industry: "enterprise",
    services: ["performance", "social-media"],
    metric: "Global",
    result: "EHS Campaigns",
    desc: "Digital marketing for world's #1 EHS consultancy — safety e-learning modules.",
    challenge:
      "Enterprise B2B with long sales cycles, needed digital presence in India market.",
    strategy:
      "LinkedIn thought leadership, Google Ads for safety training keywords, content-driven lead gen.",
    results: [
      "Successfully launched India digital campaigns",
      "Agency recognized at dss+ corporate summit",
      "Multi-platform campaign execution (Google, LinkedIn, Facebook)",
      "Internal creative campaigns for Amazon partnership",
    ],
    logo: dssLogo,
    logoSize: "standard",
    platforms: ["Google Ads", "LinkedIn Ads", "Meta Ads"],
    heroImage: dssHero,
  },
  {
    slug: "pk-marketing",
    name: "P.K. Marketing Co",
    industry: "enterprise",
    services: ["performance", "social-media"],
    metric: "Lead Gen",
    result: "Paper Import Leads",
    desc: "Digital campaigns for India's leading paper importer with 600+ clients.",
    challenge: "Traditional B2B business needed online lead generation.",
    strategy:
      "LinkedIn + Facebook Ads targeting industry buyers, landing page optimization.",
    results: [
      "Consistent lead flow established",
      "Online presence built from scratch",
      "3000+ tonnes monthly distribution supported by digital",
    ],
    logo: pkMarketingLogo,
    logoSize: "wide",
    platforms: ["LinkedIn Ads", "Meta Ads"],
  },
  {
    slug: "pluck-and-eat",
    name: "Pluck & Eat Farms",
    industry: "agriculture",
    services: ["performance", "social-media"],
    metric: "2.1x ROAS",
    result: "400 → 1,400 Followers",
    desc: "Performance marketing + social media for hydroponic farming brand.",
    challenge:
      "New brand with low awareness, needed both D2C sales and B2B franchise leads.",
    strategy:
      "Social media growth, Meta Ads for both e-commerce and lead gen funnels.",
    results: [
      "Instagram followers grew from 400 to 1,400",
      "2.1x ROAS on e-commerce",
      "Franchise inquiry leads generated",
      "Community built around healthy eating",
    ],
    logo: pluckAndEatLogo,
    logoSize: "standard",
    platforms: ["Meta Ads", "Instagram Ads"],
    heroImage: pluckAndEatHero,
  },
  {
    slug: "farm-naturelle",
    name: "Farm Naturelle",
    industry: "fmcg",
    services: ["performance", "social-media", "automation"],
    metric: "3x ROAS",
    result: "Dealer + D2C Funnel",
    desc:
      "Full-funnel performance marketing, social media, and automation for one of India's leading organic honey and natural food brands.",
    challenge:
      "Farm Naturelle needed to simultaneously generate dealer and white-label enquiries at scale while driving profitable D2C orders on their website.",
    strategy:
      "Built parallel campaign funnels for dealer generation and white-label branding (₹25–30 CPL). Ran D2C performance campaigns delivering 3x ROAS. Full automation with Google Sheets + WhatsApp API triggers.",
    results: [
      "₹25–30 cost per lead for dealer & white-label campaigns",
      "3x ROAS on D2C website orders",
      "Dealer enquiry generation at scale across India",
      "All leads auto-routed to Google Sheets in real time",
      "WhatsApp API triggered for instant follow-up",
    ],
    logo: farmNaturelleLogo,
    logoSize: "wide",
    platforms: ["Meta Ads", "Google Ads"],
    heroImage: farmNaturelleHero,
  },
  {
    slug: "nilofar",
    name: "Nilofar Incense",
    industry: "agriculture",
    services: ["performance", "social-media"],
    metric: "Brand Launch",
    result: "Performance + Social",
    desc: "Full-stack digital launch for premium incense stick brand.",
    challenge: "New product launch in competitive category.",
    strategy: "Facebook + Instagram Ads, social media management.",
    results: [
      "Successful market entry",
      "Brand awareness campaigns across Meta",
      "E-commerce channel established",
    ],
    logo: nilofarLogo,
    logoSize: "standard",
    platforms: ["Meta Ads", "Instagram Ads"],
    heroImage: nilofarHero,
  },
  {
    slug: "innate",
    name: "Innate Essentials",
    industry: "beauty-wellness",
    services: ["performance", "social-media"],
    metric: "2-3x Revenue",
    result: "~40% CPA Drop",
    desc:
      "Restructured ad funnels for a clean/chemical-free skincare brand — massive revenue growth with sharp CPA reduction.",
    challenge:
      "In-house marketing efforts were underperforming: low ROAS, unclear audience targeting, weak brand positioning.",
    strategy:
      "Restructured ad funnels (awareness → consideration → conversion). Defined precise audience personas & targeting. Storytelling creatives focused on transformation & self-care.",
    results: [
      "2–3× revenue growth in 60 days",
      "~40% drop in CPA",
      "Stronger brand positioning in clean beauty space",
      "Full funnel rebuild with optimized touchpoints",
    ],
    logo: innateLogo,
    logoSize: "wide",
    platforms: ["Meta Ads", "Instagram Ads"],
    heroImage: innateHero,
  },
  {
    slug: "snapzo",
    name: "Snapzo",
    industry: "tech",
    services: ["performance", "social-media"],
    metric: "2K+ Leads",
    result: "Ultra-Low CPA",
    desc:
      "Rapid photographer acquisition for India's freelance photography platform.",
    challenge:
      "Needed to rapidly acquire high volume of qualified photographer leads at exceptionally low cost.",
    strategy:
      "Granular audience segmentation by specialisation, experience & location. Multi-platform campaigns. Rigorous A/B testing.",
    results: [
      "2K+ qualified photographer leads acquired",
      "Ultra-low cost per acquisition",
      "Multi-platform campaign execution",
      "Automated lead qualification pipeline",
    ],
    logo: snapzoLogo,
    logoSize: "square",
    platforms: ["Meta Ads", "Google Ads"],
    heroImage: snapzoHero,
  },
  {
    slug: "flowlyf",
    name: "Flowlyf",
    industry: "tech",
    services: ["performance", "social-media"],
    metric: "Full Funnel",
    result: "Performance + Social + CRO",
    desc:
      "Performance marketing, social media marketing, and website CRO for a wellness and lifestyle tech platform.",
    challenge:
      "Flowlyf needed a comprehensive digital strategy combining paid acquisition with organic social presence and CRO.",
    strategy:
      "Performance marketing for acquisition, social media management, website CRO consulting.",
    results: [
      "Performance marketing campaigns driving user acquisition",
      "Social media presence built and managed",
      "Website CRO delivered for conversion optimisation",
    ],
    logo: flowlyfLogo,
    logoSize: "wide",
    platforms: ["Meta Ads"],
    heroImage: flowlyfHero,
  },
  {
    slug: "evolved-hair-seo",
    name: "Evolved Hair (SEO)",
    industry: "seo",
    services: ["seo"],
    metric: "25+ #1",
    result: "₹5.43Cr Organic Revenue",
    desc:
      "Comprehensive SEO strategy that dominated competitive hair transplant keywords in Australia.",
    challenge:
      "Competing against established clinics in a high-CPC market.",
    strategy:
      "On-page SEO, content strategy, backlink building, local SEO for Perth.",
    results: [
      "25+ keywords ranking #1 on Google",
      "172 first-page rankings across clients",
      "₹5.43Cr organic revenue generated",
      "92% client retention rate",
    ],
    logo: evolvedHairLogo,
    logoSize: "wide",
  },
  {
    slug: "indus-valley",
    name: "Indus Valley Organic Beauty",
    industry: "fmcg",
    services: ["influencer"],
    metric: "12M Views",
    result: "5.2% Engagement",
    desc:
      "Precision creator matching in organic beauty delivered 2.5× industry average engagement.",
    challenge:
      "Needed authentic creator partnerships to build trust in the organic beauty space.",
    strategy:
      "AI-matched 10 curated creators by niche fit, engagement authenticity, and audience alignment.",
    results: [
      "5.2% engagement rate (2.5× industry avg)",
      "12M total views",
      "1M total likes",
      "Measurable brand recall and product trial",
    ],
    logo: indusValleyLogo,
    logoSize: "standard",
    heroImage: indusValleyHero,
  },
  {
    slug: "bare-anatomy",
    name: "Bare Anatomy Haircare",
    industry: "fmcg",
    services: ["influencer"],
    metric: "9M Views",
    result: "2.8× Outperformed",
    desc:
      "30 creators across micro and macro tiers drove massive reach through authentic hair transformation content.",
    challenge:
      "Branded content was underperforming — needed authentic creator voices to drive reach.",
    strategy:
      "Data-led creator matching across micro and macro tiers for hair transformation content.",
    results: [
      "3.7% engagement rate",
      "9M total views",
      "560K total likes",
      "Outperformed brand content by 2.8× on reach and engagement",
    ],
    logo: bareAnatomyLogo,
    logoSize: "standard",
    heroImage: bareAnatomyHero,
  },
  {
    slug: "starbucks",
    name: "Starbucks India",
    industry: "food-beverage",
    services: ["influencer"],
    metric: "5.2% Engagement",
    result: "Premium Lifestyle",
    desc:
      "Premium lifestyle creators curated for metro coffee-culture audiences with full brand safety.",
    challenge:
      "Needed premium creator partnerships that maintained Starbucks brand standards.",
    strategy:
      "Curated premium lifestyle creators for metro coffee-culture audiences with full brand safety vetting.",
    results: [
      "5.2% engagement rate",
      "2M total views",
      "420K total likes",
      "Full brand safety across all 30 creator partnerships",
    ],
    logo: starbucksLogo,
    logoSize: "square",
    heroImage: starbucksHero,
  },
  {
    slug: "burger-king",
    name: "Burger King India",
    industry: "food-beverage",
    services: ["influencer"],
    metric: "8M Views",
    result: "in 48 hrs",
    desc:
      "Largest creator deployment — 50 creators across tiers for a new menu launch, delivered in under 48 hours.",
    challenge:
      "High-velocity, high-volume campaign needed for a new menu launch across India.",
    strategy:
      "Deployed 50 creators across all tiers simultaneously, managed end-to-end in under 48 hours.",
    results: [
      "4.5% engagement rate",
      "8M views delivered in under 48 hours",
      "622K total likes",
      "Demonstrated capacity for high-velocity campaigns at scale",
    ],
    logo: burgerKingLogo,
    logoSize: "square",
    heroImage: burgerKingHero,
  },
  {
    slug: "sulit",
    name: "Sulit Lifestyle",
    industry: "travel",
    services: ["web-dev"],
    metric: "Website",
    result: "End-to-End Web Dev",
    desc: "Website development for a travel & lifestyle brand.",
    challenge:
      "Sulit Lifestyle needed a professional digital presence to showcase their travel experiences and drive direct bookings.",
    strategy:
      "Designed and developed a custom website aligned with their brand identity.",
    results: [
      "Custom website developed & launched",
      "Improved brand credibility online",
      "Streamlined enquiry flow",
    ],
    logo: sulitLogo,
    heroImage: sulitHero,
  },
  {
    slug: "privara",
    name: "Privara Luxury Journeys",
    industry: "travel",
    services: ["performance", "meta-ads"],
    metric: "Meta Ads",
    result: "Lead Generation",
    desc: "Meta Ads-driven enquiry generation for luxury travel experiences.",
    challenge:
      "Privara needed a consistent pipeline of high-intent travel enquiries to fill their curated luxury journeys.",
    strategy:
      "Launched targeted Meta Ad campaigns focused on affluent travellers, optimising for enquiry conversions.",
    results: [
      "Consistent flow of qualified enquiries",
      "Lower cost per lead via Meta Ads",
      "Increased booking pipeline",
    ],
    logo: privaraLogo,
    logoSize: "tall",
  },
  {
    slug: "chindi-safar",
    name: "Chindi Safar",
    industry: "travel",
    services: ["web-dev", "social-media", "performance"],
    metric: "10K+",
    result: "Followers Scaled",
    desc:
      "Website development, social media strategy, and performance marketing for an adventure travel brand.",
    challenge:
      "Chindi Safar needed a complete digital foundation — from website to a converting social presence.",
    strategy:
      "Built brand website, consulted on social strategy, ran performance campaigns to drive growth and travel enquiry conversions.",
    results: [
      "Brand scaled to 10,000+ followers",
      "Website developed and launched",
      "Social media strategy consulted and executed",
      "Enquiry conversions generated from campaigns",
    ],
    logo: chindiSafarLogo,
    logoSize: "square",
    platforms: ["Meta Ads"],
  },
  {
    slug: "evermore",
    name: "Evermore Diamonds",
    industry: "jewellery",
    services: ["performance"],
    metric: "8.9L+",
    result: "Combined Impressions",
    desc:
      "Full-funnel paid media for a lab-grown diamond brand — Google Search, P-MAX, Shopping & Meta campaigns across the full funnel.",
    challenge:
      "Evermore was running siloed campaigns with budget skewed toward inefficient campaign types and no retargeting layer.",
    strategy:
      "Full Google Ads audit + budget reallocation toward P-MAX. Built three-layer funnel on Meta: Awareness → Conversion → Retargeting.",
    results: [
      "8,95,831 combined impressions across Google & Meta",
      "23,913 total clicks at blended AED 0.63 CPC",
      "P-MAX delivered 12x better cost per conversion than Search",
      "WhatsApp conversations captured via Meta offer campaign",
    ],
    logo: evermoreLogo,
    logoSize: "wide",
    platforms: ["Google Ads", "Meta Ads"],
  },
  {
    slug: "charmshilp",
    name: "Charmshilp",
    industry: "lifestyle",
    services: ["performance", "social-media"],
    metric: "—",
    result: "Case study coming soon",
    desc: "Performance & social media for equestrian lifestyle brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: charmshilpLogo,
    logoSize: "tall",
    comingSoon: true,
    heroImage: charmshilpHero,
  },
  {
    slug: "zen-golf",
    name: "Zen Golf",
    industry: "sports",
    services: ["performance", "social-media"],
    metric: "—",
    result: "Case study coming soon",
    desc: "Performance & social media marketing for premium golf brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: zenGolfLogo,
    logoSize: "square",
    comingSoon: true,
    heroImage: zenGolfHero,
  },
  {
    slug: "vasarte",
    name: "Vasarte",
    industry: "home-decor",
    services: ["performance", "social-media"],
    metric: "5.6L+",
    result: "Users Reached",
    desc:
      "Full-funnel paid media for a premium home interiors and wardrobe brand — Google Search, P-Max, and Meta campaigns.",
    challenge:
      "High-ticket home interiors brand with long buyer cycle. Needed qualified leads from genuine homeowners across kitchen and wardrobe verticals.",
    strategy:
      "Two-platform funnel — Google (Search + P-Max) and Meta (six parallel campaigns covering forms, landing pages, wardrobe, IG profile visits, FB engagement, and 31–55 demographic).",
    results: [
      "6,96,219 Meta impressions delivered",
      "5,68,448 unique users reached",
      "193 Meta leads generated",
      "97,134 Google impressions at 6.01% CTR",
      "17 Google conversions including calls and form fills",
    ],
    platforms: ["Google Ads", "Meta Ads"],
    logo: vasarteLogo,
    logoSize: "wide",
    heroImage: vasarteHero,
  },
  {
    slug: "mount-talent",
    name: "Mount Talent",
    industry: "hr",
    services: ["performance"],
    metric: "8,336",
    result: "Meta Leads",
    desc:
      "Full-funnel paid media for a recruitment and staffing brand — Google Search for employer leads alongside Meta campaigns covering job fairs, hiring drives, webinars, and international expansion.",
    challenge:
      "Mount Talent needed to attract job seekers across blue-collar, IT, and white-collar segments while generating employer leads — without cannibalising budgets.",
    strategy:
      "Parallel two-platform strategy. Google Search for IT staffing employer queries. Meta across job fairs, blue-collar hiring, BPO, agriculture, webinars, online degrees, plus Armenia and UK markets in Hindi, English, and Marathi.",
    results: [
      "8,336 Meta leads generated — all time",
      "2,117 Google conversions at 55.74% conversion rate",
      "30,79,177 total Meta impressions",
      "₹28.72 Google cost per conversion",
      "Multi-language campaigns in Hindi, English and Marathi",
      "International expansion campaigns for Armenia and UK markets",
    ],
    logo: mountTalentLogo,
    logoSize: "wide",
    platforms: ["Google Ads", "Meta Ads"],
    heroImage: mountTalentHero,
  },
  {
    slug: "gadoot",
    name: "Gadott",
    industry: "tech",
    services: ["performance"],
    metric: "—",
    result: "Case study coming soon",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: gadootLogo,
    logoSize: "wide",
    comingSoon: true,
    heroImage: gadottHero,
  },
  {
    slug: "pansari",
    name: "Pansari Group",
    industry: "enterprise",
    services: ["automation"],
    metric: "Zero Leakage",
    result: "End-to-End Automation",
    desc:
      "End-to-end business automation for one of India's leading FMCG brands — Integrately workflows connecting lead sources, internal teams, and data systems.",
    challenge:
      "Pansari operates at scale across multiple product lines and distributors. Leads were being handled manually causing delays, missed follow-ups, and zero real-time visibility.",
    strategy:
      "Designed and deployed full automation infrastructure using Integrately. Every lead auto-captured, categorised, and pushed into the relevant sheet or CRM in real time with instant team notifications.",
    results: [
      "End-to-end lead automation built across all channels",
      "Zero lead leakage — every enquiry auto-captured in real time",
      "Instant team notifications triggered on every new lead",
      "Manual data entry eliminated from the workflow entirely",
      "Single source of truth created for sales and operations teams",
    ],
    logo: pansariLogo,
    logoSize: "wide",
    platforms: ["Meta Ads"],
    heroImage: pansariHero,
  },
  {
    slug: "stonelam",
    name: "Stonelam",
    industry: "manufacturing",
    services: ["performance", "automation"],
    metric: "Meta + SAP",
    result: "Auto-Routed Leads",
    desc:
      "Performance marketing and lead automation for a premium natural stone facades manufacturer — generating Meta leads and automating enquiry routing into SAP.",
    challenge:
      "Stonelam needed qualified enquiries from architects, builders, and interior designers — all auto-captured into SAP without manual data entry.",
    strategy:
      "Meta lead generation campaigns targeting architects, builders, and design professionals. Built automation workflows to route leads directly into Stonelam's SAP system in real time.",
    results: [
      "Meta lead generation campaigns driving qualified enquiries",
      "All leads auto-routed into SAP system in real time",
      "Zero manual data entry between Meta and SAP",
      "Lead response time dramatically reduced",
    ],
    logo: stonelamLogo,
    logoSize: "wide",
    platforms: ["Meta Ads"],
    heroImage: stonelamHero,
  },
  {
    slug: "benzoville",
    name: "Benzoville",
    industry: "home-decor",
    services: ["performance", "social-media"],
    metric: "75% CVR",
    result: "7 New Franchises",
    desc:
      "Storytelling-led campaigns positioning Benzoville as a luxury hardware universe — driving both B2C leads and franchise expansion.",
    challenge:
      "Needed to attract high-ticket B2C customers, expand franchise presence, and differentiate from typical hardware vendors.",
    strategy:
      "Storytelling-led campaigns emphasizing exclusivity, design heritage, emotional appeal. Sold the franchise ecosystem.",
    results: [
      "6 new franchise outlets across India",
      "7 B2C leads generated in one month",
      "75% conversion rate from qualified leads to consultations",
      "20% growth in high-ticket customer acquisitions",
    ],
    logo: benzovilleLogo,
    logoSize: "wide",
    platforms: ["Meta Ads", "Google Ads"],
    heroImage: benzovilleHero,
  },
  {
    slug: "biut",
    name: "Biut",
    industry: "manufacturing",
    services: ["performance", "automation"],
    metric: "2,400+",
    result: "Multi-Vertical Leads",
    desc:
      "Full-funnel Meta lead generation and WhatsApp automation for a premium sanitaryware and faucets brand.",
    challenge:
      "Generate leads across multiple verticals — dealer enquiries, plumber app registrations, IIID architect leads, and direct consumer interest — each requiring different targeting.",
    strategy:
      "Multi-vertical campaign funnels on Meta — dealer, plumber acquisition, IIID exhibition campaigns, and WhatsApp via DoubleTick. Automated lead routing.",
    results: [
      "2,400+ leads generated across all campaign verticals",
      "1,000+ plumber app registrations captured",
      "410+ IIID event leads from architects & designers",
      "798 WhatsApp conversations initiated via DoubleTick",
      "278 booth visitors captured at IIID exhibition",
    ],
    logo: biutLogo,
    logoSize: "wide",
    platforms: ["Meta Ads"],
    heroImage: biutHero,
  },
  {
    slug: "utazzo",
    name: "Utazzo Holidays",
    industry: "travel",
    services: ["performance", "social-media"],
    metric: "—",
    result: "Case study coming soon",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: utaazHolidayLogo,
    logoSize: "wide",
    comingSoon: true,
    heroImage: utazzoHero,
  },
  {
    slug: "khyaath",
    name: "Khyaath Rituals",
    industry: "travel",
    services: ["performance"],
    metric: "295 Leads",
    result: "India & UK Markets",
    desc:
      "Full-funnel Meta + Google Ads for a luxury destination wedding and honeymoon brand — across India and UK markets.",
    challenge:
      "High-ticket destination wedding and honeymoon space needed precision targeting by intent, life stage, and geography including UK diaspora.",
    strategy:
      "Multi-geography funnel across three campaigns — India destination wedding, honeymoon-specific, and UK market test. WhatsApp flows for high-intent leads.",
    results: [
      "295 leads generated — all time",
      "4,75,416 total impressions delivered",
      "1,73,748 unique users reached",
      "77,869 video views generated",
      "UK international market successfully tested",
    ],
    logo: khyaathLogo,
    logoSize: "wide",
    platforms: ["Meta Ads", "Google Ads"],
    heroImage: khyaathHero,
  },
  {
    slug: "broker-in-blue",
    name: "Broker in Blue",
    industry: "real-estate",
    services: ["performance"],
    metric: "3,700+ Leads",
    result: "₹186 Avg CPL",
    desc:
      "Multi-project Meta Ads lead generation engine for a Bengaluru real estate brokerage — 35+ campaigns across premium residential projects.",
    challenge:
      "Reach serious homebuyers across diverse Bengaluru micro-markets while keeping cost-per-lead sustainable in an aggressive category.",
    strategy:
      "Multi-project lead gen engine on Meta — separate campaigns per property with tailored creatives and audience targeting per locality.",
    results: [
      "3,700+ leads generated across 35+ campaigns",
      "₹186 average CPL across the entire account",
      "MSR City — 335 leads at ₹87 CPL, most efficient campaign",
      "Shriram MSR — 497 leads, highest volume single campaign",
      "40L+ impressions delivered across Bengaluru",
    ],
    logo: brokerInBlueLogo,
    logoSize: "wide",
    platforms: ["Meta Ads"],
    heroImage: brokerInBlueHero,
  },
  {
    slug: "ashwani-chaudhary",
    name: "Ashwani Chaudhary",
    industry: "real-estate",
    services: ["performance", "social-media"],
    metric: "—",
    result: "Case study coming soon",
    desc:
      "Social media and performance marketing for a Dubai-based real estate practitioner — India and U.S. buyer markets.",
    challenge:
      "Reach serious property buyers across two very different international markets with tailored messaging per geography.",
    strategy:
      "Separate social media and paid media strategies for India and US markets, with customised creatives and audience targeting per geography.",
    results: [
      "India-based buyer market successfully targeted",
      "U.S.-based buyer market campaigns launched",
      "Cross-geography social media strategy implemented",
    ],
    comingSoon: true,
  },
];

export const featuredCases = clientCases.filter((c) => c.featured);
