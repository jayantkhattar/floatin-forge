import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Building2, ShoppingBag, GraduationCap, Home, Stethoscope, Utensils, Briefcase, Smartphone, TrendingUp } from "lucide-react";

const industries = [
  {
    label: "E-commerce & D2C",
    value: "ecommerce",
    icon: ShoppingBag,
    clients: [
      {
        name: "StyleKart",
        metric: "₹2.4Cr Revenue",
        result: "3.2x ROAS",
        desc: "Scaled from ₹3L to ₹25L monthly ad spend while maintaining profitable returns.",
        challenge: "Low ROAS at 1.4x with unstructured campaigns and poor creative testing.",
        strategy: "Rebuilt campaign structure, launched creative testing system, optimized catalog ads.",
        results: ["ROAS improved from 1.4x to 3.2x", "Monthly revenue grew from ₹18L to ₹2.4Cr", "CAC reduced by 45%", "AOV increased by 22%"],
      },
      {
        name: "TrendWear",
        metric: "₹1.8Cr Revenue",
        result: "4.5x ROAS",
        desc: "Catalog ads, dynamic retargeting, and LTV optimization for fashion brand.",
        challenge: "Inconsistent ad performance with no systematic creative testing or retargeting.",
        strategy: "Dynamic product ads, audience segmentation, LTV-based bidding strategy.",
        results: ["ROAS scaled to 4.5x", "Revenue hit ₹1.8Cr/month", "Repeat purchase rate up 30%", "Ad spend efficiency improved 60%"],
      },
    ],
  },
  {
    label: "Education & EdTech",
    value: "education",
    icon: GraduationCap,
    clients: [
      {
        name: "LearnPro Academy",
        metric: "₹120 → ₹38 CPL",
        result: "68% Lower CPL",
        desc: "Rebuilt lead funnel with landing pages, WhatsApp automation, and retargeting.",
        challenge: "High CPL of ₹120, poor lead quality, no follow-up automation.",
        strategy: "New landing pages, WhatsApp automation, lead scoring, and retargeting sequences.",
        results: ["CPL dropped from ₹120 to ₹38", "Lead quality score improved by 55%", "Sales team close rate up 40%", "WhatsApp automation handled 70% of nurturing"],
      },
      {
        name: "SkillBridge",
        metric: "2000+ Leads/Month",
        result: "45% Lower CPL",
        desc: "Full-funnel strategy with Meta Ads, webinar funnels, and email sequences.",
        challenge: "Scattered campaigns with no funnel structure, high drop-off rates.",
        strategy: "Webinar-led funnel with Meta Ads, automated email nurturing, remarketing.",
        results: ["Lead volume crossed 2000/month", "CPL reduced by 45%", "Webinar attendance rate at 38%", "Email open rates above 40%"],
      },
    ],
  },
  {
    label: "Real Estate",
    value: "realestate",
    icon: Home,
    clients: [
      {
        name: "PrimeNest Realty",
        metric: "500+ Leads/Month",
        result: "5x Lead Volume",
        desc: "Systematized lead generation with Google + Meta + CRM integration.",
        challenge: "Generating only 100 leads/month with inconsistent quality and no CRM integration.",
        strategy: "Google + Meta dual-channel strategy with CRM integration and automated qualification.",
        results: ["Lead volume increased from 100 to 500+/month", "CRM integration saved 15 hrs/week", "Qualified lead rate improved by 60%", "Cost per qualified lead reduced by 35%"],
      },
      {
        name: "GreenVilla Homes",
        metric: "350+ Leads/Month",
        result: "280% More Leads",
        desc: "Hyperlocal targeting with Google + Facebook + WhatsApp follow-up system.",
        challenge: "Low lead volume with broad targeting, no hyperlocal strategy.",
        strategy: "Hyperlocal ad targeting, WhatsApp instant follow-up, CRM qualification flow.",
        results: ["Leads grew by 280%", "Cost per site visit reduced by 50%", "WhatsApp response rate at 72%", "Qualified leads up 3x"],
      },
    ],
  },
  {
    label: "Healthcare",
    value: "healthcare",
    icon: Stethoscope,
    clients: [
      {
        name: "MediCare Plus",
        metric: "200+ Appointments/Month",
        result: "52% Lower CPA",
        desc: "Patient acquisition system with Google Ads and appointment booking automation.",
        challenge: "High cost per patient acquisition, manual booking processes.",
        strategy: "Google Ads search campaigns, automated booking system, review management.",
        results: ["CPA reduced by 52%", "200+ appointments/month", "Online booking adoption at 80%", "Patient review score improved to 4.8"],
      },
    ],
  },
  {
    label: "Food & Hospitality",
    value: "food",
    icon: Utensils,
    clients: [
      {
        name: "FreshBowl",
        metric: "₹80L Revenue",
        result: "4.1x ROAS",
        desc: "Multi-location restaurant chain scaled online orders through performance ads.",
        challenge: "Fragmented marketing across locations, no unified performance tracking.",
        strategy: "Unified campaign structure, location-based targeting, delivery app integration.",
        results: ["ROAS hit 4.1x", "Monthly revenue reached ₹80L", "Online orders grew by 150%", "Per-location CAC reduced by 40%"],
      },
      {
        name: "UrbanBites",
        metric: "₹45L Revenue",
        result: "3.8x ROAS",
        desc: "Cloud kitchen brand scaled across 3 cities with performance marketing.",
        challenge: "New brand with zero presence, needed rapid market penetration.",
        strategy: "City-by-city launch strategy, influencer + performance hybrid, loyalty program.",
        results: ["Scaled to 3 cities in 4 months", "3.8x ROAS achieved", "Monthly revenue at ₹45L", "Repeat order rate at 35%"],
      },
    ],
  },
  {
    label: "B2B & SaaS",
    value: "b2b",
    icon: Briefcase,
    clients: [
      {
        name: "CloudStack SaaS",
        metric: "150 SQLs/Month",
        result: "3x Demo Bookings",
        desc: "LinkedIn + Google Ads funnel with automated lead scoring and nurturing.",
        challenge: "Low demo bookings, no structured lead qualification or scoring.",
        strategy: "LinkedIn Ads targeting, Google search for intent, CRM lead scoring, automated nurture.",
        results: ["Demo bookings tripled", "150 SQLs/month", "Sales cycle shortened by 20%", "LinkedIn CTR above 2.5%"],
      },
      {
        name: "DataSync Pro",
        metric: "₹2Cr Pipeline",
        result: "4x Pipeline Growth",
        desc: "ABM strategy with LinkedIn Ads, content syndication, and CRM integration.",
        challenge: "Enterprise sales pipeline stagnant, relying solely on outbound.",
        strategy: "Account-based marketing, LinkedIn thought leadership, intent-based targeting.",
        results: ["Pipeline grew 4x to ₹2Cr", "ABM engagement rate at 15%", "Inbound share of pipeline went from 10% to 45%", "Average deal size increased 25%"],
      },
    ],
  },
  {
    label: "Apps & Tech",
    value: "tech",
    icon: Smartphone,
    clients: [
      {
        name: "FitTech App",
        metric: "50K+ Installs/Month",
        result: "60% Lower CPI",
        desc: "App install campaigns with creative testing and audience optimization.",
        challenge: "High cost per install, poor retention, no systematic creative testing.",
        strategy: "UAC + Meta app install campaigns, creative testing system, onboarding optimization.",
        results: ["CPI reduced by 60%", "50K+ installs/month", "Day-7 retention improved by 25%", "Creative win rate doubled"],
      },
    ],
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
            <Building2 className="h-3.5 w-3.5" /> Our Work
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Brands We've <span className="text-gradient-primary">Helped Scale</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From D2C startups to enterprise brands — explore results by industry.
          </p>
        </div>
      </section>

      {/* Industry Accordions */}
      <section className="section-padding">
        <div className="container-tight">
          <Accordion type="multiple" className="space-y-4">
            {industries.map((industry) => (
              <AccordionItem
                key={industry.value}
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
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-warm">
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
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
