import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, ArrowUpRight, Building2, ShoppingBag, GraduationCap, Home, Stethoscope, Utensils, Briefcase, Smartphone } from "lucide-react";

const industries = [
  { label: "All", value: "all", icon: Building2 },
  { label: "E-commerce & D2C", value: "ecommerce", icon: ShoppingBag },
  { label: "Education & EdTech", value: "education", icon: GraduationCap },
  { label: "Real Estate", value: "realestate", icon: Home },
  { label: "Healthcare", value: "healthcare", icon: Stethoscope },
  { label: "Food & Hospitality", value: "food", icon: Utensils },
  { label: "B2B & SaaS", value: "b2b", icon: Briefcase },
  { label: "Apps & Tech", value: "tech", icon: Smartphone },
];

const clients = [
  { name: "StyleKart", industry: "ecommerce", result: "3.2x ROAS", desc: "Scaled from ₹3L to ₹25L monthly ad spend while maintaining profitable returns.", metric: "₹2.4Cr Revenue" },
  { name: "LearnPro Academy", industry: "education", result: "68% Lower CPL", desc: "Rebuilt lead funnel with landing pages, WhatsApp automation, and retargeting.", metric: "₹120 → ₹38 CPL" },
  { name: "PrimeNest Realty", industry: "realestate", result: "5x Lead Volume", desc: "Systematized lead generation with Google + Meta + CRM integration.", metric: "500+ Leads/Month" },
  { name: "FreshBowl", industry: "food", result: "4.1x ROAS", desc: "Multi-location restaurant chain scaled online orders through performance ads.", metric: "₹80L Revenue" },
  { name: "MediCare Plus", industry: "healthcare", result: "52% Lower CPA", desc: "Patient acquisition system with Google Ads and appointment booking automation.", metric: "200+ Appointments/Month" },
  { name: "CloudStack SaaS", industry: "b2b", result: "3x Demo Bookings", desc: "LinkedIn + Google Ads funnel with automated lead scoring and nurturing.", metric: "150 SQLs/Month" },
  { name: "TrendWear", industry: "ecommerce", result: "4.5x ROAS", desc: "Catalog ads, dynamic retargeting, and LTV optimization for fashion brand.", metric: "₹1.8Cr Revenue" },
  { name: "SkillBridge", industry: "education", result: "45% Lower CPL", desc: "Full-funnel strategy with Meta Ads, webinar funnels, and email sequences.", metric: "2000+ Leads/Month" },
  { name: "GreenVilla Homes", industry: "realestate", result: "280% More Leads", desc: "Hyperlocal targeting with Google + Facebook + WhatsApp follow-up system.", metric: "350+ Leads/Month" },
  { name: "FitTech App", industry: "tech", result: "60% Lower CPI", desc: "App install campaigns with creative testing and audience optimization.", metric: "50K+ Installs/Month" },
  { name: "UrbanBites", industry: "food", result: "3.8x ROAS", desc: "Cloud kitchen brand scaled across 3 cities with performance marketing.", metric: "₹45L Revenue" },
  { name: "DataSync Pro", industry: "b2b", result: "4x Pipeline Growth", desc: "ABM strategy with LinkedIn Ads, content syndication, and CRM integration.", metric: "₹2Cr Pipeline" },
];

const Clients = () => {
  const [activeIndustry, setActiveIndustry] = useState("all");

  const filtered = activeIndustry === "all" ? clients : clients.filter(c => c.industry === activeIndustry);

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
            From D2C startups to enterprise brands — we build growth systems that deliver measurable results across every industry.
          </p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 border-b border-border/50 sticky top-16 z-40 bg-background/95 backdrop-blur-sm">
        <div className="container-wide">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {industries.map((ind) => (
              <button
                key={ind.value}
                onClick={() => setActiveIndustry(ind.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeIndustry === ind.value
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <ind.icon className="h-4 w-4" />
                {ind.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((client) => {
              const industry = industries.find(i => i.value === client.industry);
              return (
                <div
                  key={client.name}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border/50 hover:border-primary/20"
                >
                  {/* Placeholder visual area */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center relative">
                    <span className="text-4xl font-heading font-bold text-primary/20">{client.name.charAt(0)}</span>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {industry && <industry.icon className="h-3 w-3" />}
                        {industry?.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="text-2xl font-heading font-bold text-primary">{client.metric}</div>
                    <h3 className="font-heading font-semibold text-lg">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.desc}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full">{client.result}</span>
                      <span className="text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        View details <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No clients in this category yet. Check back soon!</p>
            </div>
          )}
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
