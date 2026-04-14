import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DarkHero } from "@/components/layout/DarkHero";
import { Reveal } from "@/components/ui/reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  ArrowRight, Building2, TrendingUp, ChevronLeft, ChevronRight,
} from "lucide-react";

// Platform logos (optimized WebP)
import googleAdLogo from "@/assets/platforms/google_ad.webp";
import metaAdLogo from "@/assets/platforms/meta_ad.webp";
import instaAdLogo from "@/assets/platforms/insta_ads.webp";
import linkedinAdLogo from "@/assets/platforms/linkedin_ad.png";
import youtubeAdLogo from "@/assets/platforms/youtube_ad.webp";
import pinterestAdLogo from "@/assets/platforms/pinterest_ad.webp";
import snapAdLogo from "@/assets/platforms/snap_ads.webp";
import taboolaLogo from "@/assets/platforms/taboola.webp";

// Client logos (optimized)
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
import sulitLogo from "@/assets/clients/sulit.webp";
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

// ── Types ──
type ServiceType = "performance" | "influencer" | "seo" | "social-media";

const serviceLabels: Record<ServiceType, string> = {
  performance: "Performance Ads",
  influencer: "Influencer / Creator",
  seo: "SEO",
  "social-media": "Social Media",
};

const serviceColors: Record<ServiceType, string> = {
  performance: "bg-primary/10 text-primary border-primary/20",
  influencer: "bg-accent/20 text-accent-foreground border-accent/30",
  seo: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  "social-media": "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20",
};

type IndustryType = string;

const industryLabels: Record<string, string> = {
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

// Platform mapping
const platformLogos = [
  { src: googleAdLogo, alt: "Google Ads" },
  { src: metaAdLogo, alt: "Meta Ads" },
  { src: instaAdLogo, alt: "Instagram Ads" },
  { src: linkedinAdLogo, alt: "LinkedIn Ads" },
  { src: youtubeAdLogo, alt: "YouTube Ads" },
  { src: pinterestAdLogo, alt: "Pinterest Ads" },
  { src: snapAdLogo, alt: "Snapchat Ads" },
  { src: taboolaLogo, alt: "Taboola" },
];

const platformLogoMap: Record<string, string> = {
  "Google Ads": googleAdLogo,
  "Meta Ads": metaAdLogo,
  "Instagram Ads": instaAdLogo,
  "LinkedIn Ads": linkedinAdLogo,
  "YouTube Ads": youtubeAdLogo,
  "Pinterest Ads": pinterestAdLogo,
  "Snapchat Ads": snapAdLogo,
  "Taboola": taboolaLogo,
};

// ── Logo sizing presets ──
// square: icon-style logos (Starbucks, Burger King, Chindi Safar, Zen Golf)
// tall: tall/portrait logos (Sulit, Charmshilp, Golden Queen's)
// wide: horizontal/wordmark logos (Toyota, Calitech, PK Marketing, Flowlyf, Evermore, Evolved Hair)
// standard: default balanced size
type LogoSize = "square" | "tall" | "wide" | "standard";

// Logo sizing is handled inline in the card component

// ── Client data ──
interface ClientCase {
  name: string;
  industry: string;
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
  comingSoon?: boolean; // clients without full case study yet
}

const clients: ClientCase[] = [
  // E-commerce & D2C
  {
    name: "Incenza",
    industry: "ecommerce",
    services: ["performance"],
    metric: "2.1x ROAS",
    result: "Profitable Scale",
    desc: "Scaled a premium incense stick brand with Meta Ads and creative testing.",
    challenge: "New D2C brand with zero online presence, needed profitable customer acquisition.",
    strategy: "Dynamic product ads, audience segmentation, creative testing system.",
    results: ["Achieved 2.1x ROAS", "Consistent profitable growth", "Strong brand recall built through creative"],
    logo: incenzaLogo,
    logoSize: "standard",
    platforms: ["Meta Ads", "Instagram Ads"],
  },
  {
    name: "Mocemsa",
    industry: "ecommerce",
    services: ["social-media"],
    metric: "736% Reach Increase",
    result: "5.3M Accounts Reached",
    desc: "Social media management for premium fragrance brand — massive organic growth.",
    challenge: "Low social media engagement and reach, no structured content strategy.",
    strategy: "Trend-based reels, structured content calendar, engagement-driven posting.",
    results: ["Accounts reached grew to 5.3M (+736%)", "Engagement up 1,116%", "Followers grew 35.7%", "Brand became a social-first fragrance name"],
    logo: mocemsaLogo,
    logoSize: "wide",
  },
  {
    name: "Uneek",
    industry: "ecommerce",
    services: ["social-media"],
    metric: "3.3M Reach",
    result: "29.8% Growth",
    desc: "Social media growth for fashion accessories brand with 29.7K followers.",
    challenge: "Plateau in social growth, needed fresh creative approach.",
    strategy: "Meme marketing, trend-jacking, community engagement.",
    results: ["3.3M accounts reached", "29.8% reach increase", "37K accounts engaged", "Strong community built"],
  },
  {
    name: "Chic Collezione",
    industry: "ecommerce",
    services: ["performance"],
    metric: "3x ROAS",
    result: "Canvas Art Sales",
    desc: "Performance marketing for canvas wall art e-commerce store.",
    challenge: "Needed profitable scaling for a niche product category.",
    strategy: "Creative-first approach with lifestyle imagery, targeted interest audiences.",
    results: ["Achieved 3x ROAS", "Scaled ad spend profitably", "Strong creative framework established"],
    logo: chicCollezioneLogo,
    logoSize: "standard",
    platforms: ["Meta Ads", "Instagram Ads"],
  },
  // Automotive
  {
    name: "Uttam Toyota",
    industry: "automotive",
    services: ["performance"],
    metric: "₹10Cr+ Revenue",
    result: "4,942 Leads Generated",
    desc: "Google Ads lead generation for one of Delhi NCR's largest Toyota dealerships.",
    challenge: "Needed high-volume qualified leads across multiple locations in Delhi, Noida, Gurgaon.",
    strategy: "Google Search + Display campaigns, landing page optimization, CRM integration.",
    results: ["₹5.34L ad spend → ₹10Cr+ revenue", "4,942 qualified leads generated", "61,615 clicks at ₹8.68 CPC", "Conversion rate of 8.02%"],
    logo: uttamToyotaLogo,
    logoSize: "wide",
    platforms: ["Google Ads"],
  },
  // International
  {
    name: "Evolved Hair Restoration (Australia)",
    industry: "international",
    services: ["performance", "seo"],
    metric: "10x ROAS",
    result: "+45% Appointment Bookings",
    desc: "Full-funnel digital strategy for a Perth-based hair transplant clinic — performance marketing, SEO, and appointment booking funnels.",
    challenge: "Saturated market with high CPCs. Traditional marketing gave leads who often didn't show up or were low quality.",
    strategy: "Magic Lantern lead nurturing technique on HubSpot, SEO + Google Ads, appointment booking funnels + nurturing sequences, CRM integration for follow-ups.",
    results: ["10x ROAS — 4K AUD spend → 40K AUD revenue/month", "+45% increase in appointment bookings", "Significant drop in cost per consultation", "Better lead-to-showup conversion", "25+ keywords ranking #1 on Google", "Hired another trichologist due to demand"],
    logo: evolvedHairLogo,
    logoSize: "wide",
    platforms: ["Google Ads", "Meta Ads"],
  },
  // Healthcare
  {
    name: "Calitech Biotechnologies",
    industry: "healthcare",
    services: ["performance", "social-media"],
    metric: "₹40L+ Revenue",
    result: "36x ROI",
    desc: "Lead generation for medical oxygen supply systems (MOSS) manufacturer.",
    challenge: "Niche B2B product, needed to reach hospital decision-makers cost-effectively.",
    strategy: "Google Ads + Facebook Lead Forms, targeted hospital/healthcare audiences, social media content.",
    results: ["₹1.1L invested → ₹40L+ revenue", "Onboarded a new distributor", "Strong brand awareness in healthcare sector", "Social media authority established"],
    logo: calitechLogo,
    logoSize: "wide",
    platforms: ["Google Ads", "Meta Ads"],
  },
  // Enterprise
  {
    name: "DuPont Sustainable Solutions (dss+)",
    industry: "enterprise",
    services: ["performance", "social-media"],
    metric: "LinkedIn + Google Ads",
    result: "Global EHS Campaigns",
    desc: "Digital marketing for world's #1 EHS consultancy — safety e-learning modules.",
    challenge: "Enterprise B2B with long sales cycles, needed digital presence in India market.",
    strategy: "LinkedIn thought leadership, Google Ads for safety training keywords, content-driven lead gen.",
    results: ["Successfully launched India digital campaigns", "Agency recognized at dss+ corporate summit", "Multi-platform campaign execution (Google, LinkedIn, Facebook)", "Internal creative campaigns for Amazon partnership"],
    logo: dssLogo,
    logoSize: "standard",
    platforms: ["Google Ads", "LinkedIn Ads", "Meta Ads"],
  },
  {
    name: "P.K. Marketing Co",
    industry: "enterprise",
    services: ["performance"],
    metric: "Lead Generation",
    result: "Paper Import Leads",
    desc: "Digital campaigns for India's leading paper importer with 600+ clients.",
    challenge: "Traditional B2B business needed online lead generation.",
    strategy: "LinkedIn + Facebook Ads targeting industry buyers, landing page optimization.",
    results: ["Consistent lead flow established", "Online presence built from scratch", "3000+ tonnes monthly distribution supported by digital"],
    logo: pkMarketingLogo,
    logoSize: "wide",
    platforms: ["LinkedIn Ads", "Meta Ads"],
  },
  // Agriculture
  {
    name: "Pluck & Eat Farms",
    industry: "agriculture",
    services: ["performance", "social-media"],
    metric: "400 → 1,400 Followers",
    result: "2.1x ROAS",
    desc: "Performance marketing + social media for hydroponic farming brand.",
    challenge: "New brand with low awareness, needed both D2C sales and B2B franchise leads.",
    strategy: "Social media growth, Meta Ads for both e-commerce and lead gen funnels.",
    results: ["Instagram followers grew from 400 to 1,400", "2.1x ROAS on e-commerce", "Franchise inquiry leads generated", "Community built around healthy eating"],
    logo: pluckAndEatLogo,
    logoSize: "standard",
    platforms: ["Meta Ads", "Instagram Ads"],
  },
  {
    name: "Farm Naturelle",
    industry: "agriculture",
    services: ["performance"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Performance marketing for organic honey and natural food products brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: farmNaturelleLogo,
    logoSize: "wide",
    platforms: ["Meta Ads", "Google Ads"],
    comingSoon: true,
  },
  {
    name: "Nilofar Incense",
    industry: "agriculture",
    services: ["performance", "influencer"],
    metric: "Brand Launch",
    result: "Performance + Influencer",
    desc: "Full-stack digital launch for premium incense stick brand with influencer amplification.",
    challenge: "New product launch in competitive category.",
    strategy: "Facebook + Instagram Ads, influencer content, social media management.",
    results: ["Successful market entry", "Brand awareness campaigns across Meta", "E-commerce channel established"],
    logo: nilofarLogo,
    logoSize: "standard",
    platforms: ["Meta Ads", "Instagram Ads"],
  },
  // Beauty & Wellness
  {
    name: "Innate Skincare",
    industry: "beauty-wellness",
    services: ["performance"],
    metric: "2-3x Revenue in 60 Days",
    result: "~40% CPA Drop",
    desc: "Restructured ad funnels for a clean/chemical-free skincare brand — massive revenue growth with sharp CPA reduction.",
    challenge: "In-house marketing efforts were underperforming: low ROAS, unclear audience targeting, weak brand positioning.",
    strategy: "Restructured ad funnels (awareness → consideration → conversion). Defined precise audience personas & targeting. Storytelling creatives focused on transformation & self-care.",
    results: ["2–3× revenue growth in 60 days", "~40% drop in CPA", "Stronger brand positioning in clean beauty space", "Full funnel rebuild with optimized touchpoints"],
    platforms: ["Meta Ads", "Instagram Ads"],
  },
  // Apps & Tech
  {
    name: "Snapzo (Photography Platform)",
    industry: "tech",
    services: ["performance"],
    metric: "2K+ Leads",
    result: "Ultra-Low CPA",
    desc: "Rapid photographer acquisition for India's freelance photography platform through granular segmentation and multi-platform campaigns.",
    challenge: "Needed to rapidly acquire high volume of qualified photographer leads at exceptionally low cost to fuel expansion across the Indian market.",
    strategy: "Granular audience segmentation by specialisation, experience & location. Multi-platform campaigns across Google Ads, Meta & photography communities. Rigorous A/B testing on creatives, copy, bidding & landing pages. Automated lead qualification & nurturing funnels.",
    results: ["2K+ qualified photographer leads acquired", "Ultra-low cost per acquisition", "Multi-platform campaign execution", "Automated lead qualification pipeline"],
    logo: snapzoLogo,
    logoSize: "square",
    platforms: ["Meta Ads", "Google Ads"],
  },
  {
    name: "Flowlyf",
    industry: "tech",
    services: ["performance"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Digital marketing for wellness & lifestyle tech platform.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: flowlyfLogo,
    logoSize: "wide",
    comingSoon: true,
  },
  // SEO
  {
    name: "Evolved Hair Restoration (SEO)",
    industry: "seo",
    services: ["seo"],
    metric: "25+ #1 Rankings",
    result: "₹5.43Cr Organic Revenue",
    desc: "Comprehensive SEO strategy that dominated competitive hair transplant keywords in Australia.",
    challenge: "Competing against established clinics in a high-CPC market (hair transplant Australia).",
    strategy: "On-page SEO, content strategy, backlink building, local SEO for Perth.",
    results: ["25+ keywords ranking #1 on Google", "172 first-page rankings across clients", "₹5.43Cr organic revenue generated", "92% client retention rate"],
    logo: evolvedHairLogo,
    logoSize: "wide",
  },
  // Influencer Marketing
  {
    name: "Indus Valley Organic Beauty",
    industry: "fmcg",
    services: ["influencer"],
    metric: "5.2% Engagement",
    result: "12M Views",
    desc: "Precision creator matching in organic beauty delivered 2.5× industry average engagement.",
    challenge: "Needed authentic creator partnerships to build trust in the organic beauty space.",
    strategy: "AI-matched 10 curated creators by niche fit, engagement authenticity, and audience alignment.",
    results: ["5.2% engagement rate (2.5× industry avg)", "12M total views", "1M total likes", "Measurable brand recall and product trial"],
    logo: indusValleyLogo,
    logoSize: "standard",
  },
  {
    name: "Bare Anatomy Haircare",
    industry: "fmcg",
    services: ["influencer"],
    metric: "9M Views",
    result: "2.8× Outperformed Brand Content",
    desc: "30 creators across micro and macro tiers drove massive reach through authentic hair transformation content.",
    challenge: "Branded content was underperforming — needed authentic creator voices to drive reach.",
    strategy: "Data-led creator matching across micro and macro tiers for hair transformation content.",
    results: ["3.7% engagement rate", "9M total views", "560K total likes", "Outperformed brand content by 2.8× on reach and engagement"],
    logo: bareAnatomyLogo,
    logoSize: "standard",
  },
  {
    name: "Starbucks India",
    industry: "food-beverage",
    services: ["influencer"],
    metric: "5.2% Engagement",
    result: "Premium Lifestyle Campaign",
    desc: "Premium lifestyle creators curated for metro coffee-culture audiences with full brand safety.",
    challenge: "Needed premium creator partnerships that maintained Starbucks brand standards.",
    strategy: "Curated premium lifestyle creators for metro coffee-culture audiences with full brand safety vetting.",
    results: ["5.2% engagement rate", "2M total views", "420K total likes", "Full brand safety across all 30 creator partnerships"],
    logo: starbucksLogo,
    logoSize: "square",
  },
  {
    name: "Burger King India",
    industry: "food-beverage",
    services: ["influencer"],
    metric: "8M Views in 48hrs",
    result: "50-Creator Deployment",
    desc: "Largest creator deployment — 50 creators across tiers for a new menu launch, delivered in under 48 hours.",
    challenge: "High-velocity, high-volume campaign needed for a new menu launch across India.",
    strategy: "Deployed 50 creators across all tiers simultaneously, managed end-to-end in under 48 hours.",
    results: ["4.5% engagement rate", "8M views delivered in under 48 hours", "622K total likes", "Demonstrated capacity for high-velocity campaigns at scale"],
    logo: burgerKingLogo,
    logoSize: "square",
  },
  // New clients — logos uploaded, case studies coming
  {
    name: "Sulit Lifestyle",
    industry: "travel",
    services: ["web-dev", "social-media"],
    metric: "Website Delivered",
    result: "End-to-End Web Development",
    desc: "Website development and social media marketing for a travel & lifestyle brand.",
    challenge: "Sulit Lifestyle needed a professional digital presence to showcase their travel experiences and drive direct bookings.",
    strategy: "Designed and developed a custom website aligned with their brand identity, complemented by social media content strategy.",
    results: ["Custom website developed & launched", "Improved brand credibility online", "Streamlined enquiry flow"],
    logo: sulitLogo,
    logoSize: "tall",
    comingSoon: false,
  },
  {
    name: "Privara Luxury Journeys",
    industry: "travel",
    services: ["performance", "meta-ads"],
    metric: "Enquiries via Meta Ads",
    result: "Lead Generation with Meta Ads",
    desc: "Meta Ads-driven enquiry generation for luxury travel experiences.",
    challenge: "Privara needed a consistent pipeline of high-intent travel enquiries to fill their curated luxury journeys.",
    strategy: "Launched targeted Meta Ad campaigns focused on affluent travellers, optimising for enquiry conversions with compelling creatives and audience segmentation.",
    results: ["Consistent flow of qualified enquiries", "Lower cost per lead via Meta Ads", "Increased booking pipeline"],
    logo: privaraLogo,
    logoSize: "tall",
    comingSoon: false,
  },
  {
    name: "Chindi Safar",
    industry: "travel",
    services: ["social-media", "influencer"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Social media & influencer marketing for adventure travel brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: chindiSafarLogo,
    logoSize: "square",
    comingSoon: true,
  },
  {
    name: "Evermore Diamonds",
    industry: "jewellery",
    services: ["performance", "social-media"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Performance & social media marketing for premium diamond jewellery brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: evermoreLogo,
    logoSize: "wide",
    comingSoon: true,
  },
  {
    name: "Charmshilp",
    industry: "lifestyle",
    services: ["performance", "social-media"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Performance & social media for equestrian lifestyle brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: charmshilpLogo,
    logoSize: "tall",
    comingSoon: true,
  },
  {
    name: "Zen Golf",
    industry: "sports",
    services: ["performance", "social-media"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Performance & social media marketing for premium golf brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: zenGolfLogo,
    logoSize: "square",
    comingSoon: true,
  },
  {
    name: "Mount Talent",
    industry: "hr",
    services: ["performance"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Performance marketing for HR consulting & talent acquisition firm.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: mountTalentLogo,
    logoSize: "wide",
    comingSoon: true,
  },
  {
    name: "Golden Queen's Ceramics",
    industry: "ecommerce",
    services: ["performance", "social-media"],
    metric: "9x ROAS",
    result: "3x D2C Sales Growth",
    desc: "Built a full D2C ecosystem for a family-run ceramics brand, shifting them off marketplace dependency.",
    challenge: "Over-reliant on marketplaces with rising commission fees cutting margins. Wanted to shift to independent e-commerce (D2C) while maintaining sales volumes.",
    strategy: "Built full-stack D2C ecosystem: Shopify store + conversion-optimized product pages. Created fresh targeting funnels + paid ad campaigns. Retargeting and lifecycle marketing to retain & repeat customers.",
    results: ["Direct website sales grew ~3x with 9x ROAS", "Marketplace dependency reduced 60-70%", "Improved profit per order", "Stronger control over brand identity"],
    logo: goldenQueensLogo,
    logoSize: "tall",
    platforms: ["Meta Ads", "Instagram Ads"],
  },
  {
    name: "Gadoot",
    industry: "tech",
    services: ["performance"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Performance marketing for tech brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: gadootLogo,
    logoSize: "wide",
    comingSoon: true,
  },
  {
    name: "Vasarte",
    industry: "home-decor",
    services: ["performance", "social-media"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Digital marketing for artisanal home solutions & design advisory brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: vasarteLogo,
    logoSize: "standard",
    comingSoon: true,
  },
  {
    name: "Pansari Group",
    industry: "enterprise",
    services: ["performance"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Performance marketing for leading enterprise group.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: pansariLogo,
    logoSize: "wide",
    comingSoon: true,
  },
  {
    name: "Stonelam",
    industry: "manufacturing",
    services: ["performance", "social-media"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Digital marketing for premium natural stone facades manufacturer.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: stonelamLogo,
    logoSize: "wide",
    comingSoon: true,
  },
  {
    name: "Benzoville",
    industry: "home-decor",
    services: ["performance", "social-media"],
    metric: "75% Conversion Rate",
    result: "7 New Franchises",
    desc: "Storytelling-led campaigns positioning Benzoville as a luxury hardware universe — driving both B2C leads and franchise expansion.",
    challenge: "Needed to attract high-ticket B2C customers, expand franchise presence across India, and differentiate from typical hardware vendors.",
    strategy: "Storytelling-led campaigns emphasizing exclusivity, design heritage, emotional appeal. For franchise growth: sold the ecosystem — supportive network, brand value, premium equity. B2C funnel: lead gen + brand prestige + trust signals.",
    results: ["6 new franchise outlets across India", "7 B2C leads generated in one month", "75% conversion rate from qualified leads to consultations", "20% growth in high-ticket customer acquisitions"],
    logo: benzovilleLogo,
    logoSize: "wide",
    platforms: ["Meta Ads", "Google Ads"],
  },
  {
    name: "Hosper",
    industry: "real-estate",
    services: ["performance"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Performance marketing for real estate development brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: hosperLogo,
    logoSize: "square",
    comingSoon: true,
  },
  {
    name: "Trilig Energy",
    industry: "energy",
    services: ["performance"],
    metric: "1000+ Leads",
    result: "25 Solar Plants Installed",
    desc: "Precision-targeted lead funnels for a renewable energy brand — solar panels & CBG plant solutions.",
    challenge: "Relatively new brand in renewable energy, needed to position itself as credible and authoritative against established players.",
    strategy: "Precision-targeted Meta & Google lead funnels. Story-driven creative advertisements + proof-based retargeting.",
    results: ["1000+ high-quality leads in 4 months", "Lead costs as low as ₹70", "149 high-ticket leads (₹1Cr–₹10Cr range)", "25 solar plants installed", "3 CBG projects completed", "5% lead-to-installation conversion rate"],
    logo: triligEnergyLogo,
    logoSize: "square",
    platforms: ["Meta Ads", "Google Ads"],
  },
  {
    name: "Biut",
    industry: "beauty-wellness",
    services: ["performance", "social-media"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Digital marketing for beauty & wellness brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: biutLogo,
    logoSize: "wide",
    comingSoon: true,
  },
  {
    name: "Utazzo Holidays",
    industry: "travel",
    services: ["performance", "social-media"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Performance & social media marketing for holiday travel brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: utaazHolidayLogo,
    logoSize: "wide",
    comingSoon: true,
  },
  {
    name: "Khyaath Rituals",
    industry: "beauty-wellness",
    services: ["social-media", "influencer"],
    metric: "Coming Soon",
    result: "Case Study Loading",
    desc: "Social media & influencer marketing for premium beauty rituals brand.",
    challenge: "Details coming soon.",
    strategy: "Details coming soon.",
    results: ["Case study in progress"],
    logo: khyaathLogo,
    logoSize: "wide",
    comingSoon: true,
  },
];

// Notable brands (text-only)
const notableBrands = ["Flipkart", "OLAPLEX", "Kevin Murphy", "Bill & Melinda Gates Foundation", "Clinton Health Access Initiative", "Andersen Global", "Radio Mirchi", "Sunburn", "Rica Italy", "Amazon"];

// ── Image Gallery Component ──
const ImageGallery = ({ images }: { images: string[] }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  return (
    <>
      <div className="flex gap-2 flex-wrap mt-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setOpen(true); }}
            className="h-16 w-24 md:h-20 md:w-28 rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors bg-muted"
          >
            <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-2 bg-background/95 backdrop-blur-xl">
          <DialogTitle className="sr-only">Image preview</DialogTitle>
          <div className="relative flex items-center justify-center min-h-[300px]">
            <img
              src={images[current]}
              alt={`Screenshot ${current + 1}`}
              className="max-h-[70vh] w-auto rounded-lg"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
                  className="absolute left-2 p-2 rounded-full bg-background/80 border border-border/50 hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrent((p) => (p + 1) % images.length)}
                  className="absolute right-2 p-2 rounded-full bg-background/80 border border-border/50 hover:bg-muted transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-1">
            {current + 1} / {images.length}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

// ── Main Page ──
const Clients = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>("all");
  const [activeService, setActiveService] = useState<ServiceType | "all">("all");

  const usedIndustries = Array.from(new Set(clients.map((c) => c.industry)));
  const usedServices: ServiceType[] = ["performance", "influencer", "seo", "social-media"];

  const filtered = clients.filter((c) => {
    const matchIndustry = activeIndustry === "all" || c.industry === activeIndustry;
    const matchService = activeService === "all" || c.services.includes(activeService);
    return matchIndustry && matchService;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <DarkHero>
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-background/10 border border-background/10 rounded-full px-4 py-1.5 text-sm font-medium">
            <Building2 className="h-3.5 w-3.5" /> Our Work
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Brands We've <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">Helped Scale</span>
          </h1>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            From D2C startups to enterprise brands like dss+ (DuPont) and Starbucks — explore real results by industry or service.
          </p>
        </div>
      </DarkHero>

      {/* Notable Brands Strip */}
      <section className="py-10 border-b border-border/50">
        <div className="container-wide">
          <Reveal>
            <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
              We've also worked with
            </p>
            <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
              {notableBrands.map((brand) => (
                <span key={brand} className="font-heading font-bold text-sm md:text-base text-muted-foreground/70">{brand}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 border-b border-border/50 sticky top-16 z-30 bg-background/80 backdrop-blur-lg">
        <div className="container-tight space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mr-2">Service:</span>
            <button
              onClick={() => setActiveService("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${activeService === "all" ? "bg-primary text-primary-foreground border-primary" : "bg-muted/50 border-border/50 hover:bg-muted"}`}
            >
              All
            </button>
            {usedServices.map((s) => (
              <button
                key={s}
                onClick={() => setActiveService(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${activeService === s ? "bg-primary text-primary-foreground border-primary" : "bg-muted/50 border-border/50 hover:bg-muted"}`}
              >
                {serviceLabels[s]}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mr-2">Industry:</span>
            <button
              onClick={() => setActiveIndustry("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${activeIndustry === "all" ? "bg-foreground text-background border-foreground" : "bg-muted/50 border-border/50 hover:bg-muted"}`}
            >
              All
            </button>
            {usedIndustries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${activeIndustry === ind ? "bg-foreground text-background border-foreground" : "bg-muted/50 border-border/50 hover:bg-muted"}`}
              >
                {industryLabels[ind] || ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Cards Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="mb-4 text-sm text-muted-foreground">
            Showing {filtered.length} of {clients.length} case studies
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((client, i) => (
              <Reveal key={client.name} delay={Math.min(i * 0.03, 0.3)}>
                <div className={`rounded-xl border border-border/50 bg-card shadow-card overflow-hidden h-full flex flex-col ${client.comingSoon ? "opacity-75" : ""}`}>
                  {/* Header with logo inline */}
                  <div className="px-6 pt-6 pb-4 space-y-3">
                    <div className="flex items-start gap-4">
                      {/* Logo */}
                      {client.logo && (
                        <div className={`rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center ${
                          client.logoSize === "wide" ? "h-12 w-24 md:h-14 md:w-28 px-2" :
                          client.logoSize === "tall" ? "h-16 w-14 md:h-18 md:w-16 p-1.5" :
                          client.logoSize === "square" ? "h-14 w-14 md:h-16 md:w-16 p-2" :
                          "h-14 w-14 md:h-16 md:w-16 p-2"
                        }`}>
                          <img
                            src={client.logo}
                            alt={`${client.name} logo`}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      )}
                      {/* Name + industry */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-lg md:text-xl font-heading font-bold leading-tight">{client.name}</h3>
                            <span className="text-xs text-muted-foreground">{industryLabels[client.industry] || client.industry}</span>
                          </div>
                          {!client.comingSoon && (
                            <span className="text-xl md:text-2xl font-heading font-bold text-primary whitespace-nowrap">{client.metric}</span>
                          )}
                        </div>
                        {client.comingSoon && (
                          <span className="inline-block mt-1.5 text-[10px] font-medium text-muted-foreground bg-muted/50 rounded-full px-2.5 py-0.5 border border-border/50">
                            Case study coming soon
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Service tags */}
                    <div className="flex gap-1.5 flex-wrap">
                      {client.services.map((s) => (
                        <span key={s} className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${serviceColors[s]}`}>
                          {serviceLabels[s]}
                        </span>
                      ))}
                      {!client.comingSoon && (
                        <span className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                          {client.result}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Body */}
                  <div className="px-6 pb-6 flex-1 space-y-4">
                    <p className="text-sm text-muted-foreground">{client.desc}</p>

                    {!client.comingSoon && (
                      <>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-heading font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1">Challenge</h4>
                            <p className="text-sm">{client.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1">Strategy</h4>
                            <p className="text-sm">{client.strategy}</p>
                          </div>
                        </div>

                        {/* Platforms used */}
                        {client.platforms && client.platforms.length > 0 && (
                          <div>
                            <h4 className="font-heading font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-2">Platforms</h4>
                            <div className="flex items-center gap-3 flex-wrap">
                              {client.platforms.map((p) => (
                                platformLogoMap[p] ? (
                                  <div key={p} className="flex items-center gap-1.5 bg-muted/50 rounded-full px-2.5 py-1 border border-border/50">
                                    <img src={platformLogoMap[p]} alt={p} className="h-4 w-4 object-contain" loading="lazy" />
                                    <span className="text-[10px] font-medium text-muted-foreground">{p}</span>
                                  </div>
                                ) : (
                                  <span key={p} className="text-[10px] font-medium text-muted-foreground bg-muted/50 rounded-full px-2.5 py-1 border border-border/50">{p}</span>
                                )
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Results */}
                        <div>
                          <h4 className="font-heading font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-2">Results</h4>
                          <div className="space-y-1.5">
                            {client.results.map((r, j) => (
                              <div key={j} className="flex items-start gap-2 p-2.5 rounded-lg bg-primary/5 border border-primary/10">
                                <TrendingUp className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-xs font-medium">{r}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Image Gallery */}
                        {client.images && client.images.length > 0 && (
                          <ImageGallery images={client.images} />
                        )}
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg font-heading font-semibold">No case studies match your filters</p>
              <p className="text-sm mt-2">Try adjusting the service or industry filter above.</p>
            </div>
          )}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 bg-surface-warm border-t border-border/50">
        <div className="container-tight">
          <Reveal>
            <div className="text-center space-y-6">
              <h3 className="text-xl font-heading font-bold">Platforms We Advertise On</h3>
              <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
                {platformLogos.map((platform) => (
                  <div key={platform.alt} className="flex flex-col items-center gap-2 group">
                    <img
                      src={platform.src}
                      alt={platform.alt}
                      className="h-10 md:h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-tight text-center space-y-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Want Results Like These?</h2>
            <p className="text-background/70 max-w-xl mx-auto">
              We build performance systems, not templates. Let's discuss what growth looks like for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Link to="/book-call">
                <Button variant="hero" size="xl">
                  Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/audit">
                <Button variant="hero-outline" size="xl">
                  Get a Free Audit
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
