import { useState, useEffect } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { DarkHero } from "@/components/layout/DarkHero";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { ClientLogoMarquee } from "@/components/sections/ClientLogoMarquee";
import { CalculatorShowcase } from "@/components/sections/CalculatorShowcase";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CaseStudyDialog } from "@/components/sections/CaseStudyDialog";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, ArrowLeft, CheckCircle2, Building2, ShoppingBag, FileText, Calendar, ShieldCheck, Sparkles, Clock, Search, Megaphone, Map, BarChart3, Plus, Minus } from "lucide-react";
import { sendLead } from "@/lib/leadCapture";
import { clientCases, type ClientCase } from "@/data/caseStudies";
import founderImg from "@/assets/founder-jayant.jpeg";
import googlePartnerBadge from "@/assets/partners/google_partner.png";
import metaPartnerBadge from "@/assets/partners/meta_partner.png";

const heroMetrics = [
  { value: 185, prefix: "₹", suffix: "Cr+", label: "Revenue Generated" },
  { value: 200, suffix: "+", label: "Brands Audited" },
  { value: 8.2, suffix: "x", decimals: 1, label: "Best ROAS" },
];

const deliverables = [
  { icon: Search, title: "Ad Account Audit", desc: "Wasted spend, structure issues, low-performing assets — flagged with priority." },
  { icon: BarChart3, title: "Funnel Leak Analysis", desc: "Where visitors drop off and how much it's costing you per month." },
  { icon: Megaphone, title: "Creative Review", desc: "What's working, what's stale, and what to test next." },
  { icon: Search, title: "Competitor Scan", desc: "What top competitors are running and how to out-position them." },
  { icon: Map, title: "90-Day Roadmap", desc: "Top 3 levers, in priority order, with channel mix and budget." },
];

const howItWorks = [
  { title: "Submit your details", desc: "5-minute form — context on your business, channels and challenge." },
  { title: "We deep-dive in 48 hrs", desc: "Our team audits accounts, funnel, creative and competitors." },
  { title: "Live strategy call", desc: "Walkthrough of findings + 90-day roadmap. Yours to keep." },
];

const faqs = [
  { q: "Is the audit really free?", a: "Yes — no card, no commitment. We use it as a way to demonstrate our process and quality of thinking." },
  { q: "Will you need access to my ad accounts?", a: "Yes. After you submit, we'll book a quick handoff call to securely take view-only access. Your accounts stay yours." },
  { q: "How long does it take?", a: "48 hours from access. The strategy walkthrough call is scheduled in the same week." },
  { q: "What if my business is small or just starting?", a: "We still help — many of our biggest wins were with brands spending under ₹2L/month at the start." },
  { q: "Is my data confidential?", a: "Always. We sign an NDA on request and treat all data as privileged. Access is removed if we don't end up working together." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-heading font-semibold">{q}</span>
        {open ? <Minus className="h-4 w-4 text-primary flex-shrink-0" /> : <Plus className="h-4 w-4 text-primary flex-shrink-0" />}
      </button>
      {open && <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
};

const Audit = () => {
  const [step, setStep] = useState(0);
  const [showCalDialog, setShowCalDialog] = useState(false);
  const [selectedCase, setSelectedCase] = useState<ClientCase | null>(null);
  const [caseDialogOpen, setCaseDialogOpen] = useState(false);
  const [data, setData] = useState({
    businessType: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    monthlySpend: "",
    currentChannels: [] as string[],
    biggestChallenge: "",
    monthlyRevenue: "",
  });

  // Featured case strip (top 3 by ROAS-ish: evolved-hair, snapzo, uttam-toyota)
  const featuredCases = ["evolved-hair", "snapzo", "uttam-toyota"]
    .map((s) => clientCases.find((c) => c.slug === s))
    .filter(Boolean) as ClientCase[];

  const updateField = (key: string, value: string) => setData({ ...data, [key]: value });
  const toggleChannel = (ch: string) => {
    const current = data.currentChannels;
    setData({
      ...data,
      currentChannels: current.includes(ch) ? current.filter((c) => c !== ch) : [...current, ch],
    });
  };

  const canProceed = () => {
    if (step === 0) return data.businessType !== "";
    if (step === 1) return data.name && data.email && data.phone;
    if (step === 2) return data.monthlySpend !== "";
    if (step === 3) return data.biggestChallenge !== "";
    return true;
  };

  // Load Cal.com popup script once
  useEffect(() => {
    if ((window as any).Cal && (window as any).Cal.ns?.["audit-handoff"]) return;
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://cal.floatin.in/embed/embed.js", "init");
    const Cal = (window as any).Cal;
    Cal("init", "audit-handoff", { origin: "https://cal.floatin.in" });
  }, []);

  useEffect(() => {
    if (!showCalDialog) return;
    const t = setTimeout(() => {
      const Cal = (window as any).Cal;
      if (!Cal?.ns?.["audit-handoff"]) return;
      try {
        Cal.ns["audit-handoff"]("inline", {
          elementOrSelector: "#audit-cal-inline",
          config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
          calLink: "jayantkhattar/consultation",
        });
        Cal.ns["audit-handoff"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } catch {}
    }, 100);
    return () => clearTimeout(t);
  }, [showCalDialog]);

  const handleSubmit = () => {
    sendLead({
      source: "audit",
      name: data.name,
      email: data.email,
      phone: data.phone,
      data: {
        businessType: data.businessType,
        website: data.website,
        monthlySpend: data.monthlySpend,
        currentChannels: data.currentChannels,
        biggestChallenge: data.biggestChallenge,
        monthlyRevenue: data.monthlyRevenue,
      },
    });
    setShowCalDialog(true);
  };

  const totalSteps = 5;

  return (
    <div className="min-h-screen">
      <SEO
        title="Free Growth Audit — Get Yours in 48 Hours | Floatin"
        description="Get a free, personalised growth audit from Floatin. We'll review your ads, funnel, and CRM — and identify the top 3 levers for growth."
        path="/audit"
        keywords={["free marketing audit", "growth audit", "performance marketing audit", "ad account audit"]}
      />
      <Navbar />

      <DarkHero>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            {/* Founder badge */}
            <div className="inline-flex items-center gap-3 bg-background/10 border border-background/15 rounded-full pl-1.5 pr-4 py-1.5">
              <img src={founderImg} alt="Jayant Khattar" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-xs md:text-sm text-background/80">
                Audit personally led by <span className="font-semibold text-background">Jayant Khattar</span>
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              We'll find <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">wasted spend</span> in your ad accounts — in 48 hours.
            </h1>
            <p className="text-background/70">
              A free, no-pitch deep-dive into your ads, funnel and creative. You'll walk away with a 90-day roadmap of the top 3 levers — yours to keep.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-background/10 border border-background/15 rounded-full px-3 py-1 text-xs font-medium">
                <Sparkles className="h-3 w-3" /> ₹0
              </span>
              <span className="inline-flex items-center gap-1.5 bg-background/10 border border-background/15 rounded-full px-3 py-1 text-xs font-medium">
                <Clock className="h-3 w-3" /> 48-hour turnaround
              </span>
              <span className="inline-flex items-center gap-1.5 bg-background/10 border border-background/15 rounded-full px-3 py-1 text-xs font-medium">
                <ShieldCheck className="h-3 w-3" /> Zero-pitch promise
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl border border-background/10 p-8 text-center space-y-4">
              <FileText className="h-16 w-16 text-background/30 mx-auto" />
              <div>
                <p className="font-heading font-semibold text-lg">Your Custom Audit Report</p>
                <p className="text-sm text-background/50 mt-1">Delivered within 48 hours</p>
              </div>
              <div className="space-y-2 text-left text-sm text-background/60">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> Channel performance analysis</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> Funnel leak identification</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> Growth recommendations</div>
              </div>
            </div>
          </div>
        </div>
      </DarkHero>

      {/* Trust strip */}
      <section className="py-8 border-b border-border/50 bg-card">
        <div className="container-tight">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Officially recognised by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            <img src={googlePartnerBadge} alt="Google Partner" className="h-14 md:h-16 object-contain opacity-90" />
            <img src={metaPartnerBadge} alt="Meta Business Partner" className="h-14 md:h-16 object-contain opacity-90" />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding">
        <div className="container-tight">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                <Sparkles className="h-3 w-3" /> What's included
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">5 deliverables in your audit</h2>
              <p className="text-muted-foreground">Real analysis. Real recommendations. No copy-paste templates.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <div className="h-full bg-card rounded-2xl border border-border/50 p-6 shadow-card">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator showcase */}
      <CalculatorShowcase
        eyebrow="Warm up first"
        title="Run the numbers before your audit"
        description="See where your CPL and budget should land. We'll go deeper in your custom report."
      />

      {/* Hero metric counters */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
            {heroMetrics.map((m) => (
              <div key={m.label}>
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                </div>
                <p className="text-sm text-background/60 uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="section-padding">
        <div className="container-wide space-y-6">
          <Reveal>
            <p className="text-center text-base md:text-lg font-medium text-muted-foreground">
              Trusted by 200+ brands across India & beyond
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ClientLogoMarquee />
          </Reveal>
        </div>
      </section>

      {/* Audits that turned into results — case strip */}
      <section className="section-padding bg-surface-warm">
        <div className="container-wide">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                Audits that turned into this →
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Real outcomes from real audits</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <CaseStudyCard
                  client={c}
                  eager={i === 0}
                  onSelect={(cs) => { setSelectedCase(cs); setCaseDialogOpen(true); }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How the audit works */}
      <section className="section-padding">
        <div className="container-tight">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                How it works
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">3 steps. 48 hours. Done.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="h-full bg-card rounded-2xl border border-border/50 p-6 shadow-card">
                  <div className="font-heading font-bold text-3xl text-primary mb-3">0{i + 1}</div>
                  <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-step form */}
      <section id="audit-form" className="section-padding bg-surface-warm scroll-mt-20">
        <div className="container-tight max-w-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Start your audit now</h2>
              <p className="text-muted-foreground text-sm">Takes ~3 minutes. We'll email you within 48 hours.</p>
            </div>
          </Reveal>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Step {step + 1} of {totalSteps}</span>
              <span>{Math.round(((step + 1) / totalSteps) * 100)}% complete</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-card border border-border/50 p-8">
            {step === 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-heading font-bold">What type of business are you?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "leadgen", label: "Lead Generation", desc: "Services, B2B, real estate, education, etc.", icon: Building2 },
                    { value: "ecommerce", label: "E-commerce", desc: "D2C, online store, marketplace seller", icon: ShoppingBag },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => updateField("businessType", opt.value)}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        data.businessType === opt.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <opt.icon className={`h-6 w-6 mb-3 ${data.businessType === opt.value ? "text-primary" : "text-muted-foreground"}`} />
                      <div className="font-heading font-semibold">{opt.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h3 className="text-xl font-heading font-bold">Your contact details</h3>
                {[
                  { label: "Full Name", key: "name", placeholder: "Rahul Sharma", type: "text" },
                  { label: "Work Email", key: "email", placeholder: "rahul@company.com", type: "email" },
                  { label: "Phone", key: "phone", placeholder: "+91 98765 43210", type: "tel" },
                  { label: "Website (optional)", key: "website", placeholder: "https://yoursite.com", type: "url" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={(data as any)[field.key]}
                      onChange={(e) => updateField(field.key, e.target.value)}
                      className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h3 className="text-xl font-heading font-bold">Your current ad spend</h3>
                <div className="space-y-3">
                  {["Under ₹50K/month", "₹50K - ₹2L/month", "₹2L - ₹5L/month", "₹5L - ₹10L/month", "₹10L+/month", "Not running ads yet"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => updateField("monthlySpend", opt)}
                      className={`w-full p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                        data.monthlySpend === opt ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/30"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Channels you're currently using</label>
                  <div className="flex flex-wrap gap-2">
                    {["Google Ads", "Meta Ads", "LinkedIn Ads", "WhatsApp", "Email", "SEO", "Other"].map((ch) => (
                      <button
                        key={ch}
                        onClick={() => toggleChannel(ch)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          data.currentChannels.includes(ch) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h3 className="text-xl font-heading font-bold">What's your biggest challenge?</h3>
                <div className="space-y-3">
                  {[
                    "High cost per lead / acquisition",
                    "Low conversion rates",
                    "Poor lead quality",
                    "Scaling profitably",
                    "No automation / manual follow-ups",
                    "Don't know what's working",
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => updateField("biggestChallenge", opt)}
                      className={`w-full p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                        data.biggestChallenge === opt ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/30"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-heading font-bold">Your audit request summary</h3>
                <div className="space-y-3">
                  {[
                    { label: "Business Type", value: data.businessType === "leadgen" ? "Lead Generation" : "E-commerce" },
                    { label: "Name", value: data.name },
                    { label: "Email", value: data.email },
                    { label: "Monthly Spend", value: data.monthlySpend },
                    { label: "Channels", value: data.currentChannels.join(", ") || "None selected" },
                    { label: "Biggest Challenge", value: data.biggestChallenge },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 text-center space-y-2">
                  <Calendar className="h-8 w-8 text-primary mx-auto" />
                  <p className="font-heading font-semibold">One quick step before we start your audit</p>
                  <p className="text-sm text-muted-foreground">
                    To run your audit, our team needs access to your ad accounts. Book a 15-minute handoff call so we can walk through access together — then we deliver your custom audit within 48 hours.
                  </p>
                </div>
                <Button variant="hero" size="xl" className="w-full" onClick={handleSubmit}>
                  Submit & Book Access Call <ArrowRight className="ml-1" />
                </Button>
              </div>
            )}

            {step < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
                <Button variant="ghost" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back
                </Button>
                <Button variant="default" onClick={() => setStep(step + 1)} disabled={!canProceed()}>
                  Next <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <Reveal>
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Quick answers about the audit</h2>
            </div>
          </Reveal>
          <div>
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface-warm">
        <div className="container-wide space-y-10">
          <Reveal>
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Founders Who Took the Audit</h2>
              <p className="text-muted-foreground">
                Real words from founders we've audited and grown — clarity, results, zero fluff.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialsMarquee />
          </Reveal>
        </div>
      </section>

      <CaseStudyDialog client={selectedCase} open={caseDialogOpen} onOpenChange={setCaseDialogOpen} />
      <Footer />

      {/* Post-submission Cal.com handoff dialog */}
      <Dialog open={showCalDialog} onOpenChange={setShowCalDialog}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle className="font-heading text-2xl">
              One last step — book your access handoff call
            </DialogTitle>
            <DialogDescription>
              Pick a 15-minute slot so our team can securely take access of your ad accounts.
              Your custom audit is delivered within 48 hours of this call.
            </DialogDescription>
          </DialogHeader>
          <div
            id="audit-cal-inline"
            className="w-full"
            style={{ minHeight: 640, maxHeight: "75vh", overflow: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Audit;
