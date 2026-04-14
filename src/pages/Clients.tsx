import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DarkHero } from "@/components/layout/DarkHero";
import { Reveal } from "@/components/ui/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Building2, ShoppingBag, GraduationCap, Home, Stethoscope, Utensils, Briefcase, Smartphone, TrendingUp, Globe, Factory, Search } from "lucide-react";

const industries = [
  {
    label: "E-commerce & D2C",
    value: "ecommerce",
    icon: ShoppingBag,
    clients: [
      {
        name: "Incenza",
        metric: "2.1x ROAS",
        result: "Profitable Scale",
        desc: "Scaled a premium incense stick brand with Meta Ads and creative testing.",
        challenge: "New D2C brand with zero online presence, needed profitable customer acquisition.",
        strategy: "Dynamic product ads, audience segmentation, creative testing system.",
        results: ["Achieved 2.1x ROAS", "Consistent profitable growth", "Strong brand recall built through creative"],
      },
      {
        name: "Mocemsa",
        metric: "736% Reach Increase",
        result: "5.3M Accounts Reached",
        desc: "Social media management for premium fragrance brand — massive organic growth.",
        challenge: "Low social media engagement and reach, no structured content strategy.",
        strategy: "Trend-based reels, structured content calendar, engagement-driven posting.",
        results: ["Accounts reached grew to 5.3M (+736%)", "Engagement up 1,116%", "Followers grew 35.7%", "Brand became a social-first fragrance name"],
      },
      {
        name: "Uneek",
        metric: "3.3M Reach",
        result: "29.8% Growth",
        desc: "Social media growth for fashion accessories brand with 29.7K followers.",
        challenge: "Plateau in social growth, needed fresh creative approach.",
        strategy: "Meme marketing, trend-jacking, community engagement.",
        results: ["3.3M accounts reached", "29.8% reach increase", "37K accounts engaged", "Strong community built"],
      },
      {
        name: "Chic Collezione",
        metric: "3x ROAS",
        result: "Canvas Art Sales",
        desc: "Performance marketing for canvas wall art e-commerce store.",
        challenge: "Needed profitable scaling for a niche product category.",
        strategy: "Creative-first approach with lifestyle imagery, targeted interest audiences.",
        results: ["Achieved 3x ROAS", "Scaled ad spend profitably", "Strong creative framework established"],
      },
    ],
  },
  {
    label: "Automotive & Dealership",
    value: "automotive",
    icon: Factory,
    clients: [
      {
        name: "Uttam Toyota",
        metric: "₹10Cr+ Revenue",
        result: "4,942 Leads Generated",
        desc: "Google Ads lead generation for one of Delhi NCR's largest Toyota dealerships.",
        challenge: "Needed high-volume qualified leads across multiple locations in Delhi, Noida, Gurgaon.",
        strategy: "Google Search + Display campaigns, landing page optimization, CRM integration.",
        results: ["₹5.34L ad spend → ₹10Cr+ revenue", "4,942 qualified leads generated", "61,615 clicks at ₹8.68 CPC", "Conversion rate of 8.02%"],
      },
    ],
  },
  {
    label: "International Clients",
    value: "international",
    icon: Globe,
    clients: [
      {
        name: "Evolved Hair Restoration (Australia)",
        metric: "10x ROAS",
        result: "40K AUD/Month Revenue",
        desc: "Full-funnel digital strategy for a Perth-based hair transplant clinic.",
        challenge: "Saturated market with high CPCs, freelancers couldn't scale beyond basic campaigns.",
        strategy: "Magic Lantern lead nurturing technique on HubSpot, SEO + Google Ads, multi-step content funnel.",
        results: ["10x ROAS — 4K AUD spend → 40K AUD revenue/month", "25+ keywords ranking #1 on Google", "Full-funnel automation on HubSpot", "Hired another trichologist due to demand"],
      },
    ],
  },
  {
    label: "Healthcare & Biotech",
    value: "healthcare",
    icon: Stethoscope,
    clients: [
      {
        name: "Calitech Biotechnologies",
        metric: "₹40L+ Revenue",
        result: "36x ROI",
        desc: "Lead generation for medical oxygen supply systems (MOSS) manufacturer.",
        challenge: "Niche B2B product, needed to reach hospital decision-makers cost-effectively.",
        strategy: "Google Ads + Facebook Lead Forms, targeted hospital/healthcare audiences, social media content.",
        results: ["₹1.1L invested → ₹40L+ revenue", "Onboarded a new distributor", "Strong brand awareness in healthcare sector", "Social media authority established"],
      },
    ],
  },
  {
    label: "Enterprise & Safety",
    value: "enterprise",
    icon: Briefcase,
    clients: [
      {
        name: "DuPont Sustainable Solutions (dss+)",
        metric: "LinkedIn + Google Ads",
        result: "Global EHS Campaigns",
        desc: "Digital marketing for world's #1 EHS consultancy — safety e-learning modules.",
        challenge: "Enterprise B2B with long sales cycles, needed digital presence in India market.",
        strategy: "LinkedIn thought leadership, Google Ads for safety training keywords, content-driven lead gen.",
        results: ["Successfully launched India digital campaigns", "Agency recognized at dss+ corporate summit", "Multi-platform campaign execution (Google, LinkedIn, Facebook)", "Internal creative campaigns for Amazon partnership"],
      },
      {
        name: "P.K. Marketing Co",
        metric: "Lead Generation",
        result: "Paper Import Leads",
        desc: "Digital campaigns for India's leading paper importer with 600+ clients.",
        challenge: "Traditional B2B business needed online lead generation.",
        strategy: "LinkedIn + Facebook Ads targeting industry buyers, landing page optimization.",
        results: ["Consistent lead flow established", "Online presence built from scratch", "3000+ tonnes monthly distribution supported by digital"],
      },
    ],
  },
  {
    label: "Agriculture & Food",
    value: "agriculture",
    icon: Utensils,
    clients: [
      {
        name: "Pluck & Eat Farms",
        metric: "400 → 1,400 Followers",
        result: "2.1x ROAS",
        desc: "Performance marketing + social media for hydroponic farming brand.",
        challenge: "New brand with low awareness, needed both D2C sales and B2B franchise leads.",
        strategy: "Social media growth, Meta Ads for both e-commerce and lead gen funnels.",
        results: ["Instagram followers grew from 400 to 1,400", "2.1x ROAS on e-commerce", "Franchise inquiry leads generated", "Community built around healthy eating"],
      },
      {
        name: "Nilofar Incense",
        metric: "Brand Launch",
        result: "Performance + Social",
        desc: "Full-stack digital launch for premium incense stick brand.",
        challenge: "New product launch in competitive category.",
        strategy: "Facebook + Instagram Ads, influencer content, social media management.",
        results: ["Successful market entry", "Brand awareness campaigns across Meta", "E-commerce channel established"],
      },
    ],
  },
  {
    label: "Apps & Tech",
    value: "tech",
    icon: Smartphone,
    clients: [
      {
        name: "OSnap (Uber for Photographers)",
        metric: "₹12/Lead",
        result: "843 Photographer Leads",
        desc: "Vendor acquisition campaign for India's photography marketplace app.",
        challenge: "Needed photographer onboarding at scale with minimal budget.",
        strategy: "Facebook conversion campaigns targeting photographers, optimized for lead form submissions.",
        results: ["₹12 cost per photographer lead", "843 leads from ₹10,729 spend", "60,416 reach achieved", "App install campaigns launched"],
      },
    ],
  },
  {
    label: "SEO & Organic",
    value: "seo",
    icon: Search,
    clients: [
      {
        name: "Evolved Hair Restoration (SEO)",
        metric: "25+ #1 Rankings",
        result: "₹5.43Cr Organic Revenue",
        desc: "Comprehensive SEO strategy that dominated competitive hair transplant keywords in Australia.",
        challenge: "Competing against established clinics in a high-CPC market (hair transplant Australia).",
        strategy: "On-page SEO, content strategy, backlink building, local SEO for Perth.",
        results: ["25+ keywords ranking #1 on Google", "172 first-page rankings across clients", "₹5.43Cr organic revenue generated", "92% client retention rate"],
      },
    ],
  },
];

// Notable brand logos
const notableBrands = ["Flipkart", "OLAPLEX", "Kevin Murphy", "Bill & Melinda Gates Foundation", "Clinton Health Access Initiative", "Andersen Global", "Radio Mirchi", "Sunburn", "Rica Italy", "Amazon"];

const Clients = () => {
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
            From D2C startups to enterprise brands like dss+ (DuPont) and Uttam Toyota — explore real results by industry.
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

      <section className="section-padding">
        <div className="container-tight">
          <Accordion type="multiple" className="space-y-4">
            {industries.map((industry, i) => (
              <Reveal key={industry.value} delay={i * 0.08}>
                <AccordionItem
                  value={industry.value}
                  className="bg-card rounded-xl border border-border/50 shadow-card overflow-hidden px-0"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <industry.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="font-heading font-semibold text-lg">{industry.label}</div>
                        <div className="text-sm text-muted-foreground">{industry.clients.length} client{industry.clients.length > 1 ? "s" : ""}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6 pt-2">
                      {industry.clients.map((client) => (
                        <div
                          key={client.name}
                          className="rounded-xl border border-border/50 bg-surface-warm p-6 md:p-8 space-y-5"
                        >
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-3xl md:text-4xl font-heading font-bold text-primary">{client.metric}</span>
                            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{client.result}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-heading font-bold">{client.name}</h3>
                          <p className="text-muted-foreground">{client.desc}</p>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Challenge</h4>
                                <p className="text-sm">{client.challenge}</p>
                              </div>
                              <div>
                                <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Strategy</h4>
                                <p className="text-sm">{client.strategy}</p>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Results</h4>
                              <div className="space-y-2">
                                {client.results.map((r, j) => (
                                  <div key={j} className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                    <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm font-medium">{r}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-10 bg-surface-warm border-t border-border/50">
        <div className="container-tight">
          <Reveal>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-heading font-bold">Platforms We Advertise On</h3>
              <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                {["Google Ads", "Meta (Facebook + Instagram)", "YouTube", "LinkedIn", "Snapchat", "Pinterest", "Amazon Ads", "Flipkart Ads", "Taboola/Outbrain"].map((p) => (
                  <span key={p} className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">{p}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <Reveal>
          <div className="container-tight text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Want Results Like These?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get a free growth audit and see how we can build a system that delivers for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/audit">
                <Button variant="hero" size="xl">
                  Get Free Growth Audit <ArrowRight className="ml-1" />
                </Button>
              </Link>
              <Link to="/book-call">
                <Button variant="hero-outline" size="xl">Book Strategy Call</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;